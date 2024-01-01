const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Television 50 Pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
    ];

    // ForEach usar para recorrer un arreglo y mostrar en pantalla o consola

carrito.forEach(producto => console.log(producto.nombre));

    //map usar para crear un nuevo arreglo y filtrar ciertos elementos, se debe guardar en una variable

    const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);
    console.log(arreglo2);
    