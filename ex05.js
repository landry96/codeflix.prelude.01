function split(str,separator){
    const words = []
    let nWord = 0
    for(i = 0; i < str.length; i++) {
    // words[nWord] += str[i]
    if(words[nWord]===undefined){
    words[nWord]= str[i]
    }
    else {
    words[nWord] += str[i]
    }
    if(str[i] === separator){
    nWord = nWord + 1
    }
    }
    return words
    }
    function decapitalize(str){
    const words = split(str,' ')
    let sentence = ''
    for(var i =0; i<words.length; i++) {
    for(var x =0; x<words[i].length; x++) {
    if(x===0 && words[i].charCodeAt(x)>=65 && words[i].charCodeAt(x)<=90){
    sentence += String.fromCharCode(words[i].charCodeAt(x)+32)
    }
    else {
    sentence += String.fromCharCode(words[i].charCodeAt(x))
    }
    }
    }
    return sentence
    }
    
    
    console.log(decapitalize('Woonan'))
    console.log(decapitalize('El Drago'))
    