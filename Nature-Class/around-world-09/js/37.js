function naturegaMes() {
    var draggedImgElement = document.querySelectorAll('.imge');
    var mydrag = document.querySelectorAll('.myDrag');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');

    $(draggedImgElement).on('dragstart', (e) => this.dragStart(e));
    $(draggedImgElement).on('dragend', (e) => this.dragEnd(e));

    for (const drag of mydrag) {
        drag.addEventListener('dragover', (e) => this.dragOver(e));
        drag.addEventListener('drop', (e) => this.dragDrop(e));
    }

    document.addEventListener('DOMContentLoaded', () => {
        mydrag.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
        })
        draggedImgElement.forEach(w => {
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
    draggedImgElement.forEach(element => {
        myArray.push(element);
    });

    this.dragDrop = (e) => { e.preventDefault();
        var drag = document.querySelector('.draggedElement')
        if (e.target.classList.contains('myDrag')) {
            e.target.appendChild(drag);
        }
    }

    this.completGame = () => {
        var count = 0;
        myArray.forEach(element => {
            if (element.getAttribute('data-place') == element.parentElement.getAttribute('data-place')) {
                count++
            }
            if(element.getAttribute('data-place') != element.parentElement.getAttribute('data-place') && element.parentElement.classList.contains('myDrag')){
                element.style = "border: 3px solid #dc6c85;"
            }
        });
        if (count == 6) {
            this.successPage();
        }
        completedBtn.setAttribute('disabled', 'true');
    }

    this.successPage = () => {
        location.href = 'game-success-37.html';
    }


    this.init = (e) => {
        myArray.forEach(element => {
            element.style = '';
        });
        var parents = document.querySelectorAll('.parent');
        parents.forEach(element => {
            console.log(element.getAttribute('data-side'))
            element.appendChild(document.getElementById(element.getAttribute('data-side')));
        });
        completedBtn.removeAttribute('disabled');
    }



    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());

}

const naturegame = new naturegaMes();