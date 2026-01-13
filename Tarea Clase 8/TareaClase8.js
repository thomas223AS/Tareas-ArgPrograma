const $botonEmpezar = document.querySelector("#boton-empezar");
const $botonCalcular = document.querySelector('#calcular');
const $botonReiniciar = document.querySelector('#boton-reiniciar');
const $botonEnviar = document.querySelector('#boton-enviar');

const errores = {};

$botonEmpezar.onclick = function(event){
    const $familiares =document.querySelector("#familiares");
    const cantidadFamiliares = Number($familiares.value);

    const error = validarCantFamiliares($familiares.value);

    if (error !== ""){
     manejarErrores({familias:error});//como recibe un objeto, le paso un objeto con la key familiares y el valor error
    } else {
        crearFamiliar(Familiares);
    }

    event.preventDefault();
};

function crearFamiliar(Familiares){
    const $errores = document.querySelector("#errores");
    const $inputFamiliares = document.querySelector("#familiares");
    borrarFamiliares();
    reiniciaErrores($inputFamiliares);
    reiniciaErrores($errores);

    for (let i=0; i < Familiares; i++){
        const $div=document.createElement('div');
        $div.className='familiares';

        const $label=document.createElement('label');
        $label.innerText='Ingresa la edad';

        const $input = document.createElement('input');
        $input.name = "integrante-" + i;
        $input.className = "edades";

        $label.appendChild($input);
        $div.appendChild($label);

        const $familia =document.querySelector("#familia");
        $familia.appendChild($div);
    }
}


$botonCalcular.onclick = function(event){

    const $inputEdades = document.querySelectorAll(".edades");

    const numeros=obtenerEdades();
    console.log(numeros);

    // almacena la cantidad de errores
    const cantidadDeErrores = manejarErrores(errores);
    
    if (cantidadDeErrores === 0){
        escribeResultados();
    }

    for (let i=0;i<$inputEdades.length;i++){
        const $inputs = $inputEdades[i];
        errores[$inputs.name] = validarEdad($inputs.value);
    }

    manejarErrores(errores);
    cantErrores = manejarErrores(errores);
    if (cantErrores === 0){
     //tengo que arreglar lo de validar los errores porq no me anda bien
    const mayor = mayorEdad(numeros);
    const promedio = promedioEdad(numeros);
    const menor = menorEdad(numeros);

    document.querySelector('#mayor-edad').textContent = mayor;
    document.querySelector('#menor-edad').textContent = menor;
    document.querySelector('#promedio-edad').textContent = promedio;
    }

    event.preventDefault();
}

$botonReiniciar.onclick = function(event){
    borrarFamiliares();
    const $errores = document.querySelector("#errores");
    reiniciaErrores($errores);
}

$botonEnviar.onclick = function(e){
    e.preventDefault();

}


function manejarErrores(errores){
    const keys = Object.keys(errores);
    const $errores = document.querySelector("#errores");

    reiniciaErrores($errores);
    let cantidadErrores =0;

    keys.forEach(function(key){
        const error = errores[key];

        const $inputError = document.querySelector(`[name="${key}"]`);
       
        if (error){
            cantidadErrores++;
            
           const $error = document.createElement('li');
           $error.innerText = error;
           $errores.appendChild($error);

           
           if ($inputError){
            $inputError.classList.add("error");
           }
        }else{
           $inputError.classList.remove("error");
        }
    });
    return cantidadErrores;
}

function reiniciaErrores(contenedorErrores){
    contenedorErrores.innerHTML ="";
    contenedorErrores.className="";
}

function obtenerEdades() {
    const $F = document.querySelectorAll('.familiares input');
    const edades =[];
    for (let i=0; i<$F.length;i++){
        edades.push(Number($F [i].value));
    }
    return edades;
}

function calculaMayorEdad(edades){
    let mayorNumero=edades[0];
    for(let i=0; i<edades.length;i++){
        if (edades[i] > mayorNumero){
            mayorNumero =edades[i];
        }
    }
return mayorNumero;
}
function calculaPromedioEdad(edades){
    let acumulador = 0;
    for (let i=0;i < edades.length;i++){
        acumulador +=edades[i];
    }
    const promedio = acumulador / edades.length;
    return promedio;
}
function calculaMenorEdad(edades){
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

function validarEdad(edad){

    const edadNumero = Number(edad); 

    if(edad.length === 0 ){
        return "La edad no puede estar vacia"
    }
    if (edad < 0){
        return "La edad no puede ser negativa";
    } 
    if (edad > 120){
        return "La edad no puede ser mayor a 120 años";
    }
    if (Number.isInteger(edadNumero) === false){
        return "La edad no puede tener decimales";
    }
    return "";
}

function validarCantFamiliares(cantFamiliar){

    const cantNumero = Number(cantFamiliar);  //Se usa asi porque como obtiene el numero desde html lo pasa a string
                                              // Entonces con esto lo vuelvo a pasar a numero, para el ultimo if, que si no me da eerror porque recibe un strign no un numero
    if (cantFamiliar.length === 0){
        return "La cantidad de familiares no puede estar vacia"
    }
    if (cantFamiliar <= 0){
        return "La cantidad de familiares no puede ser menor que 0";
    }
    if (Number.isInteger(cantNumero) === false){
        return "La cantidad de familiares no puede ir con decimales";
    }
    return "";
}

