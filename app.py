from __future__ import annotations

import os
from datetime import datetime

from flask import Flask, jsonify, render_template
from flask_cors import CORS

from logimax.analytics import (
    calculate_kpis,
    conformidade_prazos,
    custo_por_modal,
    data_quality_report,
    distribuicao_estoque,
    pedidos_por_dia,
    status_pedidos,
    top_produtos,
)
from logimax.data_sources import load_logistics_data
from logimax.serializers import sanitize_for_json

app = Flask(__name__, template_folder="templates")

allowed_origins = os.environ.get("LOGIMAX_CORS_ORIGINS")
if allowed_origins:
    CORS(app, origins=[origin.strip() for origin in allowed_origins.split(",") if origin.strip()])
else:
    CORS(app)


def carregar_dados():
    """Compatibility wrapper used by older scripts and routes."""
    data = load_logistics_data()
    return data.erp, data.wms, data.tms


def _load_data_or_error():
    try:
        return load_logistics_data(), None
    except Exception as exc:
        return None, _json({"error": "Erro ao carregar dados", "detail": str(exc)}, status=500)


def _json(payload, status=200):
    return jsonify(sanitize_for_json(payload)), status


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/api/kpis")
def get_kpis():
    data, error = _load_data_or_error()
    if data is None:
        return error
    return _json(calculate_kpis(data))


@app.route("/api/status-pedidos")
def get_status_pedidos():
    data, error = _load_data_or_error()
    if data is None:
        return error
    return _json(status_pedidos(data))


@app.route("/api/conformidade-prazos")
def get_conformidade_prazos():
    data, error = _load_data_or_error()
    if data is None:
        return error
    return _json(conformidade_prazos(data))


@app.route("/api/pedidos-por-dia")
def get_pedidos_por_dia():
    data, error = _load_data_or_error()
    if data is None:
        return error
    return _json(pedidos_por_dia(data))


@app.route("/api/custo-por-modal")
def get_custo_modal():
    data, error = _load_data_or_error()
    if data is None:
        return error
    return _json(custo_por_modal(data))


@app.route("/api/top-produtos")
def get_top_produtos():
    data, error = _load_data_or_error()
    if data is None:
        return error
    return _json(top_produtos(data))


@app.route("/api/distribuicao-estoque")
def get_distribuicao_estoque():
    data, error = _load_data_or_error()
    if data is None:
        return error
    return _json(distribuicao_estoque(data))


@app.route("/api/data-quality")
def get_data_quality():
    data, error = _load_data_or_error()
    if data is None:
        return error
    return _json(data_quality_report(data))


@app.route("/api/pedidos-tabela")
def get_pedidos_tabela():
    data, error = _load_data_or_error()
    if data is None:
        return error
    df_display = data.erp.head(100).copy()
    df_display["data_pedido"] = df_display["data_pedido"].astype(str)
    return _json(df_display.to_dict("records"))


@app.route("/api/estoque-tabela")
def get_estoque_tabela():
    data, error = _load_data_or_error()
    if data is None:
        return error
    df_display = data.wms.head(100).copy()
    df_display["data_separacao"] = df_display["data_separacao"].astype(str)
    return _json(df_display.to_dict("records"))


@app.route("/api/transporte-tabela")
def get_transporte_tabela():
    data, error = _load_data_or_error()
    if data is None:
        return error
    df_display = data.tms.head(100).copy()
    df_display["data_envio"] = df_display["data_envio"].astype(str)
    df_display["data_entrega"] = df_display["data_entrega"].astype(str)
    return _json(df_display.to_dict("records"))


@app.route("/api/health")
def health():
    try:
        load_logistics_data()
        return _json({"status": "ok", "timestamp": datetime.now().isoformat()})
    except Exception as exc:
        return _json({"status": "error", "error": str(exc)}, status=500)


@app.errorhandler(404)
def not_found(error):
    return _json({"error": "Rota nao encontrada"}, status=404)


@app.errorhandler(500)
def server_error(error):
    return _json({"error": "Erro interno do servidor"}, status=500)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    debug = os.environ.get("FLASK_ENV") != "production"
    app.run(debug=debug, host="0.0.0.0", port=port, threaded=True)
