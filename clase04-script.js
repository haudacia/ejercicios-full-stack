// clase 4 - manipulando DOM

const clickToCount = () => {
    let counterElement = document.querySelector('.counter-text');
    let counterText = counterElement.innerText;
    let counterArray = counterText.split(' ');
    let counterVal = parseInt(counterArray[0]);
    counterVal += 1;
    counterElement.innerText = `${counterVal}  ${counterArray[1]}`
};

const onClick = () => {
    let buttonText = document.querySelector("#click-button");
    buttonText.addEventListener('click',  clickToCount);
};

const changeColor = (event) => {
    let buttonElement = event.target;
    let textInButton = buttonElement.innerText;
    const titleElement = document.querySelector('.doc-title');
    titleElement.style.color = textInButton.toLowerCase();
};
const colorButton = () => {
    let colorButtons = document.querySelectorAll(".colored-button");
    let buttonText = document.querySelector("#click-button");
    buttonText.addEventListener('click', clickToCount);

    colorButtons.forEach(button => {
        button.addEventListener('click', changeColor);
    });
};


const showDialog = () => {
    const dialog = document.querySelector('#exercise-dialog');
    let dialogButton = document.getElementById('dialog-button');
    dialogButton.addEventListener("click", dialog.showModal())
};
listUsers = [];
const storeUserName = () => {
    let inputUsername = document.getElementById('username-input').value;
    listUsers.push(inputUsername);
    console.log(listUsers);
    let listOfUsers = document.querySelector("#list-users");
    listUsers.forEach((user) => {
    const listItem = document.createElement('li');
    listItem.innerText = user;
    listOfUsers.appendChild(listItem)
    });
};
    // correct it: it appends all items again and againminstead of only the new ones added.

const submitUsername = () => {
    const submitButton = document.querySelector('#submit-username');
    submitButton.addEventListener('click', storeUserName);
    // also works by pressing Enter
    if (KeyboardEvent.code === 'Enter') { //or ===13
        document.addEventListener('keydown', storeUserName)
    }
    //test to see how keyboard codes work
    else if 
        (KeyboardEvent.code === 'Escape') {
            console.log('closed dialog');
        }
};
     



/*const clickMe = () => {
    const containerDiv = document.querySelector('.container');
    const resultP = document.createElement('p');
    resultP.innerText = 'Hi';
    containerDiv.appendChild(resultP);
};
const onLoad = () => {
    const buttonText = document.querySelector("#click-button");
    buttonText.addEventListener('click', clickMe)
};
*/

//do this on browser. cause here it doesnt work

