const Name = "Yash";

// if(Name){
//     console.log("executed");
// }

// if(Name == "Ravi"){
//     console.log("Hey Ravi");
// } else{
//     console.log("Hey Yash");
// }

// const price = 200;

// if (price < 100){
//     console.log(`100 is greater then ${price}`);
// } else if(price < 200){
//     console.log(`200 is greater then ${price}`);
// } else if(price < 300){
//     console.log(`300 is greater then ${price}`);
// } else {
//  console.log( `Price is above 300` );
// }

const isgoogleLoggedIn = true;
const isEmailLoggedIn = false;

// OR ( || ) operator, returns true if any of the operand is true
// if(isgoogleLoggedIn || isEmailLoggedIn){
//     console.log("User is loggedIn");
// } else{
//     console.log("User is not loggedIn");
// }

// AND ( && ) operator, returns true only when both the operands are true
// if(isgoogleLoggedIn && isEmailLoggedIn){
//     console.log("User is loggedIn");
// } else{
//     console.log("User is not loggedIn");
// }

// Nulish Coalescing Operator (??) : null undefined --- work only for null and undefined.
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
// val1 = null ?? undefined ?? 10;
console.log(val1);

// ternary operator
// (2 == 2) ?  console.log('Yes') : console.log('No');

// truthy value
// false, 0, -0, "", BigInt 0n, null, undefined, Nan

// falsy value
// true, 'false', 1, [], {}, " ", "0", function(){}

const User = {};

// if (Object.keys(User).length === 0){
//     console.log("object is empty");
// }