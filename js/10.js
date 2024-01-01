//Objetos

const producto = {
    NombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true 
}

/* var auto = new Object(); //se puede crear objeto como variable
auto.marca = 'Nissan'; //asignando valores
auto.modelo = 'Versa';
auto.año = 2007;
auto['color'] = 'red'; /otra forma de asignar valores */

console.log(producto);

// console.log(producto.precio);
// console.log(producto.NombreProducto);
// console.log(producto.disponible);
// console.log(producto['precio']);

//Agregar Nuevas propiedades
producto.imagen = 'Imagen.jpg';

//Eliminar nuevas propiedades
delete producto.disponible;