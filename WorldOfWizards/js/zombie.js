import helper from "./helper";
import {
    zombieDescription
} from "./arrays";

class Zombie {
    constructor(round) {
        this.round = round;
        this.name = Zombie.createName();
        this.healthBar = Zombie.generateHealth(this.round);
        this.health = this.healthBar;
        this.attackAudio = new Audio();
    }

    createZombie() {
        document.querySelector('.mainGame').classList.add(zombieDescription.bgLevel[this.round % zombieDescription.bgLevel.length]);
        document.querySelector('.mainGame').classList.remove(zombieDescription.bgLevel[(this.round - 1) % zombieDescription.bgLevel.length]);
        document.querySelector('.zombieName').innerHTML = this.name;
        document.querySelector('.counter').innerHTML = "round " + (this.round + 1);
        this.createHealthBar();
        this.createAudio();
    }

    createHealthBar() {
        document.querySelector('.zombieHealthCount').style.width = this.health / this.healthBar * 100 + "%";
        document.querySelector('.zombieHealthCount').innerHTML = this.health;
    }

    createAudio() {
        this.attackAudio.preload = 'auto';
        this.attackAudio.volume = 1;
        this.attackAudio.src = './audio/zombieAttack.mp3';
    }

    attack() {
        this.attackAudio.play();
        document.querySelector('.zombiePicture').classList.remove('zombieStay');
        document.querySelector('.zombiePicture').classList.add('zombieAttack');
    }

    stopAttack() {
        document.querySelector('.zombiePicture').classList.remove('zombieAttack');
        document.querySelector('.zombiePicture').classList.add('zombieStay');
    }

    hurt() {
        document.querySelector('.zombiePicture').classList.remove('zombieStay');
        document.querySelector('.zombiePicture').classList.add('zombieHurt');
    }

    stopHurt() {
        document.querySelector('.zombiePicture').classList.remove('zombieHurt');
        document.querySelector('.zombiePicture').classList.add('zombieStay');
    }

    die() {
        document.querySelector('.zombiePicture').classList.remove('zombieStay');
        document.querySelector('.zombiePicture').classList.add('zombieDie');
    }

    stopDie() {
        document.querySelector('.zombiePicture').classList.remove('zombieDie');
        document.querySelector('.zombiePicture').classList.add('zombieStay');
    }


    checkHealth() {
        return this.health > 0;
    }

    static createName() {
        const randomAdj = helper.randomValue(zombieDescription.adjective);
        const randomNoun = helper.randomValue(zombieDescription.noun);
        const randomName = helper.randomValue(zombieDescription.name);
        return randomAdj + ' ' + randomNoun + ' ' + randomName;
    }

    static generateHealth(round) {
        return (30 + round * 10 + helper.randomInterval(0, 10));
    }
}

export default Zombie;