// JS NAV BAR RESPONSIVE//

const
navMenu = document.getElementById('nav-menu')

navToggle = document.getElementById('nav-toggle')

navClose = document.getElementById('nav-close')

//mostrar menu//

if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

//ocultar menu//

if(navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
})
}

/* // JS Validación de Registro //

const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const confirmacion = document.getElementById("confirm-pass");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
const checkbox = document.getElementById("terminos");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    parrafo.innerHTML = "";
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`;
        entrar = true;
    };

    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`;
        entrar = true;
    }

    if(pass.value.length <8){
        warnings += `La contraseña no es valida <br>`;
        entrar = true;
    }

    if(confirmacion.value !== pass.value){
        warnings += `Las contraseñas no coinciden <br>`;
        entrar = true;
    }

    if(!checkbox.checked){
        warnings += `Debes aceptar los terminos y condiciones <br>`;
        entrar = true;
    }

    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "Ya estas registrado! <3";
    }
}); */

// MODAL DE INICIO DE SESION //

const mostrarModal = document.getElementById('lanzar-modal');
const ocultarModal = document.querySelector('#abrir-perfil');
const contModal = document.querySelector('#contenedor-modal');

mostrarModal.addEventListener("click", aplicarCambios);
ocultarModal.addEventListener("click", abrirPerfil);

function aplicarCambios(){
    contModal.classList.remove("contenedor__modal");
    contModal.classList.add("mostrar");
}

function abrirPerfil(){
    location.href="/pages/views/perfil.html";
}