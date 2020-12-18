function game () {
    this.startGameIs = true;
    this.score = 0;
    this.TIME_LIMIT = 30;
    this.timePassed = 0;
    this.timeLeft = this.TIME_LIMIT;
    this.timerInterval = null;
    this.randomedImages = null;
    this.answer = null;


    let resetBtn = document.getElementById('resetBtn');

    resetBtn.addEventListener('click', () => this.init());
    $('.completGame').click((e) => {
       if(this.startGameIs){
        this.completGame(e)
       }
    })

    document.addEventListener('DOMContentLoaded', () => {
        this.startTimer();
        document.getElementById('numberOfScore').innerHTML = this.score;
        this.randomNewImage(images, 1);
        this.correctAndIncorrect();
        let img = document.createElement('img');
        img.setAttribute('src', this.randomedImages)

        document.querySelector('#gameimgSection').appendChild(img)
    })
    

    let images = [
        "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/1.svg",
        "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/3.svg",
        "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/5.svg",
        "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/7.svg",
        "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/9.svg",
        "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/11.svg",
        "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/2.svg",
        "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/13.svg",
        "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/4.svg",
        "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/15.svg",
        "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/6.svg",
        "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/8.svg",
        "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/10.svg",
        "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/12.svg",
        "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/14.svg"
    ]


    this.init = (e) =>{
        this.startGameIs = true;
        this.score = 0;
        this.TIME_LIMIT = 30;
        this.timePassed = 0;
        this.timeLeft = this.TIME_LIMIT;
        this.timerInterval = null;
        this.randomedImages = null;
        this.answer = null;
        this.startTimer();
        document.querySelector('#gameimgSection').innerHTML = "";
        document.getElementById('numberOfScore').innerHTML = this.score;
        this.randomNewImage(images, 1);
        this.correctAndIncorrect();
        let img = document.createElement('img');
        img.setAttribute('src', this.randomedImages)

        document.querySelector('#gameimgSection').appendChild(img)
    }



    this.completGame = (e) => {
        if(e.target.getAttribute('data-answer') == this.answer){
            document.querySelector('#gameimgSection').innerHTML = "";
            this.score++
            document.getElementById('numberOfScore').innerHTML = this.score;
            this.randomNewImage(images, 1)
            this.correctAndIncorrect();
            let img = document.createElement('img');
            img.setAttribute('src', this.randomedImages)
    
            document.querySelector('#gameimgSection').appendChild(img)

        } else {
            document.querySelector('#gameimgSection').innerHTML = "";
            this.randomNewImage(images, 1);
            if(this.score == 0) {
                this.score = 0;
                
            } else {
                this.score--
            }
            
            document.getElementById('numberOfScore').innerHTML = this.score;
            this.correctAndIncorrect();
            let img = document.createElement('img');
            img.setAttribute('src', this.randomedImages)

            document.querySelector('#gameimgSection').appendChild(img)
        }
    }


    this.correctAndIncorrect = () => {
        if(this.randomedImages == "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/1.svg"){
            this.answer = "incorrect"

        } else if(this.randomedImages == "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/2.svg"){
            this.answer = "incorrect"

        } else if(this.randomedImages == "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/3.svg"){
            this.answer = "incorrect"

        } else if(this.randomedImages == "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/4.svg"){
            this.answer = "incorrect"

        } else if(this.randomedImages == "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/5.svg"){
            this.answer = "incorrect"

        } else if(this.randomedImages == "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/6.svg"){
            this.answer = "incorrect"

        } else if(this.randomedImages == "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/7.svg"){
            this.answer = "incorrect"

        } else if(this.randomedImages == "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/15.svg"){
            this.answer = "incorrect"

        } else if(this.randomedImages == "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/8.svg"){
            this.answer = "correct"

        } else if(this.randomedImages == "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/9.svg"){
            this.answer = "correct"

        } else if(this.randomedImages == "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/10.svg"){
            this.answer = "correct"

        } else if(this.randomedImages == "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/11.svg"){
            this.answer = "correct"

        } else if(this.randomedImages == "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/12.svg"){
            this.answer = "correct"

        } else if(this.randomedImages == "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/13.svg"){
            this.answer = "correct"

        } else if(this.randomedImages == "../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/games/14.svg"){
            this.answer = "correct"
        }

        return this.answer
    }


    this.randomNewImage = (arr, n) => {
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