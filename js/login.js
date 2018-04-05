console.log('login.js');
var registros,i;

//DEFINIMOS EL INICIO POR MEDIO DE JQUERY
$(function(){

	//localStorage, se utiliza en lugar de las cookies y son datos persistentes
	//localStorage.setItem(variable,valor) >>> GRABAR INFORMACION
	//localStorage.getItem(variable) >>> RECUPERAR LA INFORMACION
	//localStorage.removeItem(variable) >>> ELIMINAR LA INFORMACION

	//sessionStorage no son persistenes, expira cuando se cierra la app

	//Ambos se trabaja en una cadena JSON

	//definimos el storage como localstorage
	storage = window.localStorage;

	//TOMAMOS REGISTROS
	registros = storage.getItem("registros");
	//PARSE convierte un objeto json en javascript
	registros=JSON.parse(registros);
	//si no tiene ningun valor, lo generamos con un array vacio
	if(registros==null){
		 registros = [];
	}
	//document.getElementById("salida").innerHTML = "<p>Titulos fuera de línea: "+registros.length+"</p>";

		
		//falta validacion
		var titulo = $("#titulo").val();
		var autor = $("#autor").val();
		var editorial = $("#editorial").val();
		var anio = $("#anio").val();
		//stringfy arma el objeto JSON
		var registro = JSON.stringify({
			titulo:titulo,	
			autor:autor,
			editorial:editorial,
			anio:anio
		});
		//añadir al objeto JSON
		registros.push(registro);
		//lo alamacenamos con el nombre registro
		storage.setItem("registros", JSON.stringify(registros));
		//Actualiza mensaje
		//document.getElementById("salida").innerHTML = "<p>Titulos fuera de línea: "+registros.length+"</p>";
		alert("Registro añadido fuera de línea existosamente");


});

	//CUANDO EL USUARIO HACE CLICK
	$("#forma").click(function(){
		console.log('click');
		//falta validacion
		var titulo = $("#titulo").val();
		var autor = $("#autor").val();
		var editorial = $("#editorial").val();
		var anio = $("#anio").val();
		//stringfy arma el objeto JSON
		var registro = JSON.stringify({
			titulo:titulo,	
			autor:autor,
			editorial:editorial,
			anio:anio
		});
		//añadir al objeto JSON
		registros.push(registro);
		//lo alamacenamos con el nombre registro
		storage.setItem("registros", JSON.stringify(registros));
		//Actualiza mensaje
		document.getElementById("salida").innerHTML = "<p>Titulos fuera de línea: "+registros.length+"</p>";
		alert("Registro añadido fuera de línea existosamente");
		return true;
	});

	function click(){
		console.log('entro en el evento');
	}
	