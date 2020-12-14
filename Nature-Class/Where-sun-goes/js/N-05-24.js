function natureGames(){
    var draggedImgElement = document.querySelectorAll('.spanDrgElement');
    var mydrag = document.querySelectorAll('.n_57_game-container');
    var divPlace = document.querySelectorAll('.col-2');


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

    for(var i = 0; i < mydrag.length; i++ ){
      myArray.push(mydrag [i])
    }

    var myArray1 = [];

    for(var i = 0; i < draggedImgElement.length; i++ ){
      myArray1.push(draggedImgElement [i])
    }

    myArray3DivPlace = [];

    for(var i = 0; i < divPlace.length; i++ ){
        myArray3DivPlace.push(divPlace [i])
      }


     // drop 
     this.dragDrop = e => { e.preventDefault();
        let drag = document.querySelector('.draggedElement');

        if(e.target.classList.contains('n_57_game-container')){
            e.target.appendChild(drag);
        }

        let firstElement = e.target.firstElementChild;

        myArray.filter(w => {
            if(w.firstElementChild == undefined || w.firstElementChild == null){
                w.appendChild(firstElement)
            }
        })
    }


    this.checkEveryElement = (element) => {
        // console.log(element.getAttribute('data-title'))
        // console.log(element.parentElement.getAttribute('data-title'))
        firstDataElement = element.getAttribute('data-title');
        secondDataElement = element.parentElement.getAttribute('data-title');
        return firstDataElement == secondDataElement;


    }

      // completed 
	this.completGame = (e) => {
        draggedImgElement.forEach(element => {
            if((element.getAttribute('data-title') != element.parentElement.getAttribute('data-title')) && (element.getAttribute('data-red') == element.parentElement.getAttribute('data-red'))){
                element.style.color = "#dc6c84";
            }
        });
        let el = myArray1.every(this.checkEveryElement);
        if(el){
            this.successPage();
        }
        
        completedBtn.setAttribute('disabled', 'true');

        
    }

    this.init = () => {
        myArray3DivPlace.forEach(element => {
            divDataPlace = element.getAttribute('data-place');
            myArray1.forEach(elementP => {
                pDataPlace = elementP.getAttribute('data-place');
                if(divDataPlace == pDataPlace){
                    element.appendChild(elementP)
                }
            });

        });
     
        myArray1.forEach(element => {
            element.style.color = "black";
        });

        completedBtn.removeAttribute('disabled');
        completedBtn.setAttribute('style', 'cursor: pointer');
    }

 






    this.successPage = () => {
        location.href = 'game-success-24.html';
    }
    resetBtn.addEventListener('click', () => this.init());
	completedBtn.addEventListener('click', () => this.completGame());


}




const naturegame = new natureGames(); 