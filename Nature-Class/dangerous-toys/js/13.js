function natureGames(){
    this.error = false;

    // variables
    var draggedImgElement = document.querySelectorAll('.N-games-child');
    var mydrag = document.querySelectorAll('.N-1-draggeble_element');
    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');


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
      myArray.push(mydrag [i])
    }


    this.init = () => {
        $(mydrag).removeClass('errorParent');

        $('.after_parent').removeClass('error')

        completedBtn.removeAttribute('disabled');
        completedBtn.setAttribute('style', 'cursor: pointer');
    }



    // Drag Functions
    this.dragOver = (e) => {
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
    this.dragDrop = e => { e.preventDefault();
        let drag = document.querySelector('.draggedElement');

        if(e.target.parentElement.classList.contains('after_parent')){
            e.target.parentElement.appendChild(drag);
        }

        let firstElement = e.target.parentElement.firstElementChild;

        myArray.filter(w => {
            if(w.firstElementChild.firstElementChild == undefined || w.firstElementChild.firstElementChild == null){
                w.firstElementChild.appendChild(firstElement)
            }
        })
    }


	// error page
	this.errorPage = () => {
		myArray.forEach(w => {
			if(w.getAttribute('data-title') !== w.querySelector('.symbols_description-img').getAttribute('data-title')){
                w.querySelector('img').parentElement.classList.add('error');
			}
		})
    }


    this.checkEveryElement = (element) => {
        return element.getAttribute('data-title') == element.querySelector('.symbols_description-img').getAttribute('data-title')
    }


    // // success page
	this.successPage  = () => {
        location.href = 'game-success-13.html';
	}


    // completed
	this.completGame = (e) => {
        let el = myArray.every(this.checkEveryElement);

		if(el == false){
            $('.symbols_description-container').addClass('errorParent');
            $('.draggedImgElement').addClass('opacity-5')
            completedBtn.setAttribute('disabled', 'true');
            completedBtn.setAttribute('style', 'cursor: default');

            this.errorPage();

        } else if(el == true) {
            this.successPage();
            $('.draggedImgElement').addClass('opacity-5')
        }
	}


    // events
    resetBtn.addEventListener('click', () => this.init());
	completedBtn.addEventListener('click', () => this.completGame());
}

    const naturegame = new natureGames();
