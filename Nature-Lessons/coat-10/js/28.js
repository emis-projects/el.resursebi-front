function natureGames() {
    var draggedImgElement = document.querySelectorAll('.imge');
    var startGame = document.querySelector('.startGame');
    var startButton = document.getElementById('startButton');

    $(draggedImgElement).on('click', (e) => this.clickMe(e));
    $(startGame).on('click', (e) => this.clickMe1(e));

    var drag = document.querySelector('.carieli');
    var c = 70;
    this.secondTimeDown = () => {

        document.getElementById("secondTimeDown").innerHTML = c;
        if ((drag.getAttribute('data-isEmpty') != 1) && (drag.getAttribute('data-isEmpty') != 2) && (drag.getAttribute('data-isEmpty') != 3)) {
            c -= 6;
            if (c < 16) {
                document.getElementById("secondTimeDown").innerHTML = 18;
                clearInterval(z);
            }
        }
        if (drag.getAttribute('data-isEmpty') == 1) {
            c -= 4;
            if (c < 50) {
                document.getElementById("secondTimeDown").innerHTML = 50;
                clearInterval(z);
            }
        }
        if (drag.getAttribute('data-isEmpty') == 2) {
            c -= 3;
            if (c < 55) {
                document.getElementById("secondTimeDown").innerHTML = 56;
                clearInterval(z);
            }
        }
        if (drag.getAttribute('data-isEmpty') == 3) {
            c -= 2;
            if (c < 60) {
                document.getElementById("secondTimeDown").innerHTML = 60;
                clearInterval(z);
            }
        }
    }
    var x;
    var y;
    var z;

    var s = 0;
    this.secondTime = () => {
        if (s == 60) {
            document.getElementById("milliSecontd").innerHTML = "00";
            clearInterval(x);
            clearInterval(y);
            return;
        }
        s++;
        document.getElementById("second").innerHTML = s;
    }

    var m = 0;
    this.milliSecontd = () => {
        if (m == 60) {
            m = 0;
        }
        if (s == 60) {
            document.getElementById("milliSecontd").innerHTML = "00";
            clearInterval(x);
            clearInterval(y);
            return;
        }
        m++;
        document.getElementById("milliSecontd").innerHTML = m;
    }


    this.clickMe1 = (e) => {
        s = 0;

        document.getElementById("secondTimeDown").innerHTML = 70;
        c = 70;

        if ((drag.getAttribute('data-isEmpty') != 1) && (drag.getAttribute('data-isEmpty') != 2) && (drag.getAttribute('data-isEmpty') != 3)) {
            z = setInterval(this.secondTimeDown, 1000)
        }

        if (drag.getAttribute('data-isEmpty') == 1) {
            z = setInterval(this.secondTimeDown, 1000)
        }
        if (drag.getAttribute('data-isEmpty') == 2) {
            z = setInterval(this.secondTimeDown, 1000)
        }
        if (drag.getAttribute('data-isEmpty') == 3) {
            z = setInterval(this.secondTimeDown, 1000)
        }
        this.y = setInterval(this.secondTime, 1000);

        this.x = setInterval(this.milliSecontd, 50 / 3);
        startButton.setAttribute('disabled', 'true');

    }

    this.clickMe = (e) => {
        startButton.removeAttribute('disabled');
        var drag = document.querySelector('.carieli');
        clearInterval(this.x);
        clearInterval(this.y);
        clearInterval(z);
        document.getElementById("secondTimeDown").innerHTML = 70;
        document.getElementById("second").innerHTML = "00";
        document.getElementById("milliSecontd").innerHTML = "00";

        if (e.target.getAttribute('data-change') == 'hay') {
            drag.setAttribute('data-isEmpty', 1);
            drag.src = '../../img/gakvetilebi/buneba/coat-10/Group 62298.svg';
        }
        if (e.target.getAttribute('data-change') == 'syntipon') {
            drag.setAttribute('data-isEmpty', 2);
            drag.src = '../../img/gakvetilebi/buneba/coat-10/sintiponi.svg';
        }
        if (e.target.getAttribute('data-change') == 'feather') {
            drag.setAttribute('data-isEmpty', 3);
            drag.src = '../../img/gakvetilebi/buneba/coat-10/bumbuli.svg';
        }

        draggedImgElement.forEach(element => {
            $(element).removeClass('selected')
        });
        $(e.target).addClass('selected')
    }



}


const naturegame = new natureGames();