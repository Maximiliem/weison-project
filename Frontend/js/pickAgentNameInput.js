document.addEventListener('DOMContentLoaded', function() {
    // Para la primera página (index.html)
    const agentNameInput = document.getElementById('inputAgentName');

    // Verifica si el elemento existe antes de intentar agregar el evento
    if (agentNameInput) {
        agentNameInput.addEventListener('input', function() {
            localStorage.setItem('inputAgentName', agentNameInput.value);
        });

        // Recupera el valor del localStorage y establece el campo inputAgentName
        const storedAgentName = localStorage.getItem('inputAgentName');
        if (storedAgentName) {
            agentNameInput.value = storedAgentName;
        }
    }

    // Para la segunda página (clientform.html)
    const agentNameInputOnForm = document.getElementById('agentName');

    // Si hay un valor almacenado, establece el campo agentName
    const storedAgentName = localStorage.getItem('inputAgentName');
    if (storedAgentName) {
        agentNameInputOnForm.value = storedAgentName;
    }
});
