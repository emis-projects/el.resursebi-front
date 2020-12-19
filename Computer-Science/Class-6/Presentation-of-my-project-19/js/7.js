createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];
function handleLoadComplete(event) {
    createjs.Sound.play("sound");
}

function handleLoadstop(event) {
    createjs.Sound.stop("sound");
}




document.querySelectorAll('.listen--btn').forEach(w => {
    w.addEventListener('click', (e) => {
        handleLoadstop()
        createjs.Sound.registerSound({ src: `${e.target.getAttribute('data-voice')}`, id: "sound" });
        handleLoadComplete()
    })
})


function game(){
    var error = true;
    var error2 = true;
    var error3 = true;

    
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
            e.target.parentElement.className = "draggedElement"
        }, 0);
    }


    // drag end
    this.dragEnd = e => {
        let elClassName = e.target.parentElement.getAttribute('data-class');
        e.target.parentElement.className = elClassName;
    }
    

    this.checkFirstLine = (e) => {

        let parent = e.target.querySelector('.appendDiv');

        if(parent.classList.contains('appendDiv--1')){
            let childrens = $(parent).children('div')

            $(childrens).each(function( index ) {

                if($(this).attr('data-index') == parent.getAttribute('data-index')) {
                    if(index == 1) {
                        error = false

                    }
                } else {
                    error = true
                }
            });

        } else if(parent.classList.contains('appendDiv--2')){
            let childrens = $(parent).children('div')

            

            $(childrens).each(function( index ) {

                if($(this).attr('data-index') == parent.getAttribute('data-index')) {
                    if(index == 2) {
                        error2 = false

                    }
                } else {
                    error2 = true
                }
            });


        } else if(parent.classList.contains('appendDiv--3')){
            let childrens = $(parent).children('div')

            console.log(childrens)

            $(childrens).each(function( index ) {
                console.log($(this))
                if($(this).attr('data-index') == parent.getAttribute('data-index')) {
                    if(index == 1) {
                        error3 = false

                    }
                } else {
                    error3 = true
                }
            });

        }
    }



    this.dragDrop = e => { 
        e.preventDefault();

        e.target.querySelector('.appendDiv').appendChild(document.querySelector('.draggedElement'));

        this.checkFirstLine(e)
    }


 
    this.successPage  = () => {
        console.log(error)
        console.log(error2)
        console.log(error3)
		if(!error && !error2 && !error3){
            // location.href = "game-success-7.html"
            console.log('redirect')
        } else {
            this.errorPage()
        }
    }


    this.errorPage = () => {
        if(error){
            document.querySelector('.DragGame—childs2--1').querySelector('.sign-description-btn').classList.add('error')
        
        } else {
            document.querySelector('.DragGame—childs2--1').querySelector('.sign-description-btn').classList.add('success')
        }

        if(error2){
            document.querySelector('.DragGame—childs2--2').querySelector('.sign-description-btn').classList.add('error')
        
        } else {
            document.querySelector('.DragGame—childs2--2').querySelector('.sign-description-btn').classList.add('success')
        }

        if(error3){
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