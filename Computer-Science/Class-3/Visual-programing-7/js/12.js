function game(){
    this.error = true;
    this.incriment = 0;
    this.hrefElement = null;

    
    // variables
    let dragElement1 = document.querySelectorAll('.DragGame—childs1');
    let dragElement2 = document.querySelectorAll('.DragGame—childs2');
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
    


   
    this.dragOver = (e) => {
        e.preventDefault();
    }

    this.dragStart = (e) => {
        $( e.target ).clone(true, true).appendTo( e.target.parentElement );

        e.target.parentElement.lastElementChild.setAttribute('style', 'display: none !important')

        setTimeout(() => {
            e.target.className = "draggedElement"
        }, 0);
    }


    this.dragEnd = e => {
        let elClassName = e.target.getAttribute('data-class');
        e.target.className = elClassName;
        $('.DragGame—childs2').attr('style', 'display: block')

        if(e.target.parentElement.classList.contains('DragGame—childs1') == false){
            e.target.remove()
        }

    }
    

    this.dragDrop = e => { e.preventDefault();
        e.preventDefault();

        if(e.target.classList.contains('DragGame—childs1') && !e.target.querySelector('.DragGame—childs2')){
            e.target.appendChild(document.querySelector('.draggedElement'));
            this.incriment++;
        }


        if( e.target.getAttribute('data-index') == e.target.firstElementChild.getAttribute('data-index') ) {
            this.error = false

        } else if( e.target.getAttribute('data-index') !== e.target.firstElementChild.getAttribute('data-index') ){
            this.error = true
        }
    }



    this.successPage  = () => {
        if(this.incriment === 13 && this.error === false){
            location.href = "game-success-12.html" 

        } else {
            this.errorPage()
        }
    }


    this.errorPage = () => {
        jQuery.each( $('.DragGame—childs1 .DragGame—childs2'), function( i, w ) {
            if(w.getAttribute('data-index') !== w.parentElement.getAttribute('data-index')){
                w.parentElement.classList.add('error')

            } else if(w.getAttribute('data-index') == w.parentElement.getAttribute('data-index')) {
                w.parentElement.classList.add('success')
            }
          });
    }
    
 
    this.completedGame = () => {
        completedGame.setAttribute('disabled', 'true')
        this.successPage()
    }
    


    this.resetGame = () => {
        this.incriment = 0;
        this.error = true;

        $('.DragGame—childs1 .DragGame—childs2').remove()
        $('.DragGame—childs1').removeClass('error');
        $('.DragGame—childs1').removeClass('success');
        completedGame.removeAttribute('disabled')
    }

    resetBtn.addEventListener('click', this.resetGame);
    completedGame.addEventListener('click', this.completedGame);
}


const Game = new game();