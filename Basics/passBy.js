// Pass by Value: Changes in the copy doesnt affect the original ( for Primitives)
// Pass by Reference: Changes in the copy does affect the original(Objects)

//Pass By Value
let a = 100;
let b = a;
console.log("By Value:",a,b);
b = 200;
console.log("After changing the copy:",a,b);

//Pass By Reference
let c1 = {
    name:"BMW",
    color:"Black"
};
let c2 = c1;
console.log(c1, c2);
c2.color = "Blue";
console.log(c1, c2);