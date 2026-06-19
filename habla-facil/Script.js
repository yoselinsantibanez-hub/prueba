// Función para cambiar de pantalla
function irA(idPantalla) {
    // 1. Ocultamos todas las pantallas de la app
    const pantallas = document.querySelectorAll('.pantalla');
    pantallas.forEach(p => p.classList.remove('activa'));

    // 2. Mostramos la pantalla que el usuario seleccionó
    document.getElementById(idPantalla).classList.add('activa');

    // 3. CONTROL DE LA BARRA SUPERIOR:
    const barraSuperior = document.getElementById('contenedor-barra');
    
    if (idPantalla === 'pantalla-bienvenida') {
        barraSuperior.style.display = 'none';  // Escondida SOLO en la bienvenida
    } else {
        barraSuperior.style.display = 'flex';  // Aparece en el menú y en TODAS las demás pantallas
    }
}

// Función para agregar un pictograma a la barra superior
function seleccionarPicto(nombre, icono) {
    const barra = document.getElementById('barra-frase');

    // Creamos el contenedor visual del pictograma
    const nuevoPicto = document.createElement('div');
    nuevoPicto.classList.add('picto-en-barra');
    nuevoPicto.innerHTML = `<span>${icono}</span><small>${nombre}</small>`;

    // Lo añadimos a la barra superior
    barra.appendChild(nuevoPicto);
}

// Función para vaciar por completo la frase armada
function borrarTodo() {
    document.getElementById('barra-frase').innerHTML = '';
}