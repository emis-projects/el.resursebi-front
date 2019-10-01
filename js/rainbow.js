var colorsRainbow = new rainbow();

window.addEventListener('DOMContentLoaded', colorsRainbow.init());


// rainbow game 
function rainbow(){
	this.color = null;
	this.index = 0;

	this.init = function() {
		this.index = 0;
		
		rainbowBtns.forEach(b => {
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
			second.setAttribute('fill', this.color)

		} else if(third.getAttribute('fill') == '#fff'){
			third.setAttribute('fill', this.color)
			
		} else if(fourth.getAttribute('fill') == '#fff'){
			fourth.setAttribute('fill', this.color)
			
		} else if(fifth.getAttribute('fill') == '#fff'){
			fifth.setAttribute('fill', this.color)
			
		} else if(sixth.getAttribute('fill') == '#fff'){
			sixth.setAttribute('fill', this.color)
			
		} else if(seventh.getAttribute('fill') == '#fff'){
			seventh.setAttribute('fill', this.color)
		}

		if(this.index > 7){
			this.index++
		}
	}


	this.calculateNextIndex = (e) => {
		var nextIndex = this.index + 1;

		let btnsArray = [];

		rainbowBtns.forEach(w => {
			btnsArray.push(w)
		});

		var newElement = btnsArray.filter(w => nextIndex == w.getAttribute('data-index'))
	
		newElement[0].parentElement.className += " cursor-pointer"
	}
	

	var rainbowBtns = document.querySelectorAll('.color__btn');
	
	rainbowBtns.forEach(b => {
		b.addEventListener('click', e => {
			e.target.parentElement.classList.remove('cursor-pointer');
			colorsRainbow.calculateNextIndex();	
			colorsRainbow.paint(e.target.dataset.color);
		})
	})

}




