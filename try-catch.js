try {
    let x = -3;
    if (x / 0)
        throw 'Division by 0 not allowed';
}
catch (error) {
    console.log(error);
}