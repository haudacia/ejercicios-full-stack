const palindromes = function (aString) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let filteredString = '';
    let reversed = '';
    for (let i=0; i <= aString.length-1; i++) {
        character = aString[i].toLowerCase();
        console.log(character);
        if (alphabet.includes(character)) {
            filteredString += character
        }
    };
    let splitted = filteredString.split('');
    let rev = splitted.reverse();
    let joined = rev.join('');
    sole.log(filteredString);//filteredString += reversed += (aString[i]).toLowerCase();
    };
    return joined === aString.toLowerCase;
};
palindromes('Hadassa, bruno');

// Do not edit below this line
module.exports = palindromes;
