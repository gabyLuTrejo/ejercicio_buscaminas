
var cuadro = document.getElementsByTagName('td');
var botonReinicio = document.getElementById("reiniciarJuego");
var clickZona = document.body;

// Click para fuera de tabla
clickZona.addEventListener("click", clickAfueraDeTabla);

// Iniciando cada cuadro de la tabla (formato Default)
iniciarJuego();

// Agregando función "click" al boton de reinicio
botonReinicio.addEventListener("click", iniciarJuego);
botonReinicio.addEventListener("click", noContarClicks);

// Obteniendo el tipo de elemento que va en el cuadro
// Aplicandole el efecto requerido
function tipoElemento(){
  var elemento = this.getAttribute("elemento");
  noContarClicks();
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
    cuadro[i].addEventListener("click", noContarClicks);
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

// Función que manda mensaje al usuario al hacer click fuera de la tabla
function clickAfueraDeTabla(){
  alert("Sigue jugando");
}

function noContarClicks(){
    event.stopPropagation();
}
