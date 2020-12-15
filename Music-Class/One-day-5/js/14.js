function game(){
    
    // variables
    let dragElement1 = document.querySelectorAll('.DragGame—childs1');
    let dragElement2 = document.querySelectorAll('.DragGame—childs2');

    $(dragElement2).on('dragstart', (e) => this.dragStart(e));
    $(dragElement2).on('dragend', (e) => this.dragEnd(e));




    // Loop through empty boxes and add listeners
    for (const drag of dragElement1) {
        drag.addEventListener('dragover', (e) => this.dragOver(e));
        drag.addEventListener('drop', (e) => this.dragDrop(e));
    }


    var dragElement1MyArray = [];
    for(var i = 0; i < dragElement1.length; i++ ){
        dragElement1MyArray.push(dragElement1[i])
    }

    document.addEventListener('DOMContentLoaded', () => {
        dragElement2.forEach(w => {
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
    

    this.dragDrop = e => { e.preventDefault();
        e.target.parentElement.classList.add('added')
        e.target.appendChild(document.querySelector('.draggedElement'));
    }
}

const Game = new game();