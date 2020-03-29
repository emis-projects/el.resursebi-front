function natureGames() {
    var DragGameChilds1 = document.querySelectorAll('.DragGame--childs1');
    var mydrag = document.querySelectorAll('.myDrag');

    var parent1 = document.querySelector('.parent1');
    var parent2 = document.querySelector('.parent2');

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

    this.dragDrop = (e) => {
        var drag = document.querySelector('.draggedElement')
        if (e.target.classList.contains('myDrag')) {
            e.target.appendChild(drag);
        }
        console.log(drag)
        //drag.style += "height: 10%; top: 10px; left: initial; right: initial; bottom: 10px; width: 100%;pointer-events: none;";
        drag.firstElementChild.className = 'sign-description-btn-title-light-purple';
        drag.style = "height:40px;margin-top:10px;"
    }

    myArray = [];

    DragGameChilds1.forEach(element => {
        myArray.push(element);
    });

    this.completGame = (e) => {
        var count = 0;
        myArray.forEach(element => {
            if (element.getAttribute('data-place') == element.parentElement.getAttribute('data-place')) {
                count++;
                element.style = "height: 40px; margin-top: 10px;background:#a1dd6f";
            }
            if (element.getAttribute('data-place') != element.parentElement.getAttribute('data-place')
                && element.parentElement.classList.contains('myDrag')) {
                element.style = "height: 40px; margin-top: 10px;background:#dc6c85";
            }
        });
        if (count == 8) {
            this.successPage();
        }
        completedBtn.setAttribute('disabled', 'true');
    }
    this.successPage = () => {
        location.href = 'game-success-10.html';
    }

    this.init = (e) => {
        myArray.forEach(element => {
            element.style = '';
            if (element.getAttribute("data-end") == "1") {
                parent1.appendChild(element)
            }
            if (element.getAttribute("data-end") == "2") {
                parent2.appendChild(element)
            }
        });
        completedBtn.removeAttribute('disabled');
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
}


const naturegame = new natureGames();