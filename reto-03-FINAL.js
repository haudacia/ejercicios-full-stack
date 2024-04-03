const display = document.querySelector("#on-display");
const buttons = document.querySelectorAll("button");
const showLastOperator = document.querySelector("#current-operation");

let operandA = '0';
let lastOperator = '';
let operator = ''; //after the operation, lastOperator becomes operator and operator becomes ''.
let operandB = '';
let currentOperand = '';

const clearAllData = () => {
    operandA = '0';
    lastOperator = '';
    operator = ''; //after the operation, lastOperator becomes operator and operator becomes ''.
    operandB = '';
    currentOperand = '';
    display.innerText = '';
    showLastOperator.innerText = '';
};

const updateDisplay = () => {
    currentOperand ? display.innerText = currentOperand 
    : display.innerText = operandA
};

const handleButtonClicks = (event) => {
    buttonInput = event.target.innerText;
    inputType = event.target.className;
    handleInput(buttonInput, inputType);
};

const handleKeydowns = (event) => {
    // checks if pressed keys content exists as a button in the calculator
    buttons.forEach((button) => {
        if (event.key === button.innerText) {
            keyboardInput = event.key;
            inputType = button.className;
            handleInput(keyboardInput, inputType);
        }
        //if (event.code.includes("Digit")) {
          //  inputType = "number";
            //handleInput(keyboardInput, inputType);
    })
};

const handleInput = (input, inputType) => {
    console.log(`op A: ${operandA}`);
    console.log(`op B: ${operandB}`);
    console.log(`operator ${operator}`);
    console.log(`last op: ${lastOperator}`)
    console.log(`current operand: ${currentOperand}`)
    console.log(`--------------------`)
    console.log(input,inputType);

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

    if (inputType === "digit") {
        currentOperand += input;
        updateDisplay();
    };
    if (inputType === "radixPoint") {
        console.log(typeof currentOperand)
        currentOperand.toString().includes('.') ? '' 
        : (currentOperand += input);
        updateDisplay();
    };
    if (inputType === "changeSign") {
        currentOperand ? currentOperand = currentOperand * -1
        : currentOperand += '-';
        updateDisplay();  
    };

    !operator ? operandA = currentOperand : operandB = currentOperand;
    
    if (inputType === "operation") {
        // allows consecutive calculations to be made 
        // and displayed by clicking on any of the operation buttons,
        // if all necessary elements are present (even if the user do not press "equal").
        if (operandA && operandB && operator && currentOperand) {
            calc(operandA, operator, operandB)
        }
        operator = input; //not += because there can only be one operator at a time.
        currentOperand = '';
        showLastOperator.innerText = operator;
    };

    if (inputType === "equal" && operandB) {
        operator ? calc(operandA, operator, operandB) : (operator = lastOperator, calc(operandA, lastOperator, operandB))
    };

    if (inputType === "allClear") {
        clearAllData();
    }
}

const onLoad = () => {
    document.addEventListener('keydown', handleKeydowns);
    buttons.forEach((button) => {
        button.addEventListener('click', handleButtonClicks);
        }
    )
};