const $botonAgregar = document.querySelector('#bton-agregar');
const $botonQuitar = document.querySelector('#bton-quitar')
const $botonCalcular = document.querySelector('#boton-calcular');

$botonAgregar.addEventListener('click',function(event){
    agregarFamiliar();
    mostrarBotonCalculo();

    event.preventDefault();
})
$botonQuitar.addEventListener('click',function(event){
    quitarFamiliar();

    event.preventDefault();
})
$botonCalcular.addEventListener('click',function(event){
    const salarios = obtenerSalario();
    console.log('hola');
    mostrarSalarios('mayor',mayorSalario(salarios))
    mostrarSalarios('menor',menorSalario(salarios))
    mostrarSalarios('promedio',promedioSalario(salarios))
    mostrarResultado();

    event.preventDefault();
})

function agregarFamiliar(){
    const $divSalario = document.createElement('div');
    $divSalario.className='salario';

    const $label = document.createElement('label');
    $label.textContent='Ingrese su salario';

    const $input = document.createElement('input');
    $input.name = 'Salario';

    $label.appendChild($input);
    $divSalario.appendChild($label)

    const $divInfo = document.querySelector('#contenido');
    $divInfo.appendChild($divSalario);
    
}
function quitarFamiliar(){
    const $quitarSalario = document.querySelectorAll('.salario');
    const ultimo = $quitarSalario[$quitarSalario.length -1];
    ultimo.remove();
}
function obtenerSalario(){
    const $obtenerSalarios= document.querySelectorAll('.salario input');
    const salarios= [];
    for(let i=0;i<$obtenerSalarios.length;i++){
        const valor =Number($obtenerSalarios[i].value)
        if (valor !== 0){
            salarios.push(Number(valor));
        }
    }
    return salarios;
}
function mayorSalario(numeros){
    let mayor =numeros[0];
    for(let i=0;i<numeros.length;i++){
        if (mayor < numeros[i]){
            mayor =numeros[i];
        }
    }
    return mayor;
}
function menorSalario(numeros){
    let menor =numeros[0];
    for(let i=0;i<numeros.length;i++){
        if(menor > numeros[i]){
            menor = numeros[i];
        }
    }
    return menor;
}
function promedioSalario(numeros){
    const sumaTotal =numeros.reduce((acc,cur)=> acc + cur,0,);
    const promedio = sumaTotal / numeros.length;
    return promedio;
}
function mostrarSalarios(tipo,valor){
    document.querySelector(`#${tipo}-salario`).textContent  = valor;
}
function mostrarBotonCalculo(){
    $botonCalcular.className='';
}
function mostrarResultado(){
    document.querySelector('#resultados').className='';
}
