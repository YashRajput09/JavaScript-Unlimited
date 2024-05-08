/************ Objects **************/
/* In JS, Object is a collections of Key value pair, where Key are string or Symbol,
    and the values can be any data type (including other object) */

// singleton Object  

/* Constructor se jab object banate hai to vha singleton objet banta hai, that means
   yha (apna tarah ka ek hi object hai) iske (multiple instances nahi bante hai)*/
const singleTonObj = Object.create({
    name : "YASH",
    age: 18,
});


// Object litreals

const Sym = Symbol("Key");

const User = {
    name : "Yash", //By default single "work" key is string 
    "full name" : "Yash Rajput", //but in more than "one word" key need to define string with double quotes
    [Sym] : "Secret Info", //Symbol based key
    age : 18,
    state : "Madhya Pradesh",
    email : "rajput8561@gmail.com",
    isLoggedIn : true,
    lastLoggedIn : ["Monday", "Tuesday", "Wednesday", "Thursaday", "Friday", "Saturday", "Sunday"],
};
// console.log(User.name); // this is valid but not good,
// console.log(User["name"]); // better way of accessing the property
// console.log(User["full name"]); //this is better then (User.name),
// because If we define a key like this "full name" : "Yash Rajput",
// so this key can not acccess by dot(.) syntax, but we can access with the help of square notesation ["full name"] syntax

//  console.log(User[Sym]); // Accessing symbolic key
//  console.log(typeof User[Sym]);
//  console.log(User); // [Sym] key is a symbol not string, ** [Symbol(Key)]: 'Secret Info' **


//Change email before freeze
User.email = "yash123@gmail.com";
// console.log(User["emial"]);
Object.freeze(User); //  It will make all properties non-configurable, non-writable & non-enumerable
                     /* This mean you cannot add new keys into it, remove existing one,
                        And also You cannot change their enumerability status */
                     /* Non-configurable - Can't change the existing property attributes.
                        Non-writable - Can't change the existing property value.
                        Non-enumerable - Not showing up while iterating over an object using for...in loop or when creating an array from an object
                        Non-enumerable - Not showing up while looping through an object*/

// Change email after freeze
User.email = "yash8904@google.com";
// console.log(User["email"]);