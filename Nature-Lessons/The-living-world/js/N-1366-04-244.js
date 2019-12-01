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
        let existSelect = e.target.classList.contains('selected');
        let existError = e.target.classList.contains('error');
        let existSuccess = e.target.classList.contains('success');
       
        if(existSelect || existError || existSuccess){
             $(e.target).removeClass('selected');
             $(e.target).removeClass('error');
             $(e.target).removeClass('success');

             this.count--;
        }
        else{
            if (this.count >= 4){
                return;
            }
            e.target.classList.add("selected")
            this.count++;
        }
        
    }

    this.init = () => {
        // $(mydrag).removeClass('errorParent');
        // $('.after_parent').removeClass('error')
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

    }

    this.successPage = () => {
        location.href = 'success-page.html';
    }


    //button events
    resetBtn.addEventListener('click', () => this.init());
    completedGame.addEventListener('click', () => this.complateGame());
}

const naturegame = new natureGames();





