/*
Promises - Used to run the js Asynchronously which helps to overcome the callback hell and the pyramid of doom by using the settimeout function
Promises consists of
    - state => pending/fullfilled/unfullfilled
    - Executor function => a callback to execute
    - resolve() => to change the state to success
    - reject() => to change the state to reject
    - .then() => to collect the success message
    - .catch() => to collect the failure message
*/

// With settimeout causes callback hell where each depends on another
// Let us assume for a social media app with the error handling

/*
function loadingDashboard(id, callback){
    let error;
    setTimeout(()=> {
        if(error){
            return callback(error);
        }
        console.log("Fetching the user data...");

        setTimeout(() =>{
            if(error){
                return callback(error);
            }
            console.log("Fetching the user friend list...");

            setTimeout(() => {
                error = "Unable to fetch user post"; // We made a error to stop
                if(error){
                    return callback(error);
                }
                console.log("Fetching the user posts...");

                setTimeout(() => {
                    if(error){
                        return callback(error);
                    }
                    console.log("Fetching the user comments");
                }, 2000);
            },2000);
        },2000);
    },2000);
}
loadingDashboard(101, errorHandler);

function errorHandler(error){
    console.log("An error occurred... \nError:",error);
}
*/


// The above code work asynchronously but no readability and complex

// Using the promises - It automatically executes the executor function
/*
let prm1 = new Promise((resolve, reject) =>{
    console.log("Promises made simple");
    resolve("Success");
});

prm1.then((result) => console.log(result));


let prm2 = new Promise((resolve, reject) =>{
    console.log("Promises made simple");
    reject("failure");
});

prm2.catch((result) => console.log(result));
*/

// In the web api they provide micro and macro task queues where the function comes in macro queue after reaching 0 second 
// Micro queues are only for the promises callback function and Event loop prioritise the micro queue before inserting a another macro task into call stack
/*
const prm = new Promise((resolve, reject) =>{
    console.log("Water has started to boil");
    setTimeout(() =>{
        console.log("Water boiled");
        resolve();
    },2000);
});

prm
.then(()=>{
    console.log("Promises fullfilled");
})
.catch(()=>{
    console.log("Promises unfullfilled");
})

setTimeout(() => {
    console.log("Macro task")
}, 3000);
*/

/*
for the above code 
    - First the GEC context created and promises is object so it created and starts it executor function to run in the call stack 
    - And in that it has the settiemout function which is an web api feature , so it register it in the memory
    - Then outside settimeout creates register in the web api feature for 3 seconds
    - After completion of 2 seconds, the event loop brings inside settimeout and put in the macro task queue and checks for availability in call stack
    - Then it creates it's E.C and it when see the resolve , Event loops bring them and put it into the Micro task queue
    - After 3 seconds the the outside settimeout is also availbale - Now one in micro task queue and another in macro task queue
    - Event loop check for any execution is available in micro task before take from the macro task
    - so now the micro queue is emptied and then it loads the func in macro task
*/
// Note that the Micro task queue is only for the promises functions like resolve(), reject(), then(), catch()




// Promises chaining
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

step1()
.then(step2)
.then(step3)
.then(step4)
.then(() => console.log("All steps are executed"))
.catch(() => console.log("Promises Failed"));