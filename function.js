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


// Arrow function- Preserve the this
video = {
    title: 'title',
    arr: [1, 2, 3, 4, 4],
    getTitle() {
        this.arr.forEach(() => {
            console.log(this.title)// Point to functional this
        });
    }
}
video.getTitle();

//factory functtion returns a object with functon/ members

function createFunction(radius) {
    return {
        radius,
        getArea() {
            console.log(this.radius * this.radius * Math.PI)
        }
    }
}
createFunction(7).getArea();


// Constructor function()
function Circle(radius) {
    this.radius = radius;
    this.getArea = () => {
        console.log(this.radius * this.radius * Math.PI)
    }
}
let circle = new Circle(7).getArea();

//getter-setter
const data = {
    firstName: 'Shivam',
    lastName: 'Giri',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) {
        first = value.split(' ');
        this.firstName = first[0];
        this.lastName = first[1];
    }
}
console.log(data.fullName)
data.fullName = "Mayank Jha"
console.log(data.fullName)