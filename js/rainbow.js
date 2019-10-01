// rainbow game 
function rainbow(){
	this.colors = null;

	this.paint = function(color) {
		this.colors = color;

		let first = document.querySelector('.rainbow--line--first');
		let second = document.querySelector('.rainbow--line--second');
		let third = document.querySelector('.rainbow--line--third');
		let fourth = document.querySelector('.rainbow--line--fourth');
		let fifth = document.querySelector('.rainbow--line--fifth');
		let sixth = document.querySelector('.rainbow--line--sixth');
		let seventh = document.querySelector('.rainbow--line--seventh');

		if(first.getAttribute('fill') == '#fff'){
			first.setAttribute('fill', this.colors)

		} else if(second.getAttribute('fill') == '#fff'){
			second.setAttribute('fill', this.colors)

		} else if(third.getAttribute('fill') == '#fff'){
			third.setAttribute('fill', this.colors)

		} else if(fourth.getAttribute('fill') == '#fff'){
			fourth.setAttribute('fill', this.colors)

		} else if(fifth.getAttribute('fill') == '#fff'){
			fifth.setAttribute('fill', this.colors)

		} else if(sixth.getAttribute('fill') == '#fff'){
			sixth.setAttribute('fill', this.colors)

		} else if(seventh.getAttribute('fill') == '#fff'){
			seventh.setAttribute('fill', this.colors)
		}
	}
	
	let rainbowBtns = document.querySelectorAll('.color__btn');
	
	rainbowBtns.forEach(b => {
		b.addEventListener('click', function(e){
			colorsRainbow.paint(e.target.dataset.color);
		})
	})
}




let colorsRainbow = new rainbow();