function game(){
    this.error = true;
    this.hrefElement = null;

    
    // variables
    let dragElement1 = document.querySelectorAll('.DragGame—childs1');
    let dragElement2 = document.querySelectorAll('.DragGame—childs2');
    let resetBtn = document.getElementById('resetBtn');
    let completedGame = document.getElementById('completedGame');


    $(dragElement1).on('dragstart', (e) => this.dragStart(e));
    $(dragElement1).on('dragend', (e) => this.dragEnd(e));




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
        dragElement1MyArray.forEach((w, i) => {
            w.setAttribute('data-class', w.getAttribute('class'))
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
    

    this.dragDrop = e => {
        e.target.querySelector('.appendDiv').appendChild(document.querySelector('.draggedElement'));
    }


    this.checkEveryElement = (elements) => {
        var array = [];
        for(var i = 0; i < elements.length; i++ ){
            array.push(elements[i])
        }

        // console.log(array);
        array.forEach(w => {
            let items = w.querySelector('.appendDiv').querySelectorAll('img');
            let index = w.querySelector('.appendDiv').getAttribute('data-index')
            let number = w.querySelector('.appendDiv').getAttribute('data-number')

            console.log(items[0])

            // for(var i = 0; i < items.length; i++){
            //     if(items[i].getAttribute('data-index') == items[i].parentElement.getAttribute('data-index') && 
            //         number == items[0].length)
            //     {
            //         items[i].previousElementSibling.classList.add('success')

            //     } else {
            //         items[i].previousElementSibling.classList.add('error')
            //     }
            // }
        })
    }



    this.successPage  = () => {
        this.checkEveryElement(dragElement2MyArray)

		// if(el == true ){
        //     let loc = location.pathname;

        //     if(loc == "/Computer-Science/Class-6/Presentation-of-my-project-19/6.html" || loc == "/el.resursebi-front/Computer-Science/Class-6/Presentation-of-my-project-19/6.html"){
        //         location.href = "game-success-6.html"
        //     }

        // } else {

        //     this.errorPage()
        // }
    }


    this.errorPage = () => {
        // $( dragElement2MyArray ).find( "img" ).css( "background-color", "red" );
        // if(dragElement2MyArray)
        
        // $.each( dragElement2MyArray, function( key, value ) {
        //     if($(value).children('img')){
        //         if($(value).children('img').attr('data-index') == $(value).attr('data-index')){
        //             $(value).children('.sign-description-btn').addClass('success')
        //         } else {
        //             $(value).children('.sign-description-btn').addClass('error')
        //         }
        //     }


        //     // console.log($(value).children('img'));
        // });

        // dragElement2MyArray.forEach(w => {
        //     if(w.querySelector('img')){
        //         if(w.getAttribute('data-index') !== w.querySelector('img').getAttribute('data-index')){
        //             w.querySelector('.sign-description-btn').classList.add('error')
    
        //         } else if(w.getAttribute('data-index') == w.querySelector('img').getAttribute('data-index')) {
        //             w.querySelector('.sign-description-btn').classList.add('success')
        //         }
        //     } else {
        //         w.querySelector('.sign-description-btn').classList.add('error')
        //     }

        // })
    }
    
 
    this.completedGame = () => {
        // completedGame.setAttribute('disabled', 'true')
        this.successPage()
    }
    


    this.resetGame = () => {
        dragElement1MyArray.forEach(w => {
            $('.cs-6-19-div-6-img').append(w)
        });

        $(dragElement1).removeClass('error');
        $(dragElement1).removeClass('success');
        completedGame.removeAttribute('disabled')
    }

    resetBtn.addEventListener('click', this.resetGame);
    completedGame.addEventListener('click', this.completedGame);
}


const Game = new game();