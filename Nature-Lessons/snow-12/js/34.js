function game(){
    this.error = false;
    this.data = [];

    let items = document.querySelectorAll('.box-height');
    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');

    resetBtn.addEventListener('click', () => this.init());
	completedBtn.addEventListener('click', () => this.completGame());

    this.init = () => {
        $(items).removeClass('active');
        $(items).removeAttr('style');
        $('div.myparent').removeClass('myparent')
        this.data = []
    }

    this.searchCorrectAnswer = () => {
        items.forEach(w => {
             if(w.classList.contains('active') && w.getAttribute('data-answer') == "correct"){
                w.setAttribute('style', 'background: #a2dd6f');

             }
             
             if(w.classList.contains('active') && w.getAttribute('data-answer') == null){
                w.setAttribute('style', 'background: #dc6c85')
             } 
        })
    }


    $(items).click((e) => {
        if(e.target.classList.contains('box-height')){
            this.data.push(e.target.getAttribute('data-index'))
            $(e.target).addClass('active');
            e.target.parentElement.classList.add('myparent')
        }
    })

    this.completGame = () => {
        this.searchCorrectAnswer()
        this.succesPage()
    }

    this.succesPage = () => {
        if((this.data.length == 2) && (this.data[0] == "3" || this.data[0] == "6") && (this.data[1] == "3" || this.data[1] == "6")){
            location.href = "game-success-34.html"
        }
    }


}

const Game = new game()