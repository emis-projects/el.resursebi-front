const listen = document.getElementById("listen-btn");
const secondLine = document.getElementById('second-half')
const firstBox = document.querySelectorAll("#box-1 img");
const secondBox = document.querySelectorAll("#box-2 img");
const thirdBox = document.querySelectorAll("#box-3 img");
const checkBoxes = document.querySelectorAll('.check-box')

let isActive = false;
let firstStage = true;
let voiceId = 1;
let secondCheck = null;
let check = [];


createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];

function handleLoadComplete(event) {
  createjs.Sound.play("sound");
}

function handleLoadstop(event) {
  createjs.Sound.stop("sound");
}

listen.addEventListener("click", (evt) => {
  handleLoadstop();
  createjs.Sound.registerSound({
    src: `${evt.target.getAttribute("data-voice")}`,
    id: "sound",
  });
  handleLoadComplete();
  voiceId = 1;
  isActive = true
});

firstBox.forEach((el) => {
  // ეშვება დაკვრის ფუნქცია
  play(el)
});


secondBox.forEach((el) => {
  // ეშვება დაკვრის ფუნქცია
  play(el)
});


thirdBox.forEach((el) => {
  // ეშვება დაკვრის ფუნქცია
  play(el)
});


checkBoxes.forEach(elm => {
    elm.addEventListener('click', (evt)=>{
      // შლის active კლასს თუ თამაშის პირველი ეტაპი დასტულებულია
      checkBoxes.forEach(e => {
        if(!firstStage) {
          e.classList.remove('active')
        }
      })
      // შლის active კლასს და შლისს data-id მასივიდან
      if(evt.target.classList.contains('active')){
        let index = check.indexOf(evt.target.dataset.id)
        check.splice(index, 1)
        evt.target.classList.remove('active')


        // ამატებს active კლასს და ინახავს data-id მასივში
      }else if(!evt.target.classList.contains('active')){
        evt.target.classList.add('active')
        check.push(evt.target.dataset.id)
        if(!firstStage){
          secondCheck = evt.target.dataset.id
        }
      }
    })
})

//უკრავს ხმას სურათებზე დაჭერისას
function play(el) {
    el.addEventListener("click", (evt) => {
      // დაუკრას თუ "მოუსმინეს" დააჭირა
      if(isActive){
      let id = evt.target.dataset.id;
      let voice = 'data-voice-' + id
      handleLoadstop();
      createjs.Sound.registerSound({
        src: `${evt.target.getAttribute(voice)}`,
        id: "sound",
      });
      handleLoadComplete();
      }
    });
}


document.getElementById('completedGame').addEventListener('click', () => {
  // გადადის მეორე დონეზე თუ მონიშნულია 1 და 3 (ჩნდება 2 აბზაცი)
  if ( check.length === 2 && check.includes('1') && check.includes('3')){
    secondLine.style.display = 'block'
    document.getElementById(`box-${check[0]}`).classList.add('true')
    document.getElementById(`box-${check[1]}`).classList.add('true')
    setTimeout(()=>{
      firstStage = false;
      checkBoxes.forEach(el => {
        el.classList.remove('active')
      })
      document.getElementById(`box-${check[0]}`).classList.remove('true')
      document.getElementById(`box-${check[1]}`).classList.remove('true')
    }, 2000)
  }else{
    let wrong = check.indexOf('2')
    document.getElementById(`box-${check[wrong]}`).classList.add('false')
    console.log(a)
  }
  // ასრულებს თუ მოეორე დონეზე მონიშნულია 1
  if(secondCheck === '1'){
    location.href = "./game-success-21.html";
  }
})