const display = document.getElementById("display");

function appendToDisplay(input) {
    if(display.value === "Error"){
        display.value = input
    }else {
        display.value += input
    }
}

function deleteValue(){
    const valueString = display.value
    let updated = valueString.slice(0,-1);
    display.value = updated
}

function clearDisplay() {
    display.value = " "
}

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
}