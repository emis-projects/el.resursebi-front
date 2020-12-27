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
        e.preventDefault();

        var drag = document.querySelector('.draggedElement')
        if(e.target.children[0]){
            return;
        }
        if(drag){
            var clone =  drag.cloneNode(true);
            $(clone).removeClass('draggedElement')
            e.target.appendChild(clone);
            clone1 = e.target.appendChild(clone);
            clone1.setAttribute('style', "height: 100%;  width: 90%;")
        }
    }



    this.successPage = () => {
        this.errorPage();
        if(count == 4){
            location.href = 'game-success-5.html';
        }
    }

    var count = 0;
    var firstValue;
    var lastValue;

    this.errorPage = () => {
        myDragArray.forEach((element) => {
            
            var parent = element.getAttribute('data-place');
            var parent2 = element.getAttribute('data-place2');
            var child = null;
            
            if(element.querySelector('img')) {
                child = element.querySelector('img').getAttribute('data-place');
            }
            
            var firstElement = myDragArray[0].querySelector('img')
            var lastElement = myDragArray[myDragArray.length - 1].querySelector('img')
            
            if(element.getAttribute('data-place2')){
                // debugger
                if(child == parent || child == parent2) {
                    
                    if(firstElement && (firstElement.getAttribute('data-place') == "3" || firstElement.getAttribute('data-place') == "4")){
                        firstValue = myDragArray[0].querySelector('img').getAttribute('data-place')
                    }
    
                    if(lastElement && (lastElement.getAttribute('data-place') == "3" || lastElement.getAttribute('data-place') == "4")){
                        lastValue = lastElement.getAttribute('data-place')
                    }
    
                    if(firstValue == "3" && lastValue == "4" || firstValue == "4" && lastValue == "3") {
                        element.classList.add('success');
                        count++
                    }
                    element.classList.add('success');

                } else {
                    element.classList.add('error')
                }

            } else if (child == parent){
                element.classList.add('success');
                count++

            } else {
                element.classList.add('error')
            }
        });

        console.log(count)
        // console.log(firstValue)
        // console.log(lastValue)
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