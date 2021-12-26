//Named Function
function Add(x, y) {
    return x + y;
}
result1 = Add(2, 3);
console.log(result1);

function Greet(msg) {
    console.log(msg);
    return "iiii";
}
console.log(Greet("Happy Day"));


//Anonymous Function
let add = function (x, y) {
    return x + y;
}
result1 = add(5, 6);
console.log(result1);

let greet = function (msg) {
    console.log(msg);
    return "iiii";
}
console.log(greet("Happy Day"));


// Immediately Invoked Functional Expression
(function Add(x) {
    console.log(x * x);
})(5);

const obj1 = { name: "Mohan", address: "India" }
console.log(`Name:${obj1.name},address:${obj1.address}`);

(function ModifyObject(param) {
    param.name = "Rana"; param.address = "Delhi";
    console.log(`Name:${param.name},address:${param.address}`);
}
)(obj1);