$(function () {
    $(".draggeble").draggable({
        revert: function (event, ui) {
            return !event;
        }
    });

    $("#uiDraggable").droppable();
});