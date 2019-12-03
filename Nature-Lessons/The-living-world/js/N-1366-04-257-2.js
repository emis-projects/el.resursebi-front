function index2() {
    var btns = document.querySelectorAll('.checkmark')
    let answersParent = document.getElementById('answersParent');

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
                document.querySelector('#itIsCorrectPhoto img').setAttribute('src', '../../../img/gakvetilebi/buneba/lesson4/N-1366-04-260.svg')

                btns.forEach(btn => {
                    if (btn.getAttribute('data-answer') === null) {
                        btn.parentNode.parentNode.setAttribute('style', "display: none !important")
                        answersParent.setAttribute('style', "justify-content: center; align-items: center; display: flex")
                    }
                })

            }
            else {
                selected.classList.remove("selected")
                selected.classList.add('error')
            }

        }
        document.getElementById("completedGame").disabled = true
    })

    document.getElementById('resetBtn').addEventListener('click', function() {

        $('.checkmark').removeClass('error')
        $('.checkmark').removeClass('selected')
        $('.checkmark').removeClass('success')
        $('.answer-1, .answer-2, .answer-3').removeAttr('style')
        $('#answersParent').removeAttr('style')


        document.querySelector('#itIsCorrectPhoto img').setAttribute('src', '../../../img/gakvetilebi/buneba/lesson4/N-1366-04-257.svg')
        document.getElementById("completedGame").disabled = false
    })

}

index2()


