var mongoose = require("mongoose");
var Schema = mongoose.Schema;//constructor para poder generar nuestros esquemas

/*conexion MongoDB*/
mongoose.connect("mongodb://localhost/cotizaciones");

var database_schema = new Schema({
	nombre: String,
	fecha: String,
	apertura: String,
	alza: String,
	bajada: String,
	cierre: String,
	volumen: String,
	ajuste_cierre: String,
});
/*
model => es el constructor que genera los modelos
Database => es el nombre del modelo
*/
var Database = mongoose.model("Database",database_schema);

module.exports.Database = Database;