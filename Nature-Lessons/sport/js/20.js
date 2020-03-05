function natureGames(){
    var start = document.querySelector('.start');
    var draggedImgElement = document.querySelectorAll('.imge');
    var mydrag = document.querySelectorAll('.myDrag');
    var parent1 = document.querySelector('.parent1');
    var parent2 = document.querySelector('.parent2');


    $(draggedImgElement).on('dragstart', (e) => this.dragStart(e));
    $(draggedImgElement).on('dragend', (e) => this.dragEnd(e));
    $(start).on('click', (e) => this.click(e));


    isClick = false;
    this.click = (e) =>{
        isClick = true;
        //console.log('click', e.target.getAttribute('data-isStart'));
        e.target.src = '../../img/gakvetilebi/buneba/sport/Group 64754.svg';
        e.target.setAttribute('data-isStart', !(e.target.getAttribute('data-isStart') == "true"));
        //console.log('click', e.target.getAttribute('data-isStart'));
        if(e.target.getAttribute('data-isStart') == "false"){
            e.target.src = '../../img/gakvetilebi/buneba/sport/Group 64751.svg';
            myArray.forEach(element => {
                if(element.getAttribute("data-end") == "1"){
                    parent1.appendChild(element)
                }
                if(element.getAttribute("data-end") == "2"){
                    parent2.appendChild(element)
                }
            });
            document.getElementById('bastard').style = "left: 50%";
            //document.getElementById('bastard').style = "right: 50%";
        }
    }


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
    
    var speed = 0;
    var count = 0;
    this.dragDrop = (e) =>{
        
        var drag = document.querySelector('.draggedElement')
        //console.log('eassasasa', e.target.getAttribute('data-drag'), 'drag', drag.parentElement.getAttribute('data-side'))
        var side = drag.parentElement.getAttribute('data-side');
        if(e.target.classList.contains('myDrag') && (e.target.getAttribute('data-drag') == drag.getAttribute('data-imge'))){
            e.target.appendChild(drag);
            // document.getElementById('bastard').style = "left: 45%"
            console.log('isClick', isClick)
            //if(isClick == false) {return}
            count = 1;
            speed += Number(drag.getAttribute('data-color'));
            clearInterval(interval);
            console.log('------',count, speed,Number(drag.getAttribute('data-color')))
            var interval = setInterval(function(){
                var pixel = 0;
                var trans = 0;
                //console.log('drag.parentElement.getAttribute',side)
                //clearInterval(interval);
                if(side == '1'){
                    //console.log('50-------')
                    pixel = (50 - (count*speed));
                }
                if(side == '2'){
                    //console.log('50++++++')
                    pixel = (50 + (count*speed));
                }
                
                document.getElementById('bastard').style = "left: " + pixel + "%";
                // /document.getElementById('bastard').style = "transition: " + pixel + "%";
                //console.log('pixel', pixel, drag.parentElement)
                count ++;
                if(pixel < 0 || pixel > 100){
                    clearInterval(interval);
                }
             }, 200);
        }
    }

   
}


const naturegame = new natureGames();