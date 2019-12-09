//კვების ბლოკი
function natureGames(){
    var checkmarkElements = document.querySelectorAll('.checkmark');
    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');
    var selected = false;

    for (const check of checkmarkElements) {
        check.addEventListener('click', (e) => this.clickElement(e));

    }

    this.clickElement = (e) => {
        checkmarkElements.forEach(element => {
            $(element).removeClass('selected');
            $(element).removeClass('error');

        });
        e.target.classList.add("selected")
    }


    this.init = () => {
        checkmarkElements.forEach(element => {
            $(element).removeClass('selected');
            $(element).removeClass('error');
            $(element).removeClass('success');
        });
    }

    this.completGame = () => {
        //et val = getAnswer();
        checkmarkElements.forEach(element => {
            var sel = element.className.includes('selected');
            var cor = element.className.includes('correct1');
            if(sel && cor){
                this.successPage()
            }
            if(sel && !cor){
                element.classList.add("error")
            }
        });
    }

    
    this.successPage = () => {
        location.href = 'success-page.html';
    }

    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());

}

const naturegame = new natureGames();