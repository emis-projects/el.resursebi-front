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
    this.error = false;

    let items = document.querySelectorAll('.DragGame—childs1');
    let itemsParent = document.querySelectorAll('.DragGame—childs2');
    const completeBtn = document.getElementById('completedGame');
    const resetBtn = document.getElementById('resetBtn');


    // listeners
    completeBtn.addEventListener('click', () => this.completGame());
    resetBtn.addEventListener('click', () => this.init());


    var array = [];
    for(var i = 0; i < itemsParent.length; i++ ){
        array.push(itemsParent[i])
    }


    
    items.forEach(w => {
        w.addEventListener('click', () => {
            if(!this.error) {
                w.setAttribute('style', 'background: #f8d24b');
    
                if(w.previousElementSibling) {
                    w.previousElementSibling.removeAttribute('style');
                }
    
                if(w.nextElementSibling) {
                    w.nextElementSibling.removeAttribute('style');
                }
    
                if(w.getAttribute('data-index') == w.parentElement.getAttribute('data-correct')){
                    w.parentElement.setAttribute('data-answer', true)
                    w.classList.add('correct--child')
    
                } else {
                    w.parentElement.setAttribute('data-answer', false)
                    w.classList.remove('correct--child')
                }
            }
        })
    })


    this.checkEveryElement = (element) => element.getAttribute('data-answer') == "true";



    this.errors = () => {
        array.forEach(w => {
            if(w.getAttribute('data-answer') == "false"){
                let childs = w.querySelectorAll('.DragGame—childs1');

                for(var item of childs){
                    item.setAttribute('style', "background: #dc6c85")
                }
            } else if(w.getAttribute('data-answer') == "true") {
                w.querySelector('.correct--child').setAttribute('style', "background: #a1dd6f")

            } else {
                let childs = w.querySelectorAll('.DragGame—childs1');

                for(var item of childs){
                    item.setAttribute('style', "background: #dc6c85")
                }
            }
        })
    }


    this.init = () => {
        $('.DragGame—childs1').removeAttr('style')
        $('.DragGame—childs2').removeAttr('data-answer')
        this.error = false;

        // stop voice 
        createjs.Sound.stop("sound");
    }
    

    this.completGame = () => {
        let answer = array.every(this.checkEveryElement)

        if(answer){
            location.href = "game-success-10.html"

        } else {
            this.errors()
            this.error = true;
        }

        // stop voice 
        createjs.Sound.stop("sound");
    }
}



const Game = new game();
