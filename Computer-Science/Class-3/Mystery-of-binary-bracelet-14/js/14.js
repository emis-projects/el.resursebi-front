var corAns = [
    0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0
]

var myAns = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

var canPlay = true;

Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}

for (i=0; i<81; i++) {
    document.getElementsByClassName('game-block')[i].addEventListener('click', function (event) {
        if(canPlay == true) {
            objectClicked = event.target;
            objectClicked.classList.toggle("black-bg");
        };
    });
};



document.getElementById('resetBtn').addEventListener('click', function (event) {
    for (i=0; i<81; i++) {
        myObject = document.getElementsByClassName('game-block')[i]
        if(myObject.classList.contains("black-bg")) {
            myObject.classList.remove('black-bg');
        }

        if(myObject.classList.contains("redBord")) {
            myObject.classList.remove('redBord');
        }

        canPlay = true;
    };
});

document.getElementById('completedGame').addEventListener('click', function (event) {
    if(canPlay) {
        for (i=0; i<81; i++) {
            if ((document.getElementsByClassName('game-block')[i].classList.contains("black-bg"))){
                myAns[i] = 0;
            } else {
                myAns[i] = 1;
            }
        };

        if(myAns.equals(corAns)) {
            window.location.href = "game-success-14.html";
        } else {
            for (i=0; i<81; i++) {
                if(myAns[i] != corAns[i]) {
                    document.getElementsByClassName('game-block')[i].classList.add("redBord");
                }
            }

            canPlay = false;
        }
        
        //else {
            // alert("NOT SAME")
        };
    
});