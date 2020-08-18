function computerGames(){
    var checkmarkJS = document.querySelectorAll('.checkmarkJS');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');
    $(checkmarkJS).on('click', (e) => this.clickMe(e));


    this.clickMe = (e) => {
        checkmarkJS.forEach(element => {
            $(element).removeClass( "error")
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
                    element.classList.add('success')
                    count++;
                }
            }
            if((element.classList.contains('active'))){
                if((element.classList.contains('noCorrectJS'))){
                    $(element).removeClass( "active")
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
        });
        completedBtn.removeAttribute('disabled');
    }

    this.successPage = () => {
        if(window.location.href.includes("10.html")){
            location.href = 'game-success-10.html';
        }
        if(window.location.href.includes("11.html")){
            location.href = 'game-success-11.html';
        }
        if(window.location.href.includes("12.html")){
            location.href = 'game-success-12.html';
        }
        if(window.location.href.includes("13.html")){
            location.href = 'game-success-13.html';
        }
        if(window.location.href.includes("14.html")){
            location.href = 'game-success-14.html';
        }
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
}





const computergame = new computerGames();