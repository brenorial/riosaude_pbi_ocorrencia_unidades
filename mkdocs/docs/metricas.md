# 📊 Métricas DAX no Power BI para Análise de Ocorrências

Este documento apresenta e explica as principais medidas DAX utilizadas no Power BI para análise de dados de ocorrências, extraídos de uma planilha Google convertida para JSON via Google Apps Script.

---

## ✅ Contagem total de ocorrências

```DAX
Total Ocorrências = COUNTROWS(exec)
```

* Conta o número total de linhas da tabela `exec`, que representa todas as ocorrências.
* Útil para obter o total geral de registros.

---

## ✅ Contagem de títulos preenchidos (não nulos)

```DAX
Ocorrências com Título = COUNTA(exec[Título da Ocorrência])
```

* Conta quantos registros têm a coluna `Título da Ocorrência` preenchida.
* Ignora valores vazios/nulos.

---

## ✅ Ocorrências do tipo "assistencial"

```DAX
Assistenciais = 
CALCULATE(
    COUNTROWS(exec),
    exec[Tipo de Ocorrência] = "Assistencial"
)
```

* Conta apenas as linhas onde o tipo de ocorrência é `"assistencial"`.
* Útil para filtrar por tipo específico.

---

## ✅ Ocorrências distintas (sem repetições)

```DAX
Ocorrências Distintas = DISTINCTCOUNT(exec[Título da Ocorrência])
```

* Conta quantos títulos únicos existem na base.
* Ideal para evitar contagens duplicadas de registros com nomes repetidos.

---

## 🔍 Observações importantes

* A tabela `exec` deve estar corretamente nomeada no modelo do Power BI (caso contrário, substitua pelo nome real da tabela).
* Os nomes das colunas entre colchetes (`[ ]`) devem corresponder exatamente aos nomes presentes no modelo de dados.

---

## 💡 Dicas adicionais

* Use segmentações (filtros visuais) no Power BI para cruzar essas métricas por período, status ou setor.
* Combine medidas com gráficos de barras, contadores e cartões para melhor visualização.

---

## 🧠 Sugestão de Métricas Avançadas

* Tempo médio de resolução
* Percentual de assistenciais vs total
* Títulos mais frequentes
* Tendência mensal de registros

