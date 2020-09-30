class Berzerker extends Character {
    state = "playing"
    healthPoints = 8
    mana = 0
    damage = 4

    // add +1 damage for all the game, loose -1healthPoints, cost 0mana
    Rage = () => {
        if (this.healthPoints > 1) {
            this.damage += 1
            this.healthPoints -= 1
            console.log(`${this.name} SUPER POWER RAGE UNLEASHED!!!\nSYSTEM CALL: ${this.name} sacrify 1 life points.\nSYSTEM GRANT: 1 damage point for bravery`)
        } else
            console.log(`SYSTEM ALERT: ${this.healthPoints} life points left action REFUSED.\nDO U WANNA KILL URSELF GO DIE WITH PRIDE`)
    }
}