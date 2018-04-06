//VARIABLES

function inicializarF7(){
    // INICIALIZAR APP - VALORES QUE SE LE PUEDEN AGREGAR AL OBJETO https://v1.framework7.io/docs/init-app.html
    var myApp = new Framework7({
        //modalTitle: 'Confirma che!'

        //loadPage: 'login.html'

        /*preroute: function (view, options) {
            //view.router.loadPage('about.html'); //load another page with auth form
            if (!userLoggedIn) {
                view.router.loadPage('auth.html'); //load another page with auth form
                return false; //required to prevent default router action
            }
        }*/
    });

    // PARA MANIPULAR EL DOM
    var $$ = Dom7;

    // AGREGAR VISTA
    var mainView = myApp.addView('.view-main', {
        // Because we want to use dynamic navbar, we need to enable it for this view:
        dynamicNavbar: true
        //domCache: true //Activamos el DOM cache, para paginas inline


    });

    // CODIGO PARA EJECUTAR NUESTRAS PAGINAS
    //myApp.mainView.router.loadPage('login.html');
    

    // Option 1. Usar la devolución de llamada de página para la página
    myApp.onPageInit('buscador', function (page) {
        

        activarEtiqueta(true);
        


        $$('.confirmar').on('click', function () {
            //alertaConfirmar
            var caso = document.getElementById("caso");
            myApp.modal({
                title:  'Advertencia',
                text: 'Deseas registrar el caso: ' + caso.value + '?',
                buttons: [
                {
                    text: 'Si',
                    onClick: function() {
                        //modificar datos del modal en framework7.js
                        myApp.alert('Caso Registrado');
                        var view = myApp.getCurrentView();
                        if (!view) return;
                        if (view.history.length > 1) {
                            view.router.back();
                            return;
                        }

                    }
                },
                {
                    text: 'NO',
                    onClick: function() {
                        //VOLVER
                        /*var view = myApp.getCurrentView();
                        console.log(view);
                        if (!view) return;
                        if (view.history.length > 1) {
                            view.router.back();
                            return;
                        }*/
                    }
                },
                ]
            })
        });
        $$('.cancelar').on('click', function () {
            //alertaCancelar
            myApp.alert('Se perdieron los datos',function(){
                var view = myApp.getCurrentView();
                console.log(view);
                if (!view) return;
                if (view.history.length > 1) {
                    view.router.back();
                    return;
                }
            });
        });

    })

    // Option 1. Usar la devolución de llamada de página para la página
    myApp.onPageInit('historial', function (page) {
        

        activarEtiqueta(true);
        
    })

    // Option 1. Usar la devolución de llamada de página para la página
    myApp.onPageInit('perfil', function (page) {
        

        activarEtiqueta(true);
        
    })

    // Option 1. Usar la devolución de llamada de página para la página
    myApp.onPageInit('resultado', function (page) {
        //onPageBeforeInit
        if (document.getElementById('txtObservacion').value!=""){
            console.log('no es vacio');
        }
        //activarEtiqueta(true);
    })


    

    // Handle Cordova Device Ready Event
    $$(document).on('deviceready', function() {

        casos();

        activarEtiqueta(false);

        cargarListado();
        
        //VOLVER ATRAS
         document.addEventListener("backbutton", function(e){
            e.preventDefault();
            /*SI EL MENU LATERAL ESTA ABIERTO*/
            if ($$('.panel.active').length > 0) {
                myApp.closePanel();
                return;
            }
            /*SI HAY UN HISTORIAL: PAGINA ABIERTA*/
            var view = myApp.getCurrentView();
            console.log(view);
            if (!view) return;
            if (view.history.length > 1) {
                view.router.back();
                return;
            }
            /*SI NO SE CUMPLE LO ATERRIOR: CERRAR APP*/
            myApp.confirm('¿Quiere salir de la aplicación?', 'Atención!', function () {
                navigator.app.exitApp();
            });
        }, false);

        /**** FIN ****/
        console.log("deviceReady");
    });



}


inicializarF7();

/* no recomendable
function CambiarHtml(){
    var myApp = new Framework7({});
    setTimeout("location.href='login.html'", 5000);
}
*/


function activarEtiqueta(newPage){
    //Activar la etiqueta en el evento click
    $$('.navbarClick').on('click', function (e) {
        var popup = document.getElementsByClassName("col button button-fill color-green")[0];
        //Verifica que no este vacio
        if (popup != null) {
            popup.setAttribute("class","col button color-green");
            //console.log(popup);
        }
        //Porque se genera dos etiquetas con la misma class
        if(newPage==true){
            var popup = document.getElementsByClassName("col button button-fill color-green")[0];
            //Verifica que no este vacio
            if (popup != null) {
            popup.setAttribute("class","col button color-green");
            //console.log(popup);
        }
        }
        //console.log($$(this).attr('html'));
        e.target.setAttribute("class","col button button-fill color-green");
        //console.log (e.target);

    });
}

function loadPage() {
        if (document.getElementById('txtObservacion').value!=""){

            // Initialize App  
            var myApp = new Framework7();
                    
            // Initialize View          
            var mainView = myApp.addView('.view-main')          
                    
            // Load page from about.html file to main View:
            mainView.router.loadPage('buscador.html');

            console.log('no es vacio');
        }
}
