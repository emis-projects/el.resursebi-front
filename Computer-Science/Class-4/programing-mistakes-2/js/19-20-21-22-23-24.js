function computerGames() {
    var DragGameChilds1 = document.querySelectorAll('.DragGame--childs1');
    var mydrag = document.querySelectorAll('.myDrag');
    var result = document.querySelectorAll('.result');

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

    var myArrayResult = [];

    result.forEach(element => {
        myArrayResult.push(element);
    });

    var idCount = 1;
    var previousState = null;
    var count = 0;

    this.dragdrop = (e) => { e.preventDefault();
        if (e.target.getAttribute('data-mydrag') == idCount) {
            var drag = document.querySelector('.draggedElement')
            clone = drag.cloneNode(true);
            console.log('clone', clone.className)
            e.target.appendChild(clone)
            //$(clone).removeClass('draggedElement')
            var dest = clone.getAttribute('data-way');
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
                if (window.location.href.includes("23.html")) {
                    previousState = 44;
                }
                if (window.location.href.includes("24.html")) {
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



    var redBall;
    this.errorPage = () => {
        if(document.getElementById(previousState).getAttribute('data-matrix') == 32){
            if (window.location.href.includes("19.html")) {
                location.href = 'game-success-19.html';
            }
            if (window.location.href.includes("20.html")) {
                if(count == 2){
                    location.href = 'game-success-20.html';
                }
                else{
                    document.getElementById(previousState).style = "background:#dc6c85";
                    var img = document.createElement("IMG");
                    img.src = '../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/C-4-2-circle.png';
                    document.getElementById(previousState).appendChild(img);
                    redBall = previousState;
                }
            }
            if (window.location.href.includes("21.html")) {
                location.href = 'game-success-21.html';
            }
            if (window.location.href.includes("22.html")) {
                location.href = 'game-success-22.html';
            }
            return
        }
        
        if(document.getElementById(previousState).getAttribute('data-matrix') == 15){
            if (window.location.href.includes("23.html")) {
                location.href = 'game-success-23.html';
            }
            return
        }
        if(document.getElementById(previousState).getAttribute('data-matrix') == 13){
            if (window.location.href.includes("24.html")) {
                location.href = 'game-success-24.html';
            }
            return
        }

        if(window.location.href.includes("19.html")){
            $(document.getElementById('14')).empty();
        }
        if(window.location.href.includes("20.html")){
            $(document.getElementById('34')).empty();
        }
        if(window.location.href.includes("21.html")){
            $(document.getElementById('13')).empty();
        }
        if(window.location.href.includes("22.html")){
            $(document.getElementById('44')).empty();
        }
        if(window.location.href.includes("23.html")){
            $(document.getElementById('44')).empty();
        }
        if(window.location.href.includes("24.html")){
            $(document.getElementById('44')).empty();
        }
        
        document.getElementById(previousState).style = "background:#dc6c85";
        var img = document.createElement("IMG");
        img.src = '../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/C-4-2-circle.png';
        document.getElementById(previousState).appendChild(img);
        redBall = previousState;

        
    }



    this.completGame = () => {
        completedBtn.setAttribute('disabled', 'true');
        this.successPage();
    }

    this.init = () => {
        count = 0;
        idCount = 1;
        previousState = null;

        var star = document.createElement("IMG");
        star.src = '../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/C-4-2-star.png';

        var img = document.createElement("IMG");
        img.src = '../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/C-4-2-circle.png';
        
        if (window.location.href.includes("19.html")) {
            $(document.getElementById(redBall)).empty();
            document.getElementById('14').appendChild(img);
        }
        if (window.location.href.includes("20.html")) {
            $(document.getElementById(redBall)).empty();
            document.getElementById('34').appendChild(img);
            document.getElementById('32').appendChild(star);
        }
        if (window.location.href.includes("21.html")) {
            $(document.getElementById(redBall)).empty();
            document.getElementById('13').appendChild(img);
        }
        if (window.location.href.includes("22.html")) {
            $(document.getElementById(redBall)).empty();
            document.getElementById('44').appendChild(img);
        }
        if (window.location.href.includes("23.html")) {
            $(document.getElementById(redBall)).empty();
            document.getElementById('44').appendChild(img);
        }
        if (window.location.href.includes("24.html")) {
            $(document.getElementById(redBall)).empty();
            document.getElementById('44').appendChild(img);
        }


        document.getElementById('14').style = '';
        document.getElementById('34').style = '';
        document.getElementById('13').style = '';
        document.getElementById('32').style = '';
        document.getElementById('44').style = '';


        myArrayResult.forEach(element => {
            element.style = '';
        });

        myDragArray.forEach(element => {
            element.style = '';
            $(element).empty();
        });


        completedBtn.removeAttribute('disabled');
    }



    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());

}





const computergame = new computerGames();