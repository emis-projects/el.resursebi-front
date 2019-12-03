function index1() {
    var btns = document.querySelectorAll('.checkmark')

    btns.forEach(btn => {
        btn.addEventListener('click', function(){
            btns.forEach(element => {
                element.classList.remove("selected")
            })
            this.classList.add('selected')
        })
    })

    
    document.querySelector('.completed__btn').addEventListener('click', function() {
        var selected =  document.querySelector('.checkmark.selected')
        if (selected) {

            if (selected.getAttribute('data-answer') === 'correct') {
                selected.classList.remove("selected")
                selected.classList.add('success') 
                document.querySelector('.col-5').childNodes[1].setAttribute('src', '../../../img/gakvetilebi/buneba/lesson4/N-1366-04-258.svg')

                btns.forEach(btn => {
                    if (btn.getAttribute('data-answer') === null) {
                        btn.parentNode.parentNode.style.visibility = 'hidden'
                    }
                    else {
                        btn.parentNode.parentNode.style.marginTop = '155px'
                    }
                })

            } else {
                selected.classList.remove("selected")
                selected.classList.add('error')
            }

        }
        document.getElementById("completedGame").disabled = true
    })

    document.getElementById('resetBtn').addEventListener('click', function() {

        btns.forEach(btn => {
            btn.classList.remove('selected')
            btn.classList.remove('error')
            btn.classList.remove('success')
            btn.parentNode.parentNode.removeAttribute('style')
        });
        
        document.querySelector('.col-5').childNodes[1].setAttribute('src', '../../../img/gakvetilebi/buneba/lesson4/N-1366-04-257.svg')
        document.getElementById("completedGame").disabled = false
    })

}

index1()


