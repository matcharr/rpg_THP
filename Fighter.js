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

    // deal 5 damage, next turn take 2 damage less, cost 20 mana
    DarkVision = (victim) => {
        this.isDarkVision = false
        if (this.mana >= 20) {
            this.mana -= 20
            this.damage = 5
            this.dealDamage(victim)
            this.isDarkVision = true
        } else {
            console.log(`You dont have enough mana ${this.mana}`)
        }
        this.damage = 4
    }
}