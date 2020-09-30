class Game {
    constructor(turnLeft = 10) {
            this.turnLeft = turnLeft
        }
        /*
         ** TODO: remove a turn
         */
    skipTurn = () => {
        if (this.turnLeft > 0) {
            this.turnLeft -= 1
        } else if (this.turnLeft == 1) {
            console.log("last round")
        } else {
            console.log("Game End")
        }
    }
}