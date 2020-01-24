createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];
function handleLoadComplete(event) {
    createjs.Sound.play("sound");
}

function handleLoadstop(event) {
    createjs.Sound.stop("sound");
}

function m136643() {

    $('.notebi').click((e) => {
        handleLoadstop()
        createjs.Sound.registerSound({ src: `${e.target.getAttribute('data-voice')}`, id: "sound" });
        handleLoadComplete()
    })

    $(".checkmark").click(function () {
        $(`.${this.classList[0]}`).removeClass("selected")
        $(this).addClass("selected")
    })

    $("#resetBtn").click(() => {
        $(".checkmark").removeClass("error")
        $(".checkmark").removeClass("selected")
        $(".checkmark").removeClass("correct")
        $("#completedGame").attr("disabled", false)
        m136643()
    })

    $("#completedGame").click(function () {
        $(".checkmark").each(function() {
            if ($(this).hasClass("selected") && $(this).attr("data-answer")) {
                $(this).removeClass("selected")
                $(this).addClass("correct")
                if ($(".correct").length == 3) {
                    let loc = location.pathname;

                    if(loc == "/Music-Lessons/Walk-in-the-city-1/games/M-1366-03-43.html"){
                        location.href = 'M-1366-03-43-success.html'
                    } else if(loc == "/Music-Lessons/Walk-in-the-city-1/games/M-1366-03-48.html"){
                        location.href = 'M-1366-03-48-success.html'
                    }
                }
            } 
            else if ($(this).hasClass("selected") && !$(this).attr("data-answer")) {
                $(this).removeClass("selected")
                $(this).addClass("error")
            }
        })

        handleLoadstop()
        $(".checkmark").off()
    })


}

m136643();
