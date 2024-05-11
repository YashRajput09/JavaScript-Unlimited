// class buulding block of code that contains properties and methods,
// to use the class we wants to make object of this class 

// or we can say 

// class is a blueprint of object

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    userDetails(){
        console.log(`User details is ${this.username}, ${this.email}, ${this.password}`);
    }
}

//creating object of class user
const UserInfo = new User("Yash", 'rajputyash8561@gmial.com', "yash123"); //new keyword invokes user class constructor
// console.log(UserInfo);

UserInfo.userDetails(); // accessing user class method.

// ******* behind the scene *********
function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.Details = function(){
    return `user details is ${this.username}, ${this.email}, ${this.password}`
}

const details = new user("yash", "yash@gmail.com", "123");
console.log(details);
console.log(details.Details());