// logo link directive
Vue.directive('logo', {
    bind(el, binding) {
        const header = el.querySelector('.header-logo');
        const logo = el.querySelector('.logo');
        const sound = el.querySelectorAll('.sound img');
        sound.forEach(elm => {
            if (elm.classList.contains('on')) {
                elm.src = binding.value + 'Vue-Header/header/active.svg'
            } else {
                elm.src = binding.value + 'Vue-Header/header/mute.svg'
            }
        });
        header.href = binding.value + 'index.html';
        logo.src = binding.value + 'Vue-Header/header/Header-logo.svg'
    }
});
//menu directive with
Vue.directive('menu', {
    bind(el, binding) {
        const image = el.querySelector('img');
        console.log(image)
        if (binding.arg === 'dark') {
            image.src = binding.value + 'Vue-Header/header/header-menu.svg';
        } else if (binding.arg === 'light') {
            image.src = binding.value + 'Vue-Header/header/header-menu-white.svg';
        }
        image.alt = 'menu'
    }
});


//menu component
Vue.component('appMenu', {
    data(){
        return {
            isActive: true
        }
    },
    template: `
    <div class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand ml-auto header-logo">
            <img class="logo" src="" alt="logo">
        </a>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <div class="menu_box sound">
                <img v-if="isActive" class="on"  alt="sound">
                <img v-else class="off"  alt="sound">
            </div>
          </li>
          <li class="nav-item">
            <div class="lang_box">
                <div class="text">Eng</div>
            </div>
          </li>
          <li class="nav-item dropdown">
            <div class="nav-link menu_box"></div>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
   </div>
    `
});
// sound and lang
/*Vue.component('soundLang', {
    data() {
        return {
            color: '#fff',
            circleColor: '#7fd1d8',
            lang: 'Eng'
        }
    },
    methods: {
        soundLand() {
            if (this.lang === 'ქარ') {
                this.lang = 'Eng'
            } else {
                this.lang = 'ქარ'
            }
        },
        colorSwitch() {
            const onCircle = document.getElementById('Ellipse_380-2');
            const onIcon = document.getElementById('Path_1226');
            if (onCircle.getAttribute("fill") === this.color) {
                //change icon gb and path color for sound on
                onCircle.setAttribute("fill", this.circleColor);
                onIcon.setAttribute("fill", this.color);
                //change icon gb and path color for sound on
                // lang.style.background = '#fff'
            } else {
                onCircle.setAttribute("fill", this.color);
                onIcon.setAttribute("fill", this.circleColor);
            }
        }
    },
    template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
    </nav>
    `
});*/


var app = new Vue({
    el: '#app',
});
