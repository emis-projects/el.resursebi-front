function dragQuizGame(){
  this.firstAnswer = false;
  this.secondAnswer = false;
  this.error = false;
  this.submitError = false;


  const drag1 = document.querySelector('.dot_wrapper #drag1');
  const drag2 = document.querySelector('.dot_wrapper #drag2');
  const empties = document.querySelectorAll('.question__dot');
  const completeBtn = document.getElementById('completedGame');
  const wrapper = document.querySelector('.dot_wrapper');
  let items = document.querySelectorAll('.questions__images-item');
  const resetBtn = document.getElementById('resetBtn');

  this.init = () => {
    this.error = false;
    this.submitError = false;
    this.firstAnswer = false;
    this.secondAnswer = false;
    
    completeBtn.removeAttribute('disabled');
    completeBtn.setAttribute('style', 'cursor: pointer');

    document.querySelectorAll('.question__dot').forEach(w => {
      w.classList.remove('error');

      if(w.querySelector('.errorImg')){
        w.querySelector('.errorImg').remove();
      }

      if(w.querySelector('.draggable__answer__btns')){
        w.querySelector('.draggable__answer__btns').remove();
      }
    });


    items.forEach(w => {
      w.classList.remove('correct')
      w.classList.remove('incorrect')
    });


    let wrapper = document.querySelector('.dot_wrapper');

    wrapper.classList.remove('error');

    wrapper.querySelectorAll('.draggable__answer__btns').forEach(w => {
      w.removeAttribute('disabled')
    })
    
    if(wrapper.querySelector('.cold__btn') == undefined && wrapper.querySelector('.hot__btn') == undefined){
      wrapper.innerHTML += '<button id="drag1" class="draggable__answer__btns cold__btn" data-weather="cold" data-class="draggable__answer__btns cold__btn" draggable="true"></div>'
      wrapper.innerHTML += '<button id="drag2" class="draggable__answer__btns hot__btn" data-weather="hot" data-class="draggable__answer__btns hot__btn" draggable="true"></div>'
    
    } else if (wrapper.querySelector('.cold__btn') == undefined){
      wrapper.innerHTML += '<button id="drag1" class="draggable__answer__btns cold__btn" data-weather="cold" data-class="draggable__answer__btns cold__btn" draggable="true"></button>'
    
    } else if (wrapper.querySelector('.hot__btn') == undefined){
      wrapper.innerHTML += '<button id="drag1" class="draggable__answer__btns cold__btn" data-weather="cold" data-class="draggable__answer__btns cold__btn" draggable="true"></button>'
    }
  }


  // drag start 
  this.dragStart = (e) => {
    e.preventDefault();
    let div = document.createElement('div');

    div.className = e.target.className;
    let dataWeather = e.target.getAttribute('data-weather');
    let dataClass = e.target.getAttribute('data-class');
    let draggeble = e.target.getAttribute('draggable');
    let id = e.target.getAttribute('id');

    div.setAttribute('id', id);
    div.setAttribute('data-weather', dataWeather);
    div.setAttribute('data-class', dataClass);
    div.setAttribute('draggable', draggeble);

    div.classList.add('cloned');

    // var cloned = e.target.cloneNode(true);

    // cloned.classList.add('cloned');

    wrapper.insertBefore(div, e.target);

    document.querySelectorAll('.dot_wrapper .draggable__answer__btns').forEach(w => {
      if(w.classList.contains('cloned')){
        e.target = w      
      }
    })


    setTimeout(() => {
      e.target.className = "draggedElement"
    }, 0);
  }
    
  
  // drag end
  this.dragEnd = e => {
    e.target.className = e.srcElement.dataset.class;
  }


  // Loop through empty boxes and add listeners
  for (const empty of empties) {
    empty.addEventListener('dragover', (e) => this.dragOver(e));
    // empty.addEventListener('dragenter', (e) => this.dragEnter(e));
    // empty.addEventListener('dragleave', (e) => this.dragLeave(e));
    empty.addEventListener('drop', (e) => this.dragDrop(e));
  }



  // Drag Functions    
  this.dragOver = (e) => {
    e.preventDefault();
  }
  
  this.dragEnter = (e) => {
    e.preventDefault();
    

    
  }

  
  // this.dragLeave = (e) => {
  //   e.target.className = 'question__dot';
  // }
  
  
  
  var myArray = [];

  for(var i = 0; i < empties.length; i++ ){
    myArray.push(empties[i])
  }
  
  
  this.dragDrop = (e) => {
    e.target.appendChild(document.querySelector('button.draggedElement'))
    
    if(e.target.childNodes[1]){
      e.target.firstChild.remove();
    }

    setTimeout(() => {
      this.checkifIsTrue(e)
    }, 0)
  }
 


 this.checkifIsTrue = (e) => {
    let parent = e.target.parentElement;
    
    let img = parent.querySelector('.mainImage');
    let circle = parent.querySelector('.draggable__answer__btns');


    if(img.getAttribute('data-weather') == circle.getAttribute('data-weather')){
      this.firstAnswer = true;
      
      if(this.firstAnswer === true){
        this.secondAnswer = true;
        parent.classList.add('correct')
        parent.classList.remove('incorrect')
      }
      
    } else {
      this.secondAnswer = false;
      this.firstAnswer = false;
      this.error = true;
      
      parent.classList.add('incorrect')
      parent.classList.remove('correct')
      
      document.querySelectorAll('.questions__images-item').forEach(w => {
        w.classList.remove('correct');
      })
    }
  }
  
  
  // error 
  this.errorMessage = () => {
    items.forEach(w => {
      if(w.className = "questions__images-item"){

        let img = document.createElement('img');

        img.classList.add('errorImg');

        w.querySelector('.question__dot').classList.add('error');

        img.setAttribute('src', '../../img/gakvetilebi/xelovneba/color-game/x.svg');

        if(!w.querySelector('.errorImg')){
          w.querySelector('.question__dot').appendChild(img);
        }

        completeBtn.setAttribute('disabled', 'true');
        completeBtn.setAttribute('style', 'cursor: default');

        this.error = true;
        this.submitError = true;

        wrapper.classList.add('error');

        if(wrapper.classList.contains('error')){
          wrapper.querySelectorAll('.draggable__answer__btns').forEach(w => {
            w.setAttribute('disabled', 'true')
          })
        }
      } 
    })
  }

 
  // success page
	this.successPage  = () => {
    location.href = '1366-240.html';
	}


  // after submit 
  this.completGame = () => {
    items.forEach(w => {
      if(this.submitError === false && this.error === false && w.classList.contains('correct')){
        this.successPage();
  
      } else if(this.error === false || this.submitError == false || w.classList.contains("incorrect") || w.className == "questions__images-item") {
        this.errorMessage()
      }
    })
	}


    // Fill listeners
    drag1.addEventListener('dragstart', (e) => this.dragStart(e));

    drag1.addEventListener('dragend', (e) => this.dragEnd(e));
    drag2.addEventListener('dragstart', (e) => this.dragStart(e));
    drag2.addEventListener('dragend', (e) => this.dragEnd(e));


    document.body.addEventListener( 'click', function ( event ) {
      if( event.srcElement.id == 'drag1' ) {
        this.dragStart(e)
      };
    } );


    completeBtn.addEventListener('click', () => this.completGame());
    resetBtn.addEventListener('click', () => this.init());
}

const QuizGame = new dragQuizGame();


