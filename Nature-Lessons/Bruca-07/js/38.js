$(function () {

    $(".drag").draggable({
        cursor: 'grabbing',
        revert: 'invalid',
        stack: "div",
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

        let toggle = true

        $(".drag").children().each((index, item) => {
            if (item.getAttribute("data-answer") != index) {
                let el = item.getElementsByTagName('img')[0]
                el.setAttribute("style", "border: red solid 1px")  
                toggle = false              
            }
        })

        if (toggle) {
            location.href = 'game-success-38.html'
        }
    

        $(this).attr("disabled", true)
        $(".drag").draggable("disable")
        $(".drag").droppable("disable")
    })

})