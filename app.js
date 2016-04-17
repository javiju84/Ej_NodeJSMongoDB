var express = require ("express");
var app = express();




/*views*/
app.set("view engine","jade");
app.get("/", function (req,res){
	res.render("index");
});










app.listen(8080);
console.log("Servidor conectado puerto 8080")
