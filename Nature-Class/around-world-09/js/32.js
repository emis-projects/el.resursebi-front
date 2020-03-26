function natureGames(){
    var aroundWorldTitle = document.querySelectorAll('.around_world-title');
    var myImage = document.querySelectorAll('.myImage');
    var dSpan = document.querySelectorAll('.dSpan')

    $(aroundWorldTitle).on('click', (e) => this.clickMe(e));
    $(myImage).on('click', (e) => this.clickMeImage(e));
    console.log(dSpan)



    var routes;
    var speed;
    var result;

    this.clickMe = (e) => {
        aroundWorldTitle.forEach(element => {
            $(element).removeClass('active')
            //console.log(element.getAttribute('data-value'))
        });

        e.target.classList.add('active')
        this.routes = e.target.getAttribute('data-value');
        
        if(this.routes != null && this.speed != null){
            document.getElementById(this.result).innerHTML = Math.round(this.routes/this.speed) + 'სთ';
        }
        
    }


    this.clickMeImage = (v) => {
        dSpan.forEach(element => {
            element.innerHTML = '';
        });
        myImage.forEach(element => {
            $(element).removeClass('active')
        });
        console.log(v.target.getAttribute('data-place'))
        v.target.parentElement.classList.add('active')
        this.speed = v.target.getAttribute('data-value');
        this.result = v.target.getAttribute('data-place');
        if(this.routes != null && this.speed != null){  
            document.getElementById(this.result).innerHTML = Math.round(this.routes/this.speed) + 'სთ';
        }
    }
}

const naturegame = new natureGames();