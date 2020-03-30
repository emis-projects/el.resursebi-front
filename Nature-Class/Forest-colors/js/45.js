function Game() {
    // Variables
    let dragList = $(".plant-parts")[0];
    let dragElement = $(".nature_plant-game-text");
    let dropElement = $(".nature_plant-game-text-container-white");





    //Set Events

    // Set drag and drop
    for (let i = 0; i < 5; i++) {
        dragElement[i].ondragstart = event => {
            this.Drag(event);
        };

        dragList.ondragover = event => {
            this.AllowDrop(event);
        };

        dragList.ondrop = event => {
            var data = document.getElementById(
                event.dataTransfer.getData("text")
            );
            $(".plant-" + data.id)[0].append(data);
            $(".plant-" + data.id)[0].style.display = "block";
        };

        dropElement[i].ondragover = event => {
            this.AllowDrop(event);
        };

        dropElement[i].ondrop = event => {
            if (event.target.innerHTML == "") {
                var data = document.getElementById(
                    event.dataTransfer.getData("text")
                );
                if (
                    document.getElementById(event.dataTransfer.getData("text"))
                        .parentNode.className[0] == "p"
                ) {
                    document.getElementById(
                        event.dataTransfer.getData("text")
                    ).parentNode.style.display = "none";
                }
                this.Drop(event);
            }
        };
    }

    //Set Submit
    document.getElementById("completedGame").onclick = () => {
        this.Submit();
    };

    //Set Reset
    document.getElementById("resetBtn").onclick = () => {
        this.Reset();
    };






    //Functions

    //Submit
    this.Submit = function() {
        let success = true;
        for (let i = 1; i <= 5; i++) {
            parent = $("#a" + i)[0];
            child = parent.children[0];

            if (child == undefined || child.id != i) {
                success = false;
                this.OnFalse(parent);
            } else {
                this.OnTrue(parent);
            }
        }
        if (success) {
            this.successPage();
        }
    };

    //Reset
    this.Reset = function() {
        for (let i = 1; i <= 5; i++) {
            parent = $("#a" + i)[0];
            child = parent.children[0];

            $(".plant-" + i)[0].style.display = "block";

            if (child != undefined) {
                dragList.children[child.id - 1].append(child);
            }

            parent.classList.remove("success");
            parent.classList.remove("error");
        }
    };

    //Check

    //OnTrue
    this.OnTrue = function(Element) {
        $(Element).addClass("success");
    };
    //OnFalse
    this.OnFalse = function(Element) {
        $(Element).addClass("error");
    };


    // success page
    this.successPage = () => {
        // location.href = "N-1366-03-229-success.html";
        location.href = "success-45.html";
    };


    // Drag and Drop functions
    this.Drag = function(event) {
        event.dataTransfer.setData("text", event.target.id);
    };

    this.Drop = function(event) {
        var data = document.getElementById(event.dataTransfer.getData("text"));
        event.target.appendChild(data);
    };

    this.AllowDrop = function(event) {
        event.preventDefault();
    };
}

var a = Game();
