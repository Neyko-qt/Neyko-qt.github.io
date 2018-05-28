/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(1);




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
  button.style.backgroundColor = __WEBPACK_IMPORTED_MODULE_0__config_js__["a" /* buttonColor */];
}

// Get currency value from config.js and set it on span with currency. Only if value = 'ryb', 'byn', 'RUB', or 'BYN';

function changeCurrency(fields) {
  if (__WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* currencyValue */] === 'rub' || __WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* currencyValue */] === 'byn' || __WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* currencyValue */] === 'RUB' || __WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* currencyValue */] === 'BYN') { 
    for (var i = 0; i < fields.length; ++i) {
      fields[i].textContent = __WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* currencyValue */];
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




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buttonColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return currencyValue; });


var buttonColor = "Green"; // change color of button
var currencyValue = "BYN"; // change currency value





/***/ })
/******/ ]);