 


document.addEventListener('DOMContentLoaded', () => {
    if(renderNextPage()) {
        document.querySelector('body').setAttribute('style', 'display: none')
        redirectUser(false, '/main-page/landscape.html', `${location.origin}/el.resursebi-front/main-page/landscape.html`)
    } else {
        document.querySelector('body').setAttribute('style', 'display: none')
        redirectUser(false, '/main-page/portrait.html', `${location.origin}/el.resursebi-front/main-page/portrait.html`)
    }
})




function isMobile() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    if(width < 1000 || height < 768 ){
        return false

    } else {
        return true
    }
};

 

function renderNextPage() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    if((width >= 768 && width <= 1000 && height >= 1000)){
        return true

    } else {
        return false
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