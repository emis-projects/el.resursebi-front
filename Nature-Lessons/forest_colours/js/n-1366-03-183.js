
$(function() {
    let pos;
    $(".draggeble").draggable({
        revert: function (event, ui) {
            // return !(event && (pos.top > 55 && pos.top < 435) || (pos.left > 420 && pos.left < 1000));
            return !event;
        }
    });

    $("#uiDraggable").droppable();
});