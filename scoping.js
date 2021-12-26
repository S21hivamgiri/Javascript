var y = 24;

function favFunction() {
    var x = 667;
    var c;
    var anotherFavFunction = function () {
        var z=0;
        console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667

        console.log(z);
    }

    var yetAnotherFavFunction = function () {
        c=45;
        console.log(c);
        console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
    }
    console.log(c);
    //console.log(z);// Reference Error z is not defined
    anotherFavFunction();
    yetAnotherFavFunction();
}

//console.log(x);// Reference Error x is not defined
favFunction();