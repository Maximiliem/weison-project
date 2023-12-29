export function removeClass(clase){
    document.getElementById(clase).classList.remove('active');
};

export function addClass(clase){
    document.getElementById(clase).classList.add('active');
};

removeClass();
addClass();

/* TENGO QUE EXPORTAR ESTE MÓDULO E IMPORTARLO EN cargaInicio.js */