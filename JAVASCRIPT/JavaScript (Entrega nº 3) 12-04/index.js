

// Arrays
const tematica = ["basket", "futbol"  , "tennis"]
const respuestasbasket = ["jordan", "curry", "giannis"]
const respuestasfutbol = ["messi",  "boca" , "chelsea"]
const respuestastennis = ["federer",  "del potro",  "suiza"]

// Vars
let puntos = 0


alert ("TRIVIA!")
alert ("Elegi la tematica! Tenes " + tematica.length + " opciones" )
let answer = prompt (tematica)
alert ("Elegiste: " + answer + "!")


// Inicio de funciones 

function basket () {
    
    alert ("Ubica las respuestas! " + respuestasbasket)

    let answer = prompt ("Quien es el mejor jugador de la historia? ")
    
    switch (answer) {
        case respuestasbasket [0]:
            alert ("Correcto");
            puntos ++
            
            break;
        
        default:
            alert ("Incorrecto");
            break;

        
    }    

    let answer2 = prompt ("Quien es el mejor tirador? ")

    switch (answer2) {
        case respuestasbasket [1]:
            alert ("Correcto")
            puntos ++
            break;
        default:
            alert("Incorrecto")
            break;
    }

    let answer3 = prompt ("Quien fue el MVP de las finales del 2021? ")

    switch (answer3) {
        case respuestasbasket [2]:
            alert ("Correcto")
            puntos ++
            break;
        default:
            alert("Incorrecto")
            break;
    }


    
}

function futbol () {
    
    alert ("Ubica las respuestas! " + respuestasfutbol)
    let answer = prompt ("Quien es el mejor jugador de la historia?")

    switch (answer) {
        case respuestasfutbol [0]:
            alert ("Correcto");
            puntos ++
            break;
        
        default:
            alert ("Incorrecto")
            break;
    }    

    let answer2 = prompt ("Quien es mas grande?")

    switch (answer2) {
        case respuestasfutbol [1]:
            alert ("Correcto")
            puntos ++
            break;
        default:
            alert("Incorrecto")
            break;
    }

    let answer3 = prompt ("Quien fue el campeon de la UCL 2021?")

    switch (answer3) {
        case respuestasfutbol [2]:
            alert ("Correcto")
            puntos ++
            break;
        default:
            alert("Incorrecto")
            break;
    }    
}

function tennis () {
    
    alert ("Ubica las respuestas! " + respuestastennis)
    let answer = prompt ("Quien es el mejor jugador de la historia?")

    switch (answer) {
        case respuestastennis [0]:
            alert ("Correcto");
            puntos ++
            break;
        
        default:
            alert ("Incorrecto")
            break;
    }

    let answer2 = prompt ("Quien fue el ultimo argentino en ganar el US OPEN? ")

    switch (answer2) {
        case respuestastennis [1]:
            alert ("Correcto")
            puntos ++
            break;
        default:
            alert("Incorrecto")
            break;
    }

    let answer3 = prompt ("De que pais es federer?")

    switch (answer3) {
        case respuestastennis [2]:
            alert ("Correcto")
            puntos ++
            break;
        default:
            alert("Incorrecto")
            break;
    }

}

// Finalizan funciones 

// Inicio ciclo

while (answer != "salir")  {


switch (answer) 
{
    case tematica [0] :
    
    console.log("basket")

    basket()

    break;

case tematica [1]:
    
    console.log("futbol")
    
    futbol()
    
    break;

case tematica [2]:
    
    console.log("tennis")
        
    tennis()
        
    break;
        
default:

    alert ("Tematica no valida! Ingresar nuevamente")
    console.log ("Tematica no valida! Ingresar nuevamente")

    break;
    
}

answer = prompt ("Ingresa la tematica: basket, futbol, tennis. Para terminar, ingrese: salir")

}

// Finaliza ciclo

alert ("Puntos acumulados " + puntos)

console.log ("Puntos acumulados: " + puntos)

switch (puntos){
    case puntos = 9:
        alert ("Alcanzaste el puntaje ideal " + puntos + " puntos!")
    default:
        break;
}

alert ("Trivia finalizada! Gracias por jugar. Ingresa tus datos para guardar tus datos.")

function player (nombre, edad){
    this.nombre = nombre
    this.edad = edad
}

var1 = prompt ("Nombre")
var2 = prompt ("Edad")

const player1 = new player (var1, var2)

console.log (player1)



