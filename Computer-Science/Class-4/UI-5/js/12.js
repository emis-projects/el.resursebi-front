function game() {
  this.error = true;
  this.hrefElement = null;
  this.incriment = 0;

  // variables
  let dragElement1 = document.querySelectorAll(".DragGame—childs1");
  let dragElement2 = $(".DragGame—childs2");
  let resetel = document.querySelectorAll(".cs-4-5-div-12-game-icons-div");
  let resetBtn = document.getElementById("resetBtn");
  let completedGame = document.getElementById("completedGame");

  $(dragElement2).on("dragstart", (e) => this.dragStart(e));
  $(dragElement2).on("dragend", (e) => this.dragEnd(e));

  // Loop through empty boxes and add listeners
  for (const drag of dragElement1) {
    drag.addEventListener("dragover", (e) => this.dragOver(e));
    drag.addEventListener("drop", (e) => this.dragDrop(e));
  }

  var dragElement2MyArray = [];
  for (var i = 0; i < dragElement2.length; i++) {
    dragElement2MyArray.push(dragElement2[i]);
  }

  var dragElement1MyArray = [];
  for (var i = 0; i < dragElement1.length; i++) {
    dragElement1MyArray.push(dragElement1[i]);
  }

  document.addEventListener("DOMContentLoaded", () => {
    dragElement2MyArray.forEach((w) => {
      w.setAttribute("data-class", w.getAttribute("class"));
    });
  });

  // Drag Functions
  this.dragOver = (e) => {
    e.preventDefault();
  };

  // drag start
  this.dragStart = (e) => {
    setTimeout(() => {
      e.target.className = "draggedElement";
    }, 0);
  };

  // drag end
  this.dragEnd = (e) => {
    let elClassName = e.target.getAttribute("data-class");
    e.target.className = elClassName;
  };

  this.dragDrop = (e) => { e.preventDefault();
    e.preventDefault();
    if (e.target.classList.contains("DragGame—childs1")) {
      e.target.appendChild(document.querySelector(".draggedElement"));
    }
  };

  this.checkEveryElement = (element) =>
    element.getAttribute("data-index") ==
    element.parentElement.getAttribute("data-index");

  this.successPage = () => {
    let el = dragElement2MyArray.every(this.checkEveryElement);

    if (el == true) {
      location.href = "game-success-12.html";
    } else {
      this.errorPage();
    }
  };

  this.errorPage = () => {
    // დავვყოთ 2 ელემენტიან ტოლ მასივებად
    splitCheck(dragElement1MyArray, 2);
  };

  function splitCheck(array, size) {
    let chunck;
    for (let i = 0; i < array.length; i += size) {
      chunck = array.slice(i, i + size);
      // 'დაჭრილ' მასივებში შევამოწმოთ თითოეულ ელემენთს ყავს თუ არა შვილი
      if (chunck[0].firstElementChild !== null && chunck[1].firstElementChild !== null) {
          // შევადაროთ data-index 2 ელემენტიან მასივებში
        if (chunck[0].firstElementChild.dataset.index === chunck[1].firstElementChild.dataset.index ) {
            chunck.forEach(el => el.classList.add('success'))
        }else{
            chunck.forEach(el => el.classList.add('error'))
        }
      }
    }
  }

  this.completedGame = () => {
    completedGame.setAttribute("disabled", "true");
    this.successPage();
  };

  this.resetGame = () => {
    this.error = true;
    this.incriment = 0;

    dragElement2MyArray.forEach((w) => {
      $(".cs-4-5-div-12-game-icons-div").append(w);
    });

    $(dragElement1).removeClass("error");
    $(dragElement1).removeClass("success");
    completedGame.removeAttribute("disabled");
  };

  resetBtn.addEventListener("click", this.resetGame);
  completedGame.addEventListener("click", this.completedGame);
}

const Game = new game();
