// In this file Arrays + callback methods will be seen



// Map method - map(callback_function) - returns a new array after operations
console.log("MAP METHOD");
let orig = [1, 4, 9, 16, 25];
/* Here is the many ways of writing it

// Using Function declaration
function squareRoot(x){ // callback function
    return Math.sqrt(x);
}
let res = orig.map(squareRoot);

#Function Expressions
let res = orig.map(function squareRoot(x){ 
    return Math.sqrt(x);
})
let res = orig.map(function(x){ 
    return Math.sqrt(x);
});
*/
let res = orig.map((x) => Math.sqrt(x)); // Arrow function
console.log("Original Array:", orig);
console.log("After Mapped:", res);



//Filter Method - filter(callback)
console.log("FILTER METHOD")
let ages = [18, 29, 15, 17];
let votes = ages.filter((x) => (x>=18)? true: false);
console.log(ages);
console.log(votes);

// Reduce method - It gives the result as single single value 
// syntex  - reduce(callback_func, initial_value)
console.log("REDUCE METHOD");
let a = [1,2,3,4];
let sum = a.reduce((total, x) => total + x, 0); //Here 0 is the initial value to total and the total is the value where it is reduce to one single var
console.log(a);
console.log(sum)


// Some and Every method - return true or false
let marks = [56, 70, 76, 80, 86, 90];
let hasCentum = marks.some((x) => x==100); // Like any function in python --> returns true if any one element satisfies
console.log("Has Centum:", hasCentum);
let hasGradeA = marks.some((x) => x>85); 
console.log("Has GradeA:", hasGradeA);

let hasPassed = marks.every((x) => x>50); // Like all function in python --> returns true if all element satisfies
console.log("Has Passed:", hasPassed);
hasGradeA = marks.every((x) => x>85); 
console.log("Has GradeA:", hasGradeA);


// Find and FindIndex method - stops and return when first elements satisfies the condition
let firstPass = marks.find((x) => x > 50);
console.log("First passed score:",firstPass);
let firstIndexPass = marks.findIndex((x) => x > 50);
console.log("First index passed score:",firstIndexPass);


// Sort method
let ar = [11,2,4,55,3];
console.log("Before sort:", ar);
ar.sort(); // JavaScript converts everything to strings and compares them alphabetically
console.log("After sort:", ar);

// So for sorting numbers in js
ar.sort((a, b) => a - b); // arr.sort((a, b) => b - a); - for descending
console.log(ar);