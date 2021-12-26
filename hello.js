let x = 5, y = 0, u, w = "Hi", v = false, z = null, s="5";

//All values except 0, 0n, -0, "", '', null, undefined and NaN are truthy values.
if (y) {
    console.log('Hi'); // Will not call Boolean coersion if(0)---> 0 coersed as fasle
}
if (u) {
    console.log('Hi'); // Will not call Boolean coersion
}
if(s===x){
    console.log('Hi') //Will get call Equality Coercion 5==="5"
}

console.log(x / y);
console.log(x / w);
console.log(x / v);
console.log(x / u);
console.log(x / z);
console.log(x + 7 + "Hi"); //String Coersion string+number=string;  number coersed as string
console.log("Hi" + x + 5); //String Coersion string+number=string;
console.log(x - w);
console.log(x - u);
console.log(u);
console.log(x + u);
console.log(w + u + w);
console.log(w + v); //String Coersion string+boolean=string
console.log(w + z); //String Coersion string+any=string
console.log(z + w); //String Coersion string+any=string
console.log(z + u + w);
console.log(x * u);

//----------------------------------------------------------------
// Output
//----------------------------------------------------------------

// Infinity
// NaN
// console.log(x / v):    Infinity
// NaN
// Infinity
// console.log(x + 7 + "Hi") 12Hi
// Hi55
// NaN
// console.log(x - u) NaN
// undefined
// NaN
// console.log(w + u + w): HiundefinedHi
// Hifalse
// Hinull
// console.log(z + w): nullHi
// NaNHi
// NaN