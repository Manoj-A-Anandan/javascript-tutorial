// Shallow copy - A shallow copy copies only the top-level values
// If the object contains nested objects/arrays, only their references get copied — not the actual nested data.
// Acheived using Spread operator[...] and slice

ar1 = [10,20,30,40]
console.log(ar1);
ar2 = [...ar1]
console.log(ar2)
ar1.push(50)
console.log(ar1)
console.log(ar2)
// Using slice
ar3 = ar1.slice();
console.log("Using slice:",ar3)


// Deep Copy
// A deep copy copies everything, including nested objects and arrays.
// Both objects become totally independent.
let original = {
  name: "Nanba",
  marks: { math: 90 }
};

let deep = structuredClone(original);
deep.marks.math = 100;

console.log(original);
console.log(deep);

/*
Feature	                    Shallow Copy             	Deep Copy
------------------------------------------------------------------------
Copies top-level values	        Yes	                        Yes
Copies nested objects	   No (just reference)	        Yes (new ones)
Changes affect original?    Yes, for nested	                 No
Speed	                        Fast                    	Slower
Best for	                Simple objects	            Complex objects

*/