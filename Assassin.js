class Assassin extends Character {
    state = "playing"
    healthPoints = 6
    mana = 20
    damage = 7
    isShadowHit = false

    takeDamage = (damage_taken) => {
        const effectivDamage = this.isShadowHit ? 0 : damage_taken
        super.takeDamage(effectivDamage)
    }

    // immune next round, deal 7damage if not killing loose 7damage points, cost 20mana
    ShadowHit = (victim) => {
        if (this.mana -= 20 > 0) {
            this.dealDamage(victim)
            if (victim.state != "loser") {
                damage -= 7
                this.isShadowHit = true
            }
        } else {
            console.log("You dont have enough mana")
        }
    }
}
// TODO: victim or this.name i'm not sure