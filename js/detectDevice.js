


window.addEventListener("DOMContentLoaded", function() {                   
    if (window.matchMedia("(orientation: portrait)").matches) {
        if(!isMobile()) {
            document.querySelector('body').setAttribute('style', 'display: none')
            if(location.host == "school.emis.ge") {
                location.href = '/main-page/landscape.html'

            } else if(location.host == "ananoaspanidze.github.io") {
                location.href = `${location.origin}${location.pathname}main-page/landscape.html`

            } else {
                location.href = `${location.origin}${location.pathname}main-page/landscape.html`
                
            }
        }
    }

    if (window.matchMedia("(orientation: landscape)").matches) {
        if(!isMobile()) {
            document.querySelector('body').setAttribute('style', 'display: none')
            if(location.host == "school.emis.ge") {
                location.href = '/main-page/portrait.html'

            } else if(location.host == "ananoaspanidze.github.io") {
                location.href = `${location.origin}${location.pathname}main-page/portrait.html`

            } else {
                location.href = `${location.origin}${location.pathname}main-page/portrait.html`

            }
        }
     }
});



function isMobile() {
    let width = screen.width;
    let height = screen.height;

    if(width < 1000 || height < 768){
        return false

    } else {
        return true
    }
};


