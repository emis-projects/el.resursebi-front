const green = ['nadzvi', 'fichvi'];
const yellow = ['muxa', 'tela', 'kedari', 'txili', 'kuneli', 'shqeri', 'cxratyava']

$(function () {
   //ელემ. გადაადგილება
   $(".tree").draggable({
      revert: "invalid",
      helper: "clone",
      containment: "document"
   });
   //ელემ. ჩაგდება
   $(".image-box_gamge").droppable({
      classes: {
         "ui-droppable-active": "ui-state-active",
         "ui-droppable-hover": "ui-state-hover"
      },
      drop: function (event, ui) {
         ui.draggable.appendTo($(this));
      },
   });
});

$(".image-box_gamge img").draggable('disable');
$('#reset').click(reset);

const greenBox = document.querySelector('.green_box').childNodes;
const yellowBox = document.querySelector('.yellow_box').childNodes;

const check = document.getElementById('check');
let greenTrees = [];
let yellowTree = [];


// მცენარეების შემოწმება
check.addEventListener('click', () => {
   greenBox.forEach(evt => {
      greenTrees.push($(evt).attr('alt'))
   });
   yellowBox.forEach(evt => {
      yellowTree.push($(evt).attr('alt'))
   });


   greenTrees.map((el, i, arr1) => {
      el === undefined ? arr1.shift() : arr1
   });

   yellowTree.map((el, i, arr) => {
      el === undefined ? arr.shift() : arr
   })

   // მასივი if პირობა შემოწმებისთვის
   if ((greenTrees === green && greenTrees.length === 2) &&
      (yellowTree === yellow && yellowTree.length === 7)) {
      location.href = './N-1366-03-186-success.html';
   } else {
      console.log(greenTrees !== green && greenTrees.length !== 2);
      if (greenTrees !== green && greenTrees.length !== 2) {
         $('.green_box').addClass('animated bounce');
         $('.green_box').css('border', '1px solid red')
      }
      if (yellowTree !== yellow || yellowTree.length === 7) {
         $('.yellow_box').addClass('animated bounce');
         $('.yellow_box').css('border', '1px solid red')
      } else {
         $('.green_box').removeClass('animated bounce');
         $('.green_box').css('border', 'none')
      }
   }
   //მასივის განულება შემოწმების შემდგომ
   greenTrees = [];
   yellowTree = [];
});


function reset() {
   $('#kedari').append($('img[alt="kedari"]'));
   $('#tela').append($('img[alt="tela"]'));
   $('#muxa').append($('img[alt="muxa"]'));
   $('#nadzvi').append($('img[alt="nadzvi"]'));
   $('#fichvi').append($('img[alt="fichvi"]'));
   $('#txili').append($('img[alt="txili"]'));
   $('#kuneli').append($('img[alt="kuneli"]'));
   $('#shqeri').append($('img[alt="shqeri"]'));
   $('#cxratyava').append($('img[alt="cxratyava"]'));
   $('.green_box').removeClass('animated bounce');
   $('.green_box').css('border', 'none')
   $('.yellow_box').removeClass('animated bounce');
   $('.yellow_box').css('border', 'none')
}