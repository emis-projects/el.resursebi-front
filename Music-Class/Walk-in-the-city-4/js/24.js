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
    this.error = true;


    let listenBtn = document.querySelectorAll('.listen--btn');
    let dragElement1 = document.querySelector('.DragGame—childs1');
    let dragElement2 = document.querySelectorAll('.DragGame—childs2');
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
        dragElement1.innerHTML = this.index;
    })
    




    this.checkGameAnswers = () => {
        console.log('error');
    }


    this.checkWhichPageIs = () => {
        let myLocation = location.pathname;

        if(myLocation == "/Music-Class/Walk-in-the-city-4/18.html" || myLocation == "/el.resursebi-front/Music-Class/Walk-in-the-city-4/18.html"){
            location.href = "game-success-18.html"
            
        } else if (myLocation == "/Music-Class/Walk-in-the-city-4/19.html" || myLocation == "/el.resursebi-front/Music-Class/Walk-in-the-city-4/19.html"){
            location.href = "game-success-19.html"
        } 
    }


    this.init = () => {
       

        // stop voice 
        createjs.Sound.stop("sound");
    }
    

    this.completGame = () => {
        this.checkGameAnswers()
    }
}



const Game = new game();
