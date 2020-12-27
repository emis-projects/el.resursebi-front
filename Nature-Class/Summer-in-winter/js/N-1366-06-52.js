// variables for data store
const countryDrop = [];
const countryDrag = [];

let dropItemParent = [];
let dropItem = [];


//init func on load
$(document).ready(() => {
    //init drag
    $(".draggable").draggable({
        revert: "invalid",
        //clear transition if exist
        drag: function (event, ui) {
            ui.helper.css({
                left: '',
                top: ''
            })
        },
        start: function (event, ui) {
            dropItemParent.push(ui.helper.parent());
        }
    });
    //init drop
    $(".dropable").droppable({
        // center dropped image
        drop: function (event, ui) {
            //ondrop append element  & reset left/top
            $(this).children('div').append(ui.draggable.css({
                left: '',
                top: ''
            }));
            //get dropped & dragged items data attr
            let drop = $(this).children('div').data().country;
            let drag = ui.draggable.data().country;
            // save data attrs in arr
            countryDrag.push(drag);
            countryDrop.push(drop);
            // save dragged elems
            dropItem.push(ui.draggable);
            //after drop destroy drag fn
            ui.draggable.draggable('disable');
        }
    });
});


// call init and fin fn on click
document.getElementById('completedGame').addEventListener('click', finFn);
document.getElementById('resetBtn').addEventListener('click', initFn);

// check function
function finFn(evt) {
    let countryBox = $('.country_box');

    // change all dropped items bg #dc6c85
    countryBox.children().css({
        background: "#dc6c85",
        color: '#fff'
    });

    //if equal success
    if (arraysEqual(countryDrop, countryDrag) && countryDrag.length === 12) {
        for (let i = 0; i < dropItem.length; i++) {
            dropItem[i].css({
                background: '#a1dd6f',
                color: '#262626'
            })
        }
    } else {
        // make correct items bg white
        for (let i = 0; i < dropItem.length; i++) {
            let dataItem = dropItem[i].data('country');
            let parentItem = dropItem[i].parent().data('country');
            if (dataItem === parentItem) {
                dropItem[i].removeClass('completed__btn_black')
                dropItem[i].css({
                    background: '#fff',
                    color: '#262626'
                })
            }
        }
    }

    if (countryBox.children().length > 0) {
        evt.target.setAttribute('disabled', 'disabled');
    }
}

function initFn() {
    $('.country_box').children().css({
        background: '',
        color: ''
    });
    for (let i = 0; i < dropItemParent.length; i++) {
        var theme = localStorage.getItem("theme");
        if (theme == "darck") {
            $(dropItem[i]).addClass('completed__btn_black')
        }
        dropItem[i].css({
            background: ''
        });
        dropItemParent[i].append(dropItem[i])
    }
    document.getElementById('completedGame').removeAttribute('disabled');
    //enable drag
    $('.draggable').draggable('enable')
}

// check for array equality
function arraysEqual(arr1, arr2) {
    for (let i = arr1.length; i--;) {
        if (arr1[i] !== arr2[i])
            return false
    }
    return true;
}
