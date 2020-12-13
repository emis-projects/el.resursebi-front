function dragQuizGame(){
  this.answer = false;
  this.error = true;
  this.submitError = false;


  // variables
  const drags = document.querySelectorAll('.dot_wrapper .draggable__answer__btns');
  const empties = document.querySelectorAll('.question__dot');
  const completeBtn = document.getElementById('completedGame');
  const wrapper = document.querySelector('.dot_wrapper');
  let items = document.querySelectorAll('.questions__images-item');
  const resetBtn = document.getElementById('resetBtn');


  var myArray = [];

  for(var i = 0; i < items.length; i++ ){
    myArray.push(items[i])
  }


  $(() => {
    // $(document).on("dragstart", "button.cloned", (e) => this.dragStart(e));
    // $(document).on("dragend", "button.cloned", (e) => this.dragEnd(e));
    $(document).bind("dragstart", "button.cloned", (e) => this.dragStart(e));
    $(document).bind("dragend", "button.cloned", (e) => this.dragEnd(e));
  });



  // Fill listeners
  drags.forEach(w => {
    w.addEventListener('dragstart', (e) => this.dragStart(e));
    w.addEventListener('dragend', (e) => this.dragEnd(e));
  })




  // Loop through empty boxes and add listeners
  for (const empty of empties) {
    empty.addEventListener('dragover', (e) => this.dragOver(e));
    empty.addEventListener('dragover', (e) => this.dragEnter(e));
    empty.addEventListener('drop', (e) => this.dragDrop(e));
  }




  // init
  this.init = () => {
      this.answer = false;
      this.error = true;
      this.submitError = false;


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


    $(empties).removeClass('correct')

    wrapper.classList.remove('error');

    wrapper.querySelectorAll('.draggable__answer__btns').forEach(w => {
      w.removeAttribute('disabled')
    });

    $(items).removeAttr('data-answer');

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

    var cloned = e.target.cloneNode(true);

    cloned.classList.add('cloned');

    $(empties).removeClass('noShadow');
    $(empties).addClass('Shadow');

    wrapper.insertBefore(cloned, e.target);

    setTimeout(() => {
      e.target.className = "draggedElement"
    }, 0);


  }



  // drag end
  this.dragEnd = e => {
    $(empties).addClass('noShadow');
    $(empties).removeClass('Shadow');

    let elClassName = e.target.getAttribute('data-class');

    e.target.className = elClassName;

    if(wrapper.querySelector('.draggedElement')){
      wrapper.querySelector('.draggedElement').remove();
    }
  }


  this.dragdrop = e => { e.preventDefault();
    e.target.appendChild(document.querySelector('button.draggedElement'))

    if(e.target.childNodes[0].className == "draggedElement"){
      var myButton = e.target.childNodes[0];

    } else if(e.target.childNodes[1].className == "draggedElement"){
      var myButton = e.target.childNodes[1];
    }

    let myClass = myButton.dataset.class;

    myButton.className = myClass;

    if(e.target.childNodes[1]){
      e.target.firstChild.remove();
    }

    $(empties).addClass('noShadow');
    $(empties).removeClass('Shadow');

    setTimeout(() => {
      this.checkifIsTrue(e)
    }, 0)
  }


 this.checkifIsTrue = e => {
   let parent = e.target.parentElement;

    let img = parent.querySelector('.mainImage');
    let circle = parent.querySelector('.draggable__answer__btns');


    if(img.getAttribute('data-weather') == circle.getAttribute('data-weather')){
      parent.setAttribute('data-answer', 'correct');

    } else {
      this.error = true;
      parent.setAttribute('data-answer', 'incorrect');
    }

    let el = myArray.every(this.checkEveryElement)

    if(el == true){
      this.answer = true;
      this.error = false;
    } else {
      this.error = true;
      this.answer = false;
    }
  }


  this.checkEveryElement = (element) => {
    return element.getAttribute('data-answer') == "correct";
  }


  // error
  this.errorMessage = () => {
    myArray.forEach(w => {
      if(this.error == true && w.getAttribute('data-answer') !== 'correct'){

        let img = document.createElement('img');

        img.classList.add('errorImg');

        if(w.className == "questions__images-item" || "questions__images-item questions__image_wrapper_box-item col-4"){
          w.querySelector('.question__dot').classList.add('error');
        }

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
    if(location.pathname == "/Art-Lessons/color_story/games/1366-47.html" || location.pathname == "/Art-Class/color_story/19.html" || location.pathname == "/el.resursebi-front/Art-Class/color_story/19.html" ){
      //location.href = '1366-47-success.html';
        location.href = 'game-success-19.html';

    } else if(location.pathname == "/Art-Lessons/color_story/games/1366-48.html"  || location.pathname == "/Art-Class/color_story/20.html" || location.pathname == "/el.resursebi-front/Art-Class/color_story/20.html"){
      //location.href = '1366-48-success.html';
        location.href = 'game-success-20.html';

    } else if(location.pathname == "/el.resursebi-front/Art-Lessons/color_story/games/1366-47.html") {
      location.href = '1366-47-success.html';

    } else if(location.pathname == "/el.resursebi-front/Art-Lessons/color_story/games/1366-48.html"){
      location.href = '1366-48-success.html';

    }
	}


  // after submit
  this.completGame = () => {
    items.forEach(w => {
      if(this.submitError === false && this.error === false && this.answer == true){
        this.successPage();

      } else if(this.submitError == true || this.error == true) {
        this.errorMessage();
      }
    })
  }


  completeBtn.addEventListener('click', () => this.completGame());
  resetBtn.addEventListener('click', () => this.init());
}

const QuizGame = new dragQuizGame();
