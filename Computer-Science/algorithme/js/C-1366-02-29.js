function Game() {
    // Variables
    let Items = Array.from(document.getElementsByClassName("button_box"));

    let DragArea = $(".button_box")[0].parentNode;
    // Events

    //Drag and Drop
    Items.forEach(element => {
        element.children[0].setAttribute("draggable", "false");
        element.setAttribute("draggable", "true");

        element.ondragstart = event => {
            this.Drag(event);
        };

        element.ondragover = event => {
            this.AllowDrop(event);
        };

        element.ondrop = event => {
            var data = document.getElementById(
                event.dataTransfer.getData("text")
            );

            this.Drop(event.target.parentNode, data);
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

    // Functon

    //Drag and Drop

    this.Drag = function(event) {
        this.Reset();
        event.dataTransfer.setData("text", event.target.id);
    };

    this.Drop = function(event, data) {
        let a = 0;
        let b = 0;
        for (let i = 0; i < DragArea.children.length; i++) {
            if (data == DragArea.children[i]) a = i;
            if (event == DragArea.children[i]) b = i;
        }

        function swapNodes(a, b) {
            var aparent = a.parentNode;
            var asibling = a.nextSibling === b ? a : a.nextSibling;
            b.parentNode.insertBefore(a, b);
            aparent.insertBefore(b, asibling);
        }

        swapNodes(DragArea.children[a], DragArea.children[b]);

        Items = Array.from(
            document.getElementsByClassName("col-4")[3].children
        );
    };

    this.AllowDrop = function(event) {
        event.preventDefault();
    };

    this.Submit = function() {
        for (let i = 0; i < Items.length; i++) {
            if (Items[i].id == i + 1) {
                Items[i].classList.add("success");
            } else {
                Items[i].classList.add("error");
            }
        }
        if (document.getElementsByClassName("error").length == 0) {
            this.successPage();
        }
    };

    this.successPage = () => {
        location.href = "C-1366-02-29-success.html";
    };

    //Reset
    this.Reset = function() {
        Items.forEach(element => {
            element.classList.remove("error");
            element.classList.remove("success");
        });
    };
}

var a = Game();
