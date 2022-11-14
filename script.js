let firstOperand = 0;
let secondOperand = 0;
let total = 0;


// Buttons Assignment
let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let zero = document.getElementById('0');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let add = document.getElementById('add');
let subtract = document.getElementById('subtract');
let equal = document.getElementById('equal');


// End of Button Assignment


// adding Event Listeners for NUMBERS

let allButtons = document.getElementsByClassName('button-17');

for (let index = 0; index < allButtons.length; index++) {
    const element = allButtons[index];
    element.addEventListener('pointerdown',( addtoScreen => calculatorWindow.value = calculatorWindow.value + element.innerHTML) )
}

// Clear Window Event Listener and Function
let calculatorWindow = document.getElementById('numbers-here')

clear.addEventListener('pointerdown', clearScreen);

function clearScreen() {calculatorWindow.value = ''
    
}


// EventListeners and Funcitons for Operators

add.addEventListener('pointerdown' , function additionFunction() {
    if (calculatorWindow.value === '') {
        return ''
        
    } else { 
        firstOperand = calculatorWindow.value;
        
    }

    console.log(total);
})