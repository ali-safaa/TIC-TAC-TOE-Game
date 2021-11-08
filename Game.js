export default class Game {
    constructor(){
     this.turn = "X";
     this.board = new Array(9).fill(null)
    }
    nextTurn(){
        if(this.turn == "X"){
            this.turn = "O"
        }else {
            this.turn = "X"
        }
    }
    makeMove(i){
        if(this.endGame()){
            return;
        }
        if(this.board[i]){
            return;
        }
        this.board[i] = this.turn
        let WinningCombination = this.findWinningCombinations();
        if(!WinningCombination){
            this.nextTurn()
        }

    }

    findWinningCombinations(){
        const WinningCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [2,4,6],
            [0,4,9]
        ]

        for(const Combination of WinningCombinations){
            const [a,b,c] = Combination
            if(this.board[a]&& 
                (this.board[a] === this.board[b] && this.board[a] === this.board[c])){
                    return Combination
                }
        }
        return null;
    }
    endGame(){
        let WinningCombination = this.findWinningCombinations();
        if(WinningCombination){
            return true
        }else {
            return false
        }
    }
}