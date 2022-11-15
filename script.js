let totalObject = {
     firstOperand: '',
     secondOperand: '',
     total: 0,
};


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
    element.addEventListener('pointerdown',(  addtoScreen => 
        calculatorWindow.value = calculatorWindow.value + element.innerHTML
        
        ) )
}

// Clear Window Event Listener and Function
let calculatorWindow = document.getElementById('numbers-here')

clear.addEventListener('pointerdown', clearScreen);

function clearScreen() {calculatorWindow.value = '';
    
}


// EventListeners and Funcitons for Operators

equal.addEventListener('pointerdown', equalFunction());

function equalFunction() {

    if (totalObject.secondOperand !== '') {
        calculatorWindow.value = totalObject.total;
        
    }
    
}



add.addEventListener('pointerdown' , function additionFunction() {
    if (calculatorWindow.value === '') {
        console.log('empty')
    }
    if (totalObject.firstOperand !== '' && totalObject.secondOperand !== '') {
        
        totalObject.total = totalObject.firstOperand + totalObject.secondOperand;
        clearScreen();
    }
    
    if (totalObject.secondOperand !== '') {
        totalObject.secondOperand = Number(calculatorWindow.value)
        clearScreen();

    }
    if (totalObject.firstOperand == '') {
        totalObject.firstOperand = Number(calculatorWindow.value);
        clearScreen();

    }

    
    console.log(totalObject.firstOperand);
    console.log(totalObject.secondOperand);
    console.log(totalObject.total)
})

