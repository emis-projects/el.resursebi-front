"use strict";

function natureGames() {
  var _this = this;

  var sliderBlue = document.getElementById("myRangeBlue");
  var sliderRed = document.getElementById("myRangeRed");
  var imgeBlue = document.getElementById("imgeBlue");
  var imgeRed = document.getElementById("imgeRed");
  var resetBtn = document.getElementById('resetBtn');

  sliderBlue.oninput = function () {
    console.log(this.value); // imgeRed.style ="width: 19%; position: absolute; top: 11%; left: 50%; transform: translateX(-50%) scale(1);" 

    imgeRed.style.width = 200 + Number(-this.value) + "px";
    imgeBlue.style.width = 100 + Number(this.value) + "px";
    imgeBlue.style.right = '';
    imgeBlue.style.left += "50%";
    imgeBlue.style.marginLeft = Number(this.value) - 50 + "px";
    imgeRed.style.marginLeft = Number(this.value) - 50 + "px";
    sliderRed.value = this.value;
  };

  sliderRed.oninput = function () {
    console.log(this.value); //imgeBlue.style="width: 19%; position: absolute;top: 58%; left: 52%; transform: translateX(-50%) scale(1)";

    imgeBlue.style.width = 100 + Number(this.value) + "px";
    imgeRed.style.width = 200 + Number(-this.value) + "px";
    imgeBlue.style.right = '';
    imgeBlue.style.left += "50%";
    imgeRed.style.marginLeft = -50 + Number(this.value) + "px";
    imgeBlue.style.marginLeft = -100 + Number(this.value) + 40 + "px";
    sliderBlue.value = this.value;
  };

  this.init = function () {
    sliderBlue.value = _this.value;
    sliderRed.value = _this.value;
    imgeBlue.style = "width: 19%; height: 30%; position: absolute;top: 47%; left: 50%; transform: translateX(-50%) scale(1)";
    imgeRed.style = "width: 19%; height: 30%; position: absolute; top: 13.5%; left: 50%; transform: translateX(-50%) scale(1);";
  };

  resetBtn.addEventListener('click', function () {
    return _this.init();
  });
}

var naturegame = new natureGames();