class Berzerker extends Character {
    state = "playing"
    healthPoints = 8
    mana = 0
    damage = 4

    // add +1 damage for all the game, loose -1healthPoints, cost 0mana
    Rage = () => {
        this.damage += 1
        this.healthPoints -= 1
    }
}