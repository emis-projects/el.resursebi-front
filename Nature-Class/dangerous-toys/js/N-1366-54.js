function natureGames(){
    this.index = 0;
	this.error = true;

    var firstH5 = document.querySelector('.ask_question_game_box--first');
    var secondH5 = document.querySelector('.ask_question_game_box--second');
    var thirdH5 = document.querySelector('.ask_question_game_box--third');

    let firstIndex = firstH5.querySelector('.draggeble_h5').getAttribute('data-index');
    let secondIndex = secondH5.querySelector('.draggeble_h5').getAttribute('data-index');
    let thirdIndex = thirdH5.querySelector('.draggeble_h5').getAttribute('data-index');


    // variables
    var draggedElement = $('.ask_question_game_box');
    var empties = document.querySelectorAll('.dropDiv');
    var completedBtn = document.querySelector('#completedGame');
    var resetBtn = document.getElementById('resetBtn');


    $(draggedElement).on('dragstart', (e) => this.dragStart(e));
    $(draggedElement).on('dragend', (e) => this.dragEnd(e));


    // Loop through empty boxes and add listeners
    for (const empty of empties) {
        empty.addEventListener('dragover', (e) => this.dragOver(e));
        empty.addEventListener('dragover', (e) => this.dragEnter(e));
        empty.addEventListener('drop', (e) => this.dragDrop(e));
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.ask_question_game_box').forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
            w.setAttribute('data-title', w.querySelector('.draggeble_h5').innerText)
        })
    })


    var myArray = [];

    for(var i = 0; i < empties.length; i++ ){
      myArray.push(empties[i])
    }


    this.init = () => {
        completedBtn.classList.remove('opacity-5');
        completedBtn.removeAttribute('style', 'disabled');
        completedBtn.removeAttribute('style', 'cursor: default');
        $(empties).removeAttr('style');
        $(empties).removeAttr('dinamicaly-index');

        empties.forEach(w => {
            if(w.querySelector('.draggeble_h5')){
                w.querySelector('.draggeble_h5').remove()
            }
        })

        $('.ask_question_game_box').removeAttr('style');

        if(!firstH5.querySelector('.draggeble_h5')){
            this.comeBackText(firstH5.getAttribute('data-title'), firstIndex, firstH5)
        }
        if(!secondH5.querySelector('.draggeble_h5')){
            this.comeBackText(secondH5.getAttribute('data-title'), secondIndex, secondH5)
        }
        if(!thirdH5.querySelector('.draggeble_h5')){
            this.comeBackText(thirdH5.getAttribute('data-title'), thirdIndex, thirdH5)
        }
    }



    this.comeBackText = (text, index, parent) => {
        let h5 = document.createElement('h5');

        h5.innerText = text;

        h5.classList.add('draggeble_h5');

        h5.setAttribute('data-index', index);

        parent.appendChild(h5)
    }


    // Drag Functions
    this.dragOver = (e) => {
        e.preventDefault();
    }

    this.dragEnter = (e) => {
        e.preventDefault();
    }

    // drag start
    this.dragStart = (e) => {
        setTimeout(() => {
            e.target.className = "draggedElement"
        }, 0);
    }


    // drag end
    this.dragEnd = e => {
        let elClassName = e.target.getAttribute('data-class');

        e.target.className = elClassName;
    }


    // drop
    this.dragDrop = (e) => { e.preventDefault();
        let draggedEl = document.querySelector('.draggedElement').querySelector('h5');
        let draggedElIndex = parseInt(draggedEl.getAttribute('data-index'));

        if(e.target.classList.contains('dropDiv')){
            e.target.setAttribute('dinamicaly-index', draggedElIndex);
            e.target.append(draggedEl);
        }

        let el = myArray.every(this.checkEveryElement)

        if(el == true){
          this.error = false;
        } else {
          this.error = true;
        }
    }


	// error page
	this.errorPage = () => {
		myArray.forEach(l => {
			if(l.getAttribute('data-index') !== l.getAttribute('dinamicaly-index')){
                this.error = true
                l.setAttribute('style', 'border: 6px solid #dc6c84;');
			}
		})
    }


    // success page
	this.successPage  = () => {
		if(this.error === false){
            let loc = location.pathname;

            if(loc == "/Nature-Class/dangerous-toys/30.html" || loc == "/el.resursebi-front/Nature-Class/dangerous-toys/30.html"){
                location.href = "game-success-30.html"

            } else if(loc == "/Nature-Class/invisible_forces/24.html" || loc == "/el.resursebi-front/Nature-Class/invisible_forces/24.html"){
                location.href = "game-success-24.html"

            } else if(loc == "/Nature-Class/Forest-colors/36.html" || loc == "/el.resursebi-front/Nature-Class/Forest-colors/36.html"){
                location.href = "game-success-36.html"

            } else if(loc == "/Nature-Class/The-living-world-4/20.html" || loc == "/el.resursebi-front/Nature-Class/The-living-world-4/20.html"){
                location.href = "game-success-20.html"

            } else if(loc == "/Nature-Class/Where-sun-goes/20.html" || loc == "/el.resursebi-front/Nature-Class/Where-sun-goes/20.html"){
                location.href = "game-success-20.html"

            } else if(loc == "/Nature-Class/Summer-in-winter/19.html" || loc == "/el.resursebi-front/Nature-Class/Summer-in-winter/19.html"){
                location.href = "game-success-19.html"

            } else if(loc == "/Nature-Class/Bruca-07/16.html" || loc == "/el.resursebi-front/Nature-Class/Bruca-07/16.html"){
                location.href = "game-success-16.html"

            } else if(loc == "/Nature-Class/flamingo-08/22.html" || loc == "/el.resursebi-front/Nature-Class/flamingo-08/22.html"){
                location.href = "game-success-22.html"

            } else if(loc == "/el.resursebi-front/Nature-Class/around-world-09/20.html" || loc == "/Nature-Class/around-world-09/20.html"){
                location.href = "game-success-20.html"

            } else if(loc == "/el.resursebi-front/Nature-Class/coat-10/25.html" || loc == "/Nature-Class/coat-10/25.html"){
                location.href = "game-success-25.html"

            } else if(loc == "/el.resursebi-front/Nature-Class/sport/18.html" || loc == "/Nature-Class/sport/18.html"){
                location.href = "game-success-18.html"

            } else if(loc == "/el.resursebi-front/Nature-Class/snow-12/29.html" || loc == "/Nature-Class/snow-12/29.html"){
                location.href = "game-success-29.html"
            }
        }
	}


    this.checkEveryElement = (element) => {
        return element.getAttribute('data-index') == element.getAttribute('dinamicaly-index');
    }


    // completed
	this.completGame = (e) => {
		if(this.error){
            this.errorPage();

            completedBtn.classList.add('opacity-5')
            completedBtn.setAttribute('style', 'disabled')
            completedBtn.setAttribute('style', 'cursor: default')

        } else {
            this.error = false;
            this.successPage();
        }
	}


    // events
    resetBtn.addEventListener('click', () => this.init());
	completedGame.addEventListener('click', () => this.completGame());
}

const naturegame = new natureGames();
