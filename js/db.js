/********************
DEFINICION DE JSON
********************/

var jsonCultivos = '[{"id":1,"nombre":"Sorgo","categoria":1,"idcategoria":"A","descri":"Sorgo tiene su descripcion","feccre":"2017-12-19T09:15:58","fecupd":"2017-12-19T09:15:58","estado":2},{"id":2,"nombre":"Alfafa","categoria":1,"idcategoria":"A","descri":"Alfafa tiene su descripcion","feccre":"2018-12-19T09:15:58","fecupd":"2018-12-19T09:15:58","estado":2},{"id":3,"nombre":"Maiz","categoria":1,"idcategoria":"A","descri":"Maiz tiene su descripcion","feccre":"2017-12-19T09:15:58","fecupd":"2017-12-19T09:15:58","estado":2}]';

var arrayCultivos = JSON.parse(jsonCultivos);

/********************
DEFINICION DE SQLite
********************/
/*
Funciones fundamentables en WebSql

openDataBase() >>> Este metodo crea una base de datos y si existe abra la base de datos
	var db = openDatabase ('mydb','1.0','Test DB',2*1024*1024);
Tiene 5 parametros
	*Nombre de la base de datos
	*kNumero de version
	*Text descriptivo
	*Tamañao de la base de datos
	*Funcion de callback(es opcional)

transaction() >>> ejectura una transaccion y lanza una funcion de callback si la transaccion es existo y otra funcion si existe error
	db.transaction(function (tx) {
		tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique,log)');
	});

executeSql() >>> Ejecuta una consulta o query, tambien tiene una funcion para el existo o el error
*/
/********************
Variables Globales
********************/
var db;
var dbNombre ='WebSqlDB';
var dbVersion = '1.0';
var dbDescripcion = 'WebSqlDB';
var dbSize = 2 * 1024 * 1024; //2MG
/********************
Funciones
*********************/
//Error en la transaccion
function errorHandler (transaction,error) {
	console.log('Error: ' + error.message + ' code: ' + error.code);
	// body... 
}
//Transaccion existo
function exitoHandler(){
	insertarCultivos();
	//enlistarValores();
	console.log('caso de exito');
}
function nullHandler(){
	//se duplican los casos de exitos, por eso lo dejamos vacio

}
//Finaliza la carga
window.onload = function() {
	//listeners
	//document.getElementById("insertar").onclick = insertarUsuario;
	//document.getElementById("enlistar").onclick = enlistarValores;
	//Abrimos la base de datos
	db = openDatabase (dbNombre, dbVersion , dbDescripcion , dbSize);

	/*
	db.transaction (function (tx){
		tx.executeSql('DELETE FROM cultivos',
			[],
			nullHandler,
			errorHandler);}, //el execute primero va al error
			errorHandler,nullHandler //transaction primero va al error y despues al exito
	);
	*/

	//Creamos o abrimos la tabla
	db.transaction (function (tx){
		tx.executeSql('CREATE TABLE IF NOT EXISTS cultivos (id INTEGER NOT NULL PRIMARY KEY, nombre TEXT NOT NULL, categoria INTEGER NOT NULL, estado INGEGER)',
			[],
			nullHandler,
			errorHandler);}, //el execute primero va al error
			errorHandler,exitoHandler //transaction primero va al error y despues al exito
	);
}
//Enlistamos los registros
/*
function enlistarValores(){
	//Limpiamos el area de la salida
	$('#salida').html('');
	//Leemos la tabla de usuarios
	db.transaction( function (tx){
		tx.executeSql('SELECT * FROM cultivos;', [],
			//Funcion succes
			function(tx,data) {
				if (data != null && data.rows != null){
					//Crear lista
					$('#salida').append("<ul id='list' data-role='listview' data-inset='true'></ul>");
					$('#salida').trigger("create");
					//Contenido
					for (var i = 0; i < data.rows.length ; i++) {
						var r = data.rows.item(i);
						$('#list').append('<li>' + r.id + '. ' + r.nombres + ' ' + r.apellidos + '</li>');
					}
					$('#list').listview("refresh");
				}
			},errorHandler);
	}, errorHandler, nullHandler);
	return;
}
*/
//Insertamos el registro
function insertarCultivos(){

	var cant;
	db.transaction( function (tx){
		tx.executeSql('SELECT top(id) FROM cultivos;', [],
			//Funcion succes
			function(tx,data) {
				if (data != null && data.rows != null){
					console.log(data.id);
					cant = data.rows;


				}
			},errorHandler);
	}, errorHandler, nullHandler);

	//Insertamos el valor
	db.transaction(function(tx){
		len = arrayCultivos.length;
		//tx.executeSql('DELETE cultivos');
		for (var i = 0; i <= len -1; i++) {
				if (cant==0)
				{
					
					tx.executeSql('INSERT INTO cultivos(nombre,categoria,estado) VALUES(?,?,?)',
						[ arrayCultivos[i].nombre,arrayCultivos[i].categoria,arrayCultivos[i].estado],
						nullHandler,errorHandler);
				}
				
			
    	}

	});
	
	//Desplegamos los datos
	//enlistarValores();
	return false;
}