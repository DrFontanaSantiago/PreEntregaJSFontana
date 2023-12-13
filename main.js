let equipo;

while (true) {
    equipo = prompt("Ingrese su equipo de fútbol");

    if (equipo === "" || equipo === null) {
        break;
    }

    if (equipo.toLowerCase() === "independiente") {
        alert("Tienes 7 copas Libertadores");
    } else if (equipo.toLowerCase() === "boca") {
        alert("Casi tienes 7 copas Libertadores");
    } else {
        alert("No tienes 7 copas Libertadores");
    }
}
