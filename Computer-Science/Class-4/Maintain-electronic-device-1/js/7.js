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

    var isDataPlace = false;

    this.dragDrop = (e) => { e.preventDefault();
        var drag = document.querySelector('.draggedElement')
        ESrc = e.target.src;
        if(drag.getAttribute('data-place') == 1){
            e.target.src = "../../../img/gakvetilebi/Computer-Science/Class-4/Maintain-electronic-device-1/cs-4-1-7-game-img-containerGamtari1.svg";
            isDataPlace = true;
        }
        if(drag.getAttribute('data-place') == 2){
            e.target.src = "../../../img/gakvetilebi/Computer-Science/Class-4/Maintain-electronic-device-1/cs-4-1-7-game-img-containerGamtari2.svg";
            isDataPlace = true;
        }
        if(drag.getAttribute('data-place') == 3){
            e.target.src = "../../../img/gakvetilebi/Computer-Science/Class-4/Maintain-electronic-device-1/cs-4-1-7-game-img-containerGamtari3.svg";
            isDataPlace = true;
        }
        if(drag.getAttribute('data-place') == 4){
            e.target.src = "../../../img/gakvetilebi/Computer-Science/Class-4/Maintain-electronic-device-1/cs-4-1-7-game-img-containerGamtari4.svg";
            isDataPlace = false;
        }
        if(drag.getAttribute('data-place') == 5){
            e.target.src = "../../../img/gakvetilebi/Computer-Science/Class-4/Maintain-electronic-device-1/cs-4-1-7-game-img-containerGamtari5.svg";
            isDataPlace = true;
        }
        if(drag.getAttribute('data-place') == 6){
            e.target.src = "../../../img/gakvetilebi/Computer-Science/Class-4/Maintain-electronic-device-1/cs-4-1-7-game-img-containerGamtari6.svg";
            isDataPlace = false;
        }
        
    }

    this.completGame = (e) => {
        if (isDataPlace) {
            this.successPage();
        }
        completedBtn.setAttribute('disabled', 'true');
    }
    this.successPage = () => {
        location.href = 'game-success-8.html';
    }

    this.init = (e) => {

        document.getElementById('defaultImage').src = "../../../img/gakvetilebi/Computer-Science/Class-4/Maintain-electronic-device-1/cs-4-1-7-game-img-containerEmpty.svg";
        completedBtn.removeAttribute('disabled');
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
}


const naturegame = new natureGames();