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
    this.answer = "1221"



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
        let myLocation = location.pathname;

        if(myLocation == "/Music-Class/city-voices-2/10.html" || myLocation == "/el.resursebi-front/Music-Class/city-voices-2/10.html"){
            location.href = "game-success-10.html"
            
        } else if (myLocation == "/Music-Class/city-voices-2/11.html" || myLocation == "/el.resursebi-front/Music-Class/city-voices-2/11.html"){
            location.href = "game-success-11.html"

        } else if (myLocation == "/Music-Class/city-voices-2/12.html" || myLocation == "/el.resursebi-front/Music-Class/city-voices-2/12.html"){
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
