const btnLinks = document.querySelectorAll(".btn-link"),
      articles = document.querySelectorAll(".article");

// Array que contiene los id de los artículos sobre los cuales se navega
// a través de las teclas
const idArticles =(() => {
    let idArticles = [];
    
    articles.forEach((art, indx) => {
        idArticles[indx] = art.id
    })
    
    return idArticles;
})();

// Retorna la posición (del array de artículos) en la que nos encontramos
function getNumPosition() {
    let position = window.location.hash.replace("#", ""),
    
        numPosition = 0;

    for(let id of idArticles){
        if(id === position) break;
        numPosition++;
    }

    return numPosition;
}

// SE encarga de cambiar hash de la URL tomando en cuenta la posisión en 
// que nos encontramos y hacia dónde queremos ir.
export function desplaceTo(comando) {
    let postActual = getNumPosition()

    if(comando === -1){
        if(postActual > 0){
            window.location.hash = `#${idArticles[postActual - 1]}`;
        }
    } else if(comando === 1) {
        if(postActual < idArticles.length - 1){
            window.location.hash = `#${idArticles[postActual + 1]}`;
        }
    }
}

// Verifica la el hast y asigna una clase active al anchorTag con esta URL correspondiente
export function addActiveClass() {
    btnLinks.forEach( boton => {
        let hashExReg = new RegExp(`${window.location.hash}$`);
        if(hashExReg.test(boton.href)){
            boton.classList.add("btn-link-active");
        }
    });
}

// Elimina la calse active a todos los anchorTags del menu ne navegación.
export const removerClasesActivas = () => {
    btnLinks.forEach((boton) => {
        boton.classList.remove("btn-link-active");
    });
}

