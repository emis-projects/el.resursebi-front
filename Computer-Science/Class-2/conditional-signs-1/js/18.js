function game(){
    this.road1 = [
        [5,0,1],
        [5,6,1],
        [5,6,7,8,2],
        [12,6,1],
        [12,6,5,0,1],
        [12,13,7],
        [12,13,7,6,1],
    ];
    this.road2 = [
        [12,13,14,15,9,10],
        [12,6,7,8,9,10],
        [12,6,7,13,14,8,9,10],
        [12,13,7,8,9,10],
        [12,13,14,8,9,10]
    ];

    this.road1Answer = [];
    this.road2Answer = [];
    this.road1 = false;
    this.road2 = false;
  
  
    // variables
    const drags = document.querySelectorAll('.DragGame—childs2');
    const empties = document.querySelectorAll('.DragGame—childs1');

    const completeBtn = document.getElementById('completedGame');
    const resetBtn = document.getElementById('resetBtn');
    
  
    var dragElement2MyArray = [];
  
    for(var i = 0; i < drags.length; i++ ){
        dragElement2MyArray.push(drags[i])
    }
    
  
    $(() => {
      $(document).bind("dragstart", "DragGame—childs2", (e) => this.dragStart(e));
      $(document).bind("dragend", "DragGame—childs2", (e) => this.dragEnd(e));
    });
  
  

    document.addEventListener('DOMContentLoaded', () => {
        dragElement2MyArray.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
        })
    })


    for(var i = 0; i < empties.length; i++){
        empties[i].setAttribute('data-index', i)
        empties[i].append(i)
    }

  
  
    // Loop through empty boxes and add listeners
    for (const empty of empties) {
      empty.addEventListener('dragover', (e) => this.dragOver(e));
      empty.addEventListener('drop', (e) => this.dragDrop(e));
    }
  
  
  
    // Drag Functions    
    this.dragOver = (e) => {
      e.preventDefault();
    }
    
  
    // drag start 
    this.dragStart = (e) => {
        var cloned = e.target.cloneNode(true);
        
        cloned.classList.add('cloned');
        
        e.target.parentElement.insertBefore(cloned, e.target);
        
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
        console.log(e.target);

        // debugger
        if(e.target.getAttribute('data-road') == 1){
            this.road1 = true;

            if(this.road1 == true && this.road1Answer.length == 0){
                e.target.appendChild(document.querySelector('.draggedElement'))
                addIndexToArray(e, this.road1Answer)
            }

        } else if(e.target.getAttribute('data-road') == 2) {
            this.road2 = true;

            if(this.road2 == true && this.road2Answer.length == 0){
                e.target.appendChild(document.querySelector('.draggedElement'))
                addIndexToArray(e, this.road2Answer)
            }

        } else if(this.road1 == true || this.road2 == true){
            e.target.appendChild(document.querySelector('.draggedElement'))
            addIndexToArray(e, this.road2Answer)
        }
    }
   
  
  

    addIndexToArray = (e, road) => {
        let index = e.target.getAttribute('data-index');

        road.push(parseInt(index))  
    }
    
  
   

  
  
    // after submit 
    this.completGame = () => {
      console.log('completed');
    }
    
  
    completeBtn.addEventListener('click', () => this.completGame());
    resetBtn.addEventListener('click', () => this.init());
  }
  
  const Game = new game();
  
  