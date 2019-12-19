createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];

function handleLoadComplete(event) {
    createjs.Sound.play("sound");
}

function handleLoadstop(event) {
   createjs.Sound.stop("sound");
}


function M136622(){
    this.userAnswer1 = "";
    this.userAnswer2 = "";
    this.userAnswer3 = "";
    this.userAnswerArray1 = [];
    this.userAnswerArray2 = [];
    this.userAnswerArray3 = [];


    // variables
    const elements = document.querySelectorAll('.music_play_box');
    const dots = document.querySelectorAll('.voices__question__dot');
    const dot1 = document.querySelector('.dots1');
    const dot2 = document.querySelector('.dots2');
    const dot3 = document.querySelector('.dots3');
    let div1 = document.querySelector('.correct__div1').getAttribute('data-index');
    let div2 = document.querySelector('.correct__div2').getAttribute('data-index');
    let div3 = document.querySelector('.correct__div3').getAttribute('data-index');
    const completeBtn = document.getElementById('completedGame');
    const resetBtn = document.getElementById('resetBtn');


    // listeners
    completeBtn.addEventListener('click', () => this.completGame());
    resetBtn.addEventListener('click', () => this.init());


    var myArray = [];

    for(var i = 0; i < elements.length; i++ ){
      myArray.push(elements[i])
    }

    var myArray2 = [];

    for(var i = 0; i < dots.length; i++ ){
      myArray2.push(dots[i])
    }


    this.init = () => {
        this.userAnswer1 = "";
        this.userAnswer2 = "";
        this.userAnswer3 = "";
        this.userAnswerArray1 = [];
        this.userAnswerArray2 = [];
        this.userAnswerArray3 = [];

        // stop voice 
        createjs.Sound.stop("sound");

        handleLoadstop()

        $('.voices__question__dot').removeClass('active')
        $('.voices__question__dot').removeClass('correct')
        $('.voices__question__dot').removeClass('error')
    }



    var audio;

    myArray.forEach(w => {
        w.addEventListener('click', (e) => {
            handleLoadstop()
            createjs.Sound.registerSound({src:`${e.target.getAttribute('data-voice')}`, id:"sound"});
            handleLoadComplete()

            if(audio == '../game-voices/M-1366-22-1.wav'){
                this.correctAnswer = '1-4'
                this.audio1 = audio

            } else if(audio == '../game-voices/M-1366-22-2.wav'){
                this.correctAnswer = '2-3';
                this.audio2 = audio

            } else if(audio == '../game-voices/M-1366-22-3.wav'){
                this.correctAnswer = '3-1'
                this.audio3 = audio
            }
        })
    })


    this.removeDots = (parent) => {
        let items = parent.parentElement.parentElement.querySelectorAll('.voices__question__dot')

        $(items).removeClass('active')
        $(items).removeClass('correct')
        $(items).removeClass('error')
    }


    this.errorChecking = (correctAnswer, userAnswer, userAnswerArray) => {
        if(correctAnswer !== userAnswer) {
            let x = myArray2.filter(w => w.parentElement.getAttribute('data-index') == userAnswer);
            userAnswerArray.push(x[0])
        }
    }


    dot1.querySelectorAll('.voices__question__dot').forEach(w => {
        w.addEventListener('click', (e) => {
            this.userAnswerArray1 = [];
            this.removeDots(e.target);
            w.classList.remove('correct');
            w.classList.add('active');

            if(w.parentElement.getAttribute('data-index') == "1-2"){
                w.classList.add('correct')
            }

            this.userAnswer1 = e.target.parentElement.getAttribute('data-index');
            this.errorChecking(div1, this.userAnswer1, this.userAnswerArray1)
        })
    })


    dot2.querySelectorAll('.voices__question__dot').forEach(w => {
        w.addEventListener('click', (e) => {
            this.userAnswerArray2 = [];
            this.removeDots(e.target);
            w.classList.remove('correct');
            w.classList.add('active');

            if(w.parentElement.getAttribute('data-index') == "2-1"){
                w.classList.add('correct')
            }

            this.userAnswer2 = e.target.parentElement.getAttribute('data-index');
            this.errorChecking(div2, this.userAnswer2, this.userAnswerArray2)
        })
    })


    dot3.querySelectorAll('.voices__question__dot').forEach(w => {
        w.addEventListener('click', (e) => {
            this.userAnswerArray3 = [];
            this.removeDots(e.target);
            w.classList.remove('correct');
            w.classList.add('active');

            if(w.parentElement.getAttribute('data-index') == "3-1"){
                w.classList.add('correct');
            }

            this.userAnswer3 = e.target.parentElement.getAttribute('data-index');
            this.errorChecking(div3, this.userAnswer3, this.userAnswerArray3)
        })
    })


    this.completGame = () => {
        this.userAnswerArray1.forEach(w => {
            w.classList.remove('active')
            w.classList.add('error')
        })
        
        this.userAnswerArray2.forEach(w => {
            w.classList.remove('active')
            w.classList.add('error')
        })
        
        this.userAnswerArray3.forEach(w => {
            w.classList.remove('active')
            w.classList.add('error')
        })


        $('.voices__question__dot.correct').attr('style', 'background: #a2dd6f; border: 1px solid #a2dd6f');
        
        if(this.userAnswer1 == div1 && this.userAnswer2 == div2 && this.userAnswer3 == div3){
            location.href = 'M-1366-03-8-success.html'
        }

    }
}


const M136622Game = new M136622();