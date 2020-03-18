function computerGames(){
    var draggedImgElement = document.querySelectorAll('.imge');
    var mydrag = document.querySelectorAll('.myDrag');

    var parent1 = document.querySelector('.parent1');
    var parent2 = document.querySelector('.parent2');
    var parent3 = document.querySelector('.parent3');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');

    $(draggedImgElement).on('dragstart', (e) => this.dragStart(e));
    $(draggedImgElement).on('dragend', (e) => this.dragEnd(e));


    for(const drag of mydrag){
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
        var drag = document.querySelector('.draggedElement')
        if(e.target.classList.contains('myDrag')){
            e.target.appendChild(drag);
        }
    }

    this.checkEveryElement = (element) => element.getAttribute('data-place') == element.parentElement.getAttribute('data-place');

    this.successPage = () => {
        let el = myArray.every(this.checkEveryElement);
        if(el){
            location.href = 'game-success-12.html';
        }
        else{
            this.errorPage();
        }
    }


    this.errorPage = () => {
        myArray.forEach(element => {
            if (element.getAttribute('data-place') == element.parentElement.getAttribute('data-place')) {
                $(element).addClass("success");
            }
            else {
                $(element).addClass("error");
            }
        });
    }

    this.completGame = () => {
        this.successPage();
        completedBtn.setAttribute('disabled', 'true');
    }

    this.init = () => {
        myArray.forEach(element => {
            $(element).removeClass("error");
            $(element).removeClass("success");
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