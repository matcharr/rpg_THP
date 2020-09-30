class Wizard extends Character {
    state = "playing"
    healthPoints = 10
    mana = 200
    damage = 2

    //deal 7 damage cost 25 mana
    Fireball = (victim) => {
        if (this.mana >= 25) {
            this.damage = 7
            this.mana -= 25
            this.dealDamage(victim)
        } else {
            console.log(`You dont have enough mana ${this.mana}`)
        }
        this.damage = 2
    }
}