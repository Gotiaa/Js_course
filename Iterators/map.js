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
console.log(iterator.next().value); // => "H"
console.log(iterator.next().value); // => "E"
console.log(iterator.next().value); // => "L"
console.log(iterator.next().value); // => "L"
console.log(iterator.next()); // => "O"
console.log(iterator.next()); // => true