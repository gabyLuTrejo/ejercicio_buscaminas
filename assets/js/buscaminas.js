
var botonReinicio = document.getElementById("reiniciarJuego");
var body = document.body; //clickZona
var comenzarJuego = document.getElementById("comenzarJuego");

// Generando tabla dinámica con Boton
comenzarJuego.addEventListener("click", juegoNuevo);

// Tabla Dinámica
function juegoNuevo(){
  var n = Number(prompt("El tamaño de tu tabla es 'nxn' \n ¿Cuánto vale 'n'? "));
  var seccionReinicio = document.getElementById("seccionReinicio");
  var tabla = document.createElement("table");

  // Creación de filas
  for (var i = 0; i < n; i++) {
    var fila = document.createElement("tr");

    // Creación de columnas
    for (var j = 0; j < n; j++) {
      var columna = document.createElement("td");
      fila.appendChild(columna);
    }
    tabla.appendChild(fila);
  }
  body.insertBefore(tabla, seccionReinicio);
}
