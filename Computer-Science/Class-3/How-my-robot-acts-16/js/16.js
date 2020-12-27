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

    this.dragDrop = (e) => { e.preventDefault();
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
        e.target.appendChild(clone);
        clone1 = e.target.appendChild(clone);
        clone1.style = "width:30px; height:35px;margin:0px;margin-left:20px"
        // if (clone1.getAttribute('data-same') == 1) {
        //     clone1.style = "width:35px; height:35px;margin:0px;margin-left:20px"
        // }
        // if(clone1.getAttribute('data-same') == 2){
        //     clone1.style = "width:35px; height:35px;margin:0px;margin-left:20px"
        // }

    }



    this.successPage = () => {
        this.errorPage();
        console.log('count', count)
        if(count == 21){
            location.href = 'game-success-16.html';
        }

    }

    var count = 0;
    this.errorPage = () => {
        myDragArray.forEach(element => {
            // პირველი სვეტი
            if(element.getAttribute('data-place') == 1){
                if(element.children[1] || (element.children[0] && element.children[0].getAttribute('data-place')!= 11)){
                    element.classList.add('error')
                }
                if(!element.children[1] && (element.children[0] && element.children[0].getAttribute('data-place') == 11)){
                    element.classList.add('success')
                    count++;
                }
            }
            
            //მესამე სვეტი
            if(element.getAttribute('data-place') == 3){
                if(element.children[1] || (element.children[0] && element.children[0].getAttribute('data-place')!= 31)){
                    element.classList.add('error')
                }
                if(!element.children[1] && (element.children[0] && element.children[0].getAttribute('data-place') == 31)){
                    element.classList.add('success')
                    count++;
                }
            }
            //მეორე სვეტი არასწორი შემთხვევა
            if(element.getAttribute('data-place') == 2){
                if(element.children[0] && !element.children[1]){
                    element.classList.add('error');
                }
            }
            //მეოთხე სვეტი არასწორი შემთხვევა
            if(element.getAttribute('data-place') == 4){
                if(element.children[0] && !element.children[1]){
                    element.classList.add('error');
                }
            }
            
        });
        //მეორე სვეტი [12]
        if(document.getElementById('1').children[1]){
            if((document.getElementById('1').children[0].getAttribute('data-place') == 21 &&  document.getElementById('1').children[1].getAttribute('data-place') == 2)
                || (document.getElementById('1').children[0].getAttribute('data-place') == 2 &&  document.getElementById('1').children[1].getAttribute('data-place') == 21)){
                document.getElementById('1').classList.add('success')
                count++;
            }
            else{
                document.getElementById('1').classList.add('error')
            }
        }
        //[22]
        if(document.getElementById('2').children[1]){
            if((document.getElementById('2').children[0].getAttribute('data-place') == 21 &&  document.getElementById('2').children[1].getAttribute('data-place') == 4)
                || (document.getElementById('2').children[0].getAttribute('data-place') == 4 &&  document.getElementById('2').children[1].getAttribute('data-place') == 21)){
                document.getElementById('2').classList.add('success')
                count++;
            }
            else{
                document.getElementById('2').classList.add('error')
            }
        }
        //[33]
        if(document.getElementById('3').children[1]){
            if((document.getElementById('3').children[0].getAttribute('data-place') == 21 &&  document.getElementById('3').children[1].getAttribute('data-place') == 6)
                || (document.getElementById('3').children[0].getAttribute('data-place') == 6 &&  document.getElementById('3').children[1].getAttribute('data-place') == 21)){
                document.getElementById('3').classList.add('success')
                count++;
            }
            else{
                document.getElementById('3').classList.add('error')
            }
        }
        //[42]
        if(document.getElementById('4').children[1]){
            if((document.getElementById('4').children[0].getAttribute('data-place') == 21 &&  document.getElementById('4').children[1].getAttribute('data-place') == 5)
                || (document.getElementById('4').children[0].getAttribute('data-place') == 5 &&  document.getElementById('4').children[1].getAttribute('data-place') == 21)){
                document.getElementById('4').classList.add('success')
                count++;
            }
            else{
                document.getElementById('4').classList.add('error')
            }
        }
        //[52]
        if(document.getElementById('5').children[1]){
            if((document.getElementById('5').children[0].getAttribute('data-place') == 21 &&  document.getElementById('5').children[1].getAttribute('data-place') == 2)
                || (document.getElementById('5').children[0].getAttribute('data-place') == 2 &&  document.getElementById('5').children[1].getAttribute('data-place') == 21)){
                document.getElementById('5').classList.add('success')
                count++;
            }
            else{
                document.getElementById('5').classList.add('error')
            }
        }
        //მეოთხე სვეტი [14]
        if(document.getElementById('6').children[1]){
            if((document.getElementById('6').children[0].getAttribute('data-place') == 51 &&  document.getElementById('6').children[1].getAttribute('data-place') == 2)
                || (document.getElementById('6').children[0].getAttribute('data-place') == 2 &&  document.getElementById('6').children[1].getAttribute('data-place') == 51)){
                document.getElementById('6').classList.add('success')
                count++;
            }
            else{
                document.getElementById('6').classList.add('error')
            }
        }
        //[24]
        if(document.getElementById('7').children[1]){
            if((document.getElementById('7').children[0].getAttribute('data-place') == 51 &&  document.getElementById('7').children[1].getAttribute('data-place') == 4)
                || (document.getElementById('7').children[0].getAttribute('data-place') == 4 &&  document.getElementById('7').children[1].getAttribute('data-place') == 51)){
                document.getElementById('7').classList.add('success')
                count++;
            }
            else{
                document.getElementById('7').classList.add('error')
            }
        }
        //[34]
        if(document.getElementById('8').children[1]){
            if((document.getElementById('8').children[0].getAttribute('data-place') == 51 &&  document.getElementById('8').children[1].getAttribute('data-place') == 6)
                || (document.getElementById('8').children[0].getAttribute('data-place') == 6 &&  document.getElementById('8').children[1].getAttribute('data-place') == 51)){
                document.getElementById('8').classList.add('success')
                count++;
            }
            else{
                document.getElementById('8').classList.add('error')
            }
        }
        //[44]
        if(document.getElementById('9').children[1]){
            if((document.getElementById('9').children[0].getAttribute('data-place') == 51 &&  document.getElementById('9').children[1].getAttribute('data-place') == 5)
                || (document.getElementById('9').children[0].getAttribute('data-place') == 5 &&  document.getElementById('9').children[1].getAttribute('data-place') == 51)){
                document.getElementById('9').classList.add('success')
                count++;
            }
            else{
                document.getElementById('9').classList.add('error')
            }
        }
        //54
        if(document.getElementById('10').children[1]){
            document.getElementById('10').classList.add('error');
        }
        else if(document.getElementById('10').children[0]){
                if(document.getElementById('10').children[0].getAttribute('data-place') == 41){
                    document.getElementById('10').classList.add('success')
                    count++;
                }
                else{
                    document.getElementById('10').classList.add('error')
                }
        }
        //[45]
        if(document.getElementById('11').children[1]){
            if((document.getElementById('11').children[0].getAttribute('data-place') == 51 &&  document.getElementById('11').children[1].getAttribute('data-place') == 2)
                || (document.getElementById('11').children[0].getAttribute('data-place') == 2 &&  document.getElementById('11').children[1].getAttribute('data-place') == 51)){
                document.getElementById('11').classList.add('success')
                count++;
            }
            else{
                document.getElementById('11').classList.add('error')
            }
        }
        

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