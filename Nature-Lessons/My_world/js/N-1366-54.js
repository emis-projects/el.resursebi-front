function natureGames(){
    this.index = 0;
	this.error = true;

    var firstH5 = document.querySelector('.ask_question_game_box--first');
    var secondH5 = document.querySelector('.ask_question_game_box--second');
    var thirdH5 = document.querySelector('.ask_question_game_box--third');
    
    // variables
    var draggedElement = $('.ask_question_game_box');
    var empties = document.querySelectorAll('.dropDiv');
    var draggebleH5 = document.querySelector('.draggeble_h5');
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


    var myArray = [];

    for(var i = 0; i < empties.length; i++ ){
      myArray.push(empties[i])
    }


    this.init = () => {
        completedBtn.classList.remove('opacity-5');
        completedBtn.removeAttribute('style', 'disabled');
        completedBtn.removeAttribute('style', 'cursor: default');
        $(empties).removeAttr('style');

        empties.forEach(w => {
            if(w.querySelector('.draggeble_h5')){
                w.querySelector('.draggeble_h5').remove()
            }
        })

        $('.ask_question_game_box').removeAttr('style');

        $('.ask_question_game_box--first').append(firstH5);

        if(!firstH5.querySelector('.draggeble_h5')){
            this.comeBackText('შეიძლება ის საშიში ნივთიერებისგან იყოს გაკეთებული', 2, firstH5)    
        }
        if(!secondH5.querySelector('.draggeble_h5')){
            this.comeBackText('მოვიფიქროთ სიმბოლოები, რომლებიც ნივთიერებათა საშიშ თვისებების შესახებ აწვდის გაფრთხილებას ადამიანებს', 4, secondH5)
        }
        if(!thirdH5.querySelector('.draggeble_h5')){
            this.comeBackText('დავადგინოთ ის ნივთიერებები, რომლებიც საშიშია ადამიანისა და გარემოსათვის', 6, thirdH5)
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
    this.dragDrop = e => {
        console.log(e.target);
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
		    location.href = '1366-240.html';
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