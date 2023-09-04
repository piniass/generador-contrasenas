const contrasenia = document.getElementById("contrasenia")
const clipboard = document.getElementById("clipboard")
const rangeDOM = document.getElementById("length")
const rangeLength = document.getElementById("range")
const mayuscula = document.getElementById("mayusculas")
const minuscula = document.getElementById("minusculas")
const numero = document.getElementById("numeros")
const simbolo = document.getElementById("simbolos")
const btn = document.getElementById("btn")
const fuerza1 = document.getElementsByClassName("div__div--1")
const fuerza2 = document.getElementsByClassName("div__div--2")
const fuerza3 = document.getElementsByClassName("div__div--3")
const fuerza4 = document.getElementsByClassName("div__div--4")

let checkboxArray = [mayuscula,minuscula,numero,simbolo]

let contraseniaStr = "";

//Para los checkox hay que usar el .checked para saber si es true o false

function generarConstrasenia(){

    rangeLength.addEventListener("input", function(){
        rangeDOM.innerHTML = rangeLength.value;

    })
    
    checkboxArray.forEach(function (checkbox) {
        checkbox.addEventListener("click", function () {
            contarCheck();
            fuerza1[0].style.backgroundColor = "";
            fuerza2[0].style.backgroundColor = "";
            fuerza3[0].style.backgroundColor = "";
            fuerza4[0].style.backgroundColor = "";
            switch(contarCheck()){
                case 1:
                    fuerza1[0].style.backgroundColor = "red";
                    break;
                case 2:
                    fuerza1[0].style.backgroundColor = "red";
                    fuerza2[0].style.backgroundColor = "orange";
                    break;
                case 3:
                    fuerza1[0].style.backgroundColor = "red";
                    fuerza2[0].style.backgroundColor = "orange";
                    fuerza3[0].style.backgroundColor = "yellow";
                    break;
                case 4:
                    fuerza1[0].style.backgroundColor = "red";
                    fuerza2[0].style.backgroundColor = "orange";
                    fuerza3[0].style.backgroundColor = "yellow";
                    fuerza4[0].style.backgroundColor = "green";
                    break;
            }
            console.log(contarCheck());
        });
    });

    btn.addEventListener("click", function(){
        // contarCheck();

        let contador = 0;

        checkboxArray.forEach(prueba => {
        if (prueba.checked){
            contador++;
        }
        });

        if((contador> 0) || rangeLength > 4){
            for(let i = 0; i < rangeLength.value; i++){

                let numeroGenerado; // Declarar la variable fuera del bucle
                let indiceAuxiliar;

                do {
                    numeroGenerado = numeroAleatorio(); // Generar un número aleatorio
                    indiceAuxiliar = numeroGenerado
                } while (!checkboxArray[numeroGenerado].checked);
                        switch(checkboxArray[indiceAuxiliar]){
                        case checkboxArray[0]:
                            contraseniaStr += extraerMayuscula();
                            break;
                        case checkboxArray[1]:
                            contraseniaStr += extraerMinuscula();
                            break;
                        case checkboxArray[2]:
                            contraseniaStr += extraerNumero();
                            break;
                        case checkboxArray[3]:
                            contraseniaStr += extraerSimbolo();
                            break;
                        }
    
            }

        copiarAlPortapapeles();
        contraseniaStr = "";
        
        } else{
            alert("Selecciona una opcion al menos o en su defecto aumenta la longitud")
        }

    })
}
generarConstrasenia();

function copiarAlPortapapeles(){
    // contraseniaStr = "Prueba 1"    
        contrasenia.textContent = contraseniaStr;
        
        clipboard.addEventListener("click",function(){
            const textoACopiar = contrasenia.innerText || contrasenia.textContent;
            // Crear un elemento de texto temporal y copiar el contenido
            const tempTextArea = document.createElement("textarea");
            tempTextArea.value = textoACopiar;
            document.body.appendChild(tempTextArea);
            tempTextArea.select();
            document.execCommand("copy");
            document.body.removeChild(tempTextArea);

            // Puedes mostrar un mensaje de éxito aquí o realizar otras acciones después de copiar al portapapeles
            console.log("Texto copiado al portapapeles: " + textoACopiar);

        })
}

function contarCheck(){
    let contador = 0;

    checkboxArray.forEach(prueba => {
    if (prueba.checked){
        contador++;
    }
    });

    return contador;
}

function numeroAleatorio() {
    return Math.floor(Math.random() * 4);
}

function extraerMayuscula(){
    let letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
    let indice = Math.floor(Math.random() * (letrasMayusculas.length - 1));
    return letrasMayusculas[indice];
    console.log("Mayuscula")
}
function extraerMinuscula(){
    let letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    let indice = Math.floor(Math.random() * (letrasMinusculas.length - 1));
    return letrasMinusculas[indice];
    console.log("Minuscula")

}
function extraerNumero(){
    let numeros = "0123456789";
    let indice = Math.floor(Math.random() * (numeros.length - 1));
    return numeros[indice];
    console.log("Numero")

}
function extraerSimbolo(){
    let symbol = "_$!-";
    let indice = Math.floor(Math.random() * (symbol.length - 1));

    return symbol[indice];
    console.log("Simbolo")

}