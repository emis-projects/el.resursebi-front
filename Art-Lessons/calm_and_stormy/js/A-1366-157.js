const lines = document.querySelectorAll('.img_box-line img');
const penciles = document.querySelectorAll('.img_box');


for (var i = 0; i < penciles.length; i++) {
    penciles[i].addEventListener('click', ((j) => {
        return function () {
            penciles.forEach(el => {
                el.style.opacity = "0.5";
            });
            lines.forEach(e => {
                e.style.opacity = "0";
            });
            penciles[j].style.opacity = "1";
            lines[j].style.opacity = "1";
            lines[j].classList.add('fade-in');
        };
    })(i));
}