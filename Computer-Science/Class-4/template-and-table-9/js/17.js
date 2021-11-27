function computerGames() {
    var DragGameChilds1 = document.querySelectorAll('.DragGame--childs1');
    var DragGameParent = document.querySelectorAll('.DragGame--Parent');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');

    $(DragGameChilds1).on('dragstart', (e) => this.dragStart(e));
    $(DragGameChilds1).on('dragend', (e) => this.dragEnd(e));

    for (const drag of DragGameChilds1) {
        drag.addEventListener('dragover', (e) => this.dragOver(e));
        drag.addEventListener('drop', (e) => this.dragDrop(e));
    }

    document.addEventListener('DOMContentLoaded', () => {
        DragGameParent.forEach(w => {
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

    this.dragDrop = (e) => { e.preventDefault();
        var drag = document.querySelector('.draggedElement');
        var dragParent = drag.parentElement;
        let firstElement = e.target.parentElement.firstElementChild;
        if (e.target.parentElement.classList.contains('DragGame--Parent')) {
            e.target.parentElement.appendChild(drag);
            dragParent.appendChild(firstElement)
        }
    }
    this.checkEveryElement = (element) => element.getAttribute('data-place') == element.parentElement.getAttribute('data-place');

    this.successPage = () => {

        $( ".DragGame--childs1" ).each(function( index ) {
            if($( this ).attr('data-place') !== $(this).parent().attr('data-place')) {
                $( this ).attr('style', 'background: #dc6c85; width: 50.6vw;')
            } else {
                $( this ).attr('style', 'background: #A1DD6F; width: 50.6vw;')
            }
        });

        let el = myArray.every(this.checkEveryElement);
        if (el == true) {
            console.log('true')
            location.href = 'game-success-17.html';
        }
    }

    this.completGame = () => {
        this.successPage();
    }

    this.init = () => {
        $('.DragGame--childs1').attr('style', 'width: 50.6vw;')

        DragGameParent.forEach(element => {
            element.appendChild(document.getElementById(element.getAttribute('data-place')));

        });
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());

}




const computergame = new computerGames();