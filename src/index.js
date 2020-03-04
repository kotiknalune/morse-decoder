const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(message) {

    let messageArray = message.match(/.{10}/g),
        morse = Object.keys(MORSE_TABLE),
        word = [],
        intMorse = [];
        space = "**********",
        alphabet = "abcdefghijklmnopqrstuvwxyz1234567890"

    for (let i = 0; i < morse.length; i++) {

        let letter = morse[i].split(''); // ex: ['-','-','.','.']
        for (let j = 0; j < letter.length; j++) {

            if (letter[j] == '.') letter[j] = 10;
            if (letter[j] == '-') letter[j] = 11;
        }

        let cutLetter = letter.join('').split('');

        while (cutLetter.length < 10) {
            cutLetter.unshift(0);
        }
        word.push(cutLetter);
    }

    for (let element of word) {
        intMorse.push(element.join(""));
    }

    // create an int/alpha alphabet
    let intMorseAlphabet = {};
    intMorse.forEach((key, i) => intMorseAlphabet[key] = alphabet[i]);

    // decode message
    let answer = [];

    for (let n = 0; n < messageArray.length; n++) {
        answer.push(intMorseAlphabet[messageArray[n]]);
    }

    for (let m = 0; m < answer.length; m++) {
        if (answer[m] == undefined) answer[m] = " ";
    }

    return answer.join('');
}

module.exports = {
    decode
}