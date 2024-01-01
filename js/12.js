// "use strict"; //Correr JavaScript en modo estricto
//Objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true 
}

// Object.freeze(producto); Sella el objeto producto para que cualquier cambio fuera del objeto no se guarde, elimine o modificar

// console.log(Object.isFrozen(producto)); nos regresa true si el objeto esta sellado/protegido o false si se puede editar
Object.seal(producto); //Sella objeto para no permitir agregar ni eliminar pero si te permite modificar 

producto.precio = 'NUEVO PRECIO';
delete producto.precio;

console.log(producto);







