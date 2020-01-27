document.addEventListener('DOMContentLoaded', async () => {
    var json = await $.getJSON("data.json");
    createDots(json)
})


function createCurrentDots(num, a) {
    $(a).removeClass('pagination__dot')
    $(a).addClass('current__pagination')
    $(a).append(num)
    
    a.setAttribute('href', `${num}.html`);
}


function createDots(json) {
    var pages = json.pages;
    var htmlAttr = parseInt($('html').attr('pageid'));
    var htmlAttrType = $('html').attr('data-type');
    var htmlAttrAllPage = parseInt($('html').attr('pages-number'));

    console.log(json);

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
            let nextElement = parseInt(i.number);
            let prevElement = parseInt(i.number);

            createCurrentDots(i.number, a);
            getTypes(i.type);
            getNextAndPrevBtn(htmlAttrAllPage, nextElement, prevElement)
        }
    })
}


function getTypes(){
    let types = document.querySelectorAll('.leftSidebar_type');

    types.forEach(w => {
        if(w.getAttribute('data-type') == $('html').attr('data-type')){
            w.setAttribute('style', 'opacity: 1')
        }
    })

}


function getNextAndPrevBtn(pagesLength, next, prev) {
    let htmlAttr = parseInt($('html').attr('pageid'));
    
    if (htmlAttr == pagesLength){
        document.querySelector('.pagination__next__btn').setAttribute('href', 'javascript:void(0)')
    
    } else {
        next = next + 1;
        $('.pagination__next__btn').attr('href', `${next}.html`)
    }

    if(prev == 1){
        document.querySelector('.pagination__prev__btn').setAttribute('href', 'javascript:void(0)')
    } else {
        prev = prev - 1
        $('.pagination__prev__btn').attr('href', `${prev}.html`)
    }
}