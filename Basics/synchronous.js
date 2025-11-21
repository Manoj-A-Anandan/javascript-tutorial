// JS executes Synchronously and are single threaded
/*
    - Execution happens one line at a time, sequentially
    - One piece of code will block another piece of code because it is executing synchronously
    - This can freeze the UI, make it unresponsive, cause it to stall, and ultimately affect the end user experience.
*/
function task1(){
    console.log("Task1 started");
    let time = Date.now();
    let delay = 5000; //milli second
    let end = time + delay;
    console.log("Task1 Executing-----");
    while (Date.now() <= end ){

    }
    console.log("Task1 Ended");
}

function task2(){
    console.log("Task2 started");
    let time = Date.now();
    let delay = 3000; //milli second
    let end = time + delay;
    console.log("Task2 Executing-----");
    while (Date.now() <= end ){

    }
    console.log("Task2 Ended");
}

function task3(){
    console.log("Task3 started");
    let time = Date.now();
    let delay = 7000; //milli second
    let end = time + delay;
    console.log("Task3 Executing-----");
    while (Date.now() <= end ){

    }
    console.log("Task3 Ended");
}


task1();
task2(); // task 2 is blocked while it executes the task1
task3();// task 3 is blocked while it executes the task2