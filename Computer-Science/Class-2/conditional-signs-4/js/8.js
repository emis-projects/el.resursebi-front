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
        var theme = localStorage.getItem("theme");
        if (theme == "darck") {
            e.target.classList.add('new_btn-start_black_btn');
        }
        else{
            if(e.target.classList.contains('new_btn-start_black_btn')){
                e.target.classList.remove('new_btn-start_black_btn');
            }
        }
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

            if(loc == "/Computer-Science/Class-2/conditional-signs-4/8.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/conditional-signs-4/8.html"){
                location.href = "game-success-8.html"               
            } 
            else if(loc == "/Computer-Science/Class-2/conditional-signs-4/10.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/conditional-signs-4/10.html"){
                location.href = "game-success-10.html"
            }
           else if(loc == "/Computer-Science/Class-2/conditional-signs-4/6.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/conditional-signs-4/6.html"){
                 location.href = "game-success-6.html"  
            } 
            else if(loc == "/Computer-Science/Class-2/conditional-signs-4/7.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/conditional-signs-4/7.html"){
                location.href = "game-success-7.html"
            } 
         else if(loc == "/Computer-Science/Class-2/conditional-signs-4/11.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/conditional-signs-4/11.html"){
            location.href = "game-success-11.html"       
            } 
            else if(loc == "/Computer-Science/Class-2/conditional-signs-4/16.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/conditional-signs-4/16.html"){
                location.href = "game-success-16.html"
            
            } else if(loc == "/Computer-Science/Class-2/conditional-signs-4/17.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/marks-2/conditional-signs-4/17.html"){
                location.href = "game-success-17.html"

            }  else if(loc == "/Computer-Science/Class-2/marks-2/conditional-signs-4/22.html" || loc == "/el.resursebi-front/Computer-Science/Class-2/marks-2/conditional-signs-4/22.html"){
                location.href = "game-success-22.html"


        } else {

            this.errorPage()
        }
    }
}


    this.errorPage = () => {
        dragElement2MyArray.forEach(w => {
            if(w.getAttribute('data-index') !== w.parentElement.getAttribute('data-index')){
                if(w.classList.contains('new_btn-start_black_btn')){
                    w.classList.remove('new_btn-start_black_btn')
                }
                w.parentElement.classList.add('error')

            } else if(w.getAttribute('data-index') == w.parentElement.getAttribute('data-index')) {
                if(w.classList.contains('new_btn-start_black_btn')){
                    w.classList.remove('new_btn-start_black_btn')
                }
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
            var theme = localStorage.getItem("theme");
            if (theme == "darck") {
                if(w.children[0]){
                    w.children[0].classList.add('new_btn-start_black_btn');
                }
            }
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