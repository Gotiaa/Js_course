function dump(obj){
    let showObject = "{";
    for (let [key, value] of Object.entries(obj)) {
        if(Array.isArray(value))showObject+=key + ":" + "\[" + value + "\]" + ",";
        else showObject+=key + ":" + "\"" + value + "\"" + ",";
    }
    showObject = showObject.substring(0, showObject.length-1) + "}";
    return showObject;
}

let obj = {};
obj.firstname = "Alan";
obj.lastname = "Turing";
obj.birthday = [1921, 6, 23];
let str = dump(obj);
// console.log(str); // => {firstname:"Alan",lastname:"Turing",birthday:[1921,6,23]}

const chai = require('chai');
chai.assert.equal(str, {firstname:"Alan",lastname:"Turing",birthday:[1921,6,23]})