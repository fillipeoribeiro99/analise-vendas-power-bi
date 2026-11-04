# 📊 Análise de Vendas e Performance Comercial

Projeto de portfólio em **Análise de Dados e Business Intelligence**, desenvolvido para analisar vendas, faturamento, lucro, produtos, clientes e canais comerciais.

## Objetivo
Transformar uma base transacional de vendas em indicadores e insights para apoiar decisões comerciais.

## Ferramentas
- Power BI
- Power Query
- DAX
- Excel/CSV
- GitHub

## Principais KPIs
- Faturamento
- Lucro
- Margem de lucro
- Quantidade vendida
- Ticket médio
- Crescimento mensal
- Ranking de produtos e vendedores

## Estrutura sugerida do dashboard

### 1. Visão Geral
Cards com Faturamento, Lucro, Margem, Quantidade e Ticket Médio.
Gráficos de evolução mensal, faturamento por categoria e faturamento por região.

### 2. Produtos
Ranking dos produtos, faturamento por categoria e margem por produto.

### 3. Performance Comercial
Faturamento e lucro por vendedor, canal e segmento.

## Modelo de dados
A base contém 900 registros de vendas durante 2025. Cada registro representa uma venda e possui informações de data, produto, categoria, região, vendedor, segmento, canal, quantidade, preço, desconto, faturamento, custo e lucro.

## Perguntas de negócio
- Quais categorias geram mais faturamento?
- Quais produtos apresentam maior margem?
- Qual região possui melhor desempenho?
- Quais vendedores possuem maior faturamento?
- Como as vendas evoluem ao longo do ano?
- Quais canais são mais relevantes?
- Onde existem oportunidades de melhoria?

## Medidas DAX sugeridas

```DAX
Faturamento Total = SUM(Vendas[Faturamento])

Lucro Total = SUM(Vendas[Lucro])

Margem de Lucro = DIVIDE([Lucro Total], [Faturamento Total])

Quantidade Vendida = SUM(Vendas[Quantidade])

Ticket Médio = DIVIDE([Faturamento Total], DISTINCTCOUNT(Vendas[ID_Venda]))

Faturamento Médio Mensal =
AVERAGEX(VALUES(Vendas[Mes]), [Faturamento Total])
```

> Observação: o nome da tabela no Power BI pode ser alterado para `Vendas`.

## Próximos passos
1. Importar `dados_vendas.csv` no Power BI.
2. Criar as medidas DAX.
3. Criar as páginas do dashboard.
4. Adicionar filtros por período, categoria, região, canal e vendedor.
5. Exportar imagens do dashboard para documentar o projeto.
6. Publicar a documentação e a base no GitHub.

## Projeto de portfólio
Este projeto é uma simulação de cenário empresarial e tem finalidade educacional e de portfólio.
