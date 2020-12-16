function computerGames() {
  var DragGameChilds1 = document.querySelectorAll('.DragGame--childs1');
  var mydrag = document.querySelectorAll('.myDrag');

  var DragGameParent = document.querySelectorAll('.DragGame--Parent');


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

  var myArray = [];
    DragGameChilds1.forEach(element => {
        myArray.push(element);
    });

  var myDragArray = [];

  mydrag.forEach(element => {
    myDragArray.push(element);
  });

  this.dragDrop = (e) => { e.preventDefault();
    var drag = document.querySelector('.draggedElement')
    if (e.target.classList.contains('myDrag')) {
      clone = drag.cloneNode(true);
      e.target.appendChild(clone)
      $(clone).removeClass('draggedElement')
      
      // clone.style = "margin-left: 4.5%; margin-top: -6.3%;";
      // if(clone.getAttribute('data-child') == 4){
      //   clone.style = "margin-left: 2.1%; margin-top: -6.4%;"
      // }
      // if(clone.getAttribute('data-child') == 1){
      //   clone.style = "margin-left: 2%; margin-top: -6.4%;"
      // }
      
    }
  }

  var count = 0;

  this.successPage = () => {
    
    this.errorPage();
    myDragArray.forEach(element => {
      for(let i=1; i<element.children.length; i++){
        if(element.children[i].getAttribute('data-previousState') == 2222){
          count++;
        }
        else{
          count--;
        }
      }
        
    });
    if(count == 13){
      location.href = 'game-success-9.html';
    }
    
  }




  this.errorPage = () => {
    myDragArray.forEach(element => {
      if (element.getAttribute('data-drag') == 1) {
        for (let i = 1; i < myDragArray[0].children.length; i++) {
          if(element.children[1]){
            if (element.children[1].getAttribute('data-child') == 6) {
              element.children[1].style.border = "3px solid #a1dd6f";
              element.children[1].setAttribute('data-previousState', 2222)
            }
            else {
              element.children[1].style.border = "3px solid #dc6c85";
            }
          }
          if(element.children[2]){
            if (element.children[2].getAttribute('data-child') == 4) {
              element.children[2].style.border = "3px solid #a1dd6f";
              element.children[2].setAttribute('data-previousState', 2222)
            }
            else {
              element.children[2].style.border = "3px solid #dc6c85";
            }
          }
          if(element.children[3]){
            if (element.children[3].getAttribute('data-child') == 5) {
              element.children[3].style.border = "3px solid #a1dd6f";
              element.children[3].setAttribute('data-previousState', 2222)
            }
            else {
              element.children[3].style.border = "3px solid #dc6c85";
            }
          }
          if(element.children[4]){
            if (element.children[4].getAttribute('data-child') == 1) {
              element.children[4].style.border = "3px solid #a1dd6f";
              element.children[4].setAttribute('data-previousState', 2222)
            }
            else {
              element.children[4].style.border = "3px solid #dc6c85";
            }
          }
          if(element.children[5]){
            if (element.children[5].getAttribute('data-child') == 4) {
              element.children[5].style.border = "3px solid #a1dd6f";
              element.children[5].setAttribute('data-previousState', 2222)
            }
            else {
              element.children[5].style.border = "3px solid #dc6c85";
            }
          }
          if(element.children[6]){
              element.children[6].style.border = "3px solid #dc6c85";
          }
          if(element.children[7]){
              element.children[7].style.border = "3px solid #dc6c85";
          }

        }
      }
      if (element.getAttribute('data-drag') == 2) {
        for (let i = 1; i < myDragArray[1].children.length; i++) {
          if (element.children[1]) {
            if (element.children[1].getAttribute('data-child') == 3) {
              element.children[1].style.border = "3px solid #a1dd6f";
              element.children[1].setAttribute('data-previousState', 2222)
            }
            else {
              element.children[1].style.border = "3px solid #dc6c85";
            }
          }
          if (element.children[2]) {
            if (element.children[2].getAttribute('data-child') == 5) {
              element.children[2].style.border = "3px solid #a1dd6f";
              element.children[2].setAttribute('data-previousState', 2222)
            }
            else {
              element.children[2].style.border = "3px solid #dc6c85";
            }
          }
          if (element.children[3]) {
            if (element.children[3].getAttribute('data-child') == 3) {
              element.children[3].style.border = "3px solid #a1dd6f";
              element.children[3].setAttribute('data-previousState', 2222)
            }
            else {
              element.children[3].style.border = "3px solid #dc6c85";
            }
          }
          if (element.children[4]) {
            if (element.children[4].getAttribute('data-child') == 5) {
              element.children[4].style.border = "3px solid #a1dd6f";
              element.children[4].setAttribute('data-previousState', 2222)
            }
            else {
              element.children[4].style.border = "3px solid #dc6c85";
            }
          }
          if (element.children[5]) {
            if (element.children[5].getAttribute('data-child') == 3) {
              element.children[5].style.border = "3px solid #a1dd6f";
              element.children[5].setAttribute('data-previousState', 2222)
            }
            else {
              element.children[5].style.border = "3px solid #dc6c85";
            }
          }
          if(element.children[6]){
              element.children[6].style.border = "3px solid #dc6c85";
          }
          if(element.children[7]){
              element.children[7].style.border = "3px solid #dc6c85";
          }
        }
      }
      if (element.getAttribute('data-drag') == 3) {
        for (let i = 1; i < myDragArray[2].children.length; i++) {
          if (element.children[1]) {
            if (element.children[1].getAttribute('data-child') == 2) {
              element.children[1].style.border = "3px solid #a1dd6f";
              element.children[1].setAttribute('data-previousState', 2222)
            }
            else {
              element.children[1].style.border = "3px solid #dc6c85";
            }
          }
          if (element.children[2]) {
            if (element.children[2].getAttribute('data-child') == 5) {
              element.children[2].style.border = "3px solid #a1dd6f";
              element.children[2].setAttribute('data-previousState', 2222)
            }
            else {
              element.children[2].style.border = "3px solid #dc6c85";
            }
          }
          if (element.children[3]) {
            if (element.children[3].getAttribute('data-child') == 2) {
              element.children[3].style.border = "3px solid #a1dd6f";
              element.children[3].setAttribute('data-previousState', 2222)
            }
            else {
              element.children[3].style.border = "3px solid #dc6c85";
            }
          }
          if(element.children[4]){
              element.children[4].style.border = "3px solid #dc6c85";
          }
          if(element.children[5]){
              element.children[5].style.border = "3px solid #dc6c85";
          }
          if(element.children[6]){
              element.children[6].style.border = "3px solid #dc6c85";
          }
          if(element.children[7]){
              element.children[7].style.border = "3px solid #dc6c85";
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