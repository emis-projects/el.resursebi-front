function computerGames(){

const checkBox = document.querySelectorAll(".cs-3-13-div-5-img-click-btn");
var completedBtn = document.getElementById('completedGame');
var resetBtn = document.getElementById('resetBtn');

let count = 0;
let list = [];

$(checkBox).on('click', (e) => this.clickMe(e));


this.clickMe = (e) => {
  if(e.target.classList.contains('active') || e.target.classList.contains('error')) {
      e.target.classList.remove('active')
      e.target.classList.remove('error')
      e.target.removeAttribute('style')
  } else {
      e.target.classList.add('active');
  }
}


this.completGame = () => {
  var count = 0;
  var isError = false;

  checkBox.forEach(element => {
      if(element.classList.contains('active')){
          if(element.classList.contains('correct')){
              element.style = "background: #a1dd6f";
              count++;
          }
          if((element.classList.contains('noCorrect'))){
              isError = true;
              $(element).removeClass( "active")
              element.classList.add('error');
          }
      }
  });
  

  if (count == 4 && !isError) {
      this.successPage();
  }

  completedBtn.setAttribute('disabled', 'true');
}

this.successPage = () => {
  location.href = 'game-success-5.html';
}

this.init = (e) =>{
  checkBox.forEach(element => {
      $(element).removeClass( "error")
      $(element).removeClass( "active")
      $(element).removeAttr('style')
  });
  completedBtn.removeAttribute('disabled');
}

this.successPage = () => {
  location.href = 'game-success-5.html';
}


resetBtn.addEventListener('click', () => this.init());
completedBtn.addEventListener('click', () => this.completGame());


}


const computergame = new computerGames();