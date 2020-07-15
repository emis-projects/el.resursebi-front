let group = null,
    width = null,
    nodesData = null;


  function getTypeAndWidth(number) {
    if(number == 1){
      group = "step"
  
    } else if(number == 2) {
      group = "exercise"
  
    } else if(number == 3) {
      group = "hint"
  
    } else if(number == 4) {
      group = "mid"
  
    } else if(number == 5) {
      group = "complexExercise"

    } else if(number == 6) {
      group = "complexExercise2"
    }
  }


  document.addEventListener('DOMContentLoaded', async () => {
    // variables 
    const firstComplexExercise = [];
    const firstStep = [];

    const json = await $.getJSON("data.json");

    var modifierObject = json.pages.filter(w => w.type !== null).map(w => {
      getTypeAndWidth(w.type)

      return {...w, id: w.number, width: width, group}
    })

    modifierObject.map((w, i) => {
      switch (w.type) {
        case 5:
          firstComplexExercise.push(w)
          break;
        }
    })



    console.log(modifierObject)
    
    var arr = [];   //ვიმახსოვრებთ იმ ინდექსების ნომრებს რომლებზეც დგას type: 1
    var arrPush1 = []; // ვყრით პირველ შუალედს
    var arrPush2 = [];
    var arrPush3 = [];
    var arrPush4 = [];

    for(let i=0; i<modifierObject.length; i++){
      if(modifierObject[i].type == 1){
        arr.push(i);
      }
    }
    console.log('index',arr)

    for(let j = arr[0]+1; j<arr[1]; j++){
      arrPush1.push(modifierObject[j])
    }

    for(let j = arr[1]+1; j<arr[2]; j++){
      arrPush2.push(modifierObject[j])
    }

    for(let j = arr[2]+1; j<arr[3]; j++){
      arrPush3.push(modifierObject[j])
    }

    for(let j = arr[3]+1; j<arr[4]; j++){
      arrPush4.push(modifierObject[j])
    }
    

    console.log('arrPush1', arrPush1)
    console.log('arrPush2', arrPush2)
    console.log('arrPush3', arrPush3)
    console.log('arrPush4', arrPush4)

    // nodesData = modifierObject

  })



  // function filterData(data) {

  // }



Vue.component('appVis', {
    template: `
     <div>
        <div id="mynetwork" ref="vis"></div>
     </div>
        `,
        mounted() {
            // mounted ეშვება ყოველ ჯერზე როდესაც ვუ.ჯს არენდერებს (ქმნის) ვირტუალურ DOM ამიტომ 
            // როდესაც მომხმარებელი დააკლიკებს მენიუს გამოჩენა/დამალვაზე ვის.ჯს ხელახლა უნდა გამოვიძახოთ აქ
            init()
        }
});

 // ვუე.ჯს უნდა ინიცირდეს ვის.ჯს ინიცირებამდე და რადგანაც ვის.ჯს გვერდის ჩატვირთვისას არ გვჭირდება, გამოვიძახებთ მხოლოდ mounted() ციკლში.
var vm = new Vue({
    el: '#app',
    data: {
        isActive: false
    },
    methods: {
        initFun(){
            this.isActive = !this.isActive
        }
    }
  })
    
    // აქ იხატება ყველაფერი. დოკუმენტაცია: https://visjs.github.io/vis-network/docs/network/ -->

    // ვის.ჯს რომ ჩავტვირთოთ ვუში როცა კომპონენტს დავარენდერებთ(ხილულს გავხდით).
    // რადგანაც ვის.ჯს ყოველ ჯერზე თავიდან უნდა გაეშვას ამიტომ მთლიანი ვის.ჯს თავისი კოდით გლობ. ფუნქციად უნდა გავიტანოთ

    function init(){

      if(nodesData !== null){
        var nodes = new vis.DataSet(nodesData);
      }
  
      // create an array with edges
      var edges = new vis.DataSet([
        // { from: 1, to: 5 },
        // { from: 5, to: 6 },
        // {
        //   from: 1, to: 3, width: 2
        // },
        // {
        //   from: 1, to: 2, width: 2,
        //   shadow: {
        //     enabled: true,
        //     color: 'rgba(220,108,133,0.4)'
        //   }
        // },
        // {
        //   from: 1, to: 4, width: 2,
        //   shadow: {
        //     enabled: true,
        //     color: 'rgba(220,108,133,0.4)'
        //   }
        // }
      ]);

  
      // create a network
      var container = document.getElementById('mynetwork');
  

      // provide the data in the vis format
      var data = {
        nodes: nodes,
        edges: edges
      };
  

      var options = {
  
        nodes: { // ფროფერთიები აქ (groups-შიც იგივეებია): https://visjs.github.io/vis-network/docs/network/nodes.html
          shape: 'dot',
          fontStrokeWidth: 0.5,
          fontStrokeColor: 'black',
          chosen: true,
          selectable: true
        },
        edges: { // ფროფერთიები აქ: https://visjs.github.io/vis-network/docs/network/edges.html
          color: '#fff',
          width: 16,
          shadow: {
            enabled: true,
            color: 'rgba(127,209,216,0.4)'
          }
        },
        groups: {
          complexExercise: { // კომპლექსური დავალება
            shape: 'image',
            image: {
              unselected: 'images/complexExercise.png',
              selected: 'images/complexExerciseActive.png'
            },
            size: 50
          },
          complexExercise2: { // კომპლექსური დავალება
            shape: 'image',
            image: {
              unselected: 'images/complexExercise2.png',
              selected: 'images/complexExercise2Active.png'
            },
            size: 50
          },
          exercise: {  // სავარჯიშო
            shape: 'image',
            image: {
              unselected: 'images/exercise.png',
              selected: 'images/exerciseActive.png'
            },
            size: 25
          },
          hint: { // მინიშნება
            shape: 'image',
            image: {
              unselected: 'images/hint.png',
              selected: 'images/hintActive.png'
            },
            size: 25
          },
          mid: {  // შუალედური
            shape: 'image',
            image: {
              unselected: 'images/mid.png',
              selected: 'images/midActive.png'
            },
            size: 25
          },
          step: {  // ნაბიჯი
            shape: 'image',
            image: {
              unselected: 'images/step.png',
              selected: 'images/stepActive.png'
            },
            size: 50
          }
        }
  
      };
  

      // initialize your network!
      var network = new vis.Network(container, data, options);
  
  
      network.on('select', function (properties) {
  
        var SelectedNodeID = network.getSelection().nodes[0];
        var thisNodeUrl = nodes.get(SelectedNodeID).url;
  
        console.log(thisNodeUrl);
  
      });
    }