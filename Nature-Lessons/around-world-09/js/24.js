function natureGame(){
    this.data = [];
    this.error = false;

    let btns = document.querySelectorAll('.select_dot');
    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');

    // events 
    $(btns).click((e) => this.selectedBtn(e))
    resetBtn.addEventListener('click', () => this.init());
	completedBtn.addEventListener('click', () => this.completGame());



    this.init = () => {
        $(btns).removeClass('active');
        $(btns).removeClass('success');
        $(btns).removeClass('error');

        this.error = false;
        this.data = [];
    }

    this.selectedBtn = e => {
        if(e.target.classList.contains('active')){
            e.target.classList.remove('active');

        } else {
            $(e.target).addClass('active')
            this.data.push(e.target.getAttribute('data-index'))
        }

    }


    this.completGame = () => {
        document.querySelectorAll('.select_dot').forEach(w => {
            if(w.classList.contains('active') && !w.getAttribute('data-correct')){
                w.classList.add('error')
                w.classList.remove('active')
                this.error = true;
                
            } else if(w.classList.contains('active') && w.getAttribute('data-correct')) {
                w.classList.add('success')
                w.classList.remove('active')

                this.succesPage()
            }
        })
    }


    this.succesPage = () => {
        if(this.data.length == 6 && this.error == false){
            location.href = "game-success-24.html"
        }
    }
}   

const game = new natureGame();