function computerGames() {
  var DragGameChilds1 = document.querySelectorAll('.DragGame--childs1');
  var mydrag = document.querySelectorAll('.myDrag');

  var DragGameParent = document.querySelectorAll('.DragGame--Parent');


  var completedBtn = document.getElementById('completedGame');
  var resetBtn = document.getElementById('resetBtn');

  var completedBtn = document.getElementById('completedGame');
  var resetBtn = document.getElementById('resetBtn');

  $(DragGameChilds1).on('dragstart', (e) => this.dragStart(e));
  $(DragGameChilds1).on('dragend', (e) => this.dragEnd(e));

  for (const drag of mydrag) {
    drag.addEventListener('dragover', (e) => this.dragOver(e));
    drag.addEventListener('drop', (e) => this.dragDrop(e));
  }

  document.addEventListener('DOMContentLoaded', () => {
    mydrag.forEach(w => {
      w.setAttribute('data-class', w.getAttribute('class'))
    })
    DragGameChilds1.forEach(w => {
      w.setAttribute('data-class', w.getAttribute('class'))
    });
  })

  this.dragOver = (e) => {
    e.preventDefault();
  }

  this.dragStart = (e) => {

    setTimeout(() => {
      e.target.className += " draggedElement"
    }, 0);
  }

  this.dragEnd = (e) => {
    var elClassName = e.target.getAttribute('data-class')
    e.target.className = elClassName;
  }

  var myDragArray = [];

  mydrag.forEach(element => {
    myDragArray.push(element);
  });

  this.dragDrop = (e) => {
    var drag = document.querySelector('.draggedElement')
    if (e.target.classList.contains('myDrag')) {
      clone = drag.cloneNode(true);
      e.target.appendChild(clone)
      $(clone).removeClass('draggedElement')
      clone.style = "margin-left: 5%; margin-top: -3%;"
    }
  }

  this.checkEveryElement = (element) => element.getAttribute('data-place') == element.parentElement.getAttribute('data-place');

  var count = 0;

  this.successPage = () => {
    
    
    this.errorPage();
    console.log('count', count)
    if(count == 70){
      location.href = 'game-success-9.html';
    }
    
  }




  this.errorPage = () => {
    myDragArray.forEach(element => {
      if (element.getAttribute('data-drag') == 1) {
        for (let i = 1; i < myDragArray[0].children.length; i++) {
          if(element.children[1]){
            if (element.children[1].getAttribute('data-child') == 6) {
              count++
              element.children[1].style.border = "3px solid #a1dd6f";
            }
            else {
              count--
              element.children[1].style.border = "3px solid #dc6c85";
            }
          }
          if(element.children[2]){
            if (element.children[2].getAttribute('data-child') == 4) {
              count++
              element.children[2].style.border = "3px solid #a1dd6f";
            }
            else {
              count--
              element.children[2].style.border = "3px solid #dc6c85";
            }
          }
          if(element.children[3]){
            if (element.children[3].getAttribute('data-child') == 5) {
              count++
              element.children[3].style.border = "3px solid #a1dd6f";
            }
            else {
              count--
              element.children[3].style.border = "3px solid #dc6c85";
            }
          }
          if(element.children[4]){
            if (element.children[4].getAttribute('data-child') == 1) {
              count++
              element.children[4].style.border = "3px solid #a1dd6f";
            }
            else {
              count--
              element.children[4].style.border = "3px solid #dc6c85";
            }
          }
          if(element.children[5]){
            if (element.children[5].getAttribute('data-child') == 4) {
              count++
              element.children[5].style.border = "3px solid #a1dd6f";
            }
            else {
              count--
              element.children[5].style.border = "3px solid #dc6c85";
            }
          }
          if(element.children[6]){
            if (element.children[6].getAttribute('data-child') == 5) {
              count++
              element.children[6].style.border = "3px solid #a1dd6f";
            }
            else {
              count--
              element.children[6].style.border = "3px solid #dc6c85";
            }
          }
        }
      }
      if (element.getAttribute('data-drag') == 2) {
        for (let i = 1; i < myDragArray[1].children.length; i++) {
          if (element.children[1]) {
            if (element.children[1].getAttribute('data-child') == 3) {
              count++
              element.children[1].style.border = "3px solid #a1dd6f";
            }
            else {
              count--
              element.children[1].style.border = "3px solid #dc6c85";
            }
          }
          if (element.children[2]) {
            if (element.children[2].getAttribute('data-child') == 5) {
              count++
              element.children[2].style.border = "3px solid #a1dd6f";
            }
            else {
              count--
              element.children[2].style.border = "3px solid #dc6c85";
            }
          }
          if (element.children[3]) {
            if (element.children[3].getAttribute('data-child') == 3) {
              count++
              element.children[3].style.border = "3px solid #a1dd6f";
            }
            else {
              count--
              element.children[3].style.border = "3px solid #dc6c85";
            }
          }
          if (element.children[4]) {
            if (element.children[4].getAttribute('data-child') == 5) {
              count++
              element.children[4].style.border = "3px solid #a1dd6f";
            }
            else {
              count--
              element.children[4].style.border = "3px solid #dc6c85";
            }
          }
          if (element.children[5]) {
            if (element.children[5].getAttribute('data-child') == 3) {
              count++
              element.children[5].style.border = "3px solid #a1dd6f";
            }
            else {
              count--
              element.children[5].style.border = "3px solid #dc6c85";
            }
          }
        }
      }
      if (element.getAttribute('data-drag') == 3) {
        for (let i = 1; i < myDragArray[2].children.length; i++) {
          if (element.children[1]) {
            if (element.children[1].getAttribute('data-child') == 2) {
              count++
              element.children[1].style.border = "3px solid #a1dd6f";
            }
            else {
              count--
              element.children[1].style.border = "3px solid #dc6c85";
            }
          }
          if (element.children[2]) {
            if (element.children[2].getAttribute('data-child') == 5) {
              count++
              element.children[2].style.border = "3px solid #a1dd6f";
            }
            else {
              count--
              element.children[2].style.border = "3px solid #dc6c85";
            }
          }
          if (element.children[3]) {
            if (element.children[3].getAttribute('data-child') == 2) {
              count++
              element.children[3].style.border = "3px solid #a1dd6f";
            }
            else {
              count--
              element.children[3].style.border = "3px solid #dc6c85";
            }
          }
        }
      }
    });

  }

  this.completGame = () => {
    completedBtn.setAttribute('disabled', 'true');
    this.successPage();
  }



  this.init = (e) => {
    count = 0;
    myDragArray.forEach(element => {
      for(let i=1; i<10; i++){
        $(element.children[1]).remove();
      }
    });
    completedBtn.removeAttribute('disabled');
}



  resetBtn.addEventListener('click', () => this.init());
  completedBtn.addEventListener('click', () => this.completGame());

}


const computergame = new computerGames();


// $(function () {
//   $(".draggeble").draggable();
// });