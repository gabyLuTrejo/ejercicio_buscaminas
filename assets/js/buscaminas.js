
var botonReinicio = document.getElementById("reiniciarJuego");
var body = document.body; //clickZona
var comenzarJuego = document.getElementById("comenzarJuego");
var cuadro = document.getElementsByTagName('td');

// Generando tabla dinámica con Boton
comenzarJuego.addEventListener("click", juegoNuevo);

// Agregando función "click" al boton de reinicio
botonReinicio.addEventListener("click", iniciarJuego);

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

// Creación de bombas Aleatorias dependiendo Dificultad
function bombasAleatorias(n){
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
      var numeroBombas = tds-n+1;
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
      bloqueoDePantalla();
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

// Se quitan las funciones "click" (bloqueoDePantalla)
// Se evita que active la función "clickAfueraDeTabla"
function bloqueoDePantalla(){
  for (var i = 0, tds=cuadro.length; i < tds; i++) {
    cuadro[i].removeEventListener("click",tipoElemento);
    // cuadro[i].addEventListener("click", noContarClicks);
  }
  alert("¡ESTO HA EXPLOATADO!");
}

// Función de inicialización del juego
function iniciarJuego(){
  for (var i = 0, tds=cuadro.length; i < tds; i++) {
    cuadro[i].addEventListener("click",tipoElemento);
    cuadro[i].textContent = "";
    cuadro[i].style.backgroundColor = "white";
  }
}
