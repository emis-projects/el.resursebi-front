function m13660304(){
    this.answerArray = [];
    this.index = 0;
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
    let carQuestions = document.querySelectorAll('.person_game_container');
    const completeBtn = document.getElementById('completedGame');
    const resetBtn = document.getElementById('resetBtn');


    // listeners
    completeBtn.addEventListener('click', () => this.completGame());
    resetBtn.addEventListener('click', () => this.init());
    


    var myArray = [];

    for(var i = 0; i < carQuestions.length; i++ ){
      myArray.push(carQuestions[i])
    }


    listenBtn.addEventListener('click', e => {
        handleLoadstop()
        createjs.Sound.registerSound({src:`${e.target.getAttribute('data-voice')}`, id:"sound"});
        handleLoadComplete()
    })


    this.init = () => {
        this.error = true;
        this.answerArray = [];
        this.index = 0;

        // stop voice 
        createjs.Sound.stop("sound");
        
        $('.person_game_container').removeClass('itisnotcorrect')
        $('.car_game_white_circle').removeClass('disabled')
        $('.person_game_container').removeClass('error')
        $('.carImgNumber').remove()
	}


    myArray.forEach(w => {   
        w.addEventListener('click', e => {
            if(w.classList.contains('disabled') == false){
                this.index++;
                this.error = false;

                let img = document.createElement('img');
                let imgSrc = '../../../img/gakvetilebi/musika/MV-1366-14-'
                img.setAttribute('src', `${imgSrc}${this.index}.svg`);
                img.setAttribute('data-index', this.index);
                img.classList.add('carImgNumber');

                if(e.target.classList.contains('disabled') == false){
                    w.querySelector('.car_game_white_circle').append(img)

                    if(w.getAttribute('data-index') !== w.querySelector('.carImgNumber').getAttribute('data-index')){
                        w.classList.add('itisnotcorrect')
                        w.querySelector('.car_game_white_circle').setAttribute('style', "box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161)")
                    }
                }
                
                this.answerArray.push(parseInt(w.getAttribute('data-index')))
                e.target.classList.add('disabled');
            }
        })
    })



    this.checkIfIsError = () => {
        document.querySelectorAll('.person_game_container').forEach(w => {            
            if(w.classList.contains('itisnotcorrect')){
                w.classList.add('error')

            } else if(w.classList.contains('itisnotcorrect') == false && w.classList.contains('disabled') == false){
                w.classList.add('error')
            }
        })
    }


    this.completGame = () => {
        if(this.answerArray.length !== 0){
			let lastElement = this.answerArray.slice(-1)[0];
			let lastlastElement = this.answerArray.length - 1;
            let firstElement = this.answerArray[0];

			if(lastElement - lastlastElement !== 1 ||  lastlastElement - firstElement !== 1){
				this.error = true;
                this.checkIfIsError()
            } else {
                let loc = location.pathname;
                if(loc == "/Music-Lessons/Walk-in-the-city-1/games/M-1366-03-4.html" || loc == 'el.resursebi-front/Music-Lessons/Walk-in-the-city-1/games/M-1366-03-4.html') {
                    location.href = 'M-1366-03-4-success.html'
                    
                } else if (loc == "/Music-Lessons/Walk-in-the-city-1/games/M-1366-03-17.html" || loc == 'el.resursebi-front/Music-Lessons/Walk-in-the-city-1/games/M-1366-03-17.html') {
                    location.href = 'M-1366-03-17-success.html'

                } else if (loc == "/Music-Lessons/Walk-in-the-city-1/games/M-1366-03-36.html" || loc == 'el.resursebi-front/Music-Lessons/Walk-in-the-city-1/games/M-1366-03-36.html') {
                    location.href = 'M-1366-03-36-success.html'
                }

            }
            
        } else {
            $('.person_game_container').addClass('error')
        }
    }
}


const m13660304game = new m13660304()