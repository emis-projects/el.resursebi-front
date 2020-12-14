function natureGames() {
    var draggedImgElement = document.querySelectorAll('.seasons');
    var mydrag = document.querySelectorAll('.myDrag');
    var divPlace = document.querySelectorAll('.placeDiv');
    var dataPlace = document.querySelectorAll('.text-boxes');


    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');

    $(draggedImgElement).on('dragstart', (e) => this.dragStart(e));
    $(draggedImgElement).on('dragend', (e) => this.dragEnd(e));

    for (const drag of mydrag) {
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
    

    // Drag Functions 
    this.dragOver = (e) => {
        e.preventDefault();
    }


    // drag start 
    this.dragStart = (e) => {
        setTimeout(() => {
            e.target.className += " draggedElement"
        }, 0);
    }


    // drag end
    this.dragEnd = e => {
        let elClassName = e.target.getAttribute('data-class');
        e.target.className = elClassName;
    }

    var myArray = [];

    for (var i = 0; i < mydrag.length; i++) {
        myArray.push(mydrag[i])
    }


    // drop 
    this.dragdrop = e => { e.preventDefault();
        let drag = document.querySelector('.draggedElement');
        if (e.target.parentElement.classList.contains('myDrag')) {
            e.target.appendChild(drag);
        }

        let firstElement = e.target.firstElementChild;

        myArray.filter(w => {
            if (w.firstElementChild == undefined || w.firstElementChild == null) {
                w.appendChild(firstElement)
            }
        })
    }


    //draggedImgElement array
    var myArray1 = [];
    for (let i = 0; i < draggedImgElement.length; i++) {
        myArray1.push(draggedImgElement[i])
    }

    myArray3DivPlace = [];

    for (var i = 0; i < divPlace.length; i++) {
        myArray3DivPlace.push(divPlace[i])
    }

    dataPlaceArray = [];

    for(let i=0; i<dataPlace.length; i++){
        dataPlaceArray.push(dataPlace[i])
    }


    this.init = () => {
        myArray3DivPlace.forEach(element => {
            divDataPlace = element.getAttribute('data-place');
            myArray1.forEach(elementP => {
                pDataPlace = elementP.getAttribute('data-place');
                if (divDataPlace == pDataPlace) {
                    element.appendChild(elementP)
                }
            });
        });
        dataPlaceArray.forEach(element => {
            $(element).removeClass('correct');
            $(element).removeClass('error');
        });

        completedBtn.removeAttribute('disabled');
    }

    this.checkEveryElement = (element) => {
        firstDataElement = element.getAttribute('data-title');
        secondDataElement = element.parentElement.getAttribute('data-title');
        return firstDataElement == secondDataElement;
    }


    this.completGame = (e) => {
        let count = 0;
        draggedImgElement.forEach(element => {
            if ((element.getAttribute('data-title') == element.parentElement.getAttribute('data-title')) && (element.parentElement.getAttribute('dataPlaceEnd') == 111)) {
                element.parentElement.classList.add("correct")
                count++;
                if (count == 8) {
                    this.successPage();
                }
            }
            if ((element.parentElement.getAttribute('dataPlaceEnd') == 111) && (element.getAttribute('data-title') != element.parentElement.getAttribute('data-title'))) {
                element.parentElement.classList.add("error")
            }
        });
        completedBtn.setAttribute('disabled', 'true');
    }



    this.successPage = () => {
        location.href = 'N-1366-06-47-success.html';
    }
    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());

}


const naturegame = new natureGames();