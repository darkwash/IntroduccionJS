// const puntaje = 1000;

// if (puntaje !== 1000) {
//     console.log('No es igual');
// }
// else{
//     console.log(`Si el puntaje es ${puntaje}`);
// }

// const efectivo = 100;
// const carrito = 800;
// if (efectivo > carrito) {
//     console.log('El usuario puede pagar')
// } else {
//     console.log('Fondos insuficientes');
// }

const rol = 'visitante';

if (rol === 'Administrador') {
    console.log('Acceso a todo el Sistema');

} else if (rol === 'Editor') {
    console.log('Eres editor, puedes entrar pero no puedes hacer mucho');
} else{
    console.log('No tienes Acceso');
}