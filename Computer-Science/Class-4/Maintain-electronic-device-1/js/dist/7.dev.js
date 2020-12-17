"use strict";

function natureGames() {
  var _this = this;

  var DragGameChilds1 = document.querySelectorAll('.DragGame--childs1');
  var mydrag = document.querySelectorAll('.myDrag');
  var DragGameParent = document.querySelectorAll('.DragGame--Parent');
  var completedBtn = document.getElementById('completedGame');
  var resetBtn = document.getElementById('resetBtn');
  $(DragGameChilds1).on('dragstart', function (e) {
    return _this.dragStart(e);
  });
  $(DragGameChilds1).on('dragend', function (e) {
    return _this.dragEnd(e);
  });
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = mydrag[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var drag = _step.value;
      drag.addEventListener('dragover', function (e) {
        return _this.dragOver(e);
      });
      drag.addEventListener('drop', function (e) {
        return _this.dragDrop(e);
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    mydrag.forEach(function (w) {
      w.setAttribute('data-class', w.getAttribute('class'));
    });
    DragGameChilds1.forEach(function (w) {
      w.setAttribute('data-class', w.getAttribute('class'));
    });
  });

  this.dragOver = function (e) {
    e.preventDefault();
  };

  this.dragStart = function (e) {
    setTimeout(function () {
      e.target.className += " draggedElement";
    }, 0);
  };

  this.dragEnd = function (e) {
    var elClassName = e.target.getAttribute('data-class');
    e.target.className = elClassName;
  };

  var isDataPlace = false;

  this.dragDrop = function (e) {
    e.preventDefault();
    var drag = document.querySelector('.draggedElement');
    ESrc = e.target.src;

    if (drag.getAttribute('data-place') == 1) {
      e.target.src = "../../../img/gakvetilebi/Computer-Science/Class-4/Maintain-electronic-device-1/cs-4-1-7-game-img-containerGamtari1.svg";
      isDataPlace = true;
    }

    if (drag.getAttribute('data-place') == 2) {
      e.target.src = "../../../img/gakvetilebi/Computer-Science/Class-4/Maintain-electronic-device-1/cs-4-1-7-game-img-containerGamtari2.svg";
      isDataPlace = true;
    }

    if (drag.getAttribute('data-place') == 3) {
      e.target.src = "../../../img/gakvetilebi/Computer-Science/Class-4/Maintain-electronic-device-1/cs-4-1-7-game-img-containerGamtari3.svg";
      isDataPlace = true;
    }

    if (drag.getAttribute('data-place') == 4) {
      e.target.src = "../../../img/gakvetilebi/Computer-Science/Class-4/Maintain-electronic-device-1/cs-4-1-7-game-img-containerGamtari4.svg";
      isDataPlace = false;
    }

    if (drag.getAttribute('data-place') == 5) {
      e.target.src = "../../../img/gakvetilebi/Computer-Science/Class-4/Maintain-electronic-device-1/cs-4-1-7-game-img-containerGamtari5.svg";
      isDataPlace = true;
    }

    if (drag.getAttribute('data-place') == 6) {
      e.target.src = "../../../img/gakvetilebi/Computer-Science/Class-4/Maintain-electronic-device-1/cs-4-1-7-game-img-containerGamtari6.svg";
      isDataPlace = false;
    }
  };

  this.completGame = function (e) {
    if (isDataPlace) {
      _this.successPage();
    }

    completedBtn.setAttribute('disabled', 'true');
  };

  this.successPage = function () {
    location.href = 'game-success-8.html';
  };

  this.init = function (e) {
    document.getElementById('defaultImage').src = "../../../img/gakvetilebi/Computer-Science/Class-4/Maintain-electronic-device-1/cs-4-1-7-game-img-containerEmpty.svg";
    completedBtn.removeAttribute('disabled');
  };

  resetBtn.addEventListener('click', function () {
    return _this.init();
  });
  completedBtn.addEventListener('click', function () {
    return _this.completGame();
  });
}

var naturegame = new natureGames();