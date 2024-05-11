// When a function contains a callback function then the callback functions contains a another callback function and so on
// this situation is called callback hell. in this situation its hard to maintain code reduce code readability
// simple mean Nesting of callback is called callback hell

const cart = ["paint", "shirt", "kurta"];

// createOrder(cart, function(orderId){
//     proceedToPayment(orderId, function(){
//         orderSummary(paymentInfo, function(){
//             updateWalletBalance();
//         })
//     })
// })

// Handle callback hell with PROMISE

// In this we attached multiple then() with one after one so it make code more readable and maintainable

createOrder(cart)
  .then(function (orderId) {
    proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    orderSummary(paymentInfo);
  })
  .then(function (price) {
    updateWalletBalance(price);
  });

//   NOTE : we can also handle this code with async and await 