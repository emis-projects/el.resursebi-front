function game(){
    this.error = true;
    this.error2 = true;
    this.error3 = true;

    
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
    

    this.checkFirstLine = (e) => {

        let parent = e.target.querySelector('.appendDiv');
        

        if(parent.classList.contains('appendDiv--1')){
            if(parent.querySelectorAll('img')[0].getAttribute('data-index') == parent.getAttribute('data-index') && parent.querySelectorAll('img')[1].getAttribute('data-index') == parent.getAttribute('data-index')){
                this.error = false

            } else {
                this.error = true
            }

        } else if(parent.classList.contains('appendDiv--2')){
            if(parent.querySelectorAll('img')[0].getAttribute('data-index') == parent.getAttribute('data-index') && parent.querySelectorAll('img')[1].getAttribute('data-index') == parent.getAttribute('data-index')){
                this.error2 = false

            } else {
                this.error2 = true
            }

        } else if(parent.classList.contains('appendDiv--3')){
            if(parent.querySelectorAll('img')[0].getAttribute('data-index') == parent.getAttribute('data-index') && parent.querySelectorAll('img')[1].getAttribute('data-index') == parent.getAttribute('data-index')){
                this.error3 = false

            } else {
                this.error3 = true
            }

        }
    }



    this.dragDrop = e => { 
        e.preventDefault();

        console.log(e.target)
        
        e.target.querySelector('.appendDiv').appendChild(document.querySelector('.draggedElement'));

        this.checkFirstLine(e)
    }


 
    this.successPage  = () => {

		if(!this.error && !this.error2 && !this.error3){
            location.href = "game-success-7.html"

        } else {

            this.errorPage()
        }
    }


    this.errorPage = () => {
        if(this.error){
            document.querySelector('.DragGame—childs2--1').querySelector('.sign-description-btn').classList.add('error')
        
        } else {
            document.querySelector('.DragGame—childs2--1').querySelector('.sign-description-btn').classList.add('success')
        }

        if(this.error2){
            document.querySelector('.DragGame—childs2--2').querySelector('.sign-description-btn').classList.add('error')
        
        } else {
            document.querySelector('.DragGame—childs2--2').querySelector('.sign-description-btn').classList.add('success')
        }

        if(this.error3){
            document.querySelector('.DragGame—childs2--3').querySelector('.sign-description-btn').classList.add('error')
        
        } else {
            document.querySelector('.DragGame—childs2--3').querySelector('.sign-description-btn').classList.add('success')
        }
    }
    
 
    this.completedGame = () => {
        // completedGame.setAttribute('disabled', 'true')
        this.successPage()
    }
    


    this.resetGame = () => {
        dragElement1MyArray.forEach(w => {
            $('.cs-6-19-div-6-img').append(w)
        });

        $(dragElement1).removeClass('error');
        $(dragElement1).removeClass('success');
        completedGame.removeAttribute('disabled')
    }

    resetBtn.addEventListener('click', this.resetGame);
    completedGame.addEventListener('click', this.completedGame);
}


const Game = new game();