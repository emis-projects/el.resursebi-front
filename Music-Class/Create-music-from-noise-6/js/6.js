const selects = document.querySelectorAll('.select')


selects.forEach(select => select.addEventListener('click', mark))

function mark() {
    selects.forEach(select => select.classList.remove('active'))
    this.classList.add('active')
}