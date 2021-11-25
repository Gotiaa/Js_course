function padRight(char, str, quantity){
    while(quantity>=str.length){
        if(str.length===quantity){
            break;
        }
        else{
            str+=char;
        }
    }
    return str;
}

const padZeros = (str, quantity) => padRight('0', str, quantity);
const padSpace = (str, quantity) => padRight(' ', str, quantity);
let strtest = "test"; 
console.log(strtest);
strtest = padRight('|',strtest,10);
console.log(strtest);
console.log(padZeros("test",10));
console.log(padSpace("test",10));