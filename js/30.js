const usuarioAutenticado = new Promise((resolve, reject) =>{
    const auth = true;
    if (auth) {
        resolve('Usuario Autenticado'); //EL PROMISE SE CUMPLE
    } else {
        reject('No se pudo iniciar sesion'); //el promise no se cumple
    }
}); 

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch( error => console.log(error));

// En los promises existen 3 valores posibles
// Pending: no se ha cumplido pero tampoco se ha rechazado
// fulfilled: ya se cumplio
// Rejected: se ha rechazado o no se pudo cumplir
