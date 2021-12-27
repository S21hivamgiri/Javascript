// function returning promise resolved after 2 sec
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

//Without async await
function asyncCall() {
    console.log('calling');
    const result = resolveAfter2Seconds();
    console.log(result);
}
// OUTPUT
// "calling"
// Object { }


// With async/ await
async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
}
// OUTPUT
// "calling"
//"resolved"

asyncCall();