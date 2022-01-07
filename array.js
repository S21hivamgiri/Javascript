let number = [[56, 89, 90], 50, 60, {
    name: '98'
}];

for (i = 0; i < number.length; ++i) {
    console.log(number[i].name);
}

let arr1 =Array.of(4,44,3,2,1);
let arr2 =arr1.fill(77)
console.log(arr1)