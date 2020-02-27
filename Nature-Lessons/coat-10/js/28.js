function natureGames(){
    var draggedImgElement = document.querySelectorAll('.imge');

    $(draggedImgElement).on('click', (e) => this.clickMe(e));



    this.clickMe = (e) => {
        console.log('click', e.target)
        draggedImgElement.forEach(element => {
            $(element).removeClass('selected')
        });
        $(e.target).addClass('selected')
    }



}


const naturegame = new natureGames();