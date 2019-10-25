function natureGames(){
    this.error = false;
    
    
    // variables
    var draggedElement = document.querySelectorAll('.draggeble_element');
    var draggedImgElement = document.querySelectorAll('.symbols_description-img');
    var parent = document.querySelectorAll('.draggeble_el_parent');
    var mydrag = document.querySelectorAll('.draggeble_element');
    var completedBtn = document.querySelector('#completedGame');
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
            e.target.parentElement.setAttribute('data-drag', true);
        }, 0);
        
    }


    // drag end
    this.dragEnd = e => {
        let elClassName = e.target.getAttribute('data-class');
        e.target.parentElement.setAttribute('data-drag', false);
        e.target.className = elClassName;
    }


    // drop 
    this.dragDrop = e => {        
        let drag = document.querySelector('.draggedElement');

        let list = e.target.parentElement.parentElement;

        list.querySelector('.draggeble_element').appendChild(drag);
        
        var firstElement = list.children[0].children[0];

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
                w.querySelector('img').setAttribute('style', 'border: 2px solid red; border-radius: 50%')
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

        console.log(el);

		if(el == false){
            this.errorPage();
            
        } else if(el == true) {
            this.successPage();
        }
	}


    // events 
    resetBtn.addEventListener('click', () => this.init());
	completedGame.addEventListener('click', () => this.completGame());
}

const naturegame = new natureGames();