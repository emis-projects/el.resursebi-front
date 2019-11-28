$(function () {
    $(".draggeble").draggable({
        revert: function (event, ui) {
            let leftX = pos.left;
            let imgX = $(this).offset().left
            return !(event && leftX < imgX && left);
            // return !event;

        }
    });

    $("#uiDraggable").droppable({
        drop: function (event, ui) {
            let res = $(this).offset()
        }
    });
});

let pos = $('#uiDraggable').offset();