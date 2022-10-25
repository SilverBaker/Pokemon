let fragmento=document.createDocumentFragment()
let pantalla=document.getElementById("juego")

let listaPokemon=[
    "MR MIME",
    "UMBREON",
    "HITMONLEE",
    "TANGROWTH",
    "MAGMORTAR",
    "POLITOED"
]


let objetoPokemonEnemigo=1
let objetoPokemonAliado=1

const primeraCarga=()=>{
    let pokeEnemigo=document.createElement("div")
    let pokeAliado=document.createElement("div")
    let imagenEnemigo=document.createElement("img")
    let imagenAliado=document.createElement("img")
    pokeAliado.style.position="absolute"
    pokeAliado.style.top="290px"
    pokeAliado.style.left="94px"
    pokeEnemigo.style.position="absolute"
    pokeEnemigo.style.top="54px"
    pokeEnemigo.style.left="384px"
    imagenAliado.src="./assets/images/Pokemon/Back/1.webp"
    imagenEnemigo.src="./assets/images/Pokemon/Front/1.webp"
    pokeAliado.appendChild(imagenAliado)
    pokeEnemigo.appendChild(imagenEnemigo)
    pantalla.prepend(pokeAliado,pokeEnemigo)
}





document.addEventListener("DOMContentLoaded",primeraCarga())