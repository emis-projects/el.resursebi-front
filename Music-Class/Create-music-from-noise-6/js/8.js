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
  }
}

finishBtn.addEventListener("click", check);

function check() {
  switch (activeElm.dataset.id, count) {
    case "4" &&  1:
      stepCheck()
      break;
    case "5" &&  2:
      stepCheck()
      break;
    case "1" &&  3:
      stepCheck()
      break;
    case "2" &&  4:
      location.href = 'game-success-8.html'
      break;
  
    default:
      break;
  }
}


function stepCheck(){
  activeElm.style.border = "2px solid #34a216";
    setTimeout(() => {
      handleLoadstop()
      activeElm.style.border = "2px solid #7FD1D8";
      document.getElementById(`line_${count}`).style.display = "none";
      count++;
      document.getElementById(`line_${count}`).style.display = "flex";
      isTrue = false
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
