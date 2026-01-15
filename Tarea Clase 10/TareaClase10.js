const $botonComenzar = document.querySelector("#comenzar");

let ronda = 0;
let secuenciaMaquina =[];
let secuenciaUsuario = [];
let intentos = 0;

$botonComenzar.onclick = comenzarJuego;

function comenzarJuego(){
    reiniciarRonda();
    manejarRonda();
}
    
function reiniciarRonda(){
    ronda = 0;
    secuenciaUsuario = [];
    secuenciaMaquina = [];
}
function obtenerCuadroAleatorio(){
    const $cuadros = document.querySelectorAll(".cuadro");
    const indice = Math.floor(Math.random() * $cuadros.length);//elije un numero random del 0 4, como es math floor lo hace del 0 al 3 porq siempre trunca para bajo
    return $cuadros[indice];
}

function cambiarEstado(string,error = false){
    const $estado = document.querySelector("#estado");
    $estado.textContent = string;
    if (error){
        $estado.classList.remove("alert-info");
        $estado.classList.add("alert-danger");
    }
    else{
        $estado.classList.remove("alert-danger");
        $estado.classList.add("alert-info");
    }
}

function bloquearInputUsuario(){
    const $cuadros = document.querySelectorAll(".cuadro");
    $cuadros.forEach(function($cuadro){
        $cuadro.onclick =function(){};
    })
}

function desbloquearInputUsuario(){
    const $cuadros = document.querySelectorAll(".cuadro");
    $cuadros.forEach(function($cuadro){
        $cuadro.onclick = manejarInputUsuario;
    })
}

function manejarInputUsuario(event){
    const $cuadroUsuario = event.target;
    resaltar($cuadroUsuario);
    secuenciaUsuario.push($cuadroUsuario);

    const $cuadroMaquina = secuenciaMaquina[secuenciaUsuario.length -1];
    if ($cuadroMaquina !== $cuadroUsuario){
        perder();
        return; 
    } // En cada cuadro nuevo que toque el usuario va a verificar si esta bien y si esta mal termina el juego.

    if(secuenciaMaquina.length === secuenciaUsuario.length){
        bloquearInputUsuario();
        setTimeout(manejarRonda,1000);
    }
}

function  manejarRonda(){
    cambiarEstado('Turno de la Maquina');
    bloquearInputUsuario();
    $nuevoCuadro = obtenerCuadroAleatorio();
    secuenciaMaquina.push($nuevoCuadro);

    const RETRASO_TURNO_JUGADOR =(secuenciaMaquina.length + 1) * 1000;
    
    secuenciaMaquina.forEach(function($cuadro,indice){
        const RETRASO_MAQUINA = (indice + 1) * 1000;
        setTimeout(function(){
            resaltar($cuadro);
        },RETRASO_MAQUINA);
    })

    setTimeout(function(){
        cambiarEstado("Turno del Jugador");
        desbloquearInputUsuario();
    },RETRASO_TURNO_JUGADOR);

    secuenciaUsuario = [];
    ronda++;
   
}

function resaltar($cuadro){
    $cuadro.style.opacity = 1;
    setTimeout(function(){
        $cuadro.style.opacity= 0.5;
    },500)
}

function actualizarRonda(numeroDeRonda){
    const $ronda = document.querySelector("#ronda");
    $ronda.textContent = numeroDeRonda;
}

function perder(){
    intentos++;
    cambiarEstado("Perdiste! Buena suerte la proxima - Toca Comenzar para intertarlo de nuevo",true);
    bloquearInputUsuario();
    actualizarIntentos(intentos);
}

function actualizarIntentos(numeroIntentos){
    const $intentos = document.querySelector("#intentos");
    $intentos.textContent = numeroIntentos;
}
