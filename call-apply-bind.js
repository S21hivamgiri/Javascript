// Call 
function sayHello() {
    return "Hello " + this.name;
}
var obj = { name: "Sandy" };
console.log(sayHello.call(obj));
// Returns "Hello Sandy"




var person = {
    age: 23,
    getAge: function () {
        return this.age;
    }
}
var person2 = { age: 54 };
console.log( person.getAge.call(person2))



//Call with Arguement
function saySomething(message, bold) {
    return this.name + " is " + bold + " " + message;
}
var person4 = { name: "John" };
console.log(saySomething.call(person4, "awesome", "bold"))





// Apply : call() method takes arguments separately whereas, apply() method takes arguments as an array.
function saySomething1(message, hi) {
    return hi+", "+this.name + " is " + message;
} 
var person4 = { name: "John" };
console.log(saySomething1.apply(person4, ["awesome","Hi, "]));




//Bind
var bikeDetails = {
    displayDetails: function (registrationNumber, brandName) {
        return this.name + " , " + "bike details: " + registrationNumber + " , " + brandName;
    }
}
var person1 = { name: "Vivek" };
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
console.log(detailsOfPerson1());


let z = function(a){
    return this.name + " of " + a;
}
let b={name: "Shivam"}
console.log(z.bind(b,"India")());




powerLevel=2;
let hero = {

    powerLevel:10,
    getPower() {
        return this.powerLevel;
    }
}
let getPower = hero.getPower;
let hero2 = { powerLevel: 42 };
console.log(getPower());
console.log(hero.getPower());
console.log(getPower.call(hero2));