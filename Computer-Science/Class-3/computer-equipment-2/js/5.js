function natureGames() {
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

    myDragArray = [];

    mydrag.forEach(element => {
        myDragArray.push(element);
    });

    this.dragdrop = (e) => { e.preventDefault();
        var drag = document.querySelector('.draggedElement')
        var clone = drag.cloneNode(true);
        if (e.target.classList.contains('myDrag') && !e.target.classList.contains(clone.getAttribute('data-name'))) {
            e.target.classList.add(clone.getAttribute('data-name'))
            e.target.appendChild(clone);
            $(clone).removeClass('draggedElement')
            clone.classList.add("clone");
            clone.setAttribute('style', "height: 45%; width: initial")
            //clone.style += "height: 50%; height: 50%; top: initial; left: initial; right: initial; bottom: initial; width: 30%;";
        }
    }



    this.completGame = (e) => {
        var childClone = document.querySelectorAll('.clone')
        var count = 0;
        childClone.forEach(element => {
            if (element.getAttribute('data-place') == element.parentElement.getAttribute('data-place') || element.getAttribute('data-place1') == element.parentElement.getAttribute('data-place')) {
                count++;
                element.style.border = "3px solid #a1dd6f";
            }
            // if (element.getAttribute('data-place') != element.parentElement.getAttribute('data-place')
            //     && element.parentElement.classList.contains('myDrag')) {
            //     element.style.border = "3px solid #dc6c85";
            // }
            else{
                element.style.border = "3px solid #dc6c85";
                count--;
            }
        });

        if (count == 6) {
            this.successPage();
        }
        completedBtn.setAttribute('disabled', 'true');
    }
    this.successPage = () => {
        location.href = 'game-success-5.html';
    }

    this.init = (e) => {
        myDragArray.forEach(element => {
            element.style = '';
            $(element).empty()
            $(element).removeClass("monitor");
            $(element).removeClass("case");
            $(element).removeClass("keyboard");
            $(element).removeClass("mouse");

        });

        completedBtn.removeAttribute('disabled');
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
}


const naturegame = new natureGames();