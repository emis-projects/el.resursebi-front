function computerGames() {
    var imge = document.querySelectorAll('.imge');


    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');
    $(imge).on('click', (e) => this.clickMe(e));
    var count = 1;
    var d = 0;
    var x1 = document.getElementById('myDIV1');
    var x2 = document.getElementById('myDIV2');
    var x3 = document.getElementById('myDIV3');
    var count1 = document.getElementById('count1');
    resetBtn.setAttribute('disabled', 'true');


    this.clickMe = (e) => {

        imge.forEach(element => {
            element.classList.remove('correct')
            element.classList.remove('error')
        });
        e.target.classList.add('correct');
    }

    this.completGame = () => {
        imge.forEach(element => {
            if (element.classList.contains('correct')) {
                count1.textContent = count;
                count++;
                if (!(element.classList.contains('keys1')) && !(element.classList.contains('keys2')) && !(element.classList.contains('keys3'))) {
                    element.classList.remove('correct')
                    element.classList.add('error')
                }
                if (element.classList.contains('keys1')) {
                    //element.classList.add('correct')
                    d++;
                    x1.style.display = 'block';
                    element.classList.remove('keys1')
                }
                if (element.classList.contains('keys2')) {
                    x2.style.display = 'block';
                    d++;
                    element.classList.remove('keys2')
                }
                if (element.classList.contains('keys3')) {
                    x3.style.display = 'block';
                    d++;
                    element.classList.remove('keys3')
                }
            }
        });
        if(d == 3){
            console.log('yes');
            this.successPage();
        }
        if ((count == 9 && d == 0) || count == 11 || d == 3) {
            completedBtn.setAttribute('disabled', 'true');
            resetBtn.removeAttribute('disabled');
        }
    }


    this.successPage = () => {
        location.href = 'game-success-21.html';
    }

    this.init = (e) => {
        imge.forEach(element => {
            if (element.classList.contains('keys11') && !element.classList.contains('keys1')) {
                element.classList.add('keys1')
            }
            if (element.classList.contains('keys22') && !element.classList.contains('keys2')) {
                element.classList.add('keys2')
            }
            if (element.classList.contains('keys33') && !element.classList.contains('keys3')) {
                element.classList.add('keys3')
            }
        });
        x1.style.display = 'none';
        x2.style.display = 'none';
        x3.style.display = 'none';
        count1.textContent = 0;
        count = 1;
        d = 0;
        imge.forEach(element => {
            element.classList.remove('correct')
            element.classList.remove('error')
        });
        completedBtn.removeAttribute('disabled');
    }



    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
}



const computergame = new computerGames();