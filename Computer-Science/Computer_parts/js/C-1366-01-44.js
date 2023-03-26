function Game() {
    //Variable

    let CheckArea = $(".car_game_white_circle ");

    //Set Events

    //Set Check
    CheckArea.each(function(index, value) {
        value.onclick = function() {
            Mark(value);
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

    //functions

    this.Reset = function() {
        this.Clear();
    };

    this.Submit = function() {
        CheckArea.each(function(index, value) {
            if (value.classList.contains("selected")) {
                if (
                    value == CheckArea[1] ||
                    value == CheckArea[3] ||
                    value == CheckArea[4]
                ) {
                    value.classList.add("success");
                } else {
                    value.classList.add("error");
                }
            }
        });
        if ($(".selected").length == 3 && $(".success").length == 3) {
            this.SuccessPage();
        }
    };

    this.Mark = function(value) {
        if (value.classList.contains("selected")) {
            value.classList.remove("selected");
            value.classList.remove("error");
            value.classList.remove("success");
        } else {
            value.classList.add("selected");
        }
    };

    //Success Page
    this.SuccessPage = function() {
        location.href = "C-1366-01-44-success.html";
    };

    this.Clear = function() {
        CheckArea.each(function(index, value) {
            value.classList.remove("selected");
            value.classList.remove("error");
            value.classList.remove("success");
        });
    };
}

let Games = Game();
