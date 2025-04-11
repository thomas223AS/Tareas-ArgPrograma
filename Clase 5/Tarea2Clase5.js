const $enviarInfo = document.querySelector("#ingresar")
$enviarInfo.onclick = function (){
    const $nameUser = (document.querySelector('#nombre-usuario').value)
    const $edadUsuario = (document.querySelector('#edad-usuario').value)
    if ($edadUsuario < 0 || $edadUsuario > 100){ 
        alert("Porfavor ingrese una edad valida")
    } else {
        document.querySelector("#bienvenida").innerHTML =`Bienvenido/a, ${$nameUser}! Tu edad es de ${$edadUsuario} años`;
    }
}