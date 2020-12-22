function computerGames() {
    var DragGameChilds1 = document.querySelectorAll('.DragGame--childs1');
    var mydrag = document.querySelectorAll('.myDrag');

    var notCloned = false;

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');

    $(document).on('dragstart', ".DragGame--childs1", (e) => this.dragStart(e));
    $(document).on('dragend', ".DragGame--childs1", (e) => this.dragEnd(e));


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
        if(e.target.parentElement.classList.contains('myDrag')) {
            notCloned = true;
        }
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

        

        if(drag && e.target.classList.contains('myDrag')){
            if(!notCloned) {
                var clone =  drag.cloneNode(true);
                e.target.appendChild(clone);
                $(clone).removeClass('draggedElement')
                clone1 = e.target.appendChild(clone);
            } else {
                e.target.appendChild(drag);
                notCloned = false;
            }
        }
    }

    this.successPage = () => {
        this.errorPage();
        if(count == 12){
            location.href = 'game-success-16.html';
        }

    }

    var count = 0;
    this.errorPage = () => {
        myDragArray.forEach(element => {
            if(document.getElementById('1').firstElementChild && document.getElementById('2').firstElementChild){
                if(document.getElementById('1').firstElementChild.getAttribute('data-place') == document.getElementById('2').firstElementChild.getAttribute('data-place')){
                    document.getElementById('1').classList.add('success');
                }
                else{
                    document.getElementById('1').classList.add('success');
                    document.getElementById('2').classList.add('success');
                    count++
                }
            }
            else{
                if(document.getElementById('1').firstElementChild){
                    document.getElementById('1').classList.add('success');
                }
                if(document.getElementById('2').firstElementChild){
                    document.getElementById('2').firstElementChild.classList.add('success')
                }

            }
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