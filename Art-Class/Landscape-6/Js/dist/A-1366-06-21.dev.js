"use strict";

var clickBtn = document.querySelectorAll('.click_icon');
var leftFigure = document.getElementById('left_bg');
var rightFigure = document.getElementById('right_bg');
var midFigure = document.getElementById('middle_bg');
var allFigures = document.querySelectorAll('.image_container img');
var counter = 0;
var typeAr = ''; // add click event

clickBtn.forEach(function (elm) {
  elm.addEventListener('click', function (evt) {
    var click = evt.target;

    if (click.classList.contains('R')) {
      displayFn(); //check if prev. clicked item is event item or not
      // if not reset counter

      if (evt.target.dataset.type !== typeAr) {
        counter = 0;
      }

      typeAr = 'R';
      counter++;
      rightFigure.style.height = 50 + '%'; // reset counter same item double click & hide element

      if (counter === 2) {
        rightFigure.style.display = 'none';
        evt.target.style.display = 'none';
        counter = 0;
      }
    } else if (click.classList.contains('L')) {
      displayFn(); //check if prev. clicked item is event item or not
      // if not reset counter

      if (evt.target.dataset.type !== typeAr) {
        counter = 0;
      }

      typeAr = 'L';
      counter++;
      leftFigure.style.height = 50 + '%'; // reset counter same item double click & hide element

      if (counter === 2) {
        leftFigure.style.display = 'none';
        evt.target.style.display = 'none';
        counter = 0;
      }
    } else {
      displayFn(); //check if prev. clicked item is event item or not
      // if not reset counter

      if (evt.target.dataset.type !== typeAr) {
        counter = 0;
      }

      typeAr = 'M';
      console.log(evt.target.dataset.type);
      counter++;
      midFigure.style.height = 30 + '%'; // reset counter same item double click & hide element

      if (counter === 2) {
        midFigure.style.display = 'none';
        evt.target.style.display = 'none';
        counter = 0;
      }
    }
  });
}); //reset dysplay none and height for all images

function displayFn() {
  allFigures.forEach(function (elm) {
    elm.style.display = 'block';
    elm.style.height = '';
  });
  clickBtn.forEach(function (elm) {
    elm.style.display = 'block';
  });
}