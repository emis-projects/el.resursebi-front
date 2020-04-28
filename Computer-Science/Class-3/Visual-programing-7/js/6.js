function game(){
    this.error = true;
    this.hrefElement = null;

    
    // variables
    let dragElement1 = document.querySelectorAll('.DragGame—childs1');
    let dragElement2 = document.querySelectorAll('.DragGame—childs2');
    let resetBtn = document.getElementById('resetBtn');
    let completedGame = document.getElementById('completedGame');


    $(dragElement2).on('dragstart', 'div', () => this.dragStart(e));
    $(dragElement2).on('dragend', 'div', () => this.dragEnd(e));



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
            $( e.target ).clone().appendTo( e.target.parentElement );
            e.target.className = "draggedElement"
        }, 0);
    }


    // drag end
    this.dragEnd = e => {
        let elClassName = e.target.getAttribute('data-class');
        e.target.className = elClassName;
    }
    

    this.dragDrop = e => {
        e.target.appendChild(document.querySelector('.draggedElement'));

    }


    this.checkEveryElement = (element) => element.getAttribute('data-index') == element.parentElement.getAttribute('data-index');



    this.successPage  = () => {
        let el = dragElement2MyArray.every(this.checkEveryElement)

		if(el == true){
            location.href = "game-success-6.html" 

        } else {
            this.errorPage()
        }
    }


    this.errorPage = () => {
        dragElement2MyArray.forEach(w => {
            if(w.getAttribute('data-index') !== w.parentElement.getAttribute('data-index')){
                w.querySelector('p').setAttribute('style', 'color: #dc6c85')

            } else if(w.getAttribute('data-index') == w.parentElement.getAttribute('data-index')) {
                w.querySelector('p').setAttribute('style', 'color: #a1dd6f')
            }
        })
    }
    
 
    this.completedGame = () => {
        completedGame.setAttribute('disabled', 'true')
        this.successPage()
    }
    


    this.resetGame = () => {
        dragElement1MyArray.forEach(w => {
            let title = w.getAttribute('data-title');
            let index = w.getAttribute('data-childIndex');

            w.querySelector('a, p').classList.remove('a-blue');
            w.querySelector('a, p').removeAttribute('href')
            w.querySelector('a, p').removeAttribute('style')

            w.querySelector('.DragGame—childs2').innerText = title;
            w.querySelector('.DragGame—childs2').setAttribute('data-index', index);

            $( "#differentGameDiv p" ).replaceWith( '<a class="sign-description-btn-title DragGame—childs2" draggable="true" data-index="2">ქვეითთა გადასასვლელი</a>');
            $( "#differentGameDiv a").attr('href', "./6-1.html");
            $( "#differentGameDiv a").attr('style', "color: #7fd1d8");
            $( "#differentGameDiv a").attr('target', "_blank");
        });

        $(dragElement1).removeClass('error');
        $(dragElement1).removeClass('success');
        completedGame.removeAttribute('disabled')
    }

    resetBtn.addEventListener('click', this.resetGame);
    completedGame.addEventListener('click', this.completedGame);
}


const Game = new game();