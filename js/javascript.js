const { createApp } = Vue;

createApp({
  data() {
    return {
      url: "https://paulavs02.github.io/FFcharactersApi/character.json",
      datos: [],
      error: false,
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.datos = this.obtenerPersonajesAleatorios(4, data.characters); // Obtener 3 personajes aleatorios
        })
        .catch(error => {
          console.log("Error: " + error);
          this.error = true;
        });
    },
    obtenerPersonajesAleatorios(cantidadPersonajes, datos) {
      const personajesAleatorios = [];
      const indicesSeleccionados = new Set();
      
      while (indicesSeleccionados.size < cantidadPersonajes) {
        const indice = Math.floor(Math.random() * datos.length);
        if (!indicesSeleccionados.has(indice)) {
          indicesSeleccionados.add(indice);
          personajesAleatorios.push(datos[indice]);
        }
      }

      return personajesAleatorios;
    },
    obtenerClaseModo(modo) {
        if (modo === "Activo") return "M-tag1";
        else if (modo === "Pasivo") return "M-tag2";
        else return ""; // muestra en personaje sin modo.
    },
    
    obtenerClaseEstrategia(estrategia) {
      switch (estrategia) {
        case "Supervivencia":
          return "E-tag1";
        case "Ataque":
          return "E-tag2";
        case "Información":
          return "E-tag3";
        case "Sinergia":
          return "E-tag4";
        default:
          return ""; // cuando el personaje no tenga estrategia.
      }
    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount("#app");

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
