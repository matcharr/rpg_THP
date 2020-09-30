class Fighter extends Character {
    state = "playing"
    healthPoints = 12
    mana = 40
    damage = 4
    isDarkVision = false

    takeDamage = (damage_taken) => {
        const effectivDamage = this.isDarkVision ? damage_taken - 2 : damage_taken
        super.takeDamage(effectivDamage)
    }

    // deal 5damage, next turn take 2 damage less, cost 20 mana
    DarkVision = (victim) => {
        if (this.mana -= 20 > 0) {
            this.dealDamage(victim)
            this.isDarkVision = true
        } else {
            console.log("You dont have enough mana")
        }
    }
}
// TODO: victim or this.name i'm not sure