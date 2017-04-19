/**
* addPlan(jsonData);
* @pram{jsonData} jsonData in Array
* @pram{String} jsonData[0] Spreadsheet_idStr IDString
* @pram{String} jsonData[1] sheet_nameStr sheetName
* @pram{String} jsonData[2] clmNo 
* @pram{String} jsonData[3] inPersonCharge
* @pram{String} jsonData[4] planDate  
* @pram{String} jsonData[5] schedule
* @return{void}
*/
function addPlan(jsonData) {
  var temp = JSON.parse(jsonData);  
  var Spreadsheet_idStr = temp[0];
  var sheet_nameStr = temp[1];
  var clmNo = temp[2];
  var inPersonCharge = temp[3];
  var planDate = temp[4];
  var schedule = temp[5];
  try{
    var spShObj = SpreadsheetApp.openById(Spreadsheet_idStr).getSheetByName(sheet_nameStr);
  }catch(e){
    return e
  }
  var data = spShObj.getDataRange().getValues();
    for(var i = data.length-1;i >= 0;i--){
      if(data[i][0] == clmNo){
        data[i][12] = planDate;//"日付";
        data[i][13] = "決定"; 
        data[i][14] = inPersonCharge;//"担当者";
        data[i][15] = schedule;//"時間区分";
        spShObj.getDataRange().setValues(data);
        var json = JSON.stringify(data);
        return json
      }
    } 
return "noData"
}

