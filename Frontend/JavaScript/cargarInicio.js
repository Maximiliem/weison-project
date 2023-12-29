function cargarInicio() {
    document.getElementById('contenido').innerHTML = `<form>
    <ul>
      <h1>Formulario</h1>

      <label for="agent_name">Nombre del agente:</label>
      <input type="text" placeholder="Ingrese su nombre" id="agentName">

      <br><br>

      <h3>Datos de la casa</h3>

      <!--Los input de este div se van a tener que ver reflejados en finish.html como casillas-->
      <div class="datosPropiedad" id="datosPropiedad">
        <label for="dormitorios">Dormitorios:</label>
        <input type="number" id="dormitorios" placeholder="Número de dormitorios">

        <br><br>

        <label for="cocina">Cocinas:</label>
        <input type="number" id="cocina" placeholder="Número de cocinas">

        <br><br>

        <label for="living">Livings:</label>
        <input type="number" id="living" placeholder="Número de livings">

        <br><br>

        <label for="patio">Patios:</label>
        <input type="number" id="patio" placeholder="Número de patios">

        <br><br>

        <label for="frente">Frente:</label>
        <input type="checkbox" id="frente" placeholder="Número de frentes">

        <br><br>

        <label for="fondo">Fondo:</label>
        <input type="checkbox" id="fondo" placeholder="Número de fondos">

        <br><br>

        <label for="cochera">Cocheras:</label>
        <input type="number" id="cochera" placeholder="Número de cocheras">

        <br><br>

        <label for="baño">Baños:</label>
        <input type="number" id="baño" placeholder="Número de baños">

      </div>
      <br><br>

      <div class="direccionInmueble" id="direccionInmueble">
        <label for="inmuebleAdress">Dirección del inmueble:</label>
        <input type="text" placeholder="Ej. Av. Brasil 3008" id="inmuebleAdress">
      </div>

      <br>

      <!-- <input type="button" value="Listo"> -->
      <input class="btn btn-primary" type="submit" value="Listo">
    </ul>
  </form>`;

    // Quitar la clase 'active' de todos los enlaces
    document.getElementById('linkForm2').classList.remove('active');

    document.getElementById('linkForm1').classList.remove('active');

    // Agregar la clase 'active' al enlace 'Inicio'
    document.getElementById('linkInicio').classList.add('active');
}

function cargarAcerca() {
    document.getElementById('contenido').innerHTML = '<h2>Acerca de nosotros</h2><p>Somos una página web SPA con contenido dinámico.</p>';

    // Quitar la clase 'active' de todos los enlaces
    document.getElementById('linkForm2').classList.remove('active');

    document.getElementById('linkInicio').classList.remove('active');

    // Agregar la clase 'active' al enlace 'Inicio'
    document.getElementById('linkForm1').classList.add('active');
}

function cargarContacto() {
    document.getElementById('contenido').innerHTML = '<h2>Contacto</h2><p>Puedes contactarnos en <a href="mailto:maximiliem.dev@gmail.com">maximiliem.dev@gmail.com</a>.</p>';

    // Quitar la clase 'active' de todos los enlaces
    document.getElementById('linkForm1').classList.remove('active');

    document.getElementById('linkInicio').classList.remove('active');

    // Agregar la clase 'active' al enlace 'Inicio'
    document.getElementById('linkForm2').classList.add('active');
}

// Cargar contenido inicial
cargarInicio();
