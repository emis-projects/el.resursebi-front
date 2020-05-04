function computerGames(){
    var checkmarkJs = document.querySelectorAll('.checkmarkJs');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');
    $(checkmarkJs).on('click', (e) => this.clickMe(e));

    function JsDelete5(element){
        if(window.location.href.includes("5.html")){
            $(element).removeClass( "selectedJs")
            $(element).removeClass( "selected");
        }
    }
    function JsAdd5(element){
        if(window.location.href.includes("5.html")){
            element.classList.add('selected');
        }
    }
    function JsDelete7(element){
        if(window.location.href.includes("7.html")){
            $(element).removeClass( "selectedJs")
            $(element).removeClass( "circle-fill");
        }
    }
    function JsAdd7(element){
        if(window.location.href.includes("7.html")){
            element.classList.add('circle-fill');
        }
    }
    function JsDelete14(element){
        if(window.location.href.includes("14.html")){
            $(element).removeClass( "selectedJs")
            element.style = '';
        }
    }
    function JsAdd14(element){
        if(window.location.href.includes("14.html")){
            element.style = "background: #947dce";
        }
    }

    // #947dce

    this.clickMe = (e) => {
        checkmarkJs.forEach(element => {
            //$(element).removeClass( "selected")
            JsDelete5(element);
            JsDelete7(element);
            JsDelete14(element);

        });
        e.target.classList.add('selectedJs');
        JsAdd5(e.target);
        JsAdd7(e.target);
        JsAdd14(e.target);

        
    }

    this.completGame = () => {
        var count = 0;
        checkmarkJs.forEach(element => {
            if(element.classList.contains('selectedJs')){
                if(element.classList.contains('correct')){
                    //element.style = "background: #a1dd6f";
                    // $(element).removeClass( "selected")
                    JsDelete5(element);
                    JsDelete7(element);
                    JsDelete14(element);
                    element.classList.add('success');
                    count++;
                }
                if((element.classList.contains('noCorrect'))){
                    // $(element).removeClass( "selected")
                    JsDelete5(element);
                    JsDelete7(element);
                    JsDelete14(element);
                    element.classList.add('error');
                }
            }
        });
        

        if (count == 1) {
            this.successPage();
        }


        completedBtn.setAttribute('disabled', 'true');
    }



    this.init = (e) =>{
        checkmarkJs.forEach(element => {
            $(element).removeClass( "error")
            $(element).removeClass( "success")
            // $(element).removeClass( "selected")
            JsDelete5(element);
            JsDelete7(element);
            JsDelete14(element);
        });
        completedBtn.removeAttribute('disabled');
    }

    this.successPage = () => {
        if(window.location.href.includes("5.html")){
            location.href = 'game-success-5.html';
        }
        if(window.location.href.includes("7.html")){
            location.href = 'game-success-7.html';
        }
        if(window.location.href.includes("14.html")){
            location.href = 'game-success-14.html';
        }
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
}





const computergame = new computerGames();