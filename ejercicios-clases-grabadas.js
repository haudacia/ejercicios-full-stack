// This is my second JavaScript code
console.log(2+2);

// Declare at the beginning
let firstName, lastName, fullName, price, discount, fullPrice;

let user1 = {
    age: 20,
};

let user2 = {
    age: 17,
};

let user3 = {
    ag: 15,
};

if (user2.age >= 18) {
    console.log("Puede pasar");
} else if (user2.age >= 17) {
    console.log("Puede pasar con permiso de sus padres");
} else {
    console.log("No puede pasar");
}

let car1 = {
    matricula: "AAA1",
};

let car2 = {
    matricula: "BBB1",
};

let car3 = {
    matricula: "CCC1",
};

switch (car3.matricula) {
    case "AAA1":
        console.log("Tienes que circular por la autopista");
    break;
    
    case "BBB1":
        console.log("Tienes que circular por la carretera convencional");
    break;

    default:
        console.log("No puedes circular");
    break;
}

let counter = 0;

// Counter with while, do while
/* while (counter <= 100) {
    console.log("Contando hasta 100");
    console.log("Este es el ",counter);
    counter++;
} */

do {
    console.log("Contando");
    console.log("Este es el ",counter);
    counter++;
} while(counter <= 1);

let shoppingList = ["arroz", "pan", "agua"]

for(let i=0; i < shoppingList.length; i++) {
    console.log(shoppingList[i]);
}

console.log(shoppingList.length);

const someLifeAreas = ["health", "finances", "relationships", "spirituality"];
someLifeAreas.shift();
someLifeAreas.unshift("health&fitness");
console.log(someLifeAreas);

// Exercising concepts in class 3 | Operadores del Master Full Stack:
let age1 = 30;
const age2 = 25;
console.log(age1 + age2);
console.log(age1 / age2);
console.log(age1 ** 2);
console.log(age1%4);
console.log(age1++);
console.log(age1++);
console.log(age1 += 1);

firstName = 'Mosh';
lastName = 'Doe';
fullName = firstName + ' ' + lastName

price = 19.9
discount = 0.1
fullPrice = price - discount;

console.log(fullName) 

var interestRate = 0.3;
interestRate = 1;
console.log(interestRate)

const species = 'dog';
var breed = undefined;
var age = 4;

{var city = "Barcelona";
}

console.log(city)

let perro1 = {
    species,
    name: 'Conchito',
    breed: 'Salsicha',
    age: 3
}
let perro2 = {
    species,
    name: 'Jacinta',
    breed: 'Salsicha',
    age: 1
}

console.log(perro1, perro2);
perro1.breed = 'bassetHound'

console.log(perro1.breed);
console.log(typeof(perro1));

let selectedColors = ['red', 'magenta'];
selectedColors[2] = 'pink';
selectedColors[3] = 'yellow';
selectedColors[4] = 'blue';
console.log(selectedColors.length);

function greet(name) {
    console.log('Hola '+name);
}

function square(number) {
    return number * number;
}

greet('Hadassa');
console.log(square(2));

function combine(a,b,c) {
    return a * b / c
}

let result = combine(2,3,2)
console.log(result)
console.log(-5 % 20)

let str = `sentence`;
let umpteen = 3;
let values = true;
let eg = `This ${str} contains ${umpteen} variables having ${values ? `some`: `no`} value worth noting.`;

console.log(eg);

let coquinhu = 'lulu';

if (coquinhu) {
    console.log('coquinhu é um lulu da pomerania');
} else {
    console.log('nao entendi')
};


// for (let i = 0; i < 5; i++);