// Inheritance is use to inhetit the property of one class(parent class) to another class(child class) 
// 'extends' is use to inherit the property.

class User{
    constructor(username){
        this.username = username;  
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username); //setUser.call(this, username); (super keyword bhiend the scene)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const yash = new Teacher("Yash", "yash@gmail.com", "yash1234");
console.log(yash);
console.log(yash.addCourse());
console.log(yash.logMe("yash")); //accesssing logMe() using Teacher object