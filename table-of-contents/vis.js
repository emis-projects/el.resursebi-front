let group = null,
    nodesData = null,
    width = null;

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
    }
  }
  

  document.addEventListener('DOMContentLoaded', async () => {
    const json = await $.getJSON("data.json");

    var removeNullObjectToTheArray = json.pages.filter(w => w.type !== null).map(w => {
      getTypeAndWidth(w.type)

      return {...w, id: w.number, width: width, group}
    })

    nodesData = removeNullObjectToTheArray
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
        isActive: true
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

      console.log(nodesData);

      if(nodesData !== null){
        var nodes = new vis.DataSet(nodesData);
      }
  
      // create an array with edges
      var edges = new vis.DataSet([
        { from: 1, to: 5 },
        {
          from: 1, to: 3, width: 2
        },
        {
          from: 1, to: 2, width: 2,
          shadow: {
            enabled: true,
            color: 'rgba(220,108,133,0.4)'
          }
        },
        {
          from: 1, to: 4, width: 2,
          shadow: {
            enabled: true,
            color: 'rgba(220,108,133,0.4)'
          }
        }
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
          fontStrokeColor: 'white',
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
              selected: 'images/complexExercise.png'
            },
            size: 50
          },
          exercise: {  // სავარჯიშო
            shape: 'image',
            image: {
              unselected: 'images/exercise.png',
              selected: 'images/exercise.png'
            },
            size: 25
          },
          hint: { // მინიშნება
            shape: 'image',
            image: {
              unselected: 'images/hint.png',
              selected: 'images/hint.png'
            },
            size: 25
          },
          mid: {  // შუალედური
            shape: 'image',
            image: {
              unselected: 'images/mid.png',
              selected: 'images/mid.png'
            },
            size: 25
          },
          step: {  // ნაბიჯი
            shape: 'image',
            image: {
              unselected: 'images/step.png',
              selected: 'images/step.png'
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