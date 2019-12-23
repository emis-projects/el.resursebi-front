$(document).ready(function () {
    // მაგნიტი დაბრუნდეს თავდაპირველ მდომარეობაზე თუ არ მოთავსდა შესაბამის დივიჟენში
    $("#draggable").draggable({
        revert: "invalid",
        snapMode: "inner",
        scroll: false,
        stack: false,
        drag: function (event, ui) {
            $(".shadow_moon").fadeOut(1000)
        }
    });


    $(".dropable").droppable({
        tolerance: "intersect",
        drop: function (event, ui) {
            const drop_el = $(this).offset();
            const drag_el = ui.draggable.offset();
            const shadow = $('.shadow_moon');

            //img_box-ს offset ცენტრის დადგენა (ზემოდან და მარცხნიდან)
            const leftSide = drop_el.left + $(this).width() / 2 - (drag_el.left + ui.draggable.width() / 2);
            const topSide = drop_el.top + $(this).height() / 2 - (drag_el.top + ui.draggable.height() / 2);

            // დივიჟენს დავამათოთ კლასი highlight
            $(this)
                .addClass("highlight")
                .find("div");
            // draggable ელემენტი მოვათავსოთ დივიჟენის ცენტრში
            ui.draggable.animate({
                top: "+=" + topSide,
                left: "+=" + leftSide
            });
            if ($(this).hasClass('moon-div-2')) {
                shadow.fadeIn(1000)
            }
        }
    });
});


