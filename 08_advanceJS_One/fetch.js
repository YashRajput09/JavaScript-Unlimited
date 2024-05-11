/*
fetch() is a build in js function that allows to make network requests,
like fetching data from API, loading remote files, or submitting data to a server.

We call fetch() with the URL of the resource we want to fetch.
fetch() returns a Promise that resolves to a Response object representing the response to the request.
We use .then() to handle the response asynchronously. Inside this callback, we check if the response was successful (using response.ok), and if so, we parse the JSON data using response.json(), which returns another Promise.
We chain another .then() to handle the parsed JSON data and do something with it.
We use .catch() to handle any errors that occurred during the fetch operation.
*/

// ** USING ASYNC & AWAIT **

// const requestURL = 'https://api.github.com/users/YashRajput09';
// async function UserInfo(){
//    const response = await fetch(requestURL)
// const data = await response.json();
// console.log(data);
// }

// UserInfo();

// ** USING PROMISE **

const url = 'https://api.github.com/users/YashRajput09';
fetch(url)
.then((response) =>{
    return  response.json();
})
.then((data) =>{
    console.log(data.login);
})

//  ***** new keyword is used to create a new instance(copy) of object,
//  that's help, when we apply changes properties of object then it will change in copy of object that provided by new keyword,  not in origianl object

const user = {
    naame : 'Yash Rajput',
    age : 19,
    email : 'rajputyash8561@gmail.com',
}

function User(naame, age, email){
    // console.log(this.naame);
    this.naame = naame;
    this.age = age;
    this.email = email;

    return this;
}
// console.log(User());
const Info = User('Yash', 18, 'raj@gmail.com'); //original value
// const Info2 = User('Yash Rajput', 19, 'yashraj@gmail.com'); //change in original value 
// creating a new instance of User object;
const Info3 = new User('Yash Rajput', 19, 'rajputaysh@gmail.com'); //(new keyword) change in copy value insted of original value
console.log(Info);
// console.log(Info3);