let fragmento = document.createDocumentFragment()
let pantalla = document.getElementById("juego")
let dialogo = document.getElementById("dialogo")

let turno = true

let listaPokemon = [
    ["MR MIME", 100, 50, 70, 105, 125, 95, "PSIQUICO", "BARRERA", "PUÑO DINAMICO", "CONFUSION", "PSY"],
    ["UMBREON", 155, 70, 115, 65, 135, 70, "FINTA", "LATIGO", "PSIQUICO", "PULSO UMBRIO", "DARK"],
    ["HITMONLEE", 110, 120, 58, 40, 115, 92, "PATADA SALTO", "MEDITACION", "PUÑO DINAMICO", "PUNTAPIE", "FIGHT"]
]

let movimientos = [
    ["PSIQUICO", 90, 100, "S", "PSY"],
    ["BARRERA", 2, 0],
    ["CONFUSION", 50, 100, "S", "PSY"],
    ["PUÑO DINAMICO", 100, 50, "F", "FIGHT"],
    ["PATADA SALTO", 100, 95, "F", "FIGHT"],
    ["PUNTAPIE", 65, 100, "F", "FIGHT"],
    ["FINTA", 60, 0, "S", "DARK"],
    ["PULSO UMBRIO", 80, 100, "S", "DARK"],
    ["MEDITACION", 1.5, 0],
    ["LATIGO", 0.75, 100]
]

let divataques = document.getElementById("ataques")
let numeroPokemonMio
let numeroPokemonEnemigo = Math.floor(1 + Math.random() * 3)
let objetoPokemonEnemigo = listaPokemon[numeroPokemonEnemigo - 1]
let objetoPokemonAliado

const atacar = (attack, Pokemon1, Pokemon2) => {
    if (Pokemon2[1] > 0 && Pokemon1[1] > 0) {
        dialogo.innerHTML = Pokemon1[0] + " <br><br>usó " + attack[0] + "."
        let escribir = ""
        if (attack[1] <= 2) {
            return 0
        } else {
            let ataque
            let defensa
            let stab = 1
            let type = 1
            if (attack[4] == "PSY" && Pokemon2[Pokemon2.length - 1] == "DARK") {
                type = 0
            }
            else if (attack[4] == "PSY" && Pokemon2[Pokemon2.length - 1] == "FIGHT") {
                type = 2
            }
            else if (attack[4] == "PSY" && Pokemon2[Pokemon2.length - 1] == "PSY") {
                type = 0.5
            }
            else if (attack[4] == "FIGHT" && Pokemon2[Pokemon2.length - 1] == "PSY") {
                type = 0.5
            }
            else if (attack[4] == "FIGHT" && (Pokemon2[Pokemon2.length - 1] == "FIGHT" || Pokemon2[Pokemon2.length - 1] == "DARK")) {
                type = 2
            }
            else if (attack[4] == "DARK" && (Pokemon2[Pokemon2.length - 1] == "FIGHT" || Pokemon2[Pokemon2.length - 1] == "DARK")) {
                type = 0.5
            }
            else if (attack[4] == "DARK" && Pokemon2[Pokemon2.length - 1] == "PSY") {
                type = 2
            }

            switch (type) {
                case 0:
                    escribir = "No surtió ningún<br><br>efecto."
                    break;
                case 2:
                    escribir = "¡Es muy eficaz!"
                    break;
                case 0.5:
                    escribir = "No es muy eficaz."
                    break;
                default:
                    Pokemon1[0] + " <br><br>usó " + attack[0] + "."
                    break;
            }

            setTimeout(() => {
                dialogo.innerHTML = escribir
            }, 2000)

            if (attack[4] == Pokemon1[Pokemon1.length - 1]) {
                stab = 1.5
            }

            if (attack[3] == "S") {
                ataque = Pokemon1[4]
                defensa = Pokemon2[5]
            } else {
                ataque = Pokemon1[2]
                defensa = Pokemon2[3]
            }
            return ((((2 * 50) / 5 + 2) * attack[1] * (ataque / defensa) / 50 + 2) * stab * type)
        }

    } else {
        return 0
    }
}

const filtrarAtaque = (event) => {
    let evento = event.target
    if (evento.value != null && turno) {
        let attack
        for (let move of movimientos) {
            if (move[0] == evento.value) {
                attack = move
            }
        }
        turno = false
        if (objetoPokemonAliado[6] >= objetoPokemonEnemigo[6]) {
            let damageEnemigo = atacar(attack, objetoPokemonAliado, objetoPokemonEnemigo)
            objetoPokemonEnemigo[1] = objetoPokemonEnemigo[1] - Math.floor(damageEnemigo)
            console.log(objetoPokemonEnemigo[1] + "PS Enemigo")
            if (objetoPokemonEnemigo[1] <= 0) {
                let Poke = document.getElementById("SuPoke")
                Poke.remove()
                setTimeout(() => { dialogo.textContent="Has Ganado" }, 10000)
            }
            setTimeout(() => {
                let attack2 = listaPokemon[numeroPokemonEnemigo - 1][Math.floor(7 + Math.random() * 4)]
                for (let move of movimientos) {
                    if (move[0] == attack2) {
                        attack2 = move
                    }
                }
                let damageAliado = atacar(attack2, objetoPokemonEnemigo, objetoPokemonAliado)
                objetoPokemonAliado[1] = objetoPokemonAliado[1] - Math.floor(damageAliado)
                if (objetoPokemonAliado[1] <= 0) {
                    let Poke = document.getElementById("MiPoke")
                    Poke.remove()
                    setTimeout(() => { dialogo.textContent="Has Perdido" }, 10000)
                }
            }, 6000)

        }
        else {
            let attack2 = listaPokemon[numeroPokemonEnemigo - 1][Math.floor(7 + Math.random() * 4)]
            for (let move of movimientos) {
                if (move[0] == attack2) {
                    attack2 = move
                }
            }
            let damageAliado = atacar(attack2, objetoPokemonEnemigo, objetoPokemonAliado)
            objetoPokemonAliado[1] = objetoPokemonAliado[1] - Math.floor(damageAliado)
            console.log(objetoPokemonAliado[1] + "PS")
            if (objetoPokemonAliado[1] <= 0) {
                let Poke = document.getElementById("MiPoke")
                Poke.remove()
                setTimeout(() => { dialogo.textContent="Has Perdido" }, 10000)

            }
            setTimeout(() => {


                let damageEnemigo = atacar(attack, objetoPokemonAliado, objetoPokemonEnemigo)
                objetoPokemonEnemigo[1] = objetoPokemonEnemigo[1] - Math.floor(damageEnemigo)
                console.log(objetoPokemonEnemigo[1] + "PS Enemigo")
                if (objetoPokemonEnemigo[1] <= 0) {
                    let Poke = document.getElementById("SuPoke")
                    Poke.remove()
                    
                    setTimeout(() => { dialogo.textContent="Has Ganado" }, 10000)
                }
            }, 6000)

        }
        setTimeout(() => { turno = true }, 10000)

    }
}

const cargarAtaques = () => {
    let ataques = document.getElementsByTagName("input")
    let contador = 0
    for (let element of ataques) {
        element.value = listaPokemon[numeroPokemonMio - 1][7 + contador]
        if (element.value == "PSIQUICO" ||
            element.value == "BARRERA" ||
            element.value == "CONFUSION") {
            element.classList.add("psy")
        }
        if (element.value == "PUÑO DINAMICO" ||
            element.value == "PUNTAPIE" ||
            element.value == "PATADA SALTO") {
            element.classList.add("fight")
        }
        if (element.value == "FINTA" ||
            element.value == "PULSO UMBRIO") {
            element.classList.add("sin")
        }
        if (element.value == "LATIGO" ||
            element.value == "MEDITACION") {
            element.classList.add("normal")
        }
        contador++
    }
}

const primeraCarga = () => {
    dialogo.innerHTML = "¿Que ataque vas a<br><br> escoger ahora?"
    let pokeEnemigo = document.createElement("div")
    let pokeAliado = document.createElement("div")
    let imagenEnemigo = document.createElement("img")
    let imagenAliado = document.createElement("img")
    pokeAliado.style.position = "absolute"
    pokeAliado.style.top = "290px"
    pokeAliado.style.left = "94px"
    pokeAliado.id = "MiPoke"
    pokeEnemigo.style.position = "absolute"
    pokeEnemigo.style.top = "54px"
    pokeEnemigo.style.left = "384px"
    pokeEnemigo.id = "SuPoke"
    imagenAliado.src = "./assets/images/Pokemon/Back/" + numeroPokemonMio + ".png"
    imagenEnemigo.src = "./assets/images/Pokemon/Front/" + numeroPokemonEnemigo + ".png"
    pokeAliado.appendChild(imagenAliado)
    pokeEnemigo.appendChild(imagenEnemigo)
    pantalla.prepend(pokeAliado, pokeEnemigo)
    cargarAtaques()
}

const config = (event) => {
    let imagen
    let evento = event.target
    if (evento.parentElement.className == "poke" || evento.className == "poke") {
        let config = document.querySelector(".Config")
        config.style.display = "none"
        let container = document.querySelector(".container")
        container.style.display = "block"
        if (evento.className == "poke") {
            imagen = evento.getElementsByTagName("IMG")
        }
        else if (evento.parentElement.className == "poke") {
            imagen = evento.parentElement.getElementsByTagName("IMG")

        }
        imagen = imagen[0].src.split("/")
        imagen = imagen[imagen.length - 1].split(".")[0]
        numeroPokemonMio = imagen
        objetoPokemonAliado = listaPokemon[imagen - 1]
        primeraCarga()
    }
}


divataques.addEventListener("click", filtrarAtaque)
document.addEventListener("click", config)
// document.addEventListener("DOMContentLoaded",primeraCarga)