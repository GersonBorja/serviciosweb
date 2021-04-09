// variable que indica el estado del menu (open/close)
let contador = 1

// funcion que controla la apertura y cierre del menu
const btnAbrirMenu = () => {
    menuopen.addEventListener("click", e => {
        e.preventDefault()
        if (contador == 1) {
            accionAbrirMenu()
            contador = 0
        } else {
            contador = 1
            accionCerrarMenu()
        }
    })
}

// funciones que abren y cierran el menu principal
const accionAbrirMenu = () => {
    menu.style.left = "0"
}
const accionCerrarMenu = () => {
    menu.style.left = "-70%"
}

/*
Se recorren todos los links del header para controlart el comportamiento y
añadirles un callback al activar el evento click
*/
let linksMenu = document.querySelectorAll(".links_menu")

linksMenu.forEach(element => {
    element.addEventListener("click", e => {
        setTimeout(() => {
            accionCerrarMenu()
            contador = 1
        }, 1000)
    })
})

//se llama la funcion que ejecuta la apertura y cierre del menu
btnAbrirMenu()