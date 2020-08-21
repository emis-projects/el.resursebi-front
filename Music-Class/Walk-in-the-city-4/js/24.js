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
    this.index = 1;
    this.answer;
    this.error = false;


    let listenBtn = document.querySelectorAll('.listen--btn');
    let dragElement1 = document.querySelector('.DragGame—childs1');
    let dragElement2 = document.querySelectorAll('.DragGame—childs2');
    let correctAnswer = document.getElementById('correctAnswer');
    const completeBtn = document.getElementById('completedGame');
    const resetBtn = document.getElementById('resetBtn');



    // listeners
    completeBtn.addEventListener('click', () => this.completGame());
    resetBtn.addEventListener('click', () => this.init());


    $(listenBtn).click((e) => {
        handleLoadstop()
        createjs.Sound.registerSound({src:`${e.target.getAttribute('data-voice')}`, id:"sound"});
        handleLoadComplete()
    })


    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('.number').innerHTML = this.index;
        dragElement1.setAttribute('data-index', this.index)
    })
    

    document.querySelector('.DragGame—childs1').addEventListener('click', (e) => {
        if(this.error == false) {
            e.target.setAttribute('style', "transition: all 0.5s; transform: rotate(360deg)")
    
            setTimeout(() => {
                e.target.removeAttribute('style')
            }, 500)
        }
    })



    
    $('.DragGame—childs2').click((e) => {
        if(this.error == false) {
            let index = e.target.getAttribute('data-index')

            let value = this.answersArray.concat(index)

            this.answersArray = value
    
            this.answer = index;

            this.getNextStep();
    
            // stop voice 
            createjs.Sound.stop("sound");
        }
    })


    this.getNextStep = () => {
        if(this.index < 5){
            this.index++
        }

        document.querySelector('.number').innerHTML = this.index;
        dragElement1.setAttribute('data-index', this.index)

        if(this.index == 2) {
            dragElement1.setAttribute('data-voice', "./game-voices/სლაიდი 26/ბებია.wav")
            
        } else if(this.index == 3) {
            dragElement1.setAttribute('data-voice', "./game-voices/სლაიდი 26/გოგონა.wav")

        } else if(this.index == 4) {
            dragElement1.setAttribute('data-voice', "./game-voices/სლაიდი 26/მამაკაცი.wav")
        }
    }



    this.init = () => {
        this.error = false;
        this.answersArray = '';
        
        dragElement1.setAttribute('src', "../../img/gakvetilebi/Music-class/Walk-in-the-city-4/music-new-04-14-yellow-ball.svg")
        dragElement1.setAttribute('data-voice', "./game-voices/სლაიდი 26/ბავშვი.wav")

        this.index = 1;

        document.querySelector('.number').innerHTML = this.index;
        dragElement1.setAttribute('data-index', this.index)

        // stop voice 
        createjs.Sound.stop("sound");
    }
    

    this.completGame = () => {
        if(correctAnswer.getAttribute('data-correct') == this.answersArray){
            this.error = false;
            location.href = "game-success-24.html"

        } else {
            this.error = true;
            dragElement1.setAttribute('src', "../../img/gakvetilebi/Music-class/Walk-in-the-city-4/Group 48675-red.svg")
        }
    }
}



const Game = new game();
