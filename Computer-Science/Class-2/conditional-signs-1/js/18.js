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

    var previousState = null;
    var idCount = 1;
    var nextState = null;
    var count = 0;

    this.dragdrop = (e) => { e.preventDefault();
        var drag = document.querySelector('.draggedElement')
        var clone = drag.cloneNode(true);
        var dest = clone.getAttribute('data-way');
        if(dest == 'above' && (e.target.getAttribute('data-matrix') == 21 && nextState == null)){
            e.target.appendChild(clone);
            nextState = e.target.getAttribute('data-matrix') - 10;
            return;
        }
        if(dest == 'right' && (e.target.getAttribute('data-matrix') == 32) && nextState == null){
            e.target.appendChild(clone);
            nextState = Number(e.target.getAttribute('data-matrix')) + 1;
            return;

        }
        if(e.target.getAttribute('data-matrix') == nextState && e.target.getAttribute('data-matrix') != 13
            && e.target.getAttribute('data-matrix') != 27){
            e.target.appendChild(clone)
            if(dest == 'right'){
                nextState += 1;
            }
            if(dest == 'left'){
                nextState -= 1;
            }
            if(dest == 'above'){
                nextState -= 10;
            }
            if(dest == 'below'){
                nextState += 10;
            }
        }
        if(e.target.getAttribute('data-matrix') == nextState && dest == 'zig'){
            e.target.appendChild(clone)
            clone.style = "z-index: 1;"
            nextState = null;
        }


    }


    this.successPage = () => {
        this.errorPage();
        if(count == 2){
            location.href = 'game-success-18.html';
        }

    }

    this.errorPage = () => {
        myDragArray.forEach(element => {
            if(element.children[1]){
                element.style = "background: #a1dd6f"
                count++;
            }
            else if(element.children[0] && (element.getAttribute('data-matrix') == 13 || element.getAttribute('data-matrix') == 27)){
                element.style = "background:#dc6c85   "
            }
        });
    }

    this.completGame = () => {
        this.successPage();
        completedBtn.setAttribute('disabled', 'true');
    }


    this.init = () => {
        count = 0;
        nextState = null;
        myDragArray.forEach(element => {
            
            if(element.children[1]){
                if(element.children[1].getAttribute('data-way') == 'zig'){
                    $(element.children[1]).remove();
                }
                
                
            }
            element.style = '';
            if(element.getAttribute('data-matrix') != 13 && element.getAttribute('data-matrix') != 27){
                element.innerHTML = '';
            }
        });

        completedBtn.removeAttribute('disabled');
        
    }





    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());

}


const computergame = new computerGames();