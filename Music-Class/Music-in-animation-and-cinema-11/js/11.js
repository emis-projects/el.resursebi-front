createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];

function handleLoadComplete(event) {
    createjs.Sound.play("sound");
}

function handleLoadstop(event) {
    createjs.Sound.stop("sound");
}


function game() {
    this.answersArray = '';
    this.error1 = true;
    this.error2 = true;
    this.error3 = true;
    this.userAnswer1 = "1-1";
    this.userAnswer2 = "2-2";
    this.userAnswer3 = "3-3";



    let listenBtn = document.querySelectorAll('.listen--btn');
    let items = document.querySelectorAll('.DragGame—childs1');
    let items2 = document.querySelectorAll('.DragGame—childs2');
    let correctAnswer = document.getElementById('correctAnswer');
    const completeBtn = document.getElementById('completedGame');
    const resetBtn = document.getElementById('resetBtn');


    // listeners
    completeBtn.addEventListener('click', () => this.completGame());
    resetBtn.addEventListener('click', () => this.init());



    $('.listen--btn').click((e) => {
        handleLoadstop()
        createjs.Sound.registerSound({src:`${e.target.getAttribute('data-voice')}`, id:"sound"});
        handleLoadComplete()
    })


    document.querySelector('.DragGame—childs1').querySelectorAll('.class_music_11-check_box_11').forEach(w => {
        w.addEventListener('click', (e) => {
            if(this.error1 || this.error2 || this.error3) {
                $('.DragGame—childs1 .class_music_11-check_box_11').removeClass('selected')
                $('.DragGame—childs1 .class_music_11-check_box_11').removeClass('error')
    
                e.target.classList.add('selected')
    
                if(e.target.getAttribute('data-index') == this.userAnswer1){
                    this.error1 = false;
                    e.target.classList.add('correct--game')
    
                } else {
                    this.error1 = true;
                    e.target.classList.remove('correct--game')
                }
            }
        })
    })


    document.querySelector('.DragGame—childs2').querySelectorAll('.class_music_11-check_box_11').forEach(w => {
        w.addEventListener('click', (e) => {
            if(this.error1 || this.error2 || this.error3) {
                $('.DragGame—childs2 .class_music_11-check_box_11').removeClass('selected')
                $('.DragGame—childs2 .class_music_11-check_box_11').removeClass('error')
    
                e.target.classList.add('selected')
    
                if(e.target.getAttribute('data-index') == this.userAnswer2){
                    this.error2 = false;
                    e.target.classList.add('correct--game')
    
                } else {
                    this.error2 = true;
                    e.target.classList.remove('correct--game')
                }
            }
        })
    })

    document.querySelector('.DragGame—childs3').querySelectorAll('.class_music_11-check_box_11').forEach(w => {
        w.addEventListener('click', (e) => {
            if(this.error1 || this.error2 || this.error3) {
                $('.DragGame—childs3 .class_music_11-check_box_11').removeClass('selected')
                $('.DragGame—childs3 .class_music_11-check_box_11').removeClass('error')
    
                e.target.classList.add('selected')
    
                if(e.target.getAttribute('data-index') == this.userAnswer3){
                    this.error3 = false;
                    e.target.classList.add('correct--game')
    
                } else {
                    this.error3 = true;
                    e.target.classList.remove('correct--game')
                }
            }
        })
    })


    this.checkGameAnswers = () => {
        if(this.error1) {
            $('.DragGame—childs1 .class_music_11-check_box_11').removeClass('selected')
            $('.DragGame—childs1 .class_music_11-check_box_11').removeClass('success')
            $('.DragGame—childs1 .class_music_11-check_box_11').addClass('error')
            
        } else {
            $('.DragGame—childs1 .correct--game').removeClass('selected')
            $('.DragGame—childs1 .correct--game').removeClass('error')
            $('.DragGame—childs1 .correct--game').addClass('success')
        }

        if(this.error2) {
            $('.DragGame—childs2 .class_music_11-check_box_11').removeClass('selected')
            $('.DragGame—childs2 .class_music_11-check_box_11').removeClass('success')
            $('.DragGame—childs2 .class_music_11-check_box_11').addClass('error')

        } else {
            $('.DragGame—childs2 .correct--game').removeClass('selected')
            $('.DragGame—childs2 .correct--game').removeClass('error')
            $('.DragGame—childs2 .correct--game').addClass('success')
        }

        if(this.error3) {
            $('.DragGame—childs3 .class_music_11-check_box_11').removeClass('selected')
            $('.DragGame—childs3 .class_music_11-check_box_11').removeClass('success')
            $('.DragGame—childs3 .class_music_11-check_box_11').addClass('error')

        } else {
            $('.DragGame—childs3 .correct--game').removeClass('selected')
            $('.DragGame—childs3 .correct--game').removeClass('error')
            $('.DragGame—childs3 .correct--game').addClass('success')
        }

        if(!this.error1 && !this.error2 && !this.error3){
            location.href = "game-success-11.html"
        }
    }


    this.init = () => {
        $('.class_music_11-check_box_11').removeClass('selected');
        $('.class_music_11-check_box_11').removeClass('error');
        $('.class_music_11-check_box_11').removeClass('success');
        $('.class_music_11-check_box_11').removeClass('correct--game');

        this.error1 = true;
        this.error2 = true;
        this.error3 = true;

        // stop voice 
        createjs.Sound.stop("sound");
    }
    

    this.completGame = () => {
        this.checkGameAnswers()
        
        // stop voice 
        createjs.Sound.stop("sound");
    }
}


const Game = new game();