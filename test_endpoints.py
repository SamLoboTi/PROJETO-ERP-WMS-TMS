#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Validate public API endpoints of the LogiMAX dashboard."""

import json
import sys
import time

import requests

BASE_URL = "http://127.0.0.1:5000"

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")


def test_endpoints():
    print("=" * 70)
    print("TESTANDO ENDPOINTS - LogiMAX Dashboard")
    print("=" * 70)
    time.sleep(2)

    endpoints = [
        "/api/kpis",
        "/api/pedidos-por-dia",
        "/api/custo-por-modal",
        "/api/status-pedidos",
        "/api/data-quality",
        "/api/health",
    ]

    failures = []

    for endpoint in endpoints:
        print(f"\nTestando: {endpoint}")
        print("-" * 70)
        try:
            response = requests.get(BASE_URL + endpoint, timeout=5)
            if response.status_code == 200:
                data = response.json()
                if endpoint == "/api/kpis" and data.get("fill_rate", 0) > 100:
                    failures.append("/api/kpis: fill_rate acima de 100")
                print(f"[OK] Status: {response.status_code} OK")
                print("Dados retornados:")
                print(json.dumps(data, indent=2, ensure_ascii=False)[:500] + "...")
            else:
                print(f"[ERRO] Status: {response.status_code}")
                failures.append(f"{endpoint}: status {response.status_code}")
        except Exception as exc:
            print(f"[ERRO] Erro: {exc}")
            failures.append(f"{endpoint}: {exc}")

    print("\n" + "=" * 70)
    if failures:
        print("Falhas encontradas:")
        for failure in failures:
            print(f"- {failure}")
        raise SystemExit(1)

    print("[OK] Teste completo!")
    print("=" * 70)


if __name__ == "__main__":
    test_endpoints()
