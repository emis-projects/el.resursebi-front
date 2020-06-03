function computerGames(){
    var checkmarkJS = document.querySelectorAll('.checkmarkJS');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');
    $(checkmarkJS).on('click', (e) => this.clickMe(e));


    this.clickMe = (e) => {
        // checkmarkJS.forEach(element => {
        //     $(element).removeClass( "error")
        //     $(element).removeClass( "selectedPurple")
        //     element.style = '';
        // });
       
       
       
        e.target.classList.add('selectedPurple');
        e.target.style = "background: #947DCE";
        if(e.target.getAttribute('data-mark')== 1 && document.getElementById('2').classList.contains('selectedPurple')){
            document.getElementById('2').classList.remove('selectedPurple')
            document.getElementById('2').style = '';
        }
        if(e.target.getAttribute('data-mark')== 2 && document.getElementById('1').classList.contains('selectedPurple')){
            document.getElementById('1').classList.remove('selectedPurple')
            document.getElementById('1').style = '';
        }
        if(e.target.getAttribute('data-mark')== 3 && document.getElementById('4').classList.contains('selectedPurple')){
            document.getElementById('4').classList.remove('selectedPurple')
            document.getElementById('4').style = '';
        }
        if(e.target.getAttribute('data-mark')== 4 && document.getElementById('3').classList.contains('selectedPurple')){
            document.getElementById('3').classList.remove('selectedPurple')
            document.getElementById('3').style = '';
        }
        if(e.target.getAttribute('data-mark')== 5 && document.getElementById('6').classList.contains('selectedPurple')){
            document.getElementById('6').classList.remove('selectedPurple')
            document.getElementById('6').style = '';
        }
        if(e.target.getAttribute('data-mark')== 6 && document.getElementById('5').classList.contains('selectedPurple')){
            document.getElementById('5').classList.remove('selectedPurple')
            document.getElementById('5').style = '';
        }
        if(e.target.getAttribute('data-mark')== 7 && document.getElementById('8').classList.contains('selectedPurple')){
            document.getElementById('8').classList.remove('selectedPurple')
            document.getElementById('8').style = '';
        }
        if(e.target.getAttribute('data-mark')== 8 && document.getElementById('7').classList.contains('selectedPurple')){
            document.getElementById('7').classList.remove('selectedPurple')
            document.getElementById('7').style = '';
        }



    }

    this.completGame = () => {
        var count = 0;
        checkmarkJS.forEach(element => {
            if(element.classList.contains('selectedPurple')){
                if(element.classList.contains('correctJS')){
                    $(element).removeClass( "selectedPurple")
                    element.style = '';
                    element.classList.add('active');
                    count++;
                }
            }
            if((element.classList.contains('selectedPurple'))){
                if((element.classList.contains('noCorrectJS'))){
                    $(element).removeClass( "selectedPurple")
                    element.style = '';
                    element.classList.add('wrong');
                }
            }
        });
        

        if (count == 4) {
            this.successPage();
        }


        completedBtn.setAttribute('disabled', 'true');
    }



    this.init = (e) =>{
        checkmarkJS.forEach(element => {
            $(element).removeClass( "active")
            $(element).removeClass( "wrong")
            $(element).removeClass( "selectedPurple")
            element.style = '';
        });
        completedBtn.removeAttribute('disabled');
    }

    this.successPage = () => {
        location.href = 'game-success-8.html';
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
}





const computergame = new computerGames();