function doGet(){
   return HtmlService.createTemplateFromFile("index").evaluate();
}

function include(ruta){
return HtmlService.createHtmlOutputFromFile(ruta).getContent();
}

function saveGoogle(data){
   Logger.log(data)
   return "Hola soy GDS";
 }