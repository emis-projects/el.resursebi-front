function computerGames(){
    var draggedImgElement = document.querySelectorAll('.DragGame--childs1');
    //var mydrag = document.querySelectorAll('.DragGame--Parent');
    var mydrag = document.querySelectorAll('.mydrag');

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
        });
    })

    this.dragOver = (e) => {
        
        e.preventDefault();
    }

    this.dragStart = (e) => {
        myArray.forEach(element => {
            $( element ).removeClass( "error" );
            $( element ).removeClass( "success" );
        });
        setTimeout(() => {
            e.target.className += " draggedElement"
        }, 0);
    }

    this.dragEnd = (e) => {
        var elClassName = e.target.getAttribute('data-class')
        e.target.className = elClassName;
    }

    var myArray = [];
    draggedImgElement.forEach(element => {
        myArray.push(element);
    });

    this.dragDrop = (e) =>{
        var drag = document.querySelector('.draggedElement');
        var dragParent = drag.parentElement;
       let firstElement = e.target.parentElement.firstElementChild;
        if(e.target.parentElement.classList.contains('mydrag')){
            //firstElement.remove();
            e.target.parentElement.appendChild(drag);
            dragParent.appendChild(firstElement)
        }
    }

    this.completGame = () => {
        console.log('complate')
        var count = 0;
        myArray.forEach(element => {
            console.log(element.getAttribute('data-place'), element.parentElement.getAttribute('data-place'))
            if(element.getAttribute('data-place') == element.parentElement.getAttribute('data-place')){
                console.log('yes')
                count++
                $(element).addClass( "success" );
            }
            else{
                $(element).addClass( "error" );
            }
        });
        console.log('count', count)
        if(count == 4){
            this.successPage();
        }
    }

    this.successPage = () => {
        location.href = 'game-success-19.html';
    }

    this.init = () => {
        myArray.forEach(element => {
            $( element ).removeClass( "error" );
            $( element ).removeClass( "success" );
        });
        mydrag.forEach(element => {
            console.log('element', element)
            element.appendChild(document.getElementById(element.getAttribute('data-side')));

        });
    }


    resetBtn.addEventListener('click', () => this.init());
	completedBtn.addEventListener('click', () => this.completGame());

}




const computergame = new computerGames();