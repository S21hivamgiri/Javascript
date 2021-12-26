// Bind polyfills

let name = {
    firstName: "Indra",
    lastName: "Kumar"
}
let printName = function (hometown, intrest) {
    console.log(this.firstName + " " + this.lastName + "  lives in " + hometown + " intrested in " + intrest)
}
let printMyName = printName.bind(name, "Noida");
printMyName("Badminton");

//With polyfills
Function.prototype.polyfillBind = function (...args) {
    let obj = this;
    params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}
let printMyNameBind = printName.polyfillBind(name, "Noida");
printMyNameBind("Badminton");



