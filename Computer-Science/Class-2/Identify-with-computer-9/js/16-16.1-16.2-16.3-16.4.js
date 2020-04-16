function computerGames(){
    var checkmark = document.querySelectorAll('.checkmark');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');
    $(checkmark).on('click', (e) => this.clickMe(e));


    this.clickMe = (e) => {
        checkmark.forEach(element => {
            $(element).removeClass( "error")
            $(element).removeClass( "circle-fill")
            element.style = '';
        });
        e.target.classList.add('circle-fill');
    }

    this.completGame = () => {
        var count = 0;
        checkmark.forEach(element => {
            if(element.classList.contains('circle-fill')){
                if(element.classList.contains('correct')){
                    $(element).removeClass( "circle-fill")
                    element.style = "background: #a1dd6f";
                    count++;
                }
            }
            if((element.classList.contains('circle-fill'))){
                if((element.classList.contains('noCorrect'))){
                    $(element).removeClass( "circle-fill")
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
            $(element).removeClass( "circle-fill")
            element.style = '';
        });
        completedBtn.removeAttribute('disabled');
    }

    this.successPage = () => {
        if(window.location.href.includes("16.html")){
            location.href = 'game-success-16.html';
        }
        if(window.location.href.includes("16-1.html")){
            location.href = 'game-success-16-1.html';
        }
        if(window.location.href.includes("16-2.html")){
            location.href = 'game-success-16-2.html';
        }
        if(window.location.href.includes("16-3.html")){
            location.href = 'game-success-16-3.html';
        }
        if(window.location.href.includes("16-4.html")){
            location.href = 'game-success-16-4.html';
        }
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
}





const computergame = new computerGames();