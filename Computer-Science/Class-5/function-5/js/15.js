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

    this.dragdrop = (e) => { e.preventDefault();
        var drag = document.querySelector('.draggedElement')
        if (e.target.classList.contains('myDrag')) {
            clone = drag.cloneNode(true);
            if(clone.getAttribute('data-child') != 2 && clone.getAttribute('data-child') != 6){
                e.target.firstElementChild.appendChild(clone)
            }
            for(let i =0; i<10; i++){
                
                if(e.target.firstElementChild && e.target.firstElementChild.children[i]){
                    if(e.target.firstElementChild.children[i].getAttribute('data-child') == 7){
                        e.target.firstElementChild.children[i].classList.add("myDrag");
                    }
                    if(e.target.firstElementChild.children[i].getAttribute('data-child') == 3){
                        e.target.firstElementChild.children[i].classList.add("myDrag");
                    }
                }
                if(e.target.getAttribute('data-child') == 7 && clone.getAttribute('data-child') == 6){
                    e.target.src = "../../../img/gakvetilebi/Computer-Science/Class-5/function-5/1111spin.svg";
                    e.target.setAttribute('data-previous', 1111)
                    $(e.target).removeClass("myDrag");
                }
                if(e.target.getAttribute('data-child') == 3 && clone.getAttribute('data-child') == 2){
                    e.target.src = "../../../img/gakvetilebi/Computer-Science/Class-5/function-5/2222say.svg";
                    e.target.setAttribute('data-previous', 1111)
                    $(e.target).removeClass("myDrag");
                }
            }
            $(clone).removeClass('draggedElement')
        }
    }



    var count = 0;

    this.successPage = () => {


        this.errorPage();
        myDragArray.forEach(element => {
            for(let i=1; i<element.firstElementChild.children.length; i++){
              if(element.firstElementChild.children[i].getAttribute('data-previousState') == 2222){
                count++;
              }
              else{
                count--;
              }
            }
              
          });
          if(count == 6){
            location.href = 'game-success-15.html';
          }

    }




    this.errorPage = () => {
        myDragArray.forEach(element => {
            if (element.getAttribute('data-drag') == 1) {
                for (let i = 1; i < myDragArray[0].firstElementChild.children.length; i++) {
                    
                    if (element.firstElementChild.children[1]) {
                        if (element.firstElementChild.children[1].getAttribute('data-child') == 7 && element.firstElementChild.children[1].getAttribute('data-previous') == 1111) {
                            element.firstElementChild.children[1].style.border = "3px solid #a1dd6f";
                            element.firstElementChild.children[1].setAttribute('data-previousState', 2222)
                        }
                        else {
                            element.firstElementChild.children[1].style.border = "3px solid #dc6c85";
                        }
                    }
                    if (element.firstElementChild.children[2]) {
                        if (element.firstElementChild.children[2].getAttribute('data-child') == 5) {
                            element.firstElementChild.children[2].style.border = "3px solid #a1dd6f";
                            element.firstElementChild.children[2].setAttribute('data-previousState', 2222)
                        }
                        else {
                            element.firstElementChild.children[2].style.border = "3px solid #dc6c85";
                        }
                    }
                    if (element.firstElementChild.children[3]) {
                        if (element.firstElementChild.children[3].getAttribute('data-child') == 7 && element.firstElementChild.children[3].getAttribute('data-previous') == 1111) {
                            element.firstElementChild.children[3].style.border = "3px solid #a1dd6f";
                            element.firstElementChild.children[3].setAttribute('data-previousState', 2222)
                        }
                        else {
                            element.firstElementChild.children[3].style.border = "3px solid #dc6c85";
                        }
                    }
                    if (element.firstElementChild.children[4]) {
                        if (element.firstElementChild.children[4].getAttribute('data-child') == 5) {
                            element.firstElementChild.children[4].style.border = "3px solid #a1dd6f";
                            element.firstElementChild.children[4].setAttribute('data-previousState', 2222)
                        }
                        else {
                            element.firstElementChild.children[4].style.border = "3px solid #dc6c85";
                        }
                    }
                    if (element.firstElementChild.children[5]) {
                        if (element.firstElementChild.children[5].getAttribute('data-child') == 3 && element.firstElementChild.children[5].getAttribute('data-previous') == 1111) {
                            element.firstElementChild.children[5].style.border = "3px solid #a1dd6f";
                            element.firstElementChild.children[5].setAttribute('data-previousState', 2222)
                        }
                        else {
                            element.firstElementChild.children[5].style.border = "3px solid #dc6c85";
                        }
                    }
                    if(element.firstElementChild.children[6]){
                        element.firstElementChild.children[6].style.border = "3px solid #dc6c85";
                    }
                    if(element.firstElementChild.children[7]){
                        element.firstElementChild.children[7].style.border = "3px solid #dc6c85";
                    }
                }
            }
            if (element.getAttribute('data-drag') == 2) {
                for (let i = 1; i < myDragArray[1].firstElementChild.children.length; i++) {
                    if (element.firstElementChild.children[1]) {
                        if (element.firstElementChild.children[1].getAttribute('data-child') == 1) {
                            element.firstElementChild.children[1].style.border = "3px solid #a1dd6f";
                            element.firstElementChild.children[1].setAttribute('data-previousState', 2222)
                        }
                        else {
                            element.firstElementChild.children[1].style.border = "3px solid #dc6c85";
                        }
                    }
                    if(element.firstElementChild.children[2]){
                        element.firstElementChild.children[2].style.border = "3px solid #dc6c85";
                    }
                    if(element.firstElementChild.children[6]){
                        element.firstElementChild.children[6].style.border = "3px solid #dc6c85";
                    }
                    if(element.firstElementChild.children[3]){
                        element.firstElementChild.children[3].style.border = "3px solid #dc6c85";
                    }
                    if(element.firstElementChild.children[4]){
                        element.firstElementChild.children[4].style.border = "3px solid #dc6c85";
                    }
                    if(element.firstElementChild.children[5]){
                        element.firstElementChild.children[5].style.border = "3px solid #dc6c85";
                    }
                    if(element.firstElementChild.children[6]){
                        element.firstElementChild.children[6].style.border = "3px solid #dc6c85";
                    }
                    if(element.firstElementChild.children[7]){
                        element.firstElementChild.children[7].style.border = "3px solid #dc6c85";
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
            for (let i = 1; i < 10; i++) {
                $(element.firstElementChild.children[1]).remove();
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