function natureGames() {
    //Variables
    let DropArea = $('.order-boxes').children();
    let DragItem = $('.img-box');

    $(DragItem).each((i, item) => {
        item.id = 'DragItem' + i;
    });

    // Events
    $('#resetBtn').click(() => {
        $(DragItem)
            .children()
            .css('visibility', 'visible')
            .css('border', '');
        $('.flamingo-46-bg-box').append(DragItem);
    });

    // 2301
    $('#completedGame').click(() => {
        let correct = true;
        if (DragItem[0].parentNode != DropArea[2]) {
            $(DragItem[0].children[0]).css('border', ' 3px solid #d85471');
            correct = false;
        }
        if (DragItem[1].parentNode != DropArea[3]) {
            $(DragItem[1].children[0]).css('border', ' 3px solid #d85471');
            correct = false;
        }
        if (DragItem[2].parentNode != DropArea[0]) {
            $(DragItem[2].children[0]).css('border', ' 3px solid #d85471');
            correct = false;
        }
        if (DragItem[3].parentNode != DropArea[1]) {
            $(DragItem[3].children[0]).css('border', ' 3px solid #d85471');
            correct = false;
        }

        if (correct) {
            location.href = 'game-success-46.html';
        }
    });

    //Drag and Drop
    $(DragItem).each((i, item) => {
        item.ondragstart = ev => {
            this.drag(ev);
        };
    });

    $(DropArea).each((i, item) => {
        item.ondragover = ev => {
            this.allowDrop(ev);
        };
    });

    $(DropArea).each((i, item) => {
        item.ondrop = ev => {
            this.drop(ev);
        };
    });

    //Functions

    this.allowDrop = ev => {
        ev.preventDefault();
    };

    this.drag = ev => {
        ev.dataTransfer.setData('text', ev.target.parentNode.id);
    };

    this.drop = ev => {
        var data = document.getElementById(event.dataTransfer.getData('text'));

        if (data.children[1] !== undefined) {
            $(data.children[1]).css('visibility', 'hidden');
        }

        if (ev.target.tagName == 'IMG') {
            let parent = ev.target.parentNode.parentNode;
            if (data.parentNode.className.search('flamingo-46-bg-box') !== -1) {
                $(ev.target.parentNode.children[1]).css(
                    'visibility',
                    'visible'
                );
            }
            data.parentNode.appendChild(ev.target.parentNode);
            parent.appendChild(data);
            return;
        }

        $(data.children[0]).css('border', '');

        ev.target.appendChild(data);
    };
}

natureGames();
