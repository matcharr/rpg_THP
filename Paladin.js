class Paladin extends Character {
    state = "playing"
    healthPoints = 16
    mana = 160
    damage = 3

    // deal 4damage, heal 5healthPoints, cost 40 mana
    HealingLighting = (victim) => {
        if (this.mana -= 40 > 0) {
            this.dealDamage(victim)
            this.healthPoints += 5
        } else {
            console.log("You dont have enough mana")
        }
    }
}