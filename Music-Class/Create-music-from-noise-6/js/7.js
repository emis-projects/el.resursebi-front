const selects = document.querySelectorAll(".select");
const sound = document.querySelector('.listen-music-purple-tag')


selects.forEach((select) => select.addEventListener("click", mark));

function mark() {
  selects.forEach((select) => (select.style.borderColor = "#7FD1D8"));
  this.style.borderColor = "#947DCE";
}

sound.addEventListener('click', (e)=>{
    {
        handleLoadstop();
        createjs.Sound.registerSound({
          src: `${e.target.dataset.voice}`,
          id: "sound",
        });
        handleLoadComplete();
      }
})

// sound inits
createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];
function handleLoadComplete(event) {
  createjs.Sound.play("sound");
}

function handleLoadstop(event) {
  createjs.Sound.stop("sound");
}


