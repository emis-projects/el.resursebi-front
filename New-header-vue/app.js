Vue.directive('logo', {
    bind(el, binding) {
        const header = el.querySelector('.header-logo');
        const logo = el.querySelector('.logo');
        const sound = el.querySelectorAll('.sound img');
        sound.forEach(elm => {
            if (elm.classList.contains('on')) {
                elm.src = binding.value + 'New-header-vue/header-img/active.svg';
            } else {
                elm.src = binding.value + 'New-header-vue/header-img/mute.png';
            }
        });
        header.href = binding.value + 'index.html';
        logo.src = binding.value + 'New-header-vue/header-img/Header-logo.svg';
    }
});

Vue.directive('image', {
    bind(el, binding, vnode) {
        vnode.context.$data.path = binding.value;
        vnode.context.$data.images.IT =
            binding.value + 'New-header-vue/header-img/arts/IT-artwork.svg';
        vnode.context.$data.images.art =
            binding.value + 'New-header-vue/header-img/arts/art-artwork.svg';
        vnode.context.$data.images.nature =
            binding.value + 'New-header-vue/header-img/arts/nature-artwork.svg';
        vnode.context.$data.images.music =
            binding.value + 'New-header-vue/header-img/arts/music-artwork.svg';
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
        };
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
    props: {
        isActive: {
            type: Boolean,
            required: true
        }
    },
    template: `
            <div>
                <section class="section_box">
                    <slot></slot>
                 </section>
                 <transition 
                    enter-active-class="animated fadeIn"
                    leave-active-class="animated fadeOut"
                    :duration="750"
                    mode="out-in">
                    <div v-show="isActive" class="bg_menu"></div>
                </transition>
            </div>
            
    `
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
        }
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
        tabClass: String,
        images: Object
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
                          <img alt="music" :src="images.music" class="main-lesson-start-img" />
                          <div class="new_btn-start-cont ">
                            <a @click="trigger('select', 'მუსიკა')" class="new_btn-start">მუსიკა</a>
                          </div>
                        </div>
                        <div class="col-3 main-lesson-start-cont">
                          <img alt="art" :src="images.art" class="main-lesson-start-img" />
                          <div class="new_btn-start-cont">
                            <a @click="trigger('select', 'ხელოვნება')" class="new_btn-start">ხელოვნება</a>
                          </div>
                        </div>  
                        <div class="col-3 main-lesson-start-cont">
                          <img alt="nature" :src="images.nature" class="main-lesson-start-img" />
                          <div class="new_btn-start-cont">
                            <a @click="trigger('select', 'ბუნება')" class="new_btn-start">ბუნება</a>
                          </div>
                        </div>
                        <div class="col-3 main-lesson-start-cont">
                          <img alt="computer" :src="images.IT" class="main-lesson-start-img" />
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
        images: Object,
        path: String,
        isActive: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            class: title
        };
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
                return this.class.IT;
            }
        },
        artImage() {
            if (this.activeClass === 'მუსიკა') {
                return this.images.music;
            } else if (this.activeClass === 'ხელოვნება') {
                return this.images.art;
            } else if (this.activeClass === 'ბუნება') {
                return this.images.nature;
            } else {
                return this.images.IT;
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
                    <div v-for="title in titleCheck" :key="title.id" class="col-4 app-select_box">
                        <div class="row">
                            <div class="col-10 app-select_box-content d-flex justify-content-center align-items-center">
                                 <a :href="path + title.link">{{ title.name }}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row app-select_artwork">
                    <div class="col-12">
                        <div class="app-select_artwork_image-box ml-auto">
                            <img :src="artImage" alt="art">
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
        }
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
        }
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
        path: '',
        images: {
            IT: './New-header-vue/header-img/arts/IT-artwork.svg',
            art: './New-header-vue/header-img/arts/art-artwork.svg',
            nature: './New-header-vue/header-img/arts/nature-artwork.svg',
            music: './New-header-vue/header-img/arts/music-artwork.svg'
        },
        dots: [{
                name: 'start',
                id: 0,
                disable: false,
                classActive: true
            },
            {
                name: 'select',
                id: 1,
                disable: true,
                classActive: false
            },
            {
                name: 'links',
                id: 2,
                disable: true,
                classActive: false
            },
            {
                name: 'sections',
                id: 3,
                disable: true,
                classActive: false
            }
        ],
        activeClass: ''
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
            });
            this.link = 'start';
            this.activeClass = '';
        },
        trigger(val, data) {
            this.activeClass = data;
            this.link = 'select';
            this.dots.forEach(dot => {
                if (dot.name === val) {
                    dot.disable = false;
                    dot.classActive = true;
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
                    dot.classActive = true;
                } else {
                    dot.classActive = false;
                }
            });
            return 'app-' + this.link.toLowerCase();
        }
    }
});

//ვუს ცვლადების შეცვლა სლაიდერის დაწყებაზე კლიკისას
function startPage(val) {
    app.$data.link = 'select';
    app.$data.isActive = true;
    app.$data.activeClass = val;
}

// გაკვეთილიების სათაურები
let title = {
    music: [{
            id: 1,
            name: 'ხმები',
            link: 'Music-Lessons/Voices/M-1366-9.html'
        },
        {
            id: 2,
            name: 'მუსიკალური კომპოზიცია',
            link: 'Music-Lessons/Voices/M-1366-17.html'
        },
        {
            id: 3,
            name: 'გასეირნება ქალაქში',
            link: 'Music-Lessons/Walk-in-the-city-1/M-1366-03-1.html'
        },
        {
            id: 4,
            name: 'მუსიკალური ქალაქი',
            link: 'Music-Lessons/musical_city/M-1366-04-1.html'
        },
        {
            id: 5,
            name: 'ჩემი ცხოვრების ერთი დღე',
            link: 'Music-Lessons/Day-of-my-life/M-1366-05-1.html'
        },
        {
            id: 6,
            name: 'საინტერესოდ გატარებული დღე',
            link: 'Music-Lessons/interesting-day/M-1366-06-1.html'
        }

        // თუ დაემათება გაკვეთილები მუსიკას ყველა გავააქტიუროთ, link: '
        /*{id: 7, name: '', link: '#'},
        {id: 8, name: '', link: '#'},
        {id: 9, name: '', link: '#'},
        {id: 10, name: '', link: '#'},
        {id: 11, name: '', link: '#'},
        {id: 12, name: '', link: '#'}*/
    ],
    art: [{
            id: 1,
            name: 'ფერებით მოთხრობილი ამბავი',
            link: 'Art-Lessons/color_story/1366-236.html'
        },
        {
            id: 2,
            name: 'მშვიდი და ბობოქარი',
            link: 'Art-Lessons/calm_and_stormy/A-1366-73.html'
        },
        {
            id: 3,
            name: 'ტყე',
            link: 'Art-Lessons/forest/A-1366-03-1.html'
        },
        {
            id: 4,
            name: 'ჯადოსნური ქვეყანა',
            link: 'Art-Lessons/Magic-world/A-1366-04-2.html'
        },
        {
            id: 5,
            name: 'თავგადასავალი',
            link: 'Art-Lessons/Adventure/A-1366-05-2.html'
        },
        {
            id: 6,
            name: 'პეიზაჟი',
            link: 'Art-Lessons/Landscape/A-1366-06-1.html'
        },
        {
            id: 7,
            name: 'ქალაქი',
            link: '/Art-Lessons/City-07/1.html'
        },
        {
            id: 8,
            name: 'პლაკატი "გადავარჩინოთ ბუნება"',
            link: 'Art-Lessons/rescue_nature_08/1.html'
        },
        {
            id: 9,
            name: 'სათაური',
            link: '#'
        },
        {
            id: 10,
            name: 'სათაური',
            link: '#'
        },
        {
            id: 11,
            name: 'სათაური',
            link: '#'
        },
        {
            id: 12,
            name: 'სათაური',
            link: '#'
        }
    ],
    nature: [{
            id: 1,
            name: 'საშიში სათამაშოები',
            link: 'Nature-Lessons/My_world/N-1366-13.html'
        },
        {
            id: 2,
            name: 'უხილავი ძალები',
            link: 'Nature-Lessons/invisible_forces/N-1366-36.html'
        },
        {
            id: 3,
            name: 'რატომ იცვალა ტყემ ფერი?',
            link: 'Nature-Lessons/forest_colours/N-1366-03-109.html'
        },
        {
            id: 4,
            name: 'რატომ მოიწყინა ჩემმა ყვავილმა',
            link: 'Nature-Lessons/The-living-world/N-1366-04-188.html'
        },
        {
            id: 5,
            name: 'სად დაიმალა მზე?',
            link: 'Nature-Lessons/Where-sun-goes/N-1366-05-3.html'
        },
        {
            id: 6,
            name: 'შეიძლება ზაფხული ზამთარში იყოს?',
            link: 'Nature-Lessons/Summer-in-winter/N-1366-06-3.html'
        },
        {
            id: 7,
            name: 'რატომ არის ბრუცა ბრმა?',
            link: 'Nature-Lessons/Bruca-07/1.html'
        },
        {
            id: 8,
            name: 'თეთრი - ვარდისფერი ფლამინგო',
            link: 'Nature-Lessons/ფლამინგო-08/1.html'
        },
        {
            id: 9,
            name: 'სათაური',
            link: '#'
        },
        {
            id: 10,
            name: 'სათაური',
            link: '#'
        },
        {
            id: 11,
            name: 'სათაური',
            link: '#'
        },
        {
            id: 12,
            name: 'სათაური',
            link: '#'
        }
    ],
    IT: [{
            id: 1,
            name: 'კომპიუტერი და მისი შემადგენელი ნაწილები',
            link: './Computer-Science/Computer_parts/C-1366-01-01.html'
        },
        {
            id: 2,
            name: 'ალგორითმი',
            link: './Computer-Science/algorithme/C-1366-02-03.html'
        },
        {
            id: 3,
            name: 'სათაური',
            link: '#'
        },
        {
            id: 4,
            name: 'სათაური',
            link: '#'
        },
        {
            id: 5,
            name: 'სათაური',
            link: '#'
        },
        {
            id: 6,
            name: 'სათაური',
            link: '#'
        },
        {
            id: 7,
            name: 'სათაური',
            link: '#'
        },
        {
            id: 8,
            name: 'სათაური',
            link: '#'
        },
        {
            id: 9,
            name: 'სათაური',
            link: '#'
        },
        {
            id: 10,
            name: 'სათაური',
            link: '#'
        },
        {
            id: 11,
            name: 'სათაური',
            link: '#'
        },
        {
            id: 12,
            name: 'სათაური',
            link: '#'
        }
    ]
};