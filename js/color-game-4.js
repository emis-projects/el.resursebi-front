function dragQuizGame(){
  this.firstAnswer = false;
  this.secondAnswer = false;
  this.error = false;


  const drag1 = document.getElementById('drag1');
  const drag2 = document.getElementById('drag2');
  const empties = document.querySelectorAll('.question__dot');


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
 

    this.completedGame = () => {
      console.log('completed');
    }



  this.checkifIsTrue = (e) => {
    let parent = e.target.parentElement;

    if(parent.querySelector('img').getAttribute('data-weather') == e.target.firstElementChild.getAttribute('data-weather')){
      this.firstAnswer = true;
      this.secondAnswer = true;

    } else {
      this.firstAnswer = false;
      this.secondAnswer = false;
    }
  }





    // Fill listeners
    drag1.addEventListener('dragstart', (e) => this.dragStart(e));
    drag1.addEventListener('dragend', (e) => this.dragEnd(e));
    drag2.addEventListener('dragstart', (e) => this.dragStart(e));
    drag2.addEventListener('dragend', (e) => this.dragEnd(e));

    document.getElementById('completedGame').addEventListener('click', () => this.completedGame());
}

let QuizGame = new dragQuizGame();


