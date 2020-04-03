function game () {
    this.score = 0;
    this.startGameIs = true;
    this.TIME_LIMIT = 30;
    this.timePassed = 0;
    this.bubbleCreatedinterval = 12000;
    this.timeLeft = this.TIME_LIMIT;
    this.timerInterval = null;
    this.imgHref = "../../../img/gakvetilebi/Computer-Science/Class-5/objects-moving-4/";
    this.imgSide = ["C-5-4-right.svg", "C-5-4-left.svg", "C-5-4-up.svg", "C-5-4-down.svg"];
    this.randomedImages = [];


    var resetBtn = document.getElementById('resetBtn');
    let imgs = document.querySelectorAll('.bubble__img');
    let items = document.querySelectorAll('.direcion-pointer_box-image');
    document.getElementById('numberOfScore').innerHTML = this.score;
    
    resetBtn.addEventListener('click', () => this.init());
    document.addEventListener('DOMContentLoaded', () => {
        this.startTimer();
        this.getRandomBubblesLink(this.imgSide, 4);
        this.generateNewBubbles();

        // console.log(this.randomedImages);
    })
    

    $( document ).on( "click", "img.bubble__img", (e) => {
        this.afterClickBubble(e.target)
    });



    this.init = () => {
        this.onTimesUp();
        this.startGameIs = true;
        this.score = 0;
        document.getElementById('numberOfScore').innerHTML = this.score;
        this.TIME_LIMIT = 30;
        this.timePassed = 0;
        this.timerInterval = null;
        this.bubbleCreatedinterval = 12000;
        this.startTimer();
        this.removeAllBubble();
        this.getRandomBubblesLink(this.imgSide, 4);
        this.generateNewBubbles();
        document.getElementById('clock').setAttribute('src', '../../../img/gakvetilebi/Computer-Science/Class-5/objects-moving-4/C-5-4-Clock.svg');
        document.getElementById('time').setAttribute('style', 'color: #937dce');
    }


    $(document).ready(() => {
        $('.bubble__img').click(e => {
            e.stopPropagation();

            if(this.startGameIs){
                this.afterClickBubble(e.target)
            }
        })
    });



    var interval = setInterval(() => {
        this.getRandomBubblesLink(this.imgSide, 4);
        this.generateNewBubbles();

    }, this.bubbleCreatedinterval)



    this.generateNewBubbles = () => {
        if(this.startGameIs){
            for(var j = 0; j < 1; j++){
                for(var i = 0; i < 4; i++){
                    
                    let img = document.createElement('img');
                    
                    img.classList.add('bubble__img');
                    img.classList.add('fadeInUp');
                    
                    img.setAttribute('src', `${this.imgHref}${this.randomedImages[i]}`)

                    if(this.randomedImages[i] == "C-5-4-right.svg"){
                        img.setAttribute('data-side', 'right')
                        
                    } else if(this.randomedImages[i] == "C-5-4-left.svg"){
                        img.setAttribute('data-side', 'left')
                        
                    } else if(this.randomedImages[i] == "C-5-4-up.svg"){
                        img.setAttribute('data-side', 'top')
                        
                    } else if(this.randomedImages[i] == "C-5-4-down.svg"){
                        img.setAttribute('data-side', 'bottom')
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

        this.randomedImages = result;

        return result;
    }
    

    this.removeAllBubble = () => {
        $('.bubble__img').remove();
    }
    
    this.afterClickBubble = (bubble) => {
        let bubbleAttr = bubble.getAttribute('data-side');
        let bubbleParentAttr = bubble.parentElement.getAttribute('data-answer');


        if(bubbleAttr == bubbleParentAttr){
            this.score++
            document.getElementById('numberOfScore').innerHTML = this.score;

            clearInterval(interval);

            this.getRandomBubblesLink(this.imgSide, 4);
            this.removeAllBubble();
            this.generateNewBubbles();


            interval = setInterval(() => {
                this.getRandomBubblesLink(this.imgSide, 4);
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