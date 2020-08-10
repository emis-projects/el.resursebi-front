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
    this.answer1 = "";
    this.answer2 = "";



    let listenBtn = document.querySelector('.listen--btn');
    let items = document.querySelectorAll('.DragGame—childs1');
    const completeBtn = document.getElementById('completedGame');
    const resetBtn = document.getElementById('resetBtn');


    // listeners
    completeBtn.addEventListener('click', () => this.completGame());
    resetBtn.addEventListener('click', () => this.init());


    $('.listen--btn').click(e => {
        handleLoadstop()
        createjs.Sound.registerSound({src:`${e.target.getAttribute('data-voice')}`, id:"sound"});
        handleLoadComplete()
    })
    
    
    var myArray = [];

    for(var i = 0; i < items.length; i++ ){
      myArray.push(items[i])
    }
    
    
    document.querySelectorAll('.DragGame—childs3 .DragGame—childs1').forEach(w => {   
        w.addEventListener('click', e => {
            $('.DragGame—childs3 .DragGame—childs1').removeAttr('style')

            let value = w.getAttribute('data-index');
            
            this.answer1 = value;

            w.setAttribute('style', "background: #f8d24b")
        })
    })

    document.querySelectorAll('.DragGame—childs4 .DragGame—childs1').forEach(w => {   
        w.addEventListener('click', e => {
            $('.DragGame—childs4 .DragGame—childs1').removeAttr('style')

            let value = w.getAttribute('data-index');

            this.answer2 = value;

            w.setAttribute('style', "background: #f8d24b")
        })
    })


    this.init = () => {
        this.answer1 = "";
        this.answer2 = "";

        $('.DragGame—childs1').removeAttr('style')

        // stop voice 
        createjs.Sound.stop("sound");
    }
    

    this.completGame = () => {
        if(this.answer1 == "1-2" && this.answer2 == "2-1"){
            location.href = "game-success-8-1.html"

        } else {
            $('.DragGame—childs1').attr('style', "background: #dc6c85")
        }
    }
}



const Game = new game();
