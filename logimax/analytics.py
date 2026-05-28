"""Business metrics and chart datasets for LogiMAX."""

from __future__ import annotations

import pandas as pd

from .data_sources import LogisticsData


ACTIVE_ORDER_STATUS = {"aprovado", "emitido"}


def _round(value: float, digits: int = 2) -> float:
    if pd.isna(value):
        return 0.0
    return round(float(value), digits)


def _pct_variation(series: pd.Series, lower_is_better: bool = False) -> float:
    """Compare the last 20% of a series with the previous 20%."""
    clean = series.dropna().reset_index(drop=True)
    if len(clean) < 10:
        return 0.0
    window = max(1, len(clean) // 5)
    previous = clean.iloc[-(window * 2) : -window].mean()
    current = clean.iloc[-window:].mean()
    if previous == 0 or pd.isna(previous):
        return 0.0
    variation = ((current - previous) / previous) * 100
    if lower_is_better:
        variation = variation * -1
    return _round(variation, 1)


def active_orders(erp: pd.DataFrame) -> pd.DataFrame:
    status = erp["status_pedido"].str.lower()
    return erp[status.isin(ACTIVE_ORDER_STATUS)].copy()


def lead_time_by_order(data: LogisticsData) -> pd.DataFrame:
    merged = pd.merge(
        data.erp[["order_id", "data_pedido", "status_pedido"]],
        data.tms[["order_id", "data_entrega", "prazo_estimado", "prazo_real"]],
        on="order_id",
        how="inner",
    )
    merged["lead_time"] = (merged["data_entrega"] - merged["data_pedido"]).dt.days
    return merged


def calculate_fill_rate(data: LogisticsData) -> float:
    """Calculate fill rate by product, capped by requested quantity.

    ERP is order-level and WMS is product-level. To avoid the previous error
    where WMS totals were compared directly against ERP totals, the calculation
    now groups active ERP demand by product_id and joins WMS separation by
    product_id. Excess separated quantity is capped at requested quantity.
    """
    demand = active_orders(data.erp).groupby("product_id", as_index=False)["quantidade_pedida"].sum()
    separated = data.wms.groupby("product_id", as_index=False)["quantidade_separada"].sum()
    merged = pd.merge(demand, separated, on="product_id", how="left").fillna({"quantidade_separada": 0})
    merged["quantidade_atendida"] = merged[["quantidade_pedida", "quantidade_separada"]].min(axis=1)
    requested_total = merged["quantidade_pedida"].sum()
    if requested_total <= 0:
        return 0.0
    return _round((merged["quantidade_atendida"].sum() / requested_total) * 100)


def calculate_kpis(data: LogisticsData) -> dict:
    erp_active = active_orders(data.erp)
    lead_time = lead_time_by_order(data)
    active_transports = pd.merge(
        erp_active[["order_id"]],
        data.tms,
        on="order_id",
        how="inner",
    )

    receita_total = (erp_active["valor_pedido"] * erp_active["quantidade_pedida"]).sum()
    entregas_prazo = 0.0
    if len(active_transports) > 0:
        entregas_prazo = (active_transports["prazo_real"].le(active_transports["prazo_estimado"]).mean()) * 100

    estoque_medio_total = ((data.wms["estoque_inicial"].sum() + data.wms["estoque_final"].sum()) / 2)
    rotatividade = data.wms["saidas"].sum() / estoque_medio_total if estoque_medio_total > 0 else 0.0

    stock_difference = (data.wms["inventario_real"] - data.wms["estoque_final"]).abs()
    estoque_total = data.wms["estoque_final"].sum()
    acuracia = 100 - ((stock_difference.sum() / estoque_total) * 100) if estoque_total > 0 else 100.0

    return {
        "lead_time_medio": _round(lead_time["lead_time"].mean()),
        "lead_time_variacao": _pct_variation(lead_time.sort_values("data_entrega")["lead_time"], lower_is_better=True),
        "fill_rate": calculate_fill_rate(data),
        "fill_rate_variacao": 0.0,
        "receita_total": _round(receita_total),
        "receita_variacao": _pct_variation(
            (erp_active.sort_values("data_pedido")["valor_pedido"] * erp_active.sort_values("data_pedido")["quantidade_pedida"])
        ),
        "entregas_prazo": _round(entregas_prazo),
        "entregas_prazo_variacao": _pct_variation(
            active_transports.sort_values("data_entrega")["prazo_real"].le(active_transports.sort_values("data_entrega")["prazo_estimado"]).astype(int)
        ),
        "rotatividade": _round(rotatividade),
        "rotatividade_variacao": 0.0,
        "acuracia": _round(max(0, min(100, acuracia))),
        "acuracia_variacao": 0.0,
        "inconsistencias": int(stock_difference.gt(0).sum()),
        "inconsistencias_variacao": 0.0,
        "total_pedidos": int(len(data.erp)),
        "total_pedidos_ativos": int(len(erp_active)),
        "total_produtos": int(len(data.wms)),
        "total_entregas": int(len(data.tms)),
    }


def status_pedidos(data: LogisticsData) -> dict:
    status_lower = data.erp["status_pedido"].str.lower()
    labels = ["Aprovado", "Emitido", "Cancelado"]
    values = [
        int(status_lower.eq("aprovado").sum()),
        int(status_lower.eq("emitido").sum()),
        int(status_lower.eq("cancelado").sum()),
    ]
    return {"labels": labels, "data": values, "total": int(sum(values))}


def conformidade_prazos(data: LogisticsData) -> dict:
    active_transports = pd.merge(active_orders(data.erp)[["order_id"]], data.tms, on="order_id", how="inner")
    cumprido = int(active_transports["prazo_real"].le(active_transports["prazo_estimado"]).sum())
    atrasado = int(active_transports["prazo_real"].gt(active_transports["prazo_estimado"]).sum())
    return {"labels": ["Cumprido", "Atrasado"], "data": [cumprido, atrasado]}


def pedidos_por_dia(data: LogisticsData) -> dict:
    lead_time = lead_time_by_order(data).sort_values("data_entrega")
    lead_time_diario = lead_time.groupby(lead_time["data_entrega"].dt.date)["lead_time"].mean().tail(15)
    return {
        "labels": [day.strftime("%d/%m") for day in lead_time_diario.index.tolist()],
        "data": [_round(value) for value in lead_time_diario.values.tolist()],
    }


def custo_por_modal(data: LogisticsData) -> dict:
    stats = data.tms.groupby("modal").agg({"custo_transporte": "sum", "distancia_km": "mean"})
    stats = stats.sort_values("custo_transporte", ascending=False)
    return {
        "labels": stats.index.tolist(),
        "data": [_round(value) for value in stats["custo_transporte"].tolist()],
        "distancia": [_round(value) for value in stats["distancia_km"].tolist()],
        "total": _round(stats["custo_transporte"].sum()),
    }


def top_produtos(data: LogisticsData) -> dict:
    top = data.wms.nlargest(10, "saidas")[["product_id", "saidas", "estoque_final"]]
    return {
        "labels": [f"P{int(product_id)}" for product_id in top["product_id"].tolist()],
        "saidas": top["saidas"].tolist(),
        "estoque": top["estoque_final"].tolist(),
    }


def distribuicao_estoque(data: LogisticsData) -> dict:
    hist = pd.cut(data.wms["estoque_final"], bins=6)
    counts = hist.value_counts().sort_index()
    return {"labels": [str(interval) for interval in counts.index], "data": counts.values.tolist()}


def data_quality_report(data: LogisticsData) -> dict:
    cancelled = int(data.erp["status_pedido"].str.lower().eq("cancelado").sum())
    stock_divergence = (data.wms["inventario_real"] - data.wms["estoque_final"]).abs()
    late = int(data.tms["prazo_real"].gt(data.tms["prazo_estimado"]).sum())
    zero_real_deadline = int(data.tms["prazo_real"].eq(0).sum())
    fill_rate = calculate_fill_rate(data)

    findings = []
    if fill_rate > 100:
        findings.append("Fill rate acima de 100 indica divergencia de granularidade.")
    if cancelled / len(data.erp) > 0.2:
        findings.append("Taxa de cancelamento acima de 20% exige investigacao operacional.")
    if stock_divergence.gt(0).any():
        findings.append("Ha divergencias entre estoque final e inventario real.")
    if late:
        findings.append("Ha entregas com prazo real maior que prazo estimado.")

    return {
        "fill_rate_calculado": fill_rate,
        "pedidos_cancelados": cancelled,
        "taxa_cancelamento": _round((cancelled / len(data.erp)) * 100),
        "produtos_com_divergencia_estoque": int(stock_divergence.gt(0).sum()),
        "unidades_divergentes_estoque": int(stock_divergence.sum()),
        "entregas_atrasadas": late,
        "entregas_com_prazo_real_zero": zero_real_deadline,
        "achados": findings,
    }

