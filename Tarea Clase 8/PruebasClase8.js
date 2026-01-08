function probarValidarEdad(){
console.assert(
    validarEdad("121") === "La edad no puede ser mayor a 120 años",
    "No valido porque supero los 120"
);

console.assert(
    validarEdad("") === "La edad no puede estar vacia",
    "No valido porque el campo edad esta vacio"
);
console.assert(
    validarEdad("2,5") === "La edad no puede tener decimales","No valido porque tiene decimales"
);

console.assert(
    validarEdad("20") === "","Fallo con una edad valida"
);

console.assert(
    validarEdad("-1") === "La edad no puede ser negativa","Fallo con una edad negativa"
);

return "";
}

function probarValidarFamiliares(){
    console.assert(
        validarCantFamiliares("") === "La cantidad de familiares no puede estar vacia",
        "No valido porque esta vacio"
    );

    console.assert(
        validarCantFamiliares("-1") === "La cantidad de familiares no puede ser menor que 0",
        "No valido porque pusieron un valor negativo"
    );

    console.assert(
        validarCantFamiliares("2.5") === "La cantidad de familiares no puede ir con decimales",
        "No valido la cantidad con decimales"
    );

    console.assert(
        validarCantFamiliares("2") === "","No valido con una cantidad valida"
    );

return "";
}

probarValidarEdad();
probarValidarFamiliares();
