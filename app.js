var express = require ("express");
var app = express();
var Database = require("./models/database").Database;//llamamos al Schema,librerias
var bodyParser = require("body-parser");

/*
true o el false define el olgaritmo con que se va hacer el parsing la libreria,
si el 'false' no se puede hacer parsing de array o parámetro que se envian de una 
peticón get o post que no sean JSON
*/
/*
"body-parser" buscar los archivos dentro de los datos y extraerlos
 que vienen en una petición JSON
 */
app.use(bodyParser.json());//para peticiones application/json
app.use(bodyParser.urlencoded({extended: true}));


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
