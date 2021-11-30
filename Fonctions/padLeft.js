function padLeft(char, str, quantity){
    while(quantity>=str.length){
        if(str.length===quantity){
            break;
        }
        else{
            str = char + str;
        }
    }
    return str;
}


const padZeros = (str, quantity) => padLeft('0', str, quantity);
const padSpace = (str, quantity) => padLeft(' ', str, quantity);

// let strtest = "test"; 
// console.log(strtest);
// strtest = padLeft('|',strtest,10);
// console.log(strtest);
// console.log(padZeros("test", 10));
// console.log(padSpace("test", 10));

const chai = require('chai');
chai.assert.equal(padLeft("0", "123", 6),"000123"); // => "000123"
