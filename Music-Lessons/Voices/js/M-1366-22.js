function M136622(){
    this.audio = null;
    this.correctAnswer = "";
    this.userAnswer1 = "";
    this.userAnswer2 = "";
    this.userAnswer3 = "";
    this.incorrectDots = [];
    this.error = true;


    // variables
    const elements = document.querySelectorAll('.music_play_box');
    const dots = document.querySelectorAll('.voices__question__dot');
    const dot1 = document.querySelector('.dots1');
    const dot2 = document.querySelector('.dots2');
    const dot3 = document.querySelector('.dots3');
    const completeBtn = document.getElementById('completedGame');
    const resetBtn = document.getElementById('resetBtn');


    // listeners
    completeBtn.addEventListener('click', () => this.completGame());
    resetBtn.addEventListener('click', () => this.init());


    // voices
    var audioUrls = [
        '../game-voices/M-1366-22-1.wav',
        '../game-voices/M-1366-22-2.wav',
        '../game-voices/M-1366-22-3.wav',
    ]

    var myArray = [];

    for(var i = 0; i < elements.length; i++ ){
      myArray.push(elements[i])
    }

    var myArray2 = [];

    for(var i = 0; i < dots.length; i++ ){
      myArray2.push(dots[i])
    }


    var audio;
    var voice;


    myArray.forEach(w => {
        w.addEventListener('click', (e) => {
            let voiceAttr = w.getAttribute('data-voice');

            audio = w.getAttribute('data-voice');

            this.audio = audio;

            voice = audioUrls.filter(w => w == audio)

            var myaudio = new Audio(voice);

            myaudio.play();

            if(voiceAttr == '../game-voices/M-1366-22-1.wav'){
                this.correctAnswer = '1-4'

            } else if(voiceAttr == '../game-voices/M-1366-22-2.wav'){
                this.correctAnswer = '2-3'

            } else if(voiceAttr == '../game-voices/M-1366-22-3.wav'){
                this.correctAnswer = '3-1'
            }
        })
    })


    this.removeDots = (parent) => {
        let items = parent.parentElement.parentElement.querySelectorAll('.voices__question__dot')

        $(items).removeClass('active')
    }


    dot1.querySelectorAll('.voices__question__dot').forEach(w => {
        w.addEventListener('click', (e) => {
            this.removeDots(e.target);
            w.classList.add('active');
            this.userAnswer1 = e.target.parentElement.getAttribute('data-index');

            this.errorChecking(this.correctAnswer, this.userAnswer1)
        })
    })


    dot2.querySelectorAll('.voices__question__dot').forEach(w => {
        w.addEventListener('click', (e) => {
            this.removeDots(e.target);
            w.classList.add('active');
            this.userAnswer2 = e.target.parentElement.getAttribute('data-index');
            this.errorChecking(this.correctAnswer, this.userAnswer2)
        })
    })


    dot3.querySelectorAll('.voices__question__dot').forEach(w => {
        w.addEventListener('click', (e) => {
            this.removeDots(e.target);
            w.classList.add('active');
            this.userAnswer3 = e.target.parentElement.getAttribute('data-index');
            this.errorChecking(this.correctAnswer, this.userAnswer3);
        })
    })



    this.errorChecking = (correctAnswer, userAnswer) => {
        if(correctAnswer !== userAnswer) {
            let x = myArray2.filter(w => w.parentElement.getAttribute('data-index') == userAnswer);
            this.incorrectDots.push(x[0])
        }
    }

    this.completGame = () => {
        
    }
}


const M136622Game = new M136622();