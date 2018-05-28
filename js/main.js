// Check form fields

let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');

let validName = function(str) {
  if (str) {
    let pattern = /[^a-zA-ZА-Яа-я\s\-]/;
    let value = str.match(pattern);
    return value ? false : true;
  }
};

let nameHandler = function() {
  if (validName(this.value)) {
    this.setAttribute('class', 'valid');
  } else {
    this.setAttribute('class', 'invalid');
  }
};

let getEmail = function(e_mail) {
  let pattern = /[a-zA-Z0-9-_\.]+@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/;
  let result = e_mail.match(pattern);
  return result ? true : false;
};

email.addEventListener('input', function() {
  if (getEmail(this.value)) {
    this.setAttribute('class', 'valid');
  } else {
    this.setAttribute('class', 'invalid');
  }
});

firstName.addEventListener('input', nameHandler);
lastName.addEventListener('input', nameHandler);

// submit form values to LocalStorage

let submit = document.getElementById('submit');
let form = document.querySelector('.form');
let rules = document.querySelector('.rules');

topPlayers = window.localStorage.getItem('topPlayers');

let topTableSection = document.querySelector('.top-section');
let topTable = document.querySelector('.top-table');
if (topPlayers) {
  let timesArr = topPlayers.match(/\d+/gi);
  let names = topPlayers.match(/[a-zA-ZА-Яа-я]+/gi);

  let timesArrMap = new Map();

  for (let i = 0; i < names.length, i < timesArr.length; i++) {
    timesArrMap.set(timesArr[i], names[i]);
  }

  timesArr.sort((a, b) => a - b);
  for (let i = 0; i < timesArr.length; i++) {
    player = document.createElement('div');
    player.classList.add('player-intop-div');
    player.score = timesArr[i];
    player.name = timesArrMap.get(timesArr[i]);

    let name = document.createElement('span');
    name.classList.add('player-intop-name');
    name.textContent = player.name;
    player.appendChild(name);

    let score = document.createElement('span');
    score.classList.add('player-intop-score');
    score.textContent = player.score + 'sec';
    player.appendChild(score);

    topTable.appendChild(player);
  }
} else {
  var topPlayers = '';
}

form.classList.remove('hide');

localStorage.clear();
submit.addEventListener('click', function() {
  if (validName(firstName.value) && validName(lastName.value) && getEmail(email.value)) {
    let name = firstName.value + '' + lastName.value;
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email.value);
    // localStorage.setItem('' + firstName.value + ' ' + lastName.value, '' + 0);
    email.value = '';
    firstName.value = '';
    lastName.value = '';

    firstName.classList.remove('valid');
    lastName.classList.remove('valid');
    form.classList.add('hide');
    topTableSection.classList.add('hide');
    shirtsSection.classList.remove('hide');
  }
});

// Select shirt of cards

let shirtsSection = document.querySelector('.shirts-section');
shirtsSection.classList.add('hide');
let shirtSelect = document.getElementById('shirt-select');
let shirtOfCard = 'firstCard';
let difficultSection = document.querySelector('.difficulty');
difficultSection.classList.add('hide');

shirtSelect.addEventListener('click', function(e) {
  if (e.target.nodeName == 'IMG') {
    if (e.target.parentNode.getAttribute('id') == 'firstCard') {
      e.target.parentNode.classList.toggle('cl');
      shirtOfCard = e.target.parentNode.getAttribute('id');
    } else if (e.target.parentNode.getAttribute('id') == 'secondCard') {
      e.target.parentNode.classList.toggle('cl');
      shirtOfCard = e.target.parentNode.getAttribute('id');
    } else if (e.target.parentNode.getAttribute('id') == 'thirdCard') {
      e.target.parentNode.classList.toggle('cl');
      shirtOfCard = e.target.parentNode.getAttribute('id');
    }

    shirtsSection.classList.add('hide');
    difficultSection.classList.remove('hide');
  }
});

// Change difficult of game
let startGameButton = document.getElementById('start-game');
let difficult = document.getElementById('difficult');

difficult.addEventListener('change', function(e) {
  difficultSection.classList.add('hide');
  startGameButton.classList.remove('hide');
});

// Game deck

let textDiv = document.createElement('div');

let timer = document.createElement('div');
document.body.children[0].appendChild(textDiv);
document.body.children[0].appendChild(timer);
textDiv.classList.add('timer');
timer.classList.add('timer');

let interval;
let second = 0;

function startTimer() {
  interval = setInterval(function() {
    timer.innerHTML = second + ' secs';
    second++;
  }, 1000);
}

// When cards matched

let cardsToHide = function(firstClickOnCard, secondClickOnCard, arr) {
  let times = setInterval(function() {
    firstClickOnCard.style.opacity -= 0.01;
    secondClickOnCard.style.opacity -= 0.01;

    if (firstClickOnCard.style.opacity < 0) {
      arr = arr.splice(0, 2);
      clearInterval(times);
    }
  }, 10);
};

// When cards unmatched

let cardsToBack = function(firstClickOnCard, secondClickOnCard) {
  firstClickOnCard.classList.toggle('active');
  firstClickOnCard.classList.toggle('shirt-' + shirtOfCard[0]);
  secondClickOnCard.classList.toggle('active');
  secondClickOnCard.classList.toggle('shirt-' + shirtOfCard[0]);
};

// To shuffle cards
Array.prototype.shuffle = function() {
  for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this[i], this[j]] = [this[j], this[i]];
  }
  return this;
};

//  Random index add to image number
let addCardsToDeck = function(array, element) {
  for (let i = 0; i < array.length; i++) {
    cards.appendChild(element.cloneNode());
    cards.lastElementChild.setAttribute('class', 'img' + array[i]);
    cards.lastElementChild.setAttribute('id', array[i]);
    cards.lastElementChild.classList.add('shirt-' + shirtOfCard[0]);
  }
};

let cards = document.createElement('ul');
let clickFlag = true;
let firstClick;
let secondClick;

startGameButton.addEventListener('click', function(e) {
  document.body.children[0].appendChild(cards);
  document.body.children[0].children[0].classList.add('hide');

  let arr;
  let li = document.createElement('li');

  if (e.target.nodeName == 'BUTTON') {
    switch (difficult.value) {
      case 'easy':
        arr = ['0', '0', '1', '1', '2', '2', '3', '3'];
        arr.shuffle();
        addCardsToDeck(arr, li);
        break;

      case 'medium':
        arr = ['0', '0', '1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7'];
        arr.shuffle();
        addCardsToDeck(arr, li);
        break;

      case 'hard':
        arr = [
          '0',
          '0',
          '1',
          '1',
          '2',
          '2',
          '3',
          '3',
          '4',
          '4',
          '5',
          '5',
          '6',
          '6',
          '7',
          '7',
          '8',
          '8',
          '9',
          '9',
          '10',
          '10',
          '11',
          '11'
        ];
        arr.shuffle();
        addCardsToDeck(arr, li);
        break;
    }

    timer.innerHTML = '0 secs';
    textDiv.innerText = 'Your time:';

    startTimer();

    cards.addEventListener('click', function(e) {
      if (e.target.nodeName == 'LI' && !e.target.classList.contains('active')) {
        e.target.classList.toggle('active');
        e.target.classList.toggle('shirt-' + shirtOfCard[0]);

        setTimeout(function() {
          if (clickFlag) {
            firstClick = e.target;
          } else {
            secondClick = e.target;
          }
          clickFlag = !clickFlag;
          if (clickFlag) {
            firstClick.getAttribute('id') == secondClick.getAttribute('id')
              ? cardsToHide(firstClick, secondClick, arr)
              : cardsToBack(firstClick, secondClick);
          }

          if (arr.length == 2) {
            cards.classList.add('hide');

            let win = document.getElementById('win');
            win.classList.remove('hide');

            clearInterval(interval);
            let fullSeconds = second - 1;
            name = window.localStorage.getItem('userName');
            window.localStorage.setItem(`topPlayers`, topPlayers + `${name}:${fullSeconds};`);
          }
        }, 1000);
      }
    });
  }
});
