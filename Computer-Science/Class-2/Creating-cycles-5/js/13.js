function computerGames(){
    var checkmar = document.querySelectorAll('.checkmar');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');
    $(checkmar).on('click', (e) => this.clickMe(e));


    this.clickMe = (e) => {
        e.target.classList.add('selectedPurple');
        
    }

    this.completGame = () => {
        var count = 0;
        var isError = false;
        checkmar.forEach(element => {
            if(element.classList.contains('selectedPurple')){
                if(element.classList.contains('correct')){
                    element.style = "background: #a1dd6f";
                    count++;
                }
                if((element.classList.contains('noCorrect'))){
                    isError = true;
                    $(element).removeClass( "selectedPurple")
                    element.classList.add('error');
                }
            }
        });
        

        if (count == 2 && !isError) {
            this.successPage();
        }


        completedBtn.setAttribute('disabled', 'true');
    }



    this.init = (e) =>{
        checkmar.forEach(element => {
            $(element).removeClass( "error")
            $(element).removeClass( "selectedPurple")
            element.style = '';
        });
        completedBtn.removeAttribute('disabled');
    }

    this.successPage = () => {
        location.href = 'game-success-13.html';
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
}





const computergame = new computerGames();