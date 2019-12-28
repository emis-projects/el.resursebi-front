const countryDrop = [];
const countryDrag = [];

$(document).ready(function () {
    $(".draggable").draggable({
        revert: "invalid",
        //clear transition if exist
        drag: function (event, ui) {
            ui.helper.css({
                left: '',
                top: ''
            })
        }
    });

    $(".dropable").droppable({
        // center dropped image
        drop: function (event, ui) {
            $(this).children('div').append(ui.draggable.css({
                left: '',
                top: ''
            }));
            let drop = $(this).children('div').data().country;
            let drag = ui.draggable.data().country;
            countryDrag.push(drag);
            countryDrop.push(drop);
            ui.draggable.draggable('destroy');
        }
    });
});

document.getElementById('completedGame').addEventListener('click', finFn);

function finFn() {
    console.log(countryDrop, countryDrag)
    if (arraysEqual(countryDrop, countryDrag) && countryDrag.length === 12) {
        window.location.href = 'N-1366-06-47-success.html'
    }
    let difArr = [];
    for (let i = 0; i < countryDrop.length; i++) {
        if (countryDrop[i] !== countryDrag[i]) {
            difArr.push(countryDrag[i]);
        }
    }

    difArr.forEach(elm => {
        let dataElm = $('[data-country="' + elm + '"]');
        let ar = dataElm.filter(function () {
            return $(this).data('index')
        });
        if (ar.children().data('country') === elm) {
            ar.children().css({
                background: "#dc6c85",
                color: '#262626'
            })
        }
    })
}

function arraysEqual(arr1, arr2) {
    for (let i = arr1.length; i--;) {
        if (arr1[i] !== arr2[i])
            return false
    }
    return true;
}
