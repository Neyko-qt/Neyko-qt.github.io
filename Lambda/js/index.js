var calendarImage = document.querySelector('.fa-calendar');
var datePlaceholder = document.querySelector('.date-placeholder');
var dateInput = document.getElementById('date-input');


var hideInputElements = function() {
  calendarImage.style.display = 'none';
  datePlaceholder.style.display = 'none';
  this.type = 'date';
}

var showInputElements = function() {
  calendarImage.style.display = 'block';
  datePlaceholder.style.display = 'block';
  this.type = 'text';
}

var handler1 = function() {
  calendarImage.style.display = 'none';
}

dateInput.addEventListener("focus", hideInputElements);
dateInput.addEventListener("blur", showInputElements);
