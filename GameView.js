export default class GameView {
    constructor(){

    }
    updateBoard(game){
        this.updateTurn(game);
        const WinningCombination = game.findWinningCombinations();
        
        for(let i = 0; i < game.board.length; i++){
            const title = document.querySelector(`.board-title[data-index='${i}']`)
            title.textContent = game.board[i]
            title.classList.remove('title-winner')
            let titleType = game.board[i] == 'X' ? 
            'title-x' : 'title-o';
            title.innerHTML = `<span class="${titleType}">${game.board[i] ? game.board[i] : ""}</span>`

            if(WinningCombination && WinningCombination.includes(i)){
                title.classList.add("title-winner")
            }
        }
    }

    updateTurn(game){
        let playerX = document.querySelector(".player-x")
        let playerO = document.querySelector(".player-o")
        playerX.classList.remove('active')
        playerO.classList.remove('active')

        if(game.turn == "X"){
            playerX.classList.add('active')
        }else {
            playerO.classList.add('active')
        }
    }
}