/**
* var data = Spreadsheet_dataFetch("idString","sheetNameString");
* @pram{jsonArray} jsonArray
* @pram{String} jsonArray[0] spreadsheet_IDString
* @pram{String} jsonArray[1] sheet_nameString
* @returns{String[][]} StringTwoDimensionalArray 
*/
function SpreadSheet_twoDimensional_dataFetch(jsonData) {
  var temp = JSON.parse(jsonData);  
  var Spreadsheet_idStr = temp[0];　　　　　//レコードデータ
  var sheet_nameStr = temp[1];
  try{
    var obj = SpreadsheetApp.openById(Spreadsheet_idStr);
  }catch(e){
    return "nodata"
  }
  if(sheet_nameStr == undefined){
    sheet_nameStr = obj.getSheets()[0].getName();
  }
  var data = obj.getSheetByName(sheet_nameStr).getDataRange().getValues();
  var json = JSON.stringify(data);
  return json
}

