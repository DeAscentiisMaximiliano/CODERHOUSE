const pregunta_1 = " 1- Cual país tiene el territorio MAS extenso?:"
const pregunta_2 = " 2- Cual pais tiene el territorio MENOS extenso?:"
const pregunta_3 = " 3- En cual de estos paises se habla español como idioma nativo?:"
const pregunta_4 = " 4- Cual de estos paises es una isla?:"


const preguntas = [pregunta_1, pregunta_2, pregunta_3, pregunta_4]

//La ultima respuesta la uso para validar la posicion [4] como correcta pero no lo hago visible como opcion en html.
const options = [["Peru","Canada","Francia","Japon", "Canada"], ["Peru","Canada","Francia","Japon", "Francia"], ["Peru","Canada","Francia","Japon", "Peru"], ["Peru","Canada","Francia","Japon", "Japon"]]


//DOM
rbuttons = document.getElementsByName("preguntaHtml");

lbls = document.getElementsByClassName("lbl");


index = 0, correct = 0;

div3 = document.getElementById("div3");

question = document.getElementById("preguntas_Id");

boton = document.getElementById("boton");


// Funcion que toma el valor seleccionado
function getSelectedRbutton(rbtn){

console.log(rbtn.value);

    // Chequear si la opcion ingresada es correcta con la posicion 4.
    if(rbtn.value == options[index][4]){
                correct++;
    }

    index++;

    OpcionElegida("d");

}

// Una funcion para que una vez que se elije, no se pueda modificar la opcion elegida.

function OpcionElegida(click){
    if(click == "d"){               // D de disable
        rbuttons.forEach(element => {
            element.disabled = true;
        });
    }else{                           // En caso contrario ENABLED
        rbuttons.forEach(element => {
            element.disabled = false;
        });
    }
}




// Funcion principal del Quiz

function play(){
    // Mostrar la pregeunta
    question.innerHTML = preguntas[index];

    // Opciones
    op = options[index];

    if(boton.innerHTML == "Reiniciar Quiz"){
        boton.innerHTML = "Enviar respuesta";
    }
    if(index == preguntas.length)
    {

    // Si al menos 1 de las preguntas es correcta
    if(correct >= preguntas.length/2){  
        question.innerHTML = "Has sumado:   " + correct + "  puntos";
    }else{
        question.innerHTML = "Has sumado:   " + correct + "  puntos";
    }
        boton.innerHTML = "Reiniciar Quiz";
        index = 0;
        correct = 0;
    }else{

    // Activar botones
    OpcionElegida("e");


        for(var i = 0; i < lbls.length; i++){
            rbuttons[i].value = op[i];
            lbls[i].innerHTML = op[i];
            rbuttons[i].checked = false;
        }

        // Cuando no hay mas preguntas
        if(index == preguntas.length - 1 ){
            boton.innerHTML = "Enviar respuesta";
        }
    }
}

play();