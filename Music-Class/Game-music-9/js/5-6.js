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
    var DragGameResetParent = document.querySelector('.DragGameResetParent');

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


    this.dragdrop = (e) => { e.preventDefault();
        var drag = document.querySelector('.draggedElement')
        // if(!(e.target.firstElementChild)){
            if (e.target.classList.contains('myDrag')) {
                e.target.appendChild(drag)
                drag.setAttribute('style', "height: 100%")
            }
        // }
        
    }


    this.checkEveryElement = (element) => element.getAttribute('data-place') == element.parentElement.getAttribute('data-place');

    this.successPage = () => {
        let el = myArray.every(this.checkEveryElement);
        if (el) {
            if (window.location.href.includes("/5.html")) {
                location.href = 'game-success-5.html';
            }
            if (window.location.href.includes("/6.html")) {
                location.href = 'game-success-6.html';
            }
            if (window.location.href.includes("/9.html")) {
                location.href = 'game-success-9.html';
            }
            if (window.location.href.includes("/10.html")) {
                location.href = 'game-success-10.html';
            }
        }
        else {
            this.errorPage();
        }
        this.errorPage();

    }


    this.errorPage = () => {
        myArray.forEach(element => {
            if (element.getAttribute('data-place') == element.parentElement.getAttribute('data-place')) {
                $(element.parentElement).removeClass('game_music_9-box_fill')
                element.parentElement.classList.add('success')

            }
            else if (element.parentElement.classList.contains('myDrag')) {
                $(element.parentElement).removeClass('game_music_9-box_fill')
                element.parentElement.classList.add('error');
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
                DragGameResetParent.appendChild(element)
            }
        });
        myDragArray.forEach(element => {
            $(element).removeClass('error')
            $(element).removeClass('success')
            if(window.location.href.includes("/9.html") || window.location.href.includes("/10.html")){
                console.log(element.classList.contains('chekmarkJS56'))
                if(element.classList.contains('chekmarkJS56')){
                    element.classList.add('game_music_9-box_fill')
                }
            }
        });

        myArray.forEach(element => {
            element.style = '';
        });


        completedBtn.removeAttribute('disabled');

    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());


}

const musicgame = new musicGames();