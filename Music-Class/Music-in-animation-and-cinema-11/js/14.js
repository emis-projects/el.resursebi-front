createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];

function handleLoadComplete(event) {
    createjs.Sound.play("sound");
}

function handleLoadstop(event) {
    createjs.Sound.stop("sound");
}

$('.listen--btn').click((e) => {
    handleLoadstop()
    createjs.Sound.registerSound({src:`${e.target.getAttribute('data-voice')}`, id:"sound"});
    handleLoadComplete()
})



function game() {
    this.answersArray = '';
    this.error = false;
    this.index = 0;


    let items = document.querySelectorAll('.DragGame—childs1');
    let items2 = document.querySelectorAll('.DragGame—childs3');
    let correctAnswer = document.getElementById('correctAnswer');
    const completeBtn = document.getElementById('completedGame');
    const resetBtn = document.getElementById('resetBtn');


    // listeners
    completeBtn.addEventListener('click', () => this.completGame());
    resetBtn.addEventListener('click', () => this.init());


    var array = [];
    for(var i = 0; i < items2.length; i++ ){
        array.push(items2[i])
    }



    document.querySelector('.DragGame—childs1').querySelectorAll('.class_music_11-check_box_11').forEach(w => {
        w.addEventListener('click', (e) => {
            if(!this.error) {
                if(e.target.classList.contains('selected')){
                    e.target.classList.remove('selected')
                    
                } else {
                    e.target.classList.add('selected');
                }
            }
        })
    })



    this.checkEveryElement = (element) => element.getAttribute('data-index') == element.parentElement.getAttribute('data-index');


    this.init = () => {
        $('.DragGame—childs3').removeClass('selected');
        $('.DragGame—childs3').removeClass('error');
        $('.DragGame—childs3').removeClass('success');


        this.error = false;

        // stop voice 
        createjs.Sound.stop("sound");
    }
    

    this.completGame = () => {
        let items = document.querySelectorAll('.selected');
        let elements = document.querySelectorAll('.DragGame—childs3');


        let array2 = [];
        for(var i = 0; i < items.length; i++ ){
            array2.push(items[i])
        }
        
        
        let el = array2.every(this.checkEveryElement)
        
        if(el == true && array2.length == 3) {
            location.href = "game-success-14.html"
            
        } else {
            this.error = true;
            
            for(var i = 0; i < elements.length; i++ ){
                elements[i].classList.remove('selected')
                elements[i].classList.add('error')
            }
        }

        // stop voice 
        createjs.Sound.stop("sound");
    }
}


const Game = new game();