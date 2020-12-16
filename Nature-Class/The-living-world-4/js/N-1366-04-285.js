function natureGames() {

    // variables
    var draggedImgElement = document.querySelectorAll('.N-games-child');
    var mydrag = document.querySelectorAll('.N-1-draggeble_element');
    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');


    // events
    $(draggedImgElement).on('dragstart', (e) => this.dragStart(e));
    $(draggedImgElement).on('dragend', (e) => this.dragEnd(e));


    // Loop through empty boxes and add listeners
    for (const drag of draggedImgElement) {
        drag.addEventListener('dragover', (e) => this.dragOver(e));
        drag.addEventListener('drop', (e) => this.dragDrop(e));
    }

    document.addEventListener('DOMContentLoaded', () => {
        mydrag.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
        })

        draggedImgElement.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
        })
    })


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
    // events end



    var myArray = [];

    for (var i = 0; i < mydrag.length; i++) {
        myArray.push(mydrag[i])
    }


    // Drag Functions
    this.dragOver = (e) => {
        e.preventDefault();
    }

    // drag start
    this.dragStart = (e) => {
        setTimeout(() => {
            e.target.className = "draggedElement"
        }, 0);
    }



    this.init = () => {
        myArray.forEach(element => {
            element.classList.remove("bg_incorrect")
            element.classList.remove("bg_correct")
            element.classList.add("bg_white")
        });
        $('.after_parent').removeClass('dragDrop')

        document.getElementById("img1").firstElementChild.src = "../../img/gakvetilebi/buneba/lesson4/1366-285-flower-2-3.svg";
        document.getElementById("img2").firstElementChild.src = "../../img/gakvetilebi/buneba/lesson4/1366-285-flower-3-3.svg";
        document.getElementById("img3").firstElementChild.src = "../../img/gakvetilebi/buneba/lesson4/1366-285-flower-3.svg";
    }



    // drag end
    this.dragEnd = e => {
        let elClassName = e.target.getAttribute('data-class');
        e.target.className = elClassName;
    }


    // drop
    this.dragDrop = e => { e.preventDefault();
        let drag = document.querySelector('.draggedElement');

        if (e.target.parentElement.classList.contains('after_parent')) {
            this.getDragableElement(drag, e.target.parentElement)
            e.target.parentElement.appendChild(drag);


        }

        let firstElement = e.target.parentElement.firstElementChild;

        myArray.filter(w => {
            if (w.firstElementChild == undefined || w.firstElementChild == null) {
                this.getDragableElement(firstElement, w);
                w.appendChild(firstElement)
            }
        })
    }

    this.getDragableElement = (draggable, droppable) => {
        if(draggable.getAttribute('data-title') == "2"){
                if(droppable.id == "img3"){
                    draggable.src = "../../img/gakvetilebi/buneba/lesson4/1366-285-flower-2-1.svg";
                }
                if(droppable.id == "img2"){
                    draggable.src = "../../img/gakvetilebi/buneba/lesson4/1366-285-flower-2-2.svg";
                }
                if(droppable.id == "img1"){
                    draggable.src = "../../img/gakvetilebi/buneba/lesson4/1366-285-flower-2-3.svg";
                }

            }
            if(draggable.getAttribute('data-title') == "3"){
                if(droppable.id == "img1"){
                    draggable.src = "../../img/gakvetilebi/buneba/lesson4/1366-285-flower-3-1.svg";
                }
                if(droppable.id == "img3"){
                    draggable.src = "../../img/gakvetilebi/buneba/lesson4/1366-285-flower-3-2.svg";
                }
                if(droppable.id == "img2"){
                    draggable.src = "../../img/gakvetilebi/buneba/lesson4/1366-285-flower-3-3.svg";
                }

            }
            if(draggable.getAttribute('data-title') == "1"){
                if(droppable.id == "img2"){
                    draggable.src = "../../img/gakvetilebi/buneba/lesson4/1366-285-flower-1-1.svg";
                }
                if(droppable.id == "img1"){
                    draggable.src = "../../img/gakvetilebi/buneba/lesson4/1366-285-flower-1-2.svg";
                }
                if(droppable.id == "img3"){
                    draggable.src = "../../img/gakvetilebi/buneba/lesson4/1366-285-flower-1-3.svg";
                }

            }
    }


    this.checkEveryElement = (element) => {
        return element.getAttribute('data-title') === element.querySelector('.symbols_description-img').getAttribute('data-title')
    }


    this.successPage  = () => {
        // location.href = 'N-1366-04-285-success.html';
          location.href = 'game-success-38.html';
	}

    this.completGame = (e) => {
        var count = 0;

        myArray.forEach(element => {

            if(this.checkEveryElement(element)){
                count++;
                element.classList.remove("bg_incorrect")
                element.classList.add("bg_correct")
            }
            else {
                element.classList.add("bg_incorrect")
            }
        });
        if(count==3){
            this.successPage();
        }
    }
}


const naturegame = new natureGames();
