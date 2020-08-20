const selects = document.querySelectorAll(".select");
const sounds = document.querySelectorAll(".listen-music-purple-tag");

const finishBtn = document.getElementById("completedGame");
const resetBtn = document.getElementById("resetBtn");

let count = 1;
var isTrue = false;
let activeElm = null;

selects.forEach((select) => select.addEventListener("click", mark));

function mark() {
  if (isTrue) {
    selects.forEach((el) => (el.style.border = "2px solid #7FD1D8"));
    this.style.border = "4px solid #947DCE";
    activeElm = this;
    finishBtn.removeAttribute('disabled')
  }
}

finishBtn.addEventListener("click", check);

function check() {
  if (activeElm.dataset.id === "4" && count === 1) {
    stepCheck();
    console.log("true", activeElm.dataset.id, count);
  } else if (activeElm.dataset.id === "5" && count === 2) {
    stepCheck();
  } else if (activeElm.dataset.id === "1" && count === 3) {
    stepCheck();
    finishBtn.innerHTML = "დასრულება";
  } else if (activeElm.dataset.id === "2" && count === 4) {
    stepCheck();
  }else{
    wrong() 
  }
}

function stepCheck() {
  activeElm.style.border = "2px solid #34a216";
  setTimeout(() => {
    handleLoadstop();
    activeElm.style.border = "2px solid #7FD1D8";
    document.getElementById(`line_${count}`).style.display = "none";
    count++;
    document.getElementById(`line_${count}`).style.display = "flex";
    isTrue = false;
    activeElm = null
    finishBtn.setAttribute('disabled', true)
  }, 1000);
}

function wrong() {
  activeElm.style.border = "2px solid #fc0000";
  setTimeout(() => {
    handleLoadstop();
    activeElm.style.border = "2px solid #7FD1D8";
  }, 1000);
}

//play sounds
sounds.forEach((sound) => {
  sound.addEventListener("click", (e) => {
    handleLoadstop();
    createjs.Sound.registerSound({
      src: `${e.target.dataset.voice}`,
      id: "sound",
    });
    handleLoadComplete();
    isTrue = true;
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

resetBtn.addEventListener("click", () => {
  for (let i = 1; i < 5; i++) {
    document.getElementById(`line_${i}`).style.display = "none";
    if (i === 1) {
      document.getElementById(`line_${i}`).style.display = "flex";
    }
  }
});
