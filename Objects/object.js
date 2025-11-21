/*
OOP - collection of objects [Everything in the world is objects]

 OOps creation methods :
 - Object Literal Notation
 - New Object constructor
 - Constructor function
 - Classes (ES6+)
*/

// 1.Object literal Notation - key value pairs
let stu1 = {
    name:"Manoj",
    age: 20,
    grade: "o",
    code: function(){
        console.log("He starts to code");
    },
    leave:function(){
        console.log("He is on leave");
    }
};

console.log(stu1.name)
stu1.leave();