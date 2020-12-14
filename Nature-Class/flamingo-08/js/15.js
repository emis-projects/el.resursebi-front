function natureGames() {
    var draggedImgElement = document.querySelectorAll('.image');
    var draggedImgElementEnd = document.querySelectorAll('.imageDrag')
    var mydrag = document.querySelectorAll('.myDrag');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');


    $(draggedImgElement).on('dragstart', (e) => this.dragStart(e));
    $(draggedImgElement).on('dragend', (e) => this.dragEnd(e));

    for (const drag of mydrag) {
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
        e.preventDefault()
    }

    this.dragStart = (e) => {
        setTimeout(() => {
            e.target.className += " draggedElement"
        }, 0);
    }

    this.dragEnd = (e) => {
        let elClassName = e.target.getAttribute('data-class');
        e.target.className = elClassName;
    }

    var myArray = [];
    for (let i = 0; i < draggedImgElement.length; i++) {
        myArray.push(draggedImgElement[i])
    }

    var myArray1 = [];
    for (let i = 0; i < draggedImgElementEnd.length; i++) {
        myArray1.push(draggedImgElementEnd[i])
    }

    var myArray2 = [];
    for (let i = 0; i < mydrag.length; i++) {
        myArray2.push(mydrag[i])
    }

    this.dragDrop = (e) => { e.preventDefault();
        
        var drag = document.querySelector(".draggedElement")

        if (e.target.classList.contains('myDrag')) {
            myArray1.forEach(element => {
                if (e.target.getAttribute('data-IsEmpty') == 1) {
                    if (e.target.getAttribute('data-side') == "amozneqili") {
                        if ((element.getAttribute('data-place') == drag.getAttribute('data-place')) && (element.getAttribute('data-side') == "amozneqili")) {
                            
                            e.target.src = element.src;
                            e.target.setAttribute('data-isEmpty', 0)
                            e.target.setAttribute('data-twin', element.getAttribute('data-twin'))
                            $(drag).css("display", "none");
                        }
                    }
                    if (e.target.getAttribute('data-side') == "chazneqili") {
                        if ((element.getAttribute('data-place') == drag.getAttribute('data-place')) && (element.getAttribute('data-side') == "chazneqili")) {
                            
                            e.target.src = element.src;
                            e.target.setAttribute('data-isEmpty', 0)
                            e.target.setAttribute('data-twin', element.getAttribute('data-twin'))
                            $(drag).css("display", "none");
                        }
                    }
                }
            });

        }
    }

    this.init = () => {
        myArray.forEach(element => {
            $(element).css("display", "block");
            
        });
        
        for(var i=0;i<myArray2.length;i++){
            myArray2[i].setAttribute('data-isEmpty', 1)
            myArray2[i].style = null;
            console.log(myArray2[i].style = null)
            if(i%2 == 0){
                myArray2[i].src = "../../img/gakvetilebi/buneba/flamingo-08/nature-8-15-game-grey.svg";
            }
            else{
                myArray2[i].src = "../../img/gakvetilebi/buneba/flamingo-08/nature-8-15-game-pink.svg";
            }
        }
        completedBtn.removeAttribute('disabled');


    }
    this.completGame = (e) => {
        
        var count = 0;

        for (var i = 0; i < myArray2.length; i++) {
            for (var j = 0; j < myArray2.length; j++) {
                
                if (myArray2[i].getAttribute('data-twin') == myArray2[j].getAttribute('data-twin') && myArray2[j].src != myArray2[i].src
                    && myArray2[i].getAttribute('data-twin') != null && myArray2[j].getAttribute('data-twin') != null
                    && myArray2[i].parentElement.getAttribute('data-parent') == myArray2[j].parentElement.getAttribute('data-parent')) {
                    count++;
                }
                if (myArray2[i].getAttribute('data-twin') != myArray2[j].getAttribute('data-twin') && myArray2[j].src != myArray2[i].src
                    && myArray2[i].getAttribute('data-twin') != null && myArray2[j].getAttribute('data-twin') != null
                    && myArray2[i].parentElement.getAttribute('data-parent') == myArray2[j].parentElement.getAttribute('data-parent')
                    && myArray2[i].getAttribute('data-isEmpty') == 0 && myArray2[j].getAttribute('data-isEmpty') == 0) {
                    myArray2[i].style="outline: 3px solid red;outline-offset: -3px; z-index: -1;"
                    myArray2[j].style="outline: 3px solid red;outline-offset: -3px; z-index: -1;"
                }
                if(myArray2[i].getAttribute('data-same') == myArray2[j].getAttribute('data-same') 
                    && myArray2[j].src != myArray2[i].src){
                        if(myArray2[i].getAttribute('data-isEmpty') == 0 && myArray2[j].getAttribute('data-isEmpty') == 1){
                            myArray2[i].style="outline: 3px solid red;outline-offset: -3px; z-index: -1;"
                        }
                        if(myArray2[j].getAttribute('data-isEmpty') == 0 && myArray2[i].getAttribute('data-isEmpty') == 1){
                            myArray2[j].style="outline: 3px solid red;outline-offset: -3px; z-index: -1;"
                        }
                }
            }
        }
        if (count == 10) {
            this.successPage();
        }
        completedBtn.setAttribute('disabled', 'true');

    }

    this.successPage = () => {
        location.href = 'game-success-15.html';
    }

    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());

}

const naturegame = new natureGames();