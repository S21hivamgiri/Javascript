// Clousures used in:
// Data hiding


function incCounter() {
    let counter = 0
    return function () {
        ++counter;
        console.log(counter);
    }
}

incCounter()();

//Another approach using cusntructor function
function incCountered() {
    let counter = 0
    this.inc = function () {
        ++counter;
        console.log(counter);
    }
    this.dec = function () {
        --counter;
        console.log(counter);
    }
}

let incounter = new incCountered();
incounter.inc();

//Anothor approach using generator function
function* idMaker() {
    var count = 0;
    while (true)
        yield count++;
}

var gen = idMaker();
console.log("generator function"); // 0
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3


// memoize
const multiplyCache = {}
const multiplyBy2 = num => {
    if (multiplyCache[num]) {
        return multiplyCache[num]
    }
    const total = num * 2
    console.log('Loading...') // To represent this process taking time
    multiplyCache[num] = total
    return total
}

console.log(multiplyBy2(5))
console.log(multiplyBy2(2))
console.log(multiplyBy2(5))
console.log(multiplyBy2(2))



// Currying Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
function curry(f) { // curry(f) does the currying transform
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
}
// usage
function sum(a, b) {
    return a + b;
}
let curriedSum = curry(sum);
console.log(curriedSum(1)(2)); // 3




// Generators
var foobar = function (i) {
    var count = i;
    if (count == undefined) count = 0;
    return function () { return ++count; }
}

baz = foobar(1);
console.log("first call: " + baz()); //2
console.log("second call: " + baz()); //3





//Module Design Paatern
var myModule = (function () {
    'use strict';

    var _privateProperty = 'Hello World';

    function _privateMethod() {
        console.log(_privateProperty);
    }

    return {
        publicMethod: function () {
            _privateMethod();
        }
    };
})();

myModule.publicMethod(); // outputs 'Hello World'
console.log(myModule._privateProperty); // is undefined protected by the module closure
//myModule._privateMethod(); // is TypeError protected by the module closure



// SetTimeouts
for (var i = 0; i < 5; i++)
    (function (i) {
        setTimeout(function () {
            console.log("Value of i was " + i + " when this timer was set")
        }, 100);
    })(i);

// Clousure drawbacks: overconsumption of meory, memory not garbage collector, can lead to memory leak