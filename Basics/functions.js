// Need of Function : DRY principle - Do not Repeat Yourself

// Basic four types of functions
/*
let a = 100;
let b = 200;
// Type -1 => No input and no output
function type1(){
    let c = a + b;
    console.log("Type1:", c, '//Printed within the function');
}
type1(); // Calling a function

// Type -2 => No input and return output
function type2(){
    let c = a + b;
    return c;
}
let t2 = type2();
console.log("Type2:", t2);

// Type -3 => Get input and no output
function type3(p1, p2){
    // First step in the execution context for this function in stack 
    // is to create memory for the parameters that is p1 & p2
    let c = p1 + p2;
    console.log("Type3:", c);
}
type3(a,b);

// Type -4 => Get input and return output
function type4(p1, p2){
    let c = p1 + p2;
    return c;
}
let t4 = type4(a, b);
console.log("Type4:", t4);
*/


//Types of Functions:
// 1. Function Declaration
function decFunc(x, y){
    return x+y;
}
console.log("Function Declaration:", decFunc(10, 20));


// 2. Function expression
let expFunc = function(x,y){
    return x+y;
}
console.log("Expression Function:", expFunc(10,10));
console.log(typeof expFunc);


// 3. Arrow Function
// Function  keyword and name are not used. Directly start with the paranthsis
let arrowFunc = (x, y) => { 
    return x+y;
}
//If only one line in the body we can write like the below
// let arrowFunc = (x, y) => x+y;
console.log("Arrow Function:",arrowFunc(20, 20));


// 4. IIFE [Immediately Invoked Function Expression]
function fe(){ // Function Expression which will be run on calling them
    console.log("I run when called");
}
// IIFE - like calling a function in braces => (function(){} )();
(function()
{
    console.log("I run immediately");
})();

