function computerGames() {
    var DragGameChilds1 = document.querySelectorAll('.DragGame--childs1');
    var mydrag = document.querySelectorAll('.myDrag');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');

    $(DragGameChilds1).on('dragstart', (e) => this.dragStart(e));
    $(DragGameChilds1).on('dragend', (e) => this.dragEnd(e));


    for (const drag of mydrag) {
        drag.addEventListener('dragover', (e) => this.dragOver(e));
        drag.addEventListener('drop', (e) => this.dragDrop(e));
    }


    document.addEventListener('DOMContentLoaded', () => {
        mydrag.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
        })
        DragGameChilds1.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
        });
    })

    this.dragOver = (e) => {

        e.preventDefault();
    }
    this.dragStart = (e) => {
        setTimeout(() => {
            e.target.className += " draggedElement"
        }, 0);
    }


    this.dragEnd = (e) => {
        
        var elClassName = e.target.getAttribute('data-class')
        e.target.className = elClassName;
    }

    var myArray = [];
    DragGameChilds1.forEach(element => {
        myArray.push(element);
    });

    var myDragArray = [];

    mydrag.forEach(element => {
        myDragArray.push(element);
    });

    var clone1;

    this.dragDrop = (e) => {
        
        var drag = document.querySelector('.draggedElement')
        console.log(e.target.getAttribute('data-placeDiv'), drag.getAttribute('data-placeDiv'))
        if(e.target.children[0] || e.target.getAttribute('data-placeDiv') != drag.getAttribute('data-placeDiv')){
            console.log('yes')
            return;
        }
        if(drag){
            var clone =  drag.cloneNode(true);
            $(clone).removeClass('draggedElement')
            e.target.appendChild(clone);
            clone1 = e.target.appendChild(clone);
            // clone1.style = "height: 100%;  width: 90%;";
            // clone1.setAttribute('style', "height: 100%;  width: 90%;")
            clone1.style="pointer-events: none;"
        }
    }

    this.successPage = () => {
        this.errorPage();
        if(count == 7){
            location.href = 'game-success-16.html';
        }

    }

    var count = 0;
    this.errorPage = () => {
        myDragArray.forEach(element => {
            if(element.children[0]){
                if((element.children[0].getAttribute('data-place') == element.getAttribute('data-place'))){
                    element.classList.add('success');
                    count++;
                }
                else{
                    element.classList.add('error')
                    // element.style.border = "px solid #dc6c85";
                }
            }
        });
    }

    this.completGame = () => {
        this.successPage();
        completedBtn.setAttribute('disabled', 'true');
    }

    this.init = () => {
        count = 0;
        myDragArray.forEach(element => {
            $(element).empty()
            $(element).removeClass('error');
            $(element).removeClass('success');
        });



        completedBtn.removeAttribute('disabled');
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());


}



const computergame = new computerGames();