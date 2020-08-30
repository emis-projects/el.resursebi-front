

function musicGames() {
    this.index = 0;
    this.answers = [1, 2, 3, 4, 5, 6];



    var dragElement1 = document.querySelectorAll('.DragGame—childs1');
    var dragElement2 = document.querySelector('.DragGame--childs2');
    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');


    $('.DragGame—childs1').on('dragstart', (e) => this.dragStart(e));
    $('.DragGame—childs1').on('dragend', (e) => this.dragEnd(e));

    dragElement2.addEventListener('dragover', (e) => this.dragOver(e));
    dragElement2.addEventListener('drop', (e) => this.dragDrop(e));



    var dragElement1MyArray = [];
    for(var i = 0; i < dragElement1.length; i++ ){
        dragElement1MyArray.push(dragElement1[i])
    }


    document.addEventListener('DOMContentLoaded', () => {
        dragElement1MyArray.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
        })
    })

    this.dragOver = (e) => {
        e.preventDefault();
    }

    this.dragStart = (e) => {
        setTimeout(() => {
            if(e.target.parentElement.classList.contains('parent')){
                e.target.className = "draggedElement"
            }
        }, 0);
    }

    this.dragEnd = (e) => {
        var elClassName = e.target.getAttribute('data-class')
        e.target.className = elClassName;
    }


    this.dragDrop = (e) => {
        let dropElement = document.querySelector('.draggedElement').getAttribute('data-index');
        
        if(dropElement == this.answers[this.index]) {
            e.target.appendChild(document.querySelector('.draggedElement'));
            this.index++;
        }
    }


    // this.checkEveryElement = (element) => element.getAttribute('data-place') == element.parentElement.getAttribute('data-place');


    this.completGame = () => {
       console.log('completed');

        // completedBtn.setAttribute('disabled', 'true');
    }


    this.init = (e) => {
        console.log('init');

        // completedBtn.removeAttribute('disabled');

    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
}


const musicgame = new musicGames();