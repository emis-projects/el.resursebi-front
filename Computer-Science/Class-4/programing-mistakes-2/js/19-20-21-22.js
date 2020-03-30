function computerGames() {
    var DragGameChilds1 = document.querySelectorAll('.DragGame--childs1');
    var mydrag = document.querySelectorAll('.myDrag');
    var result = document.querySelectorAll('.result');
    var parent1 = document.querySelector('.parent1');

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

    var myArrayResult = [];

    result.forEach(element => {
        myArrayResult.push(element);
    });

    var idCount = 1;
    var previousState = null;
    var count = 0;

    this.dragDrop = (e) => {
        if (e.target.getAttribute('data-mydrag') == idCount) {
            var drag = document.querySelector('.draggedElement')
            //clone = drag.cloneNode(true);
            e.target.appendChild(drag)

            var dest = drag.getAttribute('data-way');
            if (previousState == null) {
                if (window.location.href.includes("19.html")) {
                    previousState = 14;
                }
                if (window.location.href.includes("20.html")) {
                    previousState = 34;
                }
                if (window.location.href.includes("21.html")) {
                    previousState = 13;
                }
                if (window.location.href.includes("22.html")) {
                    previousState = 44;
                }
            }
            if (dest == 'right') {
                previousState += 1;
                count++;
            }
            if (dest == 'below') {
                previousState += 10;
                count++;
            }
            if (dest == 'left') {
                previousState -= 1;
                count++;
            }
            if (dest == 'above' ) {
                previousState -= 10;
                count++;
            }


            idCount++;
        }

    }



    this.successPage = () => {

            this.errorPage();
    }



    this.errorPage = () => {
        console.log(document.getElementById(previousState), previousState)
        if(document.getElementById(previousState).getAttribute('data-matrix') != 32){
            document.getElementById(previousState).style = "background:#dc6c85";
        }
        if(document.getElementById(previousState).getAttribute('data-matrix') == 32){
            console.log(count)
            if (window.location.href.includes("19.html")) {
                location.href = 'game-success-19.html';
            }
            if (window.location.href.includes("20.html")) {
                if(count == 2){
                    location.href = 'game-success-20.html';
                }
                else{
                    document.getElementById(previousState).style = "background:#dc6c85";
                }
            }
            if (window.location.href.includes("21.html")) {
                location.href = 'game-success-21.html';
            }
            if (window.location.href.includes("22.html")) {
                location.href = 'game-success-22.html';
            }

        }
        else{
            document.getElementById(previousState).style = "background:#dc6c85";
        }

        
    }



    this.completGame = () => {
        completedBtn.setAttribute('disabled', 'true');
        this.successPage();
        
    }

    this.init = () => {
        count = 0;
        idCount = 1;
        previousState = null;

        document.getElementById('32').style = '';
        document.getElementById('44').style = '';


        myArrayResult.forEach(element => {
            element.style = '';
        });

        myArray.forEach(element => {
            if (element.getAttribute("data-end") == "1") {
                parent1.appendChild(element)
            }
        });


        completedBtn.removeAttribute('disabled');
    }



    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());

}





const computergame = new computerGames();