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
        let loc = location.pathname;

        if(loc == "/Computer-Science/Computer_parts/games/C-1366-01-28.html" || loc == "/el.resursebi-front/Computer-Science/Computer_parts/games/C-1366-01-28.html") {
            location.href = "C-1366-01-28-success.html"

        } else if(loc == "/Computer-Science/Computer_parts/games/C-1366-01-31.html" || loc == "/el.resursebi-front/Computer-Science/Computer_parts/games/C-1366-01-31.html") {
            location.href = "C-1366-01-31-success.html"

        } else if(loc == "/Computer-Science/Computer_parts/games/C-1366-01-33.html" || loc == "/el.resursebi-front/Computer-Science/Computer_parts/games/C-1366-01-33.html") {
            location.href = "C-1366-01-33-success.html"

        } else if(loc == "/Computer-Science/Computer_parts/games/C-1366-01-35.html" || loc == "/el.resursebi-front/Computer-Science/Computer_parts/games/C-1366-01-35.html") {
            location.href = "C-1366-01-35-success.html"

        } else if(loc == "/Computer-Science/Computer_parts/games/C-1366-01-37.html" || loc == "/el.resursebi-front/Computer-Science/Computer_parts/games/C-1366-01-37.html") {
            location.href = "C-1366-01-37-success.html"
        }
    }

    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());

}

const naturegame = new natureGames();