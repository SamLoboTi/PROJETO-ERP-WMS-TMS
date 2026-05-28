"""Data loading and validation for LogiMAX source files."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path

import pandas as pd


@dataclass(frozen=True)
class LogisticsData:
    erp: pd.DataFrame
    wms: pd.DataFrame
    tms: pd.DataFrame


REQUIRED_COLUMNS = {
    "ERP_Pedidos.csv": {
        "order_id",
        "customer_id",
        "product_id",
        "data_pedido",
        "quantidade_pedida",
        "valor_pedido",
        "status_pedido",
    },
    "WMS_Estoque.csv": {
        "product_id",
        "estoque_inicial",
        "entradas",
        "saidas",
        "estoque_final",
        "inventario_real",
        "data_separacao",
        "quantidade_separada",
    },
    "TMS_Transporte.csv": {
        "order_id",
        "data_envio",
        "data_entrega",
        "prazo_estimado",
        "prazo_real",
        "custo_transporte",
        "distancia_km",
        "modal",
    },
}


def _read_csv(base_path: Path, file_name: str) -> pd.DataFrame:
    path = base_path / file_name
    if not path.exists():
        raise FileNotFoundError(f"Arquivo obrigatorio nao encontrado: {file_name}")
    df = pd.read_csv(path, encoding="utf-8")
    missing = REQUIRED_COLUMNS[file_name] - set(df.columns)
    if missing:
        missing_text = ", ".join(sorted(missing))
        raise ValueError(f"{file_name} sem colunas obrigatorias: {missing_text}")
    return df


def load_logistics_data(base_path: str | Path = ".") -> LogisticsData:
    """Load CSV files and normalize basic data types."""
    base = Path(base_path)
    erp = _read_csv(base, "ERP_Pedidos.csv")
    wms = _read_csv(base, "WMS_Estoque.csv")
    tms = _read_csv(base, "TMS_Transporte.csv")

    erp["data_pedido"] = pd.to_datetime(erp["data_pedido"], errors="coerce")
    wms["data_separacao"] = pd.to_datetime(wms["data_separacao"], errors="coerce")
    tms["data_envio"] = pd.to_datetime(tms["data_envio"], errors="coerce")
    tms["data_entrega"] = pd.to_datetime(tms["data_entrega"], errors="coerce")

    invalid_dates = {
        "ERP_Pedidos.csv": int(erp["data_pedido"].isna().sum()),
        "WMS_Estoque.csv": int(wms["data_separacao"].isna().sum()),
        "TMS_Transporte.csv:data_envio": int(tms["data_envio"].isna().sum()),
        "TMS_Transporte.csv:data_entrega": int(tms["data_entrega"].isna().sum()),
    }
    invalid_dates = {name: count for name, count in invalid_dates.items() if count}
    if invalid_dates:
        raise ValueError(f"Datas invalidas encontradas: {invalid_dates}")

    return LogisticsData(erp=erp, wms=wms, tms=tms)

