let fragmento=document.createDocumentFragment()
let pantalla=document.getElementById("juego")
let dialogo=document.getElementById("dialogo")

let listaPokemon=[
    ["MR MIME",100,50,70,105,125,95,"PSIQUICO","BARRERA","PUÑO DINAMICO","CONFUSION"],
    ["UMBREON",155,70,115,65,135,70,"FINTA","LATIGO","PSIQUICO","PULSO UMBRIO"],
    ["HITMONLEE",110,120,58,40,115,92,"PATADA SALTO","MEDITACION","PUÑO DINAMICO","PUNTAPIE"] 
]

let movimientos=[
    ["PSIQUICO",90,100,"S"],
    ["BARRERA",2,0],
    ["CONFUSION",50,100,"S"],
    ["PUÑO DINAMICO",100,50,"F"],
    ["PATADA SALTO",100,95,"F"],
    ["PUNTAPIE",65,100,"F"],
    ["FINTA",60,0,"S"],
    ["PULSO UMBRIO",80,100,"S"],
    ["MEDITACION",1.5,0],
    ["LATIGO",0.75,100]
]

let divataques=document.getElementById("ataques")
let numeroPokemonMio=Math.floor(1+Math.random()*3)
let numeroPokemonEnemigo=Math.floor(1+Math.random()*3)
let objetoPokemonEnemigo=listaPokemon[numeroPokemonEnemigo-1]
let objetoPokemonAliado=listaPokemon[numeroPokemonMio-1]


const atacar=(event)=>{
    let evento=event.target
    if(evento.value!=null){
        let attack
        for(let move of movimientos){
            if(move[0]==evento.value){
                attack=move
            }
        }
        if (attack[1]<=2){
            
        }else{
            let ataque
            let defensa
            if(attack[3]=="S"){
                ataque=objetoPokemonAliado[4]   
                defensa=objetoPokemonEnemigo[5] 
            }else{
                ataque=objetoPokemonAliado[2]
                defensa=objetoPokemonEnemigo[3] 
            }
            console.log(((2*50)/5+2)*attack[1]*(ataque/defensa)/50+2)
        }
    }
}

const primeraCarga=()=>{
    dialogo.innerHTML="¿Que ataque vas a<br><br> escoger ahora?"
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
    imagenAliado.src="./assets/images/Pokemon/Back/"+numeroPokemonMio+".png"
    imagenEnemigo.src="./assets/images/Pokemon/Front/"+numeroPokemonEnemigo+".png"
    pokeAliado.appendChild(imagenAliado)
    pokeEnemigo.appendChild(imagenEnemigo)
    pantalla.prepend(pokeAliado,pokeEnemigo)
    let ataques=document.getElementsByTagName("input")
    let contador=0
    for(let element of ataques){
        element.value=listaPokemon[numeroPokemonMio-1][7+contador]
        if(element.value=="PSIQUICO"||
        element.value=="BARRERA"||
        element.value=="CONFUSION"){
            element.classList.add("psy")
        }
        if(element.value=="PUÑO DINAMICO"||
        element.value=="PUNTAPIE"||
        element.value=="PATADA SALTO"){
            element.classList.add("fight")
        }
        if(element.value=="FINTA"||
        element.value=="PULSO UMBRIO"){
            element.classList.add("sin")
        }
        if(element.value=="LATIGO"||
        element.value=="MEDITACION"){
            element.classList.add("normal")
        }
        contador++
    }
}




divataques.addEventListener("click",atacar)
document.addEventListener("DOMContentLoaded",primeraCarga)