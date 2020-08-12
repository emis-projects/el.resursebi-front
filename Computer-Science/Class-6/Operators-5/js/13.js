function game () {
    this.startGameIs = true;
    this.score = 0;
    this.TIME_LIMIT = 60;
    this.timePassed = 0;
    this.timeLeft = this.TIME_LIMIT;
    this.timerInterval = null;
    this.answer = [];
    this.selectedAnswer = null;
    this.typesArray = ['or', 'and'];
    this.greaterAndless = ['>', '<', '='];
    this.error1 = true;
    this.error2 = true;
    this.success = false;


    let resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', () => this.init());


    document.addEventListener('DOMContentLoaded', () => {
        this.startTimer();
        document.getElementById('numberOfScore').innerHTML = this.score;

        document.querySelectorAll('.number').forEach(w => {
            w.innerText = this.randomIntFromInterval(1, 100)
        })

        document.querySelector('.orAnd').innerText = this.randomNewNumbers(this.typesArray, 1)

        document.querySelectorAll('.metoba_nakleboba').forEach(w => {
            w.innerText = this.randomNewNumbers(this.greaterAndless, 1)
        })
    })



    this.init = (e) =>{
        this.onTimesUp()
        this.startGameIs = true;
        this.score = 0;
        document.getElementById('numberOfScore').innerHTML = this.score;
        this.TIME_LIMIT = 60;
        this.timePassed = 0;
        this.timeLeft = this.TIME_LIMIT;
        this.timerInterval = null;
        this.startTimer();
        this.answer = [];
        this.selectedAnswer = null;

        document.querySelectorAll('.number').forEach(w => {
            w.innerText = this.randomIntFromInterval(1, 100)
        })

        document.querySelector('.orAnd').innerText = this.randomNewNumbers(this.typesArray, 1)

        document.querySelectorAll('.metoba_nakleboba').forEach(w => {
            w.innerText = this.randomNewNumbers(this.greaterAndless, 1)
        })

        $('.radio').removeClass('active')

        this.error1 = true;
        this.error2 = true;
        this.success = false;
    }




    this.completGame = (e) => {
        let selectedValueOrAnd = document.querySelector('.orAnd').innerText
        let firstNumber = document.querySelectorAll('.number');
        let circle = document.querySelectorAll('.circle');


        if(selectedValueOrAnd == "or"){
            if(circle[0].innerText == ">"){
                if(parseInt(firstNumber[0].innerText) > parseInt(firstNumber[1].innerText)){
                    this.error1 = false

                } else {
                    this.error1 = true;
                }

            } else if(circle[0].innerText == "<") {
                if(parseInt(firstNumber[0].innerText) < parseInt(firstNumber[1].innerText)){
                    this.error1 = false

                } else {
                    this.error1 = true;
                }

            } else if(circle[0].innerText == "=") {
                if(parseInt(firstNumber[0].innerText) == parseInt(firstNumber[1].innerText)){
                    this.error1 = false

                } else {
                    this.error1 = true;
                }
            }


            if(circle[1].innerText == ">"){
                if(parseInt(firstNumber[2].innerText) > parseInt(firstNumber[3].innerText)){
                    this.error2 = false

                } else {
                    this.error2 = true;
                }

            } else if(circle[1].innerText == "<") {
                if(parseInt(firstNumber[2].innerText) < parseInt(firstNumber[3].innerText)){
                    this.error2 = false

                } else {
                    this.error2 = true;
                }

            } else if(circle[1].innerText == "=") {
                if(parseInt(firstNumber[2].innerText) == parseInt(firstNumber[3].innerText)){
                    this.error2 = false

                } else {
                    this.error2 = true;
                }
            }




            if(!this.error1 || !this.error2){
                if(this.selectedAnswer == 'true'){
                    this.success = true;
                    this.score++;
                    document.getElementById('numberOfScore').innerHTML = this.score;

                    document.getElementById('numberOfScore').innerHTML = this.score;

                    document.querySelectorAll('.number').forEach(w => {
                        w.innerText = this.randomIntFromInterval(1, 100)
                    })

                    document.querySelector('.orAnd').innerText = this.randomNewNumbers(this.typesArray, 1)

                    document.querySelectorAll('.metoba_nakleboba').forEach(w => {
                        w.innerText = this.randomNewNumbers(this.greaterAndless, 1)
                    })

                    this.error1 = true;
                    this.error2 = true;

                    document.querySelectorAll('.radio').forEach(w => {
                        if(w.getAttribute('data-answer') == this.selectedAnswer){
                            w.classList.add('success')
                        }
                    })

                    setTimeout(() => {
                        $('.radio').removeClass('success')
                        $('.radio').removeClass('error')
                    }, 500)


                } else {
                    document.getElementById('numberOfScore').innerHTML = this.score;

                    document.querySelectorAll('.number').forEach(w => {
                        w.innerText = this.randomIntFromInterval(1, 100)
                    })

                    document.querySelector('.orAnd').innerText = this.randomNewNumbers(this.typesArray, 1)

                    document.querySelectorAll('.metoba_nakleboba').forEach(w => {
                        w.innerText = this.randomNewNumbers(this.greaterAndless, 1)
                    })

                    this.error1 = true;
                    this.error2 = true;

                    document.querySelectorAll('.radio').forEach(w => {
                        if(w.getAttribute('data-answer') == this.selectedAnswer){
                            w.classList.add('error')
                        }
                    })

                    setTimeout(() => {
                        $('.radio').removeClass('success')
                        $('.radio').removeClass('error')
                    }, 500)
                }

            } else if(this.error1 && this.error2) {
                if(this.selectedAnswer == 'false'){
                    this.success = true;
                    this.score++;
                    document.getElementById('numberOfScore').innerHTML = this.score;

                    document.getElementById('numberOfScore').innerHTML = this.score;

                    document.querySelectorAll('.number').forEach(w => {
                        w.innerText = this.randomIntFromInterval(1, 100)
                    })

                    document.querySelector('.orAnd').innerText = this.randomNewNumbers(this.typesArray, 1)

                    document.querySelectorAll('.metoba_nakleboba').forEach(w => {
                        w.innerText = this.randomNewNumbers(this.greaterAndless, 1)
                    })

                    this.error1 = true;
                    this.error2 = true;

                    document.querySelectorAll('.radio').forEach(w => {
                        if(w.getAttribute('data-answer') == this.selectedAnswer){
                            w.classList.add('success')
                        }
                    })

                    setTimeout(() => {
                        $('.radio').removeClass('success')
                        $('.radio').removeClass('error')
                    }, 500)



                } else if(this.selectedAnswer == 'true') {
                    document.getElementById('numberOfScore').innerHTML = this.score;

                    document.querySelectorAll('.number').forEach(w => {
                        w.innerText = this.randomIntFromInterval(1, 100)
                    })

                    document.querySelector('.orAnd').innerText = this.randomNewNumbers(this.typesArray, 1)

                    document.querySelectorAll('.metoba_nakleboba').forEach(w => {
                        w.innerText = this.randomNewNumbers(this.greaterAndless, 1)
                    })

                    this.error1 = true;
                    this.error2 = true;

                    document.querySelectorAll('.radio').forEach(w => {
                        if(w.getAttribute('data-answer') == this.selectedAnswer){
                            w.classList.add('error')
                        }
                    })

                    setTimeout(() => {
                        $('.radio').removeClass('success')
                        $('.radio').removeClass('error')
                    }, 500)
                }
            }


        } else if(selectedValueOrAnd == 'and') {
            if(circle[0].innerText == ">"){
                if(parseInt(firstNumber[0].innerText) > parseInt(firstNumber[1].innerText)){
                    this.error1 = false

                } else {
                    this.error1 = true;
                }

            } else if(circle[0].innerText == "<") {
                if(parseInt(firstNumber[0].innerText) < parseInt(firstNumber[1].innerText)){
                    this.error1 = false

                } else {
                    this.error1 = true;
                }

            } else if(circle[0].innerText == "=") {
                if(parseInt(firstNumber[0].innerText) == parseInt(firstNumber[1].innerText)){
                    this.error1 = false

                } else {
                    this.error1 = true;
                }
            }


            if(circle[1].innerText == ">"){
                if(parseInt(firstNumber[2].innerText) > parseInt(firstNumber[3].innerText)){
                    this.error2 = false

                } else {
                    this.error2 = true;
                }

            } else if(circle[1].innerText == "<") {
                if(parseInt(firstNumber[2].innerText) < parseInt(firstNumber[3].innerText)){
                    this.error2 = false

                } else {
                    this.error2 = true;
                }

            } else if(circle[1].innerText == "=") {
                if(parseInt(firstNumber[2].innerText) == parseInt(firstNumber[3].innerText)){
                    this.error2 = false

                } else {
                    this.error2 = true;
                }
            }


            if(!this.error1 && !this.error2 && this.selectedAnswer == 'true'){
                this.success = true;
                this.score++;
                document.getElementById('numberOfScore').innerHTML = this.score;

                document.querySelectorAll('.number').forEach(w => {
                    w.innerText = this.randomIntFromInterval(1, 100)
                })

                document.querySelector('.orAnd').innerText = this.randomNewNumbers(this.typesArray, 1)

                document.querySelectorAll('.metoba_nakleboba').forEach(w => {
                    w.innerText = this.randomNewNumbers(this.greaterAndless, 1)
                })

                this.error1 = true;
                this.error2 = true;

                document.querySelectorAll('.radio').forEach(w => {
                    if(w.getAttribute('data-answer') == this.selectedAnswer){
                        w.classList.add('success')
                    }
                })

                setTimeout(() => {
                    $('.radio').removeClass('success')
                    $('.radio').removeClass('error')
                }, 500)

            } else if((this.error1 || this.error2) && this.selectedAnswer == 'false') {
                this.success = true;
                this.score++;

                document.getElementById('numberOfScore').innerHTML = this.score;

                document.querySelectorAll('.number').forEach(w => {
                    w.innerText = this.randomIntFromInterval(1, 100)
                })

                document.querySelector('.orAnd').innerText = this.randomNewNumbers(this.typesArray, 1)

                document.querySelectorAll('.metoba_nakleboba').forEach(w => {
                    w.innerText = this.randomNewNumbers(this.greaterAndless, 1)
                })

                this.error1 = true;
                this.error2 = true;

                document.querySelectorAll('.radio').forEach(w => {
                    if(w.getAttribute('data-answer') == this.selectedAnswer){
                        w.classList.add('success')
                    }
                })

                setTimeout(() => {
                    $('.radio').removeClass('success')
                    $('.radio').removeClass('error')
                }, 500)

            } else {
                document.getElementById('numberOfScore').innerHTML = this.score;

                document.querySelectorAll('.number').forEach(w => {
                    w.innerText = this.randomIntFromInterval(1, 100)
                })

                document.querySelector('.orAnd').innerText = this.randomNewNumbers(this.typesArray, 1)

                document.querySelectorAll('.metoba_nakleboba').forEach(w => {
                    w.innerText = this.randomNewNumbers(this.greaterAndless, 1)
                })

                this.error1 = true;
                this.error2 = true;

                document.querySelectorAll('.radio').forEach(w => {
                    if(w.getAttribute('data-answer') == this.selectedAnswer){
                        w.classList.add('error')
                    }
                })

                setTimeout(() => {
                    $('.radio').removeClass('success')
                    $('.radio').removeClass('error')
                }, 500)
            }
        }
    }



    document.querySelectorAll('.radio').forEach(w => {
        w.addEventListener('click', () => {
            $('.select').removeClass('success');
            $('.select').removeClass('error');
            let answer = w.getAttribute('data-answer');
            this.selectedAnswer = answer;
            if(this.timePassed !== 60){
                this.completGame()
            }
        })
    })


    this.randomIntFromInterval = (min, max) => { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    this.randomNewNumbers = (arr, n) => {
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

        this.answer.push(result[0]);

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
