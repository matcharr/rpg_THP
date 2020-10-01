class Game extends Character {
    turnLeft
    /*
     ** TODO: check if one player left before 10 turn end
     */

    skipTurn = () => {
        if (this.turnLeft > 0) {
            this.turnLeft -= 1
        } else if (this.turnLeft == 0 && this.state != "loser") {
            this.state = "winner"
        }
        return this.turnLeft
    }

    startTurn = () => {
        this.restCharacter();
        this.setPreFight();
        console.log(`it's turn ${this.turnLeft}`)
    }


    restCharacter = (Character) => {
        switch (Character) {
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

    //TODO: random number of Character
    setFight = (Character) => {
        const chooseRandomly = Math.floor(Math.random(Character) * Math.floor(7));
        switch (chooseRandomly) {
            case 0:
                assassin
                break;
            case 1:
                berzerker
                break
            case 2:
                fighter
                break;
            case 3:
                monk
                break;
            case 4:
                paladin
                break;
            case 5:
                wizard
                break;
            case 6:
                rentagirlfriend
                break;
        }
    }
}