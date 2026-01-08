function probarValidarNombre(){
    console.assert(
        validarNombre('') === 'Nombre debe tener al menos 1 caracter', 'no valido porque esta vacio'
    );
    console.assert(
        validarNombre('1111111111111111111111111111111111111111111111111111111111111111111111111111111111111')===
        'Nombre debe tener menos de 50 caracteres','no valido porque supero los 50'
    );
    console.assert(
        validarNombre('Thomas')==='','Validar nombre fallo con un nombre valido'
    );
}
function probarValidarCiudad(){
    console.assert(
        validarCiudad('')==='No puede estar vacio','El usuario no elijio ninguna opcion'
    );
    console.assert(
        validarCiudad('Catamarca')==='','Validar ciudad no funciono con una ciudad valida'
    );
}
function probarValidarDescripcion(){
    console.assert(
        validarDescripcionRegalo('ho')==='Debe tener mas caracteres','El usuario puso menos de 3 caracteres'
    );
    console.assert(
        validarDescripcionRegalo('Quiero una play')==='','Validar descripcion no funciono, con una descripcion valida'
    );
}

probarValidarCiudad();
probarValidarNombre();
probarValidarDescripcion();