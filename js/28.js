// clases

class Producto { //primero se crea la clase 
    constructor(nombre, precio){ //se declara el constructor para instanciar variables
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){ //funciones dentro de clase con return
        
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }

    /* obtenerPrecio(){ si el resultado es por medio de funciones sin return, es decir por medio de console.log
        console.log(this.precio);
    } */
    
}

const producto2 = new Producto('Monitor Curvo de 49"',800);//se crea al objeto para instanciarla y le damos valores
const producto3 = new Producto('Laptop"',300);


//Herencia

class Libro extends Producto{ //extends indica que el hijo heredara al padre (nombre de la clase a heredar)
    constructor(nombre, precio, isbn){
        super(nombre, precio); //se requiere la palabra reservada super(); para indicar las variables que se instanciaran
        this.isbn = isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es: ${this.isbn}`;
    }

    /* obtenerPrecio(){ esto es cuando e lresultado esta en variables, no funciona con literal string
        super.obtenerPrecio();
        console.log('y si hay en existencia');
    } */
}
const libro = new Libro('El poder de la mancha', 450, 12354833);
console.log(libro.formatearProducto());

console.log(producto2.formatearProducto()); //manda salida en pantalla 

console.log(libro.obtenerPrecio());

