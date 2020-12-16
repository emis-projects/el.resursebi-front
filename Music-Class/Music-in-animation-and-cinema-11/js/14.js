createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];

function handleLoadComplete(event) {
    createjs.Sound.play("sound");
}

function handleLoadstop(event) {
    createjs.Sound.stop("sound");
}

$('.listen--btn').click((e) => {
    handleLoadstop()
    createjs.Sound.registerSound({src:`${e.target.getAttribute('data-voice')}`, id:"sound"});
    handleLoadComplete()
})



function game() {
    this.answersArray = '';
    this.error = false;
    this.index = 0;


    let dragElement1 = document.querySelectorAll('.DragGame—childs1');
    let dragElement2 = document.querySelectorAll('.DragGame—childs2');
    let correctAnswer = document.getElementById('correctAnswer');
    const completeBtn = document.getElementById('completedGame');
    const resetBtn = document.getElementById('resetBtn');

    $(dragElement2).on('dragstart', (e) => this.dragStart(e));
    $(dragElement2).on('dragend', (e) => this.dragEnd(e));


    // Loop through empty boxes and add listeners
    for (const drag of dragElement1) {
        drag.addEventListener('dragover', (e) => this.dragOver(e));
        drag.addEventListener('drop', (e) => this.dragDrop(e));
    }

    // listeners
    completeBtn.addEventListener('click', () => this.completGame());
    resetBtn.addEventListener('click', () => this.init());


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
    

    this.dragDrop = e => { e.preventDefault();
        if(!e.target.classList.contains('disabled')){
            e.target.appendChild(document.querySelector('.draggedElement'));
        }
        e.target.classList.add('disabled')
    }



    this.checkEveryElement = (element) => element.getAttribute('data-index') == element.querySelector('img').getAttribute('data-index');


    this.init = () => {
        $('.DragGame—childs1').removeAttr('style')
        $('.DragGame—childs1').removeClass('disabled')

        document.querySelector('.class_music_11-img_14_1').appendChild(document.querySelector('.child-1'))
        document.querySelector('.class_music_11-img_14_1').appendChild(document.querySelector('.child-2'))
        document.querySelector('.class_music_11-img_14_1').appendChild(document.querySelector('.child-3'))
        document.querySelector('.class_music_11-img_14_1').appendChild(document.querySelector('.child-4'))

        // stop voice 
        createjs.Sound.stop("sound");
    }
    

    this.completGame = () => {
        let index = 0;

        dragElement1MyArray.forEach(w => {
            if(w.querySelector('img')){
                index++
            }
        })

        if(index == 3) {
            let el = dragElement1MyArray.every(this.checkEveryElement);

            if(el) {
                location.href = "game-success-14.html"
            } else {
                $('.DragGame—childs1').attr('style', 'border-color: #dc6c85')
            }
        } else {
            $('.DragGame—childs1').attr('style', 'border-color: #dc6c85')
        }


    

        // stop voice 
        createjs.Sound.stop("sound");
    }
}


const Game = new game();