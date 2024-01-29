document.addEventListener('DOMContentLoaded', function() {
    // Para la primera página (index.html)
    const dormitoriosInput = document.getElementById('inputDormitorio1');

    // Verifica si el elemento existe antes de intentar agregar el evento
    if (dormitoriosInput) {
        dormitoriosInput.addEventListener('input', function() {
            localStorage.setItem('inputDormitorio1', dormitoriosInput.value);
        });

        // Recupera el valor del localStorage y establece el campo inputDormitorio1
        const storedDormitorios = localStorage.getItem('inputDormitorio1');
        if (storedDormitorios) {
            dormitoriosInput.value = storedDormitorios;
        }
    }

    // Para la tercera página (thirdpage.html)
    const dormitoriosInputOnForm = document.getElementById('cantDormitorios');

    
    const storedDormitorios = localStorage.getItem('inputDormitorio1');
    if (storedDormitorios) {
        dormitoriosInputOnForm.value = storedDormitorios;
    }
});
