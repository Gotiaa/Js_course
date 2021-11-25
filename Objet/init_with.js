const withZero = () => 0;
const fromZero = index => index;
const from42 = index => 42 + index;

function initWith(size, f) {
    let tab = [];
    for (let i = 0; i < size; i++) {
        tab.push(f(i));
    }
    return tab;
}

console.log(initWith(5, from42));
console.log(initWith(5, withZero));