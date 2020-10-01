class Assassin extends Character {
    state = "playing";
    healthPoints = 6;
    mana = 20;
    damage = 6;
    isShadowHit = false;

    takeDamage(damage_taken) {
        console.log(this.isShadowHit)
        const effectivDamage = this.isShadowHit ? 0 : damage_taken;
        if (effectivDamage == 0)
            console.log(`SYSTEM CALL: STEALTH MODE ACTIVATE CANNOT TAKE DAMAGE`);
        super.takeDamage(effectivDamage);
    }

    // immune next round, deal 7damage if not killing loose 7 damage points, cost 20mana
    ShadowHit = (victim) => {
        this.isShadowHit = false;
        if (this.mana >= 20 && this.damage >= 7) {
            this.isShadowHit = true;
            this.mana -= 20;
            console.log(`${this.name} SUPER POWER SHADOWHIT UNLEASHED!!!`);
            this.dealDamage(victim);
            if (victim.state != "loser") {
                this.damage = 0;
            }
        } else {
            console.log(`You dont have enough mana ${this.mana}`);
        }

    }
}