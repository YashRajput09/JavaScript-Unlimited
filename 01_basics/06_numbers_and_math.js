const num = 123;
// console.log(num);

const score = new Number(100) //new keyword is used to create an object of a class,
// console.log(score);           //  in this case the Number class

// Number methods
let newStr = score.toString()
// console.log(typeof newStr);
// console.log(newStr);
// console.log(score.toFixed(2));   // returns string with two decimal places
                                // if no argument provided it will return whole number
// console.log(score.toLocaleString());

const otherNumber = 123.856789;
// console.log(otherNumber.toPrecision(4)); //123.5, display 4 digits because toPrecision(4) and it converts after decimal value nearest number
// console.log(otherNumber.toPrecision(3)); //124  (rounds up), beacause  we have more than 3 digits after point
// console.log(otherNumber.toPrecision(2)); //1.2e+2, because we set in parameter and provide 3 digits in otherNumber(123.856789)

const rupees = 100000000;
// console.log(rupees.toLocaleString());//100,0000,000, By defaut it gives output according to US standard
// console.log(rupees.toLocaleString('en-IN'));//10,00,00,000 ('en-IN') set Indian standard

// ************** Math library *****************

// console.log(Math);
// console.log(Math.abs(-4)); // give abstract value positive value
// console.log(Math.ceil(12.3)); // round up to nearest integer above
// console.log(Math.floor(12.9));// round  down to nearest integer below
// console.log(Math.PI); // 3.14 PI value
// console.log(Math.round(12.59)); // rounds to the closest integer

// console.log(Math.random()); // generates random float between  0 and 1 inclusive of  1
// console.log(Math.random() * 10);//now generates value between 0 to 9  inclusive of  9
// console.log(Math.floor(Math.random() * 10)); //0 to 9
// console.log(Math.floor(Math.random() * 10) + 1); //1 to 9

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min ); // generate random number between min and max