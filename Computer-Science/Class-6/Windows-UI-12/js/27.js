function computerGames(){
    var checkmarkJS = document.querySelectorAll('.checkmarkJS');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');
    $(checkmarkJS).on('click', (e) => this.clickMe(e));


    this.clickMe = (e) => {
        checkmarkJS.forEach(element => {
            $(element).removeClass( "error")
            $(element).removeClass( "active")
            element.style = '';
        });
        e.target.classList.add('active');
        e.target.style = 'background: #947DCE'
    }

    this.completGame = () => {
        var count = 0;
        checkmarkJS.forEach(element => {
            if(element.classList.contains('active')){
                if(element.classList.contains('correctJS')){
                    $(element).removeClass( "active")
                    element.style = '';
                    element.classList.add('success');
                    count++;
                }
            }
            if((element.classList.contains('active'))){
                if((element.classList.contains('noCorrectJS'))){
                    $(element).removeClass( "active")
                    element.style = '';
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
        checkmarkJS.forEach(element => {
            $(element).removeClass( "error")
            $(element).removeClass( "active")
            element.style = '';
        });
        completedBtn.removeAttribute('disabled');
    }

    this.successPage = () => {
        location.href = 'game-success-26.html';
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
}





const computergame = new computerGames();