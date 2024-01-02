function removeActive (identificador){
    document.getElementById(identificador).classList.remove('active');
};

function addActive (identificador){
    document.getElementById(identificador).classList.add('active');
};

export {removeActive, addActive};