// async / await

function descargarNuevosClientes() {
  return new Promise((resolve) => {
    console.log("Descargando clientes... espere");

    setTimeout(() => {
      resolve("Los clientes se descargaron");
    }, 5000);
  });
}

function descargarUltimosPedidos() {
  return new Promise((resolve) => {
    console.log("descargando pedidos, espere...");

    setTimeout(() => {
      resolve("Pedidos descargados");
    }, 3000);
  });
}

async function app() {
  try {
    /* const clientes = await descargarNuevosClientes();
    const pedidos = await descargarUltimosPedidos();
    console.log(clientes);
    console.log(pedidos); esto es cuando solo hay un await*/
    const resultado = await Promise.all([
      descargarNuevosClientes(),
      descargarUltimosPedidos(),
    ]);
    console.log(resultado[0]);
    console.log(resultado[1]);
  } catch (error) {
    console.log(error);
  }
}

app();

// },5000) sirve para ejecutar algo 1 vez despues de pasar un tiempo, se mide en milisegundos

// setInterval(function () {
//   console.log("set timeout...");
// }, 3000);  setinterval sirve para ejecutar algo cada x milisegundos
