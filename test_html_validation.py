"""Validate the dashboard HTML structure with simple static checks."""

import re
import sys

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

with open("templates/index.html", "r", encoding="utf-8") as file:
    html_content = file.read()

canvas_elements = re.findall(r'<canvas\s+id=["\']([^"\']+)["\'][^>]*>', html_content)
print(f"[OK] Canvas elementos encontrados: {canvas_elements}")

if not canvas_elements:
    print("[ERRO] Nenhum canvas encontrado no dashboard.")
    raise SystemExit(1)

for canvas_id in canvas_elements:
    pattern = rf"document\.getElementById\(['\"]({re.escape(canvas_id)})['\"]"
    matches = re.findall(pattern, html_content)
    print(f"   - {canvas_id}: {len(matches)} referencias encontradas")

functions = [
    "createLineChart",
    "createStatusChart",
    "createBarChart",
    "createScatterChart",
    "loadCharts",
    "loadDashboard",
]

missing_functions = []
for function_name in functions:
    pattern = rf"function {function_name}\s*\("
    matches = re.findall(pattern, html_content)
    status = "DEFINIDA" if matches else "NAO ENCONTRADA"
    print(f"[OK] Funcao '{function_name}': {status}")
    if not matches:
        missing_functions.append(function_name)

issues = []

open_braces = html_content.count("{")
close_braces = html_content.count("}")
if open_braces != close_braces:
    issues.append(f"Desbalanceamento de chaves: {open_braces} open vs {close_braces} close")

open_parens = html_content.count("(")
close_parens = html_content.count(")")
if open_parens != close_parens:
    issues.append(f"Desbalanceamento de parenteses: {open_parens} open vs {close_parens} close")

api_calls = sorted(set(re.findall(r"fetch\(['\"]([^'\"]+)['\"]", html_content)))
print(f"\n[OK] Chamadas de API encontradas: {api_calls}")

if "/static/vendor/chart.umd.js" not in html_content:
    issues.append("Chart.js local nao encontrado no HTML.")

if missing_functions or issues:
    print("\n[ERRO] Potenciais problemas:")
    for function_name in missing_functions:
        print(f"   Funcao ausente: {function_name}")
    for issue in issues:
        print(f"   {issue}")
    raise SystemExit(1)

print("\n[OK] Validacao concluida!")
