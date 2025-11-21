// Strings - A sequence of characters which are Immutable in nature

// whenever a string is created a dedicated memory is created in the heap memory called String Pool
// Also js uses a string Interning concept - For a particular value of a string only one unique copy exists in the memory
/*
IN string pool:
when a string declared 
    - search for availablity
    - If exists take the memory and assign t to another
    - If not then it creates new block in the string pool
*/

let s1 = "js"; // Not present so it creates a new memory in string pool and assume its address as 1000
let s2 = "js"; // Again String interning searches, it exists so it give the address 1000 to this variable also
let s3 = new String("js");  // Its object and created with the memory 3000 address(assusmption)
// when it sees the new constructor it is consider as object and creates a new memory and string interning searches - exists so it assisgns the same 1000 address to the object

console.log(s1==s2, s1===s2);
console.log(s1==s3,s1===s3);
console.log(typeof s1, typeof s2, typeof s3);


// Types of declaration
// using single quotes, double quotes, string literal, constructor
let single = 'Manoj';
let double = "Saran";
let literal = `Hi!, ${single}`;
let cons = new String("World");
console.log(single, typeof single);
console.log(double, typeof double);
console.log(literal, typeof literal);
console.log(cons, typeof cons);

// String Access methods
console.log(single[0]); // using index
console.log(single.charAt(0)) // Using charAt

// Concatenation 
let str1 = 'Hello';
let str2 = 'World';
console.log(str1 + str2); //Using + operator
console.log(str1.concat(str2)); // Using concat
// We can also directly strings in the operation without storing in the variable

//Slice for concatenation
let newStr = "K" + str1.slice(1);
console.log(newStr)