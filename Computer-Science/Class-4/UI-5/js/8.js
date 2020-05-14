function game(){
    this.error = true;
    this.hrefElement = null;
    this.incriment = 0;
    
    // variables
    let dragElement1 = document.querySelectorAll('.DragGame—childs1');
    let dragElement2 = $('.DragGame—childs2');
    let resetElParent = document.querySelectorAll('.ui_page-8_img')
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




    document.addEventListener('DOMContentLoaded', () => {
        dragElement2MyArray.forEach(w => {
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
        e.target.parentElement.parentElement.appendChild(document.querySelector('.draggedElement'));
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
            if(w.querySelector('.DragGame—childs2')){
                if(w.getAttribute('data-index') !== w.querySelector('.DragGame—childs2').getAttribute('data-index')){
                    w.querySelector('.sign-description-btn').classList.add('error')
                    w.querySelector('.sign-description-btn').classList.remove('success')
                    
                } else if(w.getAttribute('data-index') == w.querySelector('.DragGame—childs2').getAttribute('data-index')) {
                    w.querySelector('.sign-description-btn').classList.remove('error')
                    w.querySelector('.sign-description-btn').classList.add('success')
                    
                }
            } else {
                w.querySelector('.sign-description-btn').classList.add('error')
                w.querySelector('.sign-description-btn').classList.remove('success')
            }
        })
    }
    
 
    this.completedGame = () => {
        completedGame.setAttribute('disabled', 'true')
        this.successPage()
    }
    


    this.resetGame = () => {

        let el1 = $('.ui_page-8_img-1-child');
        let el2 = $('.ui_page-8_img-2-child');
        let el3 = $('.ui_page-8_img-3-child');


        $('.ui_page-8_img-1').append(el1)
        $('.ui_page-8_img-2').append(el2)
        $('.ui_page-8_img-3').append(el3)

      

        $('.sign-description-btn').removeClass('error');
        $('.sign-description-btn').removeClass('success');
        completedGame.removeAttribute('disabled')
    }

    resetBtn.addEventListener('click', this.resetGame);
    completedGame.addEventListener('click', this.completedGame);
}


const Game = new game();