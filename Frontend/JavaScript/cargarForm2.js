function cargarForm2() {
    document.getElementById('contenido').innerHTML = `<ul> <h1>Formulario de Visita</h1>

    <!-- Primera parte -->
    <h2>Información del Visitante</h2>
    <form id="parte1">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" required>

      <br><br>

      <label for="apellido">Apellido:</label>
      <input type="text" id="apellido" required>
      
      <br><br>

      <label for="fechaNacimiento">Fecha de Nacimiento:</label>
      <input type="date" id="fechaNacimiento" required>
      
      <br><br>
      
      <label for="telefono">Teléfono:</label>
      <input type="tel" id="telefono" required>
      
      <br><br>
      
      <label for="mail">Mail:</label>
      <input type="email" id="mail" required>
      
      <br><br>
      
      <label for="preferenciaContacto">Preferencia de Contacto:</label>
      <select id="preferenciaContacto" required>
        <option value="" disabled selected hidden>Seleccione uno</option>
        <option value="whatsapp">WhatsApp</option>
        <option value="mail">Mail</option>
      </select>
      </form>
      
      <br><br>

    <!-- Segunda parte -->
    <h2>Detalles de la Visita</h2>
    <form id="parte2">
      <label for="fechaVisita">Fecha de la Visita:</label>
      <input type="date" id="fechaVisita" readonly>

      <br><br>
  
      <label for="horaEntrada">Hora de Entrada:</label>
      <input type="time" id="horaEntrada" readonly>
  
      <br><br>
  
      <label for="horaSalida">Hora de Salida:</label>
      <input type="time" id="horaSalida">
  
      <br><br>
  
      <label for="direccionInmueble">Dirección del Inmueble:</label>
      <input type="text" id="direccionInmueble" required>
  
      <br><br>
  
      <label for="zona">Zona:</label>
      <input type="text" id="zona" required>
  
      <br><br>
  
      <label for="localidad">Localidad:</label>
      <input type="text" id="localidad" required>
  
      <br><br>
  
      <label for="nombreCompleto">Nombre Completo:</label>
      <input type="text" id="nombreCompleto" readonly>
  
      <br><br>
  
      <label for="direccionCliente">Dirección del Cliente:</label>
      <input type="text" id="direccionCliente" required>
  
      <br><br>
  
      <label for="tipoDocumento">Tipo de Documento:</label>
      <select id="tipoDocumento" required>
        <option value="" disabled selected hidden>Seleccione uno</option>
        <option value="cedula">Cédula de Identidad</option>
        <option value="pasaporte">Pasaporte</option>
        <option value="dni">DNI</option>
        <option value="otro">Otro (Especifique)</option>
      </select>
  
      <br><br>
  
      <label for="numeroDocumento">Número de Documento:</label>
      <input type="text" id="numeroDocumento" required>
  
      <br><br>
  
      <label for="nombreAgente">Nombre del Agente:</label>
      <input type="text" id="nombreAgente" readonly>
  
      <br><br>
  
      <label for="precioInmueble">Precio del Inmueble:</label>
      <input type="text" id="precioInmueble" required>

      <br><br>
  
      <button class="btn btn-primary" type="button" onclick="cargarFechaYHora()">Listo</button>
      <br><br>
    </form></ul>`;

    // Quitar la clase 'active' de todos los enlaces
    document.getElementById('linkForm2').classList.remove('active');

    document.getElementById('linkInicio').classList.remove('active');

    // Agregar la clase 'active' al enlace 'Inicio'
    document.getElementById('linkForm1').classList.add('active');
};

cargarForm2();