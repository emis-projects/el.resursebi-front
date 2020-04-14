function game () {
    this.score = 0;
    this.startGameIs = true;
    this.TIME_LIMIT = 30;
    this.timePassed = 0;
    this.bubbleCreatedinterval = 9000;
    this.timeLeft = this.TIME_LIMIT;
    this.timerInterval = null;
    this.imgHref = "../../../img/gakvetilebi/Computer-Science/Class-5/What-is-program-3/";
    this.randomedImages = [];
    
    2,3

    this.questions = [
        ["cs-5-3-17-img-4.svg", "cs-5-3-17-img-3.svg"],
        ["cs-5-3-17-img-3.svg", "cs-5-3-17-img-4.svg"],
        ["cs-5-3-17-img-4.svg", "cs-5-3-17-img-4.svg"],
    ]


    var resetBtn = document.getElementById('resetBtn');
    let imgs = document.querySelectorAll('.tetris__element');
    let items = document.querySelectorAll('.direcion-pointer_box-image');
    document.getElementById('numberOfScore').innerHTML = this.score;
    
    resetBtn.addEventListener('click', () => this.init());
    document.addEventListener('DOMContentLoaded', () => {
        this.startTimer();
        this.getRandomBubblesLink(this.questions, 1);
        this.generateNewBubbles();
    })
    

    $( document ).on( "click", "img.tetris__element", (e) => {
        this.afterClickBubble(e.target)
    });



    this.init = () => {
        this.onTimesUp();
        clearInterval(interval);
        this.score = 0;
        document.getElementById('numberOfScore').innerHTML = this.score;
        this.TIME_LIMIT = 30;
        this.timePassed = 0;
        this.timerInterval = null;
        this.bubbleCreatedinterval = 9000;
        this.startGameIs = true;
        this.removeAllBubble();
        this.startTimer();
        this.getRandomBubblesLink(this.questions, 1);
        this.generateNewBubbles();
        document.getElementById('clock').setAttribute('src', '../../../img/gakvetilebi/Computer-Science/Class-5/objects-moving-4/C-5-4-Clock.svg');
        document.getElementById('time').setAttribute('style', 'color: #937dce');
    }


    $(document).ready(() => {
        $('.tetris__element').click(e => {
            e.stopPropagation();

            if(this.startGameIs){
                this.afterClickBubble(e.target)
            }
        })
    });



    var interval = setInterval(() => {
        this.getRandomBubblesLink(this.questions, 1);
        this.generateNewBubbles();

    }, this.bubbleCreatedinterval)



    this.generateNewBubbles = () => {
        if(this.startGameIs){
            for(var j = 0; j < 1; j++){
                for(var i = 0; i < 2; i++){
                    
                    let img = document.createElement('img');
                    
                    img.classList.add('tetris__element');
                    img.classList.add('fadeInUp');
                    
                    img.setAttribute('src', `${this.imgHref}${this.randomedImages[i]}`)

                    if(this.randomedImages[i] == "cs-5-3-17-img-2.svg"){
                        img.setAttribute('data-type', 'event')
                        
                    } else if(this.randomedImages[i] == "cs-5-3-17-img-3.svg"){
                        img.setAttribute('data-type', 'looks')
                        
                    } else if(this.randomedImages[i] == "cs-5-3-17-img-4.svg"){
                        img.setAttribute('data-type', 'looks') 
                    }
                    
                    items[i].append(img)
                }
            }
        } else {
            clearInterval(interval);
            return false
        }
    }



    this.getRandomBubblesLink = (arr, n) => {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }

        this.randomedImages = result[0];

        return result;
    }
    

    this.removeAllBubble = () => {
        $('.tetris__element').remove();
    }
    
    this.afterClickBubble = (bubble) => {
        let bubbleAttr = bubble.getAttribute('data-type');
        let bubbleParentAttr = bubble.parentElement.getAttribute('data-answer');


        if(bubbleAttr == bubbleParentAttr){
            this.score++
            document.getElementById('numberOfScore').innerHTML = this.score;

            clearInterval(interval);

            this.getRandomBubblesLink(this.questions, 1);
            this.removeAllBubble();
            this.generateNewBubbles();


            interval = setInterval(() => {
                this.getRandomBubblesLink(this.questions, 1);
                this.generateNewBubbles();
        
            }, this.bubbleCreatedinterval)
        }
    }


    this.onTimesUp = () => {
        clearInterval(timerInterval);
    }

      
    this.startTimer = () => {
        this.startGameIs = true;

        document.getElementById('clock').setAttribute('src', '../../../img/gakvetilebi/Computer-Science/Class-5/objects-moving-4/C-5-4-Clock.svg')
        document.getElementById('time').setAttribute('style', 'color: #937dce')

        timerInterval = setInterval(() => {
            let timePassed = this.timePassed += 1;
            let timeLeft = this.TIME_LIMIT - timePassed;
            document.getElementById("time").innerHTML = this.formatTime(timeLeft);
        
            if (timeLeft === 0) {
                this.onTimesUp();
                document.getElementById('clock').setAttribute('src', '../../../img/gakvetilebi/Computer-Science/Class-5/objects-moving-4/C-5-4-Clock-red.svg')
                document.getElementById('time').setAttribute('style', 'color: #dc6c85')
                this.startGameIs = false;
            }
        }, 1000);
    }

      
    this.formatTime = (time) => {
        let seconds = time % 60;
    
        return `${seconds} წ`;
    }

    this.calculateTimeFraction = () => {
        const rawTimeFraction = this.timeLeft / this.TIME_LIMIT;
        return rawTimeFraction - (1 / this.TIME_LIMIT) * (1 - rawTimeFraction);
    }
}

const Game = new game();