const textBox = document.querySelectorAll('.n2-146-text-container');
const check = document.getElementById('resetBtn');
const reset = document.getElementById('completedGame');


textBox.forEach(elm => {
	elm.addEventListener('click', () => {
		elm.classList.add('selected')
	})
});



function init() {
	textBox.classList.remove('selected')
	console.log(object);
}