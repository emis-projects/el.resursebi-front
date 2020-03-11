function natureGames() {
    var btn = document.querySelectorAll('.btn');
    var imge = document.querySelector('.img-fluid')

    $(btn).on('click', (e) => this.clickMe(e));


    this.clickMe = (e) => {
        btn.forEach(element => {
            element.classList.remove('active')
        });
        e.target.classList.add('active');
        if(e.target.classList.contains('active')){
            if(e.target.getAttribute('data-btn') == 1){
                imge.src = '../../img/gakvetilebi/buneba/snow-12/1-mdgomareoba.svg';
            }
            if(e.target.getAttribute('data-btn') == 2){
                imge.src = '../../img/gakvetilebi/buneba/snow-12/2-mdgomareoba.svg';
            }
            if(e.target.getAttribute('data-btn') == 3){
                imge.src = '../../img/gakvetilebi/buneba/snow-12/3-mdgomareoba.svg';
            }
            if(e.target.getAttribute('data-btn') == 4){
                imge.src = '../../img/gakvetilebi/buneba/snow-12/4-mdgomareoba.svg';
            }
            if(e.target.getAttribute('data-btn') == 5){
                imge.src = '../../img/gakvetilebi/buneba/snow-12/5-mdgomareoba.svg';
            }
        }
    }
}

const naturegame = new natureGames();


