function upperCase(str = '') {
    let sentence = ''

    for(let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)

        if (code >= 97 && code <= 122) {
            sentence += String.fromCharCode(code + 32)
        } else {
            sentence += String.fromCharCode(code)
        }
    }

    return sentence
}

console.log(upperCase('Chopper'))
console.log(upperCase('TONY TONY'))