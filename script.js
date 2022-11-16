let totalObject = {
     firstOperand: '',
     secondOperand: '',
     operator: '',
     total: '',
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

let allButtons = document.querySelectorAll('.button-17');

for (let index = 0; index < allButtons.length; index++) {
    const element = allButtons[index];
    element.addEventListener('pointerdown', addtoScreen) 

        function addtoScreen() {
            calculatorWindow.value = calculatorWindow.value + element.innerHTML
            // console.log(this.innerHTML)
        }}


// Clear Window Event Listener and Function
let calculatorWindow = document.getElementById('numbers-here')

clear.addEventListener('pointerdown', clearAll);

function clearAll() {
    calculatorWindow.value = '';
    totalObject.firstOperand = '';
    totalObject.secondOperand = '';
    totalObject.total = '';
    totalObject.operator = '';
    console.table(totalObject);

}

function clearScreen() {
    calculatorWindow.value = '';

    
}


// EventListeners and Funcitons for Operators

equal.addEventListener('pointerdown', equalFunction);

function equalFunction() {
    if (totalObject.operator == 'plus') {
        if (totalObject.secondOperand == '') {
            totalObject.secondOperand = Number(calculatorWindow.value);
        }
        totalObject.total = totalObject.firstOperand + totalObject.secondOperand;
        calculatorWindow.value = totalObject.total;
        totalObject.operator = '';
        totalObject.firstOperand = '';
        totalObject.secondOperand = '';
        console.table(totalObject);
    }

    // Subtraction Code
    
    if (totalObject.operator == 'subtract') {
        if (totalObject.secondOperand == '') {
            totalObject.secondOperand = Number(calculatorWindow.value);
        }

    totalObject.total = totalObject.firstOperand- totalObject.secondOperand;
    calculatorWindow.value = totalObject.total;
    totalObject.operator = '';
    totalObject.firstOperand = '';
    totalObject.secondOperand = '';
    console.table(totalObject);
        
    }

    // Multiplication Code

        
    if (totalObject.operator == 'multiply') {
        if (totalObject.secondOperand == '') {
            totalObject.secondOperand = Number(calculatorWindow.value);
        }

    totalObject.total = totalObject.firstOperand * totalObject.secondOperand;
    calculatorWindow.value = totalObject.total;
    totalObject.operator = '';
    totalObject.firstOperand = '';
    totalObject.secondOperand = '';
    console.table(totalObject);
        
    }


    // Division Code

    if (totalObject.operator == 'divide') {
        if (totalObject.secondOperand == '') {
            totalObject.secondOperand = Number(calculatorWindow.value);
        }

    totalObject.total = totalObject.firstOperand / totalObject.secondOperand;
    calculatorWindow.value = totalObject.total;
    totalObject.operator = '';
    totalObject.firstOperand = '';
    totalObject.secondOperand = '';
    console.table(totalObject);
        
    }




}


// Addition Function Here
add.addEventListener('pointerdown' , function additionFunction() {
    totalObject.operator = 'plus';

    if (calculatorWindow.value === '') {
        console.log('empty')
        return '';
    }

    if (totalObject.firstOperand === '') {
        totalObject.firstOperand = Number(calculatorWindow.value);
        clearScreen();

    }

    if (totalObject.firstOperand != '' && totalObject.secondOperand == '') {
        totalObject.secondOperand = Number( calculatorWindow.value);
        clearScreen();
    }

    if (totalObject.firstOperand != '' && totalObject.secondOperand != '') {
        equalFunction()
    }
    console.table(totalObject);
});

// End of Addition Function


// Subtraction Function Here

subtract.addEventListener('pointerdown', subtractFunction);

function subtractFunction() {
    totalObject.operator = 'subtract';

    if (calculatorWindow.value === '') {
        console.log('empty')
        return '';
    };


    if (totalObject.firstOperand === '') {
        totalObject.firstOperand = Number(calculatorWindow.value);
        clearScreen();
    };


    if (totalObject.firstOperand != '' && totalObject.secondOperand == '') {
        totalObject.secondOperand = Number( calculatorWindow.value);
        clearScreen();
    };

    
    if (totalObject.firstOperand != '' && totalObject.secondOperand != '') {
        equalFunction();
    }

    console.table(totalObject);
}

// End of Subtraction Function

// Multiplication Function Here
multiply.addEventListener('pointerdown', multiplyFunction);

function multiplyFunction() {
    totalObject.operator = 'multiply';

    if (calculatorWindow.value === '') {
        console.log('empty')
        return '';
    };


    if (totalObject.firstOperand === '') {
        totalObject.firstOperand = Number(calculatorWindow.value);
        clearScreen();
    };


    if (totalObject.firstOperand != '' && totalObject.secondOperand == '') {
        totalObject.secondOperand = Number( calculatorWindow.value);
        clearScreen();
    };

    
    if (totalObject.firstOperand != '' && totalObject.secondOperand != '') {
        equalFunction();
    }

    console.table(totalObject);
}

// End of Multiplication Function

// Division Function Here
divide.addEventListener('pointerdown', divisionFunction);

function divisionFunction() {
    totalObject.operator = 'divide';

    if (calculatorWindow.value === '') {
        console.log('empty')
        return '';
    };


    if (totalObject.firstOperand === '') {
        totalObject.firstOperand = Number(calculatorWindow.value);
        clearScreen();
    };


    if (totalObject.firstOperand != '' && totalObject.secondOperand == '') {
        totalObject.secondOperand = Number( calculatorWindow.value);
        clearScreen();
    };

    
    if (totalObject.firstOperand != '' && totalObject.secondOperand != '') {
        equalFunction();
    }

    console.table(totalObject);
}

