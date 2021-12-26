// Generators are functions that can be exited and later re-entered. 
// Their context (variable bindings) will be saved across re-entrances.

function* generator(i) {
    yield i;
    yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);
// expected output: 20
