Vue.directive('logo', {
    bind(el, binding) {
        const header = el.querySelector('.header-logo');
        const logo = el.querySelector('.logo');
        const sound = el.querySelectorAll('.sound img');
        sound.forEach(elm => {
            if (elm.classList.contains('on')) {
                elm.src = binding.value + 'New-header-vue/header-img/active.svg'
            } else {
                elm.src = binding.value + 'New-header-vue/header-img/mute.png'
            }
        });
        header.href = binding.value + 'index.html';
        logo.src = binding.value + 'New-header-vue/header-img/Header-logo.svg'
    }
});

//menu component ნავბარის კომპონენტი
Vue.component('appMenu', {
    data() {
        return {
            show: true,
            isShow: true,
            menuHover: false,
            langHover: false,
            soundHover: false
        }
    },
    props: {
        isActive: {
            type: Boolean,
            required: true
        },
        toggle: {
            type: Function,
            required: true
        }
    },
    template: `
    <div class="navbar navbar-expand-lg navbar-light bg-transparent">
        <a class="navbar-brand ml-auto header-logo">
            <img class="logo" src="" alt="logo">
        </a>
        <ul class="navbar-nav ml-auto">
          <li 
            @click="isShow = !isShow" 
            class="nav-item"
            @mouseover="soundHover = true"
            @mouseleave="soundHover = false"
          >
            <div 
                class="sound_box sound"
                :class="[soundHover ? 'sound_box_active' : 'sound_box_passive']"
            >
                <img v-show="isShow" class="on animated.fast" :class="{flipInX: !isShow, flipInX: isShow}"  alt="sound">
                <img v-show="!isShow" class="off animated.fast" :class="{flipInX: isShow, flipInX: !isShow}" alt="sound">
            </div>
          </li>
          <li 
            @click="show = !show" 
            class="nav-item"
            @mouseover="langHover = true"
            @mouseleave="langHover = false"
          >
            <div class="lang-box"
                :class="[langHover ? 'lang-box_active' : 'lang-box_passive']"
            >
            <transition enter-active-class="animated.fast flipInX" leave-active-class="animated.fast flipOutX" mode="out-in">
                <div v-if="show" class="text" key="eng">Eng</div>
                <div v-else class="text" key="geo">ქარ</div>
            </transition>
            </div>
          </li>
          <li 
              class="nav-item dropdown" 
              @mouseover="menuHover = true"
              @mouseleave="menuHover = false"
          >
             <div class="menu_box"
                 :class="[menuHover || isActive ? 'menu_box_active' : 'menu_box_passive']"
             >
                <button type="button" class="hamburger hamburger--stand"
                        :class="[isActive ? 'is-active' : '']"
                        @click="toggle">
                    <span class="hamburger-box" >
                      <span class="hamburger-inner hamburger-inner_bg-blue" >
                          <span class="hamburger-inner__before hamburger-inner_bg-blue"></span>
                          <span class="hamburger-inner__after hamburger-inner_bg-blue"></span>
                      </span>
                    </span>
                </button>
             </div>
          </li>
        </ul>
   </div>
    `
});

//section component სექციის კომპონენტი (გენერირდება დინამიურად)
Vue.component('appSection', {
    template: `
       <section>
            <slot></slot>
       </section>
    `,
});

//bar component - კომპონენტების ბარი ნავიგაცია
Vue.component('appBar', {
    props: {
        isActive: {
            type: Boolean,
            required: true
        },
        dots: {
            type: Array
        },
        currentTab: {
            type: String
        },
    },
    template: `
        <transition 
            enter-active-class="animated fadeInDown"
            leave-active-class="animated fadeOutUp"
            :duration="1000"
            mode="out-in">
                  <div v-show="isActive" class="top-bar">
                        <button v-for="(dot, index) in dots" 
                                :class="[dot.classActive ? dot.name : '']" 
                                :disabled="dot.disable"
                                :key="dot.id" 
                                @click="$emit('link-tab', dot.name)" ></button>
                  </div>
        </transition>
    `
});

//appStart საგნების ასარჩევი კომპონენტი
Vue.component('appStart', {
    props: {
        isActive: {
            type: Boolean,
            required: true
        },
        trigger: {
            type: Function,
            required: true
        },
        tabClass: String
    },
    template: `
        <transition 
            enter-active-class="animated slideInUp"
            leave-active-class="animated slideOutDown"
            :duration="1000"
            mode="out-in"
            appear>
                <div v-if="isActive" class="page-section" :class="'app-start'">
                    <div class="row">
                        <div class="col-3 main-lesson-start-cont">
                          <img alt="music" src="./img/gakvetilebi/musika/musika-artwork.svg" class="main-lesson-start-img" />
                          <div class="new_btn-start-cont ">
                            <a @click="trigger('start', 'მუსიკა')" class="new_btn-start">მუსიკა</a>
                          </div>
                        </div>
                        <div class="col-3 main-lesson-start-cont">
                          <img alt="art" src="./img/gakvetilebi//xelovneba/xelovneba-artwork.svg" class="main-lesson-start-img" />
                          <div class="new_btn-start-cont">
                            <a @click="trigger('select', 'ხელოვნება')" class="new_btn-start">ხელოვნება</a>
                          </div>
                        </div>
                        <div class="col-3 main-lesson-start-cont">
                          <img alt="nature" src="./img/gakvetilebi/buneba/buneba-artwork.svg" class="main-lesson-start-img" />
                          <div class="new_btn-start-cont">
                            <a @click="trigger('select', 'ბუნება')" class="new_btn-start">ბუნება</a>
                          </div>
                        </div>
                        <div class="col-3 main-lesson-start-cont">
                          <img alt="computer" src="./img/gakvetilebi/Computer-Science/main_img.png" class="main-lesson-start-img" />
                          <div class="new_btn-start-cont">
                            <a @click="trigger('select', 'კომპიუტერული მეცნიერება')" class="new_btn-start">კომპიუტერული მეცნიერება</a>
                          </div>
                        </div>
                     </div>
                </div>
        </transition>
    `
});


// appSelect component  გაკვეთილების ასარჩევი კომპონენტო
Vue.component('appSelect', {
    props: {
        tabClass: String,
        activeClass: String,
        isActive: {
            type: Boolean,
            required: true
        },
    },
    data() {
        return {
            class: title
        }
    },
    computed: {
        titleCheck() {
            if (this.activeClass === 'მუსიკა') {
                return this.class.music;
            } else if (this.activeClass === 'ხელოვნება') {
                return this.class.art;
            } else if (this.activeClass === 'ბუნება') {
                return this.class.nature;
            } else {
                return this.class.IT
            }
        }
    },
    template: `
        <transition 
            enter-active-class="animated slideInUp"
            leave-active-class="animated slideOutDown"
            :duration="1000"
            mode="out-in"
            appear
        >
            <div v-if="isActive" :class="'app-select'" class="page-section">
                <div class="row">
                    <div class="col-12">
                        <h5 class="app-select_title">{{ activeClass }}</h5>
                    </div>
                    <div class="col-4 app-select_box" v-for="title in titleCheck" :key="title.id">
                        <div class="row">
                            <div class="col-10 app-select_box-content d-flex justify-content-center align-items-center">
                                 <a href="#">{{ title.name }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        `
});

// appLinks ნავიგაცია კომპონენტების 'რუკით'
Vue.component('appLinks', {
    props: {
        tabClass: String,
        isActive: {
            type: Boolean,
            required: true
        },
    },

    template: `
        <transition 
            enter-active-class="animated slideInUp"
            leave-active-class="animated slideOutDown"
            :duration="1000"
            mode="out-in"
            appear>
            <div v-if="isActive" :class="'app-links'" class="page-section"></div>
        </transition>
        `
});

// appSections ნავიგაცია კომპონენტების ღილაკებით
Vue.component('appSections', {
    props: {
        tabClass: String,
        isActive: {
            type: Boolean,
            required: true
        },
    },
    template: `
        <transition 
            enter-active-class="animated slideInUp"
            leave-active-class="animated slideOutDown"
            :duration="1000"
            mode="out-in"
            appear>
            <div v-if="isActive" :class="'app-sections'" class="page-section"></div>
        </transition>
        `
});

//Vue declaration
var app = new Vue({
    el: '#app',
    data: {
        isActive: false,
        link: 'start',
        dots: [
            {name: 'start', id: 0, disable: false, classActive: true},
            {name: 'select', id: 1, disable: true, classActive: false},
            {name: 'links', id: 2, disable: true, classActive: false},
            {name: 'sections', id: 3, disable: true, classActive: false}
        ],
        activeClass: '',

    },
    // trigger menu button & menu panels
    methods: {
        toggle() {
            this.isActive = !this.isActive;

            this.dots.forEach(dot => {
                if (dot.id === 0 && !this.isActive) {
                    dot.disable = false;
                    dot.classActive = true;
                }
                if (dot.id === 1 && !this.isActive) {
                    dot.disable = true;
                    dot.classActive = false;
                }
            })
        },
        trigger(val, data) {
            this.activeClass = data;
            this.link = 'select';
            this.dots.forEach(dot => {
                if (dot.name === val) {
                    dot.disable = false;
                    dot.classActive = true
                } else {
                    dot.classActive = false;
                }
            });
        }
    },
    computed: {
        currentTabComponent() {
            this.dots.forEach(dot => {
                if (dot.name === this.link.toLowerCase()) {
                    dot.classActive = true
                } else {
                    dot.classActive = false;
                }

            });
            return 'app-' + this.link.toLowerCase()
        }
    }
});



// გაკვეთილიების სათაურები
let title = {
    music: [
        {id: 1, name: 'ხმები',},
        {id: 2, name: 'მუსიკალური კომპოზიცია'},
        {id: 3,  name: 'გასეირნება ქალაქში'},
        {id: 4, name: 'მუსიკალური ქალაქი'},
        {id: 5, name: 'მუსიკალური ქალაქი'},
        {id: 6, name: 'ჩემი ცხოვრების ერთი დღე'},
        {id: 7, name: 'საინტერესოდ გატარებული დღე'},
        {id: 8, name: ''},
        {id: 9, name: ''},
        {id: 10, name: ''},
        {id: 11, name: ''},
        {id: 12, name: ''}
    ],
    art: [
        {id: 1, name: 'ფერებით მოთხრობილი ამბავი'},
        {id: 2, name: 'მშვიდი და ბობოქარი'},
        {id: 3, name: 'ტყე'},
        {id: 4, name: 'ჯადოსნური ქვეყანა'},
        {id: 5, name: 'თავგადასავალი'},
        {id: 6, name: 'პეიზაჟი'},
        {id: 7, name: 'ფერებით მოთხრობილი ამბავი'},
        {id: 8, name: 'მშვიდი და ბობოქარი'},
        {id: 9, name: 'სათაური'},
        {id: 10, name: 'სათაური'},
        {id: 11, name: 'სათაური'},
        {id: 12, name: 'სათაური'},
    ],
    nature: [
        {id: 1, name: 'საშიში სათამაშოები'},
        {id: 2, name: 'უხილავი ძალები'},
        {id: 3, name: 'რატომ იცვალა ტყემ ფერი?'},
        {id: 4, name: 'რატომ მოიწყინა ჩემმა ყვავილმა'},
        {id: 5, name: 'სად დაიმალა მზე?'},
        {id: 6, name: 'შეიძლება ზაფხული ზამთარში იყოს?'},
        {id: 7, name: 'სათაური'},
        {id: 8, name: 'სათაური'},
        {id: 9, name: 'სათაური'},
        {id: 10, name: 'სათაური'},
        {id: 11, name: 'სათაური'},
        {id: 12, name: 'სათაური'}
    ],
    IT: [
        {id: 1, name: 'კომპიუტერი და მისი შემადგენელი ნაწილები'},
        {id: 2, name: 'ალგორითმი'},
        {id: 3, name: 'სათაური'},
        {id: 4, name: 'სათაური'},
        {id: 5, name: 'სათაური'},
        {id: 6, name: 'სათაური'},
        {id: 7, name: 'სათაური'},
        {id: 8, name: 'სათაური'},
        {id: 9, name: 'სათაური'},
        {id: 10, name: 'სათაური'},
        {id: 11, name: 'სათაური'},
        {id: 12, name: 'სათაური'}
    ]
}
