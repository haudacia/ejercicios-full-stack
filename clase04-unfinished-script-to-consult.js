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
    buttonText.addEventListener('click', clickToCount);
};
// changing colors through buttons:
const clickColor = (event) => {
    const buttonElement = event.target;
    const textButton = buttonElement.innerText;
    const titleElement = document.querySelector(".title");
    titleElement.style.color = textButton.toLowerCase();
};
const onChange = (event) => {
    let buttonElement = event.target.value;
;

const onLoad = () => {
    const buttons = document.querySelectorAll(".colored-button");
}
buttons.foreEach((b) => {
    const buttons = document.querySelectorAll()
})
