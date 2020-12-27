"use strict";

var clickBtn = document.querySelector('.click_icon');
;
var midFigure = document.getElementById('middle_bg');
var allFigures = document.querySelectorAll('.image_container img');
var counter = 0; // add click event

clickBtn.addEventListener('click', function (evt) {
  var click = evt.target;
  counter++;
  midFigure.style.height = 24 + '%';
  midFigure.style.top = 10 + '%'; // reset counter same item double click & hide element

  if (counter === 2) {
    midFigure.style.display = 'none';
    evt.target.style.display = 'none';
    counter = 0;
  }
});