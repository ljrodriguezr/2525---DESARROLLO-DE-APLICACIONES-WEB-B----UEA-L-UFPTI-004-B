        function cambiarTexto(){
            document.getElementById("texto").innerHTML = "Nuevo Texto";
        }
        function cambiarColor(){
            document.getElementById("texto").style.color = "red";
        }
        function cambiaFondo(){
            document.getElementById("texto").style.background = "blue";
        }

        function validarnumeros(){
            var numero = document.getElementById("num1").value;
            var mensaje = document.getElementById("mensaje");
            if (isNaN(numero)) {
                 mensaje.innerHTML = " debes ingresar un numero";
                 mensaje.style.color="red";
            } else {
                mensaje.innerHTML = "el numero es valido"
                mensaje.style.color="green";
            }
        }
