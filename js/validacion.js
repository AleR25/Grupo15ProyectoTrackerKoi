// JS Validación de Registro //

const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const confirmacion = document.getElementById("confirm-pass")
const form = document.getElementById("formulario");
const parrafo = document.getElementById("warnings")
const checkbox = document.getElementById("terminos")

formulario.addEventListener("submit", e=> {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.innerHTML = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true;
    }

    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true;
    }

    if(pass.value.length <8){
        warnings += `La contraseña no es valida <br>`
        entrar = true;
    }

    if(confirmacion.value !== pass.value){
        warnings += `Las contraseñas no coinciden <br>`
        entrar = true;
    }

    if(!checkbox.checked){
        warnings += `Debes aceptar los terminos y condiciones <br>`
        entrar = true;
    }

    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "Ya estas registrado! <3"
    }
})
