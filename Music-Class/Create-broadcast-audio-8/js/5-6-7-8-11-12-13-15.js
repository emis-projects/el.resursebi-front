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


    this.dragdrop = (e) => { e.preventDefault();
        var drag = document.querySelector('.draggedElement')
        if (window.location.href.includes("/5.html") || window.location.href.includes("/7.html")
            || window.location.href.includes("/8.html")) {
            if (!e.target.children[1]) {
                if (e.target.classList.contains('myDrag')) {
                    e.target.appendChild(drag)
                    drag.setAttribute('style', "height: 61px; width: 61px")
                }
            }
        }
        if (window.location.href.includes("/6.html")) {
            if (!e.target.children[2]) {
                if (e.target.classList.contains('myDrag')) {
                    e.target.appendChild(drag)
                    drag.setAttribute('style', "height: 61px; width: 61px")
                }
            }
        }
        if (window.location.href.includes("/15.html") || window.location.href.includes("/13.html")
            || window.location.href.includes("/11.html")) {
            if (!(e.target.firstElementChild)) {
                if (e.target.classList.contains('myDrag')) {
                    e.target.appendChild(drag)
                    drag.setAttribute('style', "margin-left: 35%;");
                }
            }
        }
        if (window.location.href.includes("/12.html")) {
            if (!e.target.children[1]) {
                if (e.target.classList.contains('myDrag')) {
                    e.target.appendChild(drag)
                    drag.setAttribute('style', "margin-left: 25%;");
                }
            }
        }


        // drag.style += "height: 100%; height: 100%; top: initial; left: initial; right: initial; bottom: initial; width: 100%";

    }


    this.checkEveryElement = (element) => element.getAttribute('data-place') == element.parentElement.getAttribute('data-place');
    this.checkEveryElement1 = (element) => element.parentElement.children[0] && element.parentElement.children[1] &&
         (element.parentElement.children[0].getAttribute('data-place') == element.parentElement.children[1].getAttribute('data-place'));

    this.successPage = () => {
        let el = myArray.every(this.checkEveryElement);
        var m1 = myArray.filter(x => x.parentElement.classList.contains('myDrag'))
        let el1 = m1.every(this.checkEveryElement1);
        myArray.forEach(element => {
            console.log('element', element.parentElement.classList.contains('myDrag') && element.parentElement.children[0] && element.parentElement.children[1] &&
            (element.parentElement.children[0].getAttribute('data-place') == element.parentElement.children[1].getAttribute('data-place')), element.parentElement.classList.contains('myDrag'))
        });

        if (el1) {
            console.log('el1')
            if (window.location.href.includes("/7.html")) {
                console.log('shida if')
                location.href = 'game-success-7.html';
            }
            if (window.location.href.includes("/8.html")) {
                location.href = 'game-success-8.html';
            }
        }

        if (el) {
            if (window.location.href.includes("/5.html")) {
                location.href = 'game-success-5.html';
            }
            if (window.location.href.includes("/6.html")) {
                location.href = 'game-success-6.html';
            }
            if (window.location.href.includes("/11.html")) {
                location.href = 'game-success-11.html';
            }
            if (window.location.href.includes("/12.html")) {
                location.href = 'game-success-12.html';
            }
            if (window.location.href.includes("/13.html")) {
                location.href = 'game-success-13.html';
            }
            if (window.location.href.includes("/15.html")) {
                location.href = 'game-success-15.html';
            }
        }
        else {
            this.errorPage();
        }
        this.errorPage();

    }


    this.errorPage = () => {
        if (window.location.href.includes("/5.html")) {
            myArray.forEach(element => {
                if ((element.getAttribute('data-place') == element.parentElement.getAttribute('data-place'))
                    && (element.parentElement.style.borderColor != "rgb(220, 108, 133)")) {
                    element.parentElement.style.borderColor = "#a1dd6f";
                }
                else if (element.parentElement.classList.contains('myDrag')) {
                    element.parentElement.style.borderColor = "#dc6c85";
                }

            });
        }
        if (window.location.href.includes("/6.html") || window.location.href.includes("/15.html")
            || window.location.href.includes("/13.html") || window.location.href.includes("/11.html")
            || window.location.href.includes("/12.html")) {
            myArray.forEach(element => {
                if (element.getAttribute('data-place') == element.parentElement.getAttribute('data-place')) {
                    element.parentElement.style.borderColor = "#a1dd6f";

                }
                else if (element.parentElement.classList.contains('myDrag')) {
                    element.parentElement.style.borderColor = "#dc6c85";
                }
            });
        }
        if (window.location.href.includes("/7.html") || window.location.href.includes("/8.html")) {
            myArray.forEach(element => {
                if (element.parentElement.classList.contains('myDrag')) {
                    if (element.parentElement.children[0] && !element.parentElement.children[1]) {
                        element.parentElement.style.borderColor = "#dc6c85";
                    }
                    if (element.parentElement.children[0] && element.parentElement.children[1]) {
                        if (element.parentElement.children[0].getAttribute('data-place') == element.parentElement.children[1].getAttribute('data-place')) {
                            console.log('შემოდის')
                            element.parentElement.style.borderColor = "#a1dd6f";
                        }
                        else {
                            element.parentElement.style.borderColor = "#dc6c85";
                        }
                    }
                }

            });
        }
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
            if (element.getAttribute("data-end") == "11") {
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
        myArray.forEach(element => {
            element.style = '';
        });

        completedBtn.removeAttribute('disabled');

    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());


}

const musicgame = new musicGames();