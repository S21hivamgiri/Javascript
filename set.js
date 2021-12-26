// In javascript, Set is a collection of unique and ordered elements.

const newSet = new Set([4, 5, 6, 7]);
console.log(newSet);// Outputs Set {4,5,6,7}


// Weakset contains only objects and no other type.
// An object inside the weakset is referenced weakly.This means, if the object inside the weakset does not have a reference, it will be garbage collected.
// Unlike Set, WeakSet only has three methods, add(), delete () and has().

let obj1 = { message: "Hello world" };
const newSet3 = new WeakSet([obj1]);
console.log(newSet3.has(obj1)); // true

