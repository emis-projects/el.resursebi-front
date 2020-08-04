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
    this.index = 1;
    this.answer = "1"



    let listenBtn = document.querySelectorAll('.listen--btn');
    let items = document.querySelectorAll('.DragGame—childs1');
    let correctAnswer = document.getElementById('correctAnswer');
    const completeBtn = document.getElementById('completedGame');
    const resetBtn = document.getElementById('resetBtn');


    // listeners
    completeBtn.addEventListener('click', () => this.completGame());
    resetBtn.addEventListener('click', () => this.init());


    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('correctAnswer').setAttribute('data-correct', this.answer);
        $('.newDesign_subject_question_item-child').attr('style', 'display: none');
        $('.newDesign_subject_question_item-child')[0].setAttribute('style', 'display: flex');
    })


    $(listenBtn).click((e) => {
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
            $('.DragGame—childs1').attr('style', 'border: 2px solid #dc6c85;')
        }
    }


    this.checkWhichPageIs = () => {

        if(this.index == 1){
            this.index = 2;
            this.answersArray = "";
            this.answer = "1"
            this.error = true;
            document.getElementById('correctAnswer').setAttribute('data-correct', this.answer);
            $('.newDesign_subject_question_item-child').attr('style', 'display: none');
            $('.newDesign_subject_question_item-child')[1].setAttribute('style', 'display: flex');

        } else if(this.index == 2) {
            this.index = 3;
            this.answersArray = "";
            this.answer = "1"
            this.error = true;
            document.getElementById('correctAnswer').setAttribute('data-correct', this.answer);
            $('.newDesign_subject_question_item-child').attr('style', 'display: none');
            $('.newDesign_subject_question_item-child')[2].setAttribute('style', 'display: flex');
        }

        else if(this.index == 3){
            location.href = "game-success-12.html"
        }
    }


    this.init = () => {
        this.answersArray = '';

        $('.DragGame—childs1').removeAttr('style');

        // stop voice 
        createjs.Sound.stop("sound");
    }
    

    this.completGame = () => {
        this.checkGameAnswers()
    }
}



const Game = new game();
