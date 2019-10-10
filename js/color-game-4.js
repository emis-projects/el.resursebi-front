function dragQuizGame(){
  this.firstAnswer = false;
  this.secondAnswer = false;
  this.error = false;


  const drag1 = document.getElementById('drag1');
  const drag2 = document.getElementById('drag2');
  const empties = document.querySelectorAll('.question__dot');
  const completeBtn = document.getElementById('completedGame');
  const resetBtn = document.getElementById('resetBtn');

  this.init = () => {
    this.error = false;
    this.firstAnswer = false;
    this.secondAnswer = false;
    
    completeBtn.removeAttribute('disabled');
    completeBtn.setAttribute('style', 'cursor: pointer');

    document.querySelectorAll('.question__dot').forEach(w => {
      if(w.querySelector('.errorImg')){
        w.querySelector('.errorImg').remove();
      }

      if(w.querySelector('.draggable__answer__btns')){
        w.querySelector('.draggable__answer__btns').remove();
      }
    });


    document.querySelectorAll('.questions__images-item').forEach(w => w.classList.remove('correct'));

    let wrapper = document.querySelector('.dot_wrapper');
    
    if(wrapper.querySelector('.cold__btn') == undefined && wrapper.querySelector('.hot__btn') == undefined){
      wrapper.innerHTML += '<div id="drag1" class="draggable__answer__btns cold__btn" data-weather="cold" data-class="draggable__answer__btns cold__btn" draggable="true"></div>'
      wrapper.innerHTML += '<div id="drag2" class="draggable__answer__btns hot__btn" data-weather="hot" data-class="draggable__answer__btns hot__btn" draggable="true"></div>'
    } else if (wrapper.querySelector('.cold__btn') == undefined){
      wrapper.innerHTML += '<div id="drag1" class="draggable__answer__btns cold__btn" data-weather="cold" data-class="draggable__answer__btns cold__btn" draggable="true"></div>'
    } else if (wrapper.querySelector('.hot__btn') == undefined){
      wrapper.innerHTML += '<div id="drag1" class="draggable__answer__btns cold__btn" data-weather="cold" data-class="draggable__answer__btns cold__btn" draggable="true"></div>'
    }
  }


  // drag end 
  this.dragStart = (e) => {
    e.target.className += ' hold';
    setTimeout(() => (e.target.className = "draggedElement"), 0);
  }
    
  // drag start
  this.dragEnd = e => {
    e.target.className = e.srcElement.dataset.class;
  }


  // Loop through empty boxes and add listeners
  for (const empty of empties) {
    empty.addEventListener('dragover', (e) => this.dragOver(e));
    empty.addEventListener('dragenter', (e) => this.dragEnter(e));
    empty.addEventListener('dragleave', (e) => this.dragLeave(e));
    empty.addEventListener('drop', (e) => this.dragDrop(e));
  }



  // Drag Functions    
  this.dragOver = (e) => {
    e.preventDefault();
  }
  
  this.dragEnter = (e) => {
    e.preventDefault();
    
    if(this.error === true) {
      e.target.parentElement.className += ' hovered';
      
    } else {
      e.target.className += ' hovered';
    }
  }
  
  this.dragLeave = (e) => {
    if(this.error === true) {
      e.target.parentElement.className = 'question__dot';
      
    } else {
      e.target.className = 'question__dot';
    }

  }
  
  this.dragDrop = (e) => {
    if(this.error === true) {
      e.target.parentElement.append(document.querySelector('div.draggedElement'));
      e.target.parentElement.className = 'question__dot';
    } else {
      e.target.className = 'question__dot';
      e.target.append(document.querySelector('div.draggedElement'));
    }


    console.log(e.target);

    setTimeout(() => {
      this.checkifIsTrue(e)
    }, 0)
  }
 


  this.errorMessage = () => {
    document.querySelectorAll('.questions__images-item').forEach(w => {

      if(w.className == "questions__images-item"){
        // fail 

        let img = document.createElement('img');

        img.classList.add('errorImg');

        img.setAttribute('src', '../../img/gakvetilebi/xelovneba/color-game/x.svg');

        w.querySelector('.question__dot').appendChild(img);

        completeBtn.setAttribute('disabled', 'true');
        completeBtn.setAttribute('style', 'cursor: default');

        this.error = true;

      } else if(w.classList.contains('correct')) {
        // success

        location.href = "1366-240.html"
      }
    })
  }
 
    
  

  this.checkifIsTrue = (e) => {
    let parent = e.target.parentElement;
    // console.log(e.target.parentElement);


    let img = parent.querySelector('.mainImage');
    let circle = parent.querySelector('.draggable__answer__btns');
 

    if(img.getAttribute('data-weather') == circle.getAttribute('data-weather')){
        this.firstAnswer = true;

        if(this.firstAnswer === true){
          this.secondAnswer = true;
          this.error = false;
          parent.classList.add('correct')
        }

    } else {
      this.secondAnswer = false;
      this.firstAnswer = false;
      this.error = true;

      document.querySelectorAll('.questions__images-item').forEach(w => {
        w.classList.remove('correct');
      })
    }
  }






    // Fill listeners
    drag1.addEventListener('dragstart', (e) => this.dragStart(e));
    drag1.addEventListener('dragend', (e) => this.dragEnd(e));
    drag2.addEventListener('dragstart', (e) => this.dragStart(e));
    drag2.addEventListener('dragend', (e) => this.dragEnd(e));

    completeBtn.addEventListener('click', () => this.errorMessage());
    resetBtn.addEventListener('click', () => this.init());
}

let QuizGame = new dragQuizGame();


