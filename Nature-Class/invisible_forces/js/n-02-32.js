const drop_boxes = document.querySelectorAll(".img_box");
const magnet = document.getElementById("draggable");

$(document).ready(function() {
  // მაგნიტი დაბრუნდეს თავდაპირველ მდომარეობაზე თუ არ მოთავსდა შესაბამის დივიჟენში
  $("#draggable").draggable({
    revert: "invalid",
    snapMode: "inner",
    scroll: false,
    stack: false,
    drag: function(event, ui) {
      $(".img_box").removeClass("highlight");
    }
  });


  $(".img_box").droppable({
    tolerance: "intersect",
    drop: function(event, ui) {
      const drop_el = $(this).offset();
      const drag_el = ui.draggable.offset();

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
    }
  });
});


//სისწორის შემოწმება
$("#completedGame").click(function() {
  drop_boxes.forEach((elm, indx) => {
    //სისწორისას გადაითეს "სწორია" გვერდზე ან ჩასვას X სურათი და გავხადოთ უმოძრაო მაუსის მოჭიდებისას.
    if (elm.classList.contains("highlight") && indx === 0) {
      window.location.href = "./game-success-32.html";
      return;
    } else if (elm.classList.contains("highlight") && indx !== 0) {
      let img = document.createElement("img");
      img.setAttribute('id', 'wrong');
      img.setAttribute('draggable', false)
      img.src =
        "../../img/gakvetilebi/buneba/invisible_forces/games/wrong.svg";
      elm.appendChild(img);
    }
  });
});


$("#resetBtn").click(function() {
  drop_boxes.forEach(elm => {
    elm.classList.remove('"ui-droppable","highlight"');
  });
  if (document.getElementById('wrong')) {
    document.getElementById('wrong').remove();
  }
  magnet.style.left = 0;
  magnet.style.top = 0;
});
