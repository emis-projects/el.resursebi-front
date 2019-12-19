createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];
function handleLoadComplete(event) {
    createjs.Sound.play("sound");
}

function handleLoadstop(event) {
   createjs.Sound.stop("sound");
}



   document.querySelectorAll('.music_img-buttons').forEach(w => {
       w.addEventListener('click', (e) => {
           handleLoadstop()
           createjs.Sound.registerSound({src:`${e.target.getAttribute('data-voice')}`, id:"sound"});
           handleLoadComplete()
       })
   })


   function natureGames(){

    var checkmarkElements = document.querySelectorAll('.checkmark');
    var resetBtn = document.getElementById('resetBtn');
    var completedGame = document.getElementById('completedGame');


    document.addEventListener('DOMContentLoaded', () => {
        checkmarkElements.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
        })
    })


    for (const check of checkmarkElements) {
        check.addEventListener('click', (e) => this.clickElement(e));
    }


    this.clickElement = (e) => {
        let sel1 = document.querySelector('.sel1')
        let sel2 = document.querySelector('.sel2')
        let sel3 = document.querySelector('.sel3')
        let sel4 = document.querySelector('.sel4')
        let sel5 = document.querySelector('.sel5')
        let sel6 = document.querySelector('.sel6')
        e.target.classList.add('selected')

        if(e.target.classList.contains('sel1') && e.target.classList.contains('selected')){
            sel2.classList.remove('selected')
        }
        if(e.target.classList.contains('sel2') && e.target.classList.contains('selected')){
            sel1.classList.remove('selected')
        }
        if(e.target.classList.contains('sel3') && e.target.classList.contains('selected')){
            sel4.classList.remove('selected')
        }
        if(e.target.classList.contains('sel4') && e.target.classList.contains('selected')){
            sel3.classList.remove('selected')
        }
        if(e.target.classList.contains('sel5') && e.target.classList.contains('selected')){
            sel6.classList.remove('selected')
        }
        if(e.target.classList.contains('sel6') && e.target.classList.contains('selected')){
            sel5.classList.remove('selected')
        }
    }


    this.init = () => {
        completedGame.disabled = false
        checkmarkElements.forEach(element => {
            $(element).removeClass('correct');
            $(element).removeClass('error');
            $(element).removeClass('selected');
        });
    }


    this.complateGame = (e) => {
        var count = 0;
        
        checkmarkElements.forEach(element => {
            if((element.classList.contains('selected')) && (element.classList.contains('correct1') == false)){
                element.classList.add("error")
            }
            if((element.classList.contains('selected')) && (element.classList.contains('correct1'))){
                element.classList.add("correct")
            }
            if((element.classList.contains('selected')) && (element.classList.contains('correct1'))){
                count++;
                if(count == 3){
                    this.successPage();
                }
            }
        });
    }



    this.successPage = () => {
        let loc = location.pathname;

        if(loc == '/Music-Lessons/Walk-in-the-city-1/games/M-1366-03-22.html' || loc == '/el.resursebi-front/Music-Lessons/Walk-in-the-city-1/games/M-1366-03-22.html'){
            location.href = "M-1366-03-22-success.html"

        } else if(loc == '/Music-Lessons/Walk-in-the-city-1/games/M-1366-03-26.html' || loc == '/el.resursebi-front/Music-Lessons/Walk-in-the-city-1/games/M-1366-03-26.html'){
            location.href = "M-1366-03-26-success.html"

        }
    }


    resetBtn.addEventListener('click', () => this.init());
    completedGame.addEventListener('click', () => this.complateGame());

   }

   const naturegame = new natureGames();