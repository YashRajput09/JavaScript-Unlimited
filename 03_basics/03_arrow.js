// arrow function declaration
let arrFun = () =>{
    console.log("this is arrow function");
}
// arrFun();

// 1.Explicit return arrow function
let add = (a, b) =>{    
    return a + b;
}
// console.log(add(2, 3));

// 2.Implicit return arrow function
let sub = (a, b) => a - b; 
// let sub = (a, b) => (a - b); 

// console.log(sub(5, 3));

// normal function expression
let funExp = function(){
    console.log("This is normal function expression");
}
// funExp();

// ---------- this keyword ----------
/* this keyword refers current context(value) or scope with  in which code is executing

The this keyword refers to different object depending upon how it is called : 
1.  When we call a function as a method of an object this will refers calling object. */
let User = {
    Name: "Yash",
    Message: function(){
        console.log(`Hi ${this.Name}`);
        // console.log(this); //refers to the User Object 
    }
}
// User.Message(); //Hi Yash
User.Name = "Yash Rajput";
// User.Message(); //Hi Yash Rajput
// console.log(this); //{} empty object means there is no current context.
//NOTE - But in browser  when javascript runs, by default window object becomes the current context/scope. So here this refer to window object.

/*
2.  If the function used by itself, then this will refer to the global object  */
function  showMsg() {
    const userName = "Yash";
    // console.log(this.userName); //undefine, because this refers global object not showMsg function
    // console.log(this);
}
showMsg();

/*
3. If the function under strict mode, this becomes undefine. */
function strictFun(){
    'use strict';
    console.log(this); 
}
// strictFun();

/* 
4. During an event, this points to the element that triggered the event.*/
