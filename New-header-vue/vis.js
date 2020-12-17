let jsonObject = null,
    group = null,
    width = null,
    nodesData = null,
    obj = [];
    stepIndexes = [];
    lastComplex = null;


  getTypeAndWidth = (number) => {
    if(number == 1){
      group = "step1"

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
    var modifierObject = json.pages.filter(w => !w.ignore).map(w => {
      getTypeAndWidth(w.type)

      return {...w, id: w.number, url: w.number, width: width, group}
    })


    var complexIndex = 0;
    var stepLabelValue = 0;
    var currentComplex = null;
    var currentStep = null;


    console.log(modifierObject)
    // ამ ფილტრით ვშლი იმ ნაბიჯებს და კომპლექსურებს რომლებიც არაა საჭირო
    // ანუ თუ კომპლექსურს მოსდევს ისევ კომპლექსური, მეორე კომპლექსური ამოიშლება.
    // ასევე ნაბიჯზეც იგივე მოხდება.
    let secondFilteredData = modifierObject.filter((w, i, e) => {
      if(w.type === 5){
        if(w.type == 5 && complexIndex == 0) {
          complexIndex++
          return true

        } else {
          currentComplex = w.id;
          return false
        }
      } else if(w.type === 3) {
        let regex = w.id;
        let phormula = /[0-9]+/g;
        var result = regex.match(phormula)[0];

        if(currentComplex == result || currentStep == result) {
          return false

        } else {
          return true
        }

      } else if(w.type === 1){
        complexIndex = 0;
        currentComplex = null;
        let prevObj = modifierObject[i - 1];

        if(prevObj.type == 1) {
          currentStep = w.id;
          return false

        } else {
          stepLabelValue++;
          w.group = `step${stepLabelValue}`
          return true
        }

      } else if(w.type == null) {
        complexIndex = 0
        return false

      } else {
        currentComplex = null;
        complexIndex = 0;
        return true
      }
    })


    // პირველი კომპლექსურის group ის შეცვლა
    secondFilteredData[0].group = "complexExercise2";

    obj = secondFilteredData;

    nodesData = [...secondFilteredData]
  })


  // აქ იხატება ყველაფერი. დოკუმენტაცია: https://visjs.github.io/vis-network/docs/network/ -->

  // ვის.ჯს რომ ჩავტვირთოთ ვუში როცა კომპონენტს დავარენდერებთ(ხილულს გავხდით).
  // რადგანაც ვის.ჯს ყოველ ჯერზე თავიდან უნდა გაეშვას ამიტომ მთლიანი ვის.ჯს თავისი კოდით გლობ. ფუნქციად უნდა გავიტანოთ

  
  // init ფუნქცია დაკოპირდა და initDark დაერქვა, initDark-ი იძახება dark_mode-ის დროს და init ჩვეულებრივ;
  function initDark(){
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
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/complexExerciseDark.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/complexExerciseActive.png'
          },
          size: 50
        },
        complexExercise2: { // კომპლექსური დავალება
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/complexExercise2Dark.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/complexExercise2Active.png'
          },
          size: 50
        },
        exercise: {  // სავარჯიშო
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/exerciseDark.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/exerciseActive.png'
          },
          size: 35
        },
        hint: { // მინიშნება
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/hintDark.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/hintActive.png'
          },
          size: 35
        },
        mid: {  // შუალედური
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/midDark.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/midActive.png'
          },
          size: 35
        },
        step1: {  // ნაბიჯი
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/step1Dark.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/stepActive1.png'
          },
          size: 50,
        },
        step2: {  // ნაბიჯი
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/step2Dark.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/stepActive2.png'
          },
          size: 50,
        },
        step3: {  // ნაბიჯი
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/step3Dark.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/stepActive3.png'
          },
          size: 50,
        },
        step4: {  // ნაბიჯი
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/step4Dark.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/stepActive4.png'
          },
          size: 50,
        },
        step5: {  // ნაბიჯი
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/step5Dark.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/stepActive5.png'
          },
          size: 50,
        },
        step6: {  // ნაბიჯი
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/step6Dark.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/stepActive6.png'
          },
          size: 50,
        },
        step7: {  // ნაბიჯი
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/step7Dark.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/stepActive7.png'
          },
          size: 50,
        },
        step8: {  // ნაბიჯი
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/step8Dark.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/stepActive8.png'
          },
          size: 50,
        },
        step9: {  // ნაბიჯი
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/step9Dark.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/stepActive9.png'
          },
          size: 50,
        }
      }

    };


    // initialize your network!
    var network = new vis.Network(container, data, options);


    network.on('select', function (properties) {

      var SelectedNodeID = network.getSelection().nodes[0];

      var thisNodeUrl = nodes.get(SelectedNodeID).url;

      if(thisNodeUrl !== undefined){
        window.location.replace(`${thisNodeUrl}.html`)
      }
    });


    // სარჩევში იმ გვერდის გააქტიურება, რომლიდანაც გამოვიძახეთ სარჩევის მენიუ

    var currentURL = window.location.href;
    var activeID = currentURL.substring(currentURL.lastIndexOf('/') + 1, currentURL.lastIndexOf(".html"));
    network.selectNodes([activeID])

  }
  //initDark მთავრდება






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
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/complexExercise.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/complexExerciseActive.png'
          },
          size: 50
        },
        complexExercise2: { // კომპლექსური დავალება
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/complexExercise2.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/complexExercise2Active.png'
          },
          size: 50
        },
        exercise: {  // სავარჯიშო
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/exercise.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/exerciseActive.png'
          },
          size: 35
        },
        hint: { // მინიშნება
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/hint.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/hintActive.png'
          },
          size: 35
        },
        mid: {  // შუალედური
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/mid.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/midActive.png'
          },
          size: 35
        },
        step1: {  // ნაბიჯი
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/step1.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/stepActive1.png'
          },
          size: 50,
        },
        step2: {  // ნაბიჯი
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/step2.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/stepActive2.png'
          },
          size: 50,
        },
        step3: {  // ნაბიჯი
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/step3.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/stepActive3.png'
          },
          size: 50,
        },
        step4: {  // ნაბიჯი
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/step4.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/stepActive4.png'
          },
          size: 50,
        },
        step5: {  // ნაბიჯი
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/step5.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/stepActive5.png'
          },
          size: 50,
        },
        step6: {  // ნაბიჯი
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/step6.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/stepActive6.png'
          },
          size: 50,
        },
        step7: {  // ნაბიჯი
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/step7.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/stepActive7.png'
          },
          size: 50,
        },
        step8: {  // ნაბიჯი
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/step8.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/stepActive8.png'
          },
          size: 50,
        },
        step9: {  // ნაბიჯი
          shape: 'image',
          image: {
            unselected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/step9.png',
            selected: 'https://ananoaspanidze.github.io/el.resursebi-front/New-header-vue/images/stepActive9.png'
          },
          size: 50,
        }
      }

    };


    // initialize your network!
    var network = new vis.Network(container, data, options);


    network.on('select', function (properties) {

      var SelectedNodeID = network.getSelection().nodes[0];

      var thisNodeUrl = nodes.get(SelectedNodeID).url;

      if(thisNodeUrl !== undefined){
        window.location.replace(`${thisNodeUrl}.html`)
      }
    });


    // სარჩევში იმ გვერდის გააქტიურება, რომლიდანაც გამოვიძახეთ სარჩევის მენიუ

    var currentURL = window.location.href;

    var activeID = currentURL.substring(currentURL.lastIndexOf('/') + 1, currentURL.lastIndexOf(".html"));
    network.selectNodes([activeID])    
  }

