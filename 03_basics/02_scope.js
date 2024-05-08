// var Name = "Yash"; //Global scope, but var  is not used because we var have no scope  in JavaScript

let Name = "Yash"; //Global scope, 
function  greet() { 
    let Name = "Yash Rajput" ;//Local Scope or block scope
    console.log(Name);
}
// greet();

// console.log(Name);

var c = 5;
if(true){
    let a = 1;
    const b = 2;
    var c = 3;
}
// console.log("a: ", a) 
// console.log("b: ", b);
// console.log("c: ", c); //////


// ------- Nested function --------
function Detail(){
  let person = 'Yash'
  function  showPerson(){
    let age = 18;
    console.log(person, age);
}   
    // console.log(age);  
    showPerson();
}
Detail();
// console.log(person);