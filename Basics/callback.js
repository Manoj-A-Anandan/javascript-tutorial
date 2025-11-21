// Callback function is a function that is passed as an argument to another function
// The function which takes another function as input/parameters is called as Higher Order Function
// Use Cases: Array operations, Event Handling, Asysnchronous Programming, HTTP requests
function add(a,b) { // callback function
    return a+b;
}

function sub(a,b) { // callback function
    return a-b;
}
function mul(a,b) { // callback function
    return a*b;
}

function calc(a, b, callback){ // Higher Order Function
    return callback(a,b);
}

console.log(add(10, 5, add));
console.log(sub(10, 5, sub));
console.log(mul(10, 5, mul));