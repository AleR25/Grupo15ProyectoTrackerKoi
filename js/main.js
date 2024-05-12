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