const boton = document.querySelector("#boton");

boton.addEventListener("click", () => {
  Notification.requestPermission().then((resultado) => {
    console.log(`El resultado es: ${resultado}`);
  });
}); //Este codigo es para añadir un listened a un boton

if (Notification.permission === "granted") {
  new Notification("Esta es una notificacion", {
    icon: "img/ccj.png",
    body: "Codigo con juan, los mejores tutoriales",
  }); // este codigo es para ver si esta habilitada la notificacion y manda una
}
