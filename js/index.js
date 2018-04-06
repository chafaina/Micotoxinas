
var ambiente = ["CLARO AR","CLARO UY","DEKA"],
    producto = ["DkTrack","Obd2","Geo Forms","Geo Ventas"],
    empresa = ["AE","CS","MZ"];
    

function casos(){
	agregarElemento(ambiente,"option","ambiente");
	agregarElemento(producto,"option","producto");
	agregarElemento(empresa,"option","empresa");
}

function agregarElemento(array,etiqueta,elementId){

    for (i = 0; i <=array.length-1; i++){

    var elemento = document.createElement(etiqueta);
    var contenido = document.createTextNode(array[i]);
    elemento.appendChild(contenido);
    document.getElementById(elementId).appendChild(elemento);
    }

}


/**** FIN ****/
console.log('index.js')