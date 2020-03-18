function game(){
    this.road1 = null;
    this.road2 = null;
    this.road3 = null;
    this.roadArray = [];
    this.roadArray = [];
    this.roadArray = [];



    let dragElement = document.querySelectorAll('.direction-img');

    $(dragElement).on('dragstart', (e) => this.dragStart(e));
    $(dragElement).on('dragend', (e) => this.dragEnd(e));


    // Loop through empty boxes and add listeners
    for (const drag of dragElement) {
        drag.addEventListener('dragover', (e) => this.dragOver(e));
        drag.addEventListener('drop', (e) => this.dragDrop(e));
    }

    var dragElementArray = [];
    for(var i = 0; i < dragElement.length; i++ ){
        dragElementArray.push(dragElement[i])
    }



    document.addEventListener('DOMContentLoaded', () => {
        dragElementArray.forEach(w => {
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
            e.target.className = "draggedElement"
        }, 0);
    }


    // drag end
    this.dragEnd = e => {
        let elClassName = e.target.getAttribute('data-class');
        e.target.className = elClassName;
    }
    


    this.dragDrop = e => {
        debugger
        console.log(e);
        // if(e.target.className = "kirkita-way-item"){
        //     e.target.appendChild(document.querySelector('.draggedElement'));
        // }
    }


     
    this.completedGame = () => {
        console.log('cpmplete');
    }
    

    this.resetGame = () => {
        console.log('reset');
    }

    resetBtn.addEventListener('click', this.resetGame);
    completedGame.addEventListener('click', this.completedGame);
}


const Game = new game()