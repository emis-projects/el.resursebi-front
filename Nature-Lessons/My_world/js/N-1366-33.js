function natureGames(){
    this.error = false;
    
    
    // variables
    var draggedImgElement = document.querySelectorAll('.symbols_description-img');
    var mydrag = document.querySelectorAll('.draggeble_element');
    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');


    $(draggedImgElement).on('dragstart', (e) => this.dragStart(e));
    $(draggedImgElement).on('dragend', (e) => this.dragEnd(e));


    // Loop through empty boxes and add listeners
    for (const drag of mydrag) {
        drag.addEventListener('dragover', (e) => this.dragOver(e));
        drag.addEventListener('drop', (e) => this.dragDrop(e));
    }


    var myArray = [];

    for(var i = 0; i < mydrag.length; i++ ){
      myArray.push(mydrag [i])
    }


    this.init = () => {
        console.log('truee');
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
    this.dragDrop = e => {        
        let drag = document.querySelector('.draggedElement');

        let list = e.target.parentElement.parentElement.parentElement;

        console.log(list);

        list.querySelector('.draggeble_element').appendChild(drag);
        
        var firstElement = list.children[0].children[0];

        console.log(firstElement);

        myArray.forEach(w => {
            if(w.querySelector('img') == undefined){
                w.appendChild(firstElement)
            }
        })
    }
 

	// error page 
	this.errorPage = () => {
		myArray.forEach(w => {
			if(w.getAttribute('data-title') !== w.querySelector('.symbols_description-img').getAttribute('data-title')){
                this.error = true;
                w.querySelector('img').parentElement.classList.add('error');
                w.querySelector('img').classList.add('opacity-5')
			} else {
                this.error = false
            }
		})
    }


    this.checkEveryElement = (element) => {
        return element.getAttribute('data-title') == element.querySelector('.symbols_description-img').getAttribute('data-title')
      }
    

    // // success page 
	this.successPage  = () => {
        location.href = 'nature-1-success.html';
	}
    

    // completed 
	this.completGame = (e) => {
        let el = myArray.every(this.checkEveryElement);

		if(el == false){
            this.errorPage();
            
        } else if(el == true) {
            this.successPage();
        }
	}


    // events 
    resetBtn.addEventListener('click', () => this.init());
	completedBtn.addEventListener('click', () => this.completGame());
}

const naturegame = new natureGames();