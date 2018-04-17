var cultivo = ["Sorgo","Alfafa","Maiz"],
    animal = ["Bovino de Leche","Bovino de Carne"],
    ubicacion = ["Silo","Grano"];
    

function casos(){
	agregarElemento(cultivo,"option","cultivo");
	agregarElemento(animal,"option","animal");
	agregarElemento(ubicacion,"option","ubicacion");
}

function agregarElemento(array,etiqueta,elementId){
    
    for (i = 0; i <=array.length-1; i++){
        var elemento = document.createElement(etiqueta);
        var contenido = document.createTextNode(array[i]);
        elemento.appendChild(contenido);
        document.getElementById(elementId).appendChild(elemento);
    }

}


/*

// Initialize App  
var myApp = new Framework7();
        
// Initialize View          
var mainView = myApp.addView('.view-main')          
        
// Load page from about.html file to main View:
mainView.router.loadPage('about.html');

// Initialize App  
var myApp = new Framework7();
        
// Initialize View          
var mainView = myApp.addView('.view-main')          
        
// Go back on main View
mainView.router.back();

*/


/**** FIN ****/
console.log('index.js')
