// In this code the one code is dependent on other code if any error in one code then the dependent code is 
// not run, or chance ti run code multiple time, so its hard to maintain the code 

const cart = ['shirt', 'paint', 'kurta'];

createOrder(cart, function(orderId){
    makePayment(orderId);
});

// here Promise are helps to write the code in simpler way and easy to understand

// Promise have three states 
//1. pending - At Initaial stage ,when the promise is nither fullfilled or nor rejectd
//2. fulfilled/resolved - The operation completed successfully.
//3. rejected - The operation failed.

// Two methods
// 1. then() : When the promise is fullfilled then what to do with the code. ex : perform operation on this code
// 2. catch() : When the promise is rejected them what to do. ex : diplay the error 


// create a new promise
const myPromise = new Promise((resolve, reject) =>{
    //asynchronous operation
    const randomNumber = Math.floor(Math.random() * 10) ;
    setTimeout(() =>{ 
        if(randomNumber > 5){
            resolve(randomNumber); //resolve the promise with a value
        } else{
            // console.log(" else here");
            reject(new Error("Random Number is too low")); //Reject the promise with a error    
        }
    }, 1000);
});

//consuming the promise
myPromise
    .then((result) =>{
        console.log(result);
    })
    .catch((error) =>{
        console.log(error.message);
    })