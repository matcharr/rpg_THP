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
        console.log(`it's turn ${this.turnLeft}`)
    }
}

//TODO: dont know if this is useless
//const character = new Character();
//const my_game = new Game();

const assassin = new Assassin("Carl");
const berzerker = new Berzerker("Draven");
const fighter = new Fighter("Grace");
const monk = new Monk("Moana");
const paladin = new Paladin("Ulder");
const wizard = new Wizard("Kenny");
const rentagirlfriend = new RentAGirlfriend("Chizuru");

//Showing all characters state
assassin.shows_state()
berzerker.shows_state()
fighter.shows_state()
monk.shows_state()
paladin.shows_state()
wizard.shows_state()
rentagirlfriend.shows_state()

//TODO: Testing dealDamage ALL DONE ISSUE WHEN ATTACKING ASSASSIN

/*
assassin.dealDamage(monk)
*/

//TODO: Testing Super power Assassin IMMUNITY TO FIX

/*
assassin.ShadowHit(monk)
assassin.shows_state()
berzerker.dealDamage(assassin)
assassin.shows_state()
*/


//TODO: Testing Super power Bezerker    ALL DONE

/*
berzerker.Rage()
berzerker.shows_state()
berzerker.Rage()
berzerker.shows_state()
berzerker.Rage()
berzerker.shows_state()
berzerker.Rage()
berzerker.shows_state()
berzerker.dealDamage(monk)
*/

//TODO: Testing Super power Monk        ALL DONE

/*
monk.Heal()
monk.shows_state()
monk.Heal()
monk.shows_state()
monk.Heal()
monk.shows_state()
monk.Heal()
monk.shows_state()
monk.Heal()
monk.shows_state()
*/

//TODO: Testing Super power Fighter  SAME ISSUE AS ASSASSIN

/*
fighter.DarkVision(monk)
assassin.ShadowHit(fighter)
*/


//TODO: Testing Super power Paladin
/*
paladin.HealingLighting(monk)
paladin.shows_state()
paladin.HealingLighting(monk)
paladin.shows_state()
paladin.dealDamage(monk)
*/

//TODO: Testing Super power Wizard

/*
wizard.Fireball(monk)
wizard.shows_state()
wizard.Fireball(monk)
wizard.shows_state()
*/

//TODO: Testing Super power RentAGiflfriend
rentagirlfriend.Homerun(monk)
rentagirlfriend.shows_state()
rentagirlfriend.Homerun(monk)
rentagirlfriend.shows_state()