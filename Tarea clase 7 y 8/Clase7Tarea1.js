const $form = document.querySelector("#carta-a-santa");
const $nombre =$form.nombre.value;
const $ciudad = $form.ciudad.value;
const $comportamiento = $form.comportamiento.value
const $descripcion = $form['descripcion-regalo'].value;

console.log($nombre);
console.log($ciudad);
console.log($comportamiento);
console.log($descripcion);

validarNombre($nombre);
validarCiudad($ciudad);
validarDescripcionRegalo($descripcion);

function validarNombre(nombre){
    if (nombre.length === 0)
        return 'Nombre debe tener al menos 1 caracter';
    else if (nombre.length >= 50)
        return 'Nombre debe tener menos de 50 caracteres';
    else
    return '';
}
function validarCiudad(ciudad){
    if(ciudad=== ''){
        return 'No puede estar vacio';
    }
    return '';  
}
function validarDescripcionRegalo(descripcion){
    if (descripcion.length <= 3)
        return 'Debe tener mas caracteres';
    else 
    return '';
}