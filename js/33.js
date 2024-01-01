async function obtenerEmpleado() {
  const url = "empleados.json";
  // fetch(url)
  //   .then((respuesta) => respuesta.json())
  //   .then((datos) => {
  //     const { empleados } = datos; //cuando el arreglo json tiene nombre, se utiliza destructuring para sacar valor y posterior un foreach o map
  //     empleados.forEach((empleado) => {
  //       console.log(empleado.id);
  //     });
  //     // const arreglo = datos.map((dato) => console.log(dato.id));
  //   }); //cuando el arreglo json no tiene nombre, se utiliza map o foreach directo para manejar datos sin necesidad de destructuring
  const resultado = await fetch(url);
  const datos = await resultado.json();
  console.log(datos);
}

obtenerEmpleado();
