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
                    location.href = 'success-page.html'
                }
            } 
            else if ($(this).hasClass("selected") && !$(this).attr("data-answer")) {
                $(this).removeClass("selected")
                $(this).addClass("error")
            }

        })

        handleLoadstop()
        $(".checkmark").off()
        // $(this).attr("disabled", true)
    })


}

m136643();
