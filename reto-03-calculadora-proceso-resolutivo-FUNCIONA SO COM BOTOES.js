const display = document.querySelector("#on-display");
const buttons = document.querySelectorAll("button");
const showLastOperator = document.querySelector("#current-operation");
const operations = document.querySelectorAll(".math-operation");

let operandA = '0';
let lastOperator = '';
let operator = ''; //after the operation, lastOperator becomes operator and operator becomes ''.
let operandB = '';
let currentOperand = '';


const updateDisplay = () => {
    currentOperand ? display.innerText = currentOperand : display.innerText === operandA
};

const handleInput = (event) => {
    const buttonContent = event.target.innerText;
    const buttonType = event.target.className;
    const buttonId = event.target.id;

    console.log(`operando A: ${operandA}`);
    console.log(`operando B: ${operandB}`);
    console.log(`operator ${operator}`);
    console.log(`last operator: ${lastOperator}`)
    console.log(`current operand: ${currentOperand}`)
    console.log(`--------------------`)

    const calc = (argOperandA, argOperator, argOperandB) => {
        let result;
        let numA = parseFloat(argOperandA);
        let numB = parseFloat(argOperandB);
        if (argOperator === '+') {
            result = numA + numB
        }
        else if (argOperator === '-') {
            result = numA - numB
        }
        else if (argOperator === 'x') {
            result = numA * numB
        }
        else if (argOperator === '/') {
            result = numA / numB
        }
        else if (argOperator === '%') {
            result = numA % numB
        }
        display.innerText = result;
        operandA = result;
        lastOperator = operator;
        currentOperand = operandA;
        operator = '';
        console.log(operandA, lastOperator, operator, operandB)
        return operandA, currentOperand, lastOperator, operator;
    };
    
    if (buttonType === "number") {
        currentOperand += buttonContent;
    };
    if (buttonType === "radixPoint") {
        currentOperand.includes('.') ? '' 
        : (currentOperand += buttonContent);
    };

    if (buttonContent === "+/-") {
        !currentOperand ? currentOperand += '-': currentOperand = parseFloat(currentOperand) * -1;
        //currentOperand = parseInt(currentOperand) * -1;
    }
        
    updateDisplay();
    operator === '' ? operandA = currentOperand : operandB = currentOperand;
    
    if (buttonType === "math-operation") {
        if ((operandA, operandB, operator) !== '' && currentOperand) {
            calc(operandA, operator, operandB)
        }
        operator = buttonContent; //not += because there can only be one operator at a time.
        currentOperand = '';
        showLastOperator.innerText = operator;
    };

    if (buttonContent === "=" && operandB !== '') {
        operator !== '' ? calc(operandA, operator, operandB) : (operator = lastOperator, calc(operandA, lastOperator, operandB))
    };
    // change number to positive or negative
    
    if (buttonId === "allClear") {
        currentOperand = '';
        operandA = '0';
        operandB = '';
        operator = '';
        lastOperator = '';
        display.innerText = '';
        showLastOperator.innerText = '';
    }
    console.log(buttonContent)
    console.log(`--------------------`)
    console.log(`operando A: ${operandA}`);
    console.log(`operando B: ${operandB}`);
    console.log(`operator ${operator}`);
    console.log(`last operator: ${lastOperator}`)
    console.log(`current operand: ${currentOperand}`)
    console.log(`--------------------`)
    
};


const onLoad = () => {
    buttons.forEach((button) => {
        button.addEventListener('click', handleInput)
        })
    
    };
    
    /*
    document.addEventListener('keydown', handleInput);function(event) {
        buttons.forEach((button) => {
            if (button.innerText === event.key) {
                console.log('match found!', event.key, button);
                const equivalence = event.key;
                console.log(equivalence);
                handleInput();
                return equivalence;
            }
        })
        if (event.key >= '0' && event.key <= '9') {
            handleNumberInput(event.code);
        }
        handleInput();
    });
    */