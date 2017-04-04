console.log("Hola");

var cuadro = document.getElementsByTagName('td');

// Agregando función "click" a cada cuadro de la tabla
for (var i = 0; i < cuadro.length; i++) {
  cuadro[i].addEventListener("click",tipoElemento);
}

//Obteniendo el tipo de elemento que va en el cuadro
function tipoElemento(){
  var elemento = this.getAttribute("elemento");
  console.log(elemento);
  
}
