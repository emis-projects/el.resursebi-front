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
	let resetBtn = document.getElementById('resetBtn');


	this.init = () => {
		img1.setAttribute('src', '');
		img2.setAttribute('src', '');

		this.colors = [];
		this.color = "";
		this.mixinColor = '';
		this.mixinColorCount = 0;

		document.querySelectorAll('.choose__color').forEach(w => {
			w.classList.add('opacity-5');
			w.classList.add('cursor-pointer');
			w.classList.remove('opacity-1');
		});
	}

	document.addEventListener('DOMContentLoaded', this.init);


	top.addEventListener('click', () => {
		this.colors = [];
		this.color = '#008445';
		changedColor.setAttribute('fill', '#008445');

		top.querySelectorAll('img').forEach(w => {
			w.classList.remove('opacity-5');
			w.classList.add('opacity-1');
			w.classList.remove('cursor-pointer');
			var attr = w.getAttribute('data-color');
			this.colors.push(attr);
		});

		document.querySelectorAll('#red-blue .choose__color').forEach(w => {
			w.classList.add('opacity-5');
			w.classList.remove('opacity-1');
		})

		// extra btns 
		this.getExtraColor()

		this.mixinColorCount = 0;
	});
	
	
	bottom.addEventListener('click', () => {
		this.colors = [];
		this.color = '#894689';
		changedColor.setAttribute('fill', '#894689');

		document.querySelectorAll('#yellow-blue .choose__color').forEach(w => {
			w.classList.add('opacity-5');
			w.classList.remove('opacity-1');
		})

		bottom.querySelectorAll('img').forEach(w => {
			w.classList.remove('opacity-5');
			w.classList.add('opacity-1');
			w.classList.remove('cursor-pointer');
			var attr = w.getAttribute('data-color');			
			this.colors.push(attr)
		});

		// extra btns 
		this.getExtraColor()

		this.mixinColorCount = 0;
	});



	this.getExtraColor = () => {
		if(this.colors[0] === 'yellow' && this.colors[1] === 'blue'){
			img1.src = "../../img/gakvetilebi/xelovneba/color-game/yellow-color-show.svg";
			img2.src = "../../img/gakvetilebi/xelovneba/color-game/blue-color-show.svg";
			img1.classList.add('opacity-5');
			img2.classList.add('opacity-5');
			img1.classList.add('cursor-pointer');
			img2.classList.add('cursor-pointer');
			img1.classList.remove('opacity-1');
			img2.classList.remove('opacity-1');
			img1.setAttribute('data-color', 'mixin-yellow');
			img2.setAttribute('data-color', 'mixin-blue');
		}

		if(this.colors[0] === 'blue' && this.colors[1] === 'red'){
			img1.src = "../../img/gakvetilebi/xelovneba/color-game/red-color-show.svg";
			img2.src = "../../img/gakvetilebi/xelovneba/color-game/blue-color-show.svg";
			img1.classList.add('opacity-5');
			img2.classList.add('opacity-5');
			img1.classList.add('cursor-pointer');
			img2.classList.add('cursor-pointer');
			img1.classList.remove('opacity-1');
			img2.classList.remove('opacity-1');
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
			img1.classList.add('opacity-1');
			img1.classList.remove('opacity-5');
			img1.classList.add('cursor-pointer');
			
			img2.classList.remove('opacity-1');
			img2.classList.add('opacity-5');
			img2.classList.add('cursor-pointer');
			
		} else if (this.mixinColor === "mixin-yellow" && this.mixinColorCount === 2){
			changedColor.setAttribute('fill', '#ACF425');
			img1.classList.remove('cursor-pointer');

		} else if(this.color === "#008445" && this.mixinColor === "mixin-blue" && this.mixinColorCount === 1){
			changedColor.setAttribute('fill', '#008470');
			img1.classList.add('opacity-5');
			img1.classList.remove('opacity-1');
			img1.classList.add('cursor-pointer');
			img2.classList.add('opacity-1');
			img2.classList.remove('opacity-5');

		} else if(this.color === "#008445" && this.mixinColor === "mixin-blue" && this.mixinColorCount === 2){
			changedColor.setAttribute('fill', '#085D50');
			img1.classList.add('opacity-5');
			img1.classList.remove('opacity-1');
			img2.classList.add('opacity-1');
			img2.classList.remove('opacity-5');
			img2.classList.remove('cursor-pointer');

		} else if(this.mixinColor === "mixin-red" && this.mixinColorCount === 1){
			changedColor.setAttribute('fill', '#A30D8C');
			img1.classList.remove('opacity-5');
			img1.classList.add('opacity-1');
			img2.classList.remove('opacity-1');
			img2.classList.add('opacity-5');
		
		} else if(this.mixinColor === "mixin-red" && this.mixinColorCount === 2){
			changedColor.setAttribute('fill', '#B916A0');

		} else if(this.color === "#894689" && this.mixinColor === "mixin-blue" && this.mixinColorCount === 1){
			changedColor.setAttribute('fill', '#7B0DA3');
			img1.classList.add('opacity-5');
			img1.classList.remove('opacity-1');
			img2.classList.add('opacity-1');
			img2.classList.remove('opacity-5');


		} else if(this.color === "#894689" && this.mixinColor === "mixin-blue" && this.mixinColorCount === 2){
			changedColor.setAttribute('fill', '#630F81');
		}
	}
	

	img1.addEventListener('click', () => this.getMixinColor(img1));
	img2.addEventListener('click', () => this.getMixinColor(img2));
	resetBtn.addEventListener('click', () => this.init());
}



var colorChanger = new chooseColor();