const initWithZeros = size =>  initWith(size, initWithZero);
const initFrom = (size, startindex) => initWith(size, (startindex)=>42+startindex);
const initWithZero = () => 0;


function initWith(size, f){
    let tab = [];
    for(let i=0;i<size;i++){
        tab.push(f(i));
    }
    return tab;
}

console.log(initWithZeros(3)); // [0, 0, 0]
console.log(initFrom(3, 42)); // [42, 43, 44]
