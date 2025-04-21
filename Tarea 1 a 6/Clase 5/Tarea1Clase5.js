const $botonCalcular = document.querySelector('button')
$botonCalcular.onclick = function (){

const $salarioAnual = Number(document.querySelector('#salario-anual').value);
const $salarioMensual = calcularSalarioMensual($salarioAnual);

document.querySelector('#salario-mensual').value = $salarioMensual

return false;
}

function calcularSalarioMensual (salarioAnual){
  return salarioAnual / 12;
}