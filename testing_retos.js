const repeatString = function(string, num) {
    while (let i = 0; i < num; i++) {
        return string
    };
};

console.log(repeatString('hey', 3));

// reto 03
/*const removeFromArray = function(array, ...arg) {
    for (let i=0; i<=arg;i++) {
        let itemIndex = array.indexOf(arg[i]);
        console.log(itemIndex);
    }
};*/
const removeFromArray = function(array, ...arg) {
    for (let i=0;i<= arg.length;i++) {
        const itemIndex = array.indexOf(arg[i]);
        if (itemIndex >= 0) {
            array.splice(itemIndex,1);
        }
    } return array
//below, had tried with a foreach but decided to resort to for loop to iterate through unknown amount of args
    /*let allArguments = arg.forEach((element) => return element;
    const itemIndex = array.indexOf(arg);
    if (itemIndex >= 0) {
        array.splice(itemIndex,1);
    }
    return array*/
};

console.log(removeFromArray([1,2,3,4,5,'a','word'],'word','a'));

// caesar codificacion de palabras: como he intentado hacer primero via if y else if, y depsues decidi reducir el valor del
// shift ya del inicio, y despues desplazar la letra del alfabeto por el index - o +
const caesar = function(rawString, v) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let strCaesar = '';

    if (typeof(rawString) === "string") {
        for (let i=0; i<rawString.length; i++) {
            let character = rawString[i];
        // checks if character exists in the alphabet
            if (typeof(character) == "string" && alphabet.includes(character.toLowerCase())) {
                let characterIndex = alphabet.indexOf(character);
                // eliminate times that the whole alphabet is wrapped around if it happens:
                let shift = v % alphabet.length;
                let trueShift = characterIndex + shift;
                console.log(v,shift, trueShift, trueShift % alphabet.length);
                console.log(`index of ${character} is ${characterIndex} will shift by ${trueShift}`);
               // Bifurcation: the caesar index will be either negative or positive
            // (respectively, go backward or forward through alphabet).
                strCaesar += alphabet[characterIndex + trueShift];


            //if caesarIndex > alphabet.length-1 || caesarIndex < -(alphabet.length-1)
            strCaesar += alphabet[characterIndex + trueShift];
            /* if (caesarIndex > alphabet.length-1) {
                let newCaesarIndex = caesarIndex - (alphabet.length);
                console.log(newcaesarIndex);
                strCaesar+=alphabet[newcaesarIndex];
            }
            else if (caesarIndex < 0) {
                let newcaesarIndex = (caesarIndex - (alphabet.length))*(-1);
                console.log(newcaesarIndex);
                strCaesar+=alphabet[newcaesarIndex];
            } else {strCaesar += alphabet[caesarIndex]} */
        } else 
        strCaesar += character;console.log('else executado')}
        //console.log(`indice alfabetico del caracter ${stringACodificar[i]} es ${itemIndex}`);
            return strCaesar
        };

        }
        else console.log('This is not a string');
    // pontuacion mantenidas, mantener tbn lower and upper cases.
console.log(caesar(56,-77));
// Do not edit below this line
module.exports = caesar;
