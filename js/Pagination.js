document.addEventListener('DOMContentLoaded', async () => {
    var json = await $.getJSON("data.json");

    createDots(json)

    // let htmlAttr = $('html').attr('pageId');
    // let htmlDinamicalyAttr = $('html').attr('dinamicaly-pageId');
})



function createCurrentDots(num, a) {
    $(a).removeClass('pagination__dot')
    $(a).addClass('current__pagination')
    $(a).append(num)
    
    a.setAttribute('href', `${num}.html`);
}


function createDots(json) {
    let pages = json.pages;
    let htmlAttr = $('html').attr('pageid')

    pages.map(i => {
        let div = document.createElement('div');
        $(div).addClass('pagination__item')

        let a = document.createElement('a');

        $(a).removeClass('current__pagination')
        $(a).addClass('pagination__dot')
        
        a.setAttribute('href', `${i.number}.html`);

        $(div).append(a)

        $(pagination).append(div)

        if(htmlAttr == i.number){
            createCurrentDots(i.number, a)
        }
    })


}