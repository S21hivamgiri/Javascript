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


u = 5;
let x = 2;
function Add(y) {
    return function (z) {
        return function (m) {
            console.log(u + x + y + z * m);
        }
    }
}

const sum = Add(4);
const mul = sum(4);
mul(2);

Add(4)(4)(2)

//Ouput :
// 19
// 19