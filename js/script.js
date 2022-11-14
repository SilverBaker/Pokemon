let fragmento = document.createDocumentFragment();
let pantalla = document.getElementById("juego");
let dialogo = document.getElementById("dialogo");
let configurado = false;
let turno = true;

/*Array multidimensional con los pokemons
Formato de pokemon:

NOMBRE,
VIDA,
ATAQUE,
DEFENSA,
ATAQUE ESPECIAL,
DEFENSA ESPECIAL,
VELOCIDAD,
ATAQUE1,
ATAQUE2,
ATAQUE3,
ATAQUE4,
TIPO1,
TIPO2
 */
let listaPokemon = [
  [
    "MR MIME",
    100,
    50,
    70,
    105,
    125,
    95,
    "PSIQUICO",
    "BARRERA",
    "ONDA CERTERA",
    "BOLA SOMBRA",
    "PSY",
    ""
  ],
  [
    "UMBREON",
    155,
    70,
    115,
    65,
    135,
    70,
    "FINTA",
    "LATIGO",
    "PSIQUICO",
    "PULSO UMBRIO",
    "DARK",
    ""
  ],
  [
    "HITMONLEE",
    110,
    120,
    104,
    40,
    115,
    92,
    "PATADA SALTO",
    "MEDITACION",
    "TERREMOTO",
    "PUNTAPIE",
    "FIGHT",
    ""
  ],
  [
    "ELECTABUZZ",
    125,
    88,
    62,
    100,
    90,
    110,
    "RAYO",
    "PSIQUICO",
    "PUNTAPIE",
    "MALICIOSO",
    "ELEC",
    ""
  ],
  [
    "TENTACRUEL",
    140,
    75,
    70,
    85,
    125,
    105,
    "SURF",
    "PUYA NOCIVA",
    "RAYO HIELO",
    "BARRERA",
    "AGUA",
    "VENENO"
  ],
  [
    "PILOSWINE",
    160,
    105,
    85,
    65,
    65,
    55,
    "TERREMOTO",
    "RAYO HIELO",
    "ROCA AFILADA",
    "GOLPE CUERPO",
    "ICE",
    "GROUND"
  ],
  [
    "MISDREAVUS",
    135,
    73,
    73,
    101,
    101,
    101,
    "BOLA SOMBRA",
    "PSIQUICO",
    "PULSO UMBRIO",
    "RAYO",
    "GHOST",
    ""
  ],
  [
    "MAGCARGO",
    110,
    55,
    125,
    85,
    85,
    35,
    "LANZALLAMAS",
    "TERREMOTO",
    "ROCA AFILADA",
    "MALICIOSO",
    "FIRE",
    "ROCK"
  ]
];

/*Array multidimensional con los ataques
formato
NOMBRE,
DAÑO,
PRECISION
,FISICO(F); ESPECIAL(S) O ESTADO(N)
, TIPO
*/
let movimientos = [
  ["PSIQUICO", 90, 100, "S", "PSY"],
  ["CONFUSION", 50, 100, "S", "PSY"],
  ["PUÑO DINAMICO", 100, 50, "F", "FIGHT"],
  ["PATADA SALTO", 100, 95, "F", "FIGHT"],
  ["ONDA CERTERA", 120, 70, "S", "FIGHT"],
  ["PUNTAPIE", 65, 100, "F", "FIGHT"],
  ["FINTA", 60, 100, "S", "DARK"],
  ["PULSO UMBRIO", 80, 100, "S", "DARK"],

  ["SURF", 90, 100, "S", "AGUA"],
  ["LANZALLAMAS", 90, 100, "S", "FIRE"],
  ["HOJA AGUDA", 90, 100, "F", "PLANT"],
  ["RAYO", 90, 100, "S", "ELEC"],
  ["ROCA AFILADA", 100, 80, "F", "ROCK"],
  ["TERREMOTO", 100, 100, "F", "GROUND"],
  ["BOLA SOMBRA", 80, 100, "S", "GHOST"],
  ["PUYA NOCIVA", 80, 100, "F", "VENENO"],
  ["RAYO HIELO", 90, 100, "S", "ICE"],
  ["GOLPE CUERPO", 90, 100, "F", "NORMAL"],

  ["MEDITACION", 1.5, 100,"N","NORMAL"],
  ["MALICIOSO", 0.75, 100,"N","NORMAL"],
  ["LATIGO", 0.75, 100,"N","NORMAL"],
  ["BARRERA", 2, 100, "N", "PSY"]
];

/*
Metodo para setear el array de los pokemon aliado y enemigo
pues los arrays se copian por referencia
*/
const copiarArray=(numero)=>{
  let array=[]
  for (let atr of listaPokemon[numero - 1]) {
    array.push(atr);
  }
  return array
}




let divataques = document.getElementById("ataques");
let numeroPokemonMio;
//genero numero aleatorio para escoger el pokemon del rival
let numeroPokemonEnemigo = Math.floor(1 + Math.random() * listaPokemon.length);
let objetoPokemonEnemigo = copiarArray(numeroPokemonEnemigo);
objetoPokemonEnemigo[0] = objetoPokemonEnemigo[0]+" enemigo"

let objetoPokemonAliado = [];

<<<<<<< HEAD

/*
calcula la efectividad del ataque, se llama dos veces, una para el primer tipo y otra para el segundo
estructura individual de las comprobaciones
Si (el tipo del ataque == tipo && (tipodelatacado==a unos tipos concretos)){
  efectividad = efectividad * x
}

la efectividad sale de la tabla de tipos
=======
/*
Metodo para comprobar la efectividad del ataque contra el pokemon atacado
La efectividad está determinada por la tabla de tipos 
>>>>>>> 412f93da7d2e55679434c8bda3d570b7ea446326
*/
const efectividad = (attack, tipo, type) => {
  // Filtro ataque Psíquico
  if (attack[4] == "PSY" && (
    tipo == "DARK")) {
    type *= 0;
  }
  if (attack[4] == "PSY" && (
    tipo == "FIGHT"||
    tipo == "VENENO")) {
    type *= 2;
  }
  if (attack[4] == "PSY" && (
    tipo == "PSY"||
    tipo == "STEEL")) {
    type *= 0.5;
  }
  // Filtro ataque Lucha
  if (attack[4] == "FIGHT" && (
    tipo == "GHOST")) {
    type *= 0;
  }
  if (attack[4] == "FIGHT" && (
    tipo == "PSY"||
    tipo == "BUG"||
    tipo == "VENENO"||
    tipo == "FLY")) {
    type *= 0.5;
  }
  if (
    attack[4] == "FIGHT" &&
    (tipo == "ICE" ||
      tipo == "DARK"||
      tipo == "STEEL"||
      tipo == "NORMAL"||
      tipo == "ROCK")
  ) {
    type *= 2;
  }
  // Filtro ataque Siniestro
  if (
    attack[4] == "DARK" &&
    (tipo == "FIGHT" ||
      tipo == "DARK")
  ) {
    type *= 0.5;
  }
  if (attack[4] == "DARK" && (
    tipo == "PSY"||
    tipo == "GHOST")) {
    type *= 2;
  }
  // Filtro ataque Agua
  if (
    attack[4] == "AGUA" &&
    (tipo == "AGUA" ||
      tipo == "DRAGON"||
      tipo == "PLANT")
  ) {
    type *= 0.5;
  }
  if (attack[4] == "AGUA" && (
    tipo == "FIRE"||
    tipo == "ROCK"||
    tipo == "GROUND")) {
    type *= 2;
  }
  // Filtro ataque Acero
  if (attack[4] == "STEEL" && (
    tipo == "STEEL"||
    tipo == "AGUA")) {
    type *= 0.5;
  }
  if (
    attack[4] == "STEEL" &&
    (
      tipo == "ROCK"||
      tipo == "ICE"||
      tipo == "FIRE"||
      tipo == "ELEC")
  ) {
    type *= 2;
  }
  // Filtro ataque Bicho
  if (attack[4] == "BUG" && (
    tipo == "STEEL"||
    tipo == "GHOST"||
    tipo == "FIRE"||
    tipo == "FIGHT"||
    tipo == "VENENO"||
    tipo == "FLY")) {
    type *= 0.5;
  }
  if (
    attack[4] == "BUG" &&
    (tipo == "PLANT"||
    tipo == "PSY"||
    tipo == "DARK")
  ) {
    type *= 2;
  }
  // Filtro ataque Dragon
  if (attack[4] == "DRAGON" && (
    tipo == "STEEL")) {
    type *= 0.5;
  }
  if (
    attack[4] == "DRAGON" &&
    (tipo == "DRAGON")
  ) {
    type *= 2;
  }
  // Filtro ataque ELECTRICO
  if (attack[4] == "ELEC" && (
    tipo == "GROUND")) {
    type *= 0;
  }
  if (attack[4] == "ELEC" && (
    tipo == "DRAGON"||
    tipo == "ELEC"||
    tipo == "PLANT"||
    tipo=="ROCK")) {
    type *= 0.5;
  }
  if (
    attack[4] == "ELEC" &&(
      tipo == "AGUA"||
      tipo == "FLY"
    )
  ) {
    type *= 2;
  }
  // Filtro ataque FANTASMA
  if (attack[4] == "GHOST" && (
    tipo == "NORMAL")) {
    type *= 0;
  }
  if (attack[4] == "GHOST" && (
    tipo == "DARK")) {
    type *= 0.5;
  }
  if (
    attack[4] == "GHOST" &&(
      tipo == "GHOST"||
      tipo == "PSY"
    )
  ) {
    type *= 2;
  }
  // Filtro ataque FUEGO
  if (attack[4] == "FIRE" && (
    tipo == "DRAGON"||
    tipo == "AGUA"||
    tipo == "FIRE"||
    tipo == "ROCK"
  )) {
    type *= 0.5;
  }
  if (
    attack[4] == "FIRE" &&(
    tipo == "STEEL"||
    tipo == "BUG"||
    tipo == "ICE"||
    tipo == "PLANT")
  ) {
    type *= 2;
  }
  // Filtro ataque ICE
  if (attack[4] == "ICE" && (
    tipo == "STEEL"||
    tipo == "AGUA"||
    tipo == "ICE"||
    tipo == "FIRE"
  )) {
    type *= 0.5;
  }
  if (
    attack[4] == "ICE" &&(
      tipo == "DRAGON"||
      tipo == "PLANT"||
      tipo == "GROUND"||
      tipo == "FLY")
  ) {
    type *= 2;
  }
  // Filtro ataque NORMAL
  if (attack[4] == "NORMAL" && (
    tipo == "GHOST")) {
    type *= 0;
  }
  if (attack[4] == "NORMAL" && (
    tipo == "STEEL"||
    tipo == "ROCK")) {
    type *= 0.5;
  }
  // Filtro ataque PLANT
  if (attack[4] == "PLANT" && (
    tipo == "STEEL"||
    tipo == "BUG"||
    tipo == "DRAGON"||
    tipo == "FIRE"||
    tipo == "PLANT"||
    tipo == "VENENO"||
    tipo == "FLY"
  )) {
    type *= 0.5;
  }
  if (
    attack[4] == "PLANT" &&(
      tipo == "AGUA"||
      tipo == "GROUND"||
      tipo == "ROCK")
  ) {
    type *= 2;
  }
  // Filtro ataque ROCK
  if (attack[4] == "ROCK" && (
    tipo == "STEEL"||
    tipo == "FIGHT"||
    tipo == "GROUND"
  )) {
    type *= 0.5;
  }
  if (
    attack[4] == "ROCK" &&(
      tipo == "BUG"||
      tipo == "FIRE"||
      tipo == "ICE"||
      tipo == "FLY")
  ) {
    type *= 2;
  }
  // Filtro ataque GROUND
  if (attack[4] == "GROUND" && (
    tipo == "FLY"
  )) {
    type *= 0;
  }
  if (attack[4] == "GROUND" && (
    tipo == "BUG"||
    tipo == "PLANT"
  )) {
    type *= 0.5;
  }
  if (
    attack[4] == "GROUND" &&(
      tipo == "STEEL"||
      tipo == "ELEC"||
      tipo == "FIRE"||
      tipo == "VENENO"||
      tipo == "ROCK"
  )) {
    type *= 2;
  }
  // Filtro ataque VENENO
  if (attack[4] == "VENENO" && (
    tipo == "STEEL"
  )) {
    type *= 0;
  }
  if (attack[4] == "VENENO" && (
    tipo == "GHOST"||
    tipo == "GROUND"||
    tipo == "VENENO"||
    tipo == "ROCK"
  )) {
    type *= 0.5;
  }
  if (
    attack[4] == "VENENO" &&(
      tipo == "PLANT")
  ) {
    type *= 2;
  }
  // Filtro ataque FLY
  if (attack[4] == "FLY" && (
    tipo == "STEEL"||
    tipo == "ELEC"||
    tipo == "ROCK"
  )) {
    type *= 0.5;
  }
  if (
    attack[4] == "FLY" &&(
      tipo == "BUG"||
      tipo == "FIGHT"||
      tipo == "PLANT")
  ) {
    type *= 2;
  }
  return type;
};

<<<<<<< HEAD

/*
atacar recibe el ataque que hace el usuario, el pokemon atacante y el atacado
=======
/* 
  Atacar devuelve el daño que se le hace al Pokemon atacado, solo se ejecuta si ambos pokemon tienen vida
  controlo con setTimeout la ejecucion del codigo para que ocurra escalado
  y el usuario se entere de lo que pasa.
  Pues si no pasaria todo a la vez
>>>>>>> 412f93da7d2e55679434c8bda3d570b7ea446326
*/
const atacar = (attack, Pokemon1, Pokemon2) => {
  if (Pokemon2[1] > 0 && Pokemon1[1] > 0) {
    dialogo.innerHTML = Pokemon1[0] + " <br><br>usó " + attack[0] + ".";
    let escribir = "";
    //comprueba si tiene menos o igual de 2 de daño el ataque
    //porque significa que es un ataque de estado
    if (attack[1] <= 2) {
      switch (attack[1]) {
        case 2:
          setTimeout(() => {
            dialogo.innerHTML = Pokemon1[0] + " <br><br> aumentó su defensa";
          }, 2000);
          Pokemon1[3] *= 1.5;
          break;
        case 1.5:
          setTimeout(() => {
            dialogo.innerHTML = Pokemon1[0] + " <br><br> aumentó su ataque";
          }, 2000);
          Pokemon1[2] *= 1.5;
          break;
        case 0.75:
          setTimeout(() => {
            dialogo.innerHTML =
              "La defensa de <br><br>" + Pokemon2[0] + " bajó";
          }, 2000);
          Pokemon2[3] *= 0.5;
          break;
      }
      return 0;
    } else {
      /*comprobamos si falla, comparando el numero random con la probabilidad del ataque.
      puño dinamico tiene 50%, 
      el numero nos genera 51,
      el ataque falla,
      si el numero nos genera 50 o menos,
      el ataque acierta
      
      */
      if (falla() <= attack[2]) {
        let ataque;
        let defensa;
        let stab = 1;
        let type = 1;

        type = efectividad(attack, Pokemon2[Pokemon2.length-2], type);
        type = efectividad(attack, Pokemon2[Pokemon2.length-1], type)
        switch (type) {
          case 0:
            escribir = "No surtió ningún<br><br>efecto.";
            break;
          case 2:
            escribir = "¡Es muy eficaz!";
            break;
          case 4:
            escribir = "¡Es supereficaz!"
            break;
          case 0.5:
          case 0.25:
            escribir = "No es muy eficaz.";
            break;
          case 1:
            escribir=Pokemon1[0] + " <br><br>usó " + attack[0] + ".";
            break;
        }

        setTimeout(() => {
          dialogo.innerHTML = escribir;
        }, 2000);

        if (attack[4] == Pokemon1[Pokemon1.length - 1]||attack[4] == Pokemon1[Pokemon1.length - 2]) {
          stab = 1.5;
        }

        if (attack[3] == "S") {
          ataque = Pokemon1[4];
          defensa = Pokemon2[5];
        } else {
          ataque = Pokemon1[2];
          defensa = Pokemon2[3];
        }
        return (
          ((((2 * 50) / 5 + 2) * attack[1] * (ataque / defensa)) / 50 + 2) *
          stab *
          type
        );
      }/* Si falla se esribe "PUÑO DINAMICO" falló */ 
      else {
        setTimeout(() => {
          dialogo.innerHTML = attack[0] + "<br><br> falló.";
        }, 2000);
        return 0;
      }
    }
  }//si alguno de los pokemons no tiene vida devuelve 0 y no cambia nada 
  else {
    return 0;
  }
};

//funcion para determinar si falla el ataque
const falla = () => {
  return Math.floor(Math.random() * 100);
};


/*
Determina quien ataca, comprobando las velocidades de los pokemon y actua en consecuencia
*/
const quienAtaca = (attack) => {

  //Si tu eres más rápido
  if (objetoPokemonAliado[6] >= objetoPokemonEnemigo[6]) {
    //invocas a atacar y le pasamos los parametros
    let damageEnemigo = atacar(
      attack,
      objetoPokemonAliado,
      objetoPokemonEnemigo
    );
    //restamos el daño a la vida
    objetoPokemonEnemigo[1] =
      objetoPokemonEnemigo[1] - Math.floor(damageEnemigo);
      //cambiamos la barra de vida
    let porcentajeEnemigo =
      (objetoPokemonEnemigo[1] / listaPokemon[numeroPokemonEnemigo - 1][1]) *
      100;
    if (porcentajeEnemigo < 0) {
      PSEnemigo.style.width = "0%";
    } else {
      PSEnemigo.style.width = porcentajeEnemigo + "%";
    }
    //si el enemigo se debilita (tiene 0 o menos de vida)
    //se borra del html
    if (objetoPokemonEnemigo[1] <= 0) {
      let Poke = document.getElementById("SuPoke");
      Poke.remove();
      setTimeout(() => {
        setTimeout(terminado(),1000)
      }, 10000);
    }
    setTimeout(() => {
      let attack2 =
        listaPokemon[numeroPokemonEnemigo - 1][
        Math.floor(7 + Math.random() * 4)
        ];
      for (let move of movimientos) {
        if (move[0] == attack2) {
          attack2 = move;
        }
      }
      let damageAliado = atacar(
        attack2,
        objetoPokemonEnemigo,
        objetoPokemonAliado
      );
      objetoPokemonAliado[1] =
        objetoPokemonAliado[1] - Math.floor(damageAliado);
      let porcentajeAliado =
        (objetoPokemonAliado[1] / listaPokemon[numeroPokemonMio - 1][1]) * 100;
      if (porcentajeAliado < 0) {
        PSAliado.style.width = "0%";
        nPSrestantes.textContent = "0/";
      } else {
        nPSrestantes.textContent = objetoPokemonAliado[1] + "/";
        PSAliado.style.width = porcentajeAliado + "%";
      }

      if (objetoPokemonAliado[1] <= 0) {
        let Poke = document.getElementById("MiPoke");
        Poke.remove();
        setTimeout(() => {
          setTimeout(terminado(),1000)
        }, 4000);
      }
    }, 6000);
  } 
  //Si el rival es más rapido
  else {
    let attack2 =
      listaPokemon[numeroPokemonEnemigo - 1][Math.floor(7 + Math.random() * 4)];
    for (let move of movimientos) {
      if (move[0] == attack2) {
        attack2 = move;
      }
    }

    let damageAliado = atacar(
      attack2,
      objetoPokemonEnemigo,
      objetoPokemonAliado
    );
    objetoPokemonAliado[1] = objetoPokemonAliado[1] - Math.floor(damageAliado);
    let porcentajeAliado =
      (objetoPokemonAliado[1] / listaPokemon[numeroPokemonMio - 1][1]) * 100;
    if (porcentajeAliado < 0) {
      PSAliado.style.width = "0%";
      nPSrestantes.textContent = "0/";
    } else {
      PSAliado.style.width = porcentajeAliado + "%";
      nPSrestantes.textContent = objetoPokemonAliado[1] + "/";
    }
    if (objetoPokemonAliado[1] <= 0) {
      let Poke = document.getElementById("MiPoke");
      Poke.remove();
      setTimeout(() => {
        setTimeout(terminado(),1000)
      }, 10000);
    }
    setTimeout(() => {
      let damageEnemigo = atacar(
        attack,
        objetoPokemonAliado,
        objetoPokemonEnemigo
      );
      objetoPokemonEnemigo[1] =
        objetoPokemonEnemigo[1] - Math.floor(damageEnemigo);
      let porcentajeEnemigo =
        (objetoPokemonEnemigo[1] / listaPokemon[numeroPokemonEnemigo - 1][1]) *
        100;
      if (porcentajeEnemigo < 0) {
        PSEnemigo.style.width = "0%";
      } else {
        PSEnemigo.style.width = porcentajeEnemigo + "%";
      }
      if (objetoPokemonEnemigo[1] <= 0) {
        let Poke = document.getElementById("SuPoke");
        Poke.remove();

        setTimeout(() => {
          setTimeout(terminado(),1000)
        }, 4000);
      }
    }, 6000);
  }
};

//Filtra la elección del usuario, para saber que ha hecho click en un ataque y que puede hacerlo, comprobando si turno es true, lo cual se vuelve false hasta que acaban los ataques de ambos
const filtrarAtaque = (event) => {
  let evento = event.target;
  if (evento.value != null && turno) {
    let attack;
    for (let move of movimientos) {
      if (move[0] == evento.value) {
        attack = move;
      }
    }
    turno = false;
    quienAtaca(attack);

    setTimeout(() => {
      dialogo.innerHTML = "¿Que ataque vas a<br><br> escoger ahora?";
      turno = true;
    }, 9999);
  }
};


//Carga los ataques que tiene el pokemon elegido
const cargarAtaques = () => {
  let ataques = document.getElementsByTagName("input");
  let contador = 0;
  for (let element of ataques) {
    element.value = listaPokemon[numeroPokemonMio - 1][7 + contador];
    for (let ataque of movimientos) {
      if (ataque[0] == element.value) {
        element.classList.add(ataque[4])
      }

    }
    contador++;
  }
};

//crea los elementos despues de la eleccion del personaje
const primeraCarga = () => {
  dialogo.innerHTML = "¿Que ataque vas a<br><br> escoger ahora?";
  let pokeEnemigo = document.createElement("div");
  let pokeAliado = document.createElement("div");
  let imagenEnemigo = document.createElement("img");
  let imagenAliado = document.createElement("img");
  pokeAliado.style.position = "absolute";
  pokeAliado.style.top = "270px";
  pokeAliado.style.left = "84px";
  pokeAliado.id = "MiPoke";
  pokeEnemigo.style.position = "absolute";
  pokeEnemigo.style.top = "94px";
  pokeEnemigo.style.left = "364px";
  pokeEnemigo.id = "SuPoke";
  imagenAliado.src =
    "./assets/images/Pokemon/Back/" + numeroPokemonMio + ".png";
  imagenEnemigo.src =
    "./assets/images/Pokemon/Front/" + numeroPokemonEnemigo + ".png";
  NombreAliado.textContent = listaPokemon[numeroPokemonMio - 1][0];
  NombreEnemigo.textContent = listaPokemon[numeroPokemonEnemigo - 1][0];
  pokeAliado.appendChild(imagenAliado);
  pokeEnemigo.appendChild(imagenEnemigo);
  pantalla.prepend(pokeAliado, pokeEnemigo);
  cargarAtaques();
};

//a la hora de escoger personaje comprueba si has pinchado en un pokemon. y te lo selecciona
const config = (event) => {
  if (!configurado) {
    let imagen;
    let evento = event.target;
    if (
      evento.parentElement.className == "poke" ||
      evento.className == "poke"
    ) {
      let config = document.querySelector(".Config");
      config.style.display = "none";
      let container = document.querySelector(".container");
      container.style.display = "block";
      if (evento.className == "poke") {
        imagen = evento.getElementsByTagName("IMG");
      } else if (evento.parentElement.className == "poke") {
        imagen = evento.parentElement.getElementsByTagName("IMG");
      }
      imagen = imagen[0].src.split("/");
      imagen = imagen[imagen.length - 1].split(".")[0];
      numeroPokemonMio = imagen;

      objetoPokemonAliado=copiarArray(numeroPokemonMio)
      
      
      nPSrestantes.textContent = objetoPokemonAliado[1] + "/";
      nPS.textContent = objetoPokemonAliado[1];
      configurado = true;
      primeraCarga();
    }
  }
};

const terminado =()=>{
  let container = document.querySelector(".container");
  container.style.display = "none";
  let terminado = document.getElementById("terminado");
  terminado.style.display = "flex";
}

//genera los pokemons elegibles
const generarDivs=()=>{
  let elegirPokemon=document.getElementById("elegirPokemon")
  let c=0
  let fragmento=document.createDocumentFragment()
    for(let pokemon of listaPokemon){
      c++
      let article=document.createElement("article")
      article.classList.add("poke")
      let header=document.createElement("header")
      header.textContent=pokemon[0]
      let imagen = document.createElement("img");
      imagen.src = "./assets/images/Pokemon/Front/" + c + ".png";
      imagen.classList.add("elegir__img")
      article.appendChild(header)
      article.appendChild(imagen)
      fragmento.appendChild(article)
    }
    elegirPokemon.appendChild(fragmento)
}

divataques.addEventListener("click", filtrarAtaque);
document.addEventListener("click", config);

document.addEventListener("DOMContentLoaded",generarDivs)

document.getElementById("terminado").addEventListener("click",()=>{
  location.reload()
})