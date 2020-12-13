function game(){
    this.error = true;
    this.hrefElement = null;

    
    // variables
    let dragElement1 = document.querySelectorAll('.DragGame—childs1');
    let cloned = document.querySelectorAll('.sign-description-btn');
    let dragElement2 = document.querySelectorAll('.DragGame—childs2');
    let resetBtn = document.getElementById('resetBtn');
    let completedGame = document.getElementById('completedGame');


    $(dragElement2).on('dragstart', (e) => this.dragStart(e));
    $(dragElement2).on('dragend', (e) => this.dragEnd(e));


    // Loop through empty boxes and add listeners
    for (const drag of dragElement2) {
        drag.addEventListener('dragover', (e) => this.dragOver(e));
        drag.addEventListener('drop', (e) => this.dragDrop(e));
    }

    var dragElement2MyArray = [];
    for(var i = 0; i < dragElement2.length; i++ ){
        dragElement2MyArray.push(dragElement2[i])
    }


    var dragElement1MyArray = [];
    for(var i = 0; i < dragElement1.length; i++ ){
        dragElement1MyArray.push(dragElement1[i])
    }


    document.addEventListener('DOMContentLoaded', () => {
        dragElement2MyArray.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))

            let childIndex = w.getAttribute('data-index');

            w.parentElement.setAttribute('data-childIndex', childIndex)
            

            if(w.querySelector('a')){
                w.setAttribute('data-href', w.querySelector('a').getAttribute('href'))

            } else {
                w.parentElement.setAttribute('data-title', w.innerText)
            }
        })
        dragElement1MyArray.forEach((w, i) => {
            w.setAttribute('data-index', i)
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
    

    this.dragdrop = e => { e.preventDefault();
        e.target.parentElement.appendChild(document.querySelector('.draggedElement'));

        let previusElement = e.target;

        dragElement1MyArray.filter(w => {
            if(w.firstElementChild == null || w.firstElementChild == undefined){
                w.appendChild(previusElement)
            } 
        })
    }


    this.checkEveryElement = (element) => element.getAttribute('data-index') == element.parentElement.getAttribute('data-index');



    this.successPage  = () => {
        let el = dragElement2MyArray.every(this.checkEveryElement)

		if(el == true){
            location.href = "game-success-11.html"  

        } else {

            this.errorPage()
        }
    }


    this.errorPage = () => {
        dragElement2MyArray.forEach(w => {
            if(w.getAttribute('data-index') !== w.parentElement.getAttribute('data-index')){
                w.parentElement.classList.add('error')

            } else if(w.getAttribute('data-index') == w.parentElement.getAttribute('data-index')) {
                w.parentElement.classList.add('success')
            }
        })
    }
    
 
    this.completedGame = () => {
        completedGame.setAttribute('disabled', 'true')
        this.successPage()
    }
    

    this.resetGame = () => {
        // document.querySelector('.DragGame—reset--parent').innerHTML = ''

        cloned[0].appendChild(document.querySelector('.cs-3-13-11--1'))
        cloned[1].appendChild(document.querySelector('.cs-3-13-11--2'))
        cloned[2].appendChild(document.querySelector('.cs-3-13-11--3'))


        $(dragElement1).removeClass('error');
        $(dragElement1).removeClass('success');
        completedGame.removeAttribute('disabled')
    }

    resetBtn.addEventListener('click', this.resetGame);
    completedGame.addEventListener('click', this.completedGame);
}


const Game = new game();