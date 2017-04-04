console.log("Hola");

var cuadro = document.getElementsByTagName('td');

// Agregando función "click" a cada cuadro de la tabla
for (var i = 0, tds=cuadro.length; i < tds; i++) {
  cuadro[i].addEventListener("click",tipoElemento);
}

// Obteniendo el tipo de elemento que va en el cuadro
// Aplicandole el efecto requerido
function tipoElemento(){
  var elemento = this.getAttribute("elemento");
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
      this.style.fontSize = "18px";
      this.style.fontWeight = "bold";
      this.style.textAlign = "center";
      break;
    case "vacio":
      this.style.backgroundColor = "#E0ECF8";
      break;
    default:
  }
}

// Se quitan las funciones "click" (bloqueoDePantalla)
function bloqueoDePantalla(){
  for (var i = 0, tds=cuadro.length; i < tds; i++) {
    cuadro[i].removeEventListener("click",tipoElemento);
  }
  alert("¡ESTO HA EXPLOATADO!");
}
