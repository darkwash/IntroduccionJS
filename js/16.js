
// Declaracion de Funcion
sumar();
function sumar() {
    console.log(10 + 10);
}



//Expresion de la funcion

const sumar2 = function(){
    console.log(3 + 3);
}
sumar2();

// iife, se usa para proteger variables que no sean leidas (se mezclen) desde otro archivo
(function () {
    console.log('Esto es una funcion');
})();
