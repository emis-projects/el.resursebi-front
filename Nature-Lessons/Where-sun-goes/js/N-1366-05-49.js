function b13660549(){

    $(".drag").draggable({
        cursor: 'grabbing',
        revert: 'invalid',
    })

    $(".drag").draggable({
        start: function(e) {
            $(e.target).attr('style', 'z-index: 1000')
            $(e.target).css("position", "relative")
          }
    })

    $(".drag").droppable({
        drop: function (event, ui) {
            var draged = $(ui.draggable)
            $(this).append(draged.html())
            draged.removeAttr('style')
            draged.append($(this).find('div:first'))
            draged.find('div:first').remove()
            $(".drag").css("position", "relative")
        } 
    })
    

    $("#resetBtn").click(function () { 
        $(".drag").children().find('img:first').removeAttr('style')
        $("#completedGame").attr("disabled", false)
        $(".drag").draggable("enable")
        $(".drag").droppable("enable")
    })
    

    $("#completedGame").click(function () {
        if ($(".drag").children()[0].getAttribute("id") === 'sun' &&
            $(".drag").children()[1].getAttribute("id") === 'earth' &&
            $(".drag").children()[2].getAttribute("id") === 'moon'
        ) {
            location.href = 'N-1366-05-49-success.html' 
        }
        
        else {
            $(".drag").children().find('img:first').css({
                "border": "red solid 1px", "border-radius": "1000px"})
        }

        $(this).attr("disabled", true)
        $(".drag").draggable("disable")
        $(".drag").droppable("disable")
    })

}


b13660549()