// Metodos de propiedad
const reproductor = {
    reproducir: function(id){
    
        console.log(`Reproduciendo Cancion con el ID: ${id}`);
    },
    pausar: function() {
        console.log('Pausando...');
    },
    crearPlaylist: function (nombre) {
        console.log(`Creando playList ${nombre}`);
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo playList ${nombre}`);
    } 
}


reproductor.borrarcancion = function (id) {
    console.log(`Eliminando la cancion ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarcancion(23);
reproductor.crearPlaylist('Para no dejar de amarte');
reproductor.reproducirPlaylist('Para no dejar de amarte');