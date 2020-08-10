createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];
function handleLoadComplete(event) {
    createjs.Sound.play("sound");
}

function handleLoadstop(event) {
    createjs.Sound.stop("sound");
}



document.querySelectorAll('.listen--btn').forEach(w => {
    w.addEventListener('click', (e) => {
        handleLoadstop()
        createjs.Sound.registerSound({ src: `${e.target.getAttribute('data-voice')}`, id: "sound" });
        handleLoadComplete()
    })
})
