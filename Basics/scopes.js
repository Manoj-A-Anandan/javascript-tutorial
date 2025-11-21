/*
Types: 
 - Global scope
 - Function scope
 - Block scope
*/

// Global Scope - Accessed globally
let a = 10; // Global
console.log(a);
function global(){
    console.log("Global variable accessed:", a);
}
global();

// Function scope - Accessed within the function only
let b = 20; // Global
function functionScope(){
    let c = 100;
    var d = 200;
    console.log("Function scope: ", c, d);
}
// console.log(c, d); //Note both var and let are not accessed here in function scope

// Block scope - within the blocks

let age = 18;
if (age > 18){
    var vote = true;
    console.log("Vote eligible:", vote);
}
else{
    var notVote = true;
    console.log("Vote eligible:", notVote);
}

console.log(age);
// console.log(vote);
// console.log(notVote); //Not accessed but in var it will be accessed because of hoisting  as var will breach the bloack scope to the global scope