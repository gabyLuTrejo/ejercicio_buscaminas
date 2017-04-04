
var botonReinicio = document.getElementById("reiniciarJuego");
var body = document.body; //clickZona
var comenzarJuego = document.getElementById("comenzarJuego");

// Generando tabla dinámica con Boton
comenzarJuego.addEventListener("click", juegoNuevo);

// Tabla Dinámica
function juegoNuevo(){
  var n = valorDeN();
  var seccionReinicio = document.getElementById("seccionReinicio");
  var tabla = document.createElement("table");
  // Creación de filas
  for (var i = 0; i < n; i++) {
    var fila = document.createElement("tr");
    // Creación de columnas
    for (var j = 0; j < n; j++) {
      var columna = document.createElement("td");
      if (j==0 && i==0) {
        columna.setAttribute("elemento","bomba");
        fila.appendChild(columna);
      } else if((j==0 && i==1)||(j==1 && i==0)){
        columna.setAttribute("elemento","numero");
        fila.appendChild(columna);
      } else {
        columna.setAttribute("elemento","vacio");
        fila.appendChild(columna);
      }
    }
    tabla.appendChild(fila);
  }
  body.insertBefore(tabla, seccionReinicio);
}


// Obtención de valor de "n"
function valorDeN(){
  var n = Number(prompt("El tamaño de tu tabla es 'nxn' \n Con 'n=>2' ¿Cuánto vale 'n'? "));
  if (n>=2) {
    return n;
  }else {
    alert("Recuerda n=>2");
    return valorDeN();
  }
}
