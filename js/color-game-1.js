const colorGame = new colorGame3();

function colorGame3() {
	this.colors = [];
	this.finalyColor = '';


	var singleColorSvg = document.querySelector('.finalyColorSingle');

	this.addColorInArray = function(e) {
		let color = e.target.getAttribute('data-color');

		this.colors.push(color);

		if(this.colors.length > 2) {
			this.colors = [];

			this.colors.push(color)
		}

		this.calculateFinalyColor();

	}
	
	this.calculateFinalyColor = function() {
		var finalyColor = document.querySelector('.finalColor');
		let singleFinalyColor = document.getElementById('Path_1589');
		var singleFinalyColor2 = document.getElementById('Path_1583');

		
		if(this.colors.length === 1) {
			singleColorSvg.setAttribute('style', 'display: none')

		} else if (this.colors.length > 1) {
			singleColorSvg.setAttribute('style', 'display: block')
		}


		if(this.colors.includes('#E1C621') === true && this.colors.includes('#1D3F75') === true) {
			this.finalyColor = '#008445';
			generateSecondColor(singleFinalyColor,singleFinalyColor2, finalyColor, this.finalyColor)
			

		} else if (this.colors.includes('#E1C621') === true && this.colors.includes('#B42424') === true) {
			this.finalyColor = '#EA7515';
			generateSecondColor(singleFinalyColor,singleFinalyColor2, finalyColor, this.finalyColor)
			
		} else if (this.colors.includes('#1D3F75') === true && this.colors.includes('#B42424') === true){
			this.finalyColor = '#894689';
			generateSecondColor(singleFinalyColor,singleFinalyColor2, finalyColor, this.finalyColor)

		} else if (this.colors.length === 1){
			this.finalyColor = this.colors[0];
			finalyColor.setAttribute('fill', this.finalyColor);
		} 
	}


	generateSecondColor = (elem1, elem2, bigColor, color) => {
		bigColor.setAttribute('fill', color);
		elem1.setAttribute('fill', color);
		elem2.setAttribute('fill', color);
	}



	// generateSingleFinalyColor = () => {
	// 	let img = document.createElement('img');
	// 	img.setAttribute('src', )

	// 	document.getElementById('color-game-1-finalyColor').innerHTML = content;
	// }

	

	var btns = document.querySelectorAll('.color-game-3');

	btns.forEach(w => {
		w.addEventListener('click', (e) => this.addColorInArray(e))
	});
}