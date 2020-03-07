function natureGames() {
    var sliderBlue = document.getElementById("myRangeBlue");
    var sliderRed = document.getElementById("myRangeRed");
    var imgeBlue = document.getElementById("imgeBlue");
    var imgeRed = document.getElementById("imgeRed");
    var resetBtn = document.getElementById('resetBtn');

    sliderBlue.oninput = function () {
        console.log(this.value)
        imgeBlue.style.right = '';
        imgeBlue.style.left += "50%";
        imgeBlue.style.marginLeft = this.value + "px";
        imgeRed.style.marginLeft =  this.value +"px";
        sliderRed.value = this.value;
    }
    sliderRed.oninput = function () {
        console.log(this.value)
        imgeRed.style.marginLeft= (-100+Number(this.value)) +"px"; 
        imgeBlue.style.marginLeft =  (-100+Number(this.value)) +"px"; 
        sliderBlue.value = this.value;
    }

    this.init = () => {
        sliderRed.value = this.value;
        sliderBlue.value = this.value;
        imgeBlue.style="width: 19%; position: absolute; top: 15%; left: 50%; transform: translateX(-50%) scale(1);"
        imgeRed.style ="width: 19%; position: absolute;top: 58%; left: 50%; transform: translateX(-50%) scale(1);" 

    }

    resetBtn.addEventListener('click', () => this.init());
}



const naturegame = new natureGames();