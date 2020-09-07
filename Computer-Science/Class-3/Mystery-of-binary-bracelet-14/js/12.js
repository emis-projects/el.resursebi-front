var val;
function myfunc(e) {
    e = e || window.event;
    // var id = e.target.getAttribute('id');
    // var value = e.target.value;
    e.target.value = e.target.value.toUpperCase();
    if (e.target.value.length > 1) {
        e.target.value = e.target.value[1]
    }
    // if(id == 1){
    //     if(value == 'C'){
    //         value.style = '';
    //     }
    // }
}

function computerGames() {

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');
    var checkmarkJS = document.querySelectorAll('.checkmarkJS');



    cout = 0;
    this.errorPage = () => {
        checkmarkJS.forEach(element => {
            if (element.getAttribute('id') == 1 && element.value == 'C') {
                element.style.color = '#a1dd6f';
                cout++;
                return
            }
            else {
                element.style.color = '#dc6c85';
            }
            if (element.getAttribute('id') == 2 && element.value == 'O') {
                element.style.color = '#a1dd6f';
                cout++;
                return
            }
            else {
                element.style.color = '#dc6c85';
            }
            if (element.getAttribute('id') == 3 && element.value == 'D') {
                element.style.color = '#a1dd6f';
                cout++;
                return
            }
            else {
                element.style.color = '#dc6c85';
            }
            if (element.getAttribute('id') == 4 && element.value == 'E') {
                element.style.color = '#a1dd6f';
                cout++;
                return
            }
            else {
                element.style.color = '#dc6c85';
            }
            if (element.getAttribute('id') == 5 && element.value == 'I') {
                element.style.color = '#a1dd6f';
                cout++;
                return
            }
            else {
                element.style.color = '#dc6c85';
            }
            if (element.getAttribute('id') == 6 && element.value == 'S') {
                element.style.color = '#a1dd6f';
                cout++;
                return
            }
            else {
                element.style.color = '#dc6c85';
            }
            if (element.getAttribute('id') == 7 && element.value == 'F') {
                element.style.color = '#a1dd6f';
                cout++;
                return
            }
            else {
                element.style.color = '#dc6c85';
            }
            if (element.getAttribute('id') == 8 && element.value == 'U') {
                element.style.color = '#a1dd6f';
                cout++;
                return
            }
            else {
                element.style.color = '#dc6c85';
            }
            if (element.getAttribute('id') == 9 && element.value == 'N') {
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
        if (cout == 9) {
            location.href = 'game-success-12.html';
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