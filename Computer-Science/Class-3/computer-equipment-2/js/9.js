function natureGames() {
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

    this.dragDrop = (e) => { e.preventDefault();
        var drag = document.querySelector('.draggedElement')
        if (e.target.classList.contains('myDrag')) {
            e.target.appendChild(drag);
            console.log(drag)
            if(drag.classList.contains('case') || drag.classList.contains('FlashDrive')){
                drag.setAttribute('style', "height: 30%; width: initial")
            }
        }
    }

    myArray = [];

    DragGameChilds1.forEach(element => {
        myArray.push(element);
    });

    this.checkEveryElement = (element) => element.getAttribute('data-place') == element.parentElement.getAttribute('data-place');

    this.completGame = (e) => {
        myArray.forEach(element => {
            if (element.getAttribute('data-place') == element.parentElement.getAttribute('data-place')) {
                element.style.border = "3px solid #a1dd6f";
            }
            if (element.getAttribute('data-place') != element.parentElement.getAttribute('data-place')
                && element.parentElement.classList.contains('myDrag')) {
                element.style.border = "3px solid #dc6c85";
            }
        });
        let el = myArray.every(this.checkEveryElement);
        if (el == true) {
            this.successPage();
        }
        completedBtn.setAttribute('disabled', 'true');
    }
    this.successPage = () => {
        location.href = 'game-success-9.html';
    }

    this.init = (e) => {
        DragGameParent.forEach(element => {
            
            element.appendChild(document.getElementById(element.getAttribute('data-side')));
            element.firstElementChild.style = '';
        });

        completedBtn.removeAttribute('disabled');
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
}


const naturegame = new natureGames();