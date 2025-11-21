// Sequentially data are stored of any types and are dynamic in nature

let arr = [10, "HI", true, 40, 50];
let arr2 = new Array(5); // Using the Array Constructor

console.log(arr2);  
for(let i = 0; i < arr2.length; i++){
    arr2[i] = i + 10;
}
console.log(arr2);

for(let x of arr){ // For of loop which moves forward only like for i in arr [in python]
    console.log(x);
}


// Array Methods
/*
    - push()
    - pop()
    - shift()
    - unshift()
    - map()
    - reduce()
    - filter()
*/


// Adding elements to the array
let arr1 = [1,2,3,4,5];
console.log("Original Array:", arr1)

arr1.push(6) // adds to the last
console.log("Array after pushing to the last:", arr1)

arr1.unshift(0) // adds to the first index by creating one extra space and shift elements from left to right
console.log("Array after pushing to the first:", arr1)

// Deleting elements in the array
let arr3 = [1,2,3,4,5];
console.log("Original Array:", arr3)

let rem1 = arr3.pop() // Removes the last element and can be stored 
console.log("After deleting the last element: ",arr3)
console.log("Deleted element:", rem1);

let rem2 = arr3.shift() // Removes the first element and shift the elements from right to left
console.log("After deleting the first element: ",arr3)
console.log("Deleted element:", rem2);


// Splice method- used for single or multiple element deletion or insertion  - returns a new arr
// splice(startIndex, count, items, ..)

let arr4 = [1,2,3,4,5];
console.log("Original Array:", arr4);

let rem3 = arr4.splice(2, 1) // this deletes one element from 2nd index
console.log("Array after deletion from index 2[single deletion]:", arr4);
console.log("Spliced elements:", rem3);

arr4 = [1,2,3,4,5];
console.log("Original Array:", arr4);

let rem4 = arr4.splice(2, 3) // this deletes three element from 2nd index
console.log("Array after deletion from index 2 to mentioned elements count :", arr4);
console.log("Spliced elements:", rem4);

arr4 = [1,2,3,4,5];
console.log("Original Array:", arr4);
arr4.splice(1,0,"HI") // by mentioning the third parameter will insert from the starting index mentioned ....we can insert many values using comma separted
console.log("Inserted value at index 1:", arr4);

// we can also delete and also insert 
arr4 = [1,2,3,4,5];
console.log("Original Array:", arr4);
arr4.splice(1,4,"HI", "Hello", "Welcome") // by mentioning the third parameter will insert from the starting index mentioned ....we can insert many values using comma separted
console.log("After deleting and inserting the values:", arr4);




// Searching elements
let search = [10,20,30,40,50,20,60];
console.log(search);
console.log(search.indexOf(20)) // returns first occurence index if found else -1
console.log(search.lastIndexOf(20)) // returns last occurence index if found else -1

// check for availability
console.log(search.includes(10));
console.log(search.includes(100));