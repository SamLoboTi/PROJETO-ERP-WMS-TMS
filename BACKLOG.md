# Backlog LogiMAX

Este backlog organiza os erros atuais, riscos tecnicos e proximas melhorias.

## Erros e riscos encontrados no codigo

### 1. Fill rate acima de 100% - corrigido na iteracao 2

Arquivo: `app.py`
Trecho: calculo de `fill_rate` usando soma total de quantidade separada dividida pela soma total de quantidade pedida.

Problema:
O resultado atual da API foi `164.06%`. Em geral, fill rate operacional deve ficar entre 0% e 100%, salvo regra de negocio muito bem explicada. Isso indica que o calculo provavelmente cruza bases em granularidades diferentes.

Acao aplicada:
O calculo passou a agrupar demanda ativa do ERP por `product_id`, juntar com separacao do WMS por `product_id` e limitar a quantidade atendida ao maximo pedido. Resultado atual: `79.55%`.

### 2. Variacoes simuladas aparecem como indicador real - parcialmente corrigido

Arquivo: `app.py`
Trechos: `fill_rate_variacao = 2`, `receita_variacao = 12`, `entregas_prazo_variacao = 3`, `rotatividade_variacao = 8`.

Problema:
O usuario pode acreditar que essas variacoes vieram dos dados reais.

Acao aplicada:
As variacoes fixas foram removidas. Algumas variacoes agora sao calculadas com comparacao entre janelas recentes de dados. As que ainda nao tem serie temporal confiavel ficam `0.0`.

### 3. Fallback com dados padrao pode esconder erro real

Arquivo: `app.py`
Trechos: rotas que retornam dados padrao quando ocorre erro.

Problema:
Se o CSV quebrar, a tela pode continuar mostrando numeros ficticios.

Acao sugerida:
Retornar erro claro na API e exibir mensagem honesta no dashboard.

### 4. Dependencia externa quebra graficos

Arquivo: `templates/index.html`
Trechos: Chart.js e Font Awesome carregados por CDN.

Problema:
Na execucao local, os graficos exibiram erro de Chart.js nao carregado.

Acao sugerida:
Salvar dependencias estaticas localmente ou adicionar build frontend simples.

### 5. Testes quebravam no Windows por encoding

Arquivos: `test_dashboard_data.py` e `test_endpoints.py`.

Problema:
Caracteres especiais/emojis no console causam erro de encoding em cp1252.

Acao sugerida:
Padronizar saida ASCII ou configurar UTF-8.

### 6. README com numeros conflitantes

Arquivos: `README.md` e `README_DASHBOARD.md`.

Problema:
Valores documentados nao batem com a API atual.

Acao sugerida:
Atualizar documentacao com resultados gerados pelo codigo ou deixar claro que sao exemplos.

### 7. CORS aberto

Arquivo: `app.py`
Trecho: `CORS(app)`.

Problema:
Em producao, qualquer origem poderia consumir a API.

Acao sugerida:
Restringir origens por ambiente.

## Proximas iteracoes sugeridas

### Iteracao 1 - Base de retomada

- Criar `CONTEXT.md`, `BACKLOG.md`, `PROJECT.md`.
- Atualizar `ARQUITETURA.md`.
- Criar CI simples.
- Corrigir testes basicos para rodarem.

### Iteracao 2 - Confiabilidade das metricas

- Corrigir fill rate.
- Remover variacoes simuladas.
- Documentar formulas.
- Criar validacao de qualidade dos dados.

### Iteracao 3 - Refatoracao leve

- Criar pasta `logimax/`.
- Separar leitura de dados, analytics, validadores e rotas.
- Manter compatibilidade com o dashboard atual.

### Iteracao 4 - Frontend confiavel

- Remover dependencia fragil de CDN.
- Validar carregamento dos graficos.
- Criar captura automatizada do dashboard.

### Iteracao 5 - CI/CD e deploy

- Publicar via Render, Railway ou Azure.
- Rodar testes em pull request.
- Criar ambiente de producao e variaveis seguras.
