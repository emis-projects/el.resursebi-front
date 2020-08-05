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
    let items2 = document.querySelectorAll('.DragGame—childs2');
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

    var myArray2 = [];

    for(var i = 0; i < items2.length; i++ ){
      myArray2.push(items2[i])
    }
    
    
    myArray.forEach(w => {   
        w.addEventListener('click', e => {
            handleLoadstop();
            createjs.Sound.registerSound({src:`${e.target.getAttribute('data-voice')}`, id:"sound"});
            handleLoadComplete();
        })
    })


    myArray2.forEach(w => {   
        w.addEventListener('click', e => {
            $('.DragGame—childs2').removeClass('selected')
            $('.DragGame—childs2').removeClass('error');

            this.answersArray = "";

            w.classList.add('selected');

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
            for(const item of items2){

                if(item.classList.contains('selected')){
                    item.classList.remove('selected')
                    item.classList.add('error')
                }
            }
        }
    }


    this.checkWhichPageIs = () => {

        if(this.index == 1){
            this.index = 2;
            this.answersArray = "";
            this.answer = "3"
            this.error = true;
            document.getElementById('correctAnswer').setAttribute('data-correct', this.answer);
            $('.newDesign_subject_question_item-child').attr('style', 'display: none');
            $('.newDesign_subject_question_item-child')[1].setAttribute('style', 'display: flex');
            $('.DragGame—childs2').removeClass('error');
            $('.DragGame—childs2').removeClass('selected')

        } else if(this.index == 2) {
            this.index = 3;
            this.answersArray = "";
            this.answer = "2"
            this.error = true;
            document.getElementById('correctAnswer').setAttribute('data-correct', this.answer);
            $('.newDesign_subject_question_item-child').attr('style', 'display: none');
            $('.newDesign_subject_question_item-child')[2].setAttribute('style', 'display: flex');
        }

        else if(this.index == 3){
            location.href = "game-success-14.html"
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
        
        // stop voice 
        createjs.Sound.stop("sound");
    }
}



const Game = new game();
