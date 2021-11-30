function split(str, sep){
    let t = new Array();
    let strtmp = "";
    let index = 0;
    for(let i=0; i<str.length; i++){
        if(str[i]!==sep){
            strtmp += str[i];
        }else if(str[i]===sep){
            t[index] = strtmp;
            index++;
            strtmp = "";
        }
    }
    if(strtmp.length!==0)t[index]=strtmp;
    return t;
}

console.log(split("I'm reading a wooden book.", "o"));
console.log("Not working :/");
// const chai = require('chai');
// chai.assert.equals(split("Bonjour, je m'appelle Jean !", ["Bonjour,", "je", "m'appelle", "Jean", "!"])); // => ["Bonjour,", "je", "m'appelle", "Jean", "!"]
// chai.assert.equals(split("I'm reading a wooden book.", "oo"),["I'm reading a w", "den b", "k."]) // => ["I'm reading a w", "den b", "k."]