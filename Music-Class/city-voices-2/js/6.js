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
    this.error = true;



    let listenBtn = document.querySelector('.listen--btn');
    let items = document.querySelectorAll('.DragGame—childs1');
    let correctAnswer = document.getElementById('correctAnswer');
    const completeBtn = document.getElementById('completedGame');
    const resetBtn = document.getElementById('resetBtn');


    // listeners
    completeBtn.addEventListener('click', () => this.completGame());
    resetBtn.addEventListener('click', () => this.init());


    document.addEventListener('DOMContentLoaded', () => {
        for(const item of items) {
            $(item).attr('data-img', $(item).attr('src'))
        }
    })


    listenBtn.addEventListener('click', e => {
        handleLoadstop()
        createjs.Sound.registerSound({src:`${e.target.getAttribute('data-voice')}`, id:"sound"});
        handleLoadComplete()
    })


    var myArray = [];

    for(var i = 0; i < items.length; i++ ){
      myArray.push(items[i])
    }


    myArray.forEach(w => {
        w.addEventListener('click', e => {
            handleLoadstop();
            createjs.Sound.registerSound({src:`${e.target.getAttribute('data-voice')}`, id:"sound"});
            handleLoadComplete();

            let value = this.answersArray.concat(w.getAttribute('data-index'))

            this.answersArray = value

            if(correctAnswer.getAttribute('data-correct') == this.answersArray){
                this.error = false;

            } else {
                this.error = true;
            }
        })
    })

    this.checkGameAnswers = () => {
        if(!this.error){
            this.checkWhichPageIs()

        } else {
            $('.DragGame—childs1').attr('src', "../../img/gakvetilebi/Music-class/city-voices-2/Group 47477.svg")
        }
    }

    this.checkWhichPageIs = () => {
        let myLocation = location.pathname;

        if(myLocation == "/Music-Class/city-voices-2/6.html" || myLocation == "/el.resursebi-front/Music-Class/city-voices-2/6.html"){
            location.href = "game-success-6.html"

        } else if (myLocation == "/Music-Class/city-voices-2/7.html" || myLocation == "/el.resursebi-front/Music-Class/city-voices-2/7.html"){
            location.href = "game-success-7.html"
        }
    }


    this.init = () => {
        this.answersArray = '';

        for(const item of items) {
            $(item).attr('src', $(item).attr('data-img'))
        }

        // stop voice
        createjs.Sound.stop("sound");
    }


    this.completGame = () => {
        this.checkGameAnswers()
    }
}



const Game = new game();
