const objOne = new Object();
// console.log(objOne); //sameOutput

const objTwo = {};
// console.log(objTwo); //sameOutput

// Nested array
const  User = {
    name: "Yash",
    age: 18,
    location: {
        state: "Madhya Pradesh",
        city: "Indore",
        house_no: {
            block: "B2",
            flat_no: 108,
        }
    }
}

// console.log(User.location.house_no.block); // access  nested object property - B2
// console.log(User.hasOwnProperty('name'));// true, checks property is presetn  or not in the user object
// console.log(Object.keys(User)); // access all the keys of User Object
// console.log(Object.values(User)); // access all the values of User Object
console.log(Object.entries(User)); //returns all the objec properties into key-value pairs form into array [["name","Yash"], ["age",18]], < like this

// NOTE :: if we write the object key name same then it will override and return  only last object value.
const UserOne = { name1: "Yash", ID1: 101 };
const UserTwo = { name2: "Ravi", ID2: 102 };
const UserThree = { name3: "Ram", ID3: 103 };

// const UserInfo = { ...UserOne, ...UserTwo, ...UserThree }; //merge multiple  objects into one using spread operator

//Another way to merge multiple objects into one ,
// The first parameter is empty {}(empty object) and the other parameters are objects which we want to merge with it . using Object.assign() method,
// if we can not give emptyObject then all the objects are assign into first parameter  object . means UserOne object,
// The first parmeter are the Target and the other  parameters will be merged with target which is called source.
const UserInfo = Object.assign({}, UserOne, UserTwo, UserThree); 
// console.log(UserInfo);

// API data structure
const  userData = [
    {
        name: "Yash",
        age: 18,
    },
    {
        name: "Ravi",
        age: 20,
    },
    {
        name: "Ram",
        age: 19,
    }
]

// console.log(userData); //returns the data into the array formate.
// console.log(userData[0]); // returns first object of the array.
// console.log(userData[1].name); //return  second object's name property.