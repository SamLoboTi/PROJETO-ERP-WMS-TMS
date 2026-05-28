#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Validate the source CSV files used by the dashboard."""

import sys

import pandas as pd

from logimax.analytics import calculate_fill_rate, calculate_kpis
from logimax.data_sources import LogisticsData

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")


def main():
    print("=" * 80)
    print("TESTE DE DADOS DO DASHBOARD LOGIMAX")
    print("=" * 80)

    print("\n1. Carregando dados...")
    try:
        df_erp = pd.read_csv("ERP_Pedidos.csv", encoding="utf-8")
        df_tms = pd.read_csv("TMS_Transporte.csv", encoding="utf-8")
        df_wms = pd.read_csv("WMS_Estoque.csv", encoding="utf-8")
        print("[OK] Dados carregados com sucesso!")
    except Exception as exc:
        print(f"[ERRO] Erro ao carregar dados: {exc}")
        raise SystemExit(1)

    required_erp = {"order_id", "data_pedido", "status_pedido", "quantidade_pedida", "valor_pedido"}
    required_tms = {"order_id", "data_envio", "data_entrega", "modal", "custo_transporte", "distancia_km"}
    required_wms = {"product_id", "data_separacao", "quantidade_separada", "estoque_final", "inventario_real"}

    missing = {
        "ERP_Pedidos.csv": required_erp - set(df_erp.columns),
        "TMS_Transporte.csv": required_tms - set(df_tms.columns),
        "WMS_Estoque.csv": required_wms - set(df_wms.columns),
    }
    missing = {name: cols for name, cols in missing.items() if cols}
    if missing:
        print(f"[ERRO] Colunas obrigatorias ausentes: {missing}")
        raise SystemExit(1)

    df_erp["data_pedido"] = pd.to_datetime(df_erp["data_pedido"], errors="coerce")
    df_tms["data_envio"] = pd.to_datetime(df_tms["data_envio"], errors="coerce")
    df_tms["data_entrega"] = pd.to_datetime(df_tms["data_entrega"], errors="coerce")

    if df_erp["data_pedido"].isna().any() or df_tms["data_entrega"].isna().any():
        print("[ERRO] Existem datas invalidas nos CSVs.")
        raise SystemExit(1)

    print("\n2. STATUS DE PEDIDOS")
    print("-" * 80)
    status_count = df_erp["status_pedido"].value_counts()
    print(status_count)

    known_status = {"aprovado", "emitido", "cancelado"}
    actual_status = set(df_erp["status_pedido"].str.lower().unique())
    unexpected_status = actual_status - known_status
    if unexpected_status:
        print(f"[ERRO] Status inesperados: {sorted(unexpected_status)}")
        raise SystemExit(1)

    aprovado = len(df_erp[df_erp["status_pedido"].str.lower() == "aprovado"])
    emitido = len(df_erp[df_erp["status_pedido"].str.lower() == "emitido"])
    cancelado = len(df_erp[df_erp["status_pedido"].str.lower() == "cancelado"])
    total = aprovado + emitido + cancelado
    assert total == len(df_erp), "Existem pedidos fora do contrato esperado"

    print("\nResumo:")
    print(f"  Aprovado:  {aprovado:>6} ({(aprovado / total) * 100:.1f}%)")
    print(f"  Emitido:   {emitido:>6} ({(emitido / total) * 100:.1f}%)")
    print(f"  Cancelado: {cancelado:>6} ({(cancelado / total) * 100:.1f}%)")
    print(f"  TOTAL:     {total:>6} (100.0%)")

    print("\n3. LEAD TIME")
    print("-" * 80)
    df_merged = pd.merge(
        df_erp[["order_id", "data_pedido"]],
        df_tms[["order_id", "data_entrega"]],
        on="order_id",
        how="inner",
    )
    df_merged["lead_time"] = (df_merged["data_entrega"] - df_merged["data_pedido"]).dt.days
    if df_merged["lead_time"].isna().any():
        print("[ERRO] Lead time contem valores nulos.")
        raise SystemExit(1)

    lead_time_medio = df_merged["lead_time"].mean()
    lead_time_min = df_merged["lead_time"].min()
    lead_time_max = df_merged["lead_time"].max()
    print(f"  Lead Time Medio: {lead_time_medio:.2f} dias")
    print(f"  Lead Time Minimo: {lead_time_min:.0f} dias")
    print(f"  Lead Time Maximo: {lead_time_max:.0f} dias")

    print("\n4. CUSTO LOGISTICO POR MODAL")
    print("-" * 80)
    if not df_tms["custo_transporte"].ge(0).all():
        print("[ERRO] Existem custos de transporte negativos.")
        raise SystemExit(1)

    custo_modal = df_tms.groupby("modal").agg(
        {"custo_transporte": ["sum", "mean", "count"], "distancia_km": ["mean", "min", "max"]}
    )
    print(custo_modal)

    print("\nResumo por Modal:")
    for modal in df_tms["modal"].unique():
        df_modal = df_tms[df_tms["modal"] == modal]
        custo_total = df_modal["custo_transporte"].sum()
        distancia_media = df_modal["distancia_km"].mean()
        percentual = (custo_total / df_tms["custo_transporte"].sum()) * 100
        print(f"  {modal:15} | R$ {custo_total:>10,.2f} | {percentual:>5.1f}% | {distancia_media:>7.0f} km")

    print("\n5. TENDENCIA DE LEAD TIME (ULTIMOS 15 DIAS)")
    print("-" * 80)
    df_merged_sorted = df_merged.sort_values("data_entrega")
    lead_time_diario = df_merged_sorted.groupby(df_merged_sorted["data_entrega"].dt.date)["lead_time"].mean()
    lead_time_diario_recent = lead_time_diario.tail(15)
    print("Data       | Lead Time")
    for data, lead_time in lead_time_diario_recent.items():
        print(f"  {data} | {lead_time:.2f} dias")

    print("\n6. RELACAO CUSTO x DISTANCIA")
    print("-" * 80)
    print("Modal           | Custo Medio | Distancia Media | Custo/KM")
    for modal in sorted(df_tms["modal"].unique()):
        df_modal = df_tms[df_tms["modal"] == modal]
        custo_medio = df_modal["custo_transporte"].mean()
        dist_media = df_modal["distancia_km"].mean()
        custo_por_km = custo_medio / dist_media if dist_media > 0 else 0
        print(f"  {modal:15} | R$ {custo_medio:>8,.2f} | {dist_media:>10.0f} km | R$ {custo_por_km:.2f}/km")

    print("\n" + "=" * 80)
    data = LogisticsData(erp=df_erp, wms=df_wms, tms=df_tms)
    fill_rate = calculate_fill_rate(data)
    kpis = calculate_kpis(data)
    print(f"Fill Rate corrigido: {fill_rate:.2f}%")
    if fill_rate > 100:
        print("[ERRO] Fill Rate nao pode passar de 100% com a formula atual.")
        raise SystemExit(1)
    if kpis["rotatividade"] > 20:
        print("[ERRO] Rotatividade fora de escala esperada. Verifique formula.")
        raise SystemExit(1)

    print("[OK] TESTE CONCLUIDO COM SUCESSO!")
    print("=" * 80)


if __name__ == "__main__":
    main()
