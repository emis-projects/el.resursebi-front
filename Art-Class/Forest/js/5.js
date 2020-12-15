function natureGames(){
	this.error = true;


    // variables
    var draggedElement = $('.drag_el');
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
        document.querySelectorAll('.drag_el').forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
        })

    })

    var myArray = [];

    for(var i = 0; i < draggedElement.length; i++ ){
      myArray.push(draggedElement[i])
    }


    this.init = () => {
        empties.forEach(w => {
            w.setAttribute('src', w.getAttribute('data-initAnswer'))
        })
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
    this.dragDrop = e => { e.preventDefault();
        let draggedEl = document.querySelector('.draggedElement');

        // debugger
        if(e.target.getAttribute('data-form') == draggedEl.getAttribute('data-form')){
            e.target.setAttribute('src', e.target.getAttribute('data-correctAnswer'))
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
            location.href = "nature-2-success.html"
        }
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
}

const naturegame = new natureGames()