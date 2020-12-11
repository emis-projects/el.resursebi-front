const textBox = document.querySelectorAll('.N-1366-06-24-btn-padding');
const reset = document.getElementById('resetBtn');
const check = document.getElementById('completedGame');

// ყოველ ელემენტზე ევენთის მიბმა
// გასუფთავების ფუნქციის, მონიშვნის კლასსის გააქტიურება დაკლიკვისას.
textBox.forEach(elm => {
    elm.addEventListener('click', () => {
        initFunc();
        elm.classList.add('selected');
    });
});

// მონიშნული პასუხის შემოწმება
check.addEventListener('click', (evt) => {
    for (let i = 0; i < textBox.length; i++) {
        if (textBox[i].classList.contains('selected') && textBox[i].dataset.check === 'true') {
            textBox[i].classList.remove('selected');
            textBox[i].classList.add('success');
            window.location.href = './N-1366-06-24-success.html';
        } else if (textBox[i].classList.contains('selected')) {
            textBox[i].classList.remove('selected');
            textBox[i].classList.add('error');
        }
    }
    evt.target.setAttribute('disabled', true);
});

// გასუფთავების გამოძახება
reset.addEventListener('click', () => {
    check.removeAttribute('disabled');
    initFunc();
});

// გასუფთავება
function initFunc() {
    textBox.forEach(elm => {
        elm.classList.remove('selected');
        elm.classList.remove('error');
    });
}