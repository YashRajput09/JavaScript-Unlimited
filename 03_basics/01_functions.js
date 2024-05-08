// function is a block of code that performs some specific task. it is a resuable  piece of code which can be used in multiple places
// syntax: function name(parameter) {
//   code to be executed
// }

// To execute the function we need to call it,  for example like this:
// myFunction("Hello", "World"); // myFunction is a refrence  and "Hello" and "World" are arguments passed  

function calculate(a, b){ // (a, b) are the parameters 
    console.log(a + b); // console.log() prints output to the console, we can not hold  it in a variable
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
}
// calculate(2, 3) ; //(2, 3) are the arguments


//  function with return
function add(a, b){ // (a, b) are the parameters 
    return a+b; //return will return the value that can be use  outside of the function or used in another function
                //also we can hold this value in a variable
}
// console.log( add(2, 3) ); // 5
// console.log( add(2, "1")); // 21


// TAKE MULTIPLE PARAMETER TO A FUNCTION
function multipleValue(val1, val2 , ...params){ //val1 takes 0, val2 takes 2, and ...params takes remaining value [4, 6 ,8]
    return params;
}
console.log(multipleValue(0, 2 ,4 , 6, 8)); // [0, 2, 4, 6, 8]

// * PASS OBJECT AS AN  ARGUMENTS TO  A FUNCTION *
const user  = {
    Name: "Yash",
    Email : "rajputyash8561@gmail.com",
}

function userDetails(getDetails){
    console.log(`User name is ${getDetails.Name} and email is ${getDetails.Email}`);
}
// userDetails(user);
// userDetails({
//     Name: "Yash Rajput",
//     Email: "rajputyash8561@gamil.com"
// })

// * PASS ARRAY  AS AN ARGUMENT TO A FUNCTION *
const arr = [100, 200, 300, 400];
function getArray(arrValue){
    console.log(`indexOne ${arrValue[0]}, indexTwo ${arrValue[1]}`);
}
// getArray(arr);
// getArray([100, 200, 300, 400]);