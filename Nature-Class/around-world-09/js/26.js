function naturegaMes(){
    var draggedImgElement = document.querySelectorAll('.imge');
    var chrAmerica = document.getElementById('Path_163305');
    var europ = document.getElementById('Path_163331');
    var africa = document.getElementById('Path_163552');
    var asia = document.getElementById('Path_163405');



    $(draggedImgElement).on('click', (e) => this.clickMe(e));


    this.clickMe = (e) => {
        europ.style.fill = '';
        chrAmerica.style.fill = '';
        africa.style.fill = '';
        asia.style.fill = '';
        if(e.target.getAttribute('data-place') == "europ"){
            europ.style.fill = "#f7c744";
        }
        if(e.target.getAttribute('data-place') == "chrAmerica"){
            chrAmerica.style.fill = "#f7c744";
        }
        if(e.target.getAttribute('data-place') == "africa"){
            africa.style.fill = "#f7c744";
        }
        if(e.target.getAttribute('data-place') == "asia"){
            asia.style.fill = "#f7c744";
        }
        
        var colorn = document.querySelectorAll('.colorn')
    }


}

const naturegame = new naturegaMes();