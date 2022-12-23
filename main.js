// * queryselector puede traer una etiqueta, clase o id; siempre depende de como lo escribamos
const titulo = document.querySelector('h1');

// * getElementById se conecta por medio de un id solamente
const parrafo = document.getElementById('parrafo');

// * getElementsByClassName se conecta por medio de una clase
const parrafito = document.getElementsByClassName('.parrafito');

const input = document.querySelector('input');


console.log({
    titulo,
    parrafo,
    parrafito
});

// !Este atributo toma las etiquetas html y las aplica.
titulo.innerHTML = 'Hola <br> Mundo';

// !Este atributo toma todo el string como codigo.
titulo.innerText = 'Hola, Soy batman';


// !getAttribute sirve para ver el atributo que se esta utilizando, 
// ! por ejemplo aqui trae las clases que se estan usando 

console.log(titulo.getAttribute('class'));

// ! setAttribue sirve para cambiar un attributo de un elemento.
// ! Dato: se borran todas las clases anteriores.
// titulo.setAttribute('class', 'fs-1 text-center fw-bolder');

// ? para agregar una clase sin que se pierdan las anteriores,
// ? podemos utilizar el classList . add . remove

titulo.classList.add('text-danger');

// Todo. tambien hay una classlist con toggle y contains
// ? toggle sirve para agregar y quitar una clase cuando la necesitemos
// * contains nos devuelve un booleano si la etiqueta tiene una clase o no
// titulo.classList.toggle('active');

console.log(titulo.classList.contains('text-center'));

// todo Agregar un value a un input

// input.value = 'Empecemos';

// ! crear un elemento html desde cero

const img = document.createElement('img');

img.setAttribute('src', 'https://assetsnffrgf-a.akamaihd.net/assets/ct/0b6fedf0d7/images/home-bottom.jpg');

// ! insertamos la imagen dentro del contendor que ya existia.
// parrafo.append(img);

//---------------------------------------------------------------------------------------------------------------

//! Ejercicio de Calcular


const btnCalcular = document.querySelector('#btnCalcular');
const sumaR = document.getElementById('suma');
const restaR = document.getElementById('resta');
const multiplicacionR = document.getElementById('multiplicacion');
const divisionR = document.getElementById('division');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const form = document.querySelector('#formulario');


// todo: Función para calcular los numeros al dar click
const calcular = ()=>{
    const suma = Number(num1.value) + Number(num2.value);
    const resta = Number(num1.value) - Number(num2.value);
    const multiplicacion = Number(num1.value) * Number(num2.value);
    const division = Number(num1.value) / Number(num2.value);
    
    return sumaR.innerText = "Resultado de la suma: " + suma, 
            restaR.innerText = "Resultado de la resta: " + resta, 
            multiplicacionR.innerText = "Resultado de la multiplicación: " + multiplicacion, 
            divisionR.innerText = "Resultado de la división: " + division

}

// ! este codigo sirve, pero para yo utilizar el enter y el click tengo que usar el form.addeventilstener
// btnCalcular.addEventListener('click', calcular);

// todo: Función para dar enter y dar click al boton

form.addEventListener('submit',(event) =>{
    event.preventDefault();
    if(num1.value !== "" && num2.value !== "" ){
        calcular();
        num1.value = '';
        num2.value = ''; 
    }else{
        alert('Ingrese los valores.')
    }
     
});
console.log('si funciona');
// ! al pasar el mouse encima del formulario este lanza una alerta

// form.addEventListener("mouseover", enviarFormulario)

// function enviarFormulario(e){
//     e.preventDefault();

//     alert("virus")
// }






