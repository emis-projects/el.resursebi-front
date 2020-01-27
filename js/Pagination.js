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
    let pages = json.pages;
    let htmlAttr = $('html').attr('pageid');
    let htmlAttrType = $('html').attr('data-type');
    let nextBtn = document.querySelector('.pagination__next__btn');
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
            createCurrentDots(i.number, a);
            getTypes(i.type);
            getNextAndPrevBtn(json.pages_number, pages.length, i.number - 1)
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


function getNextAndPrevBtn(pagesNum, next, prev) {
    $('.pagination__prev__btn').attr('href', `${prev}.html`)
    $('.pagination__next__btn').attr('href', `${next}.html`)

    if(prev === 0){
        document.querySelector('.pagination__prev__btn').setAttribute('href', 'javascript:void(0)')
    }
    if(pagesNum == next){
        document.querySelector('.pagination__next__btn').setAttribute('href', 'javascript:void(0)')
    }
}