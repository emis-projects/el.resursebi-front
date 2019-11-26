function m136656(){
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

        // stop voice 
        createjs.Sound.stop("sound");
        
        $('.car_game_container').attr('data-correct', 'incorrect');
        $('.car_game_container').removeClass('error')
        $('.car_game_white_circle').removeClass('error')
        $('.car_game_white_circle').removeClass('disabled')
        $('.car_game_white_circle').removeClass('selected')
    }


    myArray.forEach(w => {   
        w.addEventListener('click', e => {
            if(e.target.classList.contains('error') == false){
                $('.car_game_white_circle').removeClass('selected');
                $('.car_game_container').attr('data-correct', 'incorrect');
    
                e.target.querySelector('.car_game_white_circle').classList.add('selected')
    
                if(e.target.getAttribute('data-correct') == 'incorrect' && e.target.classList.contains('correct--answer')){
                    e.target.setAttribute('data-correct', 'correct')
                    this.error = false
                }
            }
        })
    })


    this.checkWchitPageIs = () => {
        let myLocation = location.pathname;

        if(myLocation == "/Music-Lessons/Voices/Games/M-1366-56.html" || myLocation == "/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-56.html"){
            location.href = "M-1366-56-success.html"
            
        } else if (myLocation == "/Music-Lessons/Voices/Games/M-1366-56-2.html" || myLocation == "/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-56-2.html"){
            location.href = "M-1366-56-2-success.html"

        } else if (myLocation == "/Music-Lessons/Voices/Games/M-1366-56-3.html" || myLocation == "/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-56-3.html"){
            location.href = "M-1366-56-3-success.html"
        } 
    }


    this.checkGameAnswers = (e) => {
       if(this.error == true){
            $(Questions).addClass('error')
       } else {
            this.checkWchitPageIs()
       }
    }

    
    this.completGame() {
        this.checkGameAnswers()
    }
}

const m136656Game = new m136656()