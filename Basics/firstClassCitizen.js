/*
 To be FCC it should have three characteristics
    - It must be stored
    - It should be passed as an argument
    - It should be able to return
*/

// Example1 - Object as FCC
console.log("Object as FCC")
let a = {     //stored
    name:"BMW",
    color:"Blue"
};

function objAsFCC(car){
    console.log(car);
}
function objAsFCC2(){
    let b = {     
        name:"Lambo",
        color:"Blue"
    };
    return b; // Returning
}

objAsFCC(a); // Passed as an argument
console.log(objAsFCC2());
console.log("__________________________");


// 2. Functions as Object which is also FCC
function exmp(fun){
    fun(10,20);
}

function add(a, b){
    console.log(a+b);
}

let c = add; // stored
c(1,2);
exmp(add); // Passed as argument and it will also return the values.


/*
 Function will looking like the following  (For all the objects)
   HEAP:
 ____________________________________
|          Properties                 |
|                                     |
|     name: add()function name        |
|     length: n (number of parameters)|
|                                     |
|                                     |
|                                     |
 ____________________________________
|            Behaviour                |
|  call :function ()                  |
|  apply :function ()                 |
|  bind :function ()                  |
|                                     |
 ____________________________________
*/ 