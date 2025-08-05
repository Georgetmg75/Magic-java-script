const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function square() {
    let display = document.getElementById('display');
    display.value = Math.pow(eval(display.value), 2);
}

function power() {
    let display = document.getElementById('display');
    display.value += '**';  // User enters exponent after this
}

function percent() {
    let display = document.getElementById('display');
    display.value = eval(display.value) / 100;
}

function squareRoot() {
    let display = document.getElementById('display');
    display.value = Math.sqrt(eval(display.value));
}
