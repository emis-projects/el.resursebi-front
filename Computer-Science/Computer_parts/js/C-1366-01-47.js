function Game() {
    // Variables

    //drag flowers
    let DragItem = [];

    for (let i = 0; i < $(".drag_texts").children().length; i++) {
        DragItem[i] = $(".drag_texts").children()[i];
    }

    //drop area
    let DropArea = [
        $(".dragged_text")[0],
        $(".dragged_text")[1],
        $(".dragged_text")[2]
    ];

    //Events

    //Set Drag
    DragItem.forEach(element => {
        element.setAttribute("draggable", "true");
        element.ondragstart = event => {
            this.Drag(event);
        };
    });

    //Set Drop
    DropArea.forEach(element => {
        element.ondragover = event => {
            this.AllowDrop(event);
        };
        element.ondrop = event => {
            if (event.target.className.search("dragged_text") == -1) return;
            if (event.target.children.length == 3) return;
            this.Drop(event);
        };
    });

    //Set Submit
    document.getElementById("completedGame").onclick = () => {
        this.Submit();
    };

    //Set Reset
    document.getElementById("resetBtn").onclick = () => {
        this.Reset();
    };

    //Functions

    this.Submit = function() {
        for (i = 0; i < $(".drag_texts")[0].children.length; i++) {
            $(".drag_texts")[0].children[i].classList.add("Error");
        }

        $(".dragged_text").each((index, element) => {
            for (i = 0; i < element.children.length; i++) {
                if (index + 1 != element.children[i].id[0]) {
                    element.children[i].classList.add("Error");
                }
            }
        });

        if ($(".Error").length == 0) {
            this.successPage();
        }
    };

    this.successPage = () => {
        location.href = "C-1366-01-47-success.html";
    };

    //Reset
    this.Reset = function() {
        DropArea.forEach(element => {
            element.innerHTML = "";
        });
        DragItem.forEach(element => {
            element.classList.remove("Error");
            $(".drag_texts").append(element);
        });
    };

    //Drag and Drop

    this.Drag = function(event) {
        event.dataTransfer.setData("text", event.target.id);
    };

    this.Drop = function(event) {
        event.preventDefault();
        var data = document.getElementById(event.dataTransfer.getData("text"));
        data.classList.remove("Error");
        event.target.appendChild(data);
    };

    this.AllowDrop = function(event) {
        event.preventDefault();
    };
}

var a = Game();
