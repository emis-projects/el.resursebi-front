function game(){
    this.error = true;
    this.hrefElement = null;
    this.index = 0;

    
    // variables
    let dragElement1 = document.querySelectorAll('.DragGame—childs1');
    let dragElement2 = document.querySelectorAll('.DragGame—childs2');
    let resetBtn = document.getElementById('resetBtn');
    let completedGame = document.getElementById('completedGame');


    $(dragElement1).on('dragstart', (e) => this.dragStart(e));
    $(dragElement1).on('dragend', (e) => this.dragEnd(e));




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
        dragElement1MyArray.forEach((w, i) => {
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
        e.target.appendChild(document.querySelector('.draggedElement'));
    }


    this.successPage  = () => {

        dragElement1MyArray.forEach(w => {
            if(w.getAttribute('data-index') == w.parentElement.getAttribute('data-index')) {
                this.index++
            }
        })


		if(this.index == 3){
            let loc = location.pathname;

            if(loc == "/Computer-Science/Class-6/Presentation-of-my-project-19/6.html" || loc == "/el.resursebi-front/Computer-Science/Class-6/Presentation-of-my-project-19/6.html"){
                location.href = "game-success-6.html"
            }

        } else {
            this.index = 0;

            this.errorPage()
        }
    }


    this.errorPage = () => {
        if(this.index === 3) {
            $('.sign-description-btn').addClass('success')
        } else {
            
            $('.sign-description-btn').addClass('error')
        }
    }
    
 
    this.completedGame = () => {
        completedGame.setAttribute('disabled', 'true')
        this.successPage()
    }
    


    this.resetGame = () => {
        dragElement1MyArray.forEach(w => {
            $('.cs-6-19-div-6-img').append(w)
        });

        this.index = 0;

        $('.sign-description-btn').removeClass('error');
        $('.sign-description-btn').removeClass('success');
        completedGame.removeAttribute('disabled')
    }

    resetBtn.addEventListener('click', this.resetGame);
    completedGame.addEventListener('click', this.completedGame);
}


const Game = new game();