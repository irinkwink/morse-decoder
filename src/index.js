const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';              // decoded message
    let i = 0;                    // number of symbol in the expression
    while (i < expr.length) {
        if (expr[i] === '*') {
            result += ' ';        // put space when see '*'
            i += 10;
        } else {
            let letterCode = '';                // letter in Morse code
            for (let j = 0; j < 5; j++) {       //check every two symbols five times
                switch (expr.slice(i, i + 2)) {  
                    case '11': 
                        letterCode += '-';
                        break;
                    case '10': 
                        letterCode += '.';
                        break;
                }
                i += 2;
            }
            result += MORSE_TABLE[letterCode];  // add decoded letter to the message
        }
    }
    return result;
}

module.exports = {
    decode
}