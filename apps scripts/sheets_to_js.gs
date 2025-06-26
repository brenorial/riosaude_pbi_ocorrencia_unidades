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
