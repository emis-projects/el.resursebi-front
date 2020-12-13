createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];

function handleLoadComplete(event) {
    createjs.Sound.play("sound");
}

function handleLoadstop(event) {
    createjs.Sound.stop("sound");
}

const questions = [
    {sound: "./game-voices/სლაიდი 16/do-fa-mi-re.wav", answer: 6},
    {sound: "./game-voices/სლაიდი 16/do-fa-mi-re.wav", answer: 6},
    {sound: "./game-voices/სლაიდი 16/do-mi-re-mi.wav", answer: 1},
    {sound: "./game-voices/სლაიდი 16/do-re-do-do.wav", answer: 3},
    {sound: "./game-voices/სლაიდი 16/do-re-mi-do.wav", answer: 4},
    {sound: "./game-voices/სლაიდი 16/fa-re-do-do.wav", answer: 5},
    {sound: "./game-voices/სლაიდი 16/mi-mi-re-do.wav", answer: 8},
    {sound: "./game-voices/სლაიდი 16/si-la-sol-sol.wav", answer: 2},
    {sound: "./game-voices/სლაიდი 16/sol-fa-mi-do.wav", answer: 7},
]


function game() {
    this.index = 1;
    this.index2 = 1;
    this.answer = 6;
    this.error = false;


    let listenBtn = document.querySelectorAll('.listen--btn');
    let dragElement1 = document.querySelector('.DragGame—childs1');
    let dragElement2 = document.querySelectorAll('.DragGame—childs2');
    let correctAnswer = document.getElementById('correctAnswer');
    const completeBtn = document.getElementById('completedGame');
    const resetBtn = document.getElementById('resetBtn');


    const array = []

    // listeners
    resetBtn.addEventListener('click', () => this.init());


    $(listenBtn).click((e) => {
        $(listenBtn).addClass('rotate_btn')
        handleLoadstop()
        createjs.Sound.registerSound({src: questions[this.index].sound, id:"sound"});
        handleLoadComplete()
    })


    document.addEventListener('DOMContentLoaded', () => {
        handleLoadstop()
        createjs.Sound.registerSound({src: questions[this.index].sound, id:"sound"});
        handleLoadComplete()

        this.answer = questions[this.index].answer;
    })


    $(dragElement2).on('dragstart', (e) => this.dragStart(e));
    $(dragElement2).on('dragend', (e) => this.dragEnd(e));

    // Loop through empty boxes and add listeners

    dragElement1.addEventListener('dragover', (e) => this.dragOver(e));
    dragElement1.addEventListener('drop', (e) => this.dragDrop(e));

    document.addEventListener('DOMContentLoaded', () => {
        dragElement2MyArray.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
        })

        document.querySelector('.DragGame—childs1').setAttribute('data-index', this.answer)

        document.querySelector('.num').innerHTML = this.index2;

        let el = document.querySelectorAll('.DragGame—childs2');

        for(var i = 0; i < el.length; i++) {
            let cloned = el[i].cloneNode(true);

            array.push(cloned)
        }
    })


    var dragElement2MyArray = [];
    for(var i = 0; i < dragElement2.length; i++ ){
        dragElement2MyArray.push(dragElement2[i])
    }


    // Drag Functions    
    this.dragOver = (e) => {
        e.preventDefault();
    }

    // drag start 
    this.dragStart = (e) => {
        setTimeout(() => {
            e.target.className = "draggedElement"
        }, 0);
    }


    // drag end
    this.dragEnd = e => {
        let elClassName = e.target.getAttribute('data-class');
        e.target.className = elClassName;
    }
    

    this.dragdrop = e => { e.preventDefault();
        if(document.querySelector('.draggedElement').getAttribute('data-index') == this.answer){
            this.index++;
            this.index2++;
            document.querySelector('.num').innerHTML = this.index2

            $(listenBtn).removeClass('rotate_btn')
            
            e.target.appendChild(document.querySelector('.draggedElement'));

            document.querySelector('.music-new-4-div-14-lyrics-img-arrow').setAttribute('src', "../../img/gakvetilebi/Music-class/Walk-in-the-city-4/music-new-04-14-arrow.svg")
            setTimeout(() => {
                $('.DragGame—childs1 img').attr('style', 'display: none');
            }, 2000)
            
            this.answer = questions[this.index].answer;

            if(this.index == 9) {
                location.href = "game-success-14.html"
            }

        } else {
            $(listenBtn).removeClass('rotate_btn')
            document.querySelector('.music-new-4-div-14-lyrics-img-arrow').setAttribute('src', "../../img/gakvetilebi/Music-class/Walk-in-the-city-4/Group 48297.svg")
        }
    }



    this.init = () => {
        this.index = 1;
        this.index2 = 1;
        this.answer = 6;

        document.querySelector('.num').innerHTML = this.index2

        $(listenBtn).removeClass('rotate_btn')

        document.querySelector('.music-new-4-div-14-lyrics-img-arrow').setAttribute('src', "../../img/gakvetilebi/Music-class/Walk-in-the-city-4/music-new-04-14-arrow.svg")

        for(let items of document.querySelectorAll('.DragGame—childs2')) {
            console.log(items);

            $(items).attr('style', 'display: block');
            
            let parent = items.getAttribute('data-child');

            if(items.getAttribute('data-index') == 4){
                $(items).insertBefore('.col-6')
            } else {
                $(`.${parent}`).append(items)
            }

        }

        // stop voice 
        createjs.Sound.stop("sound");
    }
}



const Game = new game();
