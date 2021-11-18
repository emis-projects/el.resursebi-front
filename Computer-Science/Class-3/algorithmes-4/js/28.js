function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }


function computerGames() {
    var draggedImgElement = document.querySelectorAll('.imge');
    var mydrag = document.querySelectorAll('.myDrag');
    var imgSrc = document.querySelector('.imgSrc');
    var parents = document.querySelectorAll('.parent');
    var left = document.getElementById('21');
    var right = document.getElementById('22');
    var count1 = document.getElementById('count1');
    var count = 0;
    var isFinded = false;

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');

    $(draggedImgElement).on('dragstart', (e) => this.dragStart(e));
    $(draggedImgElement).on('dragend', (e) => this.dragEnd(e));

    for(const drag of mydrag){
        drag.addEventListener('dragover', (e) => this.dragOver(e));
        drag.addEventListener('drop', (e) => this.dragDrop(e));
    }
    this.randomize = () => {
        var random = Math.floor(Math.random() * 20)+1;
        draggedImgElement.forEach(w => {
            var el = document.createElement("div");
            el.classList.add('numberEl')
            el.innerHTML = w.getAttribute('id');

            insertAfter(w, el);

            w.setAttribute('data-class', w.getAttribute('class'))
            if(random == w.getAttribute('id')){
                w.classList.add('light')
            }
        });
    }
 
    document.addEventListener('DOMContentLoaded', () => {
        mydrag.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
        })
        this.randomize();
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
        if(e.target.classList.contains('light')){
            elClassName += ' light';
        }
        e.target.className = elClassName;
    }

    var myArray = [];
    draggedImgElement.forEach(element => {
        myArray.push(element);
    });


    this.dragDrop = (e) =>{
        var drag = document.querySelector('.draggedElement').parentElement
        if(!(e.target.firstElementChild)){
            if(e.target.classList.contains('myDrag')){
                e.target.appendChild(drag);
            }
        }
        
    }

    this.completGame = () => {
        if(right.firstElementChild && !right.firstElementChild.classList.contains('light')
            && left.firstElementChild && !left.firstElementChild.classList.contains('light')){
                    count++;
            }
        myArray.forEach(element => {
                count1.textContent = count;
                
                if((element.classList.contains('light') && element.parentElement.classList.contains('myDrag')
                && element.parentElement.getAttribute('data-place') == 1) && right.firstElementChild != null){
                    isFinded = true;
                    imgSrc.src = '../../../img/gakvetilebi/Computer-Science/algorithmes-02/0111.svg';
                    count++;
                    element.style.display = 'none'
                    right.firstChild.style.display = 'none'
                }
                if((element.classList.contains('light') && element.parentElement.classList.contains('myDrag')
                && element.parentElement.getAttribute('data-place') == 2) && left.firstElementChild != null){
                    isFinded = true;
                    count++;
                    imgSrc.src = '../../../img/gakvetilebi/Computer-Science/algorithmes-02/0222.svg';
                    //element.src = null;
                    element.style.display = 'none'
                    left.firstChild.style.display = 'none'
                }
                if(((element.classList.contains('imge')) && element.parentElement.classList.contains('myDrag')
                && element.parentElement.getAttribute('data-place') == 1) && right.firstElementChild == null){
                    imgSrc.src = '../../../img/gakvetilebi/Computer-Science/algorithmes-02/022.svg';
                    //element.src = null;
                    element.style.display = 'none'
                }
                if(((element.classList.contains('imge')) && element.parentElement.classList.contains('myDrag')
                && element.parentElement.getAttribute('data-place') == 2) && left.firstElementChild == null){
                    imgSrc.src = '../../../img/gakvetilebi/Computer-Science/algorithmes-02/011.svg';
                    //element.src = null;
                    element.style.display = 'none'
                }
        });
        if(count == 10){
            completedBtn.setAttribute('disabled', 'true');
        }
    }

    this.init = () =>{
        if(isFinded || count == 10){
            myArray.forEach(element => {
                $(element).removeClass( "light" )
            });
            count = 0;
            count1.textContent = count;
            this.randomize();
            completedBtn.removeAttribute('disabled');
            isFinded = false
        }

        imgSrc.src = '../../../img/gakvetilebi/Computer-Science/algorithmes-02/C-2-28-1.svg';
        myArray.forEach(element => {
            element.style.display = 'block'
        });
        
        parents.forEach(element => {
            if(element.parentElement.classList.contains('myDrag')) {
                if(+element.querySelector('.numberEl').innerText < 10) {
                    document.querySelector('.firstElements').appendChild(element);
                }
                if(+element.querySelector('.numberEl').innerText > 10) {
                    document.querySelector('.secondElements').appendChild(element);
                }
            }
        });
        
        
    }

    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());

}

const computergame = new computerGames();