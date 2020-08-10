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
    let listenBtn = document.querySelector('.listen--btn');
    let carQuestions = document.querySelectorAll('.DragGame—childs2');
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
        
        $('.DragGame—childs2').removeAttr('style')
        $('.DragGame—childs1').removeClass('disabled')
        $('.DragGame—childs1').removeAttr('style')
        $('.carImgNumber').remove()
	}


    myArray.forEach(w => {   
        w.addEventListener('click', e => {
            if(!w.querySelector('.disabled')){
                console.log(w);
                this.index++;
                this.error = false;

                let img = document.createElement('img');
                let imgSrc = '../../../img/gakvetilebi/musika/MV-1366-14-'
                img.setAttribute('src', `${imgSrc}${this.index}.svg`);
                img.setAttribute('data-index', this.index);
                img.classList.add('carImgNumber');

                if(e.target.classList.contains('disabled') == false){
                    w.querySelector('.DragGame—childs1').append(img)

                    if(w.getAttribute('data-index') !== w.querySelector('.carImgNumber').getAttribute('data-index')){
                        w.classList.add('itisnotcorrect')
                        w.querySelector('.DragGame—childs1').setAttribute('style', "box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161)")
                    }
                }
                
                this.answerArray.push(parseInt(w.getAttribute('data-index')))
                e.target.classList.add('disabled');
            }
        })
    })



    this.checkIfIsError = () => {
        document.querySelectorAll('.DragGame—childs2').forEach(w => {            
            if(w.classList.contains('itisnotcorrect')){
                w.querySelector('.DragGame—childs1').setAttribute('style', 'border: 3px solid rgb(220, 108, 133);')

            } else if(w.classList.contains('itisnotcorrect') == false){
                w.querySelector('.DragGame—childs1').setAttribute('style', 'border: 3px solid rgb(220, 108, 133);')
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
                location.href = 'game-success-5.html'
            }
            
        } else {
            $('.DragGame—childs2 .DragGame—childs1').attr('style', 'border: 3px solid rgb(220, 108, 133);')

        }
    }
}


const m13660304game = new m13660304()