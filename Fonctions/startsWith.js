function startWith(str, start){
    if(str.length < start.length){return false}
    else{
        for(let i=0;i<start.length;i++){
            if(start[i]===str[i])continue;
            else return false;
        }
    }
    return true;
}
const chai = require('chai');
chai.assert.equal(startWith("Et demain matin, j'te fais des gaufres au sucre !!", "Et demain"),true); // => true
chai.assert.equal(startWith("Les ogres c'est comme les oignons.", "Ça schlingue ?"),false); // => false