import Game from "./game.js";

let game = new Game();
let bindedGame = game.start.bind(game);
btnStart.addEventListener('click', bindedGame);