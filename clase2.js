const array1 = ['a', 'b', 'c', 'manzana', 'd'];
array1.pop();
array1.unshift(99);
array1.unshift(88);
array1.shift();
console.log(array1.indexOf('a'));
array1.splice(1,1);
array1.splice(array1.length-2,1);
let array2 = [1,2,3,4,5];

/* function isPar(element) {
    if (element % 2 === 0);
    return element;
}; */

const isPar = (el) => {
    if (el % 2 === 0) {
        return el;
    };
};

function isUneven(el) {
    return el % 2 !== 0;
};

const array2Even = array2.filter((element) => { return isPar(element)});
const array2Uneven = array2.filter((element) => { return isUneven(element)});
console.log(array1);
console.log(array2Even);
console.log(array2Uneven);

const array3 = ['estuche', 'lapis', 'calcetines'];
const array3Upper = array3.map((element) => { return element.toUpperCase() });
console.log(array3Upper);