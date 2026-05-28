# Analise de melhorias e resultados

Este documento explica onde encontramos os principais problemas do projeto e como
chegamos aos resultados corrigidos.

## 1. Como encontramos o erro do Fill Rate

O valor anterior da API era:

```text
fill_rate = 164.06%
```

Esse numero chamou atencao porque fill rate normalmente representa quanto da
demanda foi atendida. Em uma leitura executiva, ele deve ficar entre 0% e 100%,
exceto se houver uma regra muito especifica explicando excedente.

### Onde estava o erro

No codigo anterior, o calculo fazia:

```python
quantidade_pedida_total = df_erp['quantidade_pedida'].sum()
quantidade_separada_total = df_wms['quantidade_separada'].sum()
fill_rate = quantidade_separada_total / quantidade_pedida_total * 100
```

O problema e que as bases tem granularidades diferentes:

- ERP esta no nivel do pedido.
- WMS esta no nivel do produto/estoque.

Comparar os totais diretamente inflava o indicador.

### Como foi corrigido

Agora o calculo:

1. Remove pedidos cancelados.
2. Agrupa a demanda ativa do ERP por `product_id`.
3. Agrupa a quantidade separada no WMS por `product_id`.
4. Junta as duas visoes por produto.
5. Limita a quantidade atendida ao maximo que foi pedido.
6. Calcula `quantidade_atendida / quantidade_pedida`.

Resultado atual:

```text
fill_rate = 79.55%
```

## 2. Receita total

Antes, a receita considerava todos os pedidos, inclusive cancelados.

Agora, a receita total do KPI considera apenas pedidos ativos:

- `aprovado`
- `emitido`

Resultado atual:

```text
receita_total = 10.747.503,47
```

Isso e mais coerente para um dashboard executivo, porque pedido cancelado nao
deve inflar receita operacional.

## 3. Rotatividade de estoque

Antes, a rotatividade usava:

```python
saidas_total / media(estoque_final)
```

Isso gerava um valor muito alto porque comparava saidas totais contra a media
simples por produto.

Agora, o calculo usa:

```text
saidas_total / ((estoque_inicial_total + estoque_final_total) / 2)
```

Resultado atual:

```text
rotatividade = 0.95
```

Esse valor fica em uma escala mais defensavel para analise de estoque.

## 4. Variacoes simuladas

Foram encontrados valores fixos no codigo, como:

```python
fill_rate_variacao = 2
receita_variacao = 12
entregas_prazo_variacao = 3
rotatividade_variacao = 8
```

Isso foi tratado porque indicador executivo nao deve misturar dado real com mock.

Agora:

- Variacoes com serie ordenavel usam comparacao entre janelas recentes.
- Indicadores sem historico confiavel ficam com `0.0`.

## 5. Qualidade de dados encontrada

Nova rota criada:

```text
/api/data-quality
```

Principais achados atuais:

- `30.8%` de pedidos cancelados.
- `174` produtos com divergencia entre estoque final e inventario real.
- `534` unidades divergentes no estoque.
- `401` entregas com prazo real maior que prazo estimado.
- `14` entregas com prazo real igual a zero.

Esses pontos nao significam erro do dashboard. Eles indicam problemas ou riscos
operacionais que o dashboard passa a revelar.

## 6. Melhorias de arquitetura

Antes:

```text
app.py fazia quase tudo:
leitura de CSV + calculo + rotas + serializacao
```

Depois:

```text
logimax/data_sources.py -> leitura e validacao dos CSVs
logimax/analytics.py    -> regras de negocio e KPIs
logimax/serializers.py  -> conversao segura para JSON
app.py                  -> rotas Flask
```

Essa separacao deixa o projeto mais proximo de um nivel pleno/senior porque:

- facilita testes;
- reduz mistura de responsabilidades;
- deixa formulas auditaveis;
- permite trocar CSV por banco/API no futuro;
- melhora explicacao tecnica em entrevista ou apresentacao.

## 7. Confiabilidade do frontend

Antes, os graficos dependiam exclusivamente de CDN externo:

```html
https://cdn.jsdelivr.net/npm/chart.js
```

Na validacao visual, o dashboard mostrou:

```text
Erro: Chart.js nao carregou. Verifique sua conexao.
```

Foi criado um vendor local:

```text
static/vendor/chart.umd.js
```

Agora o dashboard carrega Chart.js localmente e usa CDN apenas como fallback.
