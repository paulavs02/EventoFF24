/* pop up */



// Obtener el elemento del formulario y el botón de envío
const formulario = document.getElementById('formulario');
const submitButton = formulario.querySelector('button[type="submit"]');

// Agregar un evento click al botón de envío
submitButton.addEventListener('click', function(event) {
  // Prevenir el comportamiento predeterminado del formulario
  event.preventDefault();

  // Verificar si el formulario es válido
  if (formulario.checkValidity()) {
    // Mostrar el Modal
    const modalInscripcion = new bootstrap.Modal(document.getElementById('modalInscripcion'));
    modalInscripcion.show();

    // Restablecer el formulario después de mostrar el Modal
    formulario.reset();
  }
});

// Función para que el formulario tenga sus restricciones
document.getElementById('formulario').addEventListener('submit', function(event) {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;

    const nombreRegex = /^[A-Za-z]+$/;
    const apellidoRegex = /^[A-Za-z]+$/;
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombreRegex.test(nombre)) {
      alert('El campo Nombre solo debe contener letras.');
      event.preventDefault();
    }

    if (!apellidoRegex.test(apellido)) {
      alert('El campo Apellido solo debe contener letras.');
      event.preventDefault();
    }

    if (!correoRegex.test(correo)) {
      alert('Por favor ingrese un correo electrónico válido.');
      event.preventDefault();
    }
  });

/* rondas */
