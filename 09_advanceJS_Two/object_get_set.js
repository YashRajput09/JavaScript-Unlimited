const esport = {
    _player: 'Yash Rajput',
    _game: 'FREEFIRE',

    get player(){
        return this._player.toUpperCase();
    },

    set player(value){
        this._player = value;
    }
}

console.log(esport);
console.log(esport.player);