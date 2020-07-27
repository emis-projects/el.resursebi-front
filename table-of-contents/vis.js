let jsonObject = null,
    group = null,
    width = null,
    nodesData = null,
    obj = [];
    stepIndexes = []

    
  getTypeAndWidth = (number) => {
    if(number == 1){
      group = "step"
      width = 2
  
    } else if(number == 2) {
      group = "exercise"
      width = 12
  
    } else if(number == 3) {
      group = "hint"
      width = 7
  
    } else if(number == 4) {
      group = "mid"
      width = 10
  
    } else if(number == 5) {
      group = "complexExercise"
      width = 4

    } else if(number == 6) {
      group = "complexExercise2"
      width = 4
    }
  }



  document.addEventListener('DOMContentLoaded', async () => {
     
    const json = await $.getJSON("data.json");

    jsonObject = json;

    var modifierObject = json.pages.filter(w => w.type !== null).map(w => {
      getTypeAndWidth(w.type)

      return {...w, id: w.number, width: width, group}
    })


 
    var Stepindex = 0;
    var complexIndex = 0;
    
    
    // აქ ვფილტრავ იმ ნაბიჯებს და კომპლექსურებს რომლებიც უნდა ჩანდეს სარჩევში.
    modifierObject.map((w, i, e) => {
      if(w.type === 1){
        stepIndexes.push(w.id)

        if(w.type == 1 && Stepindex == 0) {
          obj.push(w)
          Stepindex++

        } else {
          Stepindex = 0;
        }

      } else if(w.type === 5) {
        if(w.type == 5 && complexIndex == 0) {
          obj.push(w)
          complexIndex++

        } else {
          complexIndex = 0;
        }

      } else {
        complexIndex = 0;
        Stepindex = 0;
        return false
      }


    })


    // პირველი კომპლექსურის group ის შეცვლა
    obj[0].group = "complexExercise2";



    console.log(stepIndexes);
    console.log(modifierObject)

    nodesData = [...obj]
  })



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
    let stickObj = []

    // ძრითადი სტეპების გადაბმა
    obj.map((w,i,e) => {
      if((i + 1) < obj.length){
        var next = e[i + 1];

        let object = {
          from: w.id,
          to: next.id
        }
        stickObj.push(object)
      }
    })

    var nodes = new vis.DataSet(nodesData);


    // create an array with edges
    var edges = new vis.DataSet(stickObj);


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