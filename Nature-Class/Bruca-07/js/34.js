function natureGames(){
    var draggedImgElement = document.querySelectorAll('.imge');
    var mydrag = document.querySelectorAll('.myDrag');

    var divPlace1 = document.querySelector('.placeDiv1');
    var divPlace2 = document.querySelector('.placeDiv2');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');



    $(draggedImgElement).on('dragstart', (e) => this.dragStart(e));
    $(mydrag).on('dragend', (e) => this.dragEnd(e));

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
        draggedImgElement.forEach(w => {
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
    for (let i = 0; i < draggedImgElement.length; i++) {
        myArray.push(draggedImgElement[i])
    }

    // drop 
    this.dragDrop = e => { e.preventDefault();
        let drag = document.querySelector('.draggedElement');
        let chasasmeli = e.target.parentElement.classList.contains("myDrag");
        if (chasasmeli) {
            if(e.target.children[1].children[1]){
                return;
            }
            e.target.children[1].appendChild(drag);
        }
        if( e.target.classList.contains("flexcy")){
            if(e.target.children[1]){
                return;
            }
            e.target.appendChild(drag);
        }
    }

    this.init = () => {
        $(".imge").css('border','');
        myArray.forEach(element => {
            if(element.getAttribute("data-place") == "01"){
                divPlace1.appendChild(element)
            }
            if(element.getAttribute("data-place") == "02"){
                divPlace2.appendChild(element)
            }
            
        });
        completedBtn.removeAttribute('disabled');
        
    }

    this.completGame = (e) => {
        let count = 0;
        draggedImgElement.forEach(element => {
            if((element.getAttribute("data-name") != element.parentElement.getAttribute("data-name")) 
                    && (element.parentElement.parentElement.classList.contains("nature-07-game-card"))){
                element.style.border = "3px solid #FF0000"
                element.style.borderRadius = "11px"
            }
            if((element.getAttribute("data-name") == element.parentElement.getAttribute("data-name"))){
                count++;
                if (count == 14) {
                    this.successPage();
                }
            }
            
        });

        completedBtn.setAttribute('disabled', 'true');

    }

    this.successPage = () => {
        location.href = 'game-success-34.html';
    }
    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());

}

const naturegame = new natureGames();