function cargarTercera() {
    document.getElementById('contenido').innerHTML = '<h2>Contacto</h2><p>Puedes contactarme en <a href="mailto:maximiliem.dev@gmail.com">maximiliem.dev@gmail.com</a>.</p>';

    // Quitar la clase 'active' de todos los enlaces
    document.getElementById('linkForm1').classList.remove('active');

    document.getElementById('linkInicio').classList.remove('active');

    // Agregar la clase 'active' al enlace 'Inicio'
    document.getElementById('linkForm2').classList.add('active');
};

cargarTercera();