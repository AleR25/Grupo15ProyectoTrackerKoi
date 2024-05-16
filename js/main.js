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

// JS Validación de Registro //

const nombre = document.getElementById("name")

const email = document.getElementById("email")

const pass = document.getElementById("password")

const form = document.getElementById("form")

const parrafo = document.getElementById("warning")

form.addEventListener("submit", e=>{
e.preventDefault()
let warning = ""

if(nombre.value.lenght <6){
warning += `el nombre no valido <br>`}

if(!regex.Ealue.lenght <6){
warning += `el nombre no valido <br>`}
})