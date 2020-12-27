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
    this.error = false;


    let items = document.querySelectorAll('.DragGame—childs1');
    let items2 = document.querySelectorAll('.DragGame—childs2');
    let correctAnswer = document.getElementById('correctAnswer');
    const completeBtn = document.getElementById('completedGame');
    const resetBtn = document.getElementById('resetBtn');


    // listeners
    completeBtn.addEventListener('click', () => this.completGame());
    resetBtn.addEventListener('click', () => this.init());


    var array = [];
    for(var i = 0; i < items2.length; i++ ){
        array.push(items2[i])
    }


    document.addEventListener('DOMContentLoaded', () => {
        $('.DragGame—childs2').attr('data-correct', 'false')
    })


    array.forEach(w => {
        let childs = w.querySelectorAll('.DragGame—childs1');

        for(let i = 0; i < childs.length; i++) {
            childs[i].addEventListener('click', (e) => {
                if(!this.error) {
                    if(e.target.classList.contains('class_music_3-check_box_item')){
                        e.target.classList.add('selected');
    
                        if(e.target.parentElement.getAttribute('data-index') == e.target.parentElement.parentElement.getAttribute('data-answer')){
                            e.target.parentElement.parentElement.setAttribute('data-correct', 'true')
                            e.target.classList.add('correct--element')
                            
                        } else {
                            e.target.parentElement.parentElement.setAttribute('data-correct', 'false')
                            e.target.classList.remove('correct--element')
                        }
        
                        let prev = e.target.parentElement.previousElementSibling;
                        let next = e.target.parentElement.nextElementSibling;
        
                        if(prev) {
                            if(prev.classList.contains('DragGame—childs1')){
                                prev.firstElementChild.classList.remove('selected')
                            }
                        }
        
                        if(next){
                            if(next.classList.contains('DragGame—childs1')) {
                                next.firstElementChild.classList.remove('selected')
                            }
                        }
                    }
                }
            })
        }
    })


    this.checkEveryElement = (element) => element.getAttribute('data-correct') == 'true';



    this.checkGameAnswers = () => {
        array.forEach(w => {
            if(w.getAttribute('data-correct') == 'false') {
                let childs = w.querySelectorAll('.DragGame—childs1');

                for(let i = 0; i < childs.length; i++) {
                    childs[i].querySelector('.class_music_3-check_box_item').classList.add('error')
                    childs[i].querySelector('.class_music_3-check_box_item').classList.remove('selected')
                    childs[i].querySelector('.class_music_3-check_box_item').classList.remove('success')
                }
            } else {
                let childs = document.querySelectorAll('.correct--element');
                childs.forEach(element => {
                    element.classList.remove('selected')
                    element.classList.add('success')
                });
            }
        })
    }


    this.init = () => {
        $('.class_music_3-check_box_item').removeClass('selected');
        $('.class_music_3-check_box_item').removeClass('error');
        $('.class_music_3-check_box_item').removeClass('success');
        $('.class_music_3-check_box_item').removeClass('correct--element');
        $('.DragGame—childs2').attr('data-correct', 'false');

        this.error = false;

        // stop voice 
        createjs.Sound.stop("sound");
    }
    

    this.completGame = () => {
        let x = array.every(this.checkEveryElement);

        if(x) {
            location.href = "game-success-5.html"

        } else {
            this.error = true;
            this.checkGameAnswers()
        }
        
        // stop voice 
        createjs.Sound.stop("sound");
    }
}


const Game = new game();