/*
API - enable to access the another software's function/ output without exposing the code/logic behind them
Prerequistics Needed: Asynchronous functions, Promises, Promises chaining, Async Await

Characteristics:
    - Fetch will always returns the promises
    - Fetch always works asynchronously 
    - when fetch is called the returned data will be a text bits which is not human understandable format
*/

// Example using cat facts
/*
// This will return the text bits format
fetch("https://catfact.ninja/fact")
.then((res) => console.log(res))
.catch(() => console.log("Failed to fetch"));
*/

/*
// To convert this format to english text use function text() - which returns a new promises
fetch("https://catfact.ninja/fact")
.then((res) => res.text())  
.then((text) => console.log(text))
.catch(() => console.log("Failed to fetch"));
*/

/*
// To convert this JSON to js objects
fetch("https://catfact.ninja/fact")
.then((res) => res.text())
.then((text) => {
    const jsObj = JSON.parse(text);
    console.log(jsObj);
})
.catch(() => console.log("Failed to fetch"));
*/

/*
// To be more simplified function we can use json() - which will also returns a new promises
fetch("https://catfact.ninja/fact")
.then((res) => res.json())
.then((jsObj) => console.log(jsObj))
.catch(() => console.log("Failed to fetch"));
*/

// Using Async Await

async function run(){
    const data = await fetch("https://catfact.ninja/fact");
    console.log(await data.json());
}
run();