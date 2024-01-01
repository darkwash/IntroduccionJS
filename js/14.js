//Arreglos o Arrays

const numeros = [10,20,30,40,50];
// console.table(numeros);

const meses = ['Enero','Febrero', 'Marzo','Abril','Mayo'] ; //corchetes son usados en los arrays
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'); //Tambien se pueden crear con el constructor
// console.table(meses);

const arreglo = ['String', 10, false, null, {nombre: 'Hector', apellido: 'Vazquez'}, [1, 2, 3]];
console.log(arreglo); //Arreglo puede ser combinado, no solo a un tipo
//Acceder a los valores de un arreglo
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);

//Conocer la extension de un arreglo

// console.log(meses.length);

// numeros.forEach( function(numero){
//     console.log(numero);
// })

numeros.push(60,70,80); //Agrega al final del arreglo

numeros.unshift(-10, -20 , -30); //Agrega al inicio del Arreglo
console.table(numeros); 

// meses.pop(); // Elimina el ultimo elemento del Array
// meses.shift(); //Elimina el primer elemento del Array

// meses.splice(2, 1);
// console.table(meses);

//Rest Operator o Spread Operator

const nuevoArreglo =  ['Junio', ...meses];
console.log(nuevoArreglo);
