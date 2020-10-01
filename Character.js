//TODO: winner loser playing  i need to check them
class Character {
    state;
    mana;
    damage;
    healthPoints;
    constructor(name) {
        this.name = name;
    }

    shows_state = () => {
        console.log(`STATUS OF: ${this.name} have ${this.healthPoints} life points, ${this.damage} damage power and ${this.mana} mana left!`);
    }

    // if u are killed, status = looser and healthPoints = 0 
    // else just show state
    takeDamage(damage_taken) {
        let temporary = this.healthPoints;
        if ((this.healthPoints -= damage_taken) > 0) {
            console.log(`${this.name} took ${damage_taken} damage points!!!!`);
            this.shows_state();
        } else {
            console.log(`${this.name} took ${temporary} damage points!!!!`);
            this.healthPoints = 0;
            this.state = "loser";
            console.log(`${this.name} couldn't support the damage and got killed!`);
        }
    }

    // deal damage and add 20 mana if u kill
    dealDamage = (victim) => {
        console.log(`${this.name} is Attacking be CAREFULL!!!!`);
        console.log(victim.isShadowHit)
        victim.takeDamage(this.damage);
        if (victim.healthPoints < 1) {
            this.mana += 20;
        }
    }
}