function computerGames(){
    var checkmarkJS = document.querySelectorAll('.checkmarkJS');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');
    $(checkmarkJS).on('click', (e) => this.clickMe(e));


    this.clickMe = (e) => {
        checkmarkJS.forEach(element => {
            $(element).removeClass( "wrong")
            $(element).removeClass( "active")
        });
        e.target.classList.add('active');
    }

    this.completGame = () => {
        var count = 0;
        checkmarkJS.forEach(element => {
            if(element.classList.contains('active')){
                if(element.classList.contains('correctJS')){
                    $(element).removeClass( "active")
                    element.classList.add('correct');
                    count++;
                }
            }
            if((element.classList.contains('active'))){
                if((element.classList.contains('noCorrectJS'))){
                    $(element).removeClass( "active")
                    element.classList.add('wrong');
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
            $(element).removeClass( "wrong")
            $(element).removeClass( "active")
        });
        completedBtn.removeAttribute('disabled');
    }

    this.successPage = () => {
        if(window.location.href.includes("22.html")){
            location.href = 'game-success-22.html';
        }
        if(window.location.href.includes("23.html")){
            location.href = 'game-success-23.html';
        }
        if(window.location.href.includes("24.html")){
            location.href = 'game-success-24.html';
        }
        if(window.location.href.includes("25.html")){
            location.href = 'game-success-25.html';
        }
        
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
}





const computergame = new computerGames();