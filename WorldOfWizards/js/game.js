import Player from "./player";
import Zombie from "./zombie";
import helper from "./helper";
import Ability from "./ability";
import {
    zombieDescription
} from "./arrays";

class Game {
    constructor() {
        this.btnSelectedAbility;
        this.player;
        this.zombie;
        this.ability;
    }

    start() {
        document.querySelector('.registration').style.display = "none";
        document.querySelector('.mainGame').style.display = "block";
        const playerName = document.querySelector('input').value;

        this.player = new Player(playerName);
        this.player.createPlayer();

        this.zombie = new Zombie(this.player.round);
        this.zombie.createZombie(this.player);

        this.ability = new Ability();
        this.btnSelectedAbility = this.ability.createAbility.bind(this.ability);
        btnSelectedAbility.addEventListener('click', this.btnSelectedAbility);
        document.querySelector('.abilities').addEventListener('click', () => {
            this.ability.getType(event)
        });
        btnAnswer.addEventListener('click', () => {
            this.setAnswer()
        });
    }

    setAnswer() {
        if (this.ability.task.type === "dragAndDrop") {
            this.setDragAndDropAnswer();
        }
        this.ability.task.answerValue = document.getElementById('answerInput').value.toString();
        document.querySelector('.taskSection').style.display = "none";
        btnSelectedAbility.removeEventListener('click', this.btnSelectedAbility);
        this.ability.cast(this.player, this.zombie);
        setTimeout(this.checkHealth.bind(this), 2000);
    }

    setDragAndDropAnswer() {
        const ul = document.querySelector('.sortable');
        let tmpAnswer = '';
        Array.prototype.forEach.call(ul.children, (item) => {
            tmpAnswer += item.innerText;
        });
        document.getElementById('answerInput').value = tmpAnswer;
        document.getElementById('answerInput').style.display = "inline-block";
    }

    checkHealth() {
        if (!this.zombie.checkHealth()) {
            this.zombie.die();
            setTimeout(() => this.zombie.stopDie(), 1999);
            setTimeout(() => this.createNewZombie(), 2000);
        } else if (!this.player.checkHealth()) {
            this.player.die();
            setTimeout(() => this.finish(), 3000);
        } else {
            btnSelectedAbility.addEventListener('click', this.btnSelectedAbility);
        }
    }

    createNewZombie() {
        const zombiePicture = document.querySelector('.zombiePicture');

        this.player.round += 1;
        this.zombie = new Zombie(this.player.round);
        this.zombie.createZombie(this.player);
        this.player.health = Math.min(this.player.health + helper.randomInterval(10, 15 + this.player.round), this.player.healthBar);
        this.player.createHealthBar();
        btnSelectedAbility.addEventListener('click', this.btnSelectedAbility);
    }

    finish() {
        document.querySelector('.mainGame').style.display = "none";
        document.querySelector('.scoreTable').style.display = "block";
        localStorage.setItem('game' + Date.now(), this.player.name + ',' + (this.player.round));
        helper.drawScoreTable();
    }

}

export default Game;