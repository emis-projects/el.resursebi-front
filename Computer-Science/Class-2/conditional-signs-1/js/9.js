function game(){
    this.error = true;
    this.hrefElement = null;

    
    // variables
    let dragElement1 = document.querySelectorAll('.DragGame—childs1');
    let dragElement2 = document.querySelectorAll('.DragGame—childs2');
    let resetBtn = document.getElementById('resetBtn');
    let completedGame = document.getElementById('completedGame');


    $(dragElement2).on('dragstart', (e) => this.dragStart(e));
    $(dragElement2).on('dragend', (e) => this.dragEnd(e));




    // Loop through empty boxes and add listeners
    for (const drag of dragElement2) {
        drag.addEventListener('dragover', (e) => this.dragOver(e));
        drag.addEventListener('drop', (e) => this.dragDrop(e));
    }

    var dragElement2MyArray = [];
    for(var i = 0; i < dragElement2.length; i++ ){
        dragElement2MyArray.push(dragElement2[i])
    }


    var dragElement1MyArray = [];
    for(var i = 0; i < dragElement1.length; i++ ){
        dragElement1MyArray.push(dragElement1[i])
    }



    document.addEventListener('DOMContentLoaded', () => {
        dragElement2MyArray.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))

            let childIndex = w.getAttribute('data-index');

            w.parentElement.setAttribute('data-childIndex', childIndex)
            

            if(w.querySelector('a')){
                w.setAttribute('data-href', w.querySelector('a').getAttribute('href'))

            } else {
                w.parentElement.setAttribute('data-title', w.innerText)
            }
        })
        dragElement1MyArray.forEach((w, i) => {
            w.setAttribute('data-index', i)
        })
    })
    


    // Drag Functions    
    this.dragOver = (e) => {
        e.preventDefault();
    }

    // drag start 
    this.dragStart = (e) => {
        setTimeout(() => {
            e.target.className = "draggedElement"
        }, 0);
    }


    // drag end
    this.dragEnd = e => {
        let elClassName = e.target.getAttribute('data-class');
        e.target.className = elClassName;
    }
    

    this.dragDrop = e => { e.preventDefault();
        e.target.parentElement.appendChild(document.querySelector('.draggedElement'));

        let previusElement = e.target;

        dragElement1MyArray.filter(w => {
            if(w.firstElementChild == null || w.firstElementChild == undefined){
                w.appendChild(previusElement)
            } 
        })
    }


    this.checkEveryElement = (element) => element.getAttribute('data-index') == element.parentElement.getAttribute('data-index');



    this.successPage  = () => {
        let el = dragElement2MyArray.every(this.checkEveryElement)

		if(el == true){
            let loc = location.pathname;

            if(loc == "/Computer-Science/Class-2/conditional-signs-1/9.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/conditional-signs-1/9.html"){
                location.href = "game-success-9.html"
                
            } else if(loc == "/Computer-Science/Class-2/conditional-signs-1/10.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/conditional-signs-1/10.html"){
                location.href = "game-success-10.html"
                
            } else if(loc == "/Computer-Science/Class-2/marks-2/6.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/marks-2/6.html"){
                location.href = "game-success-6.html"

            } else if(loc == "/Computer-Science/Class-2/marks-2/8.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/marks-2/8.html"){
                location.href = "game-success-8.html"
            
            } else if(loc == "/Computer-Science/Class-2/marks-2/11.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/marks-2/11.html"){
                location.href = "game-success-11.html"

            } else if(loc == "/Computer-Science/Class-2/marks-2/18.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/marks-2/18.html") {
                location.href = "game-success-18.html"

            } else if(loc == "/Computer-Science/Class-2/marks-2/19.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/marks-2/19.html"){
                location.href = "game-success-19.html"

            } else if(loc == "/Computer-Science/Class-2/part&whole-3/6.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/part&whole-3/6.html"){
                location.href = "game-success-6.html"

            } else if(loc == "/Computer-Science/Class-2/part&whole-3/11.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/part&whole-3/11.html"){
                location.href = "game-success-11.html"
            
            } else if(loc == "/Computer-Science/Class-2/part&whole-3/16.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/part&whole-3/16.html"){
                location.href = "game-success-16.html"

            } else if(loc == "/Computer-Science/Class-5/objects-moving-4/17.html" || loc == "/el.resursebi-front/Computer-Science/Class-5/objects-moving-4/17.html"){
                location.href = "game-success-17.html"

            } else if(loc == "/Computer-Science/Class-2/Creating-cycles-5/6.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/Creating-cycles-5/6.html"){
                location.href = "game-success-6.html"

            } else if(loc == "/Computer-Science/Class-2/Creating-cycles-5/5.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/Creating-cycles-5/5.html"){
                location.href = "game-success-5.html"

            } else if(loc == "/Computer-Science/Class-4/correcting-text-8/9.html" || loc == "/el.resursebi-front/Computer-Science/Class-4/correcting-text-8/9.html"){
                location.href = "game-success-9.html"

            } else if(loc == "/Computer-Science/Class-4/correcting-text-8/18.html" || loc == "/el.resursebi-front/Computer-Science/Class-4/correcting-text-8/18.html"){
                location.href = "game-success-18.html"

            } else if(loc == "/Computer-Science/Class-3/Visual-Communication-6/11.html" || loc == "/el.resursebi-front/Computer-Science/Class-3/Visual-Communication-6/11.html"){
                location.href = "game-success-11.html"

            } else if(loc == "/Computer-Science/Class-2/user-interface-6/6.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/user-interface-6/6.html"){
                location.href = "game-success-6.html"

            } else if(loc == "/Computer-Science/Class-2/user-interface-6/14.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/user-interface-6/14.html"){
                location.href = "game-success-14.html"

            } else if(loc == "/Computer-Science/Class-2/Identify-with-computer-9/8.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/Identify-with-computer-9/8.html"){
                location.href = "game-success-8.html"

            } else if(loc == "/Computer-Science/Class-3/computer-equipment-2/7.html" || loc == "/el.resursebi-front/Computer-Science/Class-3/computer-equipment-2/7.html"){
                location.href = "game-success-7.html"

            } else if(loc == "/Computer-Science/Class-3/computer-equipment-2/8.html" || loc == "/el.resursebi-front/Computer-Science/Class-3/computer-equipment-2/8.html"){
                location.href = "game-success-8.html"

            } else if(loc == "/Computer-Science/Class-5/Information-in-the-table-14/10.html" || loc == "/el.resursebi-front/Computer-Science/Class-5/Information-in-the-table-14/10.html"){
                location.href = "game-success-10.html"

            } else if(loc == "/Computer-Science/Class-3/Cloud-services-10/5.html" || loc == "/el.resursebi-front/Computer-Science/Class-3/Cloud-services-10/5.html"){
                location.href = "game-success-5.html"

            } else if(loc == "/Computer-Science/Class-3/How-my-robot-acts-16/7.html" || loc == "/el.resursebi-front/Computer-Science/Class-3/How-my-robot-acts-16/7.html"){
                location.href = "game-success-7.html"
            }

        } else {

            this.errorPage()
        }
    }


    this.errorPage = () => {
        dragElement2MyArray.forEach(w => {
            if(w.getAttribute('data-index') !== w.parentElement.getAttribute('data-index')){
                w.parentElement.classList.add('error')

            } else if(w.getAttribute('data-index') == w.parentElement.getAttribute('data-index')) {
                w.parentElement.classList.add('success')
            }
        })
    }
    
 
    this.completedGame = () => {
        completedGame.setAttribute('disabled', 'true')
        this.successPage()
    }
    


    this.resetGame = () => {
        dragElement1MyArray.forEach(w => {
            let title = w.getAttribute('data-title');
            let index = w.getAttribute('data-childIndex');

            w.querySelector('a, p').classList.remove('a-blue');
            w.querySelector('a, p').removeAttribute('href')
            w.querySelector('a, p').removeAttribute('style')

            w.querySelector('.DragGame—childs2').innerText = title;
            w.querySelector('.DragGame—childs2').setAttribute('data-index', index);

            $( "#differentGameDiv p" ).replaceWith( '<a class="sign-description-btn-title DragGame—childs2" draggable="true" data-index="2">ქვეითთა გადასასვლელი</a>');
            $( "#differentGameDiv a").attr('href', "./6-1.html");
            $( "#differentGameDiv a").attr('style', "color: #7fd1d8");
            $( "#differentGameDiv a").attr('target', "_blank");
        });

        $(dragElement1).removeClass('error');
        $(dragElement1).removeClass('success');
        completedGame.removeAttribute('disabled')
    }

    resetBtn.addEventListener('click', this.resetGame);
    completedGame.addEventListener('click', this.completedGame);
}


const Game = new game();