// We can execute the blocking functions later with the Asynchronous functions.
// This features are provided by the web APIs of the web browsers such as Chrome firefox edge or by the Node.js to execute outside the browser like we do
/*
Some of the Web APIs includes: DOM, Timers, Fetch, Other APIs
Also It provides two new ds called: Microtask Queue and Callback Queue

In order to acheive Asynchronous JS uses a concept called EVENT LOOP which takes the callback function when it becomes zero and put it on the callback queue
Also it scans the call stack for availability:
    - If anything is executing, it wil not touch anything
    - else, it takes the function from the callback queue and create a EC in the call stack and starts to execute
*/

// Example1:

// function task1(){
//     console.log("Task1 Starts to executes.....");
//     console.log("Task1 executed successfully!");
// }

// function task2(){
//     console.log("Task2 Starts to executes.....");
//     let time = Date.now();
//     let delay = 5000;
//     let end = time + delay;
//     while (Date.now() <= end){

//     }
//     console.log("Task2 executed successfully!");
    
// }

// function task3(){
//     console.log("Task3 Starts to executes.....");
//     console.log("Task3 executed successfully!");
// }

// task1();
// setTimeout(task2, 2000); // After 2 seconds the event loop berings it from register to the callback queue and when the call stack becomes empty then it pushes to the call stack to execute
// task3();



// Set Interval() - repeats execution for every mentioned time
function fun(){
    console.log("Fetching Data.....");
}
let intervalID = setInterval(fun, 2000); // It will continously executes so to stop it we use settimeout and clearinterval together
setTimeout(() => clearInterval(intervalID), 10000); // After 10 secs it will stop repeating