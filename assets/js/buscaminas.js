
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
        columna.setAttribute("elemento","vacio");
        columna.addEventListener("click",tipoElemento);
        fila.appendChild(columna);
    }
    tabla.appendChild(fila);
  }
  body.insertBefore(tabla, seccionReinicio);
  bombasAleatorias(n);
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


// Creación de bombas Aleatorias
function bombasAleatorias(n){
  var cuadro = document.getElementsByTagName('td');
  var tds = cuadro.length;
  var dificultad = prompt("Nivel de dificultad:\n1 = fácil\n2 = medio\n3 = dificil");
  switch (dificultad) {
    case "1":
      var numeroBombas = n-1;
      break;
    case "2":
      var numeroBombas = 2*n-2;
      break;
    case "3":
      var numeroBombas = tds-n+1;  //3,7,
      break;
    default:
      alert("Debes introducir un número (del 1 al 3)");
      bombasAleatorias(n);
      break;
  }
  for (var i = 0; i < numeroBombas; i++) {
    do {
      var lugarAleatorio = Math.floor(Math.random()*tds);
    } while (cuadro[lugarAleatorio].getAttribute("elemento") != "vacio");
    cuadro[lugarAleatorio].setAttribute("elemento","bomba");
  }
}


// Obteniendo el tipo de elemento que va en el cuadro
// Aplicandole el efecto requerido
function tipoElemento(){
  var elemento = this.getAttribute("elemento");
  // noContarClicks();
  switch (elemento) {
    case "bomba":
      var imagen= document.createElement("img");
      imagen.setAttribute("src", "assets/img/bomba.png");
      imagen.setAttribute("height","45px");
      imagen.setAttribute("width", "41px");
      this.appendChild(imagen);
      // bloqueoDePantalla();
      break;
    case "numero":
      this.textContent = 1;
      break;
    case "vacio":
      this.style.backgroundColor = "#E0ECF8";
      break;
    default:
  }
}
