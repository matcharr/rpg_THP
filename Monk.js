class Monk extends Character {
    state = "playing"
    healthPoints = 8
    mana = 200
    damage = 2

    // heal 8healthPoints, cost 25mana
    Heal = () => {
        return (this.mana -= 25 > 0) ? (this.healthPoints += 8) : console.log("You dont have enough mana")
    }
}