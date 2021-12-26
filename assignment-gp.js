c = " ";
for (j = 5; j > 0; j--) {
    c = "";
    for (i = 0; i < j; ++i)
        c = (c + "*");
    console.log(c);
}

console.log('  ');

let p = "";
for (i = 1; i <= 5; ++i) {
    c = ""; p = "";
    for (k = 1; k <= i; ++k) {
        c = k + c;
    }
    for (j = 5; j >= k; --j)
        p = (" " + p);
    console.log(p + c);
}

/*
PS C:\Users\shivam.giri\Documents\Javascript> node .\assignment-gp.js
*****
***
**
*

1
21
321
4321
54321
*/
