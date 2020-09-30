// is this an IPad ?
var isiPad = (navigator.userAgent.match(/iPad/i) != null);

// is this an iPhone ?
var isiPhone = (navigator.userAgent.match(/iPhone/i) != null);

// is this an windows ?
var isWindows = (navigator.userAgent.match(/Windows/i) != null);


if (isiPhone) {
    document.querySelector('body').setAttribute('style', 'display: none')
    redirectUser('/main-page/portrait.html', `${location.origin}/el.resursebi-front/main-page/portrait.html`)
    
} else if(isiPad) {
    if(window.innerWidth > 1000 && window.innerHeight > 768 && !JSON.parse(localStorage.getItem('refresh')) == true) {
        localStorage.setItem('refresh', JSON.stringify(true))        
        redirectUser('/', '/el.resursebi-front')  
        
    } else if(!JSON.parse(localStorage.getItem('refresh')) == true) {
        localStorage.setItem('refresh', JSON.stringify(true))        
        redirectUser('/main-page/landscape.html', `${location.origin}/el.resursebi-front/main-page/landscape.html`)
    }

} else {
    if(!JSON.parse(localStorage.getItem('refresh')) == true) {
        localStorage.setItem('refresh', JSON.stringify(true))        
        redirectUser('/', '/el.resursebi-front')  
    } 
}



function redirectUser(schoolLink, githubLink) {
    if(location.host == "school.emis.ge") {
        location.href = schoolLink

    } else if(location.host == "ananoaspanidze.github.io") {
        location.href = githubLink

    } else {
        location.href = schoolLink
    }
}