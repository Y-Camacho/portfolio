import {addActiveClass, desplaceTo, removerClasesActivas} from './functions.js'

const d = document,
      w = window;

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

// Dependiendo de la techa, desplazar hacia arriba o hacia abajo
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