$(function() {
   //ელემ. გადაადგილება
   $( ".tree" ).draggable({
      revert: "invalid",
      helper:"clone",
      containment:"document"
   });
   //ელემ. ჩაგდება
   $( ".image-box_gamge" ).droppable({
      drop:function(event, ui) {
         ui.draggable.detach().appendTo($(this));
      }
   });
} );

$('#reset').click(function () {
   $('#kedari').append($('img[alt="kedari"]'));
   $('#tela').append($('img[alt="tela"]'));
   $('#muxa').append($('img[alt="muxa"]'));
   $('#nadzvi').append($('img[alt="nadzvi"]'));
   $('#fichvi').append($('img[alt="fichvi"]'));
   $('#txili').append($('img[alt="txili"]'));
   $('#kuneli').append($('img[alt="kuneli"]'));
   $('#shqeri').append($('img[alt="shqeri"]'));
   $('#cxratyava').append($('img[alt="cxratyava"]'));
});

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
   yellowBox.forEach(evt=>{
      yellowTree.push($(evt).attr('alt'))
   });
   // მასივი if პირობა შემოწმებისთვის
   if (greenTrees.includes('nadzvi', 'fichvi') && yellowTree.includes('muxa', 'tela', 'kedari', 'txili', 'kuneli', 'shqeri', 'cxratyava')){
      location.href = './N-1366-03-186-success.html';
   }else{
      alert('არასწორია')
   }
   //მასივის განულება შემოწმების შემდგომ
   greenTrees = [];
   yellowTree = [];
});
