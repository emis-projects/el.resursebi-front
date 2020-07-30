let jsonObject = null,
    group = null,
    width = null,
    nodesData = null,
    obj = [];
    stepIndexes = []


  getTypeAndWidth = (number) => {
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

    }
  }



  document.addEventListener('DOMContentLoaded', async () => {

    const json = await $.getJSON("data.json");

    jsonObject = json;


    // ამ ფილტრით ხდება null ების და ignore ების ამოშლა
    var modifierObject = json.pages.filter(w => w.type !== null  && !w.ignore).map(w => {
      getTypeAndWidth(w.type)

      return {...w, id: w.number, url: w.number, width: width, group}
    })

    var Stepindex = 0;
    var complexIndex = 0;
    var stepLabelValue = 0;

    // ამ ფილტრით ვშლი იმ ნაბიჯებს და კომპლექსურებს რომლებიც არაა საჭირო
    // ანუ თუ კომპლექსურს მოსდევს ისევ კომპლექსური, მეორე კომპლექსური ამოიშლება.
    // ასევე ნაბიჯზეც იგივე მოხდება.
    let secondFilteredData = modifierObject.filter((w, i, e) => {
      if(w.type === 5){
        if(w.type == 5 && complexIndex == 0) {
          complexIndex++
          return true

        } else {
          return false
        }
      } else if(w.type === 1){
        if(w.type == 1 && Stepindex == 0) {
          Stepindex++
          stepLabelValue++
          w.label = `${stepLabelValue}`;
          return true

        } else {
          return false
        }

      } else {
        Stepindex = 0;
        complexIndex = 0;
        return true
      }
    })


    // პირველი კომპლექსურის group ის შეცვლა
    secondFilteredData[0].group = "complexExercise2";

    obj = secondFilteredData;

    console.log(secondFilteredData)

    nodesData = [...secondFilteredData]
  })





  // აქ იხატება ყველაფერი. დოკუმენტაცია: https://visjs.github.io/vis-network/docs/network/ -->

  // ვის.ჯს რომ ჩავტვირთოთ ვუში როცა კომპონენტს დავარენდერებთ(ხილულს გავხდით).
  // რადგანაც ვის.ჯს ყოველ ჯერზე თავიდან უნდა გაეშვას ამიტომ მთლიანი ვის.ჯს თავისი კოდით გლობ. ფუნქციად უნდა გავიტანოთ

  function init(){
    let activeNodeID;
    let array = [];
    let index = 0;


    // გადაბმები
    obj.map((w, i, e) => {
      if(w.type == 5){
        index++;

        if(index > 1){
          array.push({ from: activeNodeID, to: w.id })
        }

        activeNodeID = w.id;


      } else if(w.type == 1) {
        array.push({ from: activeNodeID, to: w.id })
        activeNodeID = w.id;

      } else {

        let object = {
          from: activeNodeID,
          to: w.id
        }

        array.push(object)
      }
    })


    var nodes = new vis.DataSet(nodesData);


    // create an array with edges
    var edges = new vis.DataSet(array);


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
        width: 7,
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
          size: 35
        },
        hint: { // მინიშნება
          shape: 'image',
          image: {
            unselected: 'images/hint.png',
            selected: 'images/hintActive.png'
          },
          size: 35
        },
        mid: {  // შუალედური
          shape: 'image',
          image: {
            unselected: 'images/mid.png',
            selected: 'images/midActive.png'
          },
          size: 35
        },
        step: {  // ნაბიჯი
          shape: 'image',
          image: {
            unselected: 'images/step.png',
            selected: 'images/stepActive.png'
          },
          size: 50, 
          font: {
            color: '#dc6c85',
            size: 40, // px
            face: 'ALKSanet',
          }
        }
      }

    };

    // initialize your network!
    var network = new vis.Network(container, data, options);


    network.on('select', function (properties) {

      var SelectedNodeID = network.getSelection().nodes[0];

      // var thisNodeUrl = nodes.get(SelectedNodeID).url;

      // window.location.replace(`${thisNodeUrl}.html`)
    });
  }





// edge-ების მასივის დაგენერირება:
// edge-ების ობიექტად გვჭირდება 2 პარამეტრი: from და to.

// var activeNodeID  = ინახება უკანასკნელი კომპლექსურის ან ნაბიჯის აიდი

// თუ ნოუდების მასივში პირველი გვერდი არის არც კომპლექსური და არც ნაბიჯი, ასეთი გვერდი / გვერდები წავშალოთ.

// var activeNodeID = ნოუდების მასივიდან ვიღებთ პირველი კომპლექსური ან ნაბიჯი ნოუდის აიდის.

// var activeNodeID = 1; // პირველ ჯერზე ეს იქნება პირველი კომპლექსური დავალების აიდი

// ციკლს ნოუდების მასივზე. - ვიწყებთ მეორე ნოუდიდან


// edge-ების მასივში ვამატებთ ახალ ჩანაწერს - from: activeNodeID, to: 3 (ციკლის ამ ნაბიჯზე შემოსული ნოუდის აიდი)


// if: ვამოწმებთ, ციკლში შემოსული ნოუდი თუ არის ან კომპლექსური და ან ნაბიჯი, მაშინ activeNodeID = შემოსული ნოუდის აიდი.
