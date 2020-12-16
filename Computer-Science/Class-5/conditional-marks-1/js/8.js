function game(){
    this.error = true;
    this.hrefElement = null;

    
    // variables
    let dragElement1 = document.querySelectorAll('.DragGame—childs1');
    let dragElement2 = document.querySelectorAll('.DragGame—childs2');
    let imagesArr = document.querySelectorAll('.box');
    let resetBtn = document.getElementById('resetBtn');
    let completedGame = document.getElementById('completedGame');


    $(dragElement2).on('dragstart', (e) => this.dragStart(e));
    $(dragElement2).on('dragend', (e) => this.dragEnd(e));


    // Loop through empty boxes and add listeners
    for (const drag of dragElement1) {
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

    var imagesArray = [];
    for(var i = 0; i < imagesArr.length; i++ ){
        imagesArray.push(imagesArr[i])
    }



    document.addEventListener('DOMContentLoaded', () => {
        dragElement2MyArray.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
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
    

    this.dragDrop = e => { e.preventDefault();
        e.target.appendChild(document.querySelector('.draggedElement'));
    }


    this.checkEveryElement = (element) => element.getAttribute('data-index') == element.parentElement.getAttribute('data-index');



    this.successPage  = () => {
        let el = dragElement2MyArray.every(this.checkEveryElement)

		if(el == true){
            location.href = "game-success-8.html"

        } else {

            this.errorPage()
        }
    }


    this.errorPage = () => {
        dragElement1MyArray.forEach(w => {
            if(w.querySelector('img')){
                if(w.getAttribute('data-index') !== w.querySelector('img').getAttribute('data-index')){
                    w.classList.add('error')
    
                } else if(w.getAttribute('data-index') == w.querySelector('img').getAttribute('data-index')) {
                    w.classList.add('success')
                }

            }
        })
    }
    
 
    this.completedGame = () => {
        completedGame.setAttribute('disabled', 'true')
        this.successPage()
    }
    


    this.resetGame = () => {
        $(dragElement1).removeClass('error');
        $(dragElement1).removeClass('success');
        completedGame.removeAttribute('disabled')

        let item = document.querySelectorAll('.DragGame—reset--parent .box');

        item[0].appendChild(document.querySelector('.draggeble__item-1'))
        item[1].appendChild(document.querySelector('.draggeble__item-2'))
        item[2].appendChild(document.querySelector('.draggeble__item-3'))
        item[3].appendChild(document.querySelector('.draggeble__item-4'))
        item[4].appendChild(document.querySelector('.draggeble__item-5'))
        item[5].appendChild(document.querySelector('.draggeble__item-6'))
        item[6].appendChild(document.querySelector('.draggeble__item-7'))
        item[7].appendChild(document.querySelector('.draggeble__item-8'))
        item[8].appendChild(document.querySelector('.draggeble__item-9'))
        item[9].appendChild(document.querySelector('.draggeble__item-10'))
        item[10].appendChild(document.querySelector('.draggeble__item-11'))
        item[11].appendChild(document.querySelector('.draggeble__item-12'))
    }

    resetBtn.addEventListener('click', this.resetGame);
    completedGame.addEventListener('click', this.completedGame);
}


const Game = new game();