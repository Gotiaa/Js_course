const chai = require("chai");


function map(iterable, f){
    if(iterable.length===0)return;
    let current = iterable[0];
    let nextIndex = 0; 
    let size = iterable.length;
    return{
        next(){
            if(nextIndex<size){
                current = iterable[nextIndex];
                current = f(current);
                nextIndex++;
            }
            return{done : nextIndex===size, value : current};
        }
    };
}

const iterator = map("Hello", v=>v.toUpperCase());
chai.assert.equal(iterator.next().value, "H"); // => "H"
chai.assert.equal(iterator.next().value,"E"); // => "E"
chai.assert.equal(iterator.next().value,"L"); // => "L"
chai.assert.equal(iterator.next().value,"L"); // => "L"
chai.assert.equal(iterator.next().value,"O"); // => "O"
// chai.assert.equal(iterator.done, true); // => true