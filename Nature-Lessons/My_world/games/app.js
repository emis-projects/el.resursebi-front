$('#resetBtn').click(function () {
    var parent = $("#box")
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1));
    }
    console.log(Math.random() * divs.length)
});