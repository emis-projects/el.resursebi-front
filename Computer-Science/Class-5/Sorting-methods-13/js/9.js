function natureGames() {
    var DragGameChilds1 = document.querySelectorAll('.DragGame--childs1');
    var mydrag = document.querySelectorAll('.myDrag');
    var lineone = document.querySelectorAll('.lineOne')
    linetwo = document.querySelectorAll('.lineTwo')
    linethree = document.querySelectorAll('.lineThree')
    linefour = document.querySelectorAll('.lineFour')
    linefIve = document.querySelectorAll('.lineFIve')

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

    this.dragdrop = (e) => { e.preventDefault();
        var drag = document.querySelector('.draggedElement')
        if(e.target.getAttribute('data-id') != drag.getAttribute('data-id')){
            return;
        }
        if (e.target.classList.contains('myDrag')) {
            e.target.appendChild(drag);
        }
    }

    myArray = [];

    DragGameChilds1.forEach(element => {
        myArray.push(element);
    });

    this.checkEveryElement = (element) => element.parentElement.className.includes('myDrag');


    this.completGame = (e) => {
        var count = 0;
        for(let i= 1; i < 5; i++){
            if(lineone[i].children[0] && (lineone[0].children[0] && lineone[0].children[0].getAttribute('data-line') != lineone[i].children[0].getAttribute('data-line'))){
                lineone[i].children[0].style.color = 'red'
            }
            else{
                count++;
            }
            if(linetwo[i].children[0] && (linetwo[0].children[0] && linetwo[0].children[0].getAttribute('data-line') != linetwo[i].children[0].getAttribute('data-line'))){
                linetwo[i].children[0].style.color = 'red'
            }
            else{
                count++;
            }
            if(linethree[i].children[0] && (linethree[0].children[0] && linethree[0].children[0].getAttribute('data-line') != linethree[i].children[0].getAttribute('data-line'))){
                linethree[i].children[0].style.color = 'red'
            }
            else{
                count++;
            }
            if(linefour[i].children[0] && (linefour[0].children[0] && linefour[0].children[0].getAttribute('data-line') != linefour[i].children[0].getAttribute('data-line'))){
                linefour[i].children[0].style.color = 'red'
            }
            else{
                count++;
            }
            if(linefIve[i].children[0] && (linefIve[0].children[0] && linefIve[0].children[0].getAttribute('data-line') != linefIve[i].children[0].getAttribute('data-line'))){
                linefIve[i].children[0].style.color = 'red'
            }
            else{
                count++;
            }
        }

        if (count == 20 && myArray.every(this.checkEveryElement)) {
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