const array = document.querySelectorAll('li');
console.log(array);
let numero = [];
for (let i=0; i< array.length; i++){
    let valor = Number(array[i].textContent);
    numero.push(valor);  //agrego los numeros en un array
}

let max = Math.max(...numero);
console.log(max);
let min = Math.min(...numero);
console.log(min);

function Promedio (numero) {
    const sumaTotal = numero.reduce((previousValue, currentValue)=> {   //ahora numero es mi array
        return previousValue + currentValue;                 //.reduce es una funcion q te suma el previo y el posterior
    })
    return sumaTotal / numero.length;
}
console.log(Promedio(numero));

let contador = {};
let maximo = 0;
let numeroMasRepetido;

numero.forEach(function(number){
    contador[number] =(contador[number]|| 0) + 1;
});

for (var num in contador) {
    if(contador[num] > maximo){
        maximo = contador[num];
        numeroMasRepetido = num;
    }
}

document.querySelector('#resultado-promedio').innerText += Promedio(numero);
document.querySelector('#resultado-pequeño').innerText += min;
document.querySelector('#resultado-grande').innerText += max;
document.querySelector('#resultado-repetido').innerText += numeroMasRepetido;