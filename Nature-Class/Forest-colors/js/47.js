function n136603264(){
    this.error = true;

    // variables
    const elements = document.querySelectorAll('.custom_radioButton_container .checkmark');
    const completeBtn = document.getElementById('completedGame');''
    const resetBtn = document.getElementById('resetBtn');


    // listners
    completeBtn.addEventListener('click', () => this.completGame());
    resetBtn.addEventListener('click', () => this.init());


    var myArray = [];

    for(var i = 0; i < elements.length; i++ ){
      myArray.push(elements[i])
    }


    this.init = () => {
        $(elements).removeClass('error')
        $(elements).removeClass('selected')
        this.error = true;

        completeBtn.removeAttribute('disabled')
        completeBtn.setAttribute('style', 'cursor: default')
    }


    elements.forEach(w => {
        w.addEventListener('click', (e) => {
            this.clearOtherElements()
    
            e.target.classList.add('selected')

            if(e.target.parentElement.getAttribute('data-answer') == "correct"){
                this.error = false

            } else {
                this.error = true
            }
        })
    });
    
    
    this.clearOtherElements = function() {
        $(elements).removeClass('error')
        $(elements).removeClass('selected')
    }



    // after submit 
    this.completGame = () => {
        if(this.error == true) {
            document.querySelector('.custom_radioButton_container .checkmark.selected').classList.add('error')
            document.querySelector('.custom_radioButton_container .checkmark.selected').classList.remove('selected')
            
            completeBtn.setAttribute('disabled', true)
            completeBtn.setAttribute('style', 'cursor: default')

        } else {
            location.href = 'N-1366-03-264-success.html'
        }
    }
}


const n136603264game = new n136603264()