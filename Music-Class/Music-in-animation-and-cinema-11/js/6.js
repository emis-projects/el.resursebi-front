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
    var mydrag = document.querySelectorAll('.myDrag');
    var DragGameResetParent1 = document.querySelector('.DragGameResetParent1');
    var DragGameResetParent2 = document.querySelector('.DragGameResetParent2');
    var DragGameResetParent3 = document.querySelector('.DragGameResetParent3');


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

    var myDragArray = [];

    mydrag.forEach(element => {
        myDragArray.push(element);
    });


    this.dragDrop = (e) => { e.preventDefault();
        var drag = document.querySelector('.draggedElement')
        if (e.target.classList.contains('myDrag')) {
            e.preventDefault();
            e.target.appendChild(drag)
        }
        drag.setAttribute('style', "height: 100%;")
    }


    this.checkEveryElement = (element) => element.getAttribute('data-place') == element.parentElement.getAttribute('data-place');

    this.successPage = () => {
        let el = myArray.every(this.checkEveryElement);
        if (el) {
            location.href = 'game-success-6.html'
        }
        else {
            this.errorPage();
        }
        this.errorPage();

    }


    this.errorPage = () => {
        myArray.forEach(element => {
            if (element.getAttribute('data-place') == element.parentElement.getAttribute('data-place')) {
                element.parentElement.style.borderColor = "#a1dd6f";

            }
            else if (element.parentElement.classList.contains('myDrag')) {
                element.parentElement.style.borderColor = "#dc6c85";
            }


        });
    }

    this.completGame = () => {
        this.successPage();
        completedBtn.setAttribute('disabled', 'true');
    }


    this.init = (e) => {
        myArray.forEach(element => {
            //   document.getElementById(element.getAttribute("data-place"))
            //     .insertBefore(element, document.getElementById(element.getAttribute("data-place")).firstChild);
            if (element.getAttribute("data-end") == "1") {
                DragGameResetParent1.appendChild(element)
            }
            if (element.getAttribute("data-end") == "2") {
                DragGameResetParent2.appendChild(element)
            }
            if (element.getAttribute("data-end") == "3") {
                DragGameResetParent3.appendChild(element)
            }
        });
        myDragArray.forEach(element => {
            element.style = '';
        });

        completedBtn.removeAttribute('disabled');

    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());


}

const musicgame = new musicGames();