Object.prototype.forEachOwnProperty = function(f) {
    if (this.hasOwnProperty) {
        Object.keys(this).forEach(keyPropertyNames => f(keyPropertyNames));
    }
}

const o1 = { a: 1 };
const o2 = Object.create(o1);
o2.b = 2;
o2.c = 3;

const props = [];
o2.forEachOwnProperty(prop => props.push(prop));
console.log(props); // => ["b", "c"]; mais pas "a"