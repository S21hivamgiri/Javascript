// Show()

function Show() {
    console.log(x);
    var x = 5;
    console.log(x);
}
Show();

////-----------------------------------------------------------------
// OutPUt
//-------------------------------------------------------------------

/*
undefined
5
*/

// Function Currying
u = 5;
let x = 2;
function Add(y) {
    return function (z) {
        return function (m) {
            console.log(u + x + y + z * m);
        }
    }
}

let add= y=> z=> m => (u+x+y+z*m)

const sum = Add(4);
const mul = sum(4);
mul(2);

Add(4)(4)(2)
console.log(add(4)(4)(2));
//Ouput :
// 19
// 19


// Add Infinite
let AddInf = a => b => b ? AddInf(a+ b) : a
console.log(AddInf(4)(4)(2)(8)(5)(3)(4)(5)(6)(4)(3)(2)());