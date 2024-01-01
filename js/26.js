//this con arrow function, se debe declarar una variable window para que pueda leerla
window.nombre = 'Hector';
window.total = 5000;

// This

const reservacion = {
    nombre: 'Hector',
    apellido: 'Vazquez',
    total: 5000,
    pagado: false,
    informacion: ()=> { //En este apartado no se debe usar arrow function porque no detecta la variable local sino a la ventana global
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}
const reservacion2 = {
    nombre: 'Sinai',
    apellido: 'Martinez',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();
