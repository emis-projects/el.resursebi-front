function artGame(){
    var checkmark = document.querySelectorAll('.checkmark');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');
    $(checkmark).on('click', (e) => this.clickMe(e));


    this.clickMe = (e) => {
        checkmark.forEach(element => {
            $(element).removeClass( "error")
            $(element).removeClass( "active")
            element.style = '';
        });
        e.target.classList.add('active');
        if(e.target.classList.contains('active')){
            e.target.style = "background: #7fd1d8";

        }
    }

    this.completGame = () => {
        var count = 0;
        // /console.log('complate')
        checkmark.forEach(element => {
            if(element.classList.contains('active')){
                console.log('active', element.classList.contains('correct'))
                if(element.classList.contains('correct')){
                    //console.log('complate');
                    count++;
                }
            }
            if((element.classList.contains('active'))){
                if((element.classList.contains('noCorrect'))){
                    //console.log(element.parentElement)
                    count = 0;
                    element.style = "background:#dc6c85";
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
            $(element).removeClass( "active")
            element.style = '';
        });
        //$( "p" ).removeClass( "error" )
        completedBtn.removeAttribute('disabled');
    }

    this.successPage = () => {
        location.href = 'game-success-18.html';
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
}

const artgame = new artGame();