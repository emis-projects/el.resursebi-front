function computerGames(){
    var checkmark = document.querySelectorAll('.checkmark');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');
    $(checkmark).on('click', (e) => this.clickMe(e));


    this.clickMe = (e) => {
        // checkmark.forEach(element => {
        //     $(element).removeClass( "error")
        //     $(element).removeClass( "active")
        //     element.style = '';
        // });
        e.target.classList.add('active');
    }

    this.completGame = () => {
        var count = 0;
        var isError = false;
        checkmark.forEach(element => {
            if(element.classList.contains('active')){
                if(element.classList.contains('correct')){
                    $(element).removeClass( "active")
                    element.classList.add('success');
                    count++;
                }
            }
            if((element.classList.contains('active'))){
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



    this.init = (e) =>{
        checkmark.forEach(element => {
            $(element).removeClass( "error")
            $(element).removeClass( "success")
            $(element).removeClass( "active")
            //element.style = '';
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