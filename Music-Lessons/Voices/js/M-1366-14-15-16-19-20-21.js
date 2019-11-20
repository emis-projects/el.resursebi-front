
function voiceGames(){
    this.error = true;
    this.audio = null;
    this.imgSrc = '';
    this.defaultanswer = true;


    // variables
    const elements = document.querySelectorAll('.voice__question__element');
    const completeBtn = document.getElementById('completedGame');''
    const resetBtn = document.getElementById('resetBtn');


    // listners
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('correctAnswer').setAttribute('data-voice', this.audio)
    });

    completeBtn.addEventListener('click', () => this.completGame());
    resetBtn.addEventListener('click', () => this.init());


    var audioUrls = [
        '../game-voices/M-1366-14.wav',
        '../game-voices/M-1366-15.wav',
        '../game-voices/M-1366-16.wav',
        '../game-voices/M-1366-19.wav',
        '../game-voices/M-1366-20.wav',
        '../game-voices/M-1366-21.wav'
    ]

    var myArray = [];

    for(var i = 0; i < elements.length; i++ ){
      myArray.push(elements[i])
    }



    createjs.Sound.on("fileload", handleLoadComplete);
    createjs.Sound.alternateExtensions = ["wav"];
    function handleLoadComplete(event) {
        createjs.Sound.play("sound");
    }
   
    function handleLoadstop(event) {
       createjs.Sound.stop("sound");
   }


   document.querySelectorAll('.listen_btn').forEach(w => {
    w.addEventListener('click', (e) => {
        handleLoadstop()
        createjs.Sound.registerSound({src:`${e.target.getAttribute('data-voice')}`, id:"sound"});
        handleLoadComplete()
    })
})



    // document.querySelector('.listen_btn').addEventListener('click', e => {
    //     handleLoadstop()
    //     createjs.Sound.registerSound({src:`${e.target.getAttribute('data-voice')}`, id:"sound"});
    //     handleLoadComplete()
    // })


    if(location.pathname == "/Music-Lessons/Voices/Games/M-1366-14.html"){
        this.imgSrc = "../../../img/gakvetilebi/musika/MV-1366-14-1.svg"

    } else if(location.pathname == '/Music-Lessons/Voices/Games/M-1366-15.html'){
        this.imgSrc = "../../../img/gakvetilebi/musika/MV-1366-14-2.svg"

    } else if(location.pathname == "/Music-Lessons/Voices/Games/M-1366-16.html"){
        this.imgSrc = "../../../img/gakvetilebi/musika/MV-1366-14-3.svg"
        
    } else if(location.pathname == "/Music-Lessons/Voices/Games/M-1366-19.html"){
        this.imgSrc = "../../../img/gakvetilebi/musika/MV-1366-14-1.svg"

    } else if(location.pathname == "/Music-Lessons/Voices/Games/M-1366-20.html"){
        this.imgSrc = "../../../img/gakvetilebi/musika/MV-1366-14-2.svg"

    } else if(location.pathname == "/Music-Lessons/Voices/Games/M-1366-21.html"){
        this.imgSrc = "../../../img/gakvetilebi/musika/MV-1366-14-3.svg"
    }


    this.init = () => {
        $(elements).removeClass('error')
        $('.game-number-container').html('')
        $('.game-number-container').removeAttr('style');

        this.error = true;
        this.defaultanswer = true;
    }


    elements.forEach(w => {
        w.addEventListener('click', (e) => {
            this.defaultanswer = false;
            
            if(e.target.classList.contains('voice__question__element')){
                let img = document.createElement('img');
                img.setAttribute('src', this.imgSrc);
                img.setAttribute('data-voice', this.audio);
                img.setAttribute('id', 'correctAns');
    
                this.clearOtherElements()
    
                e.target.querySelector('.game-number-container').appendChild(img);

                if(e.target.getAttribute('data-voice') === e.target.querySelector('.game-number-container').querySelector('img').getAttribute('data-voice')){
                    this.error = false

                } else {
                    this.error = true;
                    w.classList.add('error')
                }
            }
        })
    });
    
    
    this.clearOtherElements = function() {
        let els = document.querySelectorAll('.game-number-container');
         
        els.forEach(w => {
            if(w.querySelector('img')){
                w.querySelector('img').remove()
            }

            if(w.parentElement.classList.contains('error')){
                w.parentElement.classList.remove('error')
            }
        })
    }


    this.clearBgColor = () => {
        myArray.forEach(w => {
            if(w.classList.contains('error') == false){
                w.querySelector('.game-number-container').removeAttribute('style');
            }
        })
    }

    this.checkWhichGameIsShow = () => {
        if(location.pathname == '/Music-Lessons/Voices/Games/M-1366-14.html' || location.pathname == '/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-14.html'){
            location.href = "M-1366-14-success.html"

        } else if(location.pathname == '/Music-Lessons/Voices/Games/M-1366-15.html' || location.pathname == '/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-15.html'){
            location.href = "M-1366-15-success.html"

        }  else if(location.pathname == '/Music-Lessons/Voices/Games/M-1366-16.html' || location.pathname == '/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-16.html'){
            location.href = "M-1366-16-success.html"

        } else if(location.pathname == '/Music-Lessons/Voices/Games/M-1366-19.html' || location.pathname == '/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-19.html'){
            location.href = "M-1366-19-success.html"

        }  else if(location.pathname == '/Music-Lessons/Voices/Games/M-1366-20.html' || location.pathname == '/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-20.html'){
            location.href = "M-1366-20-success.html"
            
        } else if(location.pathname == '/Music-Lessons/Voices/Games/M-1366-21.html' || location.pathname == '/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-21.html'){
            location.href = "M-1366-21-success.html"
        }
    }

    // after submit 
    this.completGame = () => {
        if(this.error == false){
            this.checkWhichGameIsShow()

        } else if(this.defaultanswer){
            $('.game-number-container').attr('style', 'background: red')
            
        } else {
            myArray.forEach(w => {
                this.clearBgColor()

                if(w.classList.contains('error')){
                    w.querySelector('.game-number-container').setAttribute('style', 'background: red')
                }
            })
        }
    }
}


const voiceGame = new voiceGames()
