function computerGames() {
    var DragGameChilds1 = document.querySelectorAll('.DragGame--childs1');
    var mydrag = document.querySelectorAll('.myDrag');

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

    var clone1;

    this.dragdrop = (e) => { e.preventDefault();
        var drag = document.querySelector('.draggedElement')
        if(e.target.parentElement.children[1]){
            return;
        }
        if(drag){
            $(drag).removeClass('draggedElement')
            e.target.parentElement.appendChild(drag);
            drag.style = "margin-top: -7px";
        }
    }

    this.checkEveryElement = (element) =>element.children[1]? element.children[1].getAttribute('data-place') == element .getAttribute('data-place'): false;

    this.successPage = () => {
        let el = myDragArray.every(this.checkEveryElement);
        if (el == true) {
                location.href = 'game-success-5.html';
        }
        else {
            this.errorPage();
        }

    }

    this.errorPage = () => {
        myDragArray.forEach(element => {
            if(element && element.children[1]){
                if((element.children[1].getAttribute('data-place') == element.getAttribute('data-place'))){
                    element.style.border = "2px solid #a1dd6f"
                    if(element.getAttribute('data-place') == 4 || element.getAttribute('data-place') == 5){
                        element.style.width = "197px";
                    }
                    if(element.getAttribute('data-place') == 1 || element.getAttribute('data-place') == 3){
                        element.style.width = "150px";
                    }
                    if(element.getAttribute('data-place') == 2){
                        element.style.width = "120px";
                    }
                }
                else{
                    element.style.border = "2px solid #dc6c85"
                    if(element.getAttribute('data-place') == 4 || element.getAttribute('data-place') == 5){
                        element.style.width = "197px";
                    }
                    if(element.getAttribute('data-place') == 1 || element.getAttribute('data-place') == 3){
                        element.style.width = "150px";
                    }
                    if(element.getAttribute('data-place') == 2){
                        element.style.width = "120px";
                    }
                }
            }
        });
    }

    this.completGame = () => {

        this.successPage();
        completedBtn.setAttribute('disabled', 'true');
    }

    this.init = () => {
        myDragArray.forEach(element => {
            element.style = '';
        });
        var parents = document.querySelectorAll('.parent');
        parents.forEach(element => {
            element.appendChild(document.getElementById(element.getAttribute('data-id')));

        });
        completedBtn.removeAttribute('disabled');
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());


}



const computergame = new computerGames();