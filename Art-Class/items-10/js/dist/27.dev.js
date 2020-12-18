"use strict";

function artGame() {
  var _this = this;

  var checkmark = document.querySelectorAll('.checkmark');
  var completedBtn = document.getElementById('completedGame');
  var resetBtn = document.getElementById('resetBtn');
  $(checkmark).on('click', function (e) {
    return _this.clickMe(e);
  }); // this.clickMe = (e) => {
  //     e.target.parentElement.classList.add('active');
  // }
  // ჯეკო, if-else დავამატე //

  this.clickMe = function (e) {
    if (e.target.parentElement.classList.contains('active')) {
      e.target.parentElement.classList.remove('active');
    } else {
      e.target.parentElement.classList.add('active');
    }
  }; // ********//


  this.completGame = function () {
    var count = 0; // /console.log('complate')

    checkmark.forEach(function (element) {
      //console.log(element.parentElement.classList.contains('active'))
      if (element.parentElement.classList.contains('active')) {
        console.log('active', element.classList.contains('correct'));

        if (element.classList.contains('correct')) {
          //console.log('complate');
          count++;
        }
      }

      if (element.parentElement.classList.contains('active')) {
        if (element.classList.contains('noCorrect')) {
          //console.log(element.parentElement)
          count = 0;
          element.parentElement.classList.add('error');
        }
      }
    });

    if (count == 3) {
      _this.successPage();
    }

    completedBtn.setAttribute('disabled', 'true');
  };

  this.init = function (e) {
    checkmark.forEach(function (element) {
      $(element.parentElement).removeClass("error");
      $(element.parentElement).removeClass("active");
    }); //$( "p" ).removeClass( "error" )

    completedBtn.removeAttribute('disabled');
  };

  this.successPage = function () {
    location.href = 'game-success-27.html';
  };

  resetBtn.addEventListener('click', function () {
    return _this.init();
  });
  completedBtn.addEventListener('click', function () {
    return _this.completGame();
  });
}

var artgame = new artGame();