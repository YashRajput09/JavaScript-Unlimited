/* 
In JS, Prototype is an object that is associated with every function and object by default.
Each function includes a prototype object.
*/

// inject new prototype in Object and object is paraent of all. like array , string, function
// that means at the end all the things are object in js, the object is parent of all
// in this we injet new protype in object so, the array , string, function anyone can access.
let Name = "Yash     ";
// console.log(Name.length);

Object.prototype.trueLength = function(){
    console.log(`True length is ${this.trim().length}`);
}

console.log(Name.trueLength());

let fullName = "Yash Rajput     ";
// console.log(fullName.length);
String.prototype.netLength = function(){
    return this.trim().length;
}

console.log(fullName.netLength());