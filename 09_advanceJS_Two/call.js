//  call() pass the current execution context to another function

/*
The call() method in JavaScript is used to call a function with a specified this value and arguments provided individually.
 It allows you to set the this value explicitly when invoking a function,
 which is particularly useful in situations where you want to execute a function within the context of a specific object.
*/

function setUser(username){
    this.username = username;
}

function createUser(username, email, password){
    setUser.call(this, username); // csll transfer current context from setUser to creatUser method
    this.email = email;
    this.password = password;
}

const chai = new createUser("Chai", 'chai@gmail.com', '123');
console.log(chai);