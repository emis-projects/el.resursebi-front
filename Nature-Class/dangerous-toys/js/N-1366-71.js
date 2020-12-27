function natureGames(){
    this.error = false;

    // variables
    var draggedImgElement = document.querySelectorAll('.N-games-child');
    var mydrag = document.querySelectorAll('.N-1-draggeble_element');
    let completedBtn = document.getElementById('completedGame');
    let resetBtn = document.getElementById('resetBtn');


    $(draggedImgElement).on('dragstart', (e) => this.dragStart(e));
    $(draggedImgElement).on('dragend', (e) => this.dragEnd(e));


    // Loop through empty boxes and add listeners
    for (const drag of draggedImgElement) {
        drag.addEventListener('dragover', (e) => this.dragOver(e));
        drag.addEventListener('drop', (e) => this.dragDrop(e));
    }


    document.addEventListener('DOMContentLoaded', () => {
        mydrag.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
        })

        draggedImgElement.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
        })
    })


    var myArray = [];

    for(var i = 0; i < mydrag.length; i++ ){
      myArray.push(mydrag[i])
    }



    // Drag Functions
    this.dragOver = (e) => {
        e.preventDefault();
    }

    // drag start
    this.dragStart = (e) => {
        setTimeout(() => {
            e.target.parentElement.parentElement.className = "draggedElement"
        }, 0);
    }


    // drag end
    this.dragEnd = e => {
        let elClassName = e.target.parentElement.parentElement.getAttribute('data-class');
        e.target.parentElement.parentElement.className = elClassName;
    }


    // drop
    this.dragDrop = e => { e.preventDefault();
        e.preventDefault();

        let drag = document.querySelector('.draggedElement');

        if(e.target.classList.contains('nature-action-material-pic') || e.target.classList.contains('nature-material-row-pic')){
            e.target.parentElement.parentElement.parentElement.appendChild(drag);
        }


        let firstElement = e.target.parentElement.parentElement;

        myArray.filter(w => {
            if(w.firstElementChild == null || w.firstElementChild == undefined){
                w.appendChild(firstElement)
            }
        })
    }


	// error page
	this.errorPage = () => {
		myArray.forEach(w => {
			if(w.getAttribute('data-title') !== w.querySelector('.N-games-child').getAttribute('data-title')){
                w.querySelector('.N-games-child').classList.add('error');
			}
		})
    }


    this.checkEveryElement = (element) => {
        return element.getAttribute('data-title') == element.querySelector('.N-games-child').getAttribute('data-title')
    }


    // // success page
	this.successPage  = () => {
        if(location.pathname == "/el.resursebi-front/Nature-Class/dangerous-toys/42.html" || location.pathname == "/Nature-Class/dangerous-toys/42.html"){
            location.href = 'game-success-42.html';

          } else if(location.pathname == "/el.resursebi-front/Nature-Class/dangerous-toys/40.html" || location.pathname == "/Nature-Class/dangerous-toys/40.html"){
            location.href = 'game-success-41.html';

          }
	}


    // completed
	this.completGame = (e) => {
        let el = myArray.every(this.checkEveryElement);

		if(el == false){

            completedBtn.setAttribute('disabled', 'true');
            completedBtn.setAttribute('style', 'cursor: default');

            this.errorPage();

        } else if(el == true) {
            this.successPage();

        }
	}


    // events
    document.getElementById('resetBtn').addEventListener('click', function() {

        $(draggedImgElement).removeClass('error')

        completedBtn.removeAttribute('disabled');
        completedBtn.setAttribute('style', 'cursor: pointer');
    });

	completedBtn.addEventListener('click', this.completGame);
}

    const naturegame = new natureGames();
