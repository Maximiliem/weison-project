document.addEventListener('DOMContentLoaded', function() {
    // Para la primera página (index.html)
    const agentNameInput = document.getElementById('inputAgentName');

    // Verifica si el elemento existe antes de intentar agregar el evento
    if (agentNameInput) {
        agentNameInput.addEventListener('input', function() {
            localStorage.setItem('inputAgentName', agentNameInput.value);
        });
    }

    // Para la segunda página (clientform.html)
    const agentNameInputOnForm = document.getElementById('agentName');

    // Recupera el valor del localStorage
    const storedAgentName = localStorage.getItem('inputAgentName');

    // Si hay un valor almacenado, establece el campo agentName
    if (storedAgentName) {
        agentNameInputOnForm.value = storedAgentName;
    }
});
