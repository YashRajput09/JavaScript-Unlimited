// variables are used to store the values in the memory,
// variables can be declared with the help of let, var, const  keywords.

const account = "Yash"; //const variable value can not be change(mutable),
                        //But in case of object, array existing value can be modified, but not reasign new value
                        //Scope is with in the block only
let num = 1234;         //let is (immutable) and scope is with in the block only, means variables can only access with in the block
var country = "India";  //var is (immutable) and scope is globally or localy, means variales is access from any where to any where

console.log(account, num, country); // console.log() is used to display the output  of a program to the console
console.table([account, num, country]); //console.table() method is used to display the output in the table form with index and its value