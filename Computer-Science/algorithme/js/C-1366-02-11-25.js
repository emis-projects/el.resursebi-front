function Game() {
    // Variables
    let Items = Array.from(
        document.getElementsByClassName("col-8")[0].children
    );
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

            if (
                event.target.parentNode.className.search(
                    "subject_question_item "
                ) != -1
            ) {
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
        let a = 0;
        let b = 0;
        for (let i = 0; i < $(".col-8").children().length; i++) {
            if (data == $(".col-8").children()[i]) a = i;
            if (event == $(".col-8").children()[i]) b = i;
        }

        function swapNodes(a, b) {
            var aparent = a.parentNode;
            var asibling = a.nextSibling === b ? a : a.nextSibling;
            b.parentNode.insertBefore(a, b);
            aparent.insertBefore(b, asibling);
        }
        swapNodes($(".col-8").children()[a], $(".col-8").children()[b]);

        Items = Array.from(
            document.getElementsByClassName("col-8")[0].children
        );

    };

    this.AllowDrop = function(event) {
        event.preventDefault();
    };

    this.Submit = function() {
        for (let i = 0; i < Items.length; i++) {
            if (Items[i].id == i + 1) {
                // Items[i].classList.add("success");
            } else {
                Items[i].children[1].classList.add("error");
            }
        }
        if (document.getElementsByClassName("error").length == 0) {
            this.successPage();
        }
    };

    this.successPage = () => {
        let loc = location.pathname;

        if(loc == '/Computer-Science/algorithme/games/C-1366-02-11.html' || loc == '/el.resursebi-front/Computer-Science/algorithme/games/C-1366-02-11.html'){
            location.href = 'C-1366-02-11-success.html'

        } else if(loc == '/Computer-Science/algorithme/games/C-1366-02-25.html' || loc == '/el.resursebi-front/Computer-Science/algorithme/games/C-1366-02-25.html'){
            location.href = 'C-1366-02-25-success.html'
        }
    };

    //Reset
    this.Reset = function() {
        Items.forEach(element => {
            element.children[1].classList.remove("error");
            element.children[1].classList.remove("success");
        });
    };
}

var a = Game();
