var api = {
    url: 'http://laboratoria.cuadra.co:9339/api/v1/students/'
};

var $contenedorLista = $("#alumnas");

var cargarPagina = function () {
    cargarLista();
};

var cargarLista = function(){
    //para llamar datos de API
    $.getJSON(api.url,function(response){
       console.log(response)
    })
};


$(document).ready(cargarPagina);
