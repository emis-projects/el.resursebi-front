 

function renderNextPage() {
    let width = window.innerWidth;
    let height = window.innerHeight;


    if(width < 768 || height < 768){
        console.log('1')
        localStorage.setItem('renderNextPage', JSON.stringify(false))
        localStorage.setItem('index', JSON.stringify('1'))
        
    } else if(width >= 768 && width <= 1000 && height >= 1000) {
        console.log('2')
        localStorage.setItem('renderNextPage', JSON.stringify(true))
        localStorage.setItem('index', JSON.stringify('2'))
        
    } else if(width >= 1000 && height >= 768) {
        console.log('3')
        localStorage.setItem('renderNextPage', JSON.stringify(true))
        localStorage.setItem('index', JSON.stringify('3'))

    } else {
        console.log('4')
        localStorage.setItem('renderNextPage', JSON.stringify(false))
        localStorage.setItem('index', JSON.stringify('4'))
    }
};
 


document.addEventListener('DOMContentLoaded', function() {
    renderNextPage()

    let index = JSON.parse(localStorage.getItem('index'));
    let NextPage = JSON.parse(localStorage.getItem('renderNextPage'));
    let hasChanged = JSON.parse(localStorage.getItem('hasChanged'));


    if(index == '1' && NextPage == false) {
        document.querySelector('body').setAttribute('style', 'display: none')
        redirectUser(false, '/main-page/portrait.html', `${location.origin}/el.resursebi-front/main-page/portrait.html`)
        
    } else if (index == '2' && NextPage == true) {
        document.querySelector('body').setAttribute('style', 'display: none')
        redirectUser(false, '/main-page/landscape.html', `${location.origin}/el.resursebi-front/main-page/landscape.html`)

    } else if (index == '3' && NextPage == true && !hasChanged) {
        localStorage.setItem('hasChanged', JSON.stringify(true))
        document.querySelector('body').setAttribute('style', 'display: none')
        redirectUser(false, '/', `${location.origin}/el.resursebi-front`)
    }
})


window.addEventListener('orientationchange', function(e) {
    renderNextPage()
});

window.addEventListener('resize', function(e) {
    renderNextPage()
    
    let index = JSON.parse(localStorage.getItem('index'));
    let NextPage = JSON.parse(localStorage.getItem('renderNextPage'));
    let hasChanged = JSON.parse(localStorage.getItem('hasChanged'));

    if(index == '2' && NextPage == true) {
        document.querySelector('body').setAttribute('style', 'display: none')
        redirectUser(false, '/main-page/landscape.html', `${location.origin}/el.resursebi-front/main-page/landscape.html`)
        
    } 

});


function isMobile() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    if(width < 1000 || height < 768 ){
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