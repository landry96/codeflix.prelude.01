function isUpperCase(code) {
    return (code >= 65 && code <= 90)
  }
  
  function snakeCase(str= ''){
    let sentence = ''
  
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i)
  
      if (code === 45) {
        // Get rid of - from the beginning and ending of a string
        continue
      }
  
      if (code === 32) {
        // Replace spaces with -
        sentence += "_"
      } else if (isUpperCase(code)) {
        if (i > 1) {
          // Add - before uppercase
          sentence += "_"
        }
  
        sentence += String.fromCharCode(code + 32)
      } else {
        sentence += str[i]
      }
    }
  
    return sentence
  }
  
  console.log(snakeCase('gold d roger'))
  console.log(snakeCase('GoldDRoger'))
  console.log(snakeCase('-Gold-D-Roger-'))