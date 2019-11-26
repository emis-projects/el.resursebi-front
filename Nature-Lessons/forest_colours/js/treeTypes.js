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
} )

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
   console.log(greenTrees);
   console.log(yellowTree)
   // მასივი if პირობა შემოწმებისთვის
   if (greenTrees.includes('nadzvi', 'fichvi') && yellowTree.includes('muxa', 'tela', 'kedari', 'txili', 'kuneli', 'shqeri', 'cxratyava')){
      location.href = './N-1366-03-186-success.html';
   }else{
      alert('არასწორია')
   }
   //მასივის განულება შემოწმების შემდგომ
   greenTrees = [];
   yellowTree = [];
})
