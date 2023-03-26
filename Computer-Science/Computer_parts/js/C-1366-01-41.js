
function quiz(){


    $(".drag").draggable({
        cursor: 'grabbing',
        zIndex: '+10',
        revert: 'invalid'
    })


    $(".drop").droppable({ 
        drop: function (event, ui) {
            var dropped = $(ui.draggable).text();
            $(this).next().append(dropped) 
            $(ui.draggable).removeAttr('style')
            $(ui.draggable).hide()
            $(this).droppable("destroy")
        }
    })

    $("#resetBtn").click(function(){
        $(".drag").show()
        $(".drop").next().empty()
        $(".drag").css("position", "relative")
        $(".row.image_box img").removeAttr("style")
        document.getElementById("completedGame").disabled = false
        quiz()
    })


    $("#completedGame").click(function() {
        
        var flag = true
        $(".drop").next().each(function(i, obj) {
            

            if (obj.innerText !== obj.getAttribute('data-answer')){
                obj.parentNode.firstElementChild.setAttribute("style", "border: solid red 1px");
                flag = false
            }
        })

        if (flag) {
            location.href = 'C-1366-01-41-success.html'
        }

        document.getElementById("completedGame").disabled = true
    })
}


quiz()