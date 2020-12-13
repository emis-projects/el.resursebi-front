function natureGames() {
    var dragableText = document.querySelectorAll('.dragableText');
    var mydrag = document.querySelectorAll('.myDrag');
    var pText = document.querySelectorAll(".pText")

    var divPlace1 = document.querySelector('.placeDiv1');
    var divPlace2 = document.querySelector('.placeDiv2');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');


    $(dragableText).on('dragstart', (e) => this.dragStart(e));
    $(dragableText).on('dragend', (e) => this.dragEnd(e));


    for (const drag of mydrag) {
        drag.addEventListener('dragover', (e) => this.dragOver(e));
        drag.addEventListener('drop', (e) => this.dragDrop(e));
    }

    document.addEventListener('DOMContentLoaded', () => {
        mydrag.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
        })

        dragableText.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
        })
    })

     // Drag Functions 
     this.dragOver = (e) => {
        e.preventDefault();
    }

    // drag start 
    this.dragStart = (e) => {
        dragableText.forEach(w => {
            w.setAttribute('class', w.getAttribute('data-class'))
        })
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
    for (let i = 0; i < dragableText.length; i++) {
        myArray.push(dragableText[i])
    }

    this.dragdrop = e => { e.preventDefault();
        let drag = document.querySelector('.draggedElement');
        if(e.target.classList.contains("myDrag")){
            e.target.appendChild(drag)
            document.getElementById(drag.getAttribute("data-delete")).style = "display:none";

        }

    }


    this.init = () => {
        $(mydrag).removeAttr('style');
        
        pText.forEach(element => {
            element.style = ''
        });
        myArray.forEach(element => {
            element.style.color = null;
            element.style.background = null;
            element.style.boxShadow = null;
            document.getElementById(element.getAttribute("data-place"))
                .insertBefore(element, document.getElementById(element.getAttribute("data-place")).firstChild);
        });

        completedBtn.removeAttribute('disabled');
    }


    this.completGame = (e) => {
        let count = 0;


        mydrag.forEach(element => {
            if((element.firstElementChild) && (element.getAttribute("data-image") != element.firstElementChild.getAttribute("data-image"))){
                count++;
                element.style.background = "#dc6c85";
                element.firstElementChild.style.color = "#fff";
            } else if((element.firstElementChild) && (element.getAttribute("data-image") == element.firstElementChild.getAttribute("data-image"))) {
                element.style.background = "#a2dd6f";
                element.style.boxShadow = "2px 2px 8px #a2dd6f78";
                element.firstElementChild.style.color = "#fff";
            }
            
            if((element.firstElementChild) && (element.getAttribute("data-image") == element.firstElementChild.getAttribute("data-image"))){
                count++;
                if(count == 6){
                    this.successPage();
                }
            }
        });
        completedBtn.setAttribute('disabled', 'true');
    }


    this.successPage = () => {
        location.href = 'game-success-29.html';
    }
    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
}


const naturegame = new natureGames();