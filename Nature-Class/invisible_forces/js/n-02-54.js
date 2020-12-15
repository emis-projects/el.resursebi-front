const textBox = document.querySelectorAll('.n2-146-text-container');
const reset = document.getElementById('resetBtn');
const check = document.getElementById('completedGame');

// ყოველ ელემენტზე ევენთის მიბმა
// გასუფთავების ფუნქციის, მონიშვნის კლასსის გააქტიურება დაკლიკვისას.
textBox.forEach(elm => {
	elm.addEventListener('click', () => {
		init();
		elm.classList.add('selected');
	});
});

// მონიშნული პასუხის შემოწმება
check.addEventListener('click', (evt) => {
	for (let i = 0; i < textBox.length; i++) {
		if (textBox[i].classList.contains('selected') && textBox[i].dataset.check === 'true') {
			textBox[i].classList.remove('selected');
			textBox[i].classList.add('success');
			window.location.href = './game-success-55.html';
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
	init();
});

// გასუფთავება
function init() {
	textBox.forEach(elm => {
		elm.classList.remove('selected');
		elm.classList.remove('error');
		check.removeAttribute('disabled')
	});
}
