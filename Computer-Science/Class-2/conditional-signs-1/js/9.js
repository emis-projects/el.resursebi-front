function game(){
    this.error = true;


    // variables
    let dragElement1 = document.querySelectorAll('.DragGame—childs1');
    let dragElement2 = document.querySelectorAll('.DragGame—childs2');
    let resetBtn = document.getElementById('resetBtn');
    let completedGame = document.getElementById('completedGame');


    $(dragElement2).on('dragstart', (e) => this.dragStart(e));
    $(dragElement2).on('dragend', (e) => this.dragEnd(e));


    // Loop through empty boxes and add listeners
    for (const drag of dragElement2) {
        drag.addEventListener('dragover', (e) => this.dragOver(e));
        drag.addEventListener('drop', (e) => this.dragDrop(e));
    }

    var dragElement2MyArray = [];

    for(var i = 0; i < dragElement2.length; i++ ){
        dragElement2MyArray.push(dragElement2[i])
    }


    var dragElement1MyArray = [];

    for(var i = 0; i < dragElement1.length; i++ ){
        dragElement1MyArray.push(dragElement1[i])
    }



    document.addEventListener('DOMContentLoaded', () => {
        dragElement2MyArray.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
            w.setAttribute('data-title', w.innerText)
        })
        dragElement1MyArray.forEach((w, i) => {
            w.setAttribute('data-index', i)
        })
    })


    // Drag Functions    
    this.dragOver = (e) => {
        e.preventDefault();
    }

    // drag start 
    this.dragStart = (e) => {
        setTimeout(() => {
            e.target.className = "draggedElement"
        }, 0);
    }


    // drag end
    this.dragEnd = e => {
        let elClassName = e.target.getAttribute('data-class');
        e.target.className = elClassName;
    }
    

    this.dragDrop = e => {
        e.target.parentElement.appendChild(document.querySelector('.draggedElement'));

        let previusElement = e.target;

        dragElement1MyArray.filter(w => {
            if(w.firstElementChild == null || w.firstElementChild == undefined){
                w.appendChild(previusElement)
            } 
        })

    }


    this.checkEveryElement = (element) => element.getAttribute('data-index') == element.parentElement.getAttribute('data-index');


    this.errorPage = () => {
        this.checkEveryElement()
        let el = dragElement2.every(this.checkEveryElement)

		dragElement2MyArray.forEach(l => {
			if(l.getAttribute('data-index') !== l.parentElement.getAttribute('data-index')){
                l.parentElement.classList.add('error');

                if(el == true){
                  this.error = false;

                } else {
                  this.error = true;
                } 
            } else if(l.getAttribute('data-index') == l.parentElement.getAttribute('data-index')){
                l.parentElement.classList.add('success');
                if(el == true){
                    this.error = false;
  
                  } else {
                    this.error = true;
                  } 
            }
		})
    }


    // this.successPage  = () => {
	// 	if(this.error == false){
    //         let loc = location.pathname;

    //         if(loc == "/Computer-Science/Class-2/conditional-signs-1/9.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/conditional-signs-1/9.html"){
    //             location.href = "nature-2-success.html"
    //         }
    //     }
    // }
    

    
    
    this.completedGame = () => {
        if(this.error){
            this.errorPage();
            
        } else {
            this.successPage();
        }
    }
    
    
    this.resetGame = () => {
        let text = $(dragElementsData).attr('data-title');
        $(dragElement2).text(text)
    }

    resetBtn.addEventListener('click', this.resetGame);
    completedGame.addEventListener('click', this.completedGame);
}


const Game = new game();