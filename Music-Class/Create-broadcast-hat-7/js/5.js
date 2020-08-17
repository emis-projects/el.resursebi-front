const listenBtns = document.querySelectorAll(".listen-music-purple-tag");

// მუსიკის დაკვრა
listenBtns.forEach((btn) => btn.addEventListener("click", play));

function play() {
  handleLoadstop();
  console.log(this);
  createjs.Sound.registerSound({
    src: this.dataset.voice,
    id: "sound",
  });

  handleLoadComplete();
}

// ხმის გაშვება
createjs.Sound.on("fileload", handleLoadComplete);

createjs.Sound.alternateExtensions = ["wav"];

function handleLoadComplete(event) {
  createjs.Sound.play("sound");
}

function handleLoadstop(event) {
  createjs.Sound.stop("sound");
}

const numberBox = document.querySelector(".music-new-7-div-5-numbers");
const number = document.querySelectorAll(".music-new-7-div-5-numbers img");
const circles = document.querySelectorAll(".music-new-7-div-5-circle");

var dragged;
var store = [];
// drag
number.forEach((el) => el.addEventListener("dragstart", onDragStart));
number.forEach((el) => el.addEventListener("dragend", onDragEnd));

function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.dataset.id);
  setTimeout(() => (this.className = "invisible"), 0);
  dragged = this;
}
function onDragEnd(event) {
  this.className = "";
}

circles.forEach((circle) => circle.addEventListener("dragover", dragOver));
circles.forEach((circle) => circle.addEventListener("drop", drop));

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  this.append(dragged);
  store.push(dragged);
}

document.getElementById("resetBtn").addEventListener("click", () => {
  // დავასორტიროთ ზრდადობით სანამ გადავსვამთ თავდაპირველ განყოფილებაში
  store.sort(function (a, b) {
    return a.dataset.number > b.dataset.number;
  });

  // თავდაპირველ განყოფილებაში გადასმა
  for (const img of store) {
    numberBox.append(img);
  }
  circles.forEach(el => el.style.border = "2px solid #7FD1D8")
  document.getElementById("completedGame").removeAttribute('disabled')
});

document.getElementById("completedGame").addEventListener("click", () => {
  let images = document.querySelectorAll(".music-new-7-div-5-circle img");
  let count = 0;
  circles.forEach((el, index) => {

    if (el.dataset.id === images[index].dataset.id) {
        count ++;
        if(images.length === 4 && count === 4) {
            console.log('fire');
            location.href = "game-success-5.html";
        }
    } else if (el.dataset.id !== images[index].dataset.id) {
      el.style.border = "2px solid #CA0000"
      document.getElementById("completedGame").setAttribute('disabled', true)
    }
  });
});
