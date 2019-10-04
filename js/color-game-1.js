const colorGame = new colorGame3();

window.addEventListener('DOMContentLoaded', colorGame.init());


function colorGame3() {
	this.colors = [];
	this.finalyColor = '';


	var singleColorSvg = document.querySelector('.finalyColorSingle');


	this.init = () => {
		document.querySelectorAll('.desktop-colors--light').forEach(w => {
			w.setAttribute('fill', '#e8e8e8');
		});

		document.querySelectorAll('.desktop-paint-colors').forEach(w => {
			w.setAttribute('fill', '#e8e8e8')
		});

		document.querySelector('.finalyColorSingle').classList.add('opacity-0');
		document.querySelector('.game2--big--color').setAttribute('fill', '#e8e8e8');
		
		document.querySelectorAll('.color-game-208').forEach(w => {
			w.classList.add('opacity-5');
			w.parentElement.classList.add('cursor-pointer');
		})
	}


	this.addColorInArray = function(e) {
		let color = e.target.getAttribute('data-color');

		this.colors.push(color);

		if(this.colors.length > 2) {
			this.colors = [];

			this.colors.push(color)
		}

		this.calculateFinalyColor();


		document.querySelectorAll('.color-game-208').forEach(w => {
			this.colors.forEach(t => {
				if(w.getAttribute('data-color') === t){
					w.classList.add('opacity-1');
					w.classList.remove('opacity-5');			
					w.parentElement.classList.add('cursor-pointer');
					w.classList.remove('opacity-1');
					w.parentElement.classList.remove('cursor-pointer');
				} 
			})
		});
	}
	

	this.calculateFinalyColor = function() {
		var finalyColor = document.querySelector('.finalColor');
		let singleFinalyColor = document.querySelector('.singleColorElem');
		var singleFinalyColor2 = document.getElementById('Path_1583');

		
		if(this.colors.length === 1) {
			singleColorSvg.classList.add('opacity-0');
			singleColorSvg.classList.remove('opacity-1')

		} else if (this.colors.length > 1) {
			singleColorSvg.classList.remove('opacity-0');
			singleColorSvg.classList.add('opacity-1')
		}


		this.init();

		if(this.colors.includes('#E1C621') === true && this.colors.includes('#1D3F75') === true) {
			this.finalyColor = '#008445';
			this.generateSecondColor(singleFinalyColor,singleFinalyColor2, finalyColor, this.finalyColor);
			document.querySelectorAll('.desktop-green-color').forEach(w => {
				w.setAttribute('fill', this.finalyColor);
			})

		} else if (this.colors.includes('#E1C621') === true && this.colors.includes('#B42424') === true) {
			this.finalyColor = '#EA7515';
			this.generateSecondColor(singleFinalyColor,singleFinalyColor2, finalyColor, this.finalyColor);
			document.querySelectorAll('.desktop-orange-color').forEach(w => {
				w.setAttribute('fill', this.finalyColor);
			})
			
		} else if (this.colors.includes('#1D3F75') === true && this.colors.includes('#B42424') === true){
			this.finalyColor = '#894689';
			this.generateSecondColor(singleFinalyColor,singleFinalyColor2, finalyColor, this.finalyColor);
			document.querySelectorAll('.desktop-purple-color').forEach(w => {
				w.setAttribute('fill', this.finalyColor);
			})

		} else if (this.colors.length === 1){
			this.finalyColor = this.colors[0];
			finalyColor.setAttribute('fill', this.finalyColor);
		} 
	}


	this.generateSecondColor = (elem1, elem2, bigColor, color) => {
		bigColor.setAttribute('fill', color);
		elem1.setAttribute('fill', color);
		elem2.setAttribute('fill', color);
	}


	var btns = document.querySelectorAll('.color-game-208');
	var resetBtn = document.getElementById('resetBtn');

	resetBtn.addEventListener('click', () => this.init());

	
	btns.forEach(w => {
		w.addEventListener('click', (e) => this.addColorInArray(e))
	});
}