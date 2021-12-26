// Function which take funcction as parameter or return paramater
function higherOrder(fn) {
    fn();
}

higherOrder(function () { console.log("Hello world") });
higherOrder(()=> { console.log("Hello arrow world!") });

function higherOrder2() {
    return function () {
        console.log("Do something");
    }
}

var x = higherOrder2();
x() 