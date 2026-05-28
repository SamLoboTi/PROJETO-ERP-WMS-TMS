# Contexto do Projeto LogiMAX

## Visao geral

LogiMAX e um dashboard logistico que integra dados de ERP, WMS e TMS para apoiar
decisoes de operacao, estoque, transporte e performance executiva.

## Problema de negocio

A empresa tinha dados espalhados em sistemas diferentes:

- ERP: pedidos, clientes, status e valor.
- WMS: estoque, separacao, inventario e movimentacao.
- TMS: transporte, prazo, entrega, distancia e custo.

Sem integracao, a gestao tinha dificuldade para responder:

- Quais pedidos atrasaram?
- Qual e o lead time medio?
- O estoque fisico bate com o sistema?
- O fill rate esta saudavel?
- Quais modais custam mais?
- Onde estao os gargalos operacionais?

## Solucao atual

O projeto usa Flask, Pandas e um dashboard HTML para:

- Ler arquivos CSV.
- Calcular KPIs logisticos.
- Expor APIs JSON.
- Renderizar cards, graficos e tabelas operacionais.

## Stack alinhada com seu perfil

- Python
- Pandas
- NumPy
- SQL como camada futura de validacao e analise
- Flask para APIs analiticas
- Power BI como produto complementar
- GitHub Actions para CI/CD simples
- Futuro: SQLite/PostgreSQL, Databricks, Spark, jobs agendados e alertas

## Estado atual do projeto

Pontos fortes:

- Boa ideia de negocio.
- Integra tres dominios logisticos.
- Tem dashboard visual.
- Tem APIs analiticas.
- Tem relatorios de confiabilidade e oportunidades.
- Tem scripts de teste, mesmo que ainda precisem ajuste.

Pontos criticos:

- Documentacao e metricas nao estao totalmente consistentes.
- Alguns KPIs no codigo usam variacoes simuladas.
- Fill rate atual pode estar calculado de forma incorreta.
- O frontend depende de CDN externo para graficos.
- Testes precisam ser padronizados para rodar localmente e no CI.

## Regra de trabalho daqui para frente

Ao final de cada iteracao, registrar:

- O que foi feito.
- Quais arquivos mudaram.
- Quais testes/builds foram executados.
- O que ainda ficou pendente.
