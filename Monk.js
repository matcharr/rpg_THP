class Monk extends Character {
    state = "playing"
    healthPoints = 7
    mana = 200
    damage = 2

    // heal 8healthPoints, cost 25mana
    Heal = () => {
        return (this.mana >= 25) ? ((this.healthPoints += 8) && (this.mana -= 25)) : console.log(`You dont have enough mana ${this.mana}`)
    }
}