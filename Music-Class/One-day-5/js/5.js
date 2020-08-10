createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];

function handleLoadComplete(event) {
    createjs.Sound.play("sound");
}

function handleLoadstop(event) {
    createjs.Sound.stop("sound");
}

$('.listen--btn').click(e => {
    handleLoadstop()
    createjs.Sound.registerSound({src:`${e.target.getAttribute('data-voice')}`, id:"sound"});
    handleLoadComplete()
})



function game() {
    this.error1 = true;
    this.error2 = true;
    this.error3 = true;
    this.error4 = true;


    let items = document.querySelectorAll('.DragGame—childs1');
    const completeBtn = document.getElementById('completedGame');
    const resetBtn = document.getElementById('resetBtn');


    // listeners
    completeBtn.addEventListener('click', () => this.completGame());
    resetBtn.addEventListener('click', () => this.init());


    $('.DragGame—childs3 .DragGame—childs1').click((e) => generateCorrectAnswer(e, 1, $('.DragGame—childs3')))
    $('.DragGame—childs4 .DragGame—childs1').click((e) => generateCorrectAnswer(e, 2, $('.DragGame—childs4')))
    $('.DragGame—childs5 .DragGame—childs1').click((e) => generateCorrectAnswer(e, 3, $('.DragGame—childs5')))
    $('.DragGame—childs6 .DragGame—childs1').click((e) => generateCorrectAnswer(e, 4, $('.DragGame—childs6')))


    generateCorrectAnswer = (e, errorNumber, parent) => {
        parent[0].querySelectorAll('.DragGame—childs1').forEach(element => {
            element.removeAttribute('style')
            element.classList.remove('selected')
            element.classList.remove('correct')
        });

        e.target.setAttribute('style', 'background: #f8d24b')
        e.target.classList.add('selected')

        if(e.target.getAttribute('data-index') == e.target.parentElement.getAttribute('data-answer')){
            e.target.classList.add('correct');

            if(errorNumber == 1) {
                this.error1 = false
                
            } else if(errorNumber == 2){
                this.error2 = false

            } else if(errorNumber == 3){
                this.error3 = false

            } else if(errorNumber == 4){
                this.error4 = false

            }

        } else {
            if(errorNumber == 1) {
                this.error1 = true
                
            } else if(errorNumber == 2){
                this.error2 = true

            } else if(errorNumber == 3){
                this.error3 = true

            } else if(errorNumber == 4){
                this.error4 = true

            }
        }


    }


    this.init = () => {
        $('.DragGame—childs1').removeAttr('style')
        $('.DragGame—childs1').removeClass('selected')
        $('.DragGame—childs1').removeClass('correct')

        this.error1 = true;
        this.error2 = true;
        this.error3 = true;
        this.error4 = true;

        // stop voice 
        createjs.Sound.stop("sound");
    }
    

    this.completGame = () => {
        if(this.error1 == false & this.error2 == false && this.error3 == false && this.error4 == false){
            location.href = "game-success-5.html"

        } else {
            document.querySelectorAll('.m-5-5-bottom').forEach(w => {
                if(w.querySelector('.correct')) {
                    w.querySelector('.correct').setAttribute('style', "background: #a2dd6e")

                } else if(w.querySelector('.selected')) {
                    w.querySelector('.selected').setAttribute('style', "background: #dc6c85")

                } else {
                    w.querySelectorAll('.DragGame—childs1').forEach(j => {
                        j.setAttribute('style', "background: #dc6c85")
                    })
                }
            })
        }

        // stop voice 
        createjs.Sound.stop("sound");
    }
}



const Game = new game();
