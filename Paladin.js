class Paladin extends Character {
    state = "playing"
    healthPoints = 16
    mana = 160
    damage = 3

    // deal 4 damage, heal 5healthPoints, cost 40 mana
    HealingLighting = (victim) => {
        if (this.mana >= 40) {
            this.damage = 4
            this.mana -= 40
            this.dealDamage(victim)
            this.healthPoints += 5
        } else {
            console.log(`You dont have enough mana ${this.mana}`)
        }
        this.damage = 3
    }
}