var express = require ("express");
var app = express();
var Database = require("./models/database").Database;//llamamos al Schema,librerias




/*views*/
app.set("view engine","jade");
app.get("/", function (req,res){
	res.render("index");
});

/*imprimir los valores ingresados por consola*/
app.get("/",function(req,res){
	Database.find(function(err,doc){
		console.log(doc);
		res.render("index");
	});
});

/*crea ruta index.jade*/
app.post("/datavalors",function(req,res){
	var database = new Database({
		nombre: req.body.nombre,
		fecha: req.body.fecha,
		apertura: req.body.apertura,
		alza: req.body.alza,
		bajada: req.body.bajada,
		cierre: req.body.cierre,
		volumen: req.body.volumen,
		ajuste_cierre: req.body.ajuste_cierre
	});
	database.save(function(){
		res.send("Valores guardados")
	});
});

/*puerto*/
app.listen(8080);
console.log("Servidor conectado puerto 8080")
