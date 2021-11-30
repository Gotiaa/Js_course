function deepEqual(a1, a2){
    if(a1.length !== a2.length)return isEqual;
    for(let i=0; i<a1.length; i++){
        if(Array.isArray(a1[i])) {
            if(!deepEqual(a1[i],a2[i])) return false;
        }
        else if(a1[i]!==a2[i]) return false;
    }
    return true;
}


const a1 = [1, 2, [3,4,[5,"6",{prenom : "toto"}]], 5];
//const a2 = JSON.parse(JSON.stringify(a1)); // Deep copy
const a2 = [1, 2, [3,4,[5,6,{prenom : "toto"}]], 5] // Deep copy
const b1 = [1, 2, [3, 4], 5];
const b2 = JSON.parse(JSON.stringify(b1)); 

const chai = require('chai');

chai.assert.equal(deepEqual(a1, a2),false); // => false
chai.assert.equal(deepEqual(b1, b2),true); // => true
