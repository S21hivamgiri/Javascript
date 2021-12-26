const obj1 =
{
    id: 1,
    firstName: 'Mohan',
    lastName: 'Kishore',
    fulleName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(`Id:${obj1.id},FullName: ${obj1.fulleName()}`);


//Objects.js
const obj = new Object();
obj.id = 1;
obj.firstName = 'Mohan';
obj.lastName = 'Kishore';

obj.fulleName = function () {
    return `${this.firstName} ${this.lastName}`;
}
console.log(`Id:${obj.id},FullName: ${obj.fulleName()}`);


///deep copy
const obj2 = obj
obj2.firstName = "Rama";
console.log(`Id:${obj.id},FullName: ${obj.fulleName()}`);
console.log(`Id:${obj2.id},FullName: ${obj2.fulleName()}`);


////swallow copy
const obj3 = Object.create(obj2);
obj3.firstName = "Kumar";
obj2.firstName = "Shyam";
console.log(`Id:${obj3.id},FullName: ${obj3.fulleName()}`);
console.log(`Id:${obj2.id},FullName: ${obj2.fulleName()}`);


///constructor function
function User(id, name, address) {
    //private
    id;

    //public
    this.name = name;
    this.address = address;
    this.showDetails = function () {
        console.log(`Id:${id},Name: ${this.name},Address: ${this.address}`);
    }
}

let user = new User(1, 'Mohan', 'Noida');
user.showDetails();



class User2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        let address;
        this.setAddress = function (add) {
            address = add;
        }
        this.getAddress = function () {
            return address;
        }
    }

    showDetails() {
        console.log(`Id:${this.id},FullName: ${this.name}`);
    }
    // showdetails = () =>{
    //    console.log(`Id:${this.id},FullName: ${this.name}, Addrress ${this.getAddress()}`);
    // }
}
let user1 = new User2(1, 'Mohan');
user1.showDetails();


//// Prototype
function User3(id, name) {
    this.id = id;
    this.name = name;
}

User3.prototype.showDetails = function () {
    console.log(`Id:${this.id},FullName: ${this.name}`);
}

// User3.prototype.showdetails = () =>{
//    console.log(`Id:${this.id},FullName: ${this.name}, Addrress ${this.getAddress()}`);
// }

let user2 = new User(1, 'Mohan');
user2.showDetails();
