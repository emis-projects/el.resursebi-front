createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];

function handleLoadComplete(event) {
    createjs.Sound.play("sound");
}

function handleLoadstop(event) {
    createjs.Sound.stop("sound");
}

$('.listen--btn').click((e) => {
    console.log(e.target.getAttribute('data-voice'));
    handleLoadstop()
    createjs.Sound.registerSound({src:`${e.target.getAttribute('data-voice')}`, id:"sound"});
    handleLoadComplete()
})

