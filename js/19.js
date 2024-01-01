
// function sumar(n1, n2){
//     return n1 + n2;
// }

// const resultado = sumar(2, 3);

// console.log(resultado);

let total = 0;

function agregarcarrito(precio) {
    return total +=precio;
}

function calcularImpuesto(total) {
    return 1.15*total;
}

agregarcarrito(200);
agregarcarrito(400);
agregarcarrito(600);

console.log(total);

console.log(`El total a Pagar con impuestos es ${calcularImpuesto(total)}`);
