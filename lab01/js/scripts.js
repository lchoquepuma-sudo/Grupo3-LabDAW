document.addEventListener('DOMContentLoaded', function() {
  
  // MODO OSCURO
  const btnDark = document.getElementById('btn-dark-mode');

  if (btnDark) {
    if (localStorage.getItem('modo') === 'oscuro') {
      document.body.classList.add('dark-mode');
      btnDark.textContent = "☀️";
    }

    btnDark.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      const esOscuro = document.body.classList.contains('dark-mode');
      btnDark.textContent = esOscuro ? "☀️" : "🌙";
      localStorage.setItem('modo', esOscuro ? 'oscuro' : 'claro');
    });
  }

  // FORMULARIO
  const form = document.getElementById("formulario");
  const seccion = document.getElementById("seccion-contacto");

  if (form && seccion) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      seccion.innerHTML = `
        <h2>¡Gracias!</h2>
        <p>Gracias por contactarnos, recibimos tu mensaje correctamente.</p>
      `;
    });
  }

});

function mostrarInfo(idElemento, boton) {
  const elemento = document.getElementById(idElemento);

  if (!elemento) return;

  const visible = elemento.style.display === "block";

  // Visibilidad
  if (visible) {
    elemento.style.display = "none";
    boton.textContent = "Ver más";
  } else {
    elemento.style.display = "block";
    boton.textContent = "Ocultar info";
  }
}