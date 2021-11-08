import Game from "./Game.js";
import GameView from "./GameView.js"
let game = new Game();
let gameView = new GameView();

let title = document.querySelectorAll(".board-title")
let newGame = document.querySelector(".restart")

newGame.addEventListener('click', () => {
    startGame()
})

title.forEach(title =>
    title.addEventListener('click', () => {
       onClickTitle(title.dataset.index)
    })
    )
    function onClickTitle(i){
        game.makeMove(i)
        gameView.updateBoard(game)
    }
    
    function startGame(){
        game = new Game();
        gameView.updateBoard(game);
    }

    gameView.updateBoard(game)