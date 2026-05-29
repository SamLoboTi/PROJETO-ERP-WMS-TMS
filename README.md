# LogiMAX - Dashboard Analitico de Logistica

[![LogiMAX - Dashboard Analitico de Logistica](assets/logimax-marketing-banner.png)](#como-rodar-localmente)

LogiMAX e um produto analitico de logistica que integra dados de ERP, WMS e
TMS para gerar KPIs executivos, APIs JSON e um dashboard visual para tomada de
decisao.

O projeto foi repaginado como um estudo de amadurecimento tecnico: ele nasceu
como um dashboard funcional, mas ainda nao estava 100% correto em regras de
negocio, formulas, confiabilidade dos dados e organizacao do codigo. A nova
versao mostra como um projeto melhora quando e revisado com criterio senior:
menos improviso, mais rastreabilidade, metricas explicadas e arquitetura mais
simples de manter.

## Problema resolvido

A operacao tinha dados espalhados em fontes diferentes:

| Fonte | Dados principais | Risco antes da consolidacao |
|---|---|---|
| ERP | pedidos, clientes, produtos, status e valores | receita podia considerar pedidos cancelados |
| WMS | estoque, separacao, inventario e movimentacao | divergencias de inventario ficavam escondidas |
| TMS | entrega, prazo, custo, distancia e modal | atrasos e custos por modal eram dificeis de comparar |

O LogiMAX consolida essas fontes para responder perguntas de negocio:

- Qual e o lead time medio?
- Qual percentual da demanda foi atendido?
- Quanto foi gerado em receita ativa?
- Quais entregas cumpriram prazo?
- Existe divergencia entre estoque do sistema e inventario real?
- Qual modal concentra maior custo logistico?

## Resultado atual

Os resultados abaixo sao calculados pelos CSVs atuais do projeto.

| Indicador | Resultado | Explicacao |
|---|---:|---|
| Lead Time Medio | 9.45 dias | Media entre data do pedido e data de entrega. |
| Fill Rate | 79.55% | Demanda ativa atendida por produto, limitada ao que foi pedido. |
| Receita Total Ativa | R$ 10.747.503,47 | Receita de pedidos aprovados e emitidos. |
| Entregas no Prazo | 60.84% | Pedidos ativos com prazo real menor ou igual ao estimado. |
| Rotatividade | 0.95x | Saidas sobre estoque medio total. |
| Acuracidade | 98.64% | Diferenca entre estoque final e inventario real. |
| Inconsistencias | 174 alertas | Produtos com divergencia de inventario. |

## O que foi corrigido na revisao

Antes da revisao, o projeto funcionava visualmente, mas existiam pontos que
poderiam gerar interpretacao errada para a empresa.

| Antes | Depois |
|---|---|
| Fill rate podia passar de 100% por erro de granularidade. | Fill rate agora cruza demanda ativa do ERP com separacao do WMS por produto e limita o atendido ao solicitado. |
| Receita considerava pedidos que nao deveriam entrar na receita ativa. | Receita agora considera apenas pedidos aprovados e emitidos. |
| Rotatividade estava fora de escala para leitura executiva. | Formula foi reorganizada usando saidas sobre estoque medio total. |
| Variacoes simuladas pareciam indicadores reais. | Variacoes fixas foram removidas ou deixadas como `0.0` quando nao ha serie temporal confiavel. |
| Chart.js dependia totalmente de CDN externo. | Chart.js foi salvo localmente em `static/vendor/chart.umd.js`. |
| Codigo concentrava muitas responsabilidades no `app.py`. | Regras foram separadas em camadas simples dentro de `logimax/`. |

Esse processo reforca um ponto importante: repaginar conhecimento nao e apenas
"deixar bonito". E revisar decisao, formula, arquitetura, risco e comunicacao.
Um projeto de dados pode estar visualmente pronto e ainda assim entregar um KPI
errado. A maturidade aparece quando o codigo passa a explicar, validar e
sustentar os resultados que mostra.

## Stack

- Python
- Flask
- Pandas
- NumPy
- HTML/CSS/JavaScript
- Chart.js
- GitHub Actions

## Arquitetura

A arquitetura atual segue uma versao simples, inspirada em Clean Architecture,
mas sem excesso de pastas.

```text
app.py                  -> rotas Flask
logimax/data_sources.py -> leitura e validacao dos CSVs
logimax/analytics.py    -> calculo dos KPIs e datasets
logimax/serializers.py  -> conversao segura para JSON
templates/index.html    -> dashboard
static/vendor/          -> dependencias frontend locais
```

Veja mais em [ARQUITETURA.md](ARQUITETURA.md).

## Como rodar localmente

```powershell
pip install -r requirements.txt
python app.py
```

Acesse:

```text
http://127.0.0.1:5000
```

Link publico oficial do tunelamento:

```text
https://pitch-milk-perry-catalyst.trycloudflare.com
```

## APIs principais

```text
GET /api/kpis
GET /api/status-pedidos
GET /api/pedidos-por-dia
GET /api/custo-por-modal
GET /api/data-quality
GET /api/pedidos-tabela
GET /api/estoque-tabela
GET /api/transporte-tabela
GET /api/health
```

## Qualidade de dados encontrada

Veja [ANALISE_MELHORIAS.md](ANALISE_MELHORIAS.md) para detalhes de como os
problemas foram encontrados e como os resultados corrigidos foram calculados.

Principais achados:

- Fill rate anterior estava inflado por erro de granularidade.
- Receita anterior considerava pedidos cancelados.
- Rotatividade anterior estava fora de escala.
- Havia variacoes simuladas no codigo.
- Ha taxa de cancelamento alta e divergencias de inventario.

## CI/CD

O projeto possui pipeline GitHub Actions em `.github/workflows/ci.yml`.

A pipeline valida:

- sintaxe Python;
- CSVs obrigatorios;
- estrutura basica do HTML;
- subida do Flask;
- endpoints principais da API.

Veja [CI_CD.md](CI_CD.md).

## Nivel de maturidade demonstrado

Depois da revisao, o projeto sai de um nivel junior funcional para uma entrega
mais proxima de pleno em engenharia de dados e analytics, com alguns sinais de
senioridade em documentacao, confiabilidade de metricas, CI/CD inicial e
explicacao de decisoes.

Ainda existem evolucoes para ficar mais proximo de um produto senior em
producao:

- autenticar APIs;
- restringir CORS por ambiente;
- criar testes unitarios para cada formula de KPI;
- separar frontend em arquivos menores;
- criar deploy publico estavel;
- adicionar observabilidade, logs estruturados e variaveis de ambiente.

## Documentacao de apoio

- [PROJECT.md](PROJECT.md)
- [CONTEXT.md](CONTEXT.md)
- [BACKLOG.md](BACKLOG.md)
- [ARQUITETURA.md](ARQUITETURA.md)
- [ANALISE_MELHORIAS.md](ANALISE_MELHORIAS.md)
- [CI_CD.md](CI_CD.md)

## Observacao sobre graficos

O Chart.js foi salvo localmente em `static/vendor/chart.umd.js`. Isso evita o
erro anterior em que os graficos nao carregavam quando o CDN externo falhava.
