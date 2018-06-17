import Task from "./task";
import helper from "./helper";

class Ability {
    constructor() {
        this.typeOfAbility;
        this.task;
    }

    createAbility() {
        document.querySelector('.abilityPage').style.display = "block";
    }

    getType(event) {
        this.typeOfAbility = event.target.getAttribute('id');
        document.querySelector('.abilityPage').style.display = "none";
        document.querySelector('.taskSection').style.display = "block";
        this.task = new Task();
        this.task.randomTask();
    }

    heal(player) {
        player.health = Math.min(player.health + helper.randomInterval(20, 25 + player.round * 5), player.healthBar);
        player.createHealthBar();
        player.healing();
        setTimeout(player.stopHealing, 2000);
    }

    attackEnemy(attackHero, targetOfAttack) {
        targetOfAttack.health = Math.max(targetOfAttack.health - helper.randomInterval(20, 25 + targetOfAttack.round), 0);
        targetOfAttack.createHealthBar();
        attackHero.attack();
        targetOfAttack.hurt();
        setTimeout(attackHero.stopAttack.bind(attackHero), 2000);
        setTimeout(targetOfAttack.stopHurt.bind(targetOfAttack), 2000);
    }

    cast(player, monster) {
        switch (this.typeOfAbility) {
            case 'attackAbility':
                this.task.wasSolved() ? this.attackEnemy(player, monster) : this.attackEnemy(monster, player);
                break;
            case 'healAbility':
                this.task.wasSolved() ? this.heal(player) : this.attackEnemy(monster, player);
                break;
            default:
                null;
        }

    }
}

export default Ability;