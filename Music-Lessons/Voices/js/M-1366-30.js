 createjs.Sound.on("fileload", handleLoadComplete);
 createjs.Sound.alternateExtensions = ["wav"];
 function handleLoadComplete(event) {
     createjs.Sound.play("sound");
 }

 function handleLoadstop(event) {
    createjs.Sound.stop("sound");
}



function m136630(){
    this.userAnswer1 = "";
    this.userAnswer2 = "";
    this.userAnswer3 = "";
    this.userAnswer4 = "";
    this.userAnswerArray1 = [];
    this.userAnswerArray2 = [];
    this.userAnswerArray3 = [];
    this.userAnswerArray4 = [];


    // variables
    const dots = document.querySelectorAll('.custom_radioButton_container');
    const elements = document.querySelectorAll('.music_play_box');
    const dot1 = document.querySelector('.custom_radiobutton_full_container1');
    const dot2 = document.querySelector('.custom_radiobutton_full_container2');
    const dot3 = document.querySelector('.custom_radiobutton_full_container3');
    const dot4 = document.querySelector('.custom_radiobutton_full_container4');
    let div1 = document.querySelector('.correct__div1').getAttribute('data-index');
    let div2 = document.querySelector('.correct__div2').getAttribute('data-index');
    let div3 = document.querySelector('.correct__div3').getAttribute('data-index');
    let div4 = document.querySelector('.correct__div4').getAttribute('data-index');
    const completeBtn = document.getElementById('completedGame');
    const resetBtn = document.getElementById('resetBtn');


    // listeners
    completeBtn.addEventListener('click', () => this.completGame());
    resetBtn.addEventListener('click', () => this.init());


    document.querySelectorAll('.car_game_img_number').forEach(w => {
        w.addEventListener('click', (e) => {
            handleLoadstop()
            createjs.Sound.registerSound({src:`${e.target.getAttribute('data-voice')}`, id:"sound"});
            handleLoadComplete()
        })
    })



    var myArray = [];

    for(var i = 0; i < elements.length; i++ ){
      myArray.push(elements[i])
    }

    var myArray2 = [];

    for(var i = 0; i < dots.length; i++ ){
      myArray2.push(dots[i])
    }

    this.init = () => {
        this.userAnswer1 = "";
        this.userAnswer2 = "";
        this.userAnswer3 = "";
        this.userAnswer4 = "";
        this.userAnswerArray1 = [];
        this.userAnswerArray2 = [];
        this.userAnswerArray3 = [];
        this.userAnswerArray4 = [];

        handleLoadstop()

        $('.custom_radioButton_container').removeClass('active')
        $('.custom_radioButton_container').removeClass('success')
        $('.custom_radioButton_container').removeClass('error')
    }


    this.removeDots = (parent) => {
        let items = parent.parentElement.parentElement.querySelectorAll('.custom_radioButton_container')

        $(items).removeClass('active')
        $(items).removeClass('correct')
        $(items).removeClass('error')
    }


    this.errorChecking = (correctAnswer, userAnswer, userAnswerArray) => {
        if(correctAnswer !== userAnswer) {
            let x = myArray2.filter(w => w.getAttribute('data-index') == userAnswer);
            userAnswerArray.push(x[0])
        }
    }


    dot1.querySelectorAll('.custom_radioButton_container').forEach(w => {
        w.addEventListener('click', e => {
            this.userAnswerArray1 = [];
            this.removeDots(e.target);
            w.classList.remove('correct');
            w.classList.add('active');

            if(w.getAttribute('data-answer') == "correct"){
                w.classList.add('correct')
            }

            this.userAnswer1 = e.target.parentElement.getAttribute('data-index');
            this.errorChecking(div1, this.userAnswer1, this.userAnswerArray1)
        })
    })

    dot2.querySelectorAll('.custom_radioButton_container').forEach(w => {
        w.addEventListener('click', e => {
            this.userAnswerArray2 = [];
            this.removeDots(e.target);
            w.classList.remove('correct');
            w.classList.add('active');

            if(w.getAttribute('data-answer') == "correct"){
                w.classList.add('correct')
            }

            this.userAnswer2 = e.target.parentElement.getAttribute('data-index');
            this.errorChecking(div2, this.userAnswer2, this.userAnswerArray2)
        })
    })



    dot3.querySelectorAll('.custom_radioButton_container').forEach(w => {
        w.addEventListener('click', e => {
            this.userAnswerArray3 = [];
            this.removeDots(e.target);
            w.classList.remove('correct');
            w.classList.add('active');

            if(w.getAttribute('data-answer') == "correct"){
                w.classList.add('correct')
            }

            this.userAnswer3 = e.target.parentElement.getAttribute('data-index');
            this.errorChecking(div3, this.userAnswer3, this.userAnswerArray3)
        })
    })



    dot4.querySelectorAll('.custom_radioButton_container').forEach(w => {
        w.addEventListener('click', e => {
            this.userAnswerArray4 = [];
            this.removeDots(e.target);
            w.classList.remove('correct');
            w.classList.add('active');

            if(w.getAttribute('data-answer') == "correct"){
                w.classList.add('correct')
            }


            this.userAnswer4 = e.target.parentElement.getAttribute('data-index');
            this.errorChecking(div4, this.userAnswer4, this.userAnswerArray4)
        })
    })




    this.completGame = () => {
        this.userAnswerArray1.forEach(w => {
            w.classList.remove('active')
            w.classList.add('error')
        })
        
        this.userAnswerArray2.forEach(w => {
            w.classList.remove('active')
            w.classList.add('error')
        })
        
        this.userAnswerArray3.forEach(w => {
            w.classList.remove('active')
            w.classList.add('error')
        })

        this.userAnswerArray4.forEach(w => {
            w.classList.remove('active')
            w.classList.add('error')
        })
        
        if(this.userAnswer1 == div1 && this.userAnswer2 == div2 && this.userAnswer3 == div3 && this.userAnswer4 == div4){
            location.href = 'M-1366-30-success.html'
        }
    }
}


const m136630game = new m136630();
