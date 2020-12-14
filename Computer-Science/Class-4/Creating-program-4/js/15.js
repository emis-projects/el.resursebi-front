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

        var drag = document.querySelector('.draggedElement');
        var clone = drag.cloneNode(true);
        // $(clone).removeClass('draggedElement');
        if (!e.target.childNodes.length && (clone.getAttribute('data-same') == e.target.getAttribute('data-same'))) {
            e.target.appendChild(clone);
            clone1 = e.target.appendChild(clone);
        }
    }



    this.successPage = () => {
        this.errorPage();
        let el = myDragArray.every(this.checkEveryElement);
        if(el){
            location.href = 'game-success-15.html';
        }

    }

    this.checkEveryElement = (element) => element.getAttribute('data-place') == element.children[0].getAttribute('data-place');


    this.errorPage = () => {
        myDragArray.forEach(element => {
            if(element.children[0]){
                if((element.children[0].getAttribute('data-place') == element.getAttribute('data-place'))){
                    element.classList.add('success');
                }
                else{
                    element.classList.add('error')
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
            $(element).empty()
            $(element).removeClass('error');
            $(element).removeClass('success');
        });



        completedBtn.removeAttribute('disabled');
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());


}



const computergame = new computerGames();