function natureGames() {
    var DragGameChilds1 = document.querySelectorAll('.DragGame--childs1');
    var mydrag = document.querySelectorAll('.myDrag');
    var parent1 = document.querySelector('.parent1');
    var parent2 = document.querySelector('.parent2');
    var parent3 = document.querySelector('.parent3');
    var parent4 = document.querySelector('.parent4');

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
        if (window.location.href.includes("5-1.html")) {
            if ((e.target.children[e.target.children.length - 1] && (drag.getAttribute('data-color')
                != e.target.children[e.target.children.length - 1].getAttribute('data-color')))
                || (drag != drag.parentElement.children[drag.parentElement.children.length - 1])
                || (e.target.getAttribute('data-div') == 2 && e.target.children.length == 3)
                || (e.target.getAttribute('data-div') == 3 && e.target.children.length == 3)
                || (e.target.getAttribute('data-div') == 1 && e.target.children.length == 4)) {
                return;
            }
        }
        if (window.location.href.includes("5-2.html")) {
            if ((e.target.children[e.target.children.length - 1] && (drag.getAttribute('data-color')
                != e.target.children[e.target.children.length - 1].getAttribute('data-color')))
                || (drag != drag.parentElement.children[drag.parentElement.children.length - 1])
                || (e.target.children.length == 3)) {
                return;
            }
        }
        if (window.location.href.includes("5-3.html")) {
            if ((e.target.children[e.target.children.length - 1] && (drag.getAttribute('data-color')
                != e.target.children[e.target.children.length - 1].getAttribute('data-color')))
                || (drag != drag.parentElement.children[drag.parentElement.children.length - 1])
                || (e.target.getAttribute('data-div') == 1 && e.target.children.length == 3)
                || (e.target.getAttribute('data-div') == 2 && e.target.children.length == 3)
                || (e.target.getAttribute('data-div') == 3 && e.target.children.length == 3)
                || (e.target.getAttribute('data-div') == 4 && e.target.children.length == 2)) {
                return;
            }
        }

        if (e.target.classList.contains('myDrag')) {
            e.target.appendChild(drag);
        }

    }

    myArray = [];

    DragGameChilds1.forEach(element => {
        myArray.push(element);
    });

    myDragArray = [];

    mydrag.forEach(element => {
        myDragArray.push(element);
    });

    this.completGame = (e) => {

        this.checkEveryElement = (element) => element.getAttribute('data-color') == 'yellow';
        var count = 0
        var count1 = 0
        var count2 = 0
        myDragArray.forEach(element => {

            if (window.location.href.includes("5-1.html")) {
                if ((element.getAttribute('data-div') == 1 && element.children.length == 4)) {
                    let el = Object.values(element.children).every(this.checkEveryElement);
                    if (el) {
                        count++;
                    }
                }
                if (element.getAttribute('data-div') == 3 && (element.children.length == 3 || element.children.length == 0)) {
                    count += 1;
                }
            }
            if (window.location.href.includes("5-2.html")) {
                if ((element.getAttribute('data-div') == 1 && element.children.length == 0) || (element.getAttribute('data-div') == 2 && element.children.length == 0)
                    || (element.getAttribute('data-div') == 3 && element.children.length == 0) || (element.getAttribute('data-div') == 4 && element.children.length == 0)) {
                    count1++;
                }
                if ((element.getAttribute('data-div') == 1 && element.children.length == 3)
                    && (element.children[0].getAttribute('data-color') == element.children[1].getAttribute('data-color'))
                    && (element.children[0].getAttribute('data-color') == element.children[2].getAttribute('data-color'))) {
                    count1++
                }
                if ((element.getAttribute('data-div') == 2 && element.children.length == 3)
                    && (element.children[0].getAttribute('data-color') == element.children[1].getAttribute('data-color'))
                    && (element.children[0].getAttribute('data-color') == element.children[2].getAttribute('data-color'))) {
                    count1++
                }
                if ((element.getAttribute('data-div') == 3 && element.children.length == 3)
                    && (element.children[0].getAttribute('data-color') == element.children[1].getAttribute('data-color'))
                    && (element.children[0].getAttribute('data-color') == element.children[2].getAttribute('data-color'))) {
                    count1++
                }
                if ((element.getAttribute('data-div') == 4 && element.children.length == 3)
                    && (element.children[0].getAttribute('data-color') == element.children[1].getAttribute('data-color'))
                    && (element.children[0].getAttribute('data-color') == element.children[2].getAttribute('data-color'))) {
                    count1++
                }
            }
            if (window.location.href.includes("5-3.html")) {
                if ((element.getAttribute('data-div') == 1 && element.children.length == 3) && (element.getAttribute('data-div') == 2 && element.children.length == 3)
                    && (element.getAttribute('data-div') == 3 && element.children.length == 3) && (element.getAttribute('data-div') == 4 && element.children.length == 0)) {
                    count2++;
                }
                if ((element.getAttribute('data-div') == 1 && element.children.length == 3)
                    && (element.children[0].getAttribute('data-color') == element.children[1].getAttribute('data-color'))
                    && (element.children[0].getAttribute('data-color') == element.children[2].getAttribute('data-color'))) {
                    count2++
                }
                if ((element.getAttribute('data-div') == 2 && element.children.length == 3)
                    && (element.children[0].getAttribute('data-color') == element.children[1].getAttribute('data-color'))
                    && (element.children[0].getAttribute('data-color') == element.children[2].getAttribute('data-color'))) {
                    count2++
                }
                if ((element.getAttribute('data-div') == 3 && element.children.length == 3)
                    && (element.children[0].getAttribute('data-color') == element.children[1].getAttribute('data-color'))
                    && (element.children[0].getAttribute('data-color') == element.children[2].getAttribute('data-color'))) {
                    count2++
                }
            }

        });

        if (window.location.href.includes("5-1.html") && count == 2) {
            this.successPage();
        }
        if (window.location.href.includes("5-2.html") && count1 == 4) {
            this.successPage();
        }
        if (window.location.href.includes("5-3.html") && count2 == 3) {
            this.successPage();
        }
        completedBtn.setAttribute('disabled', 'true');
    }
    this.successPage = () => {
        if (window.location.href.includes("5-1.html")) {
            location.href = 'game-success-5-1.html';
        }
        if (window.location.href.includes("5-2.html")) {
            location.href = 'game-success-5-2.html';
        }
        if (window.location.href.includes("5-3.html")) {
            location.href = 'game-success-5-3.html';
        }
    }

    this.init = (e) => {
        count = 0;
        count1 = 0;
        count2 = 0;
        myArray.forEach(element => {
            if (element.getAttribute("data-end") == "1") {
                parent1.appendChild(element)
            }
            if (element.getAttribute("data-end") == "2") {
                parent2.appendChild(element)
            }
            if (element.getAttribute("data-end") == "3") {
                parent3.appendChild(element)
            }
            if (element.getAttribute("data-end") == "4") {
                parent4.appendChild(element)
            }
        });

        completedBtn.removeAttribute('disabled');
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
}


const naturegame = new natureGames();