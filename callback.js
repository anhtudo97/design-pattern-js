function callbackFn(name) {
    console.log(`Hello ${name}`);
}

function asyncOperation(name, callback) {
    callback(name)
}

asyncOperation('tuanh', callbackFn)