function calcularTiempoTotal(horas,minutos,segundos){
    return (horas *3600) + (minutos*60) + segundos;
}
function formatearTiempo(segundostotales){
    const horas = Math.floor(segundostotales /3600);
    const minutos = Math.floor((segundostotales %3600) / 60);   
    const segundos = segundostotales % 60;
    return `${horas}H ${minutos}M ${segundos}S`
}

tiempototal =0;
const $botonCalcular = document.querySelector('#calcular-total');
$botonCalcular.onclick = function (){
    const $horasVid=Number(document.querySelector('#horas').value);
    const $minutosVid=Number(document.querySelector('#minutos').value);
    const $segundosVid=Number(document.querySelector('#segundos').value); 
    
    const tiemposVideos = calcularTiempoTotal($horasVid,$minutosVid,$segundosVid)
    tiempototal += tiemposVideos;
    
    const tiempoForm = formatearTiempo(tiempototal);

    document.querySelector('#resultado').textContent = `Tiempo total: ${tiempoForm}`;

    document.querySelector('#horas').value = '';
    document.querySelector('#minutos').value = '';
    document.querySelector('#segundos').value = '';
} 
    