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
           // console.log(e.target.classList.contains('selected'))
           // let existSelect = e.target.classList.contains('selected');
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
               //$(element).removeClass('success');
           });
           
       }




       this.completGame = () => {
           completedBtn.disabled = true
           handleLoadstop()
           soundBtn.forEach(element => {
               console.log(element.classList)
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
           location.href = 'success.html';
       }
      
      
       
       
       resetBtn.addEventListener('click', () => this.init());
       completedBtn.addEventListener('click', () => this.completGame());

   }


   const naturegame = new natureGames();