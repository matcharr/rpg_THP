class RentAGirlfriend extends Character {
    state = "playing"
    mana = 30
    damage = 3

    // deal 5000000 damage all the game but leave's her with 1 life points , cost 30 mana
    Homerun = (victim) => {
        if (this.mana >= 30) {
            this.mana -= 30
            console.log(`${this.name} SUPER POWER HOMERUN UNLEASHED!!!`)
            this.damage = 5000000
            console.log(`ALERT WARNING!!!\nBUG SYSTEM INCOMING!!!!\nYOU OWE ME MONEY BITCH PAY NOW OR DIE!!!`)
            this.dealDamage(victim)
        } else {
            console.log(`You dont have enough mana ${this.mana}`)
        }
    }
}