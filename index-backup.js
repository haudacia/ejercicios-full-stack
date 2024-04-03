let rawInput = [];
const display = document.querySelector("#on-display");
const buttons = document.querySelectorAll("button");
const currentOperation = document.querySelector("#current-operation");

const clicked = (event) => {
    const content = event.target.innerText;
    const buttonType = event.target.className;
    const buttonId = event.target.id;
    let lastInput = rawInput[rawInput.length-1];
    console.log(buttonId)

    if (buttonType === "number") {
        if (typeof(rawInput[rawInput.length-1]) !== 'number') {
            onDisplay = '';
        };
        onDisplay += content;
        display.innerText = onDisplay;
    }
    rawInput.push(Number(onDisplay));
    if (buttonType === "radixPoint") {
        onDisplay += content;
        display.innerText = onDisplay;
    }

    if (buttonType === "math-operation") {
        if (typeof(lastInput) === 'string' || lastInput === 0) {
            rawInput.pop();
            rawInput.pop();
        };
        rawInput.push(buttonId);
        console.log(rawInput);
        onDisplay = '';
        currentOperation.innerText = content;


        }


    if (buttonId === "allClear") {
        accResult = 0;
        rawInput = [];
        display.innerText = '';
        currentOperation.innerText = '';
    }
    if (buttonId === "equal") {
        display.innerText = '';
        
    }
}
;

    //else if (button)
//} else if (buttonType === "math-operation") {
    

const doOperation = (accResult, newNumber, buttonId) => {
    if (buttonId === 'op-sum') {
        let result = accResult + newNumber
    }
    else if (buttonId === "op-subtraction") {
        let result = accResult - newNumber
    }
    else if (buttonId === 'op-times') {
        let result = accResult * newNumber
    }
    else if (buttonId === "op-division") {
        let result = accResult / newNumber
    }
    else if (buttonId === "op-remainder") {
        let result = accResult % newNumber
    }
    accResult = result;
    console.log(result)

    return accResult
};


const onLoad = () => {
    buttons.forEach((button) => {
        button.addEventListener('click', clicked)
        }
    );    
}