function rainbow(){
	this.color = null;
	this.index = 0;

    var prevResult;
    var nextResult;

	// variables 
	let btns = document.querySelectorAll('.rainbow-img .color-game-paint-parent--child');
	let palitra = document.getElementById('Path_3994');



    this.prevAll = element => {
        prevResult = [];
    
        while (element = element.previousElementSibling)
            prevResult.push(element);
        return prevResult;
    }

    this.nextAll = element => {
        nextResult = [];
    
        while (element = element.nextElementSibling)
            nextResult.push(element);
        return nextResult;
    }
    
	this.paint = function(color, e) {
        this.color = color;
        this.index = 0;
        palitra.setAttribute('fill', this.color);
        palitra.removeAttribute("style");

        e.parentElement.classList.remove('cursor-pointer');
        e.classList.remove('opacity-5');
        e.classList.add('opacity-1');


        this.prevAll(e.parentElement);

        prevResult.forEach(w => {
            w.firstElementChild.classList.remove('opacity-1');
            w.firstElementChild.classList.add('opacity-5');
            w.classList.add('cursor-pointer');
        })
        
        
        this.nextAll(e.parentElement)
        
        nextResult.forEach(w => {
            w.firstElementChild.classList.remove('opacity-1')
            w.firstElementChild.classList.add('opacity-5')
            w.classList.add('cursor-pointer');
        })
        document.querySelector('.rainbow-img').classList.remove('cursor-pointer');
	}


    this.getOtherColor = () => {        
        if(this.index == 0){
            this.index++
            palitra.setAttribute('style', "opacity: 0.5");
            
        } else if(this.index == 1){
            this.index++
            palitra.setAttribute('style', "opacity: 0.3");
            
        } else {
            return false
        }
    }


	
	btns.forEach(b => {
		b.addEventListener('click', e => {
			if(e.target.classList.contains('color__btn')){
                colorsRainbow.paint(e.target.dataset.color, e.target);
            }
		})
    })
    

    document.querySelectorAll('.color-game-paint-big').forEach(w => {
        w.addEventListener('click', function(){
            colorsRainbow.getOtherColor()
        })
    })
}



var colorsRainbow = new rainbow();