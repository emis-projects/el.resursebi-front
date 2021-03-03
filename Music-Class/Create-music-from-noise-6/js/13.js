createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];

function handleLoadComplete(event) {
    createjs.Sound.play("sound");
}

function handleLoadstop(event) {
    createjs.Sound.stop("sound");
}


document.querySelectorAll('.listen--btn').forEach(w => {
    w.addEventListener('click', (e) => {
        handleLoadstop()
        createjs.Sound.registerSound({ src: `${e.target.getAttribute('data-voice')}`, id: "sound" });
        handleLoadComplete()
    })
})



function musicGames() {
    var DragGameChilds1 = document.querySelectorAll('.DragGame--childs1');
    var DragGameChilds2 = document.querySelectorAll('.DragGame--childs2');
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


    var myArray = [];
    DragGameChilds1.forEach(element => {
        myArray.push(element);
    });

    var myArray2 = [];

    DragGameChilds2.forEach(element => {
        myArray2.push(element);
    });


    this.dragDrop = (e) => { 
        e.preventDefault();
        var drag = document.querySelector('.draggedElement')
        e.target.parentElement.appendChild(drag)

        myArray2.forEach(w => {
            if(!w.querySelector('.DragGame--childs1')) {
                w.appendChild(e.target.parentElement.firstElementChild)
            }
        })   
    }

    this.checkEveryElement = (element) => element.getAttribute('data-index') == element.querySelector('.DragGame--childs1').getAttribute('data-index2');


    this.successPage = () => {
        let answer = myArray2.every(this.checkEveryElement)

        if(answer){
            location.href = 'game-success-13.html'

        } else {
            myArray2.forEach(w => {
                if(w.getAttribute('data-index') == w.querySelector('.DragGame--childs1').getAttribute('data-index2')) {
                    w.querySelector('.DragGame--childs1').setAttribute('style', 'border: 2px solid #a1dd6f')
                    this.index++
                } else {
                    w.querySelector('.DragGame--childs1').setAttribute('style', 'border: 2px solid #dc6c85')
                }
            })
        }
    }


    this.completGame = () => {
        this.successPage();
        completedBtn.setAttribute('disabled', 'true');
    }


    this.init = (e) => {
        myArray.forEach(w => {
            w.removeAttribute('style')
        })
        completedBtn.removeAttribute('disabled');

    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());


}

const musicgame = new musicGames();