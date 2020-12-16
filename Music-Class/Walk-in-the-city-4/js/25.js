createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];
function handleLoadComplete(event) {
    createjs.Sound.play("sound");
}

function handleLoadstop(event) {
    createjs.Sound.stop("sound");
}

document.querySelectorAll('.listen--btn').forEach(w => {
    w.addEventListener('click', (e) => {
        handleLoadstop()
        createjs.Sound.registerSound({ src: `${e.target.getAttribute('data-voice')}`, id: "sound" });
        handleLoadComplete()
    })
})


function musicGames() {
    var checkmarkJS1 = document.querySelectorAll('.checkmarkJS1');
    var checkmarkJS2 = document.querySelectorAll('.checkmarkJS2');
    var checkmarkJS3 = document.querySelectorAll('.checkmarkJS3');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');
    
    $(checkmarkJS1).on('click', (e) => this.clickMe1(e));
    $(checkmarkJS2).on('click', (e) => this.clickMe2(e));
    $(checkmarkJS3).on('click', (e) => this.clickMe3(e));

    function deleteClass(el) {
        $(el).removeClass("error");
        $(el).removeClass("active");
        $(el).removeClass("success");
    }


    var count = 0;
    function verifyAll(element) {
        if (element.classList.contains('active')) {
            if (element.classList.contains('correctJS')) {
                $(element).removeClass("active")
                element.classList.add('success');
                count++;
            }
        }
        if ((element.classList.contains('active'))) {
            if ((element.classList.contains('noCorrectJS'))) {
                $(element).removeClass("active")
                element.classList.add('error');
            }
        }
    }

    this.clickMe1 = (e) => {
        checkmarkJS1.forEach(element => {
            deleteClass(element);
        });
        e.target.classList.add('active');
    }
    this.clickMe2 = (e) => {
        checkmarkJS2.forEach(element => {
            deleteClass(element);
        });
        e.target.classList.add('active');
    }
    this.clickMe3 = (e) => {
        checkmarkJS3.forEach(element => {
            deleteClass(element);
        });
        e.target.classList.add('active');
    }

    this.completGame = () => {
        checkmarkJS1.forEach(element => {
            verifyAll(element);
        });
        checkmarkJS2.forEach(element => {
            verifyAll(element);
        });
        checkmarkJS3.forEach(element => {
            verifyAll(element);
        });


        console.log('count', count)
        if (count == 3) {
            this.successPage();
        }


        completedBtn.setAttribute('disabled', 'true');
    }



    this.init = (e) => {
        count = 0;
        checkmarkJS1.forEach(element => {
            deleteClass(element);
        });
        checkmarkJS2.forEach(element => {
            deleteClass(element);
        });
        checkmarkJS3.forEach(element => {
            deleteClass(element);
        });
        completedBtn.removeAttribute('disabled');
    }

    this.successPage = () => {
        location.href = 'game-success-25.html';
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
}





const musicgame = new musicGames();