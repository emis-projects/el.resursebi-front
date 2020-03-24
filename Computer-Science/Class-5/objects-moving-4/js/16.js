function game(){
    this.score = 0;
    this.startGame = false;
    this.TIME_LIMIT = 30;
    this.timePassed = 0;
    this.timeLeft = this.TIME_LIMIT;
    this.timerInterval = null;
    this.imgHref = "../../../img/gakvetilebi/Computer-Science/Class-5/objects-moving-4/";
    this.imgSide = ["C-5-4-right.svg", "C-5-4-left.svg", "C-5-4-up.svg", "C-5-4-down.svg"];
    this.randomedImages = [];


    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');
    let items = document.querySelectorAll('.direcion-pointer_box-image');
    document.getElementById('numberOfScore').innerHTML = this.score;
    
    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
    document.addEventListener('DOMContentLoaded', () => {
        this.startGame()
    })
    
    

    this.init = () => {
        this.startGame = true;
        this.score = 0;
        document.getElementById('numberOfScore').innerHTML = this.score;
        this.TIME_LIMIT = 30;
        this.timePassed = 0;
        this.timerInterval = null;
        this.startTimer();
        this.removeAllBubble()
        this.getRandomBubblesLink(this.imgSide, 4);
        this.generateNewBubbles()
        document.getElementById('clock').setAttribute('src', '../../../img/gakvetilebi/Computer-Science/Class-5/objects-moving-4/C-5-4-Clock.svg')
        document.getElementById('time').setAttribute('style', 'color: #937dce')

    }


    $(document).ready(() => {
        $('.bubble__img').click(e => {
            if(this.startGame){
                this.afterClickBubble(e.target)
            }
        })
    });
    

    this.generateNewBubbles = () => {
        for(var j = 0; j < 1; j++){
            for(var i = 0; i < 4; i++){
                
                let img = document.createElement('img');
                
                img.classList.add('bubble__img');
                img.classList.add('fadeInUp');
                img.setAttribute('style', 'animation-duration: 10s');
                
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
    }
    

    this.removeAllBubble = () => {
        $('.bubble__img').remove()
    }
    
    
    this.startGame = () => {
        this.startTimer();
        this.getRandomBubblesLink(this.imgSide, 4);
        this.generateNewBubbles()
    }
    
    
    this.afterClickBubble = (bubble) => {
        let bubbleAttr = bubble.getAttribute('data-side');
        let bubbleParentAttr = bubble.parentElement.getAttribute('data-answer');

        if(bubbleAttr == bubbleParentAttr){
            this.score++
            document.getElementById('numberOfScore').innerHTML = this.score;
            this.removeAllBubble();
            this.generateNewBubbles();
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


    this.onTimesUp = () => {
        clearInterval(timerInterval);
    }
      
    this.startTimer = () => {
        this.startGame = true;

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
                this.startGame = false;
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