/* 
getter and setter used to get the value ,with the help of 'get'
and set the change value with the help of 'set'
but it not change in original value   
*/

class Game {
    constructor(Name, size){
        this.Name = Name;
        this.size = size;
        // console.log(this);
    }

    get size(){
        // console.log("get : ",this);
       return `${this._size} MB`
    }

    set size(value){
        // console.log("set : ",this);
         this._size = value;
    }
}

const game = new Game('COD', '250');
// getter and setter automatically convert property to method, in this example 'size'
// so if we give game.size that means it calls the size method.
console.log(game.size);
console.log(game);