# Converter Planilha Google em JSON via Apps Script

## 1. Acesse o Editor de Script
- No Google Sheets: `Extensões → Apps Script`

## 2. Cole o código abaixo

```javascript
function doGet(e) {
  var ss = SpreadsheetApp.openById('');
  
  var nome_aba = ('BASE');  
  var sheet = ss.getSheetByName(nome_aba);
  
  if (!sheet) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: `A aba '${nome_aba}' não foi encontrada.` }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  
  var jsonData = data.slice(1).map(function(row) {
    var obj = {};
    headers.forEach(function(header, i) {
      obj[header] = row[i];
    });
    return obj;
  });

  return ContentService
    .createTextOutput(JSON.stringify(jsonData))
    .setMimeType(ContentService.MimeType.JSON);
}
```


## 📌 Objetivo

- Acessar uma planilha Google pelo seu ID
- Ler os dados da aba chamada `"BASE"`
- Transformar os dados em JSON
- Retornar esse JSON como resposta da API pública

---

## 📜 Código comentado

```javascript
function doGet(e) {
  // 1. Abre a planilha pelo ID (deve ser preenchido com o ID real)
  var ss = SpreadsheetApp.openById('');

  // 2. Define o nome da aba a ser acessada
  var nome_aba = ('BASE');  

  // 3. Tenta obter a aba pelo nome
  var sheet = ss.getSheetByName(nome_aba);

  // 4. Se a aba não for encontrada, retorna um erro em JSON
  if (!sheet) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: `A aba '${nome_aba}' não foi encontrada.` }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // 5. Lê todos os dados da aba (inclusive cabeçalho)
  var data = sheet.getDataRange().getValues();

  // 6. Separa a primeira linha como os nomes das colunas (headers)
  var headers = data[0];

  // 7. Transforma cada linha em um objeto JSON
  var jsonData = data.slice(1).map(function(row) {
    var obj = {};
    headers.forEach(function(header, i) {
      obj[header] = row[i];  // Associa o valor à respectiva chave
    });
    return obj;
  });

  // 8. Retorna os dados como texto JSON com MIME do tipo application/json
  return ContentService
    .createTextOutput(JSON.stringify(jsonData))
    .setMimeType(ContentService.MimeType.JSON);
}
```


# Conectar Power BI ao JSON do Apps Script

## 1. Abra o Power BI Desktop
- Vá em **"Obter Dados" → Web**

## 2. Insira a URL da API JSON

## 3. Transformar os Dados
- O Power BI abrirá o conteúdo como JSON
- Clique em **"Transformar dados"**
- Use o botão de **expandir** (ícone de duas setas ↔️) para abrir os campos

## 4. Carregar no Modelo
- Após expandir os dados, clique em **"Fechar e Aplicar"**
