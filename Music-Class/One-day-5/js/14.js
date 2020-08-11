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
                w.querySelector('svg .a').setAttribute('fill', '#f7cf42');
    
                if(w.previousElementSibling) {
                    let previousEl = w.previousElementSibling.querySelector('svg .a');

                    previousEl.setAttribute('fill', previousEl.getAttribute('data-fill'));
                }
    
                if(w.nextElementSibling) {
                    let nextEl = w.nextElementSibling.querySelector('svg .a');

                    nextEl.setAttribute('fill', nextEl.getAttribute('data-fill'));
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
                    item.querySelector('svg .a').setAttribute('fill', "#dc6c85")
                }
            } else if(w.getAttribute('data-answer') == "true") {
                w.querySelector('.correct--child').querySelector('svg .a').setAttribute('fill', "#a1dd6f")

            } else {
                let childs = w.querySelectorAll('.DragGame—childs1');

                for(var item of childs){
                    item.querySelector('svg .a').setAttribute('fill', "#dc6c85")
                }
            }
        })
    }


    this.init = () => {
        for(let item of items){
            item.querySelector('svg .a').setAttribute('fill', item.querySelector('svg .a').getAttribute('data-fill'))
        }

        $('.DragGame—childs1').removeClass('correct--child')
        $('.DragGame—childs2').removeAttr('data-answer')
        this.error = false;

        // stop voice 
        createjs.Sound.stop("sound");
    }
    


    this.completGame = () => {
        let answer = array.every(this.checkEveryElement)

        if(answer){
            location.href = "game-success-14.html"

        } else {
            this.errors()
            this.error = true;
        }

        // stop voice 
        createjs.Sound.stop("sound");
    }
}



const Game = new game();
