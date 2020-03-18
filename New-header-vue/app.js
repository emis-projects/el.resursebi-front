// directive გადაემა html კომპონენტში
Vue.directive('logo', {
    bind(el, binding) {
        const header = el.querySelector('.header-logo');
        const logo = el.querySelector('.logo');
        const sound = el.querySelectorAll('.sound img');
        // ბურგერის სვგ სურათების path
        sound.forEach(elm => {
            if (elm.classList.contains('on')) {
                elm.src = binding.value + 'New-header-vue/header-img/active.svg';
            } else {
                elm.src = binding.value + 'New-header-vue/header-img/mute.png';
            }
        });
        // ლოგოს path მიბმა
        header.href = binding.value + 'index.html';
        logo.src = binding.value + 'New-header-vue/header-img/Header-logo.svg';
    }
});

// directive გადაემა html კომპონენტში (ხელ, ბუნ, მუს, ქვედა მარჯვენა კუთხეში შესაბამისი სურათის src-ს path დაგენერირება)
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

//menu component ნავბარის კომპონენტი (ენის, ხმის და ბურგერის ცვლილებები)
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
                <!--აგნენერირებს შესაბამის კომპონენტს-->
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
                  <!--todo ბარის ნავიგაცია(4 სექციით ჯერ მხოლოდ 2 მუშაობს) 
                      იკონკები გენერირდება დინამიურად კლასით (დასრულებულია)
                    -->
                        <button v-for="(dot, index) in dots" 
                                :class="['icon-'+ index, dot.classActive ? dot.name : '']"
                                :disabled="dot.disable"
                                :key="dot.id" 
                                @click="$emit('link-tab', dot.name)" 
                                ><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></button>
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
                        <!--  
                         -----  მუსუკა დამალულია (სავარაუდოდ დროებით -_- )
                         -----
                        <div class="col-4 main-lesson-start-cont">
                          <img alt="music" :src="images.music" class="main-lesson-start-img" />
                          <div class="new_btn-start-cont ">
                            <a @click="trigger('select', 'მუსიკა')" class="new_btn-start">მუსიკა</a>
                          </div>
                        </div>
                        -->
                        <div class="col-4 main-lesson-start-cont">
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
                        <div class="col-4 main-lesson-start-cont">
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
            // title is object
            class: title,
            classID: 2,
            activeItem: 1
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
                return this.class['IT_' + this.classID];
            }
        },
        artImage() {
            if (this.activeClass === 'მუსიკა') {
                return this.images.music;
            } else if (this.activeClass === 'ხელოვნება') {
                return this.images.art;
            } else if (this.activeClass === 'ბუნება') {
                return this.images.nature;
            }
        }
    },
    methods: {
        classChoose(val) {
            this.classID = val;
            this.activeItem = val - 1;
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
                    <div v-if="activeClass === 'კომპიუტერული მეცნიერება'" class="col-12 mt-5">
                    <div class="row">
                            <div class="col-4">
                                <div class="class_box d-flex justify-content-between">
                                <!--:class="{ active: number === activeItem }"-->
                                    <div class="circles d-flex justify-content-center align-items-center"
                                        @click="classChoose(number+1)" 
                                        v-for="number in 5" 
                                        :key="number"
                                        >
                                         <transition 
                                             enter-active-class="animated flipInX"
                                             leave-active-class="animated flipOutY"
                                             :duration="750"
                                             mode="out-in"
                                             tag="div"
                                             appear
                                             class="circle_wrapper">
                                             <div class="circles_number-pink" v-if="number !== activeItem" key="pink">
                                                 <img :src="path + 'New-header-vue/header-img/pink_'+ (number + 1) +'.svg'" :alt="'pink_' + (number+1)" class="img-fluid">
                                             </div>    
                                             <div class="circles_number-white" v-else key="white">
                                                 <img :src="path + 'New-header-vue/header-img/white_'+ (number + 1) +'.svg'" :alt="'white_' + (number+1)" class="img-fluid">
                                             </div>  
                                             </transition>                             
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mt-5">
                        <div class="row">
                            <div v-for="title in titleCheck" :key="title.id" class="col-4 app-select_box">
                                <div class="row">
                                    <div class="col-10 app-select_box-content d-flex justify-content-center align-items-center">
                                         <transition
                                              enter-active-class="animated fadeIn"
                                              leave-active-class="animated fadeOut"
                                              :duration="550"
                                              mode="out-in">
                                              <a :href="path + title.link" :key="title.name">{{ title.name }}</a>
                                         </transition>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row app-select_artwork">
                    <div class="col-12">
                        <div v-if="activeClass !== 'კომპიუტერული მეცნიერება'" class="app-select_artwork_image-box ml-auto">
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

        /*
          -- გაკვეთილების სექციის ჩატვირთვა data(დაგაეცემა, თემები: ხელ. მუს. ბუნ. კომპ.)
          -- this.link ააქტიურებს დინამიური კომპონენტების ჩამტვირთველ კომპონენტს
          -- გახდეს აქტიური შესაბამისი dot
        */
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
        // აგენერირებს პომპონენტებს დინამიურად
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

//ვუს ცვლადების შეცვლა სლაიდერზე კლიკისას
function startPage(val) {
    app.$data.link = 'select'; // ააქტიურებს შესაბამის კომპონენტს
    app.$data.isActive = true; // ააქტიურებს მენიუს
    app.$data.activeClass = val; // გადაეცემა საგნების სახელები (ბუნება, ხელოვნება, მუსიკა, კომპ.)
}

// გაკვეთილიების სათაურები
let title = {
    music: [
        {
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
    art: [
        {
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
            name: 'მე და ჩემი მეგობრები',
            link: 'Art-Lessons/friends_09/1.html'
        },
        {
            id: 10,
            name: 'ჩვეულებრივი და არაჩვეულებრივი ნივთები',
            link: 'Art-Lessons/items-10/1.html'
        },
        {
            id: 11,
            name: 'ყოველდღიური ამბები',
            link: 'Art-Lessons/daily-news-11/1.html'
        },
        {
            id: 12,
            name: 'ვირტუალური გამოფენა',
            link: 'Art-Lessons/VR_exhibition/1.html'
        }
    ],
    nature: [
        {
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
            link: 'Nature-Lessons/flamingo-08/1.html'
        },
        {
            id: 9,
            name: 'დედამიწის გარშემო 80 დღეზე სწრაფად',
            link: 'Nature-Lessons/around-world-09/1.html'
        },
        {
            id: 10,
            name: 'რატომ არის ანას ქურთუკი ძალიან თბილი?',
            link: 'Nature-Lessons/coat-10/1.html'
        },
        {
            id: 11,
            name: 'როგორ ვაჯობოთ ბიჭებს „შერკინებაში?”',
            link: 'Nature-Lessons/sport/1.html'
        },
        {
            id: 12,
            name: 'გვინდა თოვლი დაბადების დღეზე!',
            link: 'Nature-Lessons/snow-12/1.html'
        }
    ],
    IT_2: [
        {
            id: 1,
            name: 'პირობითი ნიშნების ენა',
            link: 'Computer-Science/Class-2/conditional-signs-1/1.html'
        },
        {
            id: 2,
            name: 'პირობითი ნიშნები ჩვენს ირგვლივ',
            link: 'Computer-Science/Class-2/marks-2/1.html'
        },
        {
            id: 3,
            name: 'ნაწილი და მთელი',
            link: 'Computer-Science/Class-2/part&whole-3/1.html'
        },
        {
            id: 4,
            name: ',,ციკლები” ჩვენს ცხოვრებაში',
            link: 'Computer-Science/Class-2/cycle-4/1.html'
        },
        {
            id: 5,
            name: 'კომპიუტერი 2 კლასი 5 გაკვ',
            link: 'Computer-Science/Class-2/...'
        },
        {
            id: 6,
            name: 'მომხმარებლის გრაფიკული ინტერფეისი',
            link: 'Computer-Science/Class-2/user-interface-6/1.html'
        },
        {
            id: 7,
            name: 'კომპიუტერი 2 კლასი 7 გაკვ',
            link: 'Computer-Science/Class-2/...'
        },
        {
            id: 8,
            name: 'კომპიუტერული პროგრამებით დავალების შესრულება',
            link: 'Computer-Science/Class-2/programing-8/1.html'
        },
        {
            id: 9,
            name: 'სათაური',
            link: 'Computer-Science/Class-2/...'
        },
        {
            id: 10,
            name: 'სათაური',
            link: 'Computer-Science/Class-2/...'
        },
        {
            id: 11,
            name: 'სათაური',
            link: 'Computer-Science/Class-2/...'
        },
        {
            id: 12,
            name: 'სათაური',
            link: 'Computer-Science/Class-2/...'
        }
    ],
    IT_3: [
        {
            id: 1,
            name: 'კომპიუტერის შექმნისა და განვითარების მოკლე ისტორია',
            link: './Computer-Science/Class-3/computer-development-1/1.html'
        },
        {
            id: 2,
            name: 'კომპიუტერი 3 კლასი 2 გაკვ',
            link: './Computer-Science/algorithme/C-1366-02-03.html'
        },
        {
            id: 3,
            name: 'კომპიუტერი 3 კლასი 3 გაკვ',
            link: '#'
        },
        {
            id: 4,
            name: 'ალგორითმი და ალგორითმის შემუშავება',
            link: 'Computer-Science/Class-3/algorithmes-02/1.html'
        },
        {
            id: 5,
            name: 'რა არის პროგრამული ენა',
            link: './Computer-Science/Class-3/programming-language-5/1.html'
        },
        {
            id: 6,
            name: 'ვიზუალური კომუნიკაციის ენა',
            link: './Computer-Science/Class-3/Visual-Communication-6/1.html'
        },
        {
            id: 7,
            name: 'სათაური',
            link: '#'
        },
        {
            id: 8,
            name: 'როგორ მუშაობს ინტერნეტი',
            link: './Computer-Science/Class-3/internet-8/1.html'
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
            name: 'პრეზენტაციის შექმნა (Ms PowerPoint)',
            link: './Computer-Science/Class-3/Presentation-11/1.html'
        },
        {
            id: 12,
            name: 'სათაური',
            link: '#'
        }
    ],
    IT_4: [
        {
            id: 1,
            name: 'კომპიუტერი 4 კლასი 1 გაკვ',
            link: './Computer-Science/Computer_parts/C-1366-01-01.html'
        },
        {
            id: 2,
            name: 'შეცდომები პროგრამირებაში',
            link: './Computer-Science/Class-4/programing-mistakes-2/1.html'
        },
        {
            id: 3,
            name: 'კომპიუტერი 4 კლასი 3 გაკვ',
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
            name: 'ტექსტის სწორება (Ms Word)',
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
    ],
    IT_5: [
        {
            id: 1,
            name: 'კომპიუტერი 5 კლასი 1 გაკვ',
            link: './Computer-Science/Computer_parts/C-1366-01-01.html'
        },
        {
            id: 2,
            name: 'კომპიუტერი 5 კლასი 2 გაკვ',
            link: './Computer-Science/algorithme/C-1366-02-03.html'
        },
        {
            id: 3,
            name: 'კომპიუტერი 5 კლასი 3 გაკვ',
            link: '#'
        },
        {
            id: 4,
            name: 'ობიექტის გადაადგილება ვიზუალური კოდის საშუალებით',
            link: './Computer-Science/Class-5/objects-moving-4/1.html'
        },
        {
            id: 5,
            name: 'ფუნქცია',
            link: './Computer-Science/Class-5/function-5/1.html'
        },
        {
            id: 6,
            name: 'პარალელური პროგრამირება',
            link: './Computer-Science/Class-5/parallel-programming-6/1.html'
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
    ],
    IT_6: [
        {
            id: 1,
            name: 'კომპიუტერი 6 კლასი 1 გაკვ',
            link: './Computer-Science/Computer_parts/C-1366-01-01.html'
        },
        {
            id: 2,
            name: 'კომპიუტერი 6 კლასი 2 გაკვ',
            link: './Computer-Science/algorithme/C-1366-02-03.html'
        },
        {
            id: 3,
            name: 'კომპიუტერი 6 კლასი 3 გაკვ',
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
}