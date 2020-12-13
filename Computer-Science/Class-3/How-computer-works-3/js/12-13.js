function natureGames() {
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

    var myDragArray = [];

    mydrag.forEach(element => {
        myDragArray.push(element);
    });

    var isDataPlace = false;

    this.dragdrop = (e) => { e.preventDefault();
        var drag = document.querySelector('.draggedElement')
        if(drag){
            e.target.innerHTML = '';
            var clone =  drag.cloneNode(true);
            $(clone).removeClass('draggedElement')
            e.target.appendChild(clone);
            clone.style="pointer-events: none;"
            if(window.location.href.includes("12.html")){
                if(document.getElementById('4').firstChild && document.getElementById('5').firstChild){
                    if((document.getElementById('4').firstChild.getAttribute('data-place') == 1 && document.getElementById('5').firstChild.getAttribute('data-place') == 0)
                    || (document.getElementById('5').firstChild.getAttribute('data-place') == 1 && document.getElementById('4').firstChild.getAttribute('data-place') == 0)
                    || (document.getElementById('4').firstChild.getAttribute('data-place') == 0 && document.getElementById('5').firstChild.getAttribute('data-place') == 0)){
                        document.getElementById('1').src = "../../../img/gakvetilebi/Computer-Science/Class-3/How-computer-works-3/sed.svg";
                        document.getElementById('2').src = '../../../img/gakvetilebi/Computer-Science/Class-3/How-computer-works-3/lamp-12.svg';
                        document.getElementById('2').style = '';
                        isDataPlace = false;
                    }
                    else{
                        document.getElementById('1').src = "../../../img/gakvetilebi/Computer-Science/Class-3/How-computer-works-3/smile.svg";
                        document.getElementById('2').src = '../../../img/gakvetilebi/Computer-Science/Class-3/How-computer-works-3/lamp.svg';
                        document.getElementById('2').style = 'margin-left: -7px; margin-bottom: 2px;';
                        isDataPlace = true;
                    }
                }
            }

            if(window.location.href.includes("13.html")){
                console.log(document.getElementById('4').firstChild.getAttribute('data-place'))
                if(document.getElementById('4').firstChild && document.getElementById('5').firstChild){
                    if((document.getElementById('4').firstChild.getAttribute('data-place') == 1 && document.getElementById('5').firstChild.getAttribute('data-place') == 0)
                    || (document.getElementById('5').firstChild.getAttribute('data-place') == 1 && document.getElementById('4').firstChild.getAttribute('data-place') == 0)
                    || (document.getElementById('4').firstChild.getAttribute('data-place') == 1 && document.getElementById('5').firstChild.getAttribute('data-place') == 1)){
                        document.getElementById('1').src = "../../../img/gakvetilebi/Computer-Science/Class-3/How-computer-works-3/smile.svg";
                        document.getElementById('2').src = '../../../img/gakvetilebi/Computer-Science/Class-3/How-computer-works-3/lamp.svg';
                        document.getElementById('2').style = 'margin-left: -7px; margin-bottom: 2px;';
                        isDataPlace = true;
                    }
                    else{
                        document.getElementById('1').src = "../../../img/gakvetilebi/Computer-Science/Class-3/How-computer-works-3/sed.svg";
                        document.getElementById('2').src = '../../../img/gakvetilebi/Computer-Science/Class-3/How-computer-works-3/lamp-12.svg';
                        document.getElementById('2').style = '';
                        isDataPlace = false;
                    }
                }

            }
            
        }
        
    }

    this.completGame = (e) => {
        if (isDataPlace) {
            this.successPage();
        }
        completedBtn.setAttribute('disabled', 'true');
    }
    this.successPage = () => {
        if(window.location.href.includes("12.html")){
            location.href = 'game-success-12.html';
        }
        if(window.location.href.includes("13.html")){
            location.href = 'game-success-13.html';
        }
    }

    this.init = (e) => {
        document.getElementById("1").src = '';
        document.getElementById("2").style = '';
        document.getElementById("2").src = '../../../img/gakvetilebi/Computer-Science/Class-3/How-computer-works-3/lamp-12.svg';
        document.getElementById("4").firstChild.remove();
        document.getElementById("5").firstChild.remove();
        completedBtn.removeAttribute('disabled');
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
}


const naturegame = new natureGames();