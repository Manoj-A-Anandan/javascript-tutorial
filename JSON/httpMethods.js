/*
To communicate between two computers or servers, a common way is introduced called as Protocol
HTTP - Hypertext Transfer Protocol

HTTP Methods:
    - Get => Used to retrieve info from the server
    - Post => Used to create something new on the server
    - Put => Used to update something completely
    - Patch => Used to make aparyial Update
    - Delete => Used to remove something from server

syntax : fetch(URL, Optionals) - this optionals contains lots of info where if not given it is by default considered as GET
this optional is an JS object

Request Object contains:
    Method: GET / POST / PUT / PATCH / DELETE
    Header:
        - content-type: Tells what type of data we're sending
        - Accept: What is the format in which we want to accept the data
        - Authorization: Security for the authorized users
        - User-Agent: Info about the devices or which browsers, or which OS etc,..
    Body:
        A stringified JSON
*/


// Example URL - http://restful-api.dev/

/*
// Get Method
const URL = "https://api.restful-api.dev/objects";
let data = await fetch(URL, {method: "GET"});
let res = await data.json();
console.log(res)
*/

/*
// Get Single Obj
const URL = "https://api.restful-api.dev/objects/7";
let data = await fetch(URL, {method: "GET"});
let res = await data.json();
console.log(res)
*/


/*
// POST Method - copy the after run this block of to perform another ops
const URL = "https://api.restful-api.dev/objects";
let input =  {
   "name": "XYZ",
   "data": {
      "year": 2025,
      "price": 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB"
   }
};
let data = await fetch(URL, 
    {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
            // Others are optional it automatically understood
        },
        body: JSON.stringify(input) // This will converts the JS obj to Stringified JSON
    });
let res = await data.json();
console.log(res)
*/

/*
// PUT method
const url = 'https://api.restful-api.dev/objects/ff8081819782e69e019aa59ed9af4931'
let input = {
   "name": "New name Changed ",
   "data": {
      "year": 2026,
      "price": 2049.99,
      "CPU model": "Intel Core i10",
      "Hard disk size": "1 TB"
   }
};
let data = await fetch(url, 
    {
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
            // Others are optional it automatically understood
        },
        body: JSON.stringify(input) // This will converts the JS obj to Stringified JSON
    });
let res = await data.json();
console.log(res)
*/

/*
// PATCH method
const url = 'https://api.restful-api.dev/objects/ff8081819782e69e019aa59ed9af4931'
let input = {
   "name": "Rabbit"
};
let data = await fetch(url, 
    {
        method: "PATCH",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
            // Others are optional it automatically understood
        },
        body: JSON.stringify(input) // This will converts the JS obj to Stringified JSON
    });
let res = await data.json();
console.log(res)
*/


// Delete Method
const url = 'https://api.restful-api.dev/objects/ff8081819782e69e019aa59ed9af4931'
let data = await fetch(url, {method:'DELETE'});
let res = await data.json();
console.log(res);