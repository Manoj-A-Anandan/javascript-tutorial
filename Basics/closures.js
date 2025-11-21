// When a function returns a another function where the closure come into play
// closure makes a boundary inside around the outer function where the outer function variables are needed in the inner function which is called lexical scope
// With these cloures , the needed variables are not deleted even the memory for the outer function gets deleted.

function outerFun(){
    let outerVar = 10;
    function innerFunc(){
        console.log("Outer Variable:", outerVar);
    }
    return innerFunc;
}

let fun = outerFun();
fun();


// Lets try with counter
function counter(){
    let count = 0; // Lexical scope
    return function(){
        count += 1;
        console.log(count);
    }
}
let A = counter();
A();
A();
A();
A();

let B = counter();
B();
B();
B();