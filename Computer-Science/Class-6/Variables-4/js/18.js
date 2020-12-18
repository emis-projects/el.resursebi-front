function game () {
    this.startGameIs = true;
    this.score = 0;
    this.TIME_LIMIT = 60;
    this.timePassed = 0;
    this.timeLeft = this.TIME_LIMIT;
    this.timerInterval = null;
    this.randomedImages = null;
    this.answer = null;
    this.answerType = null;
    this.int = null;
    this.float = null;
    this.char = null;
    this.string = null;
    this.generatedQuestions = []


    let resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', () => this.init());

    
    $('.dj-2_6vh').click((e) => {
       if(this.startGameIs){
        this.completGame(e)
       }
    })

    document.addEventListener('DOMContentLoaded', () => {
        this.startTimer();
        document.getElementById('numberOfScore').innerHTML = this.score;

        this.generate6DigitNum(6)
        this.randomNumber();
        this.generateChar(1);
        this.generateString(6);

        this.generatedQuestions.push(this.string, this.char, this.float, this.int)
        
        this.randomNewValue(this.generatedQuestions, 1);

        document.getElementById('answer').innerText = this.answer;
    })
    

    let images = [
        "../../../img/gakvetilebi/Computer-Science/Class-5/What-is-program-3/cs-5-3-16-img-4.svg",
        "../../../img/gakvetilebi/Computer-Science/Class-5/What-is-program-3/cs-5-3-16-img-8.svg",
        "../../../img/gakvetilebi/Computer-Science/Class-5/What-is-program-3/cs-5-3-16-img-5.svg",
        "../../../img/gakvetilebi/Computer-Science/Class-5/What-is-program-3/cs-5-3-16-img-7.svg",
        "../../../img/gakvetilebi/Computer-Science/Class-5/What-is-program-3/Group 46465.svg",
        "../../../img/gakvetilebi/Computer-Science/Class-5/What-is-program-3/Group 46464.svg",
        "../../../img/gakvetilebi/Computer-Science/Class-5/What-is-program-3/cs-5-3-17-img-2.svg",
        "../../../img/gakvetilebi/Computer-Science/Class-5/What-is-program-3/cs-5-3-17-img-3.svg",
        "../../../img/gakvetilebi/Computer-Science/Class-5/What-is-program-3/cs-5-3-17-img-4.svg",
    ]


    this.init = (e) =>{
        this.onTimesUp()
        this.startGameIs = true;
        this.score = 0;
        document.getElementById('numberOfScore').innerHTML = this.score;
        this.TIME_LIMIT = 60;
        this.timePassed = 0;
        this.timeLeft = this.TIME_LIMIT;
        this.timerInterval = null;
        this.randomedImages = null;
        this.answer = null;
        this.startTimer();
        
        this.generate6DigitNum(6)
        this.randomNumber();
        this.generateChar(1);
        this.generateString(6);

        this.generatedQuestions.push(this.string, this.char, this.float, this.int)
        
        this.randomNewValue(this.generatedQuestions, 1);

        document.getElementById('answer').innerText = this.answer;
    }


    this.generateChar = length => {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzაბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ!@#$%^&*';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        this.char = result;
        
        return result;``
     }


    this.generateString = length => {
        var result           = '';
        var characters       = 'abcdefghijklmnopqrstuvwxyzაბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ!@#$%^&*';

        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        this.string = result;
        
        return result;``
     }


    // generate 6 digit num
    this.generate6DigitNum = (n) => {
        var add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.   

        if ( n > max ) {
                return generate(max) + generate(n - max);
        }

        max        = Math.pow(10, n+add);
        var min    = max/10; // Math.pow(10, n) basically
        var number = Math.floor( Math.random() * (max - min + 1) ) + min;

        this.int = parseInt(("" + number).substring(add));

        return ("" + number).substring(add); 
    }


    // generate float number 
    this.randomNumber = (min, max) => {  
      var masRandom1 = Math.floor((Math.random() * 5) + 1);//რიცხვები 1-დან 5-ის ჩათვლით
      var masRandom2 = Math.floor(Math.random() * (999999 - 100000 + 1)+100000);// 6-ციფრიანი ნიშნების დიაპაზონი
      var masRandom3 = Math.pow(10,masRandom1)// 10-ის რანდომად ხარისხში აყვანა 1-დან 5-ის ჩათვლით
      var masRandom4 = Math.floor((Math.random() * 9)+1);//რიცხვები 1-დან 9-ის ჩათვლით


      //როცა ნულით ბოლოვდება რანდომად დავამატოთ 1-9 ჩათვლით რიცხვი
      if(masRandom2 % 10 == 0){
         masRandom2 += masRandom4
      }
      
      var masRandom = masRandom2/masRandom3;//6-ციფრიან რიცხვს ვყოფთ 10-ის რანდომ ხარისხზე, ათწილადის მისაღებად

      this.float = masRandom
    }


    this.completGame = (e) => {
        if(e.target.getAttribute('data-type') == this.answerType){
            this.score++
            document.getElementById('numberOfScore').innerHTML = this.score;

            this.generatedQuestions = [];

            this.generate6DigitNum(6)
            this.randomNumber();
            this.generateChar(1);
            this.generateString(6);

            this.generatedQuestions.push(this.string, this.char, this.float, this.int)

            this.randomNewValue(this.generatedQuestions, 1)
    
            document.getElementById('answer').innerText = this.answer

        } else {
            this.generatedQuestions = [];
            this.generate6DigitNum(6)
            this.randomNumber();
            this.generateChar(1);
            this.generateString(6);
            if(this.score == 0) {
                this.score = 0;
                
            } else {
                this.score--
            }
            
            document.getElementById('numberOfScore').innerHTML = this.score;
            this.generatedQuestions.push(this.string, this.char, this.float, this.int)
            this.randomNewValue(this.generatedQuestions, 1);
            document.getElementById('answer').innerText = this.answer
        }
    }



    this.randomNewValue = (arr, n) => {
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

        this.answer = result[0];

        if(typeof this.answer === "string" && this.answer.length > 1){
            this.answerType = "string"
            
        } else if(typeof this.answer === "string" && this.answer.length == 1){
            this.answerType = "char"

        } else if(typeof this.answer === "number" && this.answer.toString().length == 6){
            this.answerType = "number"
            
        } else if(typeof this.answer === "number" && this.answer.toString().length > 6){
            this.answerType = "double"

        }

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



