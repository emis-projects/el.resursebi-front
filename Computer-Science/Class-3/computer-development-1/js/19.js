function computerGames(){
    var DragGameChilds1 = document.querySelectorAll('.DragGame--childs1');
    var mydrag = document.querySelectorAll('.myDrag');

    var parent1 = document.querySelector('.parent1');
    var parent2 = document.querySelector('.parent2');
    var parent3 = document.querySelector('.parent3');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');

    $(DragGameChilds1).on('dragstart', (e) => this.dragStart(e));
    $(DragGameChilds1).on('dragend', (e) => this.dragEnd(e));


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
        var theme = localStorage.getItem("theme");
        var elClassName = e.target.getAttribute('data-class')
        e.target.className = elClassName;
        if (theme == "darck") {
            e.target.className += ' completed__btn_black';
        }
    }

    var myArray = [];
    DragGameChilds1.forEach(element => {
        myArray.push(element);
    });

    this.dragDrop = (e) =>{
        
        var drag = document.querySelector('.draggedElement')
        if(!e.target.parentElement.children[1]){
            e.target.parentElement.appendChild(drag)
        }
        //console.log(e.target.firstElementChild)
        // if(e.target.parentElement.classList.contains('myDrag')){
        //     e.target.parentElement.appendChild(drag);
        // }
    }

    this.checkEveryElement = (element) => element.getAttribute('data-place') == element.parentElement.getAttribute('data-place');

    this.successPage = () => {
        let el = myArray.every(this.checkEveryElement);
        if(el){
                location.href = 'game-success-19.html';
        }
        else{
            this.errorPage();
        }
    }


    this.errorPage = () => {
        myArray.forEach(element => {
            if (element.getAttribute('data-place') == element.parentElement.getAttribute('data-place')) {
                element.style = "background: #a1dd6f"
            }
            else if(element.parentElement.getAttribute('data-place') != null){
                element.style = "background:#dc6c85   "
            }
        });
    }

    this.completGame = () => {
        this.successPage();
        completedBtn.setAttribute('disabled', 'true');
    }

    this.init = () => {
        myArray.forEach(element => {
            element.parentElement.style = '';
            element.style = '';
        });
        myArray.forEach(element => {
          if(element.getAttribute("data-end") == "1"){
              parent1.appendChild(element)
          }
          if(element.getAttribute("data-end") == "2"){
              parent2.appendChild(element)
          }
          if(element.getAttribute("data-end") == "3"){
              parent3.appendChild(element)
          }
        });
        completedBtn.removeAttribute('disabled');

    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());


}



const computergame = new computerGames();