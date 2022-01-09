let name = "Shailendra";
let company = new String("Global logic");
console.log(company);

let str1 = `Lorem ipsum, dolor sit amet consectetur adipisicing ipsum elit.
Sequiea expedita perspiciatis consectetur ipsa harum dignissimos laborum, corporis voluptates minus alias,
 cum sint animi amet repellendus ut sunt unde magni distinctio, mollitia nisi ? Earum quis soluta voluptas 
 ratione ipsum aperiam reiciendis ?`;// Known as template literals

console.log(str1.lastIndexOf("ipsum"));

// Palindrome
let str = "nitin";
let flag = 1;

for (i = 0; i < str.length / 2; i++) {
    if (str.charAt(i) != str.charAt(str.length - i - 1)) {
        flag = 0; break;
    }
}

if (flag == 1) {
    console.log("Is palindrome");
}
else {
    console.log("Not palindrome");
}