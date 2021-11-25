class EZArray extends Array{
    constructor(){
        super();
    }

    get firt(){
        return super.first
    }

    get last(){return super.last}
}
let a = new EZArray();
a instanceof EZArray  // => true: instance de EZArray
a instanceof Array    // => true: instance de Array aussi
a.push(1,2,3,4);      // a.length == 4; méthodes hérités
console.log(a.first);               // => 1: first getter
console.log(a.last);               // => 3: last getter
console.log(a[1]);                  // => 2: syntaxe habituelle d'accès aux élément du tableau

console.log(a);
console.log(Array.isArray(a))      // => true
console.log(EZArray.isArray(a))    // => true