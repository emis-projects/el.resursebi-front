function natureGames() {
    var DragGameChilds1 = document.querySelectorAll('.DragGame--childs1');
    var mydrag = document.querySelectorAll('.myDrag');

    var parent1 = document.querySelector('.parent1');

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

    myArray = [];

    DragGameChilds1.forEach(element => {
        myArray.push(element);
    });

    myDragArray = [];

    mydrag.forEach(element => {
        myDragArray.push(element);
    });

    this.dragdrop = (e) => { e.preventDefault();
        var drag = document.querySelector('.draggedElement')
        if (e.target.classList.contains('myDrag')) {
            e.target.appendChild(drag);
            drag.style = "height: 100%; top: initial; left: initial; right: initial; bottom: initial; width: 100%;";
        }
    }

    this.checkEveryElement = (element) => element.getAttribute('data-place') == element.parentElement.getAttribute('data-place');

    this.completGame = (e) => {
        var count = 0;
        myArray.forEach(element => {
            if (element.getAttribute('data-place') == element.parentElement.getAttribute('data-place')) {
                count++;
                //element.style.border = "3px solid #a1dd6f";
                element.parentElement.classList.add('success');
            }
            if (element.getAttribute('data-place') != element.parentElement.getAttribute('data-place')
                && element.parentElement.classList.contains('myDrag')) {
                //element.style.border = "3px solid #dc6c85";
                element.parentElement.classList.add('error');
            }
        });
        let el = myArray.every(this.checkEveryElement);
        if (el == true) {
            this.successPage();
        }
        completedBtn.setAttribute('disabled', 'true');
    }
    this.successPage = () => {
        location.href = 'game-success-20.html';
    }

    this.init = (e) => {
        console.log('init', myDragArray)
        myArray.forEach(element => {
            element.style = '';
            if (element.getAttribute("data-end") == "1") {
                parent1.appendChild(element)
            }
        });
        myDragArray.forEach(element => {
            $(element).removeClass("error");
            $(element).removeClass("success");

        });

        completedBtn.removeAttribute('disabled');
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
}


const naturegame = new natureGames();