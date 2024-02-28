function sayHi(name) {
    console.log('Hi ' + name + '!');
}
//sayHi('Hadassa')
function aMap(f, a) {
    const result = new Array(a.length);
    for (let i=0; i < a.length; i++) {
        result[i] = f(a[i]);
    }
    return result;
}

const calcSquare = function (x) {
    return x * x;
}
const numbers = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(aMap(calcSquare, numbers));
myVar = 8;
myVar++;
myVar *= 2;
//console.log(myVar, typeof(myVar));
var firstStr = "This is a string ot demonstrate \"quotes\" escaping";
var secondStr = 'In this case, you thought yoy wouldn\'t need the escape character but you do';
var myStr = "Firstline \n\t\\Second line"
secondStr += firstStr;
var newLongerString = myStr + secondStr;
//console.log(secondStr);
var myDogsName = 'Coquinho';
var myDogsNameLength = 0;

myDogsNameLength = myDogsName.length;
//console.log(myDogsName[myDogsNameLength - 1]);
//console.log(myDogsName[myDogsNameLength - 5]);

function makeSentence(anAdjective, aSubject, aVerb) {
    result = '';
    result += "The" + ' ' + anAdjective + ' ' + aSubject + ' ' + aVerb;
    console.log(result);
}
//makeSentence('fluffy', 'dog', 'barked at the person.' );


//function to practice creation of arrays where a for loop is needed (unknown quantity of values to go through):
function simpleCounting(anyNumber) {
    let resultArray = [];
    for (let count = 1; count <= anyNumber; count++) {
        resultArray[count-1] = count;
    }
    return resultArray;
};
console.log(simpleCounting(3));

//function below does the same but with a different way to start counting:
function simpleCountingVariation(anyNumber) {
    let resultArray = [];
    // refers to each element:
    let i = 0;
    while (i < anyNumber) {
        for (var count = 0; count < anyNumber; count++) {
        resultArray[count] = count+1;
    }
    console.log(resultArray[i]);
    }
};
//simpleCountingVariation(5);

// consegui PORA, combine the while with the for loops inside a function.
function simpleCountingVariation(anyNumber) {
    let resultArray = [];
    for (var count = 0; count < anyNumber; count++) {
        resultArray[count] = count+1;
    };
    let i = 0;
    while (i < resultArray.length) {
        console.log(resultArray[i]);
        i++;
    }
    console.log(resultArray)};

//simpleCountingVariation(10);

//now, ill make it possibl eto refer to the resultArray outside the function, by declaring it first, on the outside:

const resultArray = [];
function simpleCountingVariation(anyNumber) {
    for (var count = 0; count < anyNumber; count++) {
        resultArray[count] = count+1;
    };
    var i = 0;
    while (i < resultArray.length) {
        console.log(resultArray[i]);
        i++;
    }
    return resultArray;
};
simpleCountingVariation(10);
//this logs only from item on index number 1 to the last one;
console.log('This is the array that resulted except for its first item: ', resultArray.slice(1,));

var anArrayOfGrades = [9.0, 8.5, 7, 10, 5.2, 3];
function map(someFunction, someArray) {
    let result = [];
    for (let i = 0; i < someArray.length; i++) {
        result[i] = ' grade #' + (i+1) + ' - ' + someFunction(someArray[i]);
    };
    let p = 0;
    while (p < result.length) {
        console.log(result[p]);
        p++;
    } 
    return result;
    
};
//map(calcSquare, anArrayOfGrades);


let i = 0;
scores = [5,98,101,400];
months = ['jan','feb','mar','apr'];

do {
    console.log(scores[i]);
    i++;
} while (i < scores.length);
//rewriting the previous function now using do..while:


function countTwoByTwo(numberChosen) {
    let i = 0;
    while (i <= numberChosen) {
        if (i % 2 === 0 && i !== 0) {
            console.log(i);
        }
        i++;
    }};
//countTwoByTwo(15);

function countUneven(aNumber) {
    let i = 1;
    while (i <= aNumber) {
        if (!(i % 2 === 0) && i !== 9) {
            console.log(i);
        }
        i++;
    }
};
//countUneven(30);

// logs on the console every element on chosen array;

/*for (item in scores, months) {
    console.log(scores[item],'-', months[item]);
}; */

// examples/exercises below are from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
function loop(y) {
    if (y > 10) {
        return;
    }
    console.log(loop(y+1));
};

function outside(valueOutside) {
    function inside(valueInside) {
        return valueInside - valueOutside;
    }
    return inside;
};

const fnInside = outside(1200);
console.log(fnInside(2100));
// more understable, because you only call the main function, passing the valueOutside then the valueInside
console.log(outside(600)(2100));

// outer function defines a variable called 'name'
const pet = function (name) {
    const getName = function () {
        //now this inner function has access to the "name" varibale
        // of the outer function
        return name;
    };
    return getName;

};

const myPet = pet('Coquinho');
console.log(myPet());


const createPet = function (name) {
    let sex;

    const pet = {
        setName(newName) {
            name = newName;
        },

        setSex(newSex) {
            if (
                typeof newSex === "string" &&
                (newSex.toLowerCase() === "male") 
                || newSex.toLowerCase() === "female"
            ) {sex = newSex;}
        },

        getName() {
            return name;
        },

        getSex() {
            return sex;
        },
    };
    return pet;
};

const myNewPet = createPet('Coquinho');
//console.log(myNewPet.getName());
myNewPet.setName('Coquinhuu');
myNewPet.setSex("MALE");
console.log(myNewPet.getName() + '-' + myNewPet.getSex());

//Using the arguments object. Example given was tweaked to not concatenate the separator in the last element of the given arguments.
function concatSomeWords(separator, terminator) {
    let result = '';
    // index position now starts from 2 instead of 1, because the index 1 of the arguments 
    //is now the value for the terminator, or the character(s) chosen when calling the function
    // that will be shown at the end of the "string list" composed of all the arguments
    for (let i = 2; i < arguments.length; i++) {
        if (i !== arguments.length-1) {
            result += arguments[i] + separator
} else {result += arguments[i] + terminator}}
    return result
};

console.log(concatSomeWords(', ','.', 'bread', 'cheese', 'tofu'));

/*
below are trials that didn't work for the intended result:

function concatSomething(someArray) {
    secondaryArray = [];
    for (let i=1; i<=4; i++) {
        //return 'semester #' + i;
        secondaryArray[i] = 'Semester #' + i;
        i++;
    }
    return secondaryArray;
};

function showWordBeforeCounts(aGrade) {
    let i = 1;
    while (i <= 4) {
        console.log('Semester #',i,' - ',aGrade);
        i++
    }
};
console.log(showWordBeforeCounts());

*/