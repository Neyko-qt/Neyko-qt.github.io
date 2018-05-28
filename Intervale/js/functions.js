'use strict'

import {buttonColor, currencyValue} from '../config.js'

var submitButton = document.getElementById('submit-button');   // button selector
var currencyFields = document.querySelectorAll('.currency-field');  // currency fields selector
var senderCardNumberField = document.getElementById('sender-card-number');  // sender card number selector
var receiverCardNumberField = document.getElementById('receiver-card-number');  // reveiver card number selector
var senderCardTypeImg = document.querySelector('.sender-card-type');   //  img of sender card type 
var receiverCardTypeImg = document.querySelector('.receiver-card-type'); //  img of receiver card type 

changeButtonColor(submitButton); 
changeCurrency(currencyFields);

receiverCardNumberField.addEventListener ('input', function() {
  changeTypeofCard (receiverCardNumberField, receiverCardTypeImg);
});

senderCardNumberField.addEventListener ('input', function() {
  changeTypeofCard (senderCardNumberField, senderCardTypeImg);
});


// Get color value from config.js and set it on backgroundColor of button.

function changeButtonColor(button) {
  button.style.backgroundColor = buttonColor;
}

// Get currency value from config.js and set it on span with currency. Only if value = 'ryb', 'byn', 'RUB', or 'BYN';

function changeCurrency(fields) {
  if (currencyValue === 'rub' || currencyValue === 'byn' || currencyValue === 'RUB' || currencyValue === 'BYN') { 
    for (var i = 0; i < fields.length; ++i) {
      fields[i].textContent = currencyValue;
    }
  }
}

// we use eventlistener on input. we change src of img, when first digit on input = 4,,5 or 6.

function changeTypeofCard (numberField, cardTypeImg){
  if (numberField.value[0] == '4') {
    cardTypeImg.src = './img/visa.svg';
  } else if (numberField.value[0] == '5') {
    cardTypeImg.src = './img/mastercard.svg';
  } else if (numberField.value[0] == '6') {
    cardTypeImg.src = './img/maestro.svg';
  } else {
    cardTypeImg.src = '';
  }
}


