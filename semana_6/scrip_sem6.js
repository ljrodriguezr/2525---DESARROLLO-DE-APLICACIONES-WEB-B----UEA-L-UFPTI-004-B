document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let edad = parseInt(document.getElementById("edad").value);
    let contrasena = document.getElementById("contrasena").value;
    let confirmar = document.getElementById("confirmarContrasena").value;

    let valido = true;

    // Limpiar errores
    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorEmail").textContent = "";
    document.getElementById("errorEdad").textContent = "";
    document.getElementById("errorContrasena").textContent = "";
    document.getElementById("errorConfirmar").textContent = "";

    if (nombre === "") {
        document.getElementById("errorNombre").textContent = "El nombre es obligatorio.";
        valido = false;
    }

    if (!email.includes("@")) {
        document.getElementById("errorEmail").textContent = "El email no es válido.";
        valido = false;
    }

    if (isNaN(edad) || edad < 1 || edad > 120) {
        document.getElementById("errorEdad").textContent = "Introduce una edad válida (1-120).";
        valido = false;
    }

    if (contrasena.length < 6) {
        document.getElementById("errorContrasena").textContent = "La contraseña debe tener al menos 6 caracteres.";
        valido = false;
    }

    if (contrasena !== confirmar) {
        document.getElementById("errorConfirmar").textContent = "Las contraseñas no coinciden.";
        valido = false;
    }

    if (valido) {
        alert("Formulario enviado correctamente.");
        // Aquí podrías enviar los datos al servidor si lo deseas
    }
});
