document.addEventListener('DOMContentLoaded', async () => {
    var json = await $.getJSON("data.json");

    // find page id with regex
    let regex = location.pathname;
    let phormula = /([^\/+]*)$/;
    var result = regex.match(phormula)[0];

    let regex2 = result;
    let phormula2 = /[0-9]/g;
    var result2 = regex2.match(phormula2);
    let finalyResult = result2[0] + result2[1];
    let pageId = parseInt(finalyResult);
    $('html').attr('pageid', pageId);

    console.log('json')
    createDots(json);

    $('.pagination__item--el').mouseenter(function () {
        //dark_mode
        var theme = localStorage.getItem("theme");
        if (theme == "darck") {
            $(this).children('.pagination__dot').addClass('pagination__dot_black')
        }


        let index = $(this).attr('data-index')
        $(this).children('.pagination__dot').addClass('active')
        $(this).children('.pagination__dot').text(index)
    })

    $('.pagination__item--el').mouseleave(function () {
        $(this).children('.pagination__dot').removeClass('active')
        $(this).children('.pagination__dot').text('')
    })
})


function createDots(json) {
    var htmlPageIdAttr = $('html').attr('pageid');

    let modifierObject = json.pages.filter(w => typeof w.number == "number");

    modifierObject.map(i => {
        let div = document.createElement('div');

        $(div).addClass('pagination__item')
        $(div).addClass('pagination__item--el')
        $(div).attr('data-index', i.number)
        let a = document.createElement('a');

        $(a).removeClass('current__pagination')
        $(a).addClass('pagination__dot')


        a.setAttribute('href', `${i.number}.html`);

        $(div).append(a)

        $(pagination).append(div)

        if (htmlPageIdAttr == i.number) {
            $('html').attr('data-type', i.type);
            $('html').attr('pages-number', json.pages_number)
            var htmlAttrAllPage = parseInt($('html').attr('pages-number'));

            let nextElement = parseInt(i.number);
            let prevElement = parseInt(i.number);

            createCurrentDots(i.number, a);
            getTypes(i.type);
            getNextAndPrevBtn(htmlAttrAllPage, nextElement, prevElement)
        }
    })
}


function createCurrentDots(num, a) {
    $(a).removeClass('pagination__dot')
    $(a).parent().removeClass('pagination__item--el')
    $(a).addClass('current__pagination')
    $(a).append(num)

    a.setAttribute('href', `${num}.html`);


    //ფეიჯინგი darck_mode
    var theme = localStorage.getItem('theme')
    var current__pagination = document.getElementsByClassName("current__pagination");
    var pagination__prev__btn = document.getElementsByClassName("pagination__prev__btn");
    var pagination__next__btn = document.getElementsByClassName("pagination__next__btn");
    if (theme == 'darck') {
        console.log("ready!", current__pagination, Object.keys(current__pagination));
        if (current__pagination[0]) {
            current__pagination[0].classList.add("pagination_black");
        }
        if(pagination__prev__btn[0]){
            pagination__prev__btn[0].classList.add("pagination_black");
        }
        if(pagination__next__btn[0]){
            pagination__next__btn[0].classList.add("pagination_black");
        }
    }
}

function getTypes() {
    let types = document.querySelectorAll('.leftSidebar_type');

    types.forEach(w => {
        if (w.getAttribute('data-type') == $('html').attr('data-type')) {
            w.setAttribute('style', 'opacity: 1')
        }
    })

}

function getNextAndPrevBtn(pagesLength, next, prev) {
    let htmlAttr = parseInt($('html').attr('pageid'));

    if (htmlAttr == pagesLength) {
        $('.pagination__next__btn').attr('style', 'display: none')

    } else {
        next = next + 1;
        $('.pagination__next__btn').attr('href', `${next}.html`)
    }

    if (prev == 1) {
        $('.pagination__prev__btn').attr('style', 'display: none')
    } else {
        prev = prev - 1
        $('.pagination__prev__btn').attr('href', `${prev}.html`)
    }
}
