# Arquitetura LogiMAX

Este documento descreve a arquitetura desejada para a retomada do projeto LogiMAX.
A ideia e usar uma arquitetura parecida com Clean Architecture, mas com poucas pastas,
facil de entender e adequada para um projeto de dados, API analitica e dashboard.

## Objetivo da arquitetura

Separar o projeto em camadas simples:

- Entrada: rotas Flask e tela do dashboard.
- Aplicacao: casos de uso analiticos, como calcular KPIs e montar tabelas.
- Dominio: regras de negocio logistico, metricas e validacoes.
- Infraestrutura: leitura de CSV, conexao futura com banco ou API externa.

Hoje grande parte disso esta concentrada em `app.py`. Funciona, mas dificulta teste,
manutencao e evolucao.

## Estrutura alvo simples

```text
LOGIMAX.PROJETO-/
|-- app.py
|-- requirements.txt
|-- README.md
|-- PROJECT.md
|-- CONTEXT.md
|-- BACKLOG.md
|-- ARQUITETURA.md
|-- .github/
|   `-- workflows/
|       `-- ci.yml
|-- logimax/
|   |-- __init__.py
|   |-- web.py
|   |-- data_sources.py
|   |-- analytics.py
|   |-- validators.py
|   `-- serializers.py
|-- templates/
|   `-- index.html
|-- tests/
|   |-- test_data_quality.py
|   `-- test_api_contracts.py
|-- ERP_Pedidos.csv
|-- WMS_Estoque.csv
`-- TMS_Transporte.csv
```

## Responsabilidade de cada parte

`app.py`
Ponto de entrada. Deve apenas criar a aplicacao Flask e chamar a camada web.

`logimax/web.py`
Define rotas Flask. Nao deve conter regra de negocio pesada.

`logimax/data_sources.py`
Leitura dos dados. Hoje os dados vem de CSV, mas no futuro pode vir de banco,
Databricks, API, PostgreSQL ou SQLite sem mexer nas regras de negocio.

`logimax/analytics.py`
Calculo dos KPIs: lead time, fill rate, receita, entregas no prazo, rotatividade,
acuracidade e inconsistencias.

`logimax/validators.py`
Validacoes de qualidade: colunas obrigatorias, datas invalidas, fill rate acima
de 100%, cancelamentos altos, estoque divergente e dados nulos.

`logimax/serializers.py`
Conversao segura para JSON, tratando NaN, infinito, datas e tipos do Pandas.

`templates/index.html`
Interface visual. Deve consumir a API e renderizar cards, graficos e tabelas.

`tests/`
Testes automatizados para garantir que os dados, APIs e contratos JSON continuam
funcionando.

## Fluxo atual

```text
CSV -> app.py -> Pandas -> JSON -> index.html -> Chart.js/tabelas
```

## Fluxo alvo

```text
CSV/API/Banco
  -> data_sources.py
  -> validators.py
  -> analytics.py
  -> serializers.py
  -> web.py
  -> index.html
```

## Principios para evoluir o projeto

- Cada metrica deve ter formula documentada.
- Nenhum KPI simulado deve aparecer como real.
- Toda rota de API deve ter contrato JSON previsivel.
- Todo erro de dados deve ser visivel, nao escondido por fallback silencioso.
- Dashboard deve funcionar localmente mesmo se a internet estiver instavel.
- CI deve rodar a cada push e pull request.
- Toda iteracao deve terminar com resumo do que mudou e validacoes executadas.

## Riscos tecnicos atuais

- `app.py` mistura leitura de dados, calculo de metricas e rotas.
- O frontend depende de CDN externo para Chart.js.
- Alguns documentos tem numeros diferentes dos resultados reais da API.
- Alguns testes quebravam no Windows por encoding.
- `CORS(app)` esta aberto para qualquer origem.
- Existem fallbacks com dados padrao que podem esconder falha real.

## Decisoes arquiteturais iniciais

- Manter Flask por enquanto, porque e simples e suficiente para uma API analitica.
- Manter CSV como fonte inicial, mas isolar a leitura para migrar depois.
- Nao migrar tudo para banco agora; primeiro estabilizar testes e metricas.
- Criar CI simples antes de grandes refatoracoes.
- Refatorar em etapas pequenas para nao quebrar o dashboard.
