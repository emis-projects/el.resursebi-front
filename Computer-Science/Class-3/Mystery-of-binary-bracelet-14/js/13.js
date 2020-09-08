function myfunc(e) {
    e = e || window.event;
    e.target.value = e.target.value.toUpperCase();
    if (e.target.value.length > 1) {
        e.target.value = e.target.value[1]
    }
}

function computerGames() {

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');
    var checkmarkJS = document.querySelectorAll('.checkmarkJS');



    cout = 0;
    this.errorPage = () => {
        checkmarkJS.forEach(element => {
            if (element.getAttribute('id') == 1 && element.value == 'B') {
                element.style.color = '#a1dd6f';
                cout++;
                return
            }
            else {
                element.style.color = '#dc6c85';
            }
            if (element.getAttribute('id') == 2 && element.value == 'A') {
                element.style.color = '#a1dd6f';
                cout++;
                return
            }
            else {
                element.style.color = '#dc6c85';
            }
            if (element.getAttribute('id') == 3 && element.value == 'C') {
                element.style.color = '#a1dd6f';
                cout++;
                return
            }
            else {
                element.style.color = '#dc6c85';
            }
        });
    }

    this.completGame = () => {
        this.errorPage();
        if (cout == 3) {
            location.href = 'game-success-13.html';
        }
    }


    this.init = (e) => {
        cout = 0;
        checkmarkJS.forEach(element => {
            element.value = null;
            element.style.color = '';
        });
    }

    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
}

const computergame = new computerGames();