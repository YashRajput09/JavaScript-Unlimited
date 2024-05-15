/* 
    lexical scope determines the accessibility of variables and functions with in a program.
    Global variables can be accessed from anywhere within the program, 
    while local variables can only be accessed within the function or block in which they are defined.
    The nested scope allows functions to access variables defined in parent functions, and 
    block scope allows variables to have limited accessibility within a block of code.
*/


function outer() {
    let outerVar = "Hey! I am outer";
    function inner() {
        console.log(outerVar); //because of lexical scope inner function can access outer function variables
    }
    inner();
}
// outer();

/**
 clousers function having access to the inner funciton even after the parent function has closed.
 In simple mean, even after the outer function(parent function) compelete their execution,
  inner function(clouser function) can access the variable of outer function 
 */

/*
 * Because when we return a clouser function it not only send their exeution context,
 *  its send whole lexical scope(whole outer function).
*/

function Game(){
    let gameName = "COD";
    function startGame(){
        console.log(`${gameName} is started`);
    }
    return startGame;
}

const startFunction = Game(); //this line capture the return function startGame
startFunction(); //this line executes the startGame function and print, COD is started
