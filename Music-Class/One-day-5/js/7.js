createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];

function handleLoadComplete(event) {
    createjs.Sound.play("sound");
}

function handleLoadstop(event) {
    createjs.Sound.stop("sound");
}


$('.listen--btn').click(e => {
    handleLoadstop()
    createjs.Sound.registerSound({src:`${e.target.getAttribute('data-voice')}`, id:"sound"});
    handleLoadComplete()
})



function game(){
    this.error = true;

    
    // variables
    let dragElement1 = document.querySelectorAll('.DragGame—childs1');
    let dragElement2 = document.querySelectorAll('.DragGame—childs2');
    const completeBtn = document.getElementById('completedGame');
    const resetBtn = document.getElementById('resetBtn');



    // listeners
    completeBtn.addEventListener('click', () => this.completGame());
    resetBtn.addEventListener('click', () => this.init());


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
    

    this.dragDrop = e => { e.preventDefault();
        if(e.target.classList.contains('DragGame—childs1')){
            e.target.appendChild(document.querySelector('.draggedElement'));
        }
    }


    this.checkEveryElement = (element) => element.getAttribute('data-index') == element.parentElement.getAttribute('data-index');


    this.init = () => {
        this.error = false;

        $('.DragGame—childs1').removeAttr('style')


        $('.class_music_5-img_7').html($('.DragGame—childs2'))

        // stop voice 
        createjs.Sound.stop("sound");
    }
    

    this.completGame = () => {

        let el = dragElement2MyArray.every(this.checkEveryElement);

        if(el) {
            location.href = "game-success-7.html"

        } else {
            this.error = true;

            $('.DragGame—childs1').attr('style', "background: #dc6c85")
        }

        console.log(el);
    }

}


const Game = new game();