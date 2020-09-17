function kebabCase(str=''){
    let sentence = '';
    for (i=0; i < str.length; i++){
        const code = str.charCodeAt(i);
        const codeNext = str.charCodeAt(i-1);
        //console.log(code);
        if (code === 32){
            sentence += "-";
        }
        else if(code >= 65 && code <= 90 && i !== 0 && codeNext !== 45){
            sentence += "-";
            sentence += String.fromCharCode(code+32);
        }
        else if(code >= 65 && code <= 90){
            sentence += String.fromCharCode(code+32)
        }
        else if((i === 0 || i === str.length - 1) && code === 45){
            
        }
        else {
            sentence += str[i];
        }
    }
    return sentence;
}

console.log(kebabCase('love one code'));
console.log(kebabCase('LoveOneCode'));
console.log(kebabCase('-Love-One-Code-'));