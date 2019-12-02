function DragAndDrop(query, task) {
    var query = document.querySelectorAll(query);
    for (let i = 0; i < query.length; i++) {
      if (task == "drag") {
        query[i].ondragstart = ev => {
          ev.dataTransfer.setData("text", query[i].id);
        };
      } else if (task == "drop") {
        query[i].ondrop = ev => {
          if (ev.target.innerHTML == "") {
            var data = document.getElementById(ev.dataTransfer.getData("text"));
            ev.target.appendChild(data);
          } else if (query[i].className == "nature_plant-game-text-container") {
            var data = document.getElementById(ev.dataTransfer.getData("text"));
            query[i].appendChild(data);
          }
        };
        query[i].ondragover = ev => {
          ev.preventDefault();
        };
      } else {
        console.log("DragAndDrop error");
      }
    }
  }
  
  DragAndDrop(".nature_plant-game-text", "drag");
  DragAndDrop(".nature_plant-game-text-container-white", "drop");
  DragAndDrop(".nature_plant-game-text-container", "drop");
  
  function Submit() {
    var success = true;
    for (let i = 1; i <= 5; i++) {
      if (document.getElementById("a" + i.toString()).children[0]) {
        if (document.getElementById("a" + i.toString()).children[0].id == i) {
          document.getElementById("a" + i.toString()).className += " success";
        } else {
          success = false;
          document.getElementById("a" + i.toString()).className += " error";
        }
      } else {
        success = false;
        document.getElementById("a" + i.toString()).className += " error";
      }
    }
    if (success) location.href = "./N-1366-03-197-success.html";
  }
  
  function Reset() {
    var a = document.getElementById("textConteiner");
  
    for (let i = 1; i <= 5; i++) {
      document.getElementById("textConteiner").appendChild(document.getElementById(i));
      document.getElementById("a" + i.toString()).classList.remove("success");
      document.getElementById("a" + i.toString()).classList.remove("error");
    }
  }
  