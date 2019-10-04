var colorsRainbow = new rainbow();

window.addEventListener('DOMContentLoaded', colorsRainbow.init());


// rainbow game 
function rainbow(){
	this.color = null;
	this.index = 0;

	this.init = () => {
		this.index = 0;
		this.color = null;
		
		document.querySelectorAll('.rainbow--line').forEach(w => {
			w.setAttribute('fill', '#fff')
		})

		rainbowBtns.forEach(b => {
			b.classList.add('opacity-5');
			b.classList.remove('opacity-1');

			if(b.getAttribute('data-index') == 0){
				b.parentElement.className += " cursor-pointer"
			}
		})
	}


	this.paint = function(color) {
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
			
		} else if(second.getAttribute('fill') == '#fff'){
			second.setAttribute('fill', this.color);

		} else if(third.getAttribute('fill') == '#fff'){
			third.setAttribute('fill', this.color);
			
		} else if(fourth.getAttribute('fill') == '#fff'){
			fourth.setAttribute('fill', this.color)
			
		} else if(fifth.getAttribute('fill') == '#fff'){
			fifth.setAttribute('fill', this.color);
			
		} else if(sixth.getAttribute('fill') == '#fff'){
			sixth.setAttribute('fill', this.color);
			
		} else if(seventh.getAttribute('fill') == '#fff'){
			seventh.setAttribute('fill', this.color);
		}
	}


	this.calculateNextIndex = (e) => {
		var nextIndex = this.index + 1;

		if(this.index == 6){
			nextIndex = 6;
		}

		let btnsArray = [];

		rainbowBtns.forEach(w => {
			btnsArray.push(w)
		});

		var newElement = btnsArray.filter(w => nextIndex == w.getAttribute('data-index'))
	
		newElement[0].parentElement.className += " cursor-pointer";

		if(this.index == 6){
			newElement[0].parentElement.classList.remove('cursor-pointer');
		}
	}

	
	
	var rainbowBtns = document.querySelectorAll('.color__btn');
	var resetBtn = document.getElementById('resetBtn');
	
	resetBtn.addEventListener('click', () => this.init());
	
	rainbowBtns.forEach(b => {
		b.addEventListener('click', e => {
			e.target.parentElement.classList.remove('cursor-pointer');
			e.target.classList.remove('opacity-5');
			e.target.classList.add('opacity-1');
			colorsRainbow.calculateNextIndex();
			colorsRainbow.paint(e.target.dataset.color);
		})
	})
}




