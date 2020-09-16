function lowerCase(str = '') {
    let sentence = ''

    for(let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)

        if (code >= 65 && code <= 90) {
            sentence += String.fromCharCode(code + 32)
        } else {
            sentence += String.fromCharCode(code)
        }
    }

    return sentence
}

console.log(lowerCase('Chopper'))
console.log(lowerCase('TONY TONY'))