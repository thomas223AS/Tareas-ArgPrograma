const $botonEmpezar = document.querySelector("#boton-empezar");
const $botonCalcular = document.querySelector('#calcular');
const $botonReiniciar = document.querySelector('#boton-reiniciar')


$botonEmpezar.onclick = function(event){
    const $familiares =document.querySelector("#familiares");
    const Familiares = Number($familiares.value);

    crearFamiliar(Familiares);
    
    event.preventDefault();
};

function crearFamiliar(Familiares){
    for (let i=0; i < Familiares; i++){
        const $div=document.createElement('div');
        $div.className='familiares';

        const $label=document.createElement('label');
        $label.innerText='Ingresa la edad';

        const $input = document.createElement('input');
        $input.name = "Edad";

        $label.appendChild($input);
        $div.appendChild($label);

        const $familia =document.querySelector("#familia");
        $familia.appendChild($div);
    }
}


$botonCalcular.onclick = function(event){
    const numeros=obtenerEdades();
    console.log(numeros);
    const mayor = mayorEdad(numeros);
    const promedio = promedioEdad(numeros);
    const menor = menorEdad(numeros);

    document.querySelector('#mayor-edad').textContent = mayor;
    document.querySelector('#menor-edad').textContent = menor;
    document.querySelector('#promedio-edad').textContent = promedio;

    event.preventDefault();
}

$botonReiniciar.onclick = function(event){
    borrarFamiliares();
}

function obtenerEdades() {
    const $F = document.querySelectorAll('.familiares input');
    const edades =[];
    for (let i=0; i<$F.length;i++){
        edades.push(Number($F [i].value));
    }
    return edades;
}

function mayorEdad(edades){
    let mayorNumero=edades[0];
    for(let i=0; i<edades.length;i++){
        if (edades[i] > mayorNumero){
            mayorNumero =edades[i];
        }
    }
return mayorNumero;
}
function promedioEdad(edades){
    let acumulador = 0;
    for (let i=0;i < edades.length;i++){
        acumulador +=edades[i];
    }
    const promedio = acumulador / edades.length;
    return promedio;
}
function menorEdad(edades){
    let menorNumero = edades[0]
    for(let i=0;i<edades.length;i++){
        if (edades[i] < menorNumero){
            menorNumero=edades[i];
        }
    }
    return menorNumero;
}
function borrarFamiliares(){
    const $divFamiliares = document.querySelectorAll('.familiares');
    document.querySelector('#mayor-edad').textContent = '';
    document.querySelector('#menor-edad').textContent = '';
    document.querySelector('#promedio-edad').textContent = '';
    for(let i=0;i<$divFamiliares.length;i++){
        $divFamiliares[i].remove();
    }

}
