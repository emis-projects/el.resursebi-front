function natureColor() {
    // putting id to question marks and listeners
    var question = document.querySelectorAll('.nature-game-season-circles')
    for (let i = 0; i < question.length; i++) {
        question[i].setAttribute('id', `question${i + 1}`);
        question[i].addEventListener('click', rotate)
    }


    var count = 0    
    function rotate() {
        
        // moving left if it's in the center
        var div = document.querySelector('.nature-game-season-changer-div')
        if (!div.classList.contains('left')) {
            div.classList.add("left")
        }

        var img = document.querySelector('.nature-game-season-changer-changer');
        
            // rotating
            if (this.getAttribute('id') === 'question1') {
                img.setAttribute('style', `transform: rotate(${count * 90 + 90}deg); transition-duration: 2s`)
                count += 1
                insertImg(count)
            }

            else if (this.getAttribute('id') === 'question2') {
                img.setAttribute('style', `transform: rotate(${count * 90 + 270}deg); transition-duration: 3s`)
                count += 3
                insertImg(count)
            }
            
            else if (this.getAttribute('id') === 'question3') {
                img.setAttribute('style', `transform: rotate(${count * 90 + 180}deg); transition-duration: 2.5s`)
                count += 2
                insertImg(count)
            }
    }


    function insertImg(count) {
        var num = count % 4
        document.querySelector('.tree-sec').innerHTML = ''
        var svg = document.createElement('img')

        if (num === 0) {
            svg.setAttribute('src', '../../img/gakvetilebi/buneba/forest_colours/N-03-227-2.svg')
            svg.setAttribute('class', "n-03-227-img")
            svg.setAttribute('data-title', 'გაზაფხული')
            document.querySelector('.tree-sec-desc').innerHTML = svg.getAttribute('data-title')
            num = 0
        }
        
        else if (num === 3) {
            svg.setAttribute('src', '../../img/gakvetilebi/buneba/forest_colours/N-03-233-2.svg')
            svg.setAttribute('class', "n-03-233-img")
            svg.setAttribute('data-title', 'ზაფხული')
            document.querySelector('.tree-sec-desc').innerHTML = svg.getAttribute('data-title')
        }
        
        else if (num === 2) {
            svg.setAttribute('src', '../../img/gakvetilebi/buneba/forest_colours/N-03-234-2.svg')
            svg.setAttribute('class', "n-03-234-img")
            svg.setAttribute('data-title', 'შემოდგომა')
            document.querySelector('.tree-sec-desc').innerHTML = svg.getAttribute('data-title')
        }
        
        else if (num === 1) {
            svg.setAttribute('src', '../../img/gakvetilebi/buneba/forest_colours/N-03-235-2.svg')
            svg.setAttribute('class', "n-03-235-img")
            svg.setAttribute('data-title', 'ზამთარი')
            document.querySelector('.tree-sec-desc').innerHTML = svg.getAttribute('data-title')
            
        }
    
        document.querySelector('.tree-sec').appendChild(svg)
    }

}

natureColor()