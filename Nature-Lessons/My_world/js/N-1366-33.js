function natureGames(){
    this.error = false;
    this.photos = [];

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

    var myArray2 = [];

    for(var i = 0; i < draggedImgElement.length; i++ ){
      myArray2.push(draggedImgElement [i])
    }


    this.init = () => {
        $(mydrag).removeClass('errorParent');
     
        completedBtn.removeAttribute('disabled');
        completedBtn.setAttribute('style', 'cursor: pointer');

        var parent = $(".doll");
        var divs = parent.children();

        while (divs.length) {
            parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1));
        }
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

        e.target.parentElement.appendChild(drag);

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
        location.href = 'nature-1-success.html';
	}
    

    // completed 
	this.completGame = (e) => {
        let el = myArray.every(this.checkEveryElement);

		if(el == false){
            $('.symbols_description-container').addClass('errorParent');

            completedBtn.setAttribute('disabled', 'true');
            completedBtn.setAttribute('style', 'cursor: default');

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