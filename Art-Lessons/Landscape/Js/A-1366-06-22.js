const clickBtn = document.querySelector('.click_icon');
;
const midFigure = document.getElementById('middle_bg');
const allFigures = document.querySelectorAll('.image_container img');

let counter = 0;

// add click event
clickBtn.addEventListener('click', (evt) => {
        const click = evt.target;
        counter++;
        midFigure.style.height = 24 + '%';
        midFigure.style.top = 10 + '%';
        // reset counter same item double click & hide element
        if (counter === 2) {
            midFigure.style.display = 'none';
            evt.target.style.display = 'none';
            counter = 0;
        }
});
