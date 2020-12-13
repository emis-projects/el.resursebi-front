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
    this.dragdrop = e => { e.preventDefault();
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
                l.setAttribute('style', 'border: 6px solid red');
			}
		})
    }


    // success page
	this.successPage  = () => {
		if(this.error === false){
            let loc = location.pathname;

            if(loc == "/Nature-Lessons/My_world/games/N-1366-54.html" || loc == "/el.resursebi-front/Nature-Lessons/My_world/games/N-1366-54.html"){
                location.href = "nature-2-success.html"

            } else if(loc == "/Nature-Lessons/invisible_forces/games/N-1366-117.html" || loc == "/el.resursebi-front/Nature-Lessons/invisible_forces/games/N-1366-117.html"){
                location.href = "N-1366-117-success.html"

            } else if(loc == "/Nature-Class/Forest-colors/36.html" || loc == "/el.resursebi-front/Nature-Class/Forest-colors/36.html" || loc == "/Nature-Lessons/forest_colours/games/N-1366-03-194.html" || loc == "/el.resursebi-front/Nature-Lessons/forest_colours/games/N-1366-03-194.html"){
                //location.href = "N-1366-03-194-success.html"
                  location.href = "./success-36.html"

            } else if(loc == "/Nature-Lessons/The-living-world/games/N-1366-04-253.html" || loc == "/el.resursebi-front/Nature-Lessons/The-living-world/games/N-1366-04-253.html"){
                location.href = "N-1366-04-253-success.html"

            } else if(loc == "/Nature-Lessons/Where-sun-goes/games/N-1366-05-22.html" || loc == "/el.resursebi-front/Nature-Lessons/Where-sun-goes/games/N-1366-05-22.html"){
                location.href = "N-1366-05-22-success.html"

            } else if(loc == "/Nature-Lessons/Summer-in-winter/games/N-1366-06-21.html" || loc == "/el.resursebi-front/Nature-Lessons/Summer-in-winter/games/N-1366-06-21.html"){
                location.href = "N-1366-06-21-success.html"

            } else if(loc == "/el.resursebi-front/Nature-Lessons/Bruca-07/16.html" || loc == "/Nature-Lessons/Bruca-07/16.html"){
                location.href = "game-success-16.html"

            } else if(loc == "/el.resursebi-front/Nature-Lessons/flamingo-08/22.html" || loc == "/Nature-Lessons/flamingo-08/22.html"){
                location.href = "game-success-22.html"

            } else if(loc == "/el.resursebi-front/Nature-Lessons/around-world-09/20.html" || loc == "/Nature-Lessons/around-world-09/20.html"){
                location.href = "game-success-20.html"

            } else if(loc == "/el.resursebi-front/Nature-Lessons/coat-10/25.html" || loc == "/Nature-Lessons/coat-10/25.html"){
                location.href = "game-success-25.html"

            } else if(loc == "/el.resursebi-front/Nature-Lessons/sport/18.html" || loc == "/Nature-Lessons/sport/18.html"){
                location.href = "game-success-18.html"

            } else if(loc == "/el.resursebi-front/Nature-Lessons/snow-12/29.html" || loc == "/Nature-Lessons/snow-12/29.html"){
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
