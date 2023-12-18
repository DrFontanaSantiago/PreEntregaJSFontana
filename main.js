function agradecerUsuario(nombre, equipo) {
    alert("¡Gracias, " + nombre + ", por compartir que tu sangre lleva los colores de " + equipo + "!");
}

let equipo;
let nombre;

while (true) {
    nombre = prompt("Ingrese su nombre");

    if (nombre === "" || nombre === null) {
        alert("Por favor, ingrese un nombre válido.");
        continue;
    }

    equipo = prompt("Ingrese su equipo de fútbol");

    if (equipo === "" || equipo === null) {
        alert("Por favor, ingrese un equipo válido.");
        continue;
    }

    if (equipo.toLowerCase() === "independiente") {
        alert("Tienes 7 copas Libertadores");
    } else if (equipo.toLowerCase() === "boca") {
        alert("Casi tienes 7 copas Libertadores");
    } else {
        alert("No tienes 7 copas Libertadores");
    }

    agradecerUsuario(nombre, equipo);
}
