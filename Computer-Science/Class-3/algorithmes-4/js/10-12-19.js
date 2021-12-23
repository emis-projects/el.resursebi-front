function computerGames() {
    var DragGameChilds1 = document.querySelectorAll('.DragGame--childs1');
    var DragGameParent = document.querySelectorAll('.DragGame--Parent');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');

    $(DragGameChilds1).on('dragstart', (e) => this.dragStart(e));
    $(DragGameChilds1).on('dragend', (e) => this.dragEnd(e));

    for (const drag of DragGameChilds1) {
        drag.addEventListener('dragover', (e) => this.dragOver(e));
        drag.addEventListener('drop', (e) => this.dragDrop(e));
    }

    document.addEventListener('DOMContentLoaded', () => {
        DragGameParent.forEach(w => {
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
        myArray.forEach(element => {
            $(element).removeClass("error");
            $(element).removeClass("success");
        });
        setTimeout(() => {
            e.target.className += " draggedElement"
        }, 0);
    }

    this.dragEnd = (e) => {
        var theme = localStorage.getItem("theme");
        var elClassName = e.target.getAttribute('data-class')
        e.target.className = elClassName;
        if (theme == "darck") {
            e.target.className += ' completed__btn_black';
        }
        else{
            if(e.target.classList){
                e.target.classList.remove('completed__btn_black')
            }
        }
    }

    var myArray = [];
    DragGameChilds1.forEach(element => {
        myArray.push(element);
    });

    this.dragDrop = (e) => { e.preventDefault();
        var drag = document.querySelector('.draggedElement');
        var dragParent = drag.parentElement;
        let firstElement = e.target.parentElement.firstElementChild;
        console.log(firstElement)
        if (e.target.parentElement.classList.contains('DragGame--Parent')) {
            //firstElement.remove();
            e.target.parentElement.appendChild(drag);
            dragParent.appendChild(firstElement)
        }
    }
    this.checkEveryElement = (element) => element.getAttribute('data-place') == element.parentElement.getAttribute('data-place');

    this.successPage = () => {
        let el = myArray.every(this.checkEveryElement);
        if (el == true) {
            if (window.location.href.includes("18.html")) {
                location.href = 'game-success-18.html';
            }
            if (window.location.href.includes("10.html")) {
                location.href = 'game-success-10.html';
            }
            if (window.location.href.includes("12.html")) {
                location.href = 'game-success-12.html';
            }
        }
        else {
            this.errorPage();
        }
    }


    this.errorPage = () => {
        myArray.forEach(element => {
            console.log(element.getAttribute('data-place'), element.parentElement.getAttribute('data-place'))
            if (element.getAttribute('data-place') == element.parentElement.getAttribute('data-place')) {
                $(element).addClass("success");
            }
            else {
                $(element).addClass("error");
            }
        });
    }

    this.completGame = () => {
        this.successPage();
    }

    this.init = () => {
        myArray.forEach(element => {
            $(element).removeClass("error");
            $(element).removeClass("success");
        });
        DragGameParent.forEach(element => {
            console.log('element', element)
            element.appendChild(document.getElementById(element.getAttribute('data-side')));

        });
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());

}




const computergame = new computerGames();