
//Map is used to store key - value pairs.The key - value pairs can be of both primitive and non - primitive types.

const map1 = new Map();
console.log(map1.set('Value', 1));


// The keys and values in weakmap should always be an object.
// If there are no references to the object, the object will be garbage collected.
let obj = { name: "Vivek" };
const map3 = new WeakMap();
console.log(map3.set(obj, { age: 23 }));