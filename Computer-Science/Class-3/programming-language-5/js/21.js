function computerGames() {
    var DragGameChilds1 = document.querySelectorAll('.DragGame--childs1');
    var mydrag = document.querySelectorAll('.myDrag');
    var result = document.querySelectorAll('.result');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');

    $(DragGameChilds1).on('dragstart', (e) => this.dragStart(e));
    $(DragGameChilds1).on('dragend', (e) => this.dragEnd(e));

    var count = 0;

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


    var myArrayResult = [];

    result.forEach(element => {
        myArrayResult.push(element);
    });

    var previousState = null;
    document.getElementById('11').innerHTML = '&#9679;'
    document.getElementById('1').innerHTML = '&#9679;'
    idCount = 1;


    this.dragDrop = (e) => { e.preventDefault();

        if (e.target.getAttribute('data-mydrag') == idCount) {
            if (e.target.firstElementChild || e.target.classList.contains('DragGame--childs1')) {
                return;
            }
            var drag = document.querySelector('.draggedElement')
            drags = drag.cloneNode(true);

            e.target.appendChild(drags)
            $(drags).removeClass('draggedElement')
            var dest = drags.getAttribute('data-way');
            if (previousState == null) {
                previousState = 11;
            }
            if (dest == 'right') {
                previousState += 1;
                if(document.getElementById(previousState)){
                    document.getElementById(previousState).setAttribute('data-previousState', 2222)
                }
                
            }
            if (dest == 'below') {
                previousState += 10;
                if(document.getElementById(previousState)){
                    document.getElementById(previousState).setAttribute('data-previousState', 2222)
                }
            }
            if (dest == 'left') {
                previousState -= 1;
                if(document.getElementById(previousState)){
                    document.getElementById(previousState).setAttribute('data-previousState', 2222)
                }
            }
            if (dest == 'above' ) {
                previousState -= 10;
                if(document.getElementById(previousState)){
                    document.getElementById(previousState).setAttribute('data-previousState', 2222)
                }

            }
            if (dest == 'zig') {
                if(document.getElementById(previousState)){
                    document.getElementById(previousState).setAttribute('data-zig', 1111)
                    document.getElementById(previousState).setAttribute('data-previousState', 2222)
                }
            }
            idCount++;
        }
    }



    this.successPage = () => {
        count = 0;
        myArrayResult.forEach(element => {
            if(element.getAttribute('data-matrix') == 11 && element.getAttribute('data-zig') == 1111){
                document.getElementById('11').innerHTML = '';
            }
            if (element.getAttribute('data-correct') == element.getAttribute('data-zig')
                && element.getAttribute('data-zig') == 1111) {
                count++;
            }
            if ((element.getAttribute('data-zig') == 1111) && (element.getAttribute('data-correct') != 1111)) {
                count -= 1;
            }
        });
        if (count == 4) {
            location.href = 'game-success-21.html';
        }
        else {
            this.errorPage();
        }
    }


    this.errorPage = () => {

        myArrayResult.forEach(element => {
            if ((element.getAttribute('data-zig') == 1111) && (element.getAttribute('data-correct') == null)) {
                element.style.backgroundColor = 'red'
            }
        });
    }

    this.completGame = () => {
        
        myArrayResult.forEach(element => {
            
            if (element.getAttribute('data-zig') == 1111) {
                element.style.backgroundColor = 'black'
            }
            // if (element.getAttribute('data-previousState') == 2222 && element.getAttribute('data-zig') != 1111) {
            //     element.innerHTML = '&#9679;'
            // }
        });
        this.successPage();
        completedBtn.setAttribute('disabled', 'true');
    }

    this.init = () => {
        document.getElementById('11').innerHTML = '&#9679;'
        idCount = 1;
        count = 0;
        previousState = null;
        myDragArray.forEach(element => {
            element.innerHTML = '';
            document.getElementById('1').innerHTML = '&#9679;'


        });

        myArrayResult.forEach(element => {

            if (element.getAttribute('data-matrix') != 11) {
                element.innerHTML = '';
            }
            element.setAttribute('data-previousState', null);
            element.style = '';
            element.setAttribute('data-zig', null);
        });
        completedBtn.removeAttribute('disabled');

    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());


}



const computergame = new computerGames();