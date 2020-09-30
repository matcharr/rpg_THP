class Character {
    state
    mana
    damage
    healthPoints
    constructor(name) {
        this.name = name
    }

    shows_tate = () => {
        console.log(`${this.name} have ${this.healthPoints} life points and ${this.mana} mana!`)
    }

    // if u are killed, status = looser and healthPoints = 0 
    // else just show state
    takeDamage = (damage_taken) => {
        if ((this.healthPoints -= damage_taken) >= 0) {
            this.shows_tate()
        } else {
            this.healthPoints = 0
            this.state = "loser"
            console.log(`Player${this.name} Killed !`)
        }
    }

    // deal damage and add 20 mana if u kill
    dealDamage = (victim) => {
        victim.takeDamage(this.damage)
        if (victim.healthPoints < 1) {
            this.mana += 20
        }
    }
}