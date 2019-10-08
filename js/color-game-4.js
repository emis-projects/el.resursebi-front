
    const drag1 = document.getElementById('drag1');
    const drag2 = document.getElementById('drag2');
    const empties = document.querySelectorAll('.question__dot');

    // Fill listeners
    drag1.addEventListener('dragstart', dragStart);
    drag1.addEventListener('dragend', dragEnd);
    drag2.addEventListener('dragstart', dragStart);
    drag2.addEventListener('dragend', dragEnd);


    // Loop through empty boxes and add listeners
    for (const empty of empties) {
      empty.addEventListener('dragover', dragOver);
      empty.addEventListener('dragenter', dragEnter);
      empty.addEventListener('dragleave', dragLeave);
      empty.addEventListener('drop', dragDrop);
    }

    function dragStart() {
        this.className += ' hold';
        setTimeout(() => (this.className = 'hidden'), 0);
      }
      
      function dragEnd(e) {
        this.className = e.srcElement.dataset.class;
      }
      
    
    // Drag Functions    
    function dragOver(e) {
      e.preventDefault();
    }
    
    function dragEnter(e) {
      e.preventDefault();
      this.className += ' hovered';
    }
    
    function dragLeave() {
      this.className = 'question__dot';
    }
    
    function dragDrop() {
      this.className = 'question__dot';
      this.append(drag1);

    }
    