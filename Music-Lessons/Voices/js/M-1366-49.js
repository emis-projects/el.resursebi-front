function m136649(){
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
    let Questions = document.querySelectorAll('.trumpet_game__round_col');
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

        // stop voice 
        createjs.Sound.stop("sound");
        
        $('.car_game_white_circle').removeClass('error')
        $('.car_game_white_circle').removeClass('selected')
    }

    myArray.forEach(w => {   
        w.addEventListener('click', e => {
            handleLoadstop();
            createjs.Sound.registerSound({src:`${e.target.getAttribute('data-voice')}`, id:"sound"});
            handleLoadComplete();

            w.querySelector('.car_game_white_circle').classList.add('selected');

            let value = this.answersArray.concat(w.getAttribute('data-index'))

            this.answersArray = value
        })
    })

    this.checkWchitPageIs = () => {
        let myLocation = location.pathname;

        if(myLocation == "/Music-Lessons/Voices/Games/M-1366-49.html" || myLocation == "/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-49.html"){
            location.href = "M-1366-49-success.html"
            
        } else if (myLocation == "/Music-Lessons/Voices/Games/M-1366-49-2.html" || myLocation == "/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-49-2.html"){
            location.href = "M-1366-49-2-success.html"

        } else if (myLocation == "/Music-Lessons/Voices/Games/M-1366-49-3.html" || myLocation == "/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-49-3.html"){
            location.href = "M-1366-49-3-success.html"

        } else if (myLocation == "/Music-Lessons/Voices/Games/M-1366-50.html" || myLocation == "/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-50.html"){
            location.href = "M-1366-50-success.html"

        } else if (myLocation == "/Music-Lessons/Voices/Games/M-1366-50-2.html" || myLocation == "/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-50-2.html"){
            location.href = "M-1366-50-2-success.html"

        } else if (myLocation == "/Music-Lessons/Voices/Games/M-1366-50-3.html" || myLocation == "/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-50-3.html"){
            location.href = "M-1366-50-3-success.html"

        } else if (myLocation == "/Music-Lessons/Voices/Games/M-1366-53.html" || myLocation == "/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-50-3.html"){
            location.href = "M-1366-53-success.html"

        } else if (myLocation == "/Music-Lessons/Voices/Games/M-1366-53-2.html" || myLocation == "/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-53-2.html"){
            location.href = "M-1366-53-2-success.html"

        } else if (myLocation == "/Music-Lessons/Voices/Games/M-1366-53-3.html" || myLocation == "/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-53-3.html"){
            location.href = "M-1366-53-3-success.html"
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


const m136649Game = new m136649();