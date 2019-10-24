function natureGames(){
    this.index = 0;
    this.error = true;
    
    
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
        // drag.addEventListener('dragenter', (e) => this.dragEnter(e));
        // drag.addEventListener('dragleave', (e) => this.dragleave(e));
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

    // this.dragleave = (e) => {
    //     if(e.target.classList.contains('symbols_description-img')){
    //         e.target.classList.remove('hovered')
    //     }
    // }
  
    // this.dragEnter = (e) => {
    //     e.preventDefault();
    
    // }


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
        debugger
        
        let drag = document.querySelector('.draggedElement');

        let list = e.target.parentElement.parentElement;

        list.querySelector('.draggeble_element').appendChild(drag)
        
        var firstElement = list.children[0].children[0];

        myArray.forEach(w => {
            if(w.getAttribute('data-drag') == true){
                // w.appendChild(firstElement)
                console.log(w);
            }
        })
    }
 

	// error page 
	// this.errorPage = () => {
	// 	myArray.forEach(l => {
	// 		if(l.getAttribute('data-index') !== l.getAttribute('dinamicaly-index')){
    //             this.error = true
    //             l.setAttribute('style', 'border: 6px solid red');
	// 		}
	// 	})
    // }


    // success page
	// this.successPage  = () => {
	// 	if(this.error === false){
	// 	    location.href = '1366-240.html';
    //     }
	// }
    

    // this.checkEveryElement = (element) => {
    //     return element.getAttribute('data-index') == element.getAttribute('dinamicaly-index');
    // }


    // completed 
	// this.completGame = (e) => {
	// 	if(this.error){
    //         this.errorPage();

    //         completedBtn.classList.add('opacity-5')
    //         completedBtn.setAttribute('style', 'disabled')
    //         completedBtn.setAttribute('style', 'cursor: default')
            
    //     } else {
    //         this.error = false;
    //         this.successPage();
    //     }
	// }


    // events 
    resetBtn.addEventListener('click', () => this.init());
	completedGame.addEventListener('click', () => this.completGame());
}

const naturegame = new natureGames();