var colorsRainbow = new rainbow();


// rainbow game 
function rainbow(){
	this.color = null;
	this.index = 0;
	this.error = false;
	this.correctAnswer = []

	var line = document.querySelectorAll('.rainbow--line');

	this.init = () => {
		this.index = 0;
		this.color = null;
		this.error = false;
		this.correctAnswer = [];
		
		document.querySelectorAll('.rainbow--line').forEach(w => {
			w.setAttribute('fill', '#fff');
			w.setAttribute('stroke', '#000');
			w.setAttribute('stroke-width', '1px');
			w.setAttribute('style', 'opacity: 1');
		})

		rainbowBtns.forEach(b => {
			b.classList.add('opacity-5');
			b.classList.remove('opacity-1');
			b.parentElement.classList.add('cursor-pointer');
		})
	}


	this.paint = function(color, e) {
		this.color = color;
		this.index++;
	
		
		let first = document.querySelector('.rainbow--line--first'),
			second = document.querySelector('.rainbow--line--second'),
			third = document.querySelector('.rainbow--line--third'),
			fourth = document.querySelector('.rainbow--line--fourth'),
			fifth = document.querySelector('.rainbow--line--fifth'),
			sixth = document.querySelector('.rainbow--line--sixth'),
			seventh = document.querySelector('.rainbow--line--seventh');
			

		
		if(first.getAttribute('fill') == '#fff'){
			first.setAttribute('fill', this.color);
			first.setAttribute('stroke', this.color);
			
		} else if(second.getAttribute('fill') == '#fff'){
			second.setAttribute('fill', this.color);
			second.setAttribute('stroke', this.color);

		} else if(third.getAttribute('fill') == '#fff'){
			third.setAttribute('fill', this.color);
			third.setAttribute('stroke', this.color);
			
		} else if(fourth.getAttribute('fill') == '#fff'){
			fourth.setAttribute('fill', this.color);
			fourth.setAttribute('stroke', this.color);
			
		} else if(fifth.getAttribute('fill') == '#fff'){
			fifth.setAttribute('fill', this.color);
			fifth.setAttribute('stroke', this.color);
			
		} else if(sixth.getAttribute('fill') == '#fff'){
			sixth.setAttribute('fill', this.color);
			sixth.setAttribute('stroke', this.color);
			
		} else if(seventh.getAttribute('fill') == '#fff'){
			seventh.setAttribute('fill', this.color);
			seventh.setAttribute('stroke', this.color);
		}

		this.correctAnswer.push(parseInt(e.getAttribute('data-index')));

		if(this.correctAnswer.length !== 0){
			let lastElement = this.correctAnswer.slice(-1)[0];
			let lastlastElement = this.correctAnswer.length - 1;
			
			if(lastElement - lastlastElement !== 1 ){
				this.error = true;
			}
		}
	}


	// error page 
	this.errorPage = (e) => {
		document.querySelectorAll('.cls-2, .cls-3, .cls-1').forEach(w => {
			w.setAttribute('style', 'opacity: 0.5');
		})

		line.forEach(l => {
			var svg = document.querySelectorAll('g.error'); //Get svg element

			var newElement = document.createElement("svg"); //Create a path in SVG's namespace
			newElement.setAttribute('aria-hidden', 'true');
			newElement.setAttribute('focusable', 'false');
			newElement.setAttribute('data-prefix', 'fas');
			newElement.setAttribute('data-icon', 'times');
			newElement.setAttribute('class', 'svg-inline--fa fa-times fa-w-11');
			newElement.setAttribute('role', 'img');
			newElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
			newElement.setAttribute('viewBox', '0 0 352 512');

			let d = document.createElement('path');
			d.setAttribute("d", "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z")
			
			
			newElement.appendChild(d)
			
			svg.forEach(w => {
				w.append(newElement);
			})
			

			if(l.getAttribute('data-color') !== l.getAttribute('fill')){
				l.parentElement.classList.add('error');
				l.setAttribute('stroke', 'red');
				l.setAttribute('stroke-width', '3px');
				l.setAttribute('order', '3');
				l.setAttribute('fill-rule', 'evenodd');
			}
		})
	}


	// success 
	this.successPage = () => {
		if(this.index !== 7){
			line.forEach(w => {
				w.setAttribute('fill', w.getAttribute('data-color'));
				w.setAttribute('stroke', w.getAttribute('data-color'));
			})
		} else {
			location.href = '1366-240.html'
		}
	}



	this.completGame = () => {
		if(this.error === true){
			this.errorPage()

		} else {
			this.successPage()
		}
	}

	
	var rainbowBtns = document.querySelectorAll('.color__btn');
	var resetBtn = document.getElementById('resetBtn');
	var completedGame = document.getElementById('completedGame');

	resetBtn.addEventListener('click', () => this.init());
	completedGame.addEventListener('click', () => this.completGame());


	rainbowBtns.forEach(b => {
		b.addEventListener('click', e => {
			e.target.parentElement.classList.remove('cursor-pointer');
			e.target.classList.remove('opacity-5');
			e.target.classList.add('opacity-1');
			colorsRainbow.paint(e.target.dataset.color, e.target);
		})
	})
}




