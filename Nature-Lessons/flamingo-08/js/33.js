function natureGames() {
    //Variable
    let Fox = $('.animal-image-box').children();
    let Nature = $('.inner-box');

    Fox[0].id = 'Fox1';
    Fox[1].id = 'Fox0';

    $('.img-box')
        .children()
        .attr('draggable', 'false');

    //Events
    $('#resetBtn').click(() => {
        $(Fox).css('border', '');
        $('.animal-image-box').append(Fox);
    });

    $('#completedGame').click(() => {
        if (Fox[0].parentNode != Nature[1]) {
            $(Fox[0]).css('border', ' 4px solid red');
        }
        if (Fox[1].parentNode != Nature[0]) {
            $(Fox[1]).css('border', ' 4px solid red');
        }

        if (Fox[0].parentNode == Nature[1] && Fox[1].parentNode == Nature[0]) {
            location.href = 'game-success-33.html';
        }
    });

    //Drag and Drop
    $(Fox).each((i, item) => {
        item.ondragstart = ev => {
            this.drag(ev);
        };
    });

    $(Nature).each((i, item) => {
        item.ondragover = ev => {
            this.allowDrop(ev);
        };
    });

    $(Nature).each((i, item) => {
        item.ondrop = ev => {
            this.drop(ev);
        };
    });

    // success page
    this.successPage = () => {
        location.href = 'game-success-33.html';
    };

    //Functions

    this.allowDrop = ev => {
        ev.preventDefault();
    };

    this.drag = ev => {
        ev.dataTransfer.setData('text', ev.target.id);
    };

    this.drop = ev => {
        var data = document.getElementById(event.dataTransfer.getData('text'));

        if (ev.target.tagName == 'IMG') {
            let parent = ev.target.parentNode;
            data.parentNode.appendChild(ev.target);
            return;
        }

        $(data).css('border', '');
        ev.target.appendChild(data);
    };
}

natureGames();
