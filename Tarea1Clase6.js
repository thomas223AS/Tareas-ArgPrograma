const $botonEmpezar = document.querySelector("#boton-empezar");

function clickEnviar(boton) {
    document.querySelector("#boton-empezar").disabled = true;

    const $familiares = Number(document.querySelector("#familiares").value);

        for (let i=0;i<$familiares;i++){
            const nodo = document.querySelector('#aca'); //selecciono donde voy a poner lo nuevo
            const nuevoLabel = document.createElement('label'); // creo el label, donde va a ir el texto
             nuevoLabel.textContent = `Ingrese la edad del familiar ${ i +1}`; //asigno a label lo q quiero q ponga

            const nuevoInput = document.createElement('input'); //creo el input
            nuevoInput.type =`number`;
            nuevoInput.placeholder=`Edad`;

            nodo.appendChild(nuevoLabel);//ya esta escrito porq se lo asigne con el textContent
            nodo.appendChild(nuevoInput);
            nodo.appendChild(document.createElement("br"));
    }
    
    return false;
}
$botonEmpezar.onclick = clickEnviar;
