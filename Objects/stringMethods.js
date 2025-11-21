// String Methods - It always creates a new memory and reassign it to the variable with the new address

let str = "   Hi |  Hello   | welcome | to|World";

let arr = str.split('|'); // we should mention the delimiter unlike python which split() default splits with spaces
console.log(arr);

for(let i = 0; i < arr.length; i++){    
    arr[i] = arr[i].trim() // Removes the leading and the trailing spaces
}
console.log(arr)

let a = "HeLo";
console.log(a.toUpperCase()); // Converts to uppercase
console.log(a.toLowerCase()); //Converts to Lowercase


let b = "I love js and python and";
console.log(b.includes("js"), b.includes("Python"));
console.log(b.indexOf("and"), b.lastIndexOf("and"));

b = b.replace("and", "AND"); // it replaces the first occurence only
console.log(b);
b = "I love js and python and";
b = b.replaceAll("and", "AND"); // it replaces all the occurence 
console.log(b);

console.log(b.slice(b.indexOf("python"), b.lastIndexOf("AND")-1)); // slice(startIndex, endIndex)

let phone = "+916385581105";
let email = "xya@gmail.com";
console.log(phone.startsWith("+91"), email.endsWith(".com"));

let repeat = ":)->".repeat(10); // this repeats 
console.log(repeat);