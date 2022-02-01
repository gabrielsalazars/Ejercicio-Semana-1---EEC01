class Pelicula {
    constructor(nombre, fecha, duracion, genero) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.duracion = duracion;
        this.genero = genero;
    }

}

let misPeliculas = [];
misPeliculas.push(new Pelicula("IT", 2014, 120, "Terror"));
misPeliculas.push(new Pelicula("Resplandor", 1980, 146, "Terror"));
misPeliculas.push(new Pelicula("La mosca", 1958, 155, "Suspenso"));
misPeliculas.push(new Pelicula("Interestelar", 2014, 159, "Ciencia ficción"));
misPeliculas.push(new Pelicula("Divergente", 2014, 120, "Ciencia ficción"));
misPeliculas.push(new Pelicula("Los juegos del hambre", 2008, 120, "Ciencia ficción"));
misPeliculas.push(new Pelicula("Mi novio es un zombi", 2013, 120, "Terror"));
misPeliculas.push(new Pelicula("Mean girls", 2004, 120, "Comedia"));
misPeliculas.push(new Pelicula("Viernes de locos", 2003, 105, "Comedia"));
misPeliculas.push(new Pelicula("Hereditario", 2018, 120, "Terror psicológico"));

let opcion = window.prompt("selecciona una opcion: \n 1.showAllMovies  \n 2.getLongMovies \n 3.getLongest \n 4.getShortest \n 5.addMovie \n 6.removeMovie ");

switch (opcion) {
    case "1":
        mostrarTodasLasPelis();
        break;

    case "2":
        for (let i = 0; i < misPeliculas.length; i++) {
            if (misPeliculas[i].duracion > 120) {
                console.log(misPeliculas[i].nombre);

            }

        }

        break;

    case "3":
        let peliculaMasLarga = misPeliculas[0];
        for (let i = 0; i < misPeliculas.length; i++) {
            actual = misPeliculas[i];
            if (actual.duracion > peliculaMasLarga.duracion) {
                peliculaMasLarga = actual;

            }
        }
        console.log(peliculaMasLarga.nombre + " " + peliculaMasLarga.duracion + " " + peliculaMasLarga.fecha + " " + peliculaMasLarga.genero);

        break;


    case "4":
        let peliculaMasCorta = misPeliculas[0];
        for (let i = 0; i < misPeliculas.length; i++) {
            actual = misPeliculas[i];
            if (actual.duracion < peliculaMasCorta.duracion) {
                peliculaMasCorta = actual;

            }
        }
        console.log(peliculaMasCorta.nombre + " " + peliculaMasCorta.duracion + " " + peliculaMasCorta.fecha + " " + peliculaMasCorta.genero);


        break;

    case "5":
        agregarCancion();

        break;

    case "6":
        removerPeliculas();
        break;
}

function mostrarTodasLasPelis() {
    for (let i = 0; i < misPeliculas.length; i++) {
        let actualita = misPeliculas[i];
        console.log(actualita.nombre, actualita.fecha, actualita.genero, actualita.duracion + " " + "minutos");

    }
}


function agregarCancion() {
    let nombre = window.prompt("Poner nombre de la pelicula");
    let fecha = window.prompt("Poner fecha de la pelicula");
    let duracion = window.prompt("Poner duracion en min de la pelicula");
    let genero = window.prompt("Poner genero de la pelicula");
    misPeliculas.push(new Pelicula(nombre, fecha, duracion, genero));
    mostrarTodasLasPelis();
    console.log("Añadida con exito");



}
function removerPeliculas() {
    mostrarTodasLasPelis();
    let remover = window.prompt("Película que quieres eliminar(nombre de la película)");
    for (let index = 0; index < misPeliculas.length; index++) {
        const Pelicula = misPeliculas[index];
        if (remover === Pelicula.nombre){
            misPeliculas.splice(index, 1);  
        }
        
    }console.log("Peli eliminada :(");
    mostrarTodasLasPelis();
    
}






























/*let nombre = window.prompt("¿como tu te llamas?");
console.log(`Hola amiwis: $(nombre)`);
let opcion = window.prompt("selecciona una opcion: \n 1.para hola  \n 2.para chao");

switch (opcion) {
    case "1":
        console.log("hola");

        break;

    case "2":
        console.log("chau");

        break;
    case "2":
        console.log("chau");
        let nombre = window.prompt("Insertar nombre");
        piropiar(nombre);

        break;

}

function piropiar(nombre) {
    console.log("te ves increible: " + nombre);

}*/