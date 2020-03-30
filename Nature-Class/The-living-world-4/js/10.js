function natureGames() {
    // selected/error/success
    this.count = 0;
    var checkmarkElements = document.querySelectorAll('.checkmark');
    var resetBtn = document.getElementById('resetBtn');
    var completedGame = document.getElementById('completedGame');
    var answer = document.querySelectorAll('.answer');

    document.addEventListener('DOMContentLoaded', () => {
        let i = 1;
        checkmarkElements.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class') + i)
            i++;
        })
    })


    for (const check of checkmarkElements) {
        check.addEventListener('click', (e) => this.clickElement(e));
    }


    this.clickElement = (e) => {
        //debugger
        if(!completedGame.disabled){
            let existSelect = e.target.classList.contains('selected');
            if (this.count >=4 && !existSelect){
                return;
            }

            if(existSelect){
                $(e.target).removeClass('selected');
                this.count--;
            }
            else{
                e.target.classList.add("selected")
                this.count++;
            }
        }


    }

    this.init = () => {
        completedGame.disabled = false
        checkmarkElements.forEach(element => {
            $(element).removeClass('selected');
            $(element).removeClass('error');
            $(element).removeClass('success');
        });
        answer.forEach(element => {
            element.innerHTML = '';
        });
        this.count = 0;
    }

    this.complateGame = () => {
        var c = 0;
        checkmarkElements.forEach(element => {
            var sel = element.className.includes('selected');
            var cor = element.className.includes('correct1');

            if (sel && cor) {
                element.classList.add("success")
                answer[c].innerHTML = c + 1
                c++;
                if (c == 4) {
                    this.successPage();
                }
            }
            if (sel && !cor) {
                element.classList.add("error")
            }

        });
        completedGame.disabled = true

    }

    this.successPage = () => {
        //location.href = 'N-1366-04-244-success.html';
        location.href = 'game-success-10.html';
    }


    //button events
    resetBtn.addEventListener('click', () => this.init());
    completedGame.addEventListener('click', () => this.complateGame());
}

const naturegame = new natureGames();
