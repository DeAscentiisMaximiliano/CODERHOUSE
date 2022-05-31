
//Pedir numero mediante Prompt, sumandose de a 1 en cada repeticion.


const CAMISETASDEFUTBOL = prompt("Ingrese la cantidad de jugadores") // En este caso, el numero maximo de TURNOS, sera asignado por el valor que se ingrese desde el prompt.

for(let camiseta = 1; camiseta <= CAMISETASDEFUTBOL; camiseta++) {     // Como consecuencia, en este caso, TURNOS, tendra un valor variable depende que se ingrese anteriormente, pero con el mismo mecanismo en adelante.
    let nombreJugador = prompt("Ingrese nombre del jugador")
    alert(" Numero de camiseta " + camiseta + " para el jugador " + nombreJugador)
}
alert("Todos los numeros han sido asignados")




// While
let datoPrompt
let numeroShirt = 0 

do{
    datoPrompt = prompt("Ingrese su nombre").toLowerCase() 
    if(datoPrompt == "stop") {   
        break
    }
    numeroShirt++ 
        alert ("Numero" + numeroShirt + "otorgado a" + datoPrompt) 
} while (true){       
alert("Hasta luego!!")
}

