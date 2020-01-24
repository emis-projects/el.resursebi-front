function natureGames(){
    var errorAble = document.querySelectorAll('.N-games-child');
    var draggedImgElement = document.querySelectorAll('.spanDrgElement');
    var mydrag = document.querySelectorAll('.drg_element');
    var changeCOlor = document.getElementById('ChangeColor');
    
    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');

    $(draggedImgElement).on('dragstart', (e) => this.dragStart(e));
    $(draggedImgElement).on('dragend', (e) => this.dragEnd(e));


    for (const drag of draggedImgElement) {
        drag.addEventListener('dragover', (e) => this.dragOver(e));
        drag.addEventListener('drop', (e) => this.dragDrop(e));
    }


    document.addEventListener('DOMContentLoaded', () => {
        mydrag.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
        })

        draggedImgElement.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
        })
    })


    var myArray = [];

    for(var i = 0; i < mydrag.length; i++ ){
      myArray.push(mydrag [i])
    }

    this.init = () => {
        //$(errorAble).removeClass('error')
        myArray.forEach(element => {
                element.style.color = "black";
        });
     
        completedBtn.removeAttribute('disabled');
        completedBtn.setAttribute('style', 'cursor: pointer');
    }

    
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
    
    


     // drop 
     this.dragDrop = e => {    
        let drag = document.querySelector('.draggedElement');

        if(e.target.parentElement.classList.contains('after_parent')){
            e.target.parentElement.appendChild(drag);
        }

        let firstElement = e.target.parentElement.firstElementChild;

        myArray.filter(w => {
            if(w.firstElementChild == undefined || w.firstElementChild == null){
                w.appendChild(firstElement)
            }
        })
    }

    this.checkEveryElement = (element) => {
        var firstTextData = element.parentElement.querySelector('.spanDrgElement').getAttribute('data-title');
        var secondTextData = element.parentElement
                                .parentElement
                                .parentElement
                                .parentElement.querySelector('.nature_material_content_box_text-col-5').getAttribute('data-title');
        return firstTextData == secondTextData;
    }

    this.successPage = () => {
        location.href = 'C-1366-01-25-success.html';
    }


    
     // completed 
	this.completGame = (e) => {
        let el = myArray.every(this.checkEveryElement);
        myArray.forEach(element => {
            if(!this.checkEveryElement(element)){
                //$(element.parentElement.parentElement).addClass('error')
                console.log("parent", element.parentElement.parentElement)
                element.style.color = "#dc6c85";
            }
        });

        if(el){
            this.successPage();
        }
            completedBtn.setAttribute('disabled', 'true');
	}
 




    resetBtn.addEventListener('click', () => this.init());
	completedBtn.addEventListener('click', () => this.completGame());


}


const naturegame = new natureGames();