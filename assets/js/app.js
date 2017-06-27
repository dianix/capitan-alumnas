var api = {
    url: 'http://laboratoria.cuadra.co:9339/api/v1/students/'
};

var $contenedorLista = $("#alumnas");

var cargarPagina = function () {
    cargarLista();
};

var cargarLista = function () {
    //para llamar datos de API
    $.getJSON(api.url, function (alumnas) {
        //console.log(response)
        alumnas.forEach(formatoAlumna);
    });
};

var formatoAlumna = function (alumna) {
    // guardando datos necesarios
    var numLista = alumna.id;
    var nombreAlumna = alumna.name + " " + alumna.pLastName;
    // creando elementos html por alumna
    var $filaAlumna = $('<tr/>');
    var $listaDato = $('<td/>').append(numLista);
    var $nombreDato = $('<td/>').append(nombreAlumna);
    
    console.log(alumna)
}


$(document).ready(cargarPagina);
