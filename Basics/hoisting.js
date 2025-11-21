// Hoisting helps JS to move the declaraction to the top
// In other programming languages the following will throws error but in js it executes because of this hoisting
greet();
function greet(){
    console.log("Hello World!");
}


//Let us compare between let and var

// For var: steps includes
// 1. separate the declaration and initialisation
// 2. Move all the initialization to the top
// 3. give the value as undefined for the declared variable var
console.log(a);
var a = 100;
console.log(a);

// For let: steps includes
// 1. separate the declaration and initialisation
// 2. Move all the initialization to the top
// 3. Hoisting doesn't give the value as undefined for the declared variable let which will raise the Reference Error
//console.log(b);
let b = 100;
console.log(b);

/*
1. Hoisting will automatically do this all whenever js runs 
console.log(b);
let b;
b = 100;
console.log(b);

2. Move to top
let b;
console.log(b);
b = 100;
console.log(b);

3.Then creation phase takes in the GEC in stack and starts to execute and this is same for all kinda of declaration
*/


// For Better Understanding, Let us write a code 
/*
let c = 10;
console.log(c);

function printC(){
    console.log(c);
}
printC();
*/
// Hoisting will make them by like the following
let c;
function printC(){
    console.log(c);
}

c = 10;
console.log(c);
printC();
/*
 In stack it will be like 
 ____________________________________
| Creation phase | Execution Phase    |
|                |                    |
|                |                    |
|                |                    |     Execution Context
|                |                    |
|                |                    |
|                |                    |
 ____________________________________
| Creation phase | Execution Phase    |
|                |                    |
|  a = ___       |   a = 100          |
|function        |   c.log(a)         |  Global Execution Context
|    printA(){}  |   printA()         |
|                |                    |
|                |                    |
  ____________________________________
*/ 