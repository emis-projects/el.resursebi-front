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

    this.randomize = () => {

        var uniqueArray = [];
        for (let i = 0; i < 100; i++) {
            let random1 = Math.floor(Math.random() * 10) + 1;
            let s = uniqueArray.filter(u => u == random1).length;
            if (s == 0) {
                uniqueArray.push(random1);
            }
            console.log('uniqueArray', uniqueArray)
            if (uniqueArray.length == 3) {
                break;
            }
            
        }


        imge.forEach(w => {
            uniqueArray.forEach(element => {
                if (element == w.getAttribute('id')) {
                    w.classList.add('keys1')
                }
            });
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        this.randomize();
    })


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
                if (!(element.classList.contains('keys1'))) {
                    element.classList.remove('correct')
                    element.classList.add('error')
                }
                if (element.classList.contains('keys1')) {
                    //element.classList.add('correct')
                    d++;
                    x1.style.display = 'block';
                    element.classList.remove('keys1')
                }
                if(d == 1){
                    x1.style.display = 'block';
                }
                if(d == 2){
                    x2.style.display = 'block';
                }
                if(d == 3){
                    x3.style.display = 'block';
                }

            }
        });
        if (d == 3) {
            console.log('yes');
            this.successPage();
        }
        if ((count == 9 && d == 0) || count == 11 || d == 3) {
            completedBtn.setAttribute('disabled', 'true');
            resetBtn.removeAttribute('disabled');
        }
    }


    this.successPage = () => {
        location.href = 'game-success-20.html';
    }

    this.init = (e) => {
        imge.forEach(element => {
            $(element).removeClass( "keys1" )
            console.log('element', element)
            resetBtn.setAttribute('disabled', 'true');
        });
        this.randomize();
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