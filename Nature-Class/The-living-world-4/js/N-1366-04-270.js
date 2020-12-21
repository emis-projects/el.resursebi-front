function Game() {
    // Variables

    //drag flowers
    let Flower = [$("#Flower1")[0], $("#Flower2")[0], $("#Flower3")[0]];

    //drop area
    let DropArea = [
        $(".circle-box_wrapper")[0].children,
        $(".circle-box_wrapper")[1].children,
        $(".circle-box_wrapper")[2].children
    ];

    let Answer = [];

    // Loot for set AllowDrop and Drop
    for (let i = 0; i < 3; i++) {
        //Set Drag
        Flower[i].ondragstart = event => {
            this.Drag(event);
        };
        for (let j = 0; j < 3; j++) {
            DropArea[i][j].children[0].ondragstart = event => {
                this.Drag(event);
            };
            DropArea[i][j].ondragover = event => {
                this.AllowDrop(event);
            };

            DropArea[i][j].ondrop = event => {
                var data = document.getElementById(
                    event.dataTransfer.getData("text")
                );
                if(event.target == data)return;
                if (
                    event.dataTransfer.getData("text") == "Flower" + (i + 1) ||
                    event.target.parentNode.contains(data)
                ) {
                    this.Clear(i);
                    this.Drop(event);
                    Answer[i]=(event.target);
                }
            };
        }
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
        for (let i = 0; i < 3; i++) {
            if(Answer[i]==undefined)continue;
            Answer[i].classList.remove("img_background_white")
            Answer[i].classList.replace("bg_correct@", "bg_correct");
            Answer[i].classList.replace(
                "bg_incorrect@",
                "bg_incorrect"
            );
        }

        if (document.getElementsByClassName("bg_correct").length == 3) {
            this.successPage();
        }
    };

    //Reset
    this.Reset = function() {
        for (let i = 0; i < 3; i++) {
            if(Answer[i]){
                Answer[i].classList.add("img_background_white")
            }
            this.Clear(i);
            Flower[i].style.display = "block";
        }
        Answer = [];
    };

    // success page
    this.successPage = () => {
        let loc = location.pathname;

        if(loc == "/el.resursebi-front/Nature-Class/The-living-world-4/32.html" || loc== "/Nature-Class/The-living-world-4/32.html" || loc == "/Nature-Lessons/The-living-world/games/N-1366-04-270.html" || loc == "/el.resursebi-front/Nature-Lessons/The-living-world/games/N-1366-04-270.html"){
          //  location.href = 'N-1366-04-270-success.html'
            location.href = 'game-success-32.html'

        } else if( loc == "/el.resursebi-front/Nature-Class/The-living-world-4/33.html" || loc == "/Nature-Class/The-living-world-4/33.html" || loc == "/Nature-Lessons/The-living-world/games/N-1366-04-273.html" || loc == "/el.resursebi-front//Nature-Lessons/The-living-world/games/N-1366-04-273.html"){
            //location.href = 'N-1366-04-273-success.html'
            location.href = 'game-success-33.html'

        } else if(loc=="/Nature-Class/The-living-world-4/34.html" || loc=="/el.resursebi-front/Nature-Class/The-living-world-4/34.html" || loc == "/Nature-Lessons/The-living-world/games/N-1366-04-278.html" || loc == "/el.resursebi-front/Nature-Lessons/The-living-world/games/N-1366-04-278.html"){
            //location.href = 'N-1366-04-278-success.html'
          location.href = 'game-success-34.html'
        }
    };

    // Drag and Drop functions
    this.Drag = function(event) {
        event.dataTransfer.setData("text", event.target.id);
    };

    this.Drop = function(event) {
        var data = document.getElementById(event.dataTransfer.getData("text"));
        data.style.display = "none";
        event.target.firstElementChild.setAttribute('style', 'display: block')
    };

    this.AllowDrop = function(event) {
        event.preventDefault();
    };

    //length

    //Clear
    this.Clear = function(i) {
        for (let j = 0; j < 3; j++) {
            DropArea[i][j].children[0].style.display = "none";

            DropArea[i][j].classList.replace("bg_correct", "bg_correct@");
            DropArea[i][j].classList.replace("bg_incorrect", "bg_incorrect@");
        }
    };
    //Clear everything
    for (let i = 0; i < 3; i++) {
        this.Clear(i);
    }
}

var a = Game();
