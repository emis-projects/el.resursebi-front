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

    this.dragdrop = (e) => { e.preventDefault();
        var drag = document.querySelector('.draggedElement')
        if(e.target.children[0] && e.target.children[0].getAttribute('data-same') == drag.getAttribute('data-same')){
            return;
        }
        if(e.target.children[1] && ((e.target.children[1].getAttribute('data-same') == drag.getAttribute('data-same'))
            || (e.target.children[0].getAttribute('data-same') == drag.getAttribute('data-same')))){
            return;
        }

        var clone = drag.cloneNode(true);
        $(clone).removeClass('draggedElement')
        $(clone).removeClass('ml-4vh')
        e.target.appendChild(clone);
        clone1 = e.target.appendChild(clone);
        if (clone1.getAttribute('data-same') == 1) {
            clone1.style = "pointer-events: none;  top: 59%; left: 55%;";//z-index: -1;
        }
        if(clone1.getAttribute('data-same') == 2){
            clone1.style = "pointer-events: none;";
            clone1.innerHTML = "<span style='color: blue;'>"+ clone1.innerHTML+"</span>";
        }

    }



    this.successPage = () => {
        this.errorPage();
        if(count == 9){
            location.href = 'game-success-14.html';
        }

    }

    var count = 0;
    this.errorPage = () => {
        //////td12
        document.getElementById('12').style = "background: #a1dd6f";
        //////td1
        if (document.getElementById('1').children[0] && document.getElementById('1').children[1]) {
            if ((document.getElementById('1').getAttribute('data-place') == document.getElementById('1').children[0].getAttribute('data-place'))
                &&  (document.getElementById('1').getAttribute('data-place') == document.getElementById('1').children[1].getAttribute('data-place'))) {
                document.getElementById('1').style = "background: #a1dd6f";
                count++;
            }
            else {
                document.getElementById('1').style = "background: #dc6c85";
            }
        }
        else {
            document.getElementById('1').style = "background: #dc6c85";
        }
        // /////td3
        if (document.getElementById('3').children[0] && document.getElementById('3').children[1]) {
            if ((document.getElementById('3').getAttribute('data-place') == document.getElementById('3').children[0].getAttribute('data-place'))
                && (document.getElementById('3').getAttribute('data-place') == document.getElementById('3').children[1].getAttribute('data-place'))) {
                document.getElementById('3').style = "background: #a1dd6f";
                count++;
            }
            else {
                document.getElementById('3').style = "background: #dc6c85";
            }
        }
        else {
            document.getElementById('3').style = "background: #dc6c85";
        }
        //////td6
        if (document.getElementById('6').children[0] && document.getElementById('6').children[1]) {
            if ((document.getElementById('6').getAttribute('data-place') == document.getElementById('6').children[0].getAttribute('data-place1'))
                && (document.getElementById('6').getAttribute('data-place') == document.getElementById('6').children[1].getAttribute('data-place1'))) {
                document.getElementById('6').style = "background: #a1dd6f";
                count++;
            }
            else {
                document.getElementById('6').style = "background: #dc6c85";
            }
        }
        else {
            document.getElementById('6').style = "background: #dc6c85";
        }
        ////td2 
        if (document.getElementById('2').children[1]) {
            document.getElementById('2').style = "background: #dc6c85";
        }
        else {
            if (document.getElementById('2').children[0]) {
                if (document.getElementById('2').children[0].getAttribute('data-same') == 2) {
                    document.getElementById('2').style = "background: #dc6c85";
                }
                if (document.getElementById('2').children[0].getAttribute('data-same') == 1) {
                    if (document.getElementById('2').children[0].getAttribute('data-place') == 2) {
                        document.getElementById('2').style = "background: #a1dd6f";
                        count++;
                    }
                    else{
                        document.getElementById('2').style = "background: #dc6c85";
                    }
                }
            }
            else {
                document.getElementById('2').style = "background: #dc6c85";
            }
        }
        ////td4
        if (document.getElementById('4').children[1]) {
            document.getElementById('4').style = "background: #dc6c85";
        }
        else {
            if (document.getElementById('4').children[0]) {
                if (document.getElementById('4').children[0].getAttribute('data-same') == 2) {
                    document.getElementById('4').style = "background: #dc6c85";
                }
                if (document.getElementById('4').children[0].getAttribute('data-same') == 1) {
                    if (document.getElementById('4').children[0].getAttribute('data-place2') == 4) {
                        document.getElementById('4').style = "background: #a1dd6f";
                        count++;
                    }
                    else{
                        document.getElementById('4').style = "background: #dc6c85";
                    }
                }
            }
            else {
                document.getElementById('4').style = "background: #dc6c85";
            }
        }
        //td8
        if (document.getElementById('8').children[1]) {
            document.getElementById('8').style = "background: #dc6c85";
        }
        else {
            if (document.getElementById('8').children[0]) {
                if (document.getElementById('8').children[0].getAttribute('data-same') == 2) {
                    document.getElementById('8').style = "background: #dc6c85";
                }
                if (document.getElementById('8').children[0].getAttribute('data-same') == 1) {
                    if (document.getElementById('8').children[0].getAttribute('data-place1') == 8) {
                        document.getElementById('8').style = "background: #a1dd6f";
                        count++;
                    }
                    else{
                        document.getElementById('8').style = "background: #dc6c85";
                    }
                }
            }
            else {
                document.getElementById('8').style = "background: #dc6c85";
            }
        }
        ////td9
        if (document.getElementById('9').children[1]) {
            document.getElementById('9').style = "background: #dc6c85";
        }
        else {
            if (document.getElementById('9').children[0]) {
                if (document.getElementById('9').children[0].getAttribute('data-same') == 2) {
                    document.getElementById('9').style = "background: #dc6c85";
                }
                if (document.getElementById('9').children[0].getAttribute('data-same') == 1) {
                    if (document.getElementById('9').children[0].getAttribute('data-place1') == 9) {
                        document.getElementById('9').style = "background: #a1dd6f";
                        count++;
                    }
                    else{
                        document.getElementById('9').style = "background: #dc6c85";
                    }
                }
            }
            else {
                document.getElementById('9').style = "background: #dc6c85";
            }
        }
        ////td4-td5-td7-td10-td11
        myDragArray.forEach(element => {
            if (element.getAttribute('data-placeFive') != null) {
                if (element.children[1]) {
                    element.style = "background: #dc6c85";
                }
                else
                    if (element.children[0]) {
                        if (element.children[0].getAttribute('data-same') == 2) {
                            element.style = "background: #dc6c85";
                        }
                        if (element.children[0].getAttribute('data-same') == 1) {
                            if (element.children[0].getAttribute('data-placeFive') == element.getAttribute('data-placeFive')) {
                                element.style = "background: #a1dd6f";
                                count++;
                            }
                            else {
                                element.style = "background: #dc6c85";
                            }
                        }
                    }
                    else {
                        element.style = "background: #dc6c85";
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
        document.getElementById('12').style = '';
        myDragArray.forEach(element => {
            element.style = '';
            $(element).empty()
        });



        completedBtn.removeAttribute('disabled');
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());


}



const computergame = new computerGames();