//SUMA

const sumaVar1 = document.querySelector('#sumaVar1');
const sumaVar2 = document.querySelector('#sumaVar2');
const sumaResult = document.querySelector('.restSuma__parrafo2');

function suma() {
    let resultado = parseInt(sumaVar1.value)+parseInt(sumaVar2.value);
    sumaResult.innerText = resultado;
}



//RESTA

const restaVar1 = document.querySelector('#restaVar1');
const restaVar2 = document.querySelector('#restaVar2');
const restaResult = document.querySelector('.restResta__parrafo2');

function resta(){
    let resultado = parseInt(restaVar1.value)-parseInt(restaVar2.value);
    restaResult.innerText = resultado;
}



//MULTIPLICACION

const multVar1 = document.querySelector('#multVar1');
const multVar2 = document.querySelector('#multVar2');
const multResult = document.querySelector('.restMult__parrafo2');

function mult(){
    let resultado = parseInt(multVar1.value)*parseInt(multVar2.value);
    multResult.innerText = resultado;
}



//DIVICION

const divVar1 = document.querySelector('#divVar1');
const divVar2 = document.querySelector('#divVar2');
const divResult = document.querySelector('.restDiv__parrafo2');

function div(){
    let resultado = parseInt(divVar1.value)/parseInt(divVar2.value);
    divResult.innerText = resultado;
}

