function Game() {
    // Variables
    let BoxParts = document.getElementsByClassName("part_box");

    let Box = document.getElementsByClassName("ceise")[0];

    let DeskParts = document.getElementsByClassName("part_desk");

    let Desk = document.getElementsByClassName("dropdown_dest")[0];

    $(DeskParts).draggable();

    Array.from(DeskParts).forEach(element => {
        element.ondragstart = event => {            
            element.style.zIndex = 5;
        };
    });

    $(".dropdown_dest").prop("disabled", true);
    // Set Events

    // BoxParts.forEach(element => {});

    Array.from(BoxParts).forEach(element => {
        element.ondragstart = event => {
            this.Drag(event);
        };
    });

    Box.ondragover = event => {
        this.AllowDrop(event);
    };

    Box.ondrop = event => {
        var data = document.getElementById(event.dataTransfer.getData("text"));

        if (data == null || data.id[0] != 1) return;

        data.setAttribute("draggable", "false");
        this.Drop(event, data);

        if (data.id[2] == 5) {
            data.style.visibility = "hidden";
            document.getElementById("1-5-1").style.visibility = "hidden";
        } else data.parentNode.parentNode.style.visibility = "hidden";
    };

    // Functions

    //Drag and Drop

    this.Drag = function(event) {
        event.dataTransfer.setData("text", event.target.id);
    };

    this.Drop = function(event, data) {
        if (event.target.id == "") event.target.appendChild(data.cloneNode());
        else event.target.parentNode.appendChild(data.cloneNode());
    };

    this.AllowDrop = function(event) {
        event.preventDefault();
    };
}

var a = Game();
