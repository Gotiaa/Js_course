class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    includes(x) {
        return(this.from <= x && this.to >= x)
    }
    
    static parse(s) {
        let array = this.integerRangePattern.exec(s)
        if(array != null) {
            return new Range(array[1], array[2]);
        }
    }
    static integerRangePattern = /^[(](-?\d+)[.]{3}(-?\d+)[)]$/;
}

class Span extends Range {
    constructor(from, to) {
        const osuper = to > 0 ? [from, from + to] : [from + to, from]; 
        super(...osuper);
    }
}

Range.prototype.toString = function () {
    return `(${this.from}...${this.to})`
}


console.log((new Span(2, 4)).toString()); // => "(2...6)"
console.log((new Span(12, -8)).toString()); // => "(4...12)"