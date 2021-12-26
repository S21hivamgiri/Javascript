function Company() {
    this.company = "Global Logic";
}

function Employee(id, name) {
    this.id = id;
    this.name = name;
    this.showDetails = function () {
        console.log(`Id:${this.id},FullName: ${this.name}, company:${this.company}`);
    }
}

Employee.prototype = new Company();
let emp = new Employee(1, 'Mohan');
emp.showDetails();
console.log(emp.__proto__);
console.log(emp.__proto__.proto__);
//console.log(emp.__proto__.proto__.__proto__);


function Point(x, y) {
    this.x = x;
    this.y = y;
}

var myPoint = new Point();

console.log(myPoint.__proto__ == Point.prototype);
console.log(myPoint.__proto__.__proto__ == Object.prototype);
console.log(myPoint instanceof Point);
console.log(myPoint instanceof Object);

////////Class
class Company2 {
    constructor() {
        this.company = "Don1";
    }
}

class Employee2 extends Company2 {
    constructor(id, name) {
        super();
        this.id = id;
        this.name = name;
    }
    showDetails() {
        console.log(`Id:${this.id},FullName: ${this.name}, company:${this.company} `);
    }
}

emp = new Employee2(1, 'Mohan');
emp.showDetails();
console.log(emp.__proto__);
console.log(emp.__proto__.proto__);


class C { }
class D {
    static stMeth() {
        console.log("static method stMeth on D")
    }
    meth() {
        console.log("method on D")
    }
}
const d = new D()
const c = new C()
c.__proto__ = d
c.meth()
//c.stMeth()   ---> Error