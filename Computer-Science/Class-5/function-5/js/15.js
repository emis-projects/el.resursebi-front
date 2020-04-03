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
            if(clone.getAttribute('data-child') != 2 && clone.getAttribute('data-child') != 6){
                e.target.appendChild(clone)
            }
            for(let i =0; i<10; i++){
                if(e.target.children[i]){
                    if(e.target.children[i].getAttribute('data-child') == 7){
                        e.target.children[i].classList.add("myDrag");
                    }
                    if(e.target.children[i].getAttribute('data-child') == 3){
                        e.target.children[i].classList.add("myDrag");
                    }
                }
                if(e.target.getAttribute('data-child') == 7 && clone.getAttribute('data-child') == 6){
                    e.target.src = "../../../img/gakvetilebi/Computer-Science/Class-5/function-5/1111111.svg";
                    e.target.setAttribute('data-previous', 1111)
                    $(e.target).removeClass("myDrag");
                }
                if(e.target.getAttribute('data-child') == 3 && clone.getAttribute('data-child') == 2){
                    e.target.src = "../../../img/gakvetilebi/Computer-Science/Class-5/function-5/2222222222.svg";
                    e.target.setAttribute('data-previous', 1111)
                    $(e.target).removeClass("myDrag");
                }
            }
            $(clone).removeClass('draggedElement')
            //clone.style = "margin-left: 4.5%; margin-top: -6.3%;";
            //clone.style="pointer-events: none;"
            //clone.style="height: 50px;margin-left: -28%;margin-top: -3%; margin-bottom: 40%"
            //clone.style="heght: 94px;pointer-events: none;margin-left: -18%; margin-top: -3%;"
            console.log(clone.parentElement.getAttribute('data-drag'))
            if(clone.parentElement.getAttribute('data-drag') == 1){
                if(clone.getAttribute('data-child') == 4){
                    clone.style = "height: 55px;margin-left: -27%; margin-top: -2%;"
                }
                if(clone.getAttribute('data-child') == 1){
                    clone.style = "height: 55px;margin-left: -22.5%; margin-top: -2%;"
                }
                if(clone.getAttribute('data-child') == 3){
                    clone.style = "height: 55px;margin-left: -15.5%; margin-top: -2%;"
                }
                if(clone.getAttribute('data-child') == 5){
                    clone.style = "height: 55px;margin-left: -25.5%; margin-top: -2%;"
                }
                if(clone.getAttribute('data-child') == 7){
                    clone.style = "height: 55px;margin-left: -22%; margin-top: -2%;"
                }
            }
            if(clone.parentElement.getAttribute('data-drag') == 2){
                clone.style = "height: 33px;margin-top: -2%;margin-left: 6%;"
            }

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
          if(count == 6){
            location.href = 'game-success-15.html';
          }

    }




    this.errorPage = () => {
        myDragArray.forEach(element => {
            if (element.getAttribute('data-drag') == 1) {
                for (let i = 1; i < myDragArray[0].children.length; i++) {
                    if (element.children[1]) {
                        if (element.children[1].getAttribute('data-child') == 7 && element.children[1].getAttribute('data-previous') == 1111) {
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
                        if (element.children[3].getAttribute('data-child') == 7 && element.children[3].getAttribute('data-previous') == 1111) {
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
                        if (element.children[5].getAttribute('data-child') == 3 && element.children[5].getAttribute('data-previous') == 1111) {
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
                        if (element.children[1].getAttribute('data-child') == 1) {
                            element.children[1].style.border = "3px solid #a1dd6f";
                            element.children[1].setAttribute('data-previousState', 2222)
                        }
                        else {
                            element.children[1].style.border = "3px solid #dc6c85";
                        }
                    }
                    if(element.children[2]){
                        element.children[2].style.border = "3px solid #dc6c85";
                    }
                    if(element.children[6]){
                        element.children[6].style.border = "3px solid #dc6c85";
                    }
                    if(element.children[3]){
                        element.children[3].style.border = "3px solid #dc6c85";
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
            for (let i = 1; i < 10; i++) {
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