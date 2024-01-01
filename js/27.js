//POO

/* object literal */
// const producto = {
//     nombre: 'Tablet',
//     precio: 500
// }

// Object Constructor


function Cliente(nombre, apellido) { //se recibe valores de variable a this.variable
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function(){ //se formatea o se realiza la accion de los valores recibidos utilizando clase.propotype.nombre_funcion
    return `El Cliente ${this.nombre} Apellido: ${this.apellido}`;
}

const cliente = new Cliente('Hector', 'Vazquez'); //se crea la instancia a la funcion cliente

console.log(cliente.formatearCliente());




const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

// Crear funciones que solo se utilizan en un objeto especifico
Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de $ ${this.precio}`;
}

console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());















