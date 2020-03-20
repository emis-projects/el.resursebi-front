function computerGames(){
    var DragGameChilds1 = document.querySelectorAll('.DragGame--childs1');
    var mydrag = document.querySelectorAll('.myDrag');
    var result = document.querySelectorAll('.result');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');

    $(DragGameChilds1).on('dragstart', (e) => this.dragStart(e));
    $(DragGameChilds1).on('dragend', (e) => this.dragEnd(e));

    var count = 0;

    for(const drag of mydrag){
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


    var myArrayResult = [];

    result.forEach(element => {
        myArrayResult.push(element);
    });

    var previousState = null;

    this.dragDrop = (e) =>{
        if(e.target.firstElementChild || e.target.classList.contains('DragGame--childs1')){

            return;
        }
        myArrayResult.forEach(element => {
            element.innerHTML = '';
        });
        var drag = document.querySelector('.draggedElement')
        drags = drag.cloneNode(true);
        
        e.target.appendChild(drags)
        $(drags).removeClass('draggedElement')
        resultPoint = drags.parentElement.getAttribute('data-arrow');
        var dest = drags.getAttribute('data-way');
        if(previousState == null){
            if(dest == 'zig'){
                document.getElementById('11').style.backgroundColor = 'black'
                document.getElementById('11').setAttribute('data-black', 1111)
            }
            document.getElementById('11').innerHTML = '&#9679;'
            previousState = 11;
            return;
        }
        if(dest == 'right' && previousState != null){
            //document.getElementById(previousState).innerHTML = '';
            previousState += 1;
            document.getElementById(previousState).innerHTML = '&#9679;'
        }
        if(dest == 'below' && previousState != null){
            previousState += 10;
            document.getElementById(previousState).innerHTML = '&#9679;'
        }
        if(dest == 'left' && previousState != null){
            //document.getElementById(previousState).innerHTML = '';
            previousState -= 1;
            document.getElementById(previousState).innerHTML = '&#9679;'
        }
        if(dest == 'above' && previousState != null){
            //document.getElementById(previousState).innerHTML = '';
            previousState -= 10;
            document.getElementById(previousState).innerHTML = '&#9679;'
        }
        if(dest == 'zig'){
            //document.getElementById(previousState).innerHTML = '';
            document.getElementById(previousState).style.backgroundColor = 'black'
            document.getElementById(previousState).setAttribute('data-black', 1111)
        }
    }

    this.checkEveryElement = (element) => element.getAttribute('data-black') == element.parentElement.getAttribute('data-correct');


    
    this.successPage = () => {
        count = 0;
        // let el = myArrayResult.every(this.checkEveryElement);
        // console.log('el', el, 'data-black', element.getAttribute('data-black'))
        myArrayResult.forEach(element => {
            if(element.getAttribute('data-correct') == element.getAttribute('data-black') && element.getAttribute('data-correct') != null){
                count++;
            }
            if(element.getAttribute('data-correct') == null && element.getAttribute('data-black') == 1111){
                count -= 1;
            }
        });
        console.log(count)
        if(count == 4){
                location.href = 'game-success-21.html';
                console.log('yes')
        }
        else{
            this.errorPage();
        }
    }


    this.errorPage = () => {

        myArrayResult.forEach(element => {
            console.log('result', element.getAttribute('data-correct'), element.getAttribute('data-black'))
            if((element.getAttribute('data-correct') != 1111) && (element.getAttribute('data-black') == 1111)){
                //console.log('yes')
                element.style.backgroundColor = 'red'
            }
        });
    }

    // element.getAttribute('data-black') != 'null'

    this.completGame = () => {
        this.successPage();
        completedBtn.setAttribute('disabled', 'true');
    }

    this.init = () => {
        count = 0;
        previousState = null;
        myDragArray.forEach(element => {
            element.innerHTML = '';
        });
        
        myArrayResult.forEach(element => {
            element.innerHTML = '';
            element.setAttribute('data-black', null)
            element.style = '';
        });
        completedBtn.removeAttribute('disabled');

    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());


}



const computergame = new computerGames();