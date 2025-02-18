// Obtener elementos del DOM
const popup = document.getElementById('popup');
const startButton = document.getElementById('startButton');
const resume = document.getElementById('resume');
const tabButtons = document.querySelectorAll('.boton-pestana');

// Mostrar la hoja de vida al hacer clic en el botón
if (startButton) {
    startButton.addEventListener('click', () => {
        popup.style.display = 'none'; // Oculta la ventana emergente
        resume.classList.remove('oculto'); // Muestra la hoja de vida
        mostrarSeccion('personal'); // Muestra la primera sección
        resaltarPestana('personal'); // Resalta la pestaña activa
    });
}

// Función para mostrar una sección específica
function mostrarSeccion(idSeccion) {
    // Oculta todas las secciones
    document.querySelectorAll('.seccion').forEach(seccion => {
        seccion.classList.add('oculto');
    });

    // Muestra la sección seleccionada
    const seccionAMostrar = document.getElementById(idSeccion);
    if (seccionAMostrar) {
        seccionAMostrar.classList.remove('oculto');
    }
}

// Función para resaltar la pestaña activa
function resaltarPestana(idSeccion) {
    tabButtons.forEach(boton => {
        if (boton.getAttribute('data-section') === idSeccion) {
            boton.classList.add('activo');
        } else {
            boton.classList.remove('activo');
        }
    });
}

// Navegación entre pestañas
tabButtons.forEach(boton => {
    boton.addEventListener('click', () => {
        const idSeccion = boton.getAttribute('data-section');
        mostrarSeccion(idSeccion);
        resaltarPestana(idSeccion);
    });
});