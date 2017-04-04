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

      break;
    case "numero":
      this.textContent = 1;
      this.style.fontSize = "16px";
      this.style.textAlign = "center";
      break;
    case "vacio":
      this.style.backgroundColor = "#E0ECF8";
      break;
    default:

  }

}
