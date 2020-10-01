class Game extends Character {
    turnLeft = 10
    currentPlayers = []
        /*
         ** TODO: check if one player left before 10 turn end
         */

    skipTurn = () => {
        if (this.turnLeft > 0) {
            this.turnLeft -= 1;
        } else if (this.turnLeft == 0 && this.state != "loser") {
            this.state = "winner";
        }
        return this.turnLeft;
    }

    startTurn = () => {
        this.restCharacter();
        this.setPreFight();
        console.log(`it's turn ${this.turnLeft}`);
    }

    // create players
    createPlayers = () => {
        this.currentPlayers = Array.from({ length: this.generateRandomNumber() }, () => {
            return createRandomCharacter();
        })
    }

    watchStats = () => {
        this.currentPlayers.forEach((player) => { player.shows_state() })
    }

    /*
    restCharacter = (character) => {
        switch (character) {
            case "Assassin":
                const assassin = new Assassin("Carl");
                break;
            case "Berzerker":
                const berzerker = new Berzerker("Draven");
                break
            case "Fighter":
                const fighter = new Fighter("Grace");
                break;
            case "Monk":
                const monk = new Monk("Moana");
                break;
            case "Paladin":
                const paladin = new Paladin("Ulder");
                break;
            case "Wizard":
                const wizard = new Wizard("Kenny");
                break;
            case "RentAGilfriend":
                const rentagirlfriend = new RentAGirlfriend("Chizuru");
                break;
                //default:                                                TODO:  usefull???
        }
    }
    */

    //TODO: random number of Character
    createRandomCharacter = () => {
        const chooseRandomly = Math.floor(Math.random() * Math.floor(7));
        switch (chooseRandomly) {
            case 0:
                return new Assassin("Carl");
            case 1:
                return new Berzerker("Draven");
            case 2:
                return new Fighter("Grace");
            case 3:
                return new Monk("Moana");
            case 4:
                return new Paladin("Ulder");
            case 5:
                return new Wizard("Kenny");
            case 6:
                return new RentAGirlfriend("Chizuru");
        }
    }
}