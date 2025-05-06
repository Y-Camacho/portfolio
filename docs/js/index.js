import {addActiveClass, desplaceTo, removerClasesActivas} from './functions.js'

const d = document,
      w = window;

const $panel = d.querySelector(".panel");

// Para que siempre comience la página en el about me
w.location.hash = "#about"
// ---

// Controles para la que la clase active del menú esté con respecto al hash de la URL
w.addEventListener("hashchange", (e) => {
    removerClasesActivas();
    addActiveClass();
});
// ---

// Elimino cualquier evento programado para estas teclas
// Me sirve para evitar el scroll por defecto que tienen
d.addEventListener("keydown", (e) => {
    if(e.key === "ArrowUp"){
        e.preventDefault();
    } else if(e.key === "ArrowDown"){
        e.preventDefault();
    }
})
// ---

// Dependiendo de la tecla, desplazar hacia arriba o hacia abajo
d.addEventListener("keyup", (e) => {
    if(e.key === "ArrowUp"){
        e.preventDefault();
        desplaceTo(-1);
    } else if(e.key === "ArrowDown"){
        e.preventDefault();
        desplaceTo(1);
    }
});
// ---

// Programación del evento 'click'
d.addEventListener("click", (e) => {
    // Al dar click a la hamburgusa se muestra el menú
    if(e.target.matches(".hamburger") || e.target.matches(".hamburger *")){
        $panel.classList.toggle("panel-active");
    } // Al dar sobre una opcion del menú este se oculta
    if(e.target.matches(".panel *")){
        $panel.classList.remove("panel-active");
    }
    // ---

    // Si el clic es en los controles touch, dependiendo del que 
    // lanzó el evnto, nos desplazamos hacia arria o abajo
    if(e.target.matches(".btn-up")){
        desplaceTo(-1);
    } else if(e.target.matches(".btn-down")){
        desplaceTo(1);
    }
    // ---
})
// ---