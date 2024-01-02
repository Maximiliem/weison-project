function cargarForm2() {
    document.getElementById('contenido').innerHTML = '<h2>Acerca de nosotros</h2><p>Somos una página web SPA con contenido dinámico.</p>';

    // Quitar la clase 'active' de todos los enlaces
    document.getElementById('linkForm2').classList.remove('active');

    document.getElementById('linkInicio').classList.remove('active');

    // Agregar la clase 'active' al enlace 'Inicio'
    document.getElementById('linkForm1').classList.add('active');
};

cargarForm2();