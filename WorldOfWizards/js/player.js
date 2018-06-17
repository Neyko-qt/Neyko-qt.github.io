class Player {
    constructor(name) {
        this.name = name;
        this.healthBar = 100;
        this.health = this.healthBar;
        this.round = 0;
        this.attackAudio = new Audio();
        this.audioHeal = new Audio();
    }

    createPlayer() {
        document.querySelector('.playerName').innerHTML = this.name;
        this.createHealthBar();
        this.createAudio();
    }

    createHealthBar() {
        document.querySelector('.playerHealthCount').style.width = this.health / this.healthBar * 100 + "%";
        document.querySelector('.playerHealthCount').innerHTML = this.health;
    }

    createAudio() {
        this.attackAudio.preload = 'auto';
        this.attackAudio.volume = 1;
        this.attackAudio.src = './audio/playerAttack.mp3';
        this.audioHeal.preload = 'auto';
        this.audioHeal.volume = 1;
        this.audioHeal.src = './audio/playerHeal.mp3';
    }

    attack() {
        this.attackAudio.play();
        document.querySelector('.playerPicture').classList.remove('playerStay');
        document.querySelector('.playerPicture').classList.add('playerAttack');
    }

    stopAttack() {
        document.querySelector('.playerPicture').classList.remove('playerAttack');
        document.querySelector('.playerPicture').classList.add('playerStay');
    }

    healing() {
        this.audioHeal.play();
        document.querySelector('.playerPicture').classList.remove('playerStay');
        document.querySelector('.playerPicture').classList.add('playerHeal');
    }

    stopHealing() {
        document.querySelector('.playerPicture').classList.remove('playerHeal');
        document.querySelector('.playerPicture').classList.add('playerStay');
    }

    hurt() {
        document.querySelector('.playerPicture').classList.remove('playerStay');
        document.querySelector('.playerPicture').classList.add('playerHurt');
    }

    stopHurt() {
        document.querySelector('.playerPicture').classList.remove('playerHurt');
        document.querySelector('.playerPicture').classList.add('playerStay');
    }

    die() {
        document.querySelector('.playerPicture').classList.remove('playerStay');
        document.querySelector('.playerPicture').classList.add('playerDie');
    }

    checkHealth() {
        return this.health > 0;
    }


}

export default Player;