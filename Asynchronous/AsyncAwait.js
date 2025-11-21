// Async Await makes the Asynchronous execution like the promises but by replacing the then catch with easily understandable format
// Whenever JS see the await keyword , ot move the whole function to the suspend state and wait for the completion of the asynchronous function that is called.
// Then it again reumes its execution by creating the E.C in the call stack


// Lets take the example in the promise chaining

function step1(){
    return new Promise((resolve, reject) =>{
        console.log("Step1 has started");
        setTimeout(() => {
            console.log("step1 ended..");
            resolve();
        }, 2000);
    })
}

function step2(){
    return new Promise((resolve, reject) =>{
        console.log("Step2 has started");
        setTimeout(() => {
            console.log("step2 ended..");
            resolve();
        }, 3000);
    })
}

function step3(){
    return new Promise((resolve, reject) =>{
        console.log("Step3 has started");
        setTimeout(() => {
            console.log("step3 ended..");  //console.log("step3 stopped..");
            resolve();                     //reject();
        }, 1000);
    })
}

function step4(){
    return new Promise((resolve, reject) =>{
        console.log("Step4 has started");
        setTimeout(() => {
            console.log("step4 ended..");
            resolve();
        }, 5000);
    })
}

// step1()
// .then(step2)
// .then(step3)
// .then(step4)
// .then(() => console.log("All steps are executed"))
// .catch(() => console.log("Promises Failed"));

// Using Aysn Await
// This function will execute like synchronously
async function run(){ // async keyword tells the function that it has the asynchronous function will be inside them
    try{
        // Await keyword tells the function wait for its execution
        await step1(); // After calling the function, this whole run paused and in suspend state. After successful executuin move to next
        await step2(); // similarly this also
        await step3();
        await step4();
        console.log("All the steps are executed");
    }
    catch(error){ // if any error or rejection occured, it is handled with this catch block
        console.log("Promises failed");
    }
}
run();