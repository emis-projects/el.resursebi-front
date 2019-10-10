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
    completeBtn.setAttribute('disabled', '');
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
      e.target.className += ' hovered';
    }
    
    this.dragLeave = (e) => {
      e.target.className = 'question__dot';
    }
    
    this.dragDrop = (e) => {
      e.target.className = 'question__dot';
      e.target.append(document.querySelector('div.draggedElement'));

      setTimeout(() => {
        this.checkifIsTrue(e)
      }, 0)
    }
 


  this.errorMessage = () => {
    document.querySelectorAll('.questions__images-item').forEach(w => {

      if(w.className == "questions__images-item" || this.firstAnswer !== true && this.secondAnswer !== true){
        // fail 
        
        let img = document.createElement('img');

        img.classList.add('errorImg');

        img.setAttribute('src', '../../img/gakvetilebi/xelovneba/color-game/x.svg');

        w.querySelector('.question__dot').appendChild(img);

        completeBtn.setAttribute('disabled', 'true')

      } else if(w.classList.contains('correct')) {
        // success
        location.href = "1366-240.html"
      }
    })
  }
 
    
    




  this.checkifIsTrue = (e) => {
    let parent = e.target.parentElement;
    console.log(e.target);

    

    let img = parent.querySelector('.mainImage');
    let circle = parent.querySelector('.draggable__answer__btns');
 

    if(img.getAttribute('data-weather') == circle.getAttribute('data-weather')){
      this.firstAnswer = true;

      if(this.firstAnswer = true){
        this.secondAnswer = true;
        parent.classList.add('correct')
      }
    } else {
      this.secondAnswer = false;
      this.firstAnswer = false;
      this.error = true;
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


