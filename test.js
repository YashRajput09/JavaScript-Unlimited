// const foo = [1, 2, 3];
// const bar = foo;
// bar[0] = 4;
// console.log(foo);

// const foo = [1, 2, 3, 4];
// const [a, b, ...c] = foo;
// console.log(a, b, c);

// console.log(['10'] * ['10']); //100
// console.log(['10'] + ['10']); //1010

// const promise1 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve('promise 1');
//     }, 1000);
// });

// const promise2 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve('promise 2');
//     },2000); 
// });

// Promise.all([promise1, promise2])
// .then( value => {
//     console.log(value);
// });

let x = 0.1 + 0.2;
let y = 0.3;

console.log(x == y);