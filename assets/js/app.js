var api = {
    url: 'http://laboratoria.cuadra.co:9339/api/v1/students/'
};

var $contenedorLista = $("#alumnList");

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
    var nombreAlumna = alumna.name + " " + alumna.pLastName + " " + alumna.mLastName;
    // creando elementos html por alumna
    var $filaAlumna = $('<tr/>');
    var $listaDato = $('<td/>').append(numLista);
    var $nombreDato = $('<td/>').append(nombreAlumna);
    var $check = $('<td/>').append('<input type="checkbox"/>');
    //agregando elementos a fila
    $filaAlumna.append($listaDato).append($nombreDato).append($check);
    $contenedorLista.append($filaAlumna);
    
    console.log(alumna)
}


$(document).ready(cargarPagina);
