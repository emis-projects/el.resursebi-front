function computerGames(){
    var checkmark = document.querySelectorAll('.checkmark');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');
    $(checkmark).on('click', (e) => this.clickMe(e));


    this.clickMe = (e) => {
        checkmark.forEach(element => {
            $(element).removeClass( "error")
            $(element).removeClass( "selectedPurple")
            element.style = '';
        });
        e.target.classList.add('selectedPurple');
    }

    this.completGame = () => {
        var count = 0;
        checkmark.forEach(element => {
            if(element.classList.contains('selectedPurple')){
                console.log('selectedPurple', element.classList.contains('correct'))
                if(element.classList.contains('correct')){
                    count++;
                }
            }
            if((element.classList.contains('selectedPurple'))){
                if((element.classList.contains('noCorrect'))){
                    count = 0;
                    $(element).removeClass( "selectedPurple")
                    element.classList.add('error');
                }
            }
        });
        

        if (count == 1) {
            this.successPage();
        }


        completedBtn.setAttribute('disabled', 'true');
    }



    this.init = (e) =>{
        checkmark.forEach(element => {
            $(element).removeClass( "error")
            $(element).removeClass( "selectedPurple")
            element.style = '';
        });
        completedBtn.removeAttribute('disabled');
    }

    this.successPage = () => {
        location.href = 'game-success-9.html';
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
}





const computergame = new computerGames();