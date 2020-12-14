function game() {
    let dragElement1 = document.querySelectorAll('.DragGame—childs1');
    let dragElement2 = $('.DragGame—childs2');
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

    var dragElement2MyArray = [];
    for(var i = 0; i < dragElement2.length; i++ ){
        dragElement2MyArray.push(dragElement2[i])
    }

    var elArray1 = [];
    for(var i = 0; i < document.querySelectorAll('.col--1 .DragGame—childs1').length; i++ ){
        elArray1.push(document.querySelectorAll('.col--1 .DragGame—childs1')[i])
    }
    var elArray2 = [];
    for(var i = 0; i < document.querySelectorAll('.col--2 .DragGame—childs1').length; i++ ){
        elArray2.push(document.querySelectorAll('.col--2 .DragGame—childs1')[i])
    }
    var elArray3 = [];
    for(var i = 0; i < document.querySelectorAll('.col--3 .DragGame—childs1').length; i++ ){
        elArray3.push(document.querySelectorAll('.col--3 .DragGame—childs1')[i])
    }
    var elArray4 = [];
    for(var i = 0; i < document.querySelectorAll('.col--4 .DragGame—childs1').length; i++ ){
        elArray4.push(document.querySelectorAll('.col--4 .DragGame—childs1')[i])
    }


    this.insertBefore = (referenceNode, newNode) => {
        referenceNode.parentElement.insertBefore(newNode, referenceNode.previousSibling);
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

            this.insertBefore(e.target, cloned)
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
    

    this.dragDrop = e => { e.preventDefault();
        if(e.target.classList.contains('DragGame—childs1')){
            e.target.appendChild(document.querySelector('.draggedElement'));   
        }
    }

    this.checkEveryElement = (element) => element.classList.contains('correct')


    this.generateAnswer = (nodes) => {
        nodes.forEach(w => {
            if(w.firstElementChild){
                if(w.getAttribute('data-index') !== w.firstElementChild.getAttribute('data-index')) {
                    w.setAttribute('style', 'background: #dc6c85')
                    w.classList.add('incorrect')
                    
                } else {
                    w.setAttribute('style', 'background: #a1dd6f')
                    w.classList.add('correct')
                }
            } else {
                w.setAttribute('style', 'background: #dc6c85')
                w.classList.add('incorrect')
            }
        })
    }

    this.generateIfItIsError = (nodes) => {
        
    }


    this.completGame = () => {
        this.generateAnswer(document.querySelectorAll('.col--1 .DragGame—childs1'))
        this.generateAnswer(document.querySelectorAll('.col--2 .DragGame—childs1'))
        this.generateAnswer(document.querySelectorAll('.col--3 .DragGame—childs1'))
        this.generateAnswer(document.querySelectorAll('.col--4 .DragGame—childs1'))

       let el1 = elArray1.every(this.checkEveryElement)
       let el2 = elArray2.every(this.checkEveryElement)
       let el3 = elArray3.every(this.checkEveryElement)
       let el4 = elArray4.every(this.checkEveryElement)
        
        if(el1 && el2 && el3 && el4) {
            location.href = "game-success-15.html"
        }

        completeBtn.setAttribute('disabled', 'true');
    }


    this.init = () => {
        $('.col--delete img').remove()
        $('.col--delete .DragGame—childs1').removeAttr('style')
        $('.col--delete .DragGame—childs1').removeClass('incorrect')
        $('.col--delete .DragGame—childs1').removeClass('correct')
        completeBtn.removeAttribute('disabled');
    }
}



const Game = new game();
