createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];
function handleLoadComplete(event) {
  createjs.Sound.play("sound");
}

function handleLoadstop(event) {
  createjs.Sound.stop("sound");
}

var dragged;
const dropBox = document.querySelector(".choose_music_10-circle_9");
const soundBox = document.querySelector(".choose_music_10-img_7_circle");
const sounds = document.querySelectorAll(".choose_music_10-img_7_circle img");
const resetBtn = document.getElementById('resetBtn')

sounds.forEach((sound) =>
  sound.addEventListener("click", (evt) => {
    handleLoadstop();
    createjs.Sound.registerSound({
      src: `${evt.target.dataset.voice}`,
      id: "sound",
    });
    handleLoadComplete();
  })
);

sounds.forEach((el) => el.addEventListener("dragstart", onDragStart));
sounds.forEach((el) => el.addEventListener("dragend", onDragEnd));

function onDragStart(event) {
  console.log("start");
  event.dataTransfer.setData("text/plain", event.target.id);
  setTimeout(() => (this.className = "invisible"), 0);
  dragged = this;
}

function onDragEnd(event) {
  this.className = "";
}

dropBox.addEventListener("dragover", dragOver);
dropBox.addEventListener("dragenter", dragEnter);
dropBox.addEventListener("dragleave", dragLeave);
dropBox.addEventListener("drop", drop);

function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
}
function dragLeave(e) {
  e.preventDefault();
}
function drop(e) {
  e.preventDefault();
  this.append(dragged);
}



resetBtn.addEventListener('click', () => {
    soundBox.append(dragged)
})