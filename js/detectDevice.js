
document.addEventListener('DOMContentLoaded', () => {
    console.log('load event');
    if(isMobile() == false && window.matchMedia("(orientation: portrait)").matches == true) {
        document.querySelector('body').setAttribute('style', 'display: none')
        redirectUser(false, '/main-page/landscape.html', `${location.origin}/el.resursebi-front/main-page/landscape.html`)

    } else if(isMobile() == false && window.matchMedia("(orientation: landscape)").matches == true) {
        document.querySelector('body').setAttribute('style', 'display: none')
        redirectUser(false, '/main-page/portrait.html', `${location.origin}/el.resursebi-front/main-page/portrait.html`)
    } 
})




window.addEventListener('resize', function(e) {

    if(isMobile() == false && window.matchMedia("(orientation: portrait)").matches == true) {
        document.querySelector('body').setAttribute('style', 'display: none')
        redirectUser(false, '/main-page/landscape.html', `${location.origin}/el.resursebi-front/main-page/landscape.html`)

    } else if(isMobile() == false && window.matchMedia("(orientation: landscape)").matches == true) {
        document.querySelector('body').setAttribute('style', 'display: none')
        redirectUser(false, '/main-page/portrait.html', `${location.origin}/el.resursebi-front/main-page/portrait.html`)
    } 
});





function isMobile() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    document.querySelector('.width').innerText = width
    document.querySelector('.height').innerText = height


    if(width < 1000 || height < 768){
        return false

    } else {
        return true
    }
};




function redirectUser(ismobile, schoolLink, githubLink) {
    if(ismobile == false) {
        if(location.host == "school.emis.ge") {
            location.href = schoolLink
    
        } else if(location.host == "ananoaspanidze.github.io") {
            location.href = githubLink
    
        } else {
            location.href = schoolLink
            
        }
    }
}