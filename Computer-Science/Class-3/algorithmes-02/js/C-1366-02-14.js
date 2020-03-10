function natureGames() {
    var draggedImgElement = document.querySelectorAll('.draggedimgelement');
    var litle = document.querySelectorAll('.litle');
    var mydrag = document.querySelectorAll('.mixerDrag');
    var onOff = document.querySelector('.onOff');
    var finish = document.querySelector('.finish');

    var resetBtn = document.getElementById('resetBtn');

    var pear1 = false;
    var banana1 = false;
    var apple1 = false;
    var milk1 = false;

    $(draggedImgElement).on('dragstart', (e) => this.dragStart(e));

    for (const drag of mydrag) {
        drag.addEventListener('dragover', (e) => this.dragOver(e));
        drag.addEventListener('drop', (e) => this.dragDrop(e));
    }



    // Drag Functions 
    this.dragOver = (e) => {
        e.preventDefault();
    }


    // drag start 
    this.dragStart = (e) => {
        setTimeout(() => {
            e.target.className += " draggedElement"
        }, 0);
    }


    // drop 
    var count = 0;
    var pixel = 0;
    var previous = 0;
    var litleFruit = document.querySelectorAll('.fruit');
    var littleFruitArray = [];
    for(let i=0; i<litleFruit.length; i++){
        littleFruitArray.push(litleFruit[i])
    }
    this.dragDrop = e => {
        if(!isOpen){
            return;
        }
        //  
        let drag = document.querySelector('.draggedElement');
        
        
        // /naturalHeight
        let currentFruit = littleFruitArray.filter(r => r.classList.contains(drag.getAttribute('data-name')))
        if(count == 0 && currentFruit.length){
            pixel = 5;
            previous = $(currentFruit).height()
            
        }
        if(count == 1 && currentFruit.length){
            pixel = previous + 10;
            previous += $(currentFruit).height() +10;

        }
        if(count == 2 && currentFruit.length){
            pixel = previous + 5;
        }
        if(drag.getAttribute('data-name') == 'pear'){
            pear1 = true;
            count++;
            let pear = document.querySelector('.pear')
            e.target.parentElement.appendChild(pear);
            pear.style = "display:block; bottom:" + pixel + "px"
            drag.style = "display:none"
            $(drag).removeClass('draggedElement');
        }
        if(drag.getAttribute('data-name') == 'banana'){
            banana1 = true;
            count++;
            let banana = document.querySelector('.banana')
            e.target.parentElement.appendChild(banana);
            banana.style = "display:block; bottom:" + pixel + "px"
            drag.style = "display:none"
            $(drag).removeClass('draggedElement');
        }
        if(drag.getAttribute('data-name') == 'apple'){
            apple1 = true;
            count++;
            let apple = document.querySelector('.apple')
            e.target.parentElement.appendChild(apple);
            apple.style = "display:block; bottom:" + pixel + "px"
            drag.style = "display:none"
            $(drag).removeClass('draggedElement');
        }
        if(drag.getAttribute('data-name') == 'milk'){
            milk1 = true;
            let milk = document.querySelector('.milk')
            e.target.parentElement.appendChild(milk);
            milk.style = "display:block; bottom:0px;"
            drag.style = "display:none"
            $(drag).removeClass('draggedElement');
        }
    }

    
    this.init = () => {
        count = 0;
        pixel = 0;
        document.querySelector('.apple').style = "display: none";
        document.querySelector('.pear').style = "display: none";
        document.querySelector('.banana').style = "display: none";
        document.querySelector('.milk').style = "display: none";
        document.querySelector('.mixer__head').classList.add('isNotOpen')
        var bigFruit = document.querySelectorAll('.imgElement');
        isOpen = false;

        bigFruit.forEach(element => {
            element.style = "display: block"
        });


    }

    var isOpen = false;
    this.imageCLick = (e) => {
        if(isOpen){
            e.target.classList.add("isNotOpen");
            isOpen = false;
            return
        }
        if(!isOpen){
            $(e.target).removeClass("isNotOpen");
            isOpen = true;
            
        }
    }

    this.complate = () =>{
        if(isOpen){
            location.href = "errorpage2.html";
            return
        }
        if(apple1 && pear1 && banana1 && milk1){
            location.href = "C-1366-02-14-success.html"
            return
        }
        
        if(!apple1 && !pear1 && !banana1 && !milk1){
            location.href = "errorpage2.html"
            return
        }
        if(!milk1 && (apple1 || pear1 || banana1)){
            location.href = "errorpage.html";
            return
        }
        if(!apple1 && !pear1 && !banana1 && milk1){
            location.href = "errorpage2.html"
            return
        }
        if((apple1 || pear1 || banana1) && milk1 ){
            location.href = "errorpage3.html"
        }
    }

    finish.addEventListener('click', (e)=> this.complate())
    onOff.addEventListener('click', (e)=> this.imageCLick(e));
    resetBtn.addEventListener('click', () => this.init());


}

const naturegame = new natureGames();