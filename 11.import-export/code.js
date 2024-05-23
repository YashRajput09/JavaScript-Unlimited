const obj = {blue : "OneLove", chaccha : "vidhyak hai hamare"}
const {chaccha} = obj;
console.log(chaccha);

const Game = {
    naame : "clash of clans",
    Info: {
        size: "1GB",
        type: "Multiplayer",
        team_required: {
            total_palyers: 4,
            age : "18+"
        }
    }
}

const {total_palyers} = Game.Info.team_required;
console.log(total_palyers);

let arr = ["Ajj", "gaadi", "tera", "bhai", "chalayga"];
const [,,,a] = arr;
console.log(a);

// export default Game;
export {obj, Game, arr};