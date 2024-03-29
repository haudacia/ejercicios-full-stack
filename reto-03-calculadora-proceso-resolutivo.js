let memory = [];
let operationsExecuted = [];
let rawInput = [];
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let eventIndex = -1;
let onDisplay = '';
// this whole code is what i was thinking before realizing all it takes is  a numeric variable to store the current result
let accResult = 0;

const clicked = (event) => {
    const content = event.target.innerText;
    const buttonType = event.target.className;
    const buttonId = event.target.id;
    console.log(event.target.className)
;
    if (buttonType === ("number"|| "radixPoint")) {
        onDisplay += content;
        console.log(onDisplay);
        console.log(eventIndex);
        display.innerText = onDisplay;
        }

    if (buttonType === "math-operation") {
        memory.push(Number(onDisplay));
        rawInput.push(Number(onDisplay));
        rawInput.push(content);
        operationsExecuted.push(content);
        console.log(memory);
        onDisplay = '';
        console.log(operationsExecuted)
    }
    if (buttonId === "op-sum") {
        // first, check if previous button clicked was a number
        // or another operator. if operator, replace it with the
        // most recently clicked operator.
        rawIput
        const sumAll = memory.reduce((acc, current) =>
        acc + current
        );
        display.innerText = sumAll;
    }

// 29.03





    if (buttonId === "allClear") {
        memory = [];
        display.innerText = '';
    }
    if (buttonId === "equal") {
        display.innerText = '';
    }
    //else if (button)
//} else if (buttonType === "math-operation") {
    
}
    ;
const calcSum = () => {
    
    buttons.forEach((button) => {
        const buttonText = button.innerText;
        //const resultText = readyToCalculate.push()
        
        }
        // perform operation with stored values within
        // readyToCalculate
    );  
    
};
const onLoad = () => {
    buttons.forEach((button) => {
        button.addEventListener('click', clicked)
        }
    );    
};



/*const showOperations = () => {
   // const result = ??
    const display = document.querySelector("#display");
    resultText.innerText(result);
    display.appendChild(resultText);



}
*/