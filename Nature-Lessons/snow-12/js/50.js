const Btn = document.querySelectorAll('button');

Btn.forEach(elm => {
    elm.addEventListener('click', ()=> {
        Btn.forEach(el => {el.classList.remove('active')});
        elm.classList.add('active')
    })
})
