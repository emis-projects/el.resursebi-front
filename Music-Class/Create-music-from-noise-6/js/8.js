const selects = document.querySelectorAll(".select");
const sounds = document.querySelectorAll(".listen-music-purple-tag");
const firstLine = document.getElementById('first-line')
const secondLine = document.getElementById('second-line')
let count = 0;

selects.forEach((select) => select.addEventListener("click", mark));

function mark() {
  count++;
  this.style.borderColor = "#947DCE";

  switch (count) {
    case 1:
      firstLine.style.opacity = 1;
      break;
    case 2:
      secondLine.style.opacity = 1;
      break;
    case 3:
      selects.forEach(el => el.removeEventListener('click', mark))
      break;

    default:
      break;
  }
}

sounds.forEach((sound) => {
  sound.addEventListener("click", (e) => {
    {
      handleLoadstop();
      createjs.Sound.registerSound({
        src: `${e.target.dataset.voice}`,
        id: "sound",
      });
      handleLoadComplete();
    }
  });
});

// sound inits
createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];
function handleLoadComplete(event) {
  createjs.Sound.play("sound");
}

function handleLoadstop(event) {
  createjs.Sound.stop("sound");
}
