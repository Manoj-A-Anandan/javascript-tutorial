//String():
//Number to string
console.log("Using String() number to string")
let a = 123;
console.log(typeof a);
let b = String(a);
console.log(typeof a);
console.log("----------------------------");

console.log("Using String() boolean to string")
//Boolean to string
let bool = true;
console.log(typeof bool);
let boolStr = String(bool);
console.log(typeof boolStr);
console.log("----------------------------");

//Number():
//String to Number
console.log("Using Number() String to number")
let x = '123';
console.log(typeof x);
let numX = Number(x);
console.log(typeof numX);

//if its not a number it shows NaN which will be solved using parseInt
z = '123String';
console.log(typeof z);
console.log(z)
numz = Number(z);
console.log(numz)
console.log(typeof numz);
console.log("----------------------------");

console.log("Using ParseInt()")
//Converts even it has the characters with limits
x = '123String';
console.log(typeof x);
console.log("original:", x);
numX = parseInt(x);
console.log("After converting:", numX);
console.log(typeof numX);

x = 'str123';
console.log(typeof x);
console.log("original:", x);
numX = parseInt(x);
console.log("After converting:", numX);
console.log(typeof numX);

x = ' 123String';
console.log(typeof x);
console.log("original:", x);
numX = parseInt(x);
console.log("After converting:", numX);
console.log(typeof numX);

x = ' 1 2 3';
console.log(typeof x);
console.log("original:", x);
numX = parseInt(x);
console.log("After converting:", numX);
console.log(typeof numX);
console.log("----------------------------");

console.log("Using Number() Boolean to number")
//Boolean to Number
let bool1 = true;
let bool2 = false
console.log('original:', bool1, 'original:', bool2)
console.log(typeof bool1);
let numBool1 = Number(bool1);
let numBool2 = Number(bool2);
console.log('After:', numBool1, "after", numBool2)
console.log(typeof numBool1);
console.log("----------------------------");

//Number , string to boolean
//Any number other than 0 , convert it as true 
//NaN, null and 0 only results in false
//For any non empty string is true otherwise false
