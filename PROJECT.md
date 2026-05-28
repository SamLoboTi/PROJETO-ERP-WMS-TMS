# Projeto LogiMAX

## Resumo detalhado

LogiMAX e um produto analitico para gestao logistica. Ele transforma dados de
pedidos, estoque e transporte em APIs, KPIs, tabelas e dashboard executivo.

O objetivo e demonstrar capacidade de engenharia de dados, analytics, integracao
de sistemas, modelagem de indicadores e entrega de valor para negocio.

## Ideia central

Criar uma visao unica da operacao:

- Pedido feito no ERP.
- Separacao e inventario no WMS.
- Entrega, custo e prazo no TMS.
- KPIs consolidados para tomada de decisao.

## Publico alvo

- Gestao logistica.
- Operacoes.
- Planejamento de estoque.
- Financeiro logistico.
- Analistas de dados e BI.

## Indicadores principais

- Lead time medio.
- Fill rate.
- Receita total.
- Entregas no prazo.
- Rotatividade de estoque.
- Acuracidade de inventario.
- Inconsistencias operacionais.
- Custo logistico por modal.

## Pontos criticos do projeto

- Garantir que as formulas estejam corretas.
- Evitar metricas simuladas sem aviso.
- Validar a qualidade dos CSVs.
- Evitar que dados padrao escondam erro real.
- Manter documentacao sincronizada com a API.
- Fazer o dashboard funcionar mesmo em ambiente com internet limitada.

## Ciberseguranca

Riscos atuais:

- CORS aberto para qualquer origem.
- Sem autenticacao na API.
- Dados sensiveis podem ser expostos se os CSVs forem reais.
- Dependencias externas via CDN sem controle local.

Decisoes iniciais:

- Manter o projeto aberto para estudo local.
- Antes de producao real, restringir CORS, revisar dados sensiveis e adicionar autenticacao.
- Nao commitar credenciais, tokens, senhas ou arquivos `.env`.

## Decisoes ja tomadas

- Manter Flask no curto prazo.
- Usar GitHub Actions para CI simples.
- Documentar arquitetura antes da refatoracao.
- Refatorar em etapas pequenas, sem quebrar o dashboard.
- Priorizar confiabilidade das metricas antes de adicionar novas features.

## Discussao tecnica

O projeto atualmente esta funcional, mas concentrado em `app.py`. Isso e comum
em um primeiro MVP. Para evoluir profissionalmente, o proximo passo e separar
as responsabilidades:

- Leitura de dados.
- Validacao.
- Calculo analitico.
- Serializacao JSON.
- Rotas.
- Interface.

Essa evolucao deixa o projeto mais proximo de uma arquitetura profissional, mas
sem excesso de pastas.

## Diario de iteracoes

### Iteracao 1 - Retomada e governanca inicial

Objetivo:
Organizar o projeto para manutencao, CI/CD e evolucao segura.

Entregas planejadas:

- Revisar erros atuais.
- Criar documentos de contexto, backlog e projeto.
- Atualizar arquitetura.
- Criar pipeline CI.
- Ajustar testes basicos.

Status:
Concluida na base documental e CI inicial.

Resumo da iteracao:

- `ARQUITETURA.md` foi reescrito com arquitetura alvo simples.
- `CONTEXT.md`, `BACKLOG.md`, `PROJECT.md` e `CI_CD.md` foram criados.
- `.github/workflows/ci.yml` foi criado para validar backend, dados e HTML.
- Testes basicos foram ajustados para rodar no Windows e no GitHub Actions.
- `requirements.txt` recebeu `requests`, usado pelo teste de endpoints.

Validacoes executadas:

- `python -m compileall app.py test_dashboard_data.py test_endpoints.py test_html_validation.py`
- `python test_dashboard_data.py`
- `python test_html_validation.py`
- `python test_endpoints.py`
- `curl.exe -i http://127.0.0.1:5000/api/health`

### Iteracao 2 - Correcao analitica e organizacao pleno/senior

Objetivo:
Corrigir metricas criticas, separar responsabilidades e explicar como os resultados foram encontrados.

Resumo da iteracao:

- Criada pasta `logimax/` com camadas de dados, analytics e serializacao.
- `app.py` passou a ser uma camada de rotas Flask, sem concentrar toda regra de negocio.
- Fill Rate corrigido de `164.06%` para `79.55%`.
- Receita total passou a considerar apenas pedidos ativos.
- Rotatividade foi corrigida para uma formula em escala mais coerente.
- Variacoes fixas simuladas foram removidas.
- Criada rota `/api/data-quality`.
- Criado `ANALISE_MELHORIAS.md` explicando onde estavam os problemas e como chegamos aos resultados.
- Chart.js foi salvo localmente em `static/vendor/chart.umd.js` para reduzir dependencia de CDN.

Decisao:
Font Awesome e Google Fonts ainda usam CDN. Chart.js foi priorizado porque sem ele os graficos nao renderizavam.

### Iteracao 3 - Reposicionamento visual e README de portfolio

Objetivo:
Transformar a apresentacao do projeto em uma leitura mais profissional para GitHub, portfolio e recrutamento.

Resumo da iteracao:

- Gerada imagem de marketing para o LogiMAX com abordagem visual rosa, feminina e inspirada em ecommerce de maquiagem.
- A imagem foi salva no projeto em `assets/logimax-marketing-banner.png`.
- `README.md` foi reescrito com narrativa de produto, problema de negocio, KPIs atuais, arquitetura, APIs e CI/CD.
- O README passou a explicar o amadurecimento tecnico do projeto: ele estava funcional, mas nao estava 100% correto em formulas, confiabilidade e organizacao.
- A revisao passou a destacar o aprendizado de repaginar conhecimento com criterio senior: validar formulas, documentar decisoes e sustentar os numeros exibidos.

Validacoes executadas:

- Conferido asset `assets/logimax-marketing-banner.png`.
- `python test_html_validation.py`
- `curl.exe -i http://127.0.0.1:5000/api/health`

### Iteracao 4 - Atualizacao do GitHub e limpeza do repositorio

Objetivo:
Publicar a versao amadurecida no GitHub e remover arquivos antigos que confundiam a leitura do projeto.

Resumo da iteracao:

- `.gitignore` foi atualizado para evitar logs, videos, screenshots temporarios e saidas locais.
- Arquivos antigos de debug, guias duplicados, HTMLs de teste, scripts temporarios, PDFs/PBIX e documentos obsoletos foram removidos do controle de versao.
- O repositorio ficou focado no produto atual: app Flask, pacote `logimax/`, dashboard, CSVs, testes, CI/CD, README, documentacao de arquitetura e imagem de marketing.
- A limpeza reduz ruido para recrutadores, avaliadores tecnicos e pessoas que abrirem o projeto no GitHub.

Validacoes executadas:

- `python -m compileall app.py logimax test_dashboard_data.py test_endpoints.py test_html_validation.py`
- `python test_dashboard_data.py`
- `python test_html_validation.py`
- Flask iniciado temporariamente e `python test_endpoints.py`
