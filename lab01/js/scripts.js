function mostrarInfo(idElemento) {
  var elemento = document.getElementById(idElemento);

  // Alternar visibilidad
  if (elemento.style.display === "block") {
elemento.style.display = "none";
  } else {
    elemento.style.display = "block";
  }
}