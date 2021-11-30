function diff(source, propertyNames){
    let newObjectWithoutPropertys = {...source, ...propertyNames};
    Object.keys(source).forEach(keySource => {
        Object.keys(propertyNames).forEach(keyPropertyNames =>{
            if(keySource==keyPropertyNames){
                delete newObjectWithoutPropertys[keySource];
            }
        })
    }
    )
    return newObjectWithoutPropertys;
}

let o1 = { r: 0, g: 0, b: 0, a: 0 };
let withoutOpacity = { a: null };
let objectWithoutOpacity = diff(o1, withoutOpacity); // => { r: 0, g: 0, b: 0 }
o1 === objectWithoutOpacity; // => false


const chai = require('chai');
chai.assert.equal(diff(o1, withoutOpacity), { r: 0, g: 0, b: 0 });
chai.assert.equal(o1 === objectWithoutOpacity, false);