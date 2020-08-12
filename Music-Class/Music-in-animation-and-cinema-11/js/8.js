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
    let items2 = document.querySelector('.DragGame—childs2');
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



    let childs = items2.querySelectorAll('.DragGame—childs1');

    for(let i = 0; i < childs.length; i++) {
        childs[i].addEventListener('click', (e) => {
            if(!this.error) {
                $('.DragGame—childs1').removeClass('selected');

                if(e.target.classList.contains('class_music_11-check_box')){
                    e.target.classList.add('selected');

                    if(e.target.getAttribute('data-index') == e.target.parentElement.parentElement.getAttribute('data-answer')){
                        e.target.parentElement.parentElement.setAttribute('data-correct', 'true')
                        e.target.classList.add('correct--element')
                        this.error = false;
                        
                    } else {
                        e.target.parentElement.parentElement.setAttribute('data-correct', 'false')
                        e.target.classList.remove('correct--element')
                        this.error = true;
                    }
                }
            }
        })
    }


    this.init = () => {
        $('.class_music_11-check_box').removeClass('selected');
        $('.class_music_11-check_box').removeClass('error');
        $('.class_music_11-check_box').removeClass('success');
        $('.class_music_11-check_box').removeClass('correct--element');
        $('.DragGame—childs2').attr('data-correct', 'false');

        this.error = false;

        // stop voice 
        createjs.Sound.stop("sound");
    }
    

    this.completGame = () => {
        if(!this.error) {
            let loc = location.pathname;

            if(loc == "/Music-Class/Music-in-animation-and-cinema-11/8.html" || loc == "/el.resursebi-front/Music-Class/Music-in-animation-and-cinema-11/8.html"){
                location.href = "game-success-8.html"
                
            } else if(loc == "/Music-Class/Music-in-animation-and-cinema-11/9.html" || loc == "/el.resursebi-front/Music-Class/Music-in-animation-and-cinema-11/9.html"){
                location.href = "game-success-9.html"
                
            } else if(loc == "/Music-Class/Music-in-animation-and-cinema-11/10.html" || loc == "/el.resursebi-front/Music-Class/Music-in-animation-and-cinema-11/10.html"){
                location.href = "game-success-10.html"

            } else if(loc == "/Computer-Science/Class-2/marks-2/8.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/marks-2/8.html"){
                location.href = "game-success-8.html"
            
            } else if(loc == "/Computer-Science/Class-2/marks-2/11.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/marks-2/11.html"){
                location.href = "game-success-11.html"

            } else if(loc == "/Computer-Science/Class-2/marks-2/18.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/marks-2/18.html") {
                location.href = "game-success-18.html"

            }

        } else {
            $('.DragGame—childs1').addClass('error')
            $('.DragGame—childs1').removeClass('selected')
            $('.DragGame—childs1').removeClass('correct--element')
        }
        
        // stop voice 
        createjs.Sound.stop("sound");
    }
}


const Game = new game();