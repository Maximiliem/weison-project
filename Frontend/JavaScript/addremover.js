function removeClass(identificador){
    document.getElementById(identificador).classList.remove('active');
};

function addClass(identificador){
    document.getElementById(identificador).classList.add('active');
};

removeClass();
addClass();

/* TENGO QUE EXPORTAR ESTE MÓDULO E IMPORTARLO EN cargaInicio.js */
// export {removeClass, addClass};