const questionsAll = [
    {
        question: 'pregunta 1',
        options: [{
            isCorrect: true,
            description: 'una respuesta'
            },
        {
            isCorrect: false,
            description: 'una respuesta'
        },
        {
            isCorrect: false,
            description: 'una respuesta'
        },
        {
            isCorrect: true,
            description: 'una respuesta'
        }]
    },
    {
        question: 'pregunta 2',
        options: [{
            isCorrect: false,
            description: 'una respuesta'
            },
        {
            isCorrect: false,
            description: 'otra respuesta'
        },
        {
            isCorrect: false,
            description: 'otra respuesta'
        },
        {
            isCorrect: true,
            description: 'una respuesta'
        }]
    },
];

const onClickValidate = (inputs) => {
    const inputs = document.querySelectorAll(".options");
    inputs.forEach((input) => {
        const value = input.value;
        const arrayValue = input.value.split(',');
        const indexQuestion = arrayValue[0];
        const indexOption = arrayValue[1];
        const optionObject = questionsAll[indexQuestion].options[indexOption];
        if (input.checked) {
            if (optionObject.isCorrect) {
                const spanObject = document.querySelector(`#q_${indexQuestion}_${indexOption}`)
                spanObject.style.color = "green";
            } else {
                spanObject.style.color = 'red'
            }
        }


    }
    )


};

const onLoad = () => {
    const buttonValidate = document.querySelector("#validate");
    buttonValidate.addEventListener('click', onClickValidate);
    
    const questionsElement = document.querySelector("#questions");
    questionsAll.forEach((q, indexQ) => {
        const questionElement = document.createElement("p");
        questionElement.innerText(q.question);
        console.log(q.question);
        questionsElement.appendChild(questionElement);
    
        q.options.forEach((option, indexOption) => {
            const optionInput = document.createElement("input");
            optionInput.type = 'checkbox';
            optionInput.id = 'q_' + indexQ +  '_' + index;
            optionInput.value =  indexQ + ',' + indexOption;
            optionInput.classList.add = 'option';
            questionsElement.appendChild(optionInput);
    
            const optionInputText =  document.createElement("span");
            optionInputText.innerText = option.description;
            optionInputText.id = 'q_'+ indexQ + '_'+ indexOption;
            questionsElement.appendChild(optionInputText)
        })
    });
}
/* 
const questions = [
    {
        question: "pregunta 1",
        options: [{
            correct: false,
            description: "respuesta correcta"
        },
        {
            correct: true,
            description: "otra respuesta"
        },
        {
            correct: false,
            description: "otra respuesta"
        },
        {
            correct: false,
            description: "otra respuesta 4"
        }]
    },
    {
        question: "pregunta 2",
        options: [{
            correct: true,
            description: "respuesta correcta"
        },
        {
            correct: false,
            description: "otra respuesta"
        },
        {
            correct: false,
            description: "otra respuesta"
        }]
    },
    {
        question: "pregunta 3",
        options: [{
            correct: true,
            description: "respuesta correcta"
        },
        {
            correct: false,
            description: "otra respuesta"
        },
        {
            correct: false,
            description: "otra respuesta"
        }]
    }
];


const onClickValidate = () => {
    const inputs = document.querySelectorAll('.option');
    inputs.forEach((input) => {
        const arrayValue = input.value.split(',');
        const indexQuestion = arrayValue[0];
        const indexOption = arrayValue[1];
        const optionObject = questions[indexQuestion].options[indexOption];
        if (input.checked) {
            const span = document.querySelector(`#q_${indexQuestion}_${indexOption}`);
            if (optionObject.correct) {
                span.style.color = 'green';
            } else {
                span.style.color = 'red';
            }
        }
    });
};




const onLoad = () => {
    const buttonValidate = document.querySelector("#validate-questions");
    buttonValidate.addEventListener('click', onClickValidate);

    const questionsElement = document.querySelector("#questions");

    questions.forEach((q, indexQuestion) => {
        const questionElement = document.createElement('p');
        questionElement.innerText = q.question;
        questionsElement.appendChild(questionElement);

        q.options.forEach((option, indexOption) => {
            const optionInput = document.createElement('input');
            optionInput.type = 'checkbox';
            optionInput.classList.add('option');
            optionInput.value = indexQuestion + ',' + indexOption;
            optionInput.id = 'q-' + indexQuestion + 'checkbox' + indexOption;

            questionsElement.appendChild(optionInput);

            const optionText = document.createElement('span');
            optionText.innerText = option.description;
            optionText.id = 'q_' +indexQuestion + '_' + indexOption;

            questionsElement.appendChild(optionText);

            questionsElement.appendChild(document.createElement('br'));


        })

        

    });
    


}

*/
