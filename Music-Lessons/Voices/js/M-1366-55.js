function m136655(){
    this.answerIndex = 0;
    this.answersArray = '';
    this.error = true;


    createjs.Sound.on("fileload", handleLoadComplete);
    createjs.Sound.alternateExtensions = ["wav"];

    function handleLoadComplete(event) {
        createjs.Sound.play("sound");
    }

    function handleLoadstop(event) {
        createjs.Sound.stop("sound");
    }


    // variables
    let listenBtn = document.querySelector('.listen_btn');
    let Questions = document.querySelectorAll('.car_game_container');
    const completeBtn = document.getElementById('completedGame');
    let correctAnswer = document.getElementById('trumpetQuestion');
    const resetBtn = document.getElementById('resetBtn');


    // listeners
    completeBtn.addEventListener('click', () => this.completGame());
    resetBtn.addEventListener('click', () => this.init());
    

    listenBtn.addEventListener('click', e => {
        handleLoadstop()
        createjs.Sound.registerSound({src:`${e.target.getAttribute('data-voice')}`, id:"sound"});
        handleLoadComplete()
    })


    var myArray = [];

    for(var i = 0; i < Questions.length; i++ ){
      myArray.push(Questions[i])
    }


    this.init = () => {
        this.answerIndex = 0;
        this.answersArray = '';
        this.error = true;

        $('.car_game_white_circle').removeClass('error')
        $('.car_game_container').removeClass('disabled')
        $('.carImgNumber').remove()
    }

    myArray.forEach(w => {   
        w.addEventListener('click', e => {
            this.answerIndex++;
            this.error = false;

            let img = document.createElement('img');
            let imgSrc = '../../../img/gakvetilebi/musika/MV-1366-14-'
            img.setAttribute('src', `${imgSrc}${this.answerIndex}.svg`);
            img.classList.add('carImgNumber');

            if(e.target.classList.contains('disabled') == false){
                w.querySelector('.car_game_white_circle').append(img)
            }

            e.target.classList.add('disabled');

            let value = this.answersArray.concat(w.getAttribute('data-index'))

            this.answersArray = value
        })
    })


    this.checkWchitPageIs = () => {
        let myLocation = location.pathname;

        if(myLocation == "/Music-Lessons/Voices/Games/M-1366-55.html" || myLocation == "/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-55.html"){
            location.href = "M-1366-55-success.html"
            
        } else if (myLocation == "/Music-Lessons/Voices/Games/M-1366-55-2.html" || myLocation == "/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-55-2.html"){
            location.href = "M-1366-55-2-success.html"

        } else if (myLocation == "/Music-Lessons/Voices/Games/M-1366-55-3.html" || myLocation == "/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-55-3.html"){
            location.href = "M-1366-55-3-success.html"
        } 
    }


    this.checkGameAnswers = () => {
        if(correctAnswer.getAttribute('data-correct') == this.answersArray){
            this.error = false;
            this.checkWchitPageIs()

        } else {
            this.error = true;
            $('.car_game_white_circle').addClass('error')
        }
    }

    
    this.completGame = () => {
        this.checkGameAnswers()
    }
}

const m136655Game = new m136655()