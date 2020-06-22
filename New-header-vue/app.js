// directive გადაემა html კომპონენტში
Vue.directive('logo', {
    bind: function (el, binding, vnode) {
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
        },
        info: {
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
          <!--ენის -->
          <!--<li
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
          </li>-->
          <li
             class="nav-item"
             @mouseover="langHover = true"
             @mouseleave="langHover = false"
             @click="info"
          >
            <div class="lang-box d-flex justify-content-center align-items-center"
                :class="[langHover ? 'lang-box_active' : 'lang-box_passive']"
             >
             <div class="info">?</div>
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
   </div> `
});

//Vue.component('appInfo')

//section component სექციის კომპონენტი (გენერირდება დინამიურად)
Vue.component('appSection', {
    props: {
        isActive: {
            type: Boolean,
            required: true
        },
        isInfo: {
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
                    :duration="550"
                    mode="out-in">
                    <div v-if="isActive || isInfo" class="bg_menu"></div>
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
                  <div v-if="isActive" class="top-bar">
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
// info seqciis გენერირება
Vue.component('appInfo', {
    props: {
        path: {
            type: String,
            required: true
        },
        isInfo: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            currentPage: 1
        }
    },
    template: `<div class="row info-box" v-if="isInfo">
                   <div class="col-12">
                        <transition
                            enter-active-class="animated flipInX"
                            leave-active-class="animated fadeOut"
                            :duration="1000"
                            mode="out-in"
                            tag="div"
                            appear
                        >
                            <div class="row" v-if="currentPage === 1" :key="1">
                                <div class="col-9 m-auto">
                                     <p class="dj-2_3vh">ვებგვერდზე განთავსებული დამხმარე ელექტრონული რესურსები შექმნილია I-VI კლასის სასკოლო პროგრამის შესაბამისად და ე
                                     მსახურება სასწავლო პროცესში მოსწავლეთა ჩართულობის გაზრდას. ყოველი თემა მოიცავს რამდენიმე ნაბიჯსა და კომპლექსურ დავალებას.
                                     მოსწავლის მიზანია, ნაბიჯების გავლისას მოაგროვოს საკმარისი ცოდნა, რომელსაც გამოიყენებს საბოლოო, რამდენიმეკომპონენტიანი კომპლექსური დავალების შესასრულებლად.
                                     რესურსები მოიცავს სხვადასხვა თამაშსა და სახალისო აქტივობას. ვებგვერდზე ჩაშენებულია ჩეთბოტის ფანჯარა.
                                     მისი დახმარებით მოსწავლეებსა და მასწავლებლებს საშუალება აქვთ, გაესაუბრონ ხელოვნურ ინტელექტს, დასვან კითხვები რესურსების თემატიკაზე და მიიღონ პასუხები.</p>
                                </div>
                                <div class="col-10 m-auto">
                                    <h1 class="alk-san_2-6vh mt-5vh text-center">ელექტრონული საგანმანათლებლო რესურსების ძირითადი კომპონენტები</h1>
                                </div>
                                <div class="col-11 m-auto">
                                     <div class="row mt-5vh">
                                         <div class="col-1">
                                             <div class="element-box">
                                                 <img :src="path+'New-header-vue/header-img/step.png'" alt="step" class="img-fluid">
                                             </div>
                                         </div>
                                         <div class="col-10">
                                             <p class="dj-2_3vh"><span class="title-pink dj-2_3vh">ნაბიჯი</span> — შეადგენს ელექტრონული რესურსის ძირითად ნაწილს. ნაბიჯი მოიცავს მასალას, რომელიც კლასში მუშავდება,
                                             ის შედგება კონკრეტულ საგნობრივ საკითხებთან დაკავშირებული შინაარსობრივი ბლოკებისგან. ერთი ნაბიჯი შეიძლება განხორციელდეს ერთი ან რამდენიმე გაკვეთილის განმავლობაში.
                                             ნაბიჯიდან, თავის მხრივ, შეეგვილია, გადავიდეთ სავარჯიშოზე, მინიშნებაზე ან შუალედურ დავალებაზე.</p>
                                         </div>
                                     </div>
                                </div>
                            </div>
                            <div class="row" v-if="currentPage === 2" :key="2">
                                <div class="col-11 m-auto">
                                    <div class="row">
                                         <div class="col-1">
                                            <div class="element-box">
                                                <img :src="path+'New-header-vue/header-img/task.png'" alt="task" class="img-fluid">
                                            </div>
                                         </div>
                                         <div class="col-10">
                                            <p class="dj-2_3vh"><span class="title-pink dj-2_3vh">სავარჯიშო</span> — პატარა კომპიუტერული თამაში, რომელიც ერთი კონკრეტული ამოცანის ამოხსნაზე ან საკითხის შესწავლაზე არის ორიენტირებული.
                                            მაგალითად, შედგენილი ფერების შექმნა ძირითადი ფერებისგან. სავარჯიშო არის ელექტრონულად შესასრულებელი სამუშაო.</p>
                                         </div>
                                    </div>
                                </div>
                                <div class="col-11 m-auto">
                                    <div class="row mt-5vh">
                                         <div class="col-1">
                                            <div class="element-box">
                                                <img :src="path+'New-header-vue/header-img/intermediate.png'" alt="task" class="img-fluid">
                                            </div>
                                         </div>
                                         <div class="col-10">
                                            <p class="dj-2_3vh"><span class="title-pink dj-2_3vh">შუალედური დავალება</span> — მოყვება ნაბიჯს ან სავარჯიშოს. შუალედური დავალება ელექტრონულად შესასრულებელი სავარჯიშოსგან განსხვავებულია,
                                            გულისხმობს ღია ტიპის შეკითხვებს ან ისეთ აქტივობებს, რომლებიც არაელექტრონულ ფორმატში სრულდება.</p>
                                         </div>
                                    </div>
                                </div>
                                <div class="col-11 m-auto">
                                    <div class="row mt-5vh">
                                         <div class="col-1">
                                            <div class="element-box">
                                                <img :src="path+'New-header-vue/header-img/hint.png'" alt="task" class="img-fluid">
                                            </div>
                                         </div>
                                         <div class="col-10">
                                            <p class="dj-2_3vh"><span class="title-blue dj-2_3vh">მინიშნება</span> — ასრულებს ერთგვარი ინტერაქტიული ლექსიკონის ფუნქციას, რომელშიც ესა თუ ის საკითხი იქნება განმარტებული,
                                            მინიშნებული, მაგალითად, რომელია ძირითადი ფერები. სავარჯიშოსგან განსხვავებით აქ ბავშვი მხოლოდ ინფორმაციას მიიღებს.</p>
                                         </div>
                                    </div>
                                </div>
                                <div class="col-11 m-auto">
                                    <div class="row mt-5vh">
                                         <div class="col-1">
                                            <div class="element-box">
                                                <img :src="path+'New-header-vue/header-img/compl-task.png'" alt="task" class="img-fluid">
                                            </div>
                                         </div>
                                         <div class="col-10">
                                            <p class="dj-2_3vh"><span class="title-blue dj-2_3vh">კომპლექსური დავალება</span> — მოსდევს სხვა აქტივობებს და განთავსებულია ბოლოში. კომპლექსური დავალება არის რესურსის ძირითადი კომპონენტი,
                                             რომლის შესრულებისასაც მოსწავლეებმა აქტივობებისას მიღებული ცოდნა უნდა გააერთიანონ.</p>
                                         </div>
                                    </div>
                                </div>
                                <div class="col-11 m-auto">
                                    <div class="row mt-5vh">
                                         <div class="col-1">
                                            <div class="element-box">
                                                <img :src="path+'New-header-vue/header-img/video-inst.png'" alt="task" class="img-fluid">
                                            </div>
                                         </div>
                                         <div class="col-10">
                                            <p class="dj-2_3vh"><span class="title-blue dj-2_3vh">ვიდეო ინსტრუქცია</span><br/> <a class="dj-2_3vh" href="https://youtu.be/7P4U16oh07Y" target="_blank">https://youtu.be/7P4U16oh07Y</a></p>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </transition>
                   </div>
                   <div class="col-2 m-auto section_pagination">
                       <div class="d-flex justify-content-between align-items-center side-margin">
                           <div class="pagination__prev__btn" @click="currentPage--" v-if="currentPage !== 1">
                               <img alt="next" :src="path + '/img/icons/chevron-left-icon.svg'">
                           </div>
                           <div class="pagination__item d-flex justify-content-center align-items-center" v-if="currentPage !==1">
                               <div class="pagination__dot"></div>
                           </div>
                           <div class="flex align-items-center" id="pagination">
                               <div class="pagination__item">
                                   <div class="current__pagination" >{{ currentPage }}</div>
                               </div>
                           </div>
                           <div class="pagination__item d-flex justify-content-center align-items-center" v-if="currentPage !==2">
                               <div class="pagination__dot"></div>
                           </div>
                           <div class="pagination__next__btn" @click="currentPage++" v-if="currentPage !== 2">
                               <img alt="next" :src="path + 'img/icons/chevron-left-icon.svg'">
                           </div>
                       </div>
                   </div>
               </div>`
})
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
                            <a @click="trigger('select', 'კომპიუტერული ტექნოლოგიები')" class="new_btn-start">კომპიუტერული ტექნოლოგიები</a>
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
            activeItem: 1,
            pagination: true,
            titlesPages: 1
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
                // თუ კლასი ტოლია 5 ან 6 და titlesPages არ უქდრის 1 მაშინ პირველი 12 სათაური დარენდერდეს
                if ((this.classID === 5 && this.titlesPages !== 1) || (this.classID === 6 && this.titlesPages !== 1)) {
                    return this.class['IT_' + this.classID].slice(0, 12);
                }
                // თუ კლასი ტოლია 5 ან 6 და titlesPages არ უქდრის 2 მაშინ პირველი 24 სათაური დარენდერდეს
                else if ((this.classID === 5 && this.titlesPages !== 2) || (this.classID === 6 && this.titlesPages !== 2)) {
                    return this.class['IT_' + this.classID].slice(12, 24);
                }
                // 5-6 კლასების გარდა დაბრუნდეს ჩვეულებრივად სრული სიგრძის მასივი
                else {
                    return this.class['IT_' + this.classID];
                }
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
        },
        // 1-12 გაკვეთილი <---> 12-24 გაკვეთილის და გადასაცვლელი ლურჯი ღილაკის გვერდის რენტერინგი
        switchPage() {
            if (this.pagination) {
                return this.titlesPages = 2;
            } else {
                return this.titlesPages = 1;
            }
        }
    },
    methods: {
        classChoose(val) {
            this.classID = val;
            this.activeItem = val - 1;
            // პირველი 12 სათაური კლასების შეცვლა თუ კლასი შეიცვალა
            this.titlesPages = 2;
            this.pagination = true
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
                    <div v-if="activeClass === 'კომპიუტერული ტექნოლოგიები'" class="col-12 mt-5">
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
                    <div class="col-12">
                        <transition  enter-active-class="animated fadeIn"
                                     leave-active-class="animated fadeOut"
                                     :duration="550"
                                     mode="out-in">
                            <div v-if="classID === 5 || classID === 6" class="class-pagination d-flex justify-content-center align-items-center">
                                <div v-if="!pagination" @click="pagination = !pagination" class="prev arrow-left-open"></div>
                                <div v-if="pagination" class="current">1</div>
                                <div @click="pagination = !pagination" class="dot"><p>{{ switchPage }}</p></div>
                                <div v-if="!pagination" class="current">2</div>
                                <div v-if="pagination" @click="pagination = !pagination" class="next arrow-right-open"></div>
                            </div>
                        </transition>
                    </div>
                </div>
                <div class="row app-select_artwork">
                    <div class="col-12">
                        <div v-if="activeClass !== 'კომპიუტერული ტექნოლოგიები'" class="app-select_artwork_image-box ml-auto">
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
            IT: 'New-header-vue/header-img/arts/IT-artwork.svg',
            art: 'New-header-vue/header-img/arts/art-artwork.svg',
            nature: 'New-header-vue/header-img/arts/nature-artwork.svg',
            music: 'New-header-vue/header-img/arts/music-artwork.svg'
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
        activeClass: '',
        isInfo: false
    },
    //trigger menu button & menu panels
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
            this.isInfo = false
        },
        info() {
            this.isInfo = !this.isInfo
            this.link = 'info'
            this.isActive = false
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
                dot.classActive = dot.name === this.link.toLowerCase();
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
            link: 'Art-Class/color_story/1.html'
        },
        {
            id: 2,
            name: 'მშვიდი და ბობოქარი',
            link: 'Art-Class/Calm_&_stormy/1.html'
        },
        {
            id: 3,
            name: 'ტყე',
            link: 'Art-Class/Forest/1.html'
        },
        {
            id: 4,
            name: 'ჯადოსნური ქვეყანა',
            link: 'Art-Class/Magic-world/1.html'
        },
        {
            id: 5,
            name: 'თავგადასავალი',
            link: 'Art-Class/Adventure/1.html'
        },
        {
            id: 6,
            name: 'პეიზაჟი',
            link: 'Art-Class/Landscape-6/1.html'
        },
        {
            id: 7,
            name: 'ქალაქი',
            link: 'Art-Class/City-07/1.html'
        },
        {
            id: 8,
            name: 'პლაკატი "გადავარჩინოთ ბუნება"',
            link: 'Art-Class/rescue_nature_08/1.html'
        },
        {
            id: 9,
            name: 'მე და ჩემი მეგობრები',
            link: 'Art-Class/friends_09/1.html'
        },
        {
            id: 10,
            name: 'ჩვეულებრივი და არაჩვეულებრივი ნივთები',
            link: 'Art-Class/items-10/1.html'
        },
        {
            id: 11,
            name: 'ყოველდღიური ამბები',
            link: 'Art-Class/daily-news-11/1.html'
        },
        {
            id: 12,
            name: 'ვირტუალური გამოფენა',
            link: 'Art-Class/VR_exhibition/1.html'
        }
    ],
    nature: [
        {
            id: 1,
            name: 'საშიში სათამაშოები',
            link: 'Nature-Class/dangerous-toys/1.html'
        },
        {
            id: 2,
            name: 'უხილავი ძალები',
            link: 'Nature-Class/invisible_forces/1.html'
        },
        {
            id: 3,
            name: 'რატომ იცვალა ტყემ ფერი?',
            link: 'Nature-Class/Forest-colors/1.html'
        },
        {
            id: 4,
            name: 'რატომ მოიწყინა ჩემმა ყვავილმა',
            link: 'Nature-Class/The-living-world-4/1.html'
        },
        {
            id: 5,
            name: 'სად დაიმალა მზე?',
            link: 'Nature-Class/Where-sun-goes/1.html'
        },
        {
            id: 6,
            name: 'შეიძლება ზაფხული ზამთარში იყოს?',
            link: 'Nature-Class/Summer-in-winter/1.html'
        },
        {
            id: 7,
            name: 'რატომ არის ბრუცა ბრმა?',
            link: 'Nature-Class/Bruca-07/1.html'
        },
        {
            id: 8,
            name: 'თეთრი - ვარდისფერი ფლამინგო',
            link: 'Nature-Class/flamingo-08/1.html'
        },
        {
            id: 9,
            name: 'დედამიწის გარშემო 80 დღეზე სწრაფად',
            link: 'Nature-Class/around-world-09/1.html'
        },
        {
            id: 10,
            name: 'რატომ არის ანას ქურთუკი ძალიან თბილი?',
            link: 'Nature-Class/coat-10/1.html'
        },
        {
            id: 11,
            name: 'როგორ ვაჯობოთ ბიჭებს „შერკინებაში?”',
            link: 'Nature-Class/sport/1.html'
        },
        {
            id: 12,
            name: 'გვინდა თოვლი დაბადების დღეზე!',
            link: 'Nature-Class/snow-12/1.html'
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
            name: 'პირობითი ნიშნები ჩვენ ირგვლივ',
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
            name: 'ციკლების შექმნა ',
            link: 'Computer-Science/Class-2/Creating-cycles-5/1.html'
        },
        {
            id: 6,
            name: 'მომხმარებლის გრაფიკული ინტერფეისი',
            link: 'Computer-Science/Class-2/user-interface-6/1.html'
        },
        {
            id: 7,
            name: 'კომპიუტერისა და პროგრამების მართვა',
            link: 'Computer-Science/Class-2/programs-management-7/1.html'
        },
        {
            id: 8,
            name: 'კომპიუტერული პროგრამებით დავალების შესრულება',
            link: 'Computer-Science/Class-2/programing-8/1.html'
        },
        {
            id: 9,
            name: 'კომპიუტერული ტექნოლოგიების გამოყენების იდენტიფიცირება',
            link: 'Computer-Science/Class-2/Identify-with-computer-9/1.html'
        },
        {
            id: 10,
            name: 'რა არის ქსელი და როგორ ვერთიანდებით ჩვენ მასში',
            link: 'Computer-Science/Class-2/network-10/1.html'
        },
        {
            id: 11,
            name: 'ინფორმაციის შენახვა ფიზიკურ გარემოში',
            link: 'Computer-Science/Class-2/Storing-information-11/1.html'
        },
        {
            id: 12,
            name: 'საკუთარ ანგარიშში მუშაობა',
            link: 'Computer-Science/Class-2/working-with-account-12/7.html'
        }
    ],
    IT_3: [
        {
            id: 1,
            name: 'კომპიუტერის შექმნისა და განვითარების მოკლე ისტორია',
            link: 'Computer-Science/Class-3/computer-development-1/1.html'
        },
        {
            id: 2,
            name: 'კომპიუტერის დამატებითი და ძირითადი მოწყობილობები',
            link: 'Computer-Science/Class-3/computer-equipment-2/1.html'
        },
        {
            id: 3,
            name: 'როგორ მუშაობს კომპიუტერი',
            link: 'Computer-Science/Class-3/How-computer-works-3/1.html'
        },
        {
            id: 4,
            name: 'ალგორითმი და ალგორითმის შემუშავება',
            link: 'Computer-Science/Class-3/algorithmes-4/1.html'
        },
        {
            id: 5,
            name: 'რა არის პროგრამული ენა',
            link: 'Computer-Science/Class-3/programming-language-5/1.html'
        },
        {
            id: 6,
            name: 'ვიზუალური კომუნიკაციის ენა',
            link: 'Computer-Science/Class-3/Visual-Communication-6/1.html'
        },
        {
            id: 7,
            name: 'გავეცნოთ ვიზუალურ პროგრამირებას',
            link: 'Computer-Science/Class-3/Visual-programing-7/1.html'
        },
        {
            id: 8,
            name: 'როგორ მუშაობს ინტერნეტი',
            link: 'Computer-Science/Class-3/internet-8/1.html'
        },
        {
            id: 9,
            name: 'რა არის საძიებო სისტემა და  როგორ გამოვიყენოთ იგი',
            link: 'Computer-Science/Class-3/search-engine-9/1.html'
        },
        {
            id: 10,
            name: 'ღრუბლოვანი სერვისები',
            link: 'Computer-Science/Class-3/Cloud-services-10/1.html'
        },
        {
            id: 11,
            name: 'პრეზენტაციის შექმნა (Ms PowerPoint)',
            link: 'Computer-Science/Class-3/Presentation-11/1.html'
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
            name: 'მარტივი ელოქტრონული მოწყობილობის გამართვა',
            link: 'Computer-Science/Class-4/Maintain-electronic-device-1/1.html'
        },
        {
            id: 2,
            name: 'შეცდომები პროგრამირებაში',
            link: 'Computer-Science/Class-4/programing-mistakes-2/1.html'
        },
        {
            id: 3,
            name: 'პროგრამის ქცევის პროგნოზირება',
            link: 'Computer-Science/Class-4/Predicting-behavior-3/1.html'
        },
        {
            id: 4,
            name: 'პროგრამის შექმნის პროცესის გააზრება',
            link: '#'
        },
        {
            id: 5,
            name: 'სათაური',
            link: '#'
        },
        {
            id: 6,
            name: 'ღრუბლოვანი სერვისების სათანადოდ გამოყენება',
            link: 'Computer-Science/Class-4/Cloud-services-6/1..html'
        },
        {
            id: 7,
            name: 'ტექსტური რედაქტორი და მისი ძირითადი ინსტრუმენტები',
            link: 'Computer-Science/Class-4/Text-editor-&-tools-7/1.html'
        },
        {
            id: 8,
            name: 'ტექსტის სწორება (Ms Word)',
            link: 'Computer-Science/Class-4/correcting-text-8/1.html'
        },
        {
            id: 9,
            name: 'შაბლონი და ცხრილი',
            link: 'Computer-Science/Class-4/template-and-table-9/1.html'
        },
        {
            id: 10,
            name: 'ტექსტური რედაქტორის გამოყენება ყოველდღიურ ცხოვრებაში',
            link: 'Computer-Science/Class-4/text-editor-10/1.html'
        },
        {
            id: 11,
            name: 'ელექტრონული ფოსტის გადაგზავნა, მიღება',
            link: 'Computer-Science/Class-4/Sending-email-11/1.html'
        },
        {
            id: 12,
            name: 'რა არის ინფორმაცია',
            link: 'Computer-Science/Class-4/What-is-information-12/1.html'
        }
    ],
    IT_5: [
        {
            id: 1,
            name: 'პირობითი ნიშნები კომპიუტერულ პროგრამებში',
            link: 'Computer-Science/Class-5/conditional-marks-1/1.html'
        },
        {
            id: 2,
            name: 'ჩემი პირველი რობოტი',
            link: 'Computer-Science/Class-5/My-first-robot-2/1.html'
        },
        {
            id: 3,
            name: 'რა არის კომპიუტერული პროგრამა',
            link: 'Computer-Science/Class-5/What-is-program-3/1.html'
        },
        {
            id: 4,
            name: 'ობიექტის გადაადგილება ვიზუალური კოდის საშუალებით',
            link: 'Computer-Science/Class-5/objects-moving-4/1.html'
        },
        {
            id: 5,
            name: 'ფუნქცია',
            link: 'Computer-Science/Class-5/function-5/1.html'
        },
        {
            id: 6,
            name: 'პარალელური პროგრამირება',
            link: 'Computer-Science/Class-5/parallel-programming-6/1.html'
        },
        {
            id: 7,
            name: 'უსასრულო ციკლები',
            link: 'Computer-Science/Class-5/Infinite-cycles-7/1.html'
        },
        {
            id: 8,
            name: 'სასრულო ციკლები',
            link: 'Computer-Science/Class-5/Cycles-8/1.html'
        },
        {
            id: 9,
            name: 'პირობითი ოპერატორები',
            link: 'Computer-Science/Class-5/conditional-operators-9/1.html'
        },
        {
            id: 10,
            name: 'ობიექტები',
            link: 'Computer-Science/Class-5/objects-10/1.html'
        },
        {
            id: 11,
            name: 'ინფორმაციის დამახსოვრება',
            link: 'Computer-Science/Class-5/Remember-information-11/1.html'
        },
        {
            id: 12,
            name: 'სხვადასხვა კომპიუტერული მოწყობილობის ინტერფეისი',
            link: 'Computer-Science/Class-5/interface-of-devices-12/1.html'
        },
        {
            id: 13,
            name: 'კონტენტი და მისი დახარისხების მეთოდები',
            link: 'Computer-Science/Class-5/Sorting-methods-13/1.html'
        },
        {
            id: 14,
            name: 'ინფორმაციის ცხრილში აღრიცხვა',
            link: 'Computer-Science/Class-5/Information-in-the-table-14/1.html'
        },
        {
            id: 15,
            name: 'ცხრილებთან მუშაობა',
            link: 'Computer-Science/Class-5/Working-with-tables-15/1.html'
        },
        {
            id: 16,
            name: 'ელექტრონულ ცხრილებში მონაცემების შეტანა',
            link: 'Computer-Science/Class-5/Enter-table-data-16/1.html'
        },
        {
            id: 17,
            name: 'მაგალითები და ფორმულები ელექტრონულ სივრცეში',
            link: 'Computer-Science/Class-5/Examples-and-formulas-17/1.html'
        },
        {
            id: 18,
            name: 'დიაგრამა ელოქტრონულ ცხრილში',
            link: 'Computer-Science/Class-5/diagram-in-electronic-table-18/1.html'
        },
        {
            id: 19,
            name: 'სათაური',
            link: '#'
        },
        {
            id: 20,
            name: 'სორტირება და ფილტრაცია ელექტრონულ ცხრილებში',
            link: 'Computer-Science/Class-5/sort-and-filter-20/1.html'
        },
        {
            id: 21,
            name: 'ხშირად გამოყენებული ფუნქციები MS Excel-ში',
            link: 'Computer-Science/Class-5/function-in-Exel-21/1.html'
        },
        {
            id: 22,
            name: '22',
            link: '#'
        },
        {
            id: 23,
            name: 'ინფორმაციულ რესურსებზე მუშაობა',
            link: 'Computer-Science/Class-5/Informational-resources-23/1.html'
        },
        {
            id: 24,
            name: 'საკუთარი მონაცემების დაცვა',
            link: 'Computer-Science/Class-5/Protect-your-data-24/1.html'
        }
    ],
    IT_6: [
        {
            id: 1,
            name: 'ვიწყებთ თამაშის კეთებას',
            link: 'Computer-Science/Class-6/create-game-1/1.html'
        },
        {
            id: 2,
            name: 'პირობითი ოპერატორები (ჩადგმული პირობითი ოპერატორები)',
            link: 'Computer-Science/Class-6/Conditional-operators-2/1.html'
        },
        {
            id: 3,
            name: 'ჩადგმული ციკლები',
            link: 'Computer-Science/Class-6/embedded-cycles-3/1.html'
        },
        {
            id: 4,
            name: 'სათაური',
            link: '#'
        },
        {
            id: 5,
            name: 'ოპერატორები',
            link: 'Computer-Science/Class-6/Operators-5/1.html'
        },
        {
            id: 6,
            name: 'არითმეტიკული ოპერატორები',
            link: 'Computer-Science/Class-6/Arithmetic-operators-6/13.html'
        },
        {
            id: 7,
            name: 'მოვლენები, მოვლენებზე რეაგირება',
            link: 'Computer-Science/Class-6/Responding-to-events-7/1.html'
        },
        {
            id: 8,
            name: 'ცვლადების გამოყენება ',
            link: 'Computer-Science/Class-6/Using-variables-8/1.html'
        },
        {
            id: 9,
            name: 'სია',
            link: 'Computer-Science/Class-6/List-9/1.html'
        },
        {
            id: 10,
            name: 'Android გრაფიკული ინტერფეისის გზამკვლევი',
            link: 'Computer-Science/Class-6/Android-graphics-interface-guide-10/1.html'
        },
        {
            id: 11,
            name: 'ios გრაფიკული ინტერფეისი',
            link: 'Computer-Science/Class-6/ios-graphical-interface-11/1.html'
        },
        {
            id: 12,
            name: 'Windows-ის გრაფიკული ინტერფეისი',
            link: 'Computer-Science/Class-6/Windows-UI-12/1.html'
        },
        {
            id: 13,
            name: 'შევქმნათ ჩვენი პრეზენტაცია',
            link: 'Computer-Science/Class-6/Create-our-presentation-13/1.html'
        },
        {
            id: 14,
            name: 'ფოტო რედაქტორი',
            link: 'Computer-Science/Class-6/Photo-editor-14/1.html'
        },
        {
            id: 15,
            name: 'ჩვენი პოდკასტი',
            link: 'Computer-Science/Class-6/Our-podcast-15/1.html'
        },
        {
            id: 16,
            name: 'ჩვენი ტკბილი მოგონებები',
            link: 'Computer-Science/Class-6/Our-sweet-memories-16/1.html'
        },
        {
            id: 17,
            name: 'უსაფრთხოება ციფრულ სამყაროში',
            link: 'Computer-Science/Class-6/Secure-digital-world-17/1.html'
        },
        {
            id: 18,
            name: 'მულტიმედია ფაილების შესაქმნელი ონლაინ პლატფორმები',
            link: 'Computer-Science/Class-6/Multimedia-online-platforms-18/1.html'
        },
        {
            id: 19,
            name: 'ჩემი პროექტის პრეზენტაცია',
            link: 'Computer-Science/Class-6/Presentation-of-my-project-19/1.html'
        },
        {
            id: 20,
            name: 'ინტერაქტიული კონტენტის შექმნა',
            link: 'Computer-Science/Class-6/Creating-interactive-content-20/1.html'
        },
        {
            id: 21,
            name: 'ინფორმაციული ეთიკის ნორმები',
            link: 'Computer-Science/Class-6/Information-ethics-norms-21/1.html'
        },
        {
            id: 22,
            name: 'სოციალური პასუხისმგებლობა, პირადი სივრცე',
            link: 'Computer-Science/Class-6/Social-responsibility-22/1.html'
        },
        {
            id: 23,
            name: 'საკუთარი და სხვისი უფლებები ციფრულ სამყაროში',
            link: 'Computer-Science/Class-6/rights-in-digital-world-23/1.html'
        },
        {
            id: 24,
            name: 'ბალანსი ვირტუალურსა და რეალურ ცხოვრებას შორის',
            link: 'Computer-Science/Class-6/Real-&-virtual-world-balance-24/1.html'
        }
    ]
}
