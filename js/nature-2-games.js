function natureGames(){
    this.index = 0;
    this.error = true;
    
    
    // variables
    var draggedElement = document.querySelectorAll('.draggeble_element');
    var parent = document.querySelectorAll('.draggeble_el_parent');
    var completedBtn = document.querySelector('#completedGame');
    var resetBtn = document.getElementById('resetBtn');


    $(draggedElement).on('dragstart', (e) => this.dragStart(e));
    $(draggedElement).on('dragend', (e) => this.dragEnd(e));


    // Loop through empty boxes and add listeners
    for (const empty of parent) {
        empty.addEventListener('dragover', (e) => this.dragOver(e));
        empty.addEventListener('dragover', (e) => this.dragEnter(e));
        empty.addEventListener('drop', (e) => this.dragDrop(e));
    }


    var myArray = [];

    for(var i = 0; i < parent.length; i++ ){
      myArray.push(parent[i])
    }


    this.init = () => {
        console.log('truee');
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
            e.target.parentElement.className = "draggedElement"
            e.target.parentElement.parentElement.classList.remove('dragEl');
        }, 0);
    }


    // drag end
    this.dragEnd = e => {
        let elClassName = e.target.parentElement.getAttribute('data-class');

        e.target.parentElement.className = elClassName;
    }


    // drop 
    this.dragDrop = e => {
        // debugger

        let drag = document.querySelector('.draggedElement');

        let list = e.target.parentElement.parentElement;

        list.insertBefore(drag, list.lastElementChild);
        
        var firstElement = list.firstElement;

        myArray.forEach(w => {
            if(w.classList.contains('dragEl') == false){

                w.childNodes[0] = 'test'

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