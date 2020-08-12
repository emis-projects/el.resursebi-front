const selects = document.querySelectorAll(".select");
const sounds = document.querySelectorAll(".listen-music-purple-tag");
const firstLine = document.getElementById("first-line");
const secondLine = document.getElementById("second-line");
const thirdLine = document.getElementById("third-line");

const finishBtn = document.getElementById("completedGame");
const resetBtn = document.getElementById("resetBtn");

let count = 0;
let falseEl = null;

selects.forEach((select) => select.addEventListener("click", mark));

function mark() {
  this.style.border = "4px solid #947DCE";
  count++;
  if (this.dataset.id === "3") {
    falseEl = this;
  }

  switch (count) {
    case 1:
      firstLine.style.opacity = 1;
      break;
    case 2:
      secondLine.style.opacity = 1;
      break;
    case 4:
      thirdLine.style.opacity = 1;
      break;
    default:
      break;
  }
}

resetBtn.addEventListener("click", () => {
  count = 0;
  firstLine.style.opacity = 0;
  secondLine.style.opacity = 0;
  thirdLine.style.opacity = 0;
  selects.forEach((el) => {
    el.style.border = "1px solid #7FD1D8";
   el.addEventListener("click", mark);
  });
  finishBtn.removeAttribute("disabled");
});

finishBtn.addEventListener("click", () => {
  if (count === 4 && falseEl === null) {
    console.log("trie");
  } else if (count < 4 || count > 4) {
    removeEvent();
  } else {
    removeEvent();
  }
});

function removeEvent() {
  selects.forEach((el) => el.removeEventListener("click", mark));
  finishBtn.setAttribute("disabled", true);
  if (falseEl !== null) {
    falseEl.style.border = "4px solid #a7202b";
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
