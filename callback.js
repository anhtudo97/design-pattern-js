function callbackFn(name) {
    console.log(`Hello ${name}`);
}

function asyncOperation(name, callback) {
    callback(name)
}

asyncOperation('tuanh', callbackFn)

/*
    Callback pattern for reduce code cause this code can reuse the variable for each callback parameter
*/

const sum = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const calc = (a, b, callback) => {
    return callback(a, b)
}

calc(6, 7, sum)
