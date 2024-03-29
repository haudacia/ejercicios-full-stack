let rawInput = [];
const display = document.querySelector("#on-display");
const buttons = document.querySelectorAll("button");
const currentOperation = document.querySelector("#current-operation");
let result;
let onDisplay = '';
let lastOperator = '';
const clicked = (event) => {
    const content = event.target.innerText;
    const buttonType = event.target.className;
    const buttonId = event.target.id;
    
    const displayUpdate = () => {
        onDisplay += content;
        display.innerText = onDisplay;
    }

    if (buttonType === "number") {
        if (typeof(rawInput[rawInput.length-1]) !== 'number') {
            onDisplay = '';
        };
        displayUpdate();
        rawInput.push(Number(onDisplay));
    }
    if (buttonType === "radixPoint") {
        displayUpdate();
    }

    if (buttonType === "math-operation") {
        rawInput.push(Number(onDisplay));
        operandA = Number(onDisplay);
        lastOperator = buttonId;

        if (rawInput[rawInput.length-1] === 0) {
            rawInput.pop();
            rawInput.pop();
        };
        rawInput.push(buttonId);
        console.log(rawInput);
        onDisplay = '';
        currentOperation.innerText = content;


    }
    if (buttonId === "allClear") {
        operandA = 0;
        rawInput = [];
        display.innerText = '';
        currentOperation.innerText = '';
    }
    let operandB = Number(onDisplay);
    let op = rawInput[rawInput.length-2]; //trocar porlet op = currentOperation.innerText;
    
    if (buttonId === "equal") {
        lastOperator = buttonId;
        console.log(operandA, op, operandB);
        console.log(rawInput);
        calc(operandA, rawInput[rawInput.length-2],Number(onDisplay));
        if (lastOperator !== '') {
            calc(operandA, rawInput[rawInput.length-2],Number(onDisplay));
            pressedEqualButton = true;
            lastOperator = '';
            }
    }

    const handleOperators = () => {

    }}
;

    //else if (button)
//} else if (buttonType === "math-operation") {
    

const calc = (operandA, op, operandB) => {
    if (op === 'op-sum') {
        result = operandA + operandB;
    }
    else if (op === "op-subtraction") {
        result = operandA - operandB
    }
    else if (op === 'op-times') {
        result = operandA * operandB
    }
    else if (op === "op-division") {
        result = operandA / operandB
    }
    else if (op === "op-remainder") {
        result = operandA % operandB
    }
    operandA = result;
    display.innerText = result;

    return operandA
};


const onLoad = () => {
    buttons.forEach((button) => {
        button.addEventListener('click', clicked)
        }
    );    
}