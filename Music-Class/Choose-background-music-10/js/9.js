createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];

function handleLoadComplete(event) {
  createjs.Sound.play("sound");
}

function handleLoadstop(event) {
  createjs.Sound.stop("sound");
}


document.querySelectorAll('.listen--btn').forEach(w => {
  w.addEventListener('click', (e) => {
      handleLoadstop()
      createjs.Sound.registerSound({ src: `${e.target.getAttribute('data-voice')}`, id: "sound" });
      handleLoadComplete()
  })
})



function game(){
  let dragElement1 = document.querySelectorAll('.DragGame—childs1');
  let dragElement2 = document.querySelector('.DragGame—childs2');
  let resetBtn = document.getElementById('resetBtn');
  let completedGame = document.getElementById('completedGame');


  $(dragElement1).on('dragstart', (e) => this.dragStart(e));
  $(dragElement1).on('dragend', (e) => this.dragEnd(e));



    dragElement2.addEventListener('dragover', (e) => this.dragOver(e));
    dragElement2.addEventListener('drop', (e) => this.dragDrop(e));


  var dragElement2MyArray = [];
  for(var i = 0; i < dragElement2.length; i++ ){
      dragElement2MyArray.push(dragElement2[i])
  }


  var dragElement1MyArray = [];
  for(var i = 0; i < dragElement1.length; i++ ){
      dragElement1MyArray.push(dragElement1[i])
  }


  document.addEventListener('DOMContentLoaded', () => {
    dragElement1MyArray.forEach(w => {
        w.setAttribute('data-class', w.getAttribute('class'))
    })
})

 // Drag Functions    
 this.dragOver = (e) => {
  e.preventDefault();
}

// drag start 
this.dragStart = (e) => {
  setTimeout(() => {
      e.target.className = "draggedElement"
  }, 0);
}


// drag end
this.dragEnd = e => {
  let elClassName = e.target.getAttribute('data-class');
  e.target.className = elClassName;
}


this.dragDrop = e => { 
  e.preventDefault();

  var drag = document.querySelector('.draggedElement')


  if(!e.target.classList.contains('DragGame—childs2')) {
    var clone =  drag.cloneNode(true);
    e.target.parentElement.appendChild(clone);
    $(clone).removeClass('draggedElement')
    dragElement2.firstElementChild.remove()

  } else {
    var clone =  drag.cloneNode(true);
    e.target.appendChild(clone);
    $(clone).removeClass('draggedElement')
  }
}


}


const Game = new game();