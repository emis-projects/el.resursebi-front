function game() {


    let listenBtn = document.querySelectorAll('.listen--btn');
    let dragElement1 = document.querySelectorAll('.DragGame—childs1');
    let dragElement2 = $('.DragGame—childs2');
    let correctAnswer = document.getElementById('correctAnswer');
    const completeBtn = document.getElementById('completedGame');
    const resetBtn = document.getElementById('resetBtn');

    // listeners
    resetBtn.addEventListener('click', () => this.init());
    completeBtn.addEventListener('click', () => this.completGame());

    $(document).on( "dragstart", "img.DragGame—childs2", (e) => {
        this.dragStart(e)
    });

    $(document).on( "dragend", (e) => {
        this.dragEnd(e)
    });

    // Loop through empty boxes and add listeners
    for (const drag of dragElement1) {
        drag.addEventListener('dragover', (e) => this.dragOver(e));
        drag.addEventListener('drop', (e) => this.dragDrop(e));
    }


    document.addEventListener('DOMContentLoaded', () => {
        dragElement2MyArray.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
        })
    })


    var dragElement2MyArray = [];
    for(var i = 0; i < dragElement2.length; i++ ){
        dragElement2MyArray.push(dragElement2[i])
    }

    var elArray1 = [];
    for(var i = 0; i < document.querySelectorAll('.col--1 .DragGame—childs1').length; i++ ){
        elArray1.push(document.querySelectorAll('.col--1 .DragGame—childs1')[i])
    }

    this.insertBefore = (referenceNode, newNode) => {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.previousSibling);
    }

    // Drag Functions    
    this.dragOver = (e) => {
        e.preventDefault();
    }

    // drag start 
    this.dragStart = (e) => {
        setTimeout(() => {
            e.target.className = "draggedElement";

            let cloned = e.target.cloneNode(true)

            cloned.className = e.target.getAttribute('data-class')

            this.insertBefore(e.target.nextElementSibling, cloned)
        }, 0);
    }


    // drag end
    this.dragEnd = e => {
        let elClassName = e.target.getAttribute('data-class');
        e.target.className = elClassName;

        if(e.target.parentElement.classList.contains('col-5')){
            e.target.remove()
        }
    }
    

    this.dragDrop = e => {
        if(e.target.classList.contains('DragGame—childs1')){
            e.target.appendChild(document.querySelector('.draggedElement'));   
        }
    }

    this.checkEveryElement = (element) => {
        if(element.firstElementChild){
            return element.getAttribute('data-index') == element.firstElementChild.getAttribute('data-index');
        }
    }


    this.completGame = () => {
        let el1 = elArray1.every(this.checkEveryElement);

        console.log(el1)

        completeBtn.setAttribute('disabled', 'true');
    }


    this.init = () => {
        $('.col--delete img').remove()
    }
}



const Game = new game();
