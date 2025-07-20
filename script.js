// Botón de alerta
function mostrarAlerta() {
  alert("¡Hola! Esta es una alerta personalizada.");
}

// Validación del formulario
document.getElementById("contactForm").addEventListener("submit", function (event) {
  let valido = true;

  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");

  [nombre, correo, mensaje].forEach((campo) => {
    if (!campo.value.trim()) {
      campo.classList.add("is-invalid");
      valido = false;
    } else {
      campo.classList.remove("is-invalid");
    }
  });

  if (!valido) {
    event.preventDefault();
  }
});
