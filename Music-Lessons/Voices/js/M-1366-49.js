function m136649(){

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
    let carQuestions = document.querySelectorAll('.car_game_container');
    const completeBtn = document.getElementById('completedGame');
    const resetBtn = document.getElementById('resetBtn');

    // listeners
    // completeBtn.addEventListener('click', () => this.completGame());
    // resetBtn.addEventListener('click', () => this.init());
    
    listenBtn.addEventListener('click', e => {
        handleLoadstop()
        createjs.Sound.registerSound({src:`${e.target.getAttribute('data-voice')}`, id:"sound"});
        handleLoadComplete()
    })
    

}


const m136649Game = new m136649();