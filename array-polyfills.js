const array1 = [1, 30, 39, 29, 10, 13, 41];


//forEach
//array1.forEach((currentValue) => console.log(currentValue));

Array.prototype.myForEach = function (callbackFn) {
    for (var i = 0; i < this.length; i++) {
        callbackFn(this[i], i, this)
    }
}
//array1.myForEach((currentValue) => console.log(currentValue));

//Mapping
///console.log(array1.map((currentValue) => currentValue+1));

Array.prototype.myMap = function (callbackFn) {
    for (var i = 0; i < this.length; i++) {
        this[i] = callbackFn(this[i], i, this)
    }
    return this;
}
//console.log(array1.myMap((currentValue) => currentValue + 1));


//Filter
//console.log(array1.filter((currentValue) => currentValue > 25));

Array.prototype.myFilter = function (callbackFn) {
    let arr = []
    for (var i = 0; i < this.length; i++) {
        if (callbackFn(this[i], i, this)) {
            arr.push(this[i])
        }
    }
    return arr;
}
//console.log(array1.myFilter((currentValue) => currentValue > 25));

//console.log(array1.reduce((acc,currentValue) => acc+currentValue,0));


Array.prototype.myReduce = function (callbackFn, initialValue) {
    let init = initialValue;
    for (var i = 0; i < this.length; i++) {
        if (init !== undefined)
            init = callbackFn(init, this[i], i, this);
        else {
            init = this[i]
        }
    }
    return init;
}

//console.log(array1.myReduce((acc, currentValue) => acc + currentValue));

// console.log(array1.every((currentValue) => currentValue<40));

Array.prototype.myEvery = function (callbackFn) {
    let value = true;
    for (var i = 0; i < this.length; i++) {
        value = value && callbackFn(this[i], i, this);
    }
    return value;
}
// console.log(array1.myEvery((currentValue) => currentValue < 40));

// console.log(array1.some((currentValue) => currentValue > 40));

Array.prototype.mySome = function (callbackFn) {
    let value = false;
    for (var i = 0; i < this.length; i++) {
        value = value || callbackFn(this[i], i, this);
    }
    return value;
}

// console.log(array1.mySome((currentValue) => currentValue > 40));



let array2 = [1, 2, 3, [4, 5, 6, [7, 8, [9, 0]]]]

console.log(array2.flat(2));

Array.prototype.myFlat = function (depth) {
    if (depth === undefined) {
        depth = 1
    }
    let arr = []

    let iter=this;
    for (var j = 0; j < depth; j++) {
        arr = []
        flag=false
        for (var i = 0; i < iter.length; i++) {
            if (Array.isArray(iter[i]))
                {arr.push(...iter[i]);
                    flag=true;}
            else {
                arr.push(iter[i]);
            }
        }
        iter = [...arr];
        if(!flag) break;
    }
    return arr;
}

console.log(array2.myFlat());


