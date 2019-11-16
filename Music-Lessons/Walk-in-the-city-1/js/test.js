const dots = document.querySelectorAll('.dot-select span');


for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', (el) => {
        const target = el.target
        if (target.classList.contains('active')) {
            target.classList.remove('active')
        } else {
            dots.forEach(e => {
                e.classList.remove('active')
            })
            target.classList.add('active')
        }
    })
}