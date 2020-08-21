const images = document.querySelectorAll('.cs-3-16-div-10-arrow-col img')
const dropbox = document.querySelectorAll('.lines div')

let dragged = null;

let firstLine = []
let secondLine = []
let thirdLine  = []
let line = null;

const firstCheck = ['up', 'right', 'right', 'down']
const secondCheck = ['up', 'right', 'right', 'right', 'right', 'down']
const thirdCheck = ['up', 'right', 'right', 'right', 'down']


images.forEach(image => {
    image.addEventListener("dragstart", onDragStart)
    image.addEventListener("dragend", onDragEnd)
})


dropbox.forEach(elm => {
    elm.addEventListener("dragover", dragOver)
    elm.addEventListener("drop", drop)
})

function onDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.direction);
    dragged = event.target
    console.log(firstLine, secondLine, thirdLine)
}


function onDragEnd(event) {
    console.log("end");
}


function dragOver(e) {
    e.preventDefault();
        if(e.target.dataset.line === '1'){
            line = 'first'
        }else if(e.target.dataset.line === '2'){
            line = 'second'
        }else{
            line = 'third'
        }
}


function drop(e) {
    e.preventDefault();
    document.getElementById('completedGame').removeAttribute('disabled')
    let copedNode = dragged.cloneNode(true)
    switch (line){
        case 'first':
            firstLine.push(dragged.dataset.direction)
            break;
        case 'second':
            secondLine.push(dragged.dataset.direction)
            break;
        case 'third':
            thirdLine.push(dragged.dataset.direction)
            break;
        default:
            break;
    }
    this.append(copedNode);
}

document.getElementById('resetBtn').addEventListener('click', ()=>{
    dropbox.forEach(elm => {
        elm.innerHTML = ''
    })
    for (let i = 1; i < 4; i++) {
        document.getElementById('line-'+i).classList.remove('error')
    }
    document.getElementById('completedGame').removeAttribute('disabled')
})

document.getElementById('completedGame').addEventListener('click', check)

function check(){
    console.log(arrayCheck(firstLine, firstCheck))
    let one = arrayCheck(firstLine, firstCheck)
    let two = arrayCheck(secondLine, secondCheck)
    let third = arrayCheck(thirdLine, thirdCheck)
    if(one && two && third) {
        location.href = 'game-success-10.html'
    }else if(!one){
        console.log('fire')
        document.getElementById('line-1').classList.add('error')
        document.getElementById('completedGame').setAttribute('disabled', true)
    }else if(!two){
        console.log('fire')
        document.getElementById('line-2').classList.add('error')
        document.getElementById('completedGame').setAttribute('disabled', true)
    }else if(!third){
        console.log('fire')
        document.getElementById('line-3').classList.add('error')
        document.getElementById('completedGame').setAttribute('disabled', true)
    }
}

function arrayCheck(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
