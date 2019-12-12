createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];
function handleLoadComplete(event) {
    createjs.Sound.play("sound");
}

function handleLoadstop(event) {
   createjs.Sound.stop("sound");
}


function m136658 () {

   $(".dot").click(function() {
       $(".dot").removeClass("active")
       $(".dot").removeClass("error")
       $(this).addClass("active")
   })



   document.querySelectorAll('.soundcheck').forEach(w => {
       w.addEventListener('click', (e) => {
           handleLoadstop()
           createjs.Sound.registerSound({ src: `${e.target.getAttribute('data-voice')}`, id: "sound" });
           handleLoadComplete()
       })
   })




   $("#resetBtn").click( () => {
       $(".dot").removeClass("active")
       $(".dot").removeClass("error")
       document.getElementById("completedGame").disabled = false
   })

   
   $("#completedGame").click( () => {
       if ($("span[data-answer = 'true']").hasClass("active")) {
           let loc = location.pathname;

           if(loc == "/Music-Lessons/Voices/Games/M-1366-58.html" || loc == "/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-58.html"){
            location.href = "M-1366-58-success.html"
            
        } else if(loc == "/Music-Lessons/Voices/Games/M-1366-58-2.html" || loc == "/el.resursebi-front/Music-Lessons/Voices/Games/M-1366-58-2.html"){
            location.href = "M-1366-58-2-success.html"

           }
       }
       else {
           $(".active").removeClass("active").addClass("error")
       }
   })

}


m136658()


   
