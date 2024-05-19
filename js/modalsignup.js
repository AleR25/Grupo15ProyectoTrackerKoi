const mostrarModal = document.getElementById('lanzar-modal');
const abrirPerfil = document.querySelector('#abrir-perfil');
const contModal = document.querySelector('#contenedor-modal');

mostrarModal.addEventListener("click", aplicarCambios);
abrirPerfil.addEventListener("click", IrAPerfil);

function aplicarCambios(){
    contModal.classList.remove("contenedor__modal");
    contModal.classList.add("mostrar");
}

function IrAPerfil(event){
    event.preventDefault();
    location.href="/pages/views/perfil.html";
}