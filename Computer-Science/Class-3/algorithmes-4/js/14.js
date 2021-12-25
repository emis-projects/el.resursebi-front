
function Game() {
    // Variables
    let Items = document.getElementsByClassName("c-02-15-item_box");
    // Events

    //Drag and Drop
    Array.from(Items).forEach(element => {
        element.children[1].setAttribute("draggable", "false");
        element.setAttribute("draggable", "true");

        element.ondragstart = event => {
            this.Drag(event);
        };

        element.ondragend = event => {
            event.target.classList.remove("selected");
        };

        element.ondragover = event => {
            this.AllowDrop(event);
        };

        element.ondrop = event => {
            var data = document.getElementById(
                event.dataTransfer.getData("text")
            );

            if (event.target.parentNode.className.search("c-02-15-item_box") != -1) {
                this.Drop(event.target.parentNode, data);
            } else this.Drop(event.target, data);
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
        let TMP = data.parentNode;
        event.parentNode.appendChild(data);
        TMP.appendChild(event);
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

        $('#completedGame').attr('disabled', 'true')
        if (document.getElementsByClassName("error").length == 0) {
            this.successPage();
        }
    };

    this.successPage = () => {
        location.href = "game-success-14.html";
    };

    //Reset
    this.Reset = function() {
        $('#completedGame').removeAttr('disabled')

        Array.from(Items).forEach(element => {
            element.classList.remove("error");
            element.classList.remove("success");
        });
    };
}

var a = Game();