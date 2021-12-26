var x = 5;
var y = 4;
z = x % y;

switch (z) {
    case 0: console.log("Even");
        break;
    case 1: console.log("Odd");
        break;
}

if ('Hi') {
    console.log("help");
}

if (null) {
    console.log("help2");
}


let grade = 30;

if (grade > 80) {
    console.log("Eroor");
} else
    if (grade > 80) {
        console.log("A");
    } else
        if (grade > 60) {
            console.log("B");
        } else
            if (grade > 40) {
                console.log("C");
            } else
                if (grade > 20) {
                    console.log("D");
                }
                else console.log("F");