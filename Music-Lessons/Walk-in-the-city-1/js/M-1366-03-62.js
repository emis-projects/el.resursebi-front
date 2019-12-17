createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];
function handleLoadComplete(event) {
    createjs.Sound.play("sound");
}

function handleLoadstop(event) {
    createjs.Sound.stop("sound");
}

function m13668() {

    $('.listen_btn').click((e) => {
        handleLoadstop()
        createjs.Sound.registerSound({ src: `${e.target.getAttribute('data-voice')}`, id: "sound" });
        handleLoadComplete()
    })

    $(".checkmark").click(function () {
        $(".checkmark").removeClass("selected")
        $(this).addClass("selected")
    })

    $("#resetBtn").click(() => {
        $(".checkmark").removeClass("error")
        $("#completedGame").attr("disabled", false)
        m13668()
    })

    $("#completedGame").click(function () {
        if ($("span[data-answer = 'true']").hasClass("selected")) {
            location.href = 'M-1366-03-62-success.html'
        }
        else {
            $(".selected").removeClass("selected").addClass("error")
        }

        handleLoadstop()
        $(".checkmark").off()
        $(this).attr("disabled", true)
    })


}

m13668();
