function dragebleGame(){
    this.error = false;


    let drag1 = document.getElementById('drag1');
    
    this.allowDrop = (ev) => {
        ev.preventDefault();
    }


    this.drop = (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
    }


    
    

    drag1.addEventListener('drop', this.drop);
    drag1.addEventListener('dragover', this.allowDrop);
}



var dragebleGame = new dragebleGame();