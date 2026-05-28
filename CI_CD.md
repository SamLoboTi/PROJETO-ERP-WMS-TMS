# CI/CD simples do LogiMAX

Este arquivo explica a pipeline criada em `.github/workflows/ci.yml`.

## O que e CI/CD

CI significa integracao continua. Na pratica, e uma checagem automatica que roda
quando voce envia codigo para o GitHub.

CD significa entrega/deploy continuo. Nesta primeira fase, ainda nao estamos
publicando automaticamente em producao. Primeiro estamos garantindo que o projeto
passa nos testes.

## Quando a pipeline roda

A pipeline roda quando:

- Voce faz push para `main` ou `master`.
- Voce abre um pull request para `main` ou `master`.
- Voce roda manualmente pelo botao `Run workflow` no GitHub Actions.

## O que a pipeline faz

1. Baixa o codigo do repositorio.
2. Instala Python 3.12.
3. Instala dependencias do `requirements.txt`.
4. Compila arquivos Python para detectar erro de sintaxe.
5. Valida os CSVs de origem.
6. Valida a estrutura basica do HTML do dashboard.
7. Inicia o Flask.
8. Testa endpoints principais da API.

## O que significa passar

Se a pipeline ficar verde, quer dizer:

- O Python nao tem erro de sintaxe.
- Os CSVs obrigatorios existem e tem colunas esperadas.
- O HTML tem os componentes principais.
- A API sobe.
- Endpoints principais respondem HTTP 200.

## O que significa falhar

Se a pipeline ficar vermelha, abra o erro no GitHub Actions e veja qual etapa falhou.

Exemplos:

- Falhou em `Install dependencies`: alguma dependencia esta faltando ou com versao ruim.
- Falhou em `Validate source CSV data`: CSV ausente, coluna ausente ou dado invalido.
- Falhou em `Validate API endpoints`: Flask nao subiu ou endpoint quebrou.

## Proximo passo de CD

Depois que as metricas forem corrigidas e a arquitetura estiver mais limpa, podemos
adicionar deploy automatico para Render, Railway ou Azure.

Fluxo futuro:

```text
GitHub push -> CI passa -> deploy automatico -> dashboard publicado
```

Por enquanto, a decisao correta e estabilizar a qualidade antes de publicar
automaticamente.
