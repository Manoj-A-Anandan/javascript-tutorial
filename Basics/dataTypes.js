//Numbers - Integers, Real numbers, postive and negative infinity, NAN- not an number
let a = 20;
console.log("Integer:",a)
console.log(typeof a);
a = 20.02;
console.log("Real Number:",a);
console.log(typeof a);
//Infinity is also stored and its data type is number
a = 1/0;
console.log("Infinity:", a);
console.log(typeof a);
//NAN
a = "1/0"/2;
console.log("NAN:",a);
console.log(typeof a);
//Number store range from -(2**53 - 1) to (2**53 + 1)
console.log("----------------------------");


//BigInt -store outside range of number - Attach the suffix called n to make them bigint
//Only used for integers i.e whole numbers not others
let b = 9007199254740991n;
console.log("BigInt", b);
console.log(typeof b);
console.log("----------------------------");


//Strings - series of characters
let s = "Hello";
console.log("String:", s);
console.log(typeof s);
console.log("----------------------------");

// Boolean - True or false
let hasMoney = false;
console.log("Boolean:", hasMoney);
console.log(typeof hasMoney);
console.log("----------------------------");

//Undefined - only declared not assigned
let c;
console.log("UNdefined:",c)
console.log(typeof c);
console.log("----------------------------");