
// generate color by three color 
function chooseColor(){
	this.topBtnIs = false;
	this.bottomBtnIs = false;
	this.mixinColor = null;
	this.mixinColorCount = 0;
	this.color = '';
	this.colors = [];


	// variables
	let top = document.getElementById('yellow-blue');
	let bottom = document.getElementById('red-blue');
	let changedColor = document.getElementById('Path_3994');
	let img1 = document.querySelector('#otherbtn .img1');
	let img2 = document.querySelector('#otherbtn .img2');


	this.init = () => {
		img1.setAttribute('src', '');
		img2.setAttribute('src', '');
	}
	

	document.addEventListener('DOMContentLoaded', this.init);


	top.addEventListener('click', () => {
		this.colors = [];

		document.getElementById('blue-color-bottom').setAttribute('src', '../img/gajkvetilebi/xelovneba/color-game/blue-color.svg');
		document.getElementById('red-color-bottom2').setAttribute('src', '../img/gajkvetilebi/xelovneba/color-game/red-color.svg');
		

		this.color = '#008445';
		changedColor.setAttribute('fill', '#008445');


		top.querySelectorAll('img').forEach(w => {
			var attr = w.getAttribute('data-color');

			this.colors.push(attr);

			document.getElementById('yellow-color-top').setAttribute('src', '../img/gajkvetilebi/xelovneba/color-game/blue-color-show.svg');
			document.getElementById('blue-color-top2').setAttribute('src', '../img/gajkvetilebi/xelovneba/color-game/yellow-color-show.svg')

		});

		// extra btns 
		this.getExtraColor()

		this.mixinColorCount = 0;
	});
	
	
	bottom.addEventListener('click', () => {
		this.colors = [];

		document.getElementById('yellow-color-top').setAttribute('src', '../img/gajkvetilebi/xelovneba/color-game/blue-color.svg');
		document.getElementById('blue-color-top2').setAttribute('src', '../img/gajkvetilebi/xelovneba/color-game/yellow-color.svg');


		this.color = '#894689';
		changedColor.setAttribute('fill', '#894689');


		bottom.querySelectorAll('img').forEach(w => {
			var attr = w.getAttribute('data-color');			
		
			this.colors.push(attr)
		});

		// extra btns 
		this.getExtraColor()

		this.mixinColorCount = 0;

		document.getElementById('blue-color-bottom').setAttribute('src', '../img/gajkvetilebi/xelovneba/color-game/blue-color-show.svg')
		document.getElementById('red-color-bottom2').setAttribute('src', '../img/gajkvetilebi/xelovneba/color-game/red-color-show.svg')
	});


	this.getExtraColor = () => {
		if(this.colors[0] === 'yellow' && this.colors[1] === 'blue'){
			img1.src = "../img/gajkvetilebi/xelovneba/color-game/yellow-color.svg";
			img2.src = "../img/gajkvetilebi/xelovneba/color-game/blue-color.svg";
			img1.setAttribute('data-color', 'mixin-yellow');
			img2.setAttribute('data-color', 'mixin-blue');
		}

		if(this.colors[0] === 'blue' && this.colors[1] === 'red'){
			img1.src = "../img/gajkvetilebi/xelovneba/color-game/red-color.svg";
			img2.src = "../img/gajkvetilebi/xelovneba/color-game/blue-color.svg";
			img1.setAttribute('data-color', 'mixin-red');
			img2.setAttribute('data-color', 'mixin-blue');
		}
	}

	this.getMixinColor = (img) => {		
		if(img.getAttribute('data-color') !== this.mixinColor){
			this.mixinColorCount = 0
		}
		
		let imgAttr = img.getAttribute('data-color');
		this.mixinColor = imgAttr;

		if(this.mixinColorCount < 2){
			this.mixinColorCount++
		} else {
			return false
		}


		if(this.mixinColor === "mixin-yellow" && this.mixinColorCount === 1){
			changedColor.setAttribute('fill', '#7FDD11');
			img1.setAttribute('src', '../img/gajkvetilebi/xelovneba/color-game/yellow-color-show.svg');
			img2.setAttribute('src', '../img/gajkvetilebi/xelovneba/color-game/blue-color.svg');

		} else if (this.mixinColor === "mixin-yellow" && this.mixinColorCount === 2){
			changedColor.setAttribute('fill', '#ACF425');

		} else if(this.color === "#008445" && this.mixinColor === "mixin-blue" && this.mixinColorCount === 1){
			changedColor.setAttribute('fill', '#008470');
			img2.setAttribute('src', '../img/gajkvetilebi/xelovneba/color-game/blue-color-show.svg');
			img1.setAttribute('src', '../img/gajkvetilebi/xelovneba/color-game/yellow-color.svg')

		} else if(this.color === "#008445" && this.mixinColor === "mixin-blue" && this.mixinColorCount === 2){
			changedColor.setAttribute('fill', '#085D50');

		} else if(this.mixinColor === "mixin-red" && this.mixinColorCount === 1){
			changedColor.setAttribute('fill', '#A30D8C');
			img1.setAttribute('src', '../img/gajkvetilebi/xelovneba/color-game/red-color-show.svg')
			img2.setAttribute('src', '../img/gajkvetilebi/xelovneba/color-game/blue-color.svg');
		
		} else if(this.mixinColor === "mixin-red" && this.mixinColorCount === 2){
			changedColor.setAttribute('fill', '#B916A0');
			img2.setAttribute('src', '../img/gajkvetilebi/xelovneba/color-game/blue-color.svg');

		} else if(this.color === "#894689" && this.mixinColor === "mixin-blue" && this.mixinColorCount === 1){
			changedColor.setAttribute('fill', '#7B0DA3');
			img2.setAttribute('src', '../img/gajkvetilebi/xelovneba/color-game/blue-color-show.svg');
			img1.setAttribute('src', '../img/gajkvetilebi/xelovneba/color-game/red-color.svg')


		} else if(this.color === "#894689" && this.mixinColor === "mixin-blue" && this.mixinColorCount === 2){
			changedColor.setAttribute('fill', '#630F81');
		}
	}
	

	img1.addEventListener('click', () => this.getMixinColor(img1));
	img2.addEventListener('click', () => this.getMixinColor(img2));
}






let colorChanger = new chooseColor();



