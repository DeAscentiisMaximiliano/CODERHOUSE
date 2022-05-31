
//           Preguntas y respuestas con puntuacion

let puntaje = 0

pregunta = alert("Responda con    A    o    B  ; según corresponda !!")


const opcionTrue = () =>{
    let respuestaTrue = [A , B]
    

    if (respuestaTrue === respuestaTrue[0]){
        puntaje++
        alert("Correcto. Sumas 1 punto.")
        alert(" Su puntuaje actual es  "  + puntaje)
        }else if (pregunta === respuestaTrue[1]){
            alert("Incorrecto.  No sumas puntos. ") 
            alert(" Su puntuaje actual es  " + puntaje) 
        }else{
            alert("Comando inválido, siguiente pregunta")
        }
        
    
}






respuestaTrue = prompt("Quien tiene más habitantes? -   A • (Perú)   B • (Canadá) ")
opcionTrue()
alert("Canadá tiene 38 millones de habitantes, mientras que Perú tiene 32 millones de habitantes. ")

respuestaTrue = prompt("Quien es el jugador con mas goles anotados en mundiales de fútbol) -     A • (Ronaldo)    B • (Klose) ")
opcionTrue()
alert("Ronaldo tiene 15 goles, mientras que Klose tiene 16.")

respuestaTrue = prompt("HTML, es un lenguaje de programación? -    A • (No)   B • (Si) ")
opcionTrue()
alert("HTML no es considerado un lenguaje de programación, ya que no puede crear funcionalidades dinámicas.")

respuestaTrue = prompt("-Cuál animal es mas rápido?  -    A • (Caballo)     B • (Avestruz)  ")
opcionTrue()
alert("El caballo puede alcanzar en promedio 70 km/H, mientras que el avestruz 90 km/H . ")

respuestaTrue = prompt("Quién tiene mas años?  -     A • (Guillermo Francella)    B • (Ricardo Darín)  ")
opcionTrue()
alert("Darín tiene 65 años y Francella 67 años. ")


alert("Tu puntuacion total es   " + puntaje + "  !!")
alert(" Gracias por jugar     ☺     !!")


while(puntaje <= 5){
    pregunta       
        } 

        alert ("Hasta la próxima!")