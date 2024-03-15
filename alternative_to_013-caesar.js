const caesar = function(rawString, v) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let strCaesar = '';
    
    if (typeof(rawString) === "string") {
        for (let i=0; i<rawString.length; i++) {
            let character = rawString[i];
            let characterIndex = alphabet.indexOf(character.toLowerCase());
            // reduces shift to essential value by dismissing times it has been wrapped around (with large numbers)
            let shift = v % alphabet.length;
            let shiftedIndex = ((characterIndex + shift) + alphabet.length) % alphabet.length;
            // console.log(shift, characterIndex, shiftedIndex);
            /* checks if character exists within alphabet and maintains their property of either upper or lower case
            when returning coded leter */
            if (alphabet.includes(character)) {
                strCaesar += alphabet[shiftedIndex];
            }
            else if (
                alphabet.includes(character.toLowerCase()) 
                && character === character.toUpperCase()) {
                strCaesar += (alphabet[shiftedIndex]).toUpperCase();
            } else if (characterIndex === -1) {
                strCaesar += character; //console.log('non alphabetic character detected');
            } 
        } 
    } else console.log('This is not a string');
console.log(strCaesar);
return strCaesar
};

caesar('Hello, World!', 5);
// alt 2 (statements more )