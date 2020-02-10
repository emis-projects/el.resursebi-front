createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];
function handleLoadComplete(event) {
    createjs.Sound.play("sound");
}

function handleLoadstop(event) {
   createjs.Sound.stop("sound");
}



   document.querySelectorAll('.music_img-button').forEach(w => {
       w.addEventListener('click', (e) => {
           handleLoadstop()
           createjs.Sound.registerSound({src:`${e.target.getAttribute('data-voice')}`, id:"sound"});
           handleLoadComplete()
       })
   })

   

   function natureGames(){
       var soundBtn = document.querySelectorAll('.music_img-button');
       var completedBtn = document.getElementById('completedGame');
       var resetBtn = document.getElementById('resetBtn');

       for(const music of soundBtn){
           music.addEventListener('click', (e => this.clickElement(e)))
       }

       this.clickElement = (e) => {
           soundBtn.forEach(element => {
               $(element).removeClass('selected');
               $(element).removeClass('error');
   
           });
           e.target.classList.add("selected")
       }

       this.init = () => {
           completedBtn.disabled = false
           soundBtn.forEach(element => {
               handleLoadstop()
               $(element).removeClass('selected');
               $(element).removeClass('error');
           });
           
       }




       this.completGame = () => {
           completedBtn.disabled = true
           handleLoadstop()
           soundBtn.forEach(element => {
               var sel = element.className.includes('selected');
               var cor = element.className.includes('correct1');
               if(sel && cor){
                   this.successPage()
               }
               if(sel && !cor){
                   element.classList.add("error")
               }
           });
       }
      
      
       this.successPage = () => {
        let loc = location.pathname;

        if(loc == "/Music-Lessons/Voices/Games/M-1366-57.html" || loc == "/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-57.html"){
            location.href = "M-1366-57-success.html"
            
        } else if(loc == "/Music-Lessons/Voices/Games/M-1366-57-2.html" || loc == "/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-57-2.html"){
            location.href = "M-1366-57-2-success.html"

        } else if(loc == "/Music-Lessons/Voices/Games/M-1366-57-3.html" || loc == "/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-57-3.html"){
            location.href = "M-1366-57-3-success.html"

        } else if(loc == "/Music-Lessons/Voices/Games/M-1366-57-_4.scss" || loc == "/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-57-_4.scss"){
            location.href = "M-1366-57-4-success.html"

        }
       }
      
      
       
       
       resetBtn.addEventListener('click', () => this.init());
       completedBtn.addEventListener('click', () => this.completGame());

   }


   const naturegame = new natureGames();