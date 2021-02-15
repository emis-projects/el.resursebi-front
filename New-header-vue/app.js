const index = document.getElementById("index");

//DARK_MODE მინიშნების მინიშნების გვერდებისთვის
var theme = localStorage.getItem("theme");
// ტექსტური ფაილისთვის
var newDesign_container_main_title = document.getElementsByClassName("newDesign_container_main_title");
var newDesignSubjectQuestionItemTitle = document.getElementsByClassName("newDesign_subject_question_item-title");
var pDarkMode = document.getElementsByClassName("pDarkMode");
//ფეიჯინგისთვის
var current__pagination = document.getElementsByClassName("current__pagination");
var pagination__prev__btn = document.getElementsByClassName("pagination__prev__btn");
var pagination__next__btn = document.getElementsByClassName("pagination__next__btn");
//სურათის ფერები რომლებიც შავზე არ ჩანს
var imgBackgroundWhite = document.getElementsByClassName("imgBackgroundWhite");
//გათიშვის ღილაკი x
var close = document.getElementsByClassName("close");

//დაწყება დასრულების ბუთონი
var reset__btn = document.getElementsByClassName("reset__btn");
var completed__btn = document.getElementsByClassName("completed__btn");
//ფოტოების გადიდების დროს უკანა ფონი
var fullScreen_modal_content = document.getElementsByClassName('fullScreen_modal-content');
var fullScreen_modal_title = document.getElementsByClassName('fullScreen_modal-title');

var changeImgDarkMode = document.getElementsByClassName('changeImgDarkMode');

if (theme == "darck") {
  var element = document.body;
  element.style.backgroundColor = "black";

  if (document.getElementById('C-4-13-16-1darkChange')) {
    document.getElementById('C-4-13-16-1darkChange').src = '../../../img/gakvetilebi/Computer-Science/Class-4/Books-and-brochures-13/C-4-13-16-1darkMode.svg';
  }
  if (document.getElementById('cs-6-4-101darkMode')) {
    document.getElementById('cs-6-4-101darkMode').src = '../../../img/gakvetilebi/Computer-Science/Class-6/Variables-4/cs-6-4-10.1darkMode.svg';
  }

  if (changeImgDarkMode) {
    for (let i = 0; i < changeImgDarkMode.length; i++) {
      changeImgDarkMode[i].src = changeImgDarkMode[i].src.replace(".svg", "darkMode.svg");
    }
  }

  if (reset__btn[0]) {
    reset__btn[0].classList.add("reset__btn_black");
  }
  if (completed__btn[0]) {
    completed__btn[0].classList.add("completed__btn_black");
  }
  // ah და ar nature_lessons-ის ბუთნები
  for (let i = 1; i < document.getElementsByClassName('ah').length; i++) {
    if (document.getElementsByClassName('ah')) {
      document.getElementsByClassName('ah')[i].style.fill = "#000000";
    }
  }
  for (let i = 0; i < document.getElementsByClassName('ar').length; i++) {
    if (document.getElementsByClassName('ar')) {
      document.getElementsByClassName('ar')[i].style.fill = "#ffffff";
    }
  }
  for (let i = 0; i < fullScreen_modal_content.length; i++) {
    if (fullScreen_modal_content[i]) {
      fullScreen_modal_content[i].classList.add("new_btn-start_black_btn");
    }
  }

  if (document.getElementById("Rectangle_1414-2")) {
    document.getElementById("Rectangle_1414-2").style.fill = "#000000";
  }
  if (document.getElementById("Path_12243-7")) {
    document.getElementById("Path_12243-7").style.fill = "#000000";
  }
  if (document.getElementById("Path_12243-8")) {
    document.getElementById("Path_12243-8").style.fill = "#000000";
  }
  if (document.getElementById("Path_12243-6")) {
    document.getElementById("Path_12243-6").style.fill = "#000000";
  }
  if (document.getElementById("Path_12243-10")) {
    document.getElementById("Path_12243-10").style.fill = "#000000";
  }
  if (document.getElementById("Path_12243-9")) {
    document.getElementById("Path_12243-9").style.fill = "#000000";
  }
  window.addEventListener("DOMContentLoaded", () => {
    $("#prime").css(
      "background-image",
      "url(../../Vue-chatBot/img/chat01.png)"
    );
  });
  if (newDesign_container_main_title[0]) {
    newDesign_container_main_title[0].classList.add("newDesign_subject_question_item-title_black_P");
  }
  for (let i = 0; i < newDesignSubjectQuestionItemTitle.length; i++) {
    if (newDesignSubjectQuestionItemTitle[i]) {
      newDesignSubjectQuestionItemTitle[i].classList.add("newDesign_subject_question_item-title_black_P");
    }
  }
  for (let i = 0; i < pDarkMode.length; i++) {
    if (pDarkMode[i]) {
      pDarkMode[i].classList.add("newDesign_subject_question_item-title_black_P");
    }
  }
  for (let i = 0; i < fullScreen_modal_title.length; i++) {
    if (fullScreen_modal_title[i]) {
      fullScreen_modal_title[i].classList.add("newDesign_subject_question_item-title_black_P");
    }
  }
  if (current__pagination[0]) {
    current__pagination[0].classList.add("pagination_black");
  }
  if (pagination__prev__btn[0]) {
    pagination__prev__btn[0].classList.add("pagination_black");
  }
  if (pagination__next__btn[0]) {
    pagination__next__btn[0].classList.add("pagination_black");
  }
  for (let i = 0; i < imgBackgroundWhite.length; i++) {
    if (imgBackgroundWhite[i]) {
      imgBackgroundWhite[i].classList.add("img_background_white");
    }
  }
  if (close[0]) {
    for(let i=0; i<close.length;i++){
      close[i].children[0].src = "../../img/icons/black_close.svg";
    }
  }
}

// directive გადაემა html კომპონენტში
Vue.directive("logo", {
  bind: function (el, binding, vnode) {
    const header = el.querySelector(".header-logo");
    const logo = el.querySelector(".logo");
    const sound = el.querySelectorAll(".sound img");
    // ბურგერის სვგ სურათების path
    sound.forEach((elm) => {
      if (elm.classList.contains("on")) {
        elm.src = binding.value + "New-header-vue/header-img/active.svg";
      } else {
        elm.src = binding.value + "New-header-vue/header-img/mute.png";
      }
    });
    // ლოგოს path მიბმა for deploy
    header.href = binding.value;
    logo.src = binding.value + "New-header-vue/header-img/Header-logo.svg";
  },
});

// directive გადაემა html კომპონენტში (ხელ, ბუნ, მუს, ქვედა მარჯვენა კუთხეში შესაბამისი სურათის src-ს path დაგენერირება)
Vue.directive("image", {
  bind(el, binding, vnode) {
    vnode.context.$data.path = binding.value;
    vnode.context.$data.images.IT =
      binding.value + "New-header-vue/header-img/arts/IT-artwork.svg";
    vnode.context.$data.images.art =
      binding.value + "New-header-vue/header-img/arts/art-artwork.svg";
    vnode.context.$data.images.nature =
      binding.value + "New-header-vue/header-img/arts/nature-artwork.svg";
    vnode.context.$data.images.music =
      binding.value + "New-header-vue/header-img/arts/music-artwork.svg";
  },
});

//menu component ნავბარის კომპონენტი (ენის, ხმის და ბურგერის ცვლილებები)
Vue.component("appMenu", {
  data() {
    return {
      show: true,
      isShow: true,
      menuHover: false,
      langHover: false,
      soundHover: false,
      isDark: false,
    };
  },
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
    toggle: {
      type: Function,
      required: true,
    },
    info: {
      type: Function,
      required: true,
    },
  },
  created() {
    var theme = localStorage.getItem("theme");
    var reset__btn = document.getElementsByClassName("reset__btn");
    var completed__btn = document.getElementsByClassName("completed__btn");
    var audioDownloadBbtnBlack = document.getElementsByClassName("audio-download__btn");
    var btnTextDark = document.getElementsByClassName("music-new-1-div-6-div-dot-text");
    var btnDarkMode = document.getElementsByClassName("btnDarkMode");
    sign_description_btn = document.getElementsByClassName("sign-description-btn");
    //btn index.html
    var new_btn_start = document.getElementsByClassName("new_btn-start");
    var newDesignSubjectQuestionItemTitle = document.getElementsByClassName("newDesign_subject_question_item-title");
    var pDarkMode = document.getElementsByClassName("pDarkMode");
    var algorithme_title_italic = document.getElementsByClassName("algorithme-title-italic");
    var newDesign_container_main_title = document.getElementsByClassName("newDesign_container_main_title");
    //index html დასაწყისი
    var bg_menu = document.getElementsByClassName("bg_menu");
    var app_start = document.getElementsByClassName("app-start");
    var app_sections = document.getElementsByClassName("app-sections");
    var app_select = document.getElementsByClassName("app-select");
    var circles_number_pink = document.getElementsByClassName("circles_number-pink");
    var top_bar = document.getElementsByClassName("top-bar");
    var img = $(".menu_box_passive").css("background-image");
    var nabiji = document.getElementsByClassName("newDesign_steps_item-img");
    //სურათის ფერები რომლებიც შავზე არ ჩანს
    var imgBackgroundWhite = document.getElementsByClassName("imgBackgroundWhite");

    //ფოტოების გადიდების დროს უკანა ფონი
    var fullScreen_modal_content = document.getElementsByClassName('fullScreen_modal-content');
    var backEndDark = document.getElementsByClassName('backEndDark');
    //chatbots.html
    var bot_header = document.getElementsByClassName('bot_header');

    if (theme == "darck") {
      //სურათის შეცვლა კონკრეტული გვერდებისთვის
      if (document.getElementById('cs-6-16-3DarkChange')) {
        document.getElementById('cs-6-16-3DarkChange').src = '../../../img/gakvetilebi/Computer-Science/Class-6/Our-sweet-memories-16/cs-6-16-3-darkMode.svg';
      }
      if (document.getElementById('cs-6-16-14-1DarkChange')) {
        document.getElementById('cs-6-16-14-1DarkChange').src = '../../../img/gakvetilebi/Computer-Science/Class-6/Our-sweet-memories-16/cs-6-16-14-1darkMode.svg';
      }
      if (document.getElementById('cs-6-16-15-1darkChange')) {
        document.getElementById('cs-6-16-15-1darkChange').src = '../../../img/gakvetilebi/Computer-Science/Class-6/Our-sweet-memories-16/cs-6-16-15-1darkMode.svg';
      }
      if (document.getElementById('cs-6-16-17-1darkChange')) {
        document.getElementById('cs-6-16-17-1darkChange').src = '../../../img/gakvetilebi/Computer-Science/Class-6/Our-sweet-memories-16/cs-6-16-17-1darkMode.svg';
      }
      if (document.getElementById('cs-6-16-18-1darkChange')) {
        document.getElementById('cs-6-16-18-1darkChange').src = '../../../img/gakvetilebi/Computer-Science/Class-6/Our-sweet-memories-16/cs-6-16-18-1darkMode.svg';
      }
      if (document.getElementById('cs-5-4-23darkChange')) {
        document.getElementById('cs-5-4-23darkChange').src = '../../../img/gakvetilebi/Computer-Science/Class-5/objects-moving-4/cs-5-4-23darkMode.svg';
      }

      //დაწყება დასსრულება
      if (reset__btn[0]) {
        reset__btn[0].classList.add("reset__btn_black");
      }
      if (completed__btn[0]) {
        completed__btn[0].classList.add("completed__btn_black");
      }
      if (audioDownloadBbtnBlack[0]) {
        audioDownloadBbtnBlack[0].classList.add("completed__btn_black");
      }
      for (let i = 0; i < btnTextDark.length; i++) {
        if (btnTextDark[i]) {
          btnTextDark[i].classList.add("completed__btn_black");
        }
      }
      for (let i = 0; i < btnDarkMode.length; i++) {
        if (btnDarkMode[i]) {
          btnDarkMode[i].classList.add("completed__btn_black");
        }
      }
      for (let i = 0; i < sign_description_btn.length; i++) {
        if (sign_description_btn[i]) {
          sign_description_btn[i].classList.add("completed__btn_black");
        }
      }
      for (let i = 0; i < imgBackgroundWhite.length; i++) {
        if (imgBackgroundWhite[i]) {
          imgBackgroundWhite[i].classList.add("img_background_white");
        }
      }
      //ფოტოების გადიდების დროს უკანა ფონი
      for (let i = 0; i < fullScreen_modal_content.length; i++) {
        if (fullScreen_modal_content[i]) {
          fullScreen_modal_content[i].classList.add("new_btn-start_black_btn");
        }
      }
      for (let i = 0; i < backEndDark.length; i++) {
        if (backEndDark[i]) {
          backEndDark[i].classList.add("new_btn-start_black_btn");
        }
      }
      
      //btn index.html
      for (let i = 0; i < 16; i++) {
        if (new_btn_start[i]) {
          new_btn_start[i].classList.add("new_btn-start_black_btn");
        }
      }
      //ფეიჯინგი
      var element = document.body;
      element.style.backgroundColor = "black";
      this.isDark = true;
      //ტეგები
      //P
      for (let i = 0; i < newDesignSubjectQuestionItemTitle.length; i++) {
        if (newDesignSubjectQuestionItemTitle[i]) {
          newDesignSubjectQuestionItemTitle[i].classList.add("newDesign_subject_question_item-title_black_P");
        }
      }
      for (let i = 0; i < pDarkMode.length; i++) {
        if (pDarkMode[i]) {
          pDarkMode[i].classList.add("newDesign_subject_question_item-title_black_P");
        }
      }
      //H
      if (algorithme_title_italic[0]) {
        algorithme_title_italic[0].classList.add("newDesign_subject_question_item-title_black_P");
      }
      if (newDesign_container_main_title[0]) {
        newDesign_container_main_title[0].classList.add("newDesign_subject_question_item-title_black_P");
      }

      //index.html დასაწყისი
      if (bg_menu[0]) {
        bg_menu[0].classList.add("new_btn-start_black_btn");
      }
      if (app_start[0]) {
        app_start[0].classList.add("new_btn-start_black_btn");
      }
      if (app_sections[0]) {
        app_sections[0].classList.add("new_btn-start_black_btn");
      }
      if (app_select[0]) {
        app_select[0].classList.add("new_btn-start_black_btn");
      }
      for (let i = 0; i < 8; i++) {
        if (circles_number_pink[i]) {
          circles_number_pink[i].classList.add("new_btn-start_black_btn");
        }
      }
      if (top_bar[0]) {
        top_bar[0].classList.add("new_btn-start_black_btn");
      }
      //bot_header chatbots.html
      for (let i = 0; i < bot_header.length; i++) {
        if (bot_header[i]) {
          bot_header[i].classList.add("new_btn-start_black_btn");
          bot_header[i].classList.add("bot_header_black");
        }
      }

      window.addEventListener("DOMContentLoaded", () => {
        $("#prime").css("background-image", "url(../../Vue-chatBot/img/chat01.png)");
        $(".lang-box_passive").css("background-image", "url(../../New-header-vue/header-img/eng01.png)");
        $(".menu_box_passive").css("background-image", "url(../../New-header-vue/header-img/menu01.png)");

        //ბოლო გვერდები
        $(".Class_2-Creating_cycles_19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/Creating-cycles-5/C-2-5-19darkMode.svg)");
        $(".Class_2-Creating_cycles_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/Creating-cycles-5/C-2-5-20darkMode.svg)");
        $(".Class_2-Creating_cycles_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/Creating-cycles-5/C-2-5-21darkMode.svg)");
        $(".Class_2-Creating_cycles_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/Creating-cycles-5/C-2-5-22darkMode.svg)");
        $(".background-c-02-01-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/conditional-signs-1/C-2-1-26darkMode.svg)");
        $(".background-c-02-01-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/conditional-signs-1/C-2-1-27darkMode.svg)");
        $(".background-c-02-01-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/conditional-signs-1/C-2-1-28darkMode.svg)");
        $(".background-c-02-01-29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/conditional-signs-1/C-2-1-29darkMode.svg)");
        $(".background-c-02-04-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/cycle-4/C-2-4-23darkMode.svg)");
        $(".background-c-02-04-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/cycle-4/C-2-4-24darkMode.svg)");
        $(".background-c-02-04-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/cycle-4/C-2-4-25darkMode.svg)");
        $(".background-c-02-04-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/cycle-4/C-2-4-26darkMode.svg)");
        $(".background_cs_2_9-bg_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/Identify-with-computer-9/cs-2-9-20-imgdarkMode.svg)");
        $(".background_cs_2_9-bg_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/Identify-with-computer-9/cs-2-9-21-imgdarkMode.svg)");
        $(".background_cs_2_9-bg_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/Identify-with-computer-9/cs-2-9-22-imgdarkMode.svg)");
        $(".background_cs_2_9-bg_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/Identify-with-computer-9/cs-2-9-23-imgdarkMode.svg)");
        $(".background-cs-2-2-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/marks-2/cs-2-2-23-bgdarkMode.svg)");
        $(".background-cs-2-2-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/marks-2/cs-2-2-24-bgdarkMode.svg)");
        $(".background-cs-2-2-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/marks-2/cs-2-2-25-bgdarkMode.svg)");
        $(".background-cs-2-2-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/marks-2/cs-2-2-26-bgdarkMode.svg)");
        $(".cs-network_bg-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/network-10/cs-2-10-21darkMode.svg)");
        $(".cs-network_bg-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/network-10/cs-2-10-22darkMode.svg)");
        $(".cs-network_bg-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/network-10/cs-2-10-23darkMode.svg)");
        $(".cs-network_bg-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/network-10/cs-2-10-24darkMode.svg)");
        $(".background-c-2-3-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/part&whole-3/C-2-3-25darkMode.svg)");
        $(".background-c-2-3-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/part&whole-3/C-2-3-26darkMode.svg)");
        $(".background-c-2-3-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/part&whole-3/C-2-3-27darkMode.svg)");
        $(".background-c-2-3-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/part&whole-3/C-2-3-28darkMode.svg)");
        $(".background-c-02-08-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/programing-8/C-2-8-19darkMode.svg)");
        $(".background-c-02-08-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/programing-8/C-2-8-20darkMode.svg)");
        $(".background-c-02-08-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/programing-8/C-2-8-21darkMode.svg)");
        $(".background-c-02-08-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/programing-8/C-2-8-22darkMode.svg)");
        $(".programs_image-box-16").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/programs-management-7/cs-2-7-16darkMode.svg)");
        $(".programs_image-box-17").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/programs-management-7/cs-2-7-17darkMode.svg)");
        $(".programs_image-box-18").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/programs-management-7/cs-2-7-18darkMode.svg)");
        $(".programs_image-box-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/programs-management-7/cs-2-7-19darkMode.svg)");
        $(".storing-page_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/Storing-information-11/cs-2-11-21darkMode.svg)");
        $(".storing-page_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/Storing-information-11/cs-2-11-23darkMode.svg)");
        $(".storing-page_24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/Storing-information-11/cs-2-11-24darkMode.svg)");
        $(".Class_2-user_interface_19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/user-interface-6/C-2-6-19darkMode.svg)");
        $(".Class_2-user_interface_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/user-interface-6/C-2-6-20darkMode.svg)");
        $(".Class_2-user_interface_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/user-interface-6/C-2-6-21darkMode.svg)");
        $(".Class_2-user_interface_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/user-interface-6/C-2-6-22darkMode.svg)");
        $(".Class_2-user_interface_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/user-interface-6/C-2-6-23darkMode.svg)");
        $(".working-with-account_19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/working-with-account-12/cs-2-12-19darkMode.svg)");
        $(".working-with-account_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/working-with-account-12/cs-2-12-20darkMode.svg)");
        $(".working-with-account_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/working-with-account-12/cs-2-12-22darkMode.svg)");
        $(".background-c-02-29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/algorithmes-02/C-2-29darkMode.svg)");
        $(".background-c-02-30").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/algorithmes-02/C-2-30darkMode.svg)");
        $(".background-c-02-31").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/algorithmes-02/C-2-31darkMode.svg)");
        $(".background-c-02-32").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/algorithmes-02/C-2-32darkMode.svg)");
        $(".background-cs-3-10-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Cloud-services-10/cs-3-10-23darkMode.svg)");
        $(".background-cs-3-10-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Cloud-services-10/cs-3-10-24darkMode.svg)");
        $(".background-cs-3-10-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Cloud-services-10/cs-3-10-25darkMode.svg)");
        $(".background-cs-3-10-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Cloud-services-10/cs-3-10-26darkMode.svg)");
        $(".background-c-03-01-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/computer-development-1/C-3-1-24darkMode.svg)");
        $(".background-c-03-01-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/computer-development-1/C-3-1-25darkMode.svg)");
        $(".background-c-03-01-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/computer-development-1/C-3-1-26darkMode.svg)");
        $(".background-c-03-01-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/computer-development-1/C-3-1-27darkMode.svg)");
        $(".background-cs-3-2-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/computer-equipment-2/cs-3-2-19darkMode.svg)");
        $(".background-cs-3-2-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/computer-equipment-2/cs-3-2-20darkMode.svg)");
        $(".background-cs-3-2-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/computer-equipment-2/cs-3-2-21darkMode.svg)");
        $(".background-cs-3-2-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/computer-equipment-2/cs-3-2-22darkMode.svg)");
        $(".background-cs-3-13-img-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Do-you-have-robot-13/cs-3-13-20darkMode.svg)");
        $(".background-cs-3-13-img-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Do-you-have-robot-13/cs-3-13-22darkMode.svg)");
        $(".background-cs-3-13-img-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Do-you-have-robot-13/cs-3-13-23darkMode.svg)");
        $(".background-cs-3-15-32").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/First-heroes-15/cs-3-15-32darkMode.svg)");
        $(".background-cs-3-15-33").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/First-heroes-15/cs-3-15-33darkMode.svg)");
        $(".background-cs-3-15-34").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/First-heroes-15/cs-3-15-34darkMode.svg)");
        $(".background-cs-3-15-35").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/First-heroes-15/cs-3-15-35darkMode.svg)");
        $(".background-cs-3-3-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/How-computer-works-3/cs-3-3-23darkMode.svg)");
        $(".background-cs-3-3-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/How-computer-works-3/cs-3-3-24darkMode.svg)");
        $(".background-cs-3-3-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/How-computer-works-3/cs-3-3-25darkMode.svg)");
        $(".background-cs-3-16-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/How-my-robot-acts-16/cs-3-16-24darkMode.svg)");
        $(".background-cs-3-16-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/How-my-robot-acts-16/cs-3-16-25darkMode.svg)");
        $(".background-cs-3-16-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/How-my-robot-acts-16/cs-3-16-26darkMode.svg)");
        $(".background-cs-3-16-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/How-my-robot-acts-16/cs-3-16-27darkMode.svg)");
        $(".background-cs-3-8-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/internet-8/cs-2-3-8-20darkMode.svg)");
        $(".background-cs-3-8-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/internet-8/cs-2-3-8-21darkMode.svg)");
        $(".background-cs-3-8-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/internet-8/cs-2-3-8-22darkMode.svg)");
        $(".background-cs-3-8-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/internet-8/cs-2-3-8-23darkMode.svg)");
        $(".class_3_12-bg_19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/managing-office365-12/C-3-12-19darkMode.svg)");
        //არ შვება
        $(".class_3_12-bg_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/managing-office365-12/C-3-12-20darkMode.svg)");
        $(".class_3_12-bg_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/managing-office365-12/C-3-12-21darkMode.svg)");
        $(".class_3_12-bg_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/managing-office365-12/C-3-12-22darkMode.svg)");
        //
        $(".background-cs-3-14-img-18").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Mystery-of-binary-bracelet-14/cs-3-14-18darkMode.svg)");
        $(".background-cs-3-14-img-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Mystery-of-binary-bracelet-14/cs-3-14-19darkMode.svg)");
        $(".background-cs-3-14-img-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Mystery-of-binary-bracelet-14/cs-3-14-20darkMode.svg)");
        $(".background-cs-3-14-img-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Mystery-of-binary-bracelet-14/cs-3-14-21darkMode.svg)");
        $(".background-c-05-29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/programming-language-5/C-5-5-29darkMode.svg)");
        $(".background-c-05-30").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/programming-language-5/C-5-5-30darkMode.svg)");
        $(".background-c-05-31").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/programming-language-5/C-5-5-31darkMode.svg)");
        $(".background-c-05-32").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/programming-language-5/C-5-5-32darkMode.svg)");
        $(".background-cs-3-9-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/search-engine-9/cs-3-9-21-bgdarkMode.svg)");
        $(".background-cs-3-9-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/search-engine-9/cs-3-9-22-bgdarkMode.svg)");
        $(".visual_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Visual-Communication-6/C-3-6-23darkMode.svg)");
        $(".visual_24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Visual-Communication-6/C-3-6-24darkMode.svg)");
        $(".visual_25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Visual-Communication-6/C-3-6-25darkMode.svg)");
        $(".visual_26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Visual-Communication-6/C-3-6-26darkMode.svg)");
        $(".background-cs-3-7-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Visual-programing-7/cs-3-7-19darkMode.svg)");
        $(".background-cs-3-7-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Visual-programing-7/cs-3-7-20darkMode.svg)");
        $(".background-cs-3-7-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Visual-programing-7/cs-3-7-21darkMode.svg)");
        $(".background-cs-3-7-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Visual-programing-7/cs-3-7-22darkMode.svg)");
        $(".background-cs-4-13-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Books-and-brochures-13/cs-4-13-26darkMode.svg)");
        $(".background-cs-4-13-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Books-and-brochures-13/cs-4-13-27darkMode.svg)");
        $(".background-cs-4-13-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Books-and-brochures-13/cs-4-13-28darkMode.svg)");
        $(".background-cs-4-13-29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Books-and-brochures-13/cs-4-13-29darkMode.svg)");
        $(".background-cs-4-6-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Cloud-services-6/cs-4-6-27-imgdarkMode.svg)");
        $(".background-cs-4-6-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Cloud-services-6/cs-4-6-28-imgdarkMode.svg)");
        $(".background-cs-4-6-29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Cloud-services-6/cs-4-6-29-imgdarkMode.svg)");
        $(".background-cs-4-6-30").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Cloud-services-6/cs-4-6-30-imgdarkMode.svg)");
        $(".background-cs-4-8-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/correcting-text-8/cs-4-8-24-imgdarkMode.svg)");
        $(".background-cs-4-8-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/correcting-text-8/cs-4-8-25-imgdarkMode.svg)");
        $(".background-cs-4-8-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/correcting-text-8/cs-4-8-26-imgdarkMode.svg)");
        $(".background-cs-4-16-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/How-to-form-text-16/cs-4-16-26darkMode.svg)");
        $(".background-cs-4-16-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/How-to-form-text-16/cs-4-16-27darkMode.svg)");
        $(".background-cs-4-16-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/How-to-form-text-16/cs-4-16-28darkMode.svg)");
        $(".background-cs-4-16-29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/How-to-form-text-16/cs-4-16-29darkMode.svg)");
        $(".background-cs-4-3-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Predicting-behavior-3/cs-4-3-19-imgdarkMode.svg)");
        $(".background-cs-4-3-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Predicting-behavior-3/cs-4-3-20-imgdarkMode.svg)");
        $(".background-cs-4-3-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Predicting-behavior-3/cs-4-3-21-imgdarkMode.svg)");
        $(".background-cs-4-3-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Predicting-behavior-3/cs-4-3-22-imgdarkMode.svg)");
        $(".Class_4-C_4_2_28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/C-4-2-28darkMode.svg)");
        $(".Class_4-C_4_2_30").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/C-4-2-30darkMode.svg)");
        $(".Class_4-C_4_2_31").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/C-4-2-31darkMode.svg)");
        $(".background-cs-4-11-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Sending-email-11/cs-4-11-22-imgdarkMode.svg)");
        $(".background-cs-4-11-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Sending-email-11/cs-4-11-23-imgdarkMode.svg)");
        $(".background-cs-4-11-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Sending-email-11/cs-4-11-24-imgdarkMode.svg)");
        $(".background-cs-4-11-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Sending-email-11/cs-4-11-25-imgdarkMode.svg)");
        $(".Class_4_9-img_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/template-and-table-9/C-4-9-21darkMode.svg)");
        $(".Class_4_9-img_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/template-and-table-9/C-4-9-22darkMode.svg)");
        $(".Class_4_9-img_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/template-and-table-9/C-4-9-23darkMode.svg)");
        $(".Class_4_9-img_24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/template-and-table-9/C-4-9-24darkMode.svg)");
        $(".background-cs-4-7-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Text-editor-&-tools-7/cs-4-7-23-imgdarkMode.svg)");
        $(".background-cs-4-7-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Text-editor-&-tools-7/cs-4-7-24-imgdarkMode.svg)");
        $(".background-cs-4-7-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Text-editor-&-tools-7/cs-4-7-25-imgdarkMode.svg)");
        $(".background-cs-4-7-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Text-editor-&-tools-7/cs-4-7-26-imgdarkMode.svg)");
        $(".background-cs-4-10-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/text-editor-10/cs-4-10-22-imgdarkMode.svg)");
        $(".background-cs-4-10-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/text-editor-10/cs-4-10-24-imgdarkMode.svg)");
        $(".background-cs-4-10-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/text-editor-10/cs-4-10-25-imgdarkMode.svg)");
        $(".background-cs-4-5-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/UI-5/cs-4-5-23darkMode.svg)");
        $(".class_4_15-bg_19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Walking-in-internet-15/C-4-15-19darkMode.svg)");
        $(".class_4_15-bg_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Walking-in-internet-15/C-4-15-20darkMode.svg)");
        $(".class_4_15-bg_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Walking-in-internet-15/C-4-15-22darkMode.svg)");
        $(".background-cs-4-12-18").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/What-is-information-12/cs-4-12-18darkMode.svg)");
        $(".background-cs-4-12-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/What-is-information-12/cs-4-12-19darkMode.svg)");
        $(".background-cs-4-12-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/What-is-information-12/cs-4-12-20darkMode.svg)");
        $(".background-cs-4-12-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/What-is-information-12/cs-4-12-21darkMode.svg)");
        $(".class_5_26-bg_19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Computer-technologies-in-our-life-26/C-5-26-19darkMode.svg)");
        $(".class_5_26-bg_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Computer-technologies-in-our-life-26/C-5-26-20darkMode.svg)");
        $(".class_5_26-bg_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Computer-technologies-in-our-life-26/C-5-26-21darkMode.svg)");
        $(".class_5_26-bg_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Computer-technologies-in-our-life-26/C-5-26-22darkMode.svg)");
        $(".class_5_1-bg_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/conditional-marks-1/c-5-1-21darkMode.svg)");
        $(".class_5_1-bg_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/conditional-marks-1/c-5-1-23darkMode.svg)");
        $(".class_5_1-bg_24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/conditional-marks-1/c-5-1-24darkMode.svg)");
        $(".background-cs-5-9-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/conditional-operators-9/cs-5-9-19-imgdarkMode.svg)");
        $(".background-cs-5-9-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/conditional-operators-9/cs-5-9-20-imgdarkMode.svg)");
        $(".background-cs-5-9-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/conditional-operators-9/cs-5-9-21-imgdarkMode.svg)");
        $(".background-cs-5-9-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/conditional-operators-9/cs-5-9-22-imgdarkMode.svg)");
        $(".Class_5_8-image_18").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Cycles-8/C-5-8-18darkMode.svg)");
        $(".Class_5_8-image_19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Cycles-8/cs-5-8-19darkMode.svg)");
        $(".Class_5_8-image_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Cycles-8/cs-5-8-20darkMode.svg)");
        $(".Class_5_8-image_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Cycles-8/cs-5-8-21darkMode.svg)");
        $(".background-cs-5-27-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Decorate-electronic-table-27/cs-5-27-26darkMode.svg)");
        $(".background-cs-5-27-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Decorate-electronic-table-27/cs-5-27-27darkMode.svg)");
        $(".background-cs-5-27-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Decorate-electronic-table-27/cs-5-27-28darkMode.svg)");
        $(".background-cs-5-27-29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Decorate-electronic-table-27/cs-5-27-29darkMode.svg)");
        $(".background-cs-5-25-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/develop-informational-society-25/cs-5-25-20darkMode.svg)");
        $(".background-cs-5-25-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/develop-informational-society-25/cs-5-25-22darkMode.svg)");
        $(".background-cs-5-25-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/develop-informational-society-25/cs-5-25-23darkMode.svg)");
        $(".background-cs-5-18-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/diagram-in-electronic-table-18/cs-5-18-26-imgdarkMode.svg)");
        $(".background-cs-5-18-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/diagram-in-electronic-table-18/cs-5-18-27-imgdarkMode.svg)");
        $(".background-cs-5-18-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/diagram-in-electronic-table-18/cs-5-18-28-imgdarkMode.svg)");
        $(".background-cs-5-18-29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/diagram-in-electronic-table-18/cs-5-18-29-imgdarkMode.svg)");
        $(".background-cs-5-16-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Enter-table-data-16/cs-5-16-25-imgdarkMode.svg)");
        $(".background-cs-5-16-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Enter-table-data-16/cs-5-16-26-imgdarkMode.svg)");
        $(".background-cs-5-16-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Enter-table-data-16/cs-5-16-27-imgdarkMode.svg)");
        $(".background-cs-5-16-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Enter-table-data-16/cs-5-16-28-imgdarkMode.svg)");
        $(".background-cs-5-17-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Examples-and-formulas-17/cs-5-17-25darkMode.svg)");
        $(".background-cs-5-17-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Examples-and-formulas-17/cs-5-17-26darkMode.svg)");
        $(".background-cs-5-17-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Examples-and-formulas-17/cs-5-17-27darkMode.svg)");
        $(".background-cs-5-17-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Examples-and-formulas-17/cs-5-17-28darkMode.svg)");
        $(".background-cs-5-5-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/function-5/cs-5-5-20darkMode.svg)");
        $(".background-cs-5-5-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/function-5/cs-5-5-21darkMode.svg)");
        $(".background-cs-5-5-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/function-5/cs-5-5-22darkMode.svg)");
        $(".background-cs-5-5-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/function-5/cs-5-5-23darkMode.svg)");
        $(".background-cs-5-21-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/function-in-Exel-21/cs-5-21-20-imgdarkMode.svg)");
        $(".background-cs-5-21-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/function-in-Exel-21/cs-5-21-21-imgdarkMode.svg)");
        $(".background-cs-5-21-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/function-in-Exel-21/cs-5-21-22-imgdarkMode.svg)");
        $(".background-cs-5-21-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/function-in-Exel-21/cs-5-21-23-imgdarkMode.svg)");
        $(".background-cs-5-7-17").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Infinite-cycles-7/cs-5-7-17-imgdarkMode.svg)");
        $(".background-cs-5-7-18").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Infinite-cycles-7/cs-5-7-18-imgdarkMode.svg)");
        $(".background-cs-5-7-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Infinite-cycles-7/cs-5-7-19-imgdarkMode.svg)");
        $(".background-cs-5-7-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Infinite-cycles-7/cs-5-7-20-imgdarkMode.svg)");
        $(".background-cs-5-14-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Information-in-the-table-14/cs-5-14-25darkMode.svg)");
        $(".background-cs-5-14-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Information-in-the-table-14/cs-5-14-26darkMode.svg)");
        $(".background-cs-5-14-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Information-in-the-table-14/cs-5-14-28darkMode.svg)");
        $(".background-cs-5-23-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Informational-resources-23/cs-5-23-19darkMode.svg)");
        $(".background-cs-5-23-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Informational-resources-23/cs-5-23-20darkMode.svg)");
        $(".background-cs-5-23-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Informational-resources-23/cs-5-23-21darkMode.svg)");
        $(".background-cs-5-23-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Informational-resources-23/cs-5-23-22darkMode.svg)");
        $(".class_5_12-bg_25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/interface-of-devices-12/C-5-12-25darkMode.svg)");
        $(".class_5_12-bg_26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/interface-of-devices-12/C-5-12-26darkMode.svg)");
        $(".class_5_12-bg_27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/interface-of-devices-12/C-5-12-27darkMode.svg)");
        $(".class_5_12-bg_28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/interface-of-devices-12/C-5-12-28darkMode.svg)");
        $(".robot-page_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/My-first-robot-2/C-5-2-21darkMode.svg)");
        $(".robot-page_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/My-first-robot-2/C-5-2-23darkMode.svg)");
        $(".robot-page_24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/My-first-robot-2/C-5-2-24darkMode.svg)");
        $(".objects_box-image-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/objects-1/cs-5-1-19darkMode.svg)");
        $(".objects_box-image-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/objects-1/cs-5-1-20darkMode.svg)");
        $(".objects_box-image-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/objects-1/cs-5-1-21darkMode.svg)");
        $(".objects_box-image-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/objects-1/cs-5-1-22darkMode.svg)");
        $(".background-cs-5-4-32").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/objects-moving-4/cs-5-4-32darkMode.svg)");
        $(".background-cs-5-4-33").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/objects-moving-4/cs-5-4-33darkMode.svg)");
        $(".background-cs-5-4-34").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/objects-moving-4/cs-5-4-34darkMode.svg)");
        $(".background-cs-5-4-35").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/objects-moving-4/cs-5-4-35darkMode.svg)");
        $(".background-c-05-06-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/parallel-programming-6/C-5-6-21darkMode.svg)");
        $(".background-c-05-06-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/parallel-programming-6/C-5-6-22darkMode.svg)");
        $(".background-c-05-06-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/parallel-programming-6/C-5-6-23darkMode.svg)");
        $(".background-c-05-06-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/parallel-programming-6/C-5-6-24darkMode.svg)");
        $(".privacy_page-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Privacy-in-email-22/cs-5-22-20darkMode.svg)");
        $(".privacy_page-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Privacy-in-email-22/cs-5-22-21darkMode.svg)");
        $(".privacy_page-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Privacy-in-email-22/cs-5-22-22darkMode.svg)");
        $(".protect-data_23-background").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Protect-your-data-24/cs-5-24-23darkMode.svg)");
        $(".class_5_24-bg_24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Protect-your-data-24/C-5-24-24darkMode.svg)");
        $(".class_5_24-bg_25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Protect-your-data-24/C-5-24-25darkMode.svg)");
        $(".class_5_24-bg_26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Protect-your-data-24/C-5-24-26darkMode.svg)");
        $(".background-cs-5-11-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Remembering-information-11/cs-5-11-22darkMode.svg)");
        $(".background-cs-5-11-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Remembering-information-11/cs-5-11-23darkMode.svg)");
        $(".background-cs-5-11-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Remembering-information-11/cs-5-11-24darkMode.svg)");
        $(".background-cs-5-11-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Remembering-information-11/cs-5-11-25darkMode.svg)");
        $(".background-cs-5-20-30").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/sort-and-filter-20/cs-5-20-30-imgdarkMode.svg)");
        $(".background-cs-5-20-31").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/sort-and-filter-20/cs-5-20-31-imgdarkMode.svg)");
        $(".background-cs-5-20-32").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/sort-and-filter-20/cs-5-20-32-imgdarkMode.svg)");
        $(".background-cs-5-20-33").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/sort-and-filter-20/cs-5-20-33-imgdarkMode.svg)");
        $(".background-cs-5-13-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Sorting-methods-13/cs-5-13-26darkMode.svg)");
        $(".background-cs-5-13-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Sorting-methods-13/cs-5-13-27darkMode.svg)");
        $(".background-cs-5-13-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Sorting-methods-13/cs-5-13-28darkMode.svg)");
        $(".background-cs-5-13-29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Sorting-methods-13/cs-5-13-29darkMode.svg)");
        $(".diagram-box_page-18").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Using-diagrams-19/cs-5-19-18darkMode.svg)");
        $(".diagram-box_page-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Using-diagrams-19/cs-5-19-19darkMode.svg)");
        $(".diagram-box_page-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Using-diagrams-19/cs-5-19-20darkMode.svg)");
        $(".diagram-box_page-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Using-diagrams-19/cs-5-19-21darkMode.svg)");
        $(".background-cs-5-3-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/What-is-program-3/cs-5-3-21-imgdarkMode.svg)");
        $(".background-cs-5-3-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/What-is-program-3/cs-5-3-22-imgdarkMode.svg)");
        $(".background-cs-5-3-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/What-is-program-3/cs-5-3-23-imgdarkMode.svg)");
        $(".background-cs-5-3-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/What-is-program-3/cs-5-3-24-imgdarkMode.svg)");
        $(".class_5_28-bg_24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/working-with-excel-file-28/C-5-28-24darkMode.svg)");
        $(".class_5_28-bg_25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/working-with-excel-file-28/C-5-28-25darkMode.svg)");
        $(".class_5_28-bg_26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/working-with-excel-file-28/C-5-28-26darkMode.svg)");
        $(".class_5_28-bg_27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/working-with-excel-file-28/C-5-28-27darkMode.svg)");
        $(".class_5_15-bg_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Working-with-tables-15/C-5-15-22darkMode.svg)");
        $(".class_5_15-bg_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Working-with-tables-15/C-5-15-23darkMode.svg)");
        $(".class_5_15-bg_24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Working-with-tables-15/C-5-15-24darkMode.svg)");
        $(".class_5_15-bg_25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Working-with-tables-15/C-5-15-25darkMode.svg)");
        $(".background-cs-6-10-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Android-graphics-interface-guide-10/cs-6-10-24darkMode.svg)");
        $(".background-cs-6-10-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Android-graphics-interface-guide-10/cs-6-10-25darkMode.svg)");
        $(".background-cs-6-10-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Android-graphics-interface-guide-10/cs-6-10-26darkMode.svg)");
        $(".background-cs-6-10-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Android-graphics-interface-guide-10/cs-6-10-27darkMode.svg)");
        $(".background-cs-6-6-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Arithmetic-operators-6/cs-6-6-21darkMode.svg)");
        $(".background-cs-6-6-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Arithmetic-operators-6/cs-6-6-22darkMode.svg)");
        $(".background-cs-6-6-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Arithmetic-operators-6/cs-6-6-23darkMode.svg)");
        $(".background-cs-6-6-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Arithmetic-operators-6/cs-6-6-24darkMode.svg)");
        $(".class_6_2-bg_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Conditional-operators-2/C-6-2-22darkMode.svg)");
        $(".class_6_2-bg_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Conditional-operators-2/C-6-2-23darkMode.svg)");
        $(".class_6_2-bg_24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Conditional-operators-2/C-6-2-24darkMode.svg)");
        $(".conditional-operators_25-background").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Conditional-operators-2/cs-6-2-25.svg)");
        $(".background-cs-6-1-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/create-game-1/cs-6-1-20-imgdarkMode.svg)");
        $(".background-cs-6-1-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/create-game-1/cs-6-1-21-imgdarkMode.svg)");
        $(".background-cs-6-1-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/create-game-1/cs-6-1-22-imgdarkMode.svg)");
        $(".background-cs-6-1-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/create-game-1/cs-6-1-23-imgdarkMode.svg)");
        $(".background-cs-6-13-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Create-our-presentation-13/cs-6-13-26darkMode.svg)");
        $(".background-cs-6-13-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Create-our-presentation-13/cs-6-13-27darkMode.svg)");
        $(".background-cs-6-13-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Create-our-presentation-13/cs-6-13-28darkMode.svg)");
        $(".background-cs-6-26-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-game-in-scratch-26/cs-6-26-20darkMode.svg)");
        $(".background-cs-6-26-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-game-in-scratch-26/cs-6-26-21darkMode.svg)");
        $(".background-cs-6-26-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-game-in-scratch-26/cs-6-26-22darkMode.svg)");
        $(".background-cs-6-26-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-game-in-scratch-26/cs-6-26-23darkMode.svg)");
        $(".class_6_28-bg_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-game-in-scratch-28/C-6-28-21darkMode.svg)");
        $(".class_6_28-bg_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-game-in-scratch-28/C-6-28-22darkMode.svg)");
        $(".class_6_28-bg_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-game-in-scratch-28/C-6-28-23darkMode.svg)");
        $(".background-cs-6-25-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-games-with-objects-25/cs-6-25-19darkMode.svg)");
        $(".background-cs-6-25-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-games-with-objects-25/cs-6-25-20darkMode.svg)");
        $(".background-cs-6-25-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-games-with-objects-25/cs-6-25-21darkMode.svg)");
        $(".background-cs-6-25-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-games-with-objects-25/cs-6-25-22darkMode.svg)");
        $(".class_6_20-bg_18").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-interactive-content-20/C-6-20-18darkMode.svg)");
        $(".class_6_20-bg_19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-interactive-content-20/C-6-20-19darkMode.svg)");
        $(".class_6_20-bg_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-interactive-content-20/C-6-20-20darkMode.svg)");
        $(".class_6_20-bg_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-interactive-content-20/C-6-20-21darkMode.svg)");
        $(".class_6_27-bg_18").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-two-tours-game-27/C-6-27-18darkMode.svg)");
        $(".class_6_27-bg_19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-two-tours-game-27/C-6-27-19darkMode.svg)");
        $(".class_6_27-bg_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-two-tours-game-27/C-6-27-20darkMode.svg)");
        $(".class_6_27-bg_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-two-tours-game-27/C-6-27-21darkMode.svg)");
        $(".background-cs-6-3_24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/embedded-cycles-3/cs-6-3-24darkMode.svg)");
        $(".background-cs-6-3_25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/embedded-cycles-3/cs-6-3-25darkMode.svg)");
        $(".background-cs-6-3_26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/embedded-cycles-3/cs-6-3-26darkMode.svg)");
        $(".background-cs-6-3_27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/embedded-cycles-3/cs-6-3-27darkMode.svg)");
        $(".background-cs-6-21-18").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Information-ethics-norms-21/cs-6-21-18darkMode.svg)");
        $(".background-cs-6-21-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Information-ethics-norms-21/cs-6-21-19darkMode.svg)");
        $(".background-cs-6-21-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Information-ethics-norms-21/cs-6-21-20darkMode.svg)");
        $(".background-cs-6-21-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Information-ethics-norms-21/cs-6-21-21darkMode.svg)");
        $(".background-cs-6-9-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/List-9/cs-6-9-21-imgdarkMode.svg)");
        $(".background-cs-6-9-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/List-9/cs-6-9-22-imgdarkMode.svg)");
        $(".background-cs-6-9-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/List-9/cs-6-9-23-imgdarkMode.svg)");
        $(".background-cs-6-9-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/List-9/cs-6-9-24-imgdarkMode.svg)");
        $(".background-cs-6-18-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Multimedia-online-platforms-18/cs-6-18-23darkMode.svg)");
        $(".background-cs-6-18-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Multimedia-online-platforms-18/cs-6-18-24darkMode.svg)");
        $(".background-cs-6-18-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Multimedia-online-platforms-18/cs-6-18-25darkMode.svg)");
        $(".background-cs-6-18-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Multimedia-online-platforms-18/cs-6-18-26darkMode.svg)");
        $(".background-cs-6-5-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Operators-5/cs-6-5-25darkMode.svg)");
        $(".background-cs-6-5-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Operators-5/cs-6-5-26darkMode.svg)");
        $(".background-cs-6-5-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Operators-5/cs-6-5-27darkMode.svg)");
        $(".background-cs-6-5-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Operators-5/cs-6-5-28darkMode.svg)");
        $(".background-cs-6-15-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Our-podcast-15/cs-6-15-26darkMode.svg)");
        $(".background-cs-6-15-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Our-podcast-15/cs-6-15-27darkMode.svg)");
        $(".background-cs-6-15-29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Our-podcast-15/cs-6-15-29darkMode.svg)");
        $(".class_6_16-bg_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Our-sweet-memories-16/C-6-16-23darkMode.svg)");
        $(".class_6_16-bg_24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Our-sweet-memories-16/C-6-16-24darkMode.svg)");
        $(".class_6_16-bg_25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Our-sweet-memories-16/C-6-16-25darkMode.svg)");
        $(".class_6_16-bg_26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Our-sweet-memories-16/C-6-16-26darkMode.svg)");
        $(".class_6_14-bg_29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Photo-editor-14/C-6-14-29darkMode.svg)");
        $(".class_6_14-bg_30").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Photo-editor-14/C-6-14-30darkMode.svg)");
        $(".background-cs-6-19-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Presentation-of-my-project-19/cs-6-19-28darkMode.svg)");
        $(".background-cs-6-19-29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Presentation-of-my-project-19/cs-6-19-29darkMode.svg)");
        $(".background-cs-6-19-30").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Presentation-of-my-project-19/cs-6-19-30darkMode.svg)");
        $(".background-cs-6-19-31").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Presentation-of-my-project-19/cs-6-19-31darkMode.svg)");
        $(".background-cs-6-24-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Real-&-virtual-world-balance-24/cs-6-24-23-imgdarkMode.svg)");
        $(".background-cs-6-24-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Real-&-virtual-world-balance-24/cs-6-24-24-imgdarkMode.svg)");
        $(".background-cs-6-24-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Real-&-virtual-world-balance-24/cs-6-24-25-imgdarkMode.svg)");
        $(".background-cs-6-24-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Real-&-virtual-world-balance-24/cs-6-24-26-imgdarkMode.svg)");
        $(".background-cs-6-7-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Responding-to-events-7/cs-6-7-19-imgdarkMode.svg)");
        $(".background-cs-6-7-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Responding-to-events-7/cs-6-7-21-imgdarkMode.svg)");
        $(".Class_6-digital_digital_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/rights-in-digital-world-23/C-6-23-20darkMode.svg)");
        $(".Class_6-digital_digital_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/rights-in-digital-world-23/C-6-23-21darkMode.svg)");
        $(".Class_6-digital_digital_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/rights-in-digital-world-23/C-6-23-22darkMode.svg)");
        $(".Class_6-digital_digital_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/rights-in-digital-world-23/C-6-23-23darkMode.svg)");
        $(".class_6_17-bg_19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Secure-digital-world-17/C-6-17-19darkMode.svg)");
        $(".class_6_17-bg_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Secure-digital-world-17/C-6-17-20darkMode.svg)");
        $(".class_6_17-bg_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Secure-digital-world-17/C-6-17-21darkMode.svg)");
        $(".class_6_17-bg_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Secure-digital-world-17/C-6-17-22darkMode.svg)");
        $(".class_6_22-bg_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Social-responsibility-22/C-6-22-20darkMode.svg)");
        $(".class_6_22-bg_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Social-responsibility-22/C-6-22-21darkMode.svg)");
        $(".class_6_22-bg_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Social-responsibility-22/C-6-22-22darkMode.svg)");
        $(".class_6_22-bg_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Social-responsibility-22/C-6-22-23darkMode.svg)");
        $(".background-cs-6-8-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Using-variables-8/cs-6-8-19darkMode.svg)");
        $(".background-cs-6-8-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Using-variables-8/cs-6-8-22darkMode.svg)");
        $(".background-cs-6-4-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Variables-4/cs-6-4-22-imgdarkMode.svg");
        $(".background-cs-6-4-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Variables-4/cs-6-4-23-imgdarkMode.svg");
        $(".background-cs-6-4-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Variables-4/cs-6-4-24-imgdarkMode.svg");
        $(".background-cs-6-4-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Variables-4/cs-6-4-25-imgdarkMode.svg");
        $(".background-cs-6-12-31").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Windows-UI-12/cs-6-12-31darkMode.svg");
        $(".background-cs-6-12-32").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Windows-UI-12/cs-6-12-32darkMode.svg");
        $(".background-cs-6-12-33").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Windows-UI-12/cs-6-12-33darkMode.svg");
        $(".background-cs-6-12-34").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Windows-UI-12/cs-6-12-34darkMode.svg");
        $(".class_music_10-bg_13").css("background-image", "url(../../../img/gakvetilebi/Music-class/Choose-background-music-10/music-10-13darkMode.svg");
        $(".class_music_10-bg_14").css("background-image", "url(../../../img/gakvetilebi/Music-class/Choose-background-music-10/music-10-14darkMode.svg");
        $(".class_music_10-bg_15").css("background-image", "url(../../../img/gakvetilebi/Music-class/Choose-background-music-10/music-10-15darkMode.svg");
        $(".city-voices-2-18").css("background-image", "url(../../../img/gakvetilebi/Music-class/city-voices-2/cs-new-02-18darkMode.svg");
        $(".city-voices-2-19").css("background-image", "url(../../../img/gakvetilebi/Music-class/city-voices-2/cs-new-02-19darkMode.svg");
        $(".city-voices-2-20").css("background-image", "url(../../../img/gakvetilebi/Music-class/city-voices-2/cs-new-02-20darkMode.svg");
        $(".city-voices-2-21").css("background-image", "url(../../../img/gakvetilebi/Music-class/city-voices-2/cs-new-02-21darkMode.svg");
        $(".city-voices-2-22").css("background-image", "url(../../../img/gakvetilebi/Music-class/city-voices-2/cs-new-02-22darkMode.svg");
        $(".animation-soundtrack-12-bg_14").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-animation-soundtrack-12/music-12-bg-illustrations-14darkMode.svg");
        $(".animation-soundtrack-12-bg_16").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-animation-soundtrack-12/music-12-bg-illustrations-16darkMode.svg");
        $(".animation-soundtrack-12-bg_17").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-animation-soundtrack-12/music-12-bg-illustrations-17darkMode.svg");
        $(".class_music_8-bg_17").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-broadcast-audio-8/music-08-17darkMode.svg");
        $(".class_music_8-bg_18").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-broadcast-audio-8/music-08-18darkMode.svg");
        $(".class_music_8-bg_19").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-broadcast-audio-8/music-08-19darkMode.svg");
        $(".class_music_8-bg_20").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-broadcast-audio-8/music-08-20darkMode.svg");
        $(".class_music_8-bg_21").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-broadcast-audio-8/music-08-21darkMode.svg");
        $(".class_music_7-bg_13").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-broadcast-hat-7/music-07-13darkMode.svg");
        $(".class_music_7-bg_14").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-broadcast-hat-7/music-07-14darkMode.svg");
        $(".class_music_7-bg_15").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-broadcast-hat-7/music-07-15darkMode.svg");
        $(".class_music_7-bg_16").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-broadcast-hat-7/music-07-16darkMode.svg");
        $(".class_music_6-bg_16").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-music-from-noise-6/music-new-06-16darkMode.svg");
        $(".class_music_6-bg_17").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-music-from-noise-6/music-new-06-17darkMode.svg");
        $(".class_music_6-bg_18").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-music-from-noise-6/music-new-06-18darkMode.svg");
        $(".class_music_6-bg_19").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-music-from-noise-6/music-new-06-19darkMode.svg");
        $(".find-way-24").css("background-image", "url(../../../img/gakvetilebi/Music-class/findWayBySound-3/music-3-24darkMode.svg");
        $(".find-way-25").css("background-image", "url(../../../img/gakvetilebi/Music-class/findWayBySound-3/cs-new-03-25darkMode.svg");
        $(".find-way-26").css("background-image", "url(../../../img/gakvetilebi/Music-class/findWayBySound-3/cs-new-03-26darkMode.svg");
        $(".find-way-27").css("background-image", "url(../../../img/gakvetilebi/Music-class/findWayBySound-3/music-3-27darkMode.svg");
        $(".class_music_9-bg_11").css("background-image", "url(../../../img/gakvetilebi/Music-class/Game-music-9/music-9-bg-illustrations-11darkMode.svg");
        $(".class_music_9-bg_12").css("background-image", "url(../../../img/gakvetilebi/Music-class/Game-music-9/music-9-bg-illustrations-12darkMode.svg");
        $(".class_music_9-bg_13").css("background-image", "url(../../../img/gakvetilebi/Music-class/Game-music-9/music-9-bg-illustrations-13darkMode.svg");
        $(".class_music_9-bg_14").css("background-image", "url(../../../img/gakvetilebi/Music-class/Game-music-9/music-9-bg-illustrations-14darkMode.svg");
        $(".class_music_11-bg_20").css("background-image", "url(../../../img/gakvetilebi/Music-class/Music-in-animation-and-cinema-11/music-11-20darkMode.svg");
        $(".class_music_11-bg_21").css("background-image", "url(../../../img/gakvetilebi/Music-class/Music-in-animation-and-cinema-11/music-11-21darkMode.svg");
        $(".class_music_11-bg_22").css("background-image", "url(../../../img/gakvetilebi/Music-class/Music-in-animation-and-cinema-11/music-11-22darkMode.svg");
        $(".class_music_11-bg_23").css("background-image", "url(../../../img/gakvetilebi/Music-class/Music-in-animation-and-cinema-11/music-11-23darkMode.svg");
        $(".music-bg-illustrations-5-16").css("background-image", "url(../../../img/gakvetilebi/Music-class/One-day-5/music-new-05-16darkMode.svg");
        $(".music-bg-illustrations-5-17").css("background-image", "url(../../../img/gakvetilebi/Music-class/One-day-5/music-new-05-17darkMode.svg");
        $(".music-bg-illustrations-5-18").css("background-image", "url(../../../img/gakvetilebi/Music-class/One-day-5/music-new-05-18darkMode.svg");
        $(".music-bg-illustrations-5-19").css("background-image", "url(../../../img/gakvetilebi/Music-class/One-day-5/music-new-05-19darkMode.svg");
        $(".music-bg-illustrations-5-20").css("background-image", "url(../../../img/gakvetilebi/Music-class/One-day-5/music-new-05-20darkMode.svg");
        $(".class_music_1-bg_19").css("background-image", "url(../../../img/gakvetilebi/Music-class/voices-1/music-1-19darkMode.svg");
        $(".class_music_1-bg_20").css("background-image", "url(../../../img/gakvetilebi/Music-class/voices-1/music-1-20darkMode.svg");
        $(".class_music_1-bg_21").css("background-image", "url(../../../img/gakvetilebi/Music-class/voices-1/music-1-21darkMode.svg");
        $(".class_music_1-bg_22").css("background-image", "url(../../../img/gakvetilebi/Music-class/voices-1/music-1-22darkMode.svg");
        $(".class_music_1-bg_23").css("background-image", "url(../../../img/gakvetilebi/Music-class/voices-1/music-1-23darkMode.svg");
        $(".class_music_4-bg_27").css("background-image", "url(../../../img/gakvetilebi/Music-class/Walk-in-the-city-4/music-04-27darkMode.svg");
        $(".class_music_4-bg_28").css("background-image", "url(../../../img/gakvetilebi/Music-class/Walk-in-the-city-4/music-04-28darkMode.svg");
        $(".class_music_4-bg_29").css("background-image", "url(../../../img/gakvetilebi/Music-class/Walk-in-the-city-4/music-04-29darkMode.svg");
        $(".class_music_4-bg_30").css("background-image", "url(../../../img/gakvetilebi/Music-class/Walk-in-the-city-4/music-04-30darkMode.svg");
        $(".class_music_4-bg_31").css("background-image", "url(../../../img/gakvetilebi/Music-class/Walk-in-the-city-4/music-04-31darkMode.svg");
        $(".class_music_4-bg_32").css("background-image", "url(../../../img/gakvetilebi/Music-class/Walk-in-the-city-4/music-04-32darkMode.svg");


        
        

        
        //botApp
        if (document.getElementById("Rectangle_1414-2")) {
          document.getElementById("Rectangle_1414-2").style.fill = "#000000";
        }
        if (document.getElementById("Path_12243-7")) {
          document.getElementById("Path_12243-7").style.fill = "#000000";
        }
        if (document.getElementById("Path_12243-8")) {
          document.getElementById("Path_12243-8").style.fill = "#000000";
        }
        if (document.getElementById("Path_12243-6")) {
          document.getElementById("Path_12243-6").style.fill = "#000000";
        }
        if (document.getElementById("Path_12243-10")) {
          document.getElementById("Path_12243-10").style.fill = "#000000";
        }
        if (document.getElementById("Path_12243-9")) {
          document.getElementById("Path_12243-9").style.fill = "#000000";
        }
        //chatvots.html
        if (document.getElementById("Rectangle_1432-2")) {
          document.getElementById("Rectangle_1432-2").style.fill = "#000000";
        }

        //switchDark
        document.getElementById("switchDarkId").checked = false;
        document.getElementById("switchDarkIdShadow").style.boxShadow = "1px 3px 6px #7fd1d8";
      });

      if (document.getElementById("1_kompTeq")) {
        document.getElementById("1_kompTeq").src = "./img/slider/(blake)slide-illustration-c.svg";
      }
      if (document.getElementById("2_buneba")) {
        document.getElementById("2_buneba").src = "./img/slider/(blake)slide-illustration-n.svg";
      }
      if (document.getElementById("3_xelovneba")) {
        document.getElementById("3_xelovneba").src = "./img/slider/(blake)slide-illustration-a.svg";
      }
      if (document.getElementById("4_musika")) {
        document.getElementById("4_musika").src = "./img/slider/(blake)slide-illustration-m.svg";
      }
      //nabiji
      for (let i = 0; i < nabiji.length; i++) {
        if (nabiji[i]) {
          nabiji[i].src = "../../img/icons/step_item(black).svg";
        }
      }
    }
  },
  methods: {
    myFunction() {
      var reset__btn = document.getElementsByClassName("reset__btn");
      var completed__btn = document.getElementsByClassName("completed__btn");
      var audioDownloadBbtnBlack = document.getElementsByClassName("audio-download__btn");
      var btnTextDark = document.getElementsByClassName("music-new-1-div-6-div-dot-text");
      var btnDarkMode = document.getElementsByClassName("btnDarkMode");
      var current__pagination = document.getElementsByClassName("current__pagination");
      var pagination__prev__btn = document.getElementsByClassName("pagination__prev__btn");
      var pagination__next__btn = document.getElementsByClassName("pagination__next__btn");
      var bg_menu = document.getElementsByClassName("bg_menu");
      var app_start = document.getElementsByClassName("app-start");
      //btn index.html
      var new_btn_start = document.getElementsByClassName("new_btn-start");
      //
      var app_select = document.getElementsByClassName("app-select");
      var app_sections = document.getElementsByClassName("app-sections");
      var circles_number_pink = document.getElementsByClassName("circles_number-pink");
      var top_bar = document.getElementsByClassName("top-bar");
      var img = $(".menu_box_passive").css("background-image");
      var nabiji = document.getElementsByClassName('newDesign_steps_item-img');
      //სურთები
      var appendChild_img = document.getElementsByClassName('appendChild--img');
      var element_box = document.getElementsByClassName('element-box');
      //სურათის ფერები რომლებიც შავზე არ ჩანს
      var imgBackgroundWhite = document.getElementsByClassName("imgBackgroundWhite");
      //გათიშვის ღილაკი წარმატების და მინიშნების გვერდისთვის x
      var close = document.getElementsByClassName('close');

      //ფოტოების გადიდების დროს უკანა ფონი
      var fullScreen_modal_content = document.getElementsByClassName('fullScreen_modal-content');
      var backEndDark = document.getElementsByClassName('backEndDark');
      //chatbots.html
      var bot_header = document.getElementsByClassName('bot_header');
      var chat_msg_item_user = document.getElementsByClassName('chat_msg_item_user');
      var chat_msg_item_admin = document.getElementsByClassName('chat_msg_item_admin');
      var chat_header = document.getElementsByClassName('chat_header');
      var chat_converse = document.getElementsByClassName('chat_converse');

      //pagination__dot
      var pagination__dot = document.getElementsByClassName('pagination__dot');
      var dot = document.getElementsByClassName('dot');

      //ტეგები
      //P
      var newDesignSubjectQuestionItemTitle = document.getElementsByClassName("newDesign_subject_question_item-title");
      var pDarkMode = document.getElementsByClassName("pDarkMode");
      //H
      var algorithme_title_italic = document.getElementsByClassName("algorithme-title-italic");
      var newDesign_container_main_title = document.getElementsByClassName("newDesign_container_main_title");
      //??info-box
      var info_box = document.getElementsByClassName("info-box");

      var changeImgDarkMode = document.getElementsByClassName('changeImgDarkMode');

      //სურათის გადიდების დროს წარწერა
      var fullScreen_modal_title = document.getElementsByClassName('fullScreen_modal-title');
      


      var element = document.body;

      if (!this.isDark) {
        //სურათის შეცვლა კონკრეტული გვერდებისთვის
        if (document.getElementById('cs-6-16-3DarkChange')) {
          document.getElementById('cs-6-16-3DarkChange').src = '../../../img/gakvetilebi/Computer-Science/Class-6/Our-sweet-memories-16/cs-6-16-3-darkMode.svg';
        }
        if (document.getElementById('cs-6-16-14-1DarkChange')) {
          document.getElementById('cs-6-16-14-1DarkChange').src = '../../../img/gakvetilebi/Computer-Science/Class-6/Our-sweet-memories-16/cs-6-16-14-1darkMode.svg';
        }
        if (document.getElementById('cs-6-16-15-1darkChange')) {
          document.getElementById('cs-6-16-15-1darkChange').src = '../../../img/gakvetilebi/Computer-Science/Class-6/Our-sweet-memories-16/cs-6-16-15-1darkMode.svg';
        }
        if (document.getElementById('cs-6-16-17-1darkChange')) {
          document.getElementById('cs-6-16-17-1darkChange').src = '../../../img/gakvetilebi/Computer-Science/Class-6/Our-sweet-memories-16/cs-6-16-17-1darkMode.svg';
        }
        if (document.getElementById('cs-6-16-18-1darkChange')) {
          document.getElementById('cs-6-16-18-1darkChange').src = '../../../img/gakvetilebi/Computer-Science/Class-6/Our-sweet-memories-16/cs-6-16-18-1darkMode.svg';
        }
        if (document.getElementById('cs-5-4-23darkChange')) {
          document.getElementById('cs-5-4-23darkChange').src = '../../../img/gakvetilebi/Computer-Science/Class-5/objects-moving-4/cs-5-4-23darkMode.svg';
        }
        if (changeImgDarkMode) {
          for (let i = 0; i < changeImgDarkMode.length; i++) {
            changeImgDarkMode[i].src = changeImgDarkMode[i].src.replace(".svg", "darkMode.svg");
          }
        }

        if (appendChild_img) {
          for (let i = 0; i < appendChild_img.length; i++) {
            appendChild_img[i].src = appendChild_img[i].src.replace("white", "whiteDark");
          }
        }

        for (let i = 0; i < element_box.length; i++) {
          if (element_box[i]) {
            element_box[i].children[0].src = element_box[i].children[0].src.replace(".png", "_dark.png");
          }
        }

        if (document.getElementById("nabijiType")) {
          document.getElementById("nabijiType").src = "../../img/icons/davalebebi/nabiji-whiteDark.svg";
        }
        if (document.getElementById("savarjishoType")) {
          document.getElementById("savarjishoType").src = "../../img/icons/davalebebi/savarjisho-whiteDark.svg";
        }
        if (document.getElementById("minishnebaType")) {
          document.getElementById("minishnebaType").src = "../../img/icons/davalebebi/minishneba-whiteDark.svg";
        }
        if (document.getElementById("shualeduriType")) {
          document.getElementById("shualeduriType").src = "../../img/icons/davalebebi/shualeduri-whiteDark.svg";
        }
        if (document.getElementById("kompleqsuriType")) {
          document.getElementById("kompleqsuriType").src = "../../img/icons/davalebebi/kompleqsuri-whiteDark.svg";
        }
        //დაწყება დასრულება
        if (reset__btn[0]) {
          reset__btn[0].classList.add("reset__btn_black");
        }
        if (completed__btn[0]) {
          completed__btn[0].classList.add("completed__btn_black");
        }
        if (audioDownloadBbtnBlack[0]) {
          audioDownloadBbtnBlack[0].classList.add("completed__btn_black");
        }
        for (let i = 0; i < btnTextDark.length; i++) {
          if (btnTextDark[i]) {
            btnTextDark[i].classList.add("completed__btn_black");
          }
        }
        for (let i = 0; i < btnDarkMode.length; i++) {
          if (btnDarkMode[i]) {
            btnDarkMode[i].classList.add("completed__btn_black");
          }
        }
        for (let i = 0; i < sign_description_btn.length; i++) {
          if (sign_description_btn[i]) {
            sign_description_btn[i].classList.add("completed__btn_black");
          }
        }
        //btn index.html
        for (let i = 0; i < 16; i++) {
          if (new_btn_start[i]) {
            new_btn_start[i].classList.add("new_btn-start_black_btn");
          }
        }
        for (let i = 0; i < imgBackgroundWhite.length; i++) {
          if (imgBackgroundWhite[i]) {
            imgBackgroundWhite[i].classList.add("img_background_white");
          }
        }
        // ფეიჯინგი
        if (current__pagination[0]) {
          current__pagination[0].classList.add("pagination_black");
        }
        if (pagination__prev__btn[0]) {
          pagination__prev__btn[0].classList.add("pagination_black");
        }
        if (pagination__next__btn[0]) {
          pagination__next__btn[0].classList.add("pagination_black");
        }
        localStorage.setItem("theme", "darck");
        element.style.backgroundColor = "black";
        this.isDark = true;
        //ტეგები
        //p
        for (let i = 0; i < newDesignSubjectQuestionItemTitle.length; i++) {
          if (newDesignSubjectQuestionItemTitle[i]) {
            newDesignSubjectQuestionItemTitle[i].classList.add("newDesign_subject_question_item-title_black_P");
          }
        }
        for (let i = 0; i < pDarkMode.length; i++) {
          if (pDarkMode[i]) {
            pDarkMode[i].classList.add("newDesign_subject_question_item-title_black_P");
          }
        }

        if (algorithme_title_italic[0]) {
          algorithme_title_italic[0].classList.add("newDesign_subject_question_item-title_black_P");
        }
        if (newDesign_container_main_title[0]) {
          newDesign_container_main_title[0].classList.add("newDesign_subject_question_item-title_black_P");
        }
        //???
        if (info_box[0]) {
          info_box[0].classList.add("new_btn-start_black_btn");
        }
        //index.html დასაწყისი

        if (bg_menu[0]) {
          bg_menu[0].classList.add("new_btn-start_black_btn");
        }
        if (app_start[0]) {
          app_start[0].classList.add("new_btn-start_black_btn");
        }
        if (app_sections[0]) {
          app_sections[0].classList.add("new_btn-start_black_btn");
        }
        if (app_select[0]) {
          app_select[0].classList.add("new_btn-start_black_btn");
        }
        for (let i = 0; i < circles_number_pink.length; i++) {
          if (circles_number_pink[i]) {
            circles_number_pink[i].classList.add("new_btn-start_black_btn");
          }
        }

        //ფოტოების გადიდების დროს უკანა ფონი
        for (let i = 0; i < fullScreen_modal_content.length; i++) {
          if (fullScreen_modal_content[i]) {
            fullScreen_modal_content[i].classList.add("new_btn-start_black_btn");
          }
        }
        //ფოტოს გადიდების დროს წარწერა
        for (let i = 0; i < fullScreen_modal_title.length; i++) {
          if (fullScreen_modal_title[i]) {
            fullScreen_modal_title[i].classList.add("newDesign_subject_question_item-title_black_P");
          }
        }
        for (let i = 0; i < backEndDark.length; i++) {
          if (backEndDark[i]) {
            backEndDark[i].classList.add("new_btn-start_black_btn");
          }
        }
        
        if (top_bar[0]) {
          top_bar[0].classList.add("new_btn-start_black_btn");
        }


        //მიტანის დროს ფეიჯინგი, hover
        for (let i = 0; i < pagination__dot.length; i++) {
          if (pagination__dot[i]) {
            pagination__dot[i].classList.add("pagination__dot_black");
          }
        }
        for (let i = 0; i < dot.length; i++) {
          if (dot[i]) {
            dot[i].classList.add("dot_black");
          }
        }
        
        //bot_header chatbots.html
        for (let i = 0; i < bot_header.length; i++) {
          if (bot_header[i]) {
            bot_header[i].classList.add("new_btn-start_black_btn");
            bot_header[i].classList.add("bot_header_black");
          }
        }
        for (let i = 0; i < chat_msg_item_user.length; i++) {
          if (chat_msg_item_user[i]) {
            chat_msg_item_user[i].children[0].classList.add("newDesign_subject_question_item-title_black_P");
          }
        }
        for (let i = 0; i < chat_msg_item_admin.length; i++) {
          if (chat_msg_item_admin[i]) {
            for(let j=0; j<chat_msg_item_admin[i].children.length; j++){
              if(chat_msg_item_admin[i].children[j] && chat_msg_item_admin[i].children[j].classList.contains('chat_msg_item-text')){
                chat_msg_item_admin[i].children[j].classList.add("newDesign_subject_question_item-title_black_P");
              }
            }
          }
        }
        for (let i = 0; i < chat_header.length; i++) {
          if (chat_header[i]) {
            chat_header[i].classList.add("new_btn-start_black_btn");
          }
        }
        for (let i = 0; i < chat_converse.length; i++) {
          if (chat_converse[i]) {
            chat_converse[i].classList.add("new_btn-start_black_btn");
          }
        }
        
        
        //გათიშვა x
        if (close[0]) {
          for(let i=0; i<close.length;i++){
            close[i].children[0].src = "../../img/icons/black_close.svg";
          }
        }
        //botApp
        if (document.getElementById("Rectangle_1414-2")) {
          document.getElementById("Rectangle_1414-2").style.fill = "#000000";
        }
        if (document.getElementById("Path_12243-7")) {
          document.getElementById("Path_12243-7").style.fill = "#000000";
        }
        if (document.getElementById("Path_12243-8")) {
          document.getElementById("Path_12243-8").style.fill = "#000000";
        }
        if (document.getElementById("Path_12243-6")) {
          document.getElementById("Path_12243-6").style.fill = "#000000";
        }
        if (document.getElementById("Path_12243-10")) {
          document.getElementById("Path_12243-10").style.fill = "#000000";
        }
        if (document.getElementById("Path_12243-9")) {
          document.getElementById("Path_12243-9").style.fill = "#000000";
        }
        //chatvots.html
        if (document.getElementById("Rectangle_1432-2")) {
          document.getElementById("Rectangle_1432-2").style.fill = "#000000";
        }

        //icons
        $("#prime").css("background-image", "url(../../Vue-chatBot/img/chat01.png)");
        $(".lang-box_passive").css("background-image", "url(../../New-header-vue/header-img/eng01.png)");
        $(".menu_box_passive").css("background-image", "url(../../New-header-vue/header-img/menu01.png)");
        $(".menu_box_active").css("background-image", "url(../../New-header-vue/header-img/menu01.png)");
        //
        //ბოლო გვერდები
        $(".Class_2-Creating_cycles_19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/Creating-cycles-5/C-2-5-19darkMode.svg)");
        $(".Class_2-Creating_cycles_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/Creating-cycles-5/C-2-5-20darkMode.svg)");
        $(".Class_2-Creating_cycles_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/Creating-cycles-5/C-2-5-21darkMode.svg)");
        $(".Class_2-Creating_cycles_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/Creating-cycles-5/C-2-5-22darkMode.svg)");
        $(".background-c-02-01-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/conditional-signs-1/C-2-1-26darkMode.svg)");
        $(".background-c-02-01-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/conditional-signs-1/C-2-1-27darkMode.svg)");
        $(".background-c-02-01-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/conditional-signs-1/C-2-1-28darkMode.svg)");
        $(".background-c-02-01-29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/conditional-signs-1/C-2-1-29darkMode.svg)");
        $(".background-c-02-04-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/cycle-4/C-2-4-23darkMode.svg)");
        $(".background-c-02-04-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/cycle-4/C-2-4-24darkMode.svg)");
        $(".background-c-02-04-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/cycle-4/C-2-4-25darkMode.svg)");
        $(".background-c-02-04-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/cycle-4/C-2-4-26darkMode.svg)");
        $(".background_cs_2_9-bg_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/Identify-with-computer-9/cs-2-9-20-imgdarkMode.svg)");
        $(".background_cs_2_9-bg_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/Identify-with-computer-9/cs-2-9-21-imgdarkMode.svg)");
        $(".background_cs_2_9-bg_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/Identify-with-computer-9/cs-2-9-22-imgdarkMode.svg)");
        $(".background_cs_2_9-bg_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/Identify-with-computer-9/cs-2-9-23-imgdarkMode.svg)");
        $(".background-cs-2-2-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/marks-2/cs-2-2-23-bgdarkMode.svg)");
        $(".background-cs-2-2-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/marks-2/cs-2-2-24-bgdarkMode.svg)");
        $(".background-cs-2-2-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/marks-2/cs-2-2-25-bgdarkMode.svg)");
        $(".background-cs-2-2-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/marks-2/cs-2-2-26-bgdarkMode.svg)");
        $(".cs-network_bg-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/network-10/cs-2-10-21darkMode.svg)");
        $(".cs-network_bg-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/network-10/cs-2-10-22darkMode.svg)");
        $(".cs-network_bg-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/network-10/cs-2-10-23darkMode.svg)");
        $(".cs-network_bg-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/network-10/cs-2-10-24darkMode.svg)");
        $(".background-c-2-3-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/part&whole-3/C-2-3-25darkMode.svg)");
        $(".background-c-2-3-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/part&whole-3/C-2-3-26darkMode.svg)");
        $(".background-c-2-3-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/part&whole-3/C-2-3-27darkMode.svg)");
        $(".background-c-2-3-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/part&whole-3/C-2-3-28darkMode.svg)");
        $(".background-c-02-08-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/programing-8/C-2-8-19darkMode.svg)");
        $(".background-c-02-08-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/programing-8/C-2-8-20darkMode.svg)");
        $(".background-c-02-08-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/programing-8/C-2-8-21darkMode.svg)");
        $(".background-c-02-08-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/programing-8/C-2-8-22darkMode.svg)");
        $(".programs_image-box-16").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/programs-management-7/cs-2-7-16darkMode.svg)");
        $(".programs_image-box-17").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/programs-management-7/cs-2-7-17darkMode.svg)");
        $(".programs_image-box-18").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/programs-management-7/cs-2-7-18darkMode.svg)");
        $(".programs_image-box-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/programs-management-7/cs-2-7-19darkMode.svg)");
        $(".storing-page_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/Storing-information-11/cs-2-11-21darkMode.svg)");
        $(".storing-page_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/Storing-information-11/cs-2-11-23darkMode.svg)");
        $(".storing-page_24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/Storing-information-11/cs-2-11-24darkMode.svg)");
        $(".Class_2-user_interface_19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/user-interface-6/C-2-6-19darkMode.svg)");
        $(".Class_2-user_interface_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/user-interface-6/C-2-6-20darkMode.svg)");
        $(".Class_2-user_interface_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/user-interface-6/C-2-6-21darkMode.svg)");
        $(".Class_2-user_interface_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/user-interface-6/C-2-6-22darkMode.svg)");
        $(".Class_2-user_interface_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/user-interface-6/C-2-6-23darkMode.svg)");
        $(".working-with-account_19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/working-with-account-12/cs-2-12-19darkMode.svg)");
        $(".working-with-account_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/working-with-account-12/cs-2-12-20darkMode.svg)");
        $(".working-with-account_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-2/working-with-account-12/cs-2-12-22darkMode.svg)");
        $(".background-c-02-29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/algorithmes-02/C-2-29darkMode.svg)");
        $(".background-c-02-30").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/algorithmes-02/C-2-30darkMode.svg)");
        $(".background-c-02-31").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/algorithmes-02/C-2-31darkMode.svg)");
        $(".background-c-02-32").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/algorithmes-02/C-2-32darkMode.svg)");
        $(".background-cs-3-10-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Cloud-services-10/cs-3-10-23darkMode.svg)");
        $(".background-cs-3-10-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Cloud-services-10/cs-3-10-24darkMode.svg)");
        $(".background-cs-3-10-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Cloud-services-10/cs-3-10-25darkMode.svg)");
        $(".background-cs-3-10-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Cloud-services-10/cs-3-10-26darkMode.svg)");
        $(".background-c-03-01-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/computer-development-1/C-3-1-24darkMode.svg)");
        $(".background-c-03-01-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/computer-development-1/C-3-1-25darkMode.svg)");
        $(".background-c-03-01-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/computer-development-1/C-3-1-26darkMode.svg)");
        $(".background-c-03-01-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/computer-development-1/C-3-1-27darkMode.svg)");
        $(".background-cs-3-2-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/computer-equipment-2/cs-3-2-19darkMode.svg)");
        $(".background-cs-3-2-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/computer-equipment-2/cs-3-2-20darkMode.svg)");
        $(".background-cs-3-2-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/computer-equipment-2/cs-3-2-21darkMode.svg)");
        $(".background-cs-3-2-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/computer-equipment-2/cs-3-2-22darkMode.svg)");
        $(".background-cs-3-13-img-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Do-you-have-robot-13/cs-3-13-20darkMode.svg)");
        $(".background-cs-3-13-img-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Do-you-have-robot-13/cs-3-13-22darkMode.svg)");
        $(".background-cs-3-13-img-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Do-you-have-robot-13/cs-3-13-23darkMode.svg)");
        $(".background-cs-3-15-32").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/First-heroes-15/cs-3-15-32darkMode.svg)");
        $(".background-cs-3-15-33").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/First-heroes-15/cs-3-15-33darkMode.svg)");
        $(".background-cs-3-15-34").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/First-heroes-15/cs-3-15-34darkMode.svg)");
        $(".background-cs-3-15-35").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/First-heroes-15/cs-3-15-35darkMode.svg)");
        $(".background-cs-3-3-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/How-computer-works-3/cs-3-3-23darkMode.svg)");
        $(".background-cs-3-3-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/How-computer-works-3/cs-3-3-24darkMode.svg)");
        $(".background-cs-3-3-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/How-computer-works-3/cs-3-3-25darkMode.svg)");
        $(".background-cs-3-16-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/How-my-robot-acts-16/cs-3-16-24darkMode.svg)");
        $(".background-cs-3-16-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/How-my-robot-acts-16/cs-3-16-25darkMode.svg)");
        $(".background-cs-3-16-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/How-my-robot-acts-16/cs-3-16-26darkMode.svg)");
        $(".background-cs-3-16-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/How-my-robot-acts-16/cs-3-16-27darkMode.svg)");
        $(".background-cs-3-8-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/internet-8/cs-2-3-8-20darkMode.svg)");
        $(".background-cs-3-8-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/internet-8/cs-2-3-8-21darkMode.svg)");
        $(".background-cs-3-8-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/internet-8/cs-2-3-8-22darkMode.svg)");
        $(".background-cs-3-8-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/internet-8/cs-2-3-8-23darkMode.svg)");
        $(".class_3_12-bg_19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/managing-office365-12/C-3-12-19darkMode.svg)");
        //არ შვება
        $(".class_3_12-bg_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/managing-office365-12/C-3-12-20darkMode.svg)");
        $(".class_3_12-bg_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/managing-office365-12/C-3-12-21darkMode.svg)");
        $(".class_3_12-bg_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/managing-office365-12/C-3-12-22darkMode.svg)");
        //
        $(".background-cs-3-14-img-18").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Mystery-of-binary-bracelet-14/cs-3-14-18darkMode.svg)");
        $(".background-cs-3-14-img-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Mystery-of-binary-bracelet-14/cs-3-14-19darkMode.svg)");
        $(".background-cs-3-14-img-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Mystery-of-binary-bracelet-14/cs-3-14-20darkMode.svg)");
        $(".background-cs-3-14-img-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Mystery-of-binary-bracelet-14/cs-3-14-21darkMode.svg)");
        $(".background-c-05-29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/programming-language-5/C-5-5-29darkMode.svg)");
        $(".background-c-05-30").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/programming-language-5/C-5-5-30darkMode.svg)");
        $(".background-c-05-31").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/programming-language-5/C-5-5-31darkMode.svg)");
        $(".background-c-05-32").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/programming-language-5/C-5-5-32darkMode.svg)");
        $(".background-cs-3-9-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/search-engine-9/cs-3-9-21-bgdarkMode.svg)");
        $(".background-cs-3-9-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/search-engine-9/cs-3-9-22-bgdarkMode.svg)");
        $(".visual_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Visual-Communication-6/C-3-6-23darkMode.svg)");
        $(".visual_24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Visual-Communication-6/C-3-6-24darkMode.svg)");
        $(".visual_25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Visual-Communication-6/C-3-6-25darkMode.svg)");
        $(".visual_26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Visual-Communication-6/C-3-6-26darkMode.svg)");
        $(".background-cs-3-7-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Visual-programing-7/cs-3-7-19darkMode.svg)");
        $(".background-cs-3-7-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Visual-programing-7/cs-3-7-20darkMode.svg)");
        $(".background-cs-3-7-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Visual-programing-7/cs-3-7-21darkMode.svg)");
        $(".background-cs-3-7-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-3/Visual-programing-7/cs-3-7-22darkMode.svg)");
        $(".background-cs-4-13-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Books-and-brochures-13/cs-4-13-26darkMode.svg)");
        $(".background-cs-4-13-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Books-and-brochures-13/cs-4-13-27darkMode.svg)");
        $(".background-cs-4-13-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Books-and-brochures-13/cs-4-13-28darkMode.svg)");
        $(".background-cs-4-13-29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Books-and-brochures-13/cs-4-13-29darkMode.svg)");
        $(".background-cs-4-6-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Cloud-services-6/cs-4-6-27-imgdarkMode.svg)");
        $(".background-cs-4-6-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Cloud-services-6/cs-4-6-28-imgdarkMode.svg)");
        $(".background-cs-4-6-29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Cloud-services-6/cs-4-6-29-imgdarkMode.svg)");
        $(".background-cs-4-6-30").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Cloud-services-6/cs-4-6-30-imgdarkMode.svg)");
        $(".background-cs-4-8-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/correcting-text-8/cs-4-8-24-imgdarkMode.svg)");
        $(".background-cs-4-8-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/correcting-text-8/cs-4-8-25-imgdarkMode.svg)");
        $(".background-cs-4-8-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/correcting-text-8/cs-4-8-26-imgdarkMode.svg)");
        $(".background-cs-4-16-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/How-to-form-text-16/cs-4-16-26darkMode.svg)");
        $(".background-cs-4-16-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/How-to-form-text-16/cs-4-16-27darkMode.svg)");
        $(".background-cs-4-16-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/How-to-form-text-16/cs-4-16-28darkMode.svg)");
        $(".background-cs-4-16-29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/How-to-form-text-16/cs-4-16-29darkMode.svg)");
        $(".background-cs-4-3-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Predicting-behavior-3/cs-4-3-19-imgdarkMode.svg)");
        $(".background-cs-4-3-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Predicting-behavior-3/cs-4-3-20-imgdarkMode.svg)");
        $(".background-cs-4-3-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Predicting-behavior-3/cs-4-3-21-imgdarkMode.svg)");
        $(".background-cs-4-3-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Predicting-behavior-3/cs-4-3-22-imgdarkMode.svg)");
        $(".Class_4-C_4_2_28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/C-4-2-28darkMode.svg)");
        $(".Class_4-C_4_2_30").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/C-4-2-30darkMode.svg)");
        $(".Class_4-C_4_2_31").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/programing-mistakes-2/C-4-2-31darkMode.svg)");
        $(".background-cs-4-11-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Sending-email-11/cs-4-11-22-imgdarkMode.svg)");
        $(".background-cs-4-11-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Sending-email-11/cs-4-11-23-imgdarkMode.svg)");
        $(".background-cs-4-11-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Sending-email-11/cs-4-11-24-imgdarkMode.svg)");
        $(".background-cs-4-11-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Sending-email-11/cs-4-11-25-imgdarkMode.svg)");
        $(".Class_4_9-img_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/template-and-table-9/C-4-9-21darkMode.svg)");
        $(".Class_4_9-img_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/template-and-table-9/C-4-9-22darkMode.svg)");
        $(".Class_4_9-img_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/template-and-table-9/C-4-9-23darkMode.svg)");
        $(".Class_4_9-img_24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/template-and-table-9/C-4-9-24darkMode.svg)");
        $(".background-cs-4-7-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Text-editor-&-tools-7/cs-4-7-23-imgdarkMode.svg)");
        $(".background-cs-4-7-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Text-editor-&-tools-7/cs-4-7-24-imgdarkMode.svg)");
        $(".background-cs-4-7-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Text-editor-&-tools-7/cs-4-7-25-imgdarkMode.svg)");
        $(".background-cs-4-7-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Text-editor-&-tools-7/cs-4-7-26-imgdarkMode.svg)");
        $(".background-cs-4-10-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/text-editor-10/cs-4-10-22-imgdarkMode.svg)");
        $(".background-cs-4-10-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/text-editor-10/cs-4-10-24-imgdarkMode.svg)");
        $(".background-cs-4-10-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/text-editor-10/cs-4-10-25-imgdarkMode.svg)");
        $(".background-cs-4-5-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/UI-5/cs-4-5-23darkMode.svg)");
        $(".class_4_15-bg_19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Walking-in-internet-15/C-4-15-19darkMode.svg)");
        $(".class_4_15-bg_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Walking-in-internet-15/C-4-15-20darkMode.svg)");
        $(".class_4_15-bg_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/Walking-in-internet-15/C-4-15-22darkMode.svg)");
        $(".background-cs-4-12-18").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/What-is-information-12/cs-4-12-18darkMode.svg)");
        $(".background-cs-4-12-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/What-is-information-12/cs-4-12-19darkMode.svg)");
        $(".background-cs-4-12-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/What-is-information-12/cs-4-12-20darkMode.svg)");
        $(".background-cs-4-12-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-4/What-is-information-12/cs-4-12-21darkMode.svg)");
        $(".class_5_26-bg_19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Computer-technologies-in-our-life-26/C-5-26-19darkMode.svg)");
        $(".class_5_26-bg_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Computer-technologies-in-our-life-26/C-5-26-20darkMode.svg)");
        $(".class_5_26-bg_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Computer-technologies-in-our-life-26/C-5-26-21darkMode.svg)");
        $(".class_5_26-bg_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Computer-technologies-in-our-life-26/C-5-26-22darkMode.svg)");
        $(".class_5_1-bg_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/conditional-marks-1/c-5-1-21darkMode.svg)");
        $(".class_5_1-bg_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/conditional-marks-1/c-5-1-23darkMode.svg)");
        $(".class_5_1-bg_24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/conditional-marks-1/c-5-1-24darkMode.svg)");
        $(".background-cs-5-9-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/conditional-operators-9/cs-5-9-19-imgdarkMode.svg)");
        $(".background-cs-5-9-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/conditional-operators-9/cs-5-9-20-imgdarkMode.svg)");
        $(".background-cs-5-9-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/conditional-operators-9/cs-5-9-21-imgdarkMode.svg)");
        $(".Class_5_8-image_18").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Cycles-8/C-5-8-18darkMode.svg)");
        $(".Class_5_8-image_19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Cycles-8/cs-5-8-19darkMode.svg)");
        $(".Class_5_8-image_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Cycles-8/cs-5-8-20darkMode.svg)");
        $(".Class_5_8-image_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Cycles-8/cs-5-8-21darkMode.svg)");
        $(".background-cs-5-27-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Decorate-electronic-table-27/cs-5-27-26darkMode.svg)");
        $(".background-cs-5-27-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Decorate-electronic-table-27/cs-5-27-27darkMode.svg)");
        $(".background-cs-5-27-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Decorate-electronic-table-27/cs-5-27-28darkMode.svg)");
        $(".background-cs-5-27-29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Decorate-electronic-table-27/cs-5-27-29darkMode.svg)");
        $(".background-cs-5-25-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/develop-informational-society-25/cs-5-25-20darkMode.svg)");
        $(".background-cs-5-25-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/develop-informational-society-25/cs-5-25-22darkMode.svg)");
        $(".background-cs-5-25-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/develop-informational-society-25/cs-5-25-23darkMode.svg)");
        $(".background-cs-5-18-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/diagram-in-electronic-table-18/cs-5-18-26-imgdarkMode.svg)");
        $(".background-cs-5-18-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/diagram-in-electronic-table-18/cs-5-18-27-imgdarkMode.svg)");
        $(".background-cs-5-18-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/diagram-in-electronic-table-18/cs-5-18-28-imgdarkMode.svg)");
        $(".background-cs-5-18-29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/diagram-in-electronic-table-18/cs-5-18-29-imgdarkMode.svg)");
        $(".background-cs-5-16-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Enter-table-data-16/cs-5-16-25-imgdarkMode.svg)");
        $(".background-cs-5-16-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Enter-table-data-16/cs-5-16-26-imgdarkMode.svg)");
        $(".background-cs-5-16-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Enter-table-data-16/cs-5-16-27-imgdarkMode.svg)");
        $(".background-cs-5-16-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Enter-table-data-16/cs-5-16-28-imgdarkMode.svg)");
        $(".background-cs-5-17-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Examples-and-formulas-17/cs-5-17-25darkMode.svg)");
        $(".background-cs-5-17-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Examples-and-formulas-17/cs-5-17-26darkMode.svg)");
        $(".background-cs-5-17-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Examples-and-formulas-17/cs-5-17-27darkMode.svg)");
        $(".background-cs-5-17-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Examples-and-formulas-17/cs-5-17-28darkMode.svg)");
        $(".background-cs-5-5-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/function-5/cs-5-5-20darkMode.svg)");
        $(".background-cs-5-5-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/function-5/cs-5-5-21darkMode.svg)");
        $(".background-cs-5-5-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/function-5/cs-5-5-22darkMode.svg)");
        $(".background-cs-5-5-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/function-5/cs-5-5-23darkMode.svg)");
        $(".background-cs-5-21-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/function-in-Exel-21/cs-5-21-20-imgdarkMode.svg)");
        $(".background-cs-5-21-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/function-in-Exel-21/cs-5-21-21-imgdarkMode.svg)");
        $(".background-cs-5-21-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/function-in-Exel-21/cs-5-21-22-imgdarkMode.svg)");
        $(".background-cs-5-21-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/function-in-Exel-21/cs-5-21-23-imgdarkMode.svg)");
        $(".background-cs-5-7-17").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Infinite-cycles-7/cs-5-7-17-imgdarkMode.svg)");
        $(".background-cs-5-7-18").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Infinite-cycles-7/cs-5-7-18-imgdarkMode.svg)");
        $(".background-cs-5-7-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Infinite-cycles-7/cs-5-7-19-imgdarkMode.svg)");
        $(".background-cs-5-7-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Infinite-cycles-7/cs-5-7-20-imgdarkMode.svg)");
        $(".background-cs-5-14-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Information-in-the-table-14/cs-5-14-25darkMode.svg)");
        $(".background-cs-5-14-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Information-in-the-table-14/cs-5-14-26darkMode.svg)");
        $(".background-cs-5-14-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Information-in-the-table-14/cs-5-14-28darkMode.svg)");
        $(".background-cs-5-23-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Informational-resources-23/cs-5-23-19darkMode.svg)");
        $(".background-cs-5-23-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Informational-resources-23/cs-5-23-20darkMode.svg)");
        $(".background-cs-5-23-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Informational-resources-23/cs-5-23-21darkMode.svg)");
        $(".background-cs-5-23-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Informational-resources-23/cs-5-23-22darkMode.svg)");
        $(".class_5_12-bg_25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/interface-of-devices-12/C-5-12-25darkMode.svg)");
        $(".class_5_12-bg_26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/interface-of-devices-12/C-5-12-26darkMode.svg)");
        $(".class_5_12-bg_27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/interface-of-devices-12/C-5-12-27darkMode.svg)");
        $(".class_5_12-bg_28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/interface-of-devices-12/C-5-12-28darkMode.svg)");
        $(".robot-page_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/My-first-robot-2/C-5-2-21darkMode.svg)");
        $(".robot-page_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/My-first-robot-2/C-5-2-23darkMode.svg)");
        $(".robot-page_24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/My-first-robot-2/C-5-2-24darkMode.svg)");
        $(".objects_box-image-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/objects-1/cs-5-1-19darkMode.svg)");
        $(".objects_box-image-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/objects-1/cs-5-1-20darkMode.svg)");
        $(".objects_box-image-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/objects-1/cs-5-1-21darkMode.svg)");
        $(".objects_box-image-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/objects-1/cs-5-1-22darkMode.svg)");
        $(".background-cs-5-4-32").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/objects-moving-4/cs-5-4-32darkMode.svg)");
        $(".background-cs-5-4-33").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/objects-moving-4/cs-5-4-33darkMode.svg)");
        $(".background-cs-5-4-34").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/objects-moving-4/cs-5-4-34darkMode.svg)");
        $(".background-cs-5-4-35").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/objects-moving-4/cs-5-4-35darkMode.svg)");
        $(".background-c-05-06-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/parallel-programming-6/C-5-6-21darkMode.svg)");
        $(".background-c-05-06-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/parallel-programming-6/C-5-6-22darkMode.svg)");
        $(".background-c-05-06-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/parallel-programming-6/C-5-6-23darkMode.svg)");
        $(".background-c-05-06-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/parallel-programming-6/C-5-6-24darkMode.svg)");
        $(".privacy_page-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Privacy-in-email-22/cs-5-22-20darkMode.svg)");
        $(".privacy_page-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Privacy-in-email-22/cs-5-22-21darkMode.svg)");
        $(".privacy_page-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Privacy-in-email-22/cs-5-22-22darkMode.svg)");
        $(".protect-data_23-background").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Protect-your-data-24/cs-5-24-23darkMode.svg)");
        $(".class_5_24-bg_24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Protect-your-data-24/C-5-24-24darkMode.svg)");
        $(".class_5_24-bg_25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Protect-your-data-24/C-5-24-25darkMode.svg)");
        $(".class_5_24-bg_26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Protect-your-data-24/C-5-24-26darkMode.svg)");
        $(".background-cs-5-11-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Remembering-information-11/cs-5-11-22darkMode.svg)");
        $(".background-cs-5-11-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Remembering-information-11/cs-5-11-23darkMode.svg)");
        $(".background-cs-5-11-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Remembering-information-11/cs-5-11-24darkMode.svg)");
        $(".background-cs-5-11-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Remembering-information-11/cs-5-11-25darkMode.svg)");
        $(".background-cs-5-20-30").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/sort-and-filter-20/cs-5-20-30-imgdarkMode.svg)");
        $(".background-cs-5-20-31").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/sort-and-filter-20/cs-5-20-31-imgdarkMode.svg)");
        $(".background-cs-5-20-32").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/sort-and-filter-20/cs-5-20-32-imgdarkMode.svg)");
        $(".background-cs-5-20-33").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/sort-and-filter-20/cs-5-20-33-imgdarkMode.svg)");
        $(".background-cs-5-13-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Sorting-methods-13/cs-5-13-26darkMode.svg)");
        $(".background-cs-5-13-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Sorting-methods-13/cs-5-13-27darkMode.svg)");
        $(".background-cs-5-13-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Sorting-methods-13/cs-5-13-28darkMode.svg)");
        $(".background-cs-5-13-29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Sorting-methods-13/cs-5-13-29darkMode.svg)");
        $(".diagram-box_page-18").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Using-diagrams-19/cs-5-19-18darkMode.svg)");
        $(".diagram-box_page-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Using-diagrams-19/cs-5-19-19darkMode.svg)");
        $(".diagram-box_page-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Using-diagrams-19/cs-5-19-20darkMode.svg)");
        $(".diagram-box_page-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Using-diagrams-19/cs-5-19-21darkMode.svg)");
        $(".background-cs-5-3-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/What-is-program-3/cs-5-3-21-imgdarkMode.svg)");
        $(".background-cs-5-3-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/What-is-program-3/cs-5-3-22-imgdarkMode.svg)");
        $(".background-cs-5-3-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/What-is-program-3/cs-5-3-23-imgdarkMode.svg)");
        $(".background-cs-5-3-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/What-is-program-3/cs-5-3-24-imgdarkMode.svg)");
        $(".class_5_28-bg_24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/working-with-excel-file-28/C-5-28-24darkMode.svg)");
        $(".class_5_28-bg_25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/working-with-excel-file-28/C-5-28-25darkMode.svg)");
        $(".class_5_28-bg_26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/working-with-excel-file-28/C-5-28-26darkMode.svg)");
        $(".class_5_28-bg_27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/working-with-excel-file-28/C-5-28-27darkMode.svg)");
        $(".class_5_15-bg_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Working-with-tables-15/C-5-15-22darkMode.svg)");
        $(".class_5_15-bg_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Working-with-tables-15/C-5-15-23darkMode.svg)");
        $(".class_5_15-bg_24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Working-with-tables-15/C-5-15-24darkMode.svg)");
        $(".class_5_15-bg_25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-5/Working-with-tables-15/C-5-15-25darkMode.svg)");
        $(".background-cs-6-10-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Android-graphics-interface-guide-10/cs-6-10-24darkMode.svg)");
        $(".background-cs-6-10-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Android-graphics-interface-guide-10/cs-6-10-25darkMode.svg)");
        $(".background-cs-6-10-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Android-graphics-interface-guide-10/cs-6-10-26darkMode.svg)");
        $(".background-cs-6-10-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Android-graphics-interface-guide-10/cs-6-10-27darkMode.svg)");
        $(".background-cs-6-6-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Arithmetic-operators-6/cs-6-6-21darkMode.svg)");
        $(".background-cs-6-6-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Arithmetic-operators-6/cs-6-6-22darkMode.svg)");
        $(".background-cs-6-6-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Arithmetic-operators-6/cs-6-6-23darkMode.svg)");
        $(".background-cs-6-6-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Arithmetic-operators-6/cs-6-6-24darkMode.svg)");
        $(".class_6_2-bg_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Conditional-operators-2/C-6-2-22darkMode.svg)");
        $(".class_6_2-bg_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Conditional-operators-2/C-6-2-23darkMode.svg)");
        $(".class_6_2-bg_24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Conditional-operators-2/C-6-2-24darkMode.svg)");
        $(".conditional-operators_25-background").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Conditional-operators-2/cs-6-2-25.svg)");
        $(".background-cs-6-1-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/create-game-1/cs-6-1-20-imgdarkMode.svg)");
        $(".background-cs-6-1-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/create-game-1/cs-6-1-21-imgdarkMode.svg)");
        $(".background-cs-6-1-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/create-game-1/cs-6-1-22-imgdarkMode.svg)");
        $(".background-cs-6-1-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/create-game-1/cs-6-1-23-imgdarkMode.svg)");
        $(".background-cs-6-13-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Create-our-presentation-13/cs-6-13-26darkMode.svg)");
        $(".background-cs-6-13-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Create-our-presentation-13/cs-6-13-27darkMode.svg)");
        $(".background-cs-6-13-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Create-our-presentation-13/cs-6-13-28darkMode.svg)");
        $(".background-cs-6-26-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-game-in-scratch-26/cs-6-26-20darkMode.svg)");
        $(".background-cs-6-26-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-game-in-scratch-26/cs-6-26-21darkMode.svg)");
        $(".background-cs-6-26-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-game-in-scratch-26/cs-6-26-22darkMode.svg)");
        $(".background-cs-6-26-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-game-in-scratch-26/cs-6-26-23darkMode.svg)");
        $(".class_6_28-bg_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-game-in-scratch-28/C-6-28-21darkMode.svg)");
        $(".class_6_28-bg_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-game-in-scratch-28/C-6-28-22darkMode.svg)");
        $(".class_6_28-bg_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-game-in-scratch-28/C-6-28-23darkMode.svg)");
        $(".background-cs-6-25-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-games-with-objects-25/cs-6-25-19darkMode.svg)");
        $(".background-cs-6-25-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-games-with-objects-25/cs-6-25-20darkMode.svg)");
        $(".background-cs-6-25-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-games-with-objects-25/cs-6-25-21darkMode.svg)");
        $(".background-cs-6-25-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-games-with-objects-25/cs-6-25-22darkMode.svg)");
        $(".class_6_20-bg_18").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-interactive-content-20/C-6-20-18darkMode.svg)");
        $(".class_6_20-bg_19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-interactive-content-20/C-6-20-19darkMode.svg)");
        $(".class_6_20-bg_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-interactive-content-20/C-6-20-20darkMode.svg)");
        $(".class_6_20-bg_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-interactive-content-20/C-6-20-21darkMode.svg)");
        $(".class_6_27-bg_18").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-two-tours-game-27/C-6-27-18darkMode.svg)");
        $(".class_6_27-bg_19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-two-tours-game-27/C-6-27-19darkMode.svg)");
        $(".class_6_27-bg_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-two-tours-game-27/C-6-27-20darkMode.svg)");
        $(".class_6_27-bg_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Creating-two-tours-game-27/C-6-27-21darkMode.svg)");
        $(".background-cs-6-3_24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/embedded-cycles-3/cs-6-3-24darkMode.svg)");
        $(".background-cs-6-3_25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/embedded-cycles-3/cs-6-3-25darkMode.svg)");
        $(".background-cs-6-3_26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/embedded-cycles-3/cs-6-3-26darkMode.svg)");
        $(".background-cs-6-3_27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/embedded-cycles-3/cs-6-3-27darkMode.svg)");
        $(".background-cs-6-21-18").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Information-ethics-norms-21/cs-6-21-18darkMode.svg)");
        $(".background-cs-6-21-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Information-ethics-norms-21/cs-6-21-19darkMode.svg)");
        $(".background-cs-6-21-20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Information-ethics-norms-21/cs-6-21-20darkMode.svg)");
        $(".background-cs-6-21-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Information-ethics-norms-21/cs-6-21-21darkMode.svg)");
        $(".background-cs-6-9-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/List-9/cs-6-9-21-imgdarkMode.svg)");
        $(".background-cs-6-9-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/List-9/cs-6-9-22-imgdarkMode.svg)");
        $(".background-cs-6-9-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/List-9/cs-6-9-23-imgdarkMode.svg)");
        $(".background-cs-6-9-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/List-9/cs-6-9-24-imgdarkMode.svg)");
        $(".background-cs-6-18-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Multimedia-online-platforms-18/cs-6-18-23darkMode.svg)");
        $(".background-cs-6-18-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Multimedia-online-platforms-18/cs-6-18-24darkMode.svg)");
        $(".background-cs-6-18-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Multimedia-online-platforms-18/cs-6-18-25darkMode.svg)");
        $(".background-cs-6-18-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Multimedia-online-platforms-18/cs-6-18-26darkMode.svg)");
        $(".background-cs-6-5-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Operators-5/cs-6-5-25darkMode.svg)");
        $(".background-cs-6-5-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Operators-5/cs-6-5-26darkMode.svg)");
        $(".background-cs-6-5-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Operators-5/cs-6-5-27darkMode.svg)");
        $(".background-cs-6-5-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Operators-5/cs-6-5-28darkMode.svg)");
        $(".background-cs-6-15-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Our-podcast-15/cs-6-15-26darkMode.svg)");
        $(".background-cs-6-15-27").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Our-podcast-15/cs-6-15-27darkMode.svg)");
        $(".background-cs-6-15-29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Our-podcast-15/cs-6-15-29darkMode.svg)");
        $(".class_6_16-bg_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Our-sweet-memories-16/C-6-16-23darkMode.svg)");
        $(".class_6_16-bg_24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Our-sweet-memories-16/C-6-16-24darkMode.svg)");
        $(".class_6_16-bg_25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Our-sweet-memories-16/C-6-16-25darkMode.svg)");
        $(".class_6_16-bg_26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Our-sweet-memories-16/C-6-16-26darkMode.svg)");
        $(".class_6_14-bg_29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Photo-editor-14/C-6-14-29darkMode.svg)");
        $(".class_6_14-bg_30").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Photo-editor-14/C-6-14-30darkMode.svg)");
        $(".background-cs-6-19-28").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Presentation-of-my-project-19/cs-6-19-28darkMode.svg)");
        $(".background-cs-6-19-29").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Presentation-of-my-project-19/cs-6-19-29darkMode.svg)");
        $(".background-cs-6-19-30").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Presentation-of-my-project-19/cs-6-19-30darkMode.svg)");
        $(".background-cs-6-19-31").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Presentation-of-my-project-19/cs-6-19-31darkMode.svg)");
        $(".background-cs-6-24-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Real-&-virtual-world-balance-24/cs-6-24-23-imgdarkMode.svg)");
        $(".background-cs-6-24-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Real-&-virtual-world-balance-24/cs-6-24-24-imgdarkMode.svg)");
        $(".background-cs-6-24-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Real-&-virtual-world-balance-24/cs-6-24-25-imgdarkMode.svg)");
        $(".background-cs-6-24-26").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Real-&-virtual-world-balance-24/cs-6-24-26-imgdarkMode.svg)");
        $(".background-cs-6-7-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Responding-to-events-7/cs-6-7-19-imgdarkMode.svg)");
        $(".background-cs-6-7-21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Responding-to-events-7/cs-6-7-21-imgdarkMode.svg)");
        $(".Class_6-digital_digital_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/rights-in-digital-world-23/C-6-23-20darkMode.svg)");
        $(".Class_6-digital_digital_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/rights-in-digital-world-23/C-6-23-21darkMode.svg)");
        $(".Class_6-digital_digital_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/rights-in-digital-world-23/C-6-23-22darkMode.svg)");
        $(".Class_6-digital_digital_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/rights-in-digital-world-23/C-6-23-23darkMode.svg)");
        $(".class_6_17-bg_19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Secure-digital-world-17/C-6-17-19darkMode.svg)");
        $(".class_6_17-bg_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Secure-digital-world-17/C-6-17-20darkMode.svg)");
        $(".class_6_17-bg_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Secure-digital-world-17/C-6-17-21darkMode.svg)");
        $(".class_6_17-bg_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Secure-digital-world-17/C-6-17-22darkMode.svg)");
        $(".class_6_22-bg_20").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Social-responsibility-22/C-6-22-20darkMode.svg)");
        $(".class_6_22-bg_21").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Social-responsibility-22/C-6-22-21darkMode.svg)");
        $(".class_6_22-bg_22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Social-responsibility-22/C-6-22-22darkMode.svg)");
        $(".class_6_22-bg_23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Social-responsibility-22/C-6-22-23darkMode.svg)");
        $(".background-cs-6-8-19").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Using-variables-8/cs-6-8-19darkMode.svg)");
        $(".background-cs-6-8-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Using-variables-8/cs-6-8-22darkMode.svg)");
        $(".background-cs-6-4-22").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Variables-4/cs-6-4-22-imgdarkMode.svg");
        $(".background-cs-6-4-23").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Variables-4/cs-6-4-23-imgdarkMode.svg");
        $(".background-cs-6-4-24").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Variables-4/cs-6-4-24-imgdarkMode.svg");
        $(".background-cs-6-4-25").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Variables-4/cs-6-4-25-imgdarkMode.svg");
        $(".background-cs-6-12-31").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Windows-UI-12/cs-6-12-31darkMode.svg");
        $(".background-cs-6-12-32").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Windows-UI-12/cs-6-12-32darkMode.svg");
        $(".background-cs-6-12-33").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Windows-UI-12/cs-6-12-33darkMode.svg");
        $(".background-cs-6-12-34").css("background-image", "url(../../../img/gakvetilebi/Computer-Science/Class-6/Windows-UI-12/cs-6-12-34darkMode.svg");
        $(".class_music_10-bg_13").css("background-image", "url(../../../img/gakvetilebi/Music-class/Choose-background-music-10/music-10-13darkMode.svg");
        $(".class_music_10-bg_14").css("background-image", "url(../../../img/gakvetilebi/Music-class/Choose-background-music-10/music-10-14darkMode.svg");
        $(".class_music_10-bg_15").css("background-image", "url(../../../img/gakvetilebi/Music-class/Choose-background-music-10/music-10-15darkMode.svg");
        $(".city-voices-2-18").css("background-image", "url(../../../img/gakvetilebi/Music-class/city-voices-2/cs-new-02-18darkMode.svg");
        $(".city-voices-2-19").css("background-image", "url(../../../img/gakvetilebi/Music-class/city-voices-2/cs-new-02-19darkMode.svg");
        $(".city-voices-2-20").css("background-image", "url(../../../img/gakvetilebi/Music-class/city-voices-2/cs-new-02-20darkMode.svg");
        $(".city-voices-2-21").css("background-image", "url(../../../img/gakvetilebi/Music-class/city-voices-2/cs-new-02-21darkMode.svg");
        $(".city-voices-2-22").css("background-image", "url(../../../img/gakvetilebi/Music-class/city-voices-2/cs-new-02-22darkMode.svg");
        $(".animation-soundtrack-12-bg_14").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-animation-soundtrack-12/music-12-bg-illustrations-14darkMode.svg");
        $(".animation-soundtrack-12-bg_16").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-animation-soundtrack-12/music-12-bg-illustrations-16darkMode.svg");
        $(".animation-soundtrack-12-bg_17").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-animation-soundtrack-12/music-12-bg-illustrations-17darkMode.svg");
        $(".class_music_8-bg_17").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-broadcast-audio-8/music-08-17darkMode.svg");
        $(".class_music_8-bg_18").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-broadcast-audio-8/music-08-18darkMode.svg");
        $(".class_music_8-bg_19").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-broadcast-audio-8/music-08-19darkMode.svg");
        $(".class_music_8-bg_20").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-broadcast-audio-8/music-08-20darkMode.svg");
        $(".class_music_8-bg_21").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-broadcast-audio-8/music-08-21darkMode.svg");
        $(".class_music_7-bg_13").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-broadcast-hat-7/music-07-13darkMode.svg");
        $(".class_music_7-bg_14").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-broadcast-hat-7/music-07-14darkMode.svg");
        $(".class_music_7-bg_15").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-broadcast-hat-7/music-07-15darkMode.svg");
        $(".class_music_7-bg_16").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-broadcast-hat-7/music-07-16darkMode.svg");
        $(".class_music_6-bg_16").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-music-from-noise-6/music-new-06-16darkMode.svg");
        $(".class_music_6-bg_17").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-music-from-noise-6/music-new-06-17darkMode.svg");
        $(".class_music_6-bg_18").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-music-from-noise-6/music-new-06-18darkMode.svg");
        $(".class_music_6-bg_19").css("background-image", "url(../../../img/gakvetilebi/Music-class/Create-music-from-noise-6/music-new-06-19darkMode.svg");
        $(".find-way-24").css("background-image", "url(../../../img/gakvetilebi/Music-class/findWayBySound-3/music-3-24darkMode.svg");
        $(".find-way-25").css("background-image", "url(../../../img/gakvetilebi/Music-class/findWayBySound-3/cs-new-03-25darkMode.svg");
        $(".find-way-26").css("background-image", "url(../../../img/gakvetilebi/Music-class/findWayBySound-3/cs-new-03-26darkMode.svg");
        $(".find-way-27").css("background-image", "url(../../../img/gakvetilebi/Music-class/findWayBySound-3/music-3-27darkMode.svg");
        $(".class_music_9-bg_11").css("background-image", "url(../../../img/gakvetilebi/Music-class/Game-music-9/music-9-bg-illustrations-11darkMode.svg");
        $(".class_music_9-bg_12").css("background-image", "url(../../../img/gakvetilebi/Music-class/Game-music-9/music-9-bg-illustrations-12darkMode.svg");
        $(".class_music_9-bg_13").css("background-image", "url(../../../img/gakvetilebi/Music-class/Game-music-9/music-9-bg-illustrations-13darkMode.svg");
        $(".class_music_9-bg_14").css("background-image", "url(../../../img/gakvetilebi/Music-class/Game-music-9/music-9-bg-illustrations-14darkMode.svg");
        $(".class_music_11-bg_20").css("background-image", "url(../../../img/gakvetilebi/Music-class/Music-in-animation-and-cinema-11/music-11-20darkMode.svg");
        $(".class_music_11-bg_21").css("background-image", "url(../../../img/gakvetilebi/Music-class/Music-in-animation-and-cinema-11/music-11-21darkMode.svg");
        $(".class_music_11-bg_22").css("background-image", "url(../../../img/gakvetilebi/Music-class/Music-in-animation-and-cinema-11/music-11-22darkMode.svg");
        $(".class_music_11-bg_23").css("background-image", "url(../../../img/gakvetilebi/Music-class/Music-in-animation-and-cinema-11/music-11-23darkMode.svg");
        $(".music-bg-illustrations-5-16").css("background-image", "url(../../../img/gakvetilebi/Music-class/One-day-5/music-new-05-16darkMode.svg");
        $(".music-bg-illustrations-5-17").css("background-image", "url(../../../img/gakvetilebi/Music-class/One-day-5/music-new-05-17darkMode.svg");
        $(".music-bg-illustrations-5-18").css("background-image", "url(../../../img/gakvetilebi/Music-class/One-day-5/music-new-05-18darkMode.svg");
        $(".music-bg-illustrations-5-19").css("background-image", "url(../../../img/gakvetilebi/Music-class/One-day-5/music-new-05-19darkMode.svg");
        $(".music-bg-illustrations-5-20").css("background-image", "url(../../../img/gakvetilebi/Music-class/One-day-5/music-new-05-20darkMode.svg");
        $(".class_music_1-bg_19").css("background-image", "url(../../../img/gakvetilebi/Music-class/voices-1/music-1-19darkMode.svg");
        $(".class_music_1-bg_20").css("background-image", "url(../../../img/gakvetilebi/Music-class/voices-1/music-1-20darkMode.svg");
        $(".class_music_1-bg_21").css("background-image", "url(../../../img/gakvetilebi/Music-class/voices-1/music-1-21darkMode.svg");
        $(".class_music_1-bg_22").css("background-image", "url(../../../img/gakvetilebi/Music-class/voices-1/music-1-22darkMode.svg");
        $(".class_music_1-bg_23").css("background-image", "url(../../../img/gakvetilebi/Music-class/voices-1/music-1-23darkMode.svg");
        $(".class_music_4-bg_27").css("background-image", "url(../../../img/gakvetilebi/Music-class/Walk-in-the-city-4/music-04-27darkMode.svg");
        $(".class_music_4-bg_28").css("background-image", "url(../../../img/gakvetilebi/Music-class/Walk-in-the-city-4/music-04-28darkMode.svg");
        $(".class_music_4-bg_29").css("background-image", "url(../../../img/gakvetilebi/Music-class/Walk-in-the-city-4/music-04-29darkMode.svg");
        $(".class_music_4-bg_30").css("background-image", "url(../../../img/gakvetilebi/Music-class/Walk-in-the-city-4/music-04-30darkMode.svg");
        $(".class_music_4-bg_31").css("background-image", "url(../../../img/gakvetilebi/Music-class/Walk-in-the-city-4/music-04-31darkMode.svg");
        $(".class_music_4-bg_32").css("background-image", "url(../../../img/gakvetilebi/Music-class/Walk-in-the-city-4/music-04-32darkMode.svg");

        

        

        


        if (document.getElementById("3_xelovneba")) {
          console.log(document.getElementById("3_xelovneba").src);
        }
        if (document.getElementById("1_kompTeq")) {
          document.getElementById("1_kompTeq").src = "./img/slider/(blake)slide-illustration-c.svg";
        }
        if (document.getElementById("2_buneba")) {
          document.getElementById("2_buneba").src = "./img/slider/(blake)slide-illustration-n.svg";
        }
        if (document.getElementById("3_xelovneba")) {
          document.getElementById("3_xelovneba").src = "./img/slider/(blake)slide-illustration-a.svg";
        }
        if (document.getElementById("4_musika")) {
          document.getElementById("4_musika").src = "./img/slider/(blake)slide-illustration-m.svg";
        }
        if (document.getElementById("3_xelovneba")) {
          console.log(document.getElementById("3_xelovneba").src);
        }
        //switchDarkIdShadow
        document.getElementById("switchDarkIdShadow").style.boxShadow = "1px 3px 6px #7fd1d8";
        //nabiji
        for (let i = 0; i < nabiji.length; i++) {
          if (nabiji[i]) {
            nabiji[i].src = "../../img/icons/step_item(black).svg";
          }
        }

        //სარჩევი
        if (this.isActive && document.getElementById("mynetwork")) {
          initDark();
        }
      }
      else {

        if (document.getElementById('cs-6-16-3DarkChange')) {
          document.getElementById('cs-6-16-3DarkChange').src = '../../../img/gakvetilebi/Computer-Science/Class-6/Our-sweet-memories-16/cs-6-16-3.svg';
        }
        if (document.getElementById('cs-6-16-14-1DarkChange')) {
          document.getElementById('cs-6-16-14-1DarkChange').src = '../../../img/gakvetilebi/Computer-Science/Class-6/Our-sweet-memories-16/cs-6-16-14-1.svg';
        }
        if (document.getElementById('cs-6-16-15-1darkChange')) {
          document.getElementById('cs-6-16-15-1darkChange').src = '../../../img/gakvetilebi/Computer-Science/Class-6/Our-sweet-memories-16/cs-6-16-15-1.svg';
        }
        if (document.getElementById('cs-6-16-17-1darkChange')) {
          document.getElementById('cs-6-16-17-1darkChange').src = '../../../img/gakvetilebi/Computer-Science/Class-6/Our-sweet-memories-16/cs-6-16-17-1.svg';
        }
        if (document.getElementById('cs-6-16-18-1darkChange')) {
          document.getElementById('cs-6-16-18-1darkChange').src = '../../../img/gakvetilebi/Computer-Science/Class-6/Our-sweet-memories-16/cs-6-16-18-1.svg';
        }
        if (document.getElementById('cs-5-4-23darkChange')) {
          document.getElementById('cs-5-4-23darkChange').src = '../../../img/gakvetilebi/Computer-Science/Class-5/objects-moving-4/cs-5-4-23.svg';
        }
        if (changeImgDarkMode) {
          for (let i = 0; i < changeImgDarkMode.length; i++) {
            changeImgDarkMode[i].src = changeImgDarkMode[i].src.replace("darkMode.svg", ".svg");
          }
        }
        //ფოტოების გადიდების დროს უკანა ფონი
        for (let i = 0; i < fullScreen_modal_content.length; i++) {
          if (fullScreen_modal_content[i]) {
            fullScreen_modal_content[i].classList.remove("new_btn-start_black_btn");
          }
        }
        for (let i = 0; i < backEndDark.length; i++) {
          if (backEndDark[i]) {
            backEndDark[i].classList.remove("new_btn-start_black_btn");
          }
        }

        if (appendChild_img) {
          for (let i = 0; i < appendChild_img.length; i++) {
            appendChild_img[i].src = appendChild_img[i].src.replace("whiteDark", "white");
          }
        }
        for (let i = 0; i < element_box.length; i++) {
          if (element_box[i]) {
            element_box[i].children[0].src = element_box[i].children[0].src.replace("_dark.png", ".png");
          }
        }

        if (document.getElementById('nabijiType')) {
          document.getElementById('nabijiType').src = "../../img/icons/davalebebi/nabiji-white.svg";
        }
        if (document.getElementById("savarjishoType")) {
          document.getElementById("savarjishoType").src = "../../img/icons/davalebebi/savarjisho-white.svg";
        }
        if (document.getElementById("minishnebaType")) {
          document.getElementById("minishnebaType").src = "../../img/icons/davalebebi/minishneba-white.svg";
        }
        if (document.getElementById("shualeduriType")) {
          document.getElementById("shualeduriType").src = "../../img/icons/davalebebi/shualeduri-white.svg";
        }
        if (document.getElementById("kompleqsuriType")) {
          document.getElementById("kompleqsuriType").src = "../../img/icons/davalebebi/kompleqsuri-white.svg";
        }

        if (reset__btn[0]) {
          reset__btn[0].classList.remove("reset__btn_black");
        }
        if (completed__btn[0]) {
          completed__btn[0].classList.remove("completed__btn_black");
        }
        if (audioDownloadBbtnBlack[0]) {
          audioDownloadBbtnBlack[0].classList.remove("completed__btn_black");
        }
        for (let i = 0; i < btnTextDark.length; i++) {
          if (btnTextDark[i]) {
            btnTextDark[i].classList.remove("completed__btn_black");
          }
        }
        for (let i = 0; i < btnDarkMode.length; i++) {
          if (btnDarkMode[i]) {
            btnDarkMode[i].classList.remove("completed__btn_black");
          }
        }
        for (let i = 0; i < sign_description_btn.length; i++) {
          if (sign_description_btn[i]) {
            sign_description_btn[i].classList.remove("completed__btn_black");
          }
        }
        //btn index.html
        for (let i = 0; i < 16; i++) {
          if (new_btn_start[i]) {
            new_btn_start[i].classList.remove("new_btn-start_black_btn");
          }
        }
        for (let i = 0; i < imgBackgroundWhite.length; i++) {
          if (imgBackgroundWhite[i]) {
            imgBackgroundWhite[i].classList.remove("img_background_white");
          }
        }
        if (current__pagination[0]) {
          current__pagination[0].classList.remove("pagination_black");
        }
        if (pagination__prev__btn[0]) {
          pagination__prev__btn[0].classList.remove("pagination_black");
        }
        if (pagination__next__btn[0]) {
          pagination__next__btn[0].classList.remove("pagination_black");
        }
        localStorage.setItem("theme", "light");
        element.style.background = "";
        this.isDark = false;
        //ტეგები
        //P
        for (let i = 0; i < newDesignSubjectQuestionItemTitle.length; i++) {
          if (newDesignSubjectQuestionItemTitle[i]) {
            newDesignSubjectQuestionItemTitle[i].classList.remove("newDesign_subject_question_item-title_black_P");
          }
        }
        for (let i = 0; i < pDarkMode.length; i++) {
          if (pDarkMode[i]) {
            pDarkMode[i].classList.remove("newDesign_subject_question_item-title_black_P");
          }
        }

        if (algorithme_title_italic[0]) {
          algorithme_title_italic[0].classList.remove("newDesign_subject_question_item-title_black_P");
        }
        if (newDesign_container_main_title[0]) {
          newDesign_container_main_title[0].classList.remove("newDesign_subject_question_item-title_black_P");
        }
        //???

        if (info_box[0]) {
          info_box[0].classList.remove("new_btn-start_black_btn");
        }
        //index.html დასაწყისი
        if (bg_menu[0]) {
          bg_menu[0].classList.remove("new_btn-start_black_btn");
        }
        if (app_start[0]) {
          app_start[0].classList.remove("new_btn-start_black_btn");
        }
        if (app_sections[0]) {
          app_sections[0].classList.remove("new_btn-start_black_btn");
        }
        if (app_select[0]) {
          app_select[0].classList.remove("new_btn-start_black_btn");
        }
        for (let i = 0; i < circles_number_pink.length; i++) {
          if (circles_number_pink[i]) {
            circles_number_pink[i].classList.remove("new_btn-start_black_btn");
          }
        }
        if (top_bar[0]) {
          top_bar[0].classList.remove("new_btn-start_black_btn");
        }

        //მიტანის დროს ფეიჯინგი, hover
        for (let i = 0; i < pagination__dot.length; i++) {
          if (pagination__dot[i]) {
            pagination__dot[i].classList.remove("pagination__dot_black");
          }
        }
        for (let i = 0; i < dot.length; i++) {
          if (dot[i]) {
            dot[i].classList.remove("dot_black");
          }
        }
        //bot_header chatbots.html
        for (let i = 0; i < bot_header.length; i++) {
          if (bot_header[i]) {
            bot_header[i].classList.remove("new_btn-start_black_btn");
            bot_header[i].classList.remove("bot_header_black");
          }
        }
        for (let i = 0; i < chat_msg_item_user.length; i++) {
          if (chat_msg_item_user[i]) {
            chat_msg_item_user[i].children[0].classList.remove("newDesign_subject_question_item-title_black_P");
          }
        }
        for (let i = 0; i < chat_msg_item_admin.length; i++) {
          if (chat_msg_item_admin[i]) {
            for(let j=0; j<chat_msg_item_admin[i].children.length; j++){
              if(chat_msg_item_admin[i].children[j] && chat_msg_item_admin[i].children[j].classList.contains('chat_msg_item-text')){
                chat_msg_item_admin[i].children[j].classList.remove("newDesign_subject_question_item-title_black_P");
              }
            }
          }
        }
        for (let i = 0; i < chat_header.length; i++) {
          if (chat_header[i]) {
            chat_header[i].classList.remove("new_btn-start_black_btn");
          }
        }
        for (let i = 0; i < chat_converse.length; i++) {
          if (chat_converse[i]) {
            chat_converse[i].classList.remove("new_btn-start_black_btn");
          }
        }
        //გათიშვა x
        if (close[0]) {
          for(let i=0; i<close.length;i++){
            close[i].children[0].src = "../../img/icons/close.svg";
          }
        }
        //bottApp
        if (document.getElementById("Rectangle_1414-2")) {
          document.getElementById("Rectangle_1414-2").style.fill = "";
        }
        if (document.getElementById("Path_12243-7")) {
          document.getElementById("Path_12243-7").style.fill = "";
        }
        if (document.getElementById("Path_12243-8")) {
          document.getElementById("Path_12243-8").style.fill = "";
        }
        if (document.getElementById("Path_12243-6")) {
          document.getElementById("Path_12243-6").style.fill = "";
        }
        if (document.getElementById("Path_12243-10")) {
          document.getElementById("Path_12243-10").style.fill = "";
        }
        if (document.getElementById("Path_12243-9")) {
          document.getElementById("Path_12243-9").style.fill = "";
        }
        //chatvots.html
        if (document.getElementById("Rectangle_1432-2")) {
          document.getElementById("Rectangle_1432-2").style.fill = "";
        }
        //icons
        $("#prime").css("background-image", "");
        $(".lang-box_passive").css("background-image", "");
        $(".menu_box_passive").css("background-image", "");
        $(".menu_box_active").css("background-image", "");
        
        //ბოლო გვერდები
        $(".cs-network_bg-21").css("background-image", "");
        $(".cs-network_bg-22").css("background-image", "");
        $(".cs-network_bg-23").css("background-image", "");
        $(".cs-network_bg-24").css("background-image", "");
        $(".programs_image-box-16").css("background-image", "");
        $(".programs_image-box-17").css("background-image", "");
        $(".programs_image-box-18").css("background-image", "");
        $(".programs_image-box-19").css("background-image", "");
        $(".working-with-account_19").css("background-image", "");
        $(".working-with-account_20").css("background-image", "");
        $(".working-with-account_22").css("background-image", "");
        $(".robot-page_21").css("background-image", "");
        $(".robot-page_23").css("background-image", "");
        $(".robot-page_24").css("background-image", "");
        $(".protect-data_23-background").css("background-image", "");
        $(".diagram-box_page-18").css("background-image", "");
        $(".diagram-box_page-19").css("background-image", "");
        $(".diagram-box_page-20").css("background-image", "");
        $(".diagram-box_page-21").css("background-image", "");
        $(".background-cs-6-3_24").css("background-image", "");
        $(".background-cs-6-3_25").css("background-image", "");
        $(".background-cs-6-3_26").css("background-image", "");
        $(".background-cs-6-3_27").css("background-image", "");
        

        if (document.getElementById("1_kompTeq")) {
          document.getElementById("1_kompTeq").src = "./img/slider/slide-illustration-c.svg";
        }
        if (document.getElementById("2_buneba")) {
          document.getElementById("2_buneba").src = "./img/slider/slide-illustration-n.svg";
        }
        if (document.getElementById("3_xelovneba")) {
          document.getElementById("3_xelovneba").src = "./img/slider/slide-illustration-a.svg";
        }
        if (document.getElementById("4_musika")) {
          document.getElementById("4_musika").src = "./img/slider/slide-illustration-m.svg";
        }

        //switchDarkIdShadow
        document.getElementById("switchDarkIdShadow").style.boxShadow = "1px 3px 6px #FADE7E";
        //nabiji
        for (let i = 0; i < nabiji.length; i++) {
          if (nabiji[i]) {
            nabiji[i].src = "../../img/icons/step_item.svg";
          }
        }

        //სარჩევი
        if (this.isActive && document.getElementById("mynetwork")) {
          init();
        }
      }
    },
  },
  template: `
    <div class="navbar navbar-expand-lg navbar-light bg-transparent">
        <a class="navbar-brand ml-auto header-logo">
            <img class="logo" src="" alt="logo">
        </a>
        <ul class="navbar-nav ml-auto">
         <li
          >
            <div>
            <label class="switchDark">
              <input id="switchDarkId" @click="myFunction()" type="checkbox" checked>
              <span id="switchDarkIdShadow" class="slider round" style="height: 31px;margin-top:7px"></span>
            </label>
            </div>
          </li>
          <!--ხმის ჩართვა/გამორთვა <li
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
            </div>-->
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
   </div> `,
});

//Vue.component('appInfo')

//section component სექციის კომპონენტი (გენერირდება დინამიურად)
Vue.component("appSection", {
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
    isInfo: {
      type: Boolean,
    },
  },
  data() {
    return {
      darkMode: false,
    };
  },
  watch: {
    isActive() {
      var theme = localStorage.getItem("theme");
      if (theme == "darck") {
        this.darkMode = true;
      } else {
        this.darkMode = false;
      }
    },
    isInfo() {
      var theme = localStorage.getItem('theme')
      if (theme == 'darck') {
        this.darkMode = true
      }
      else {
        this.darkMode = false
      }
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
                    <div v-if="isActive || isInfo"
                    :class="[
                      (isActive || isInfo) && darkMode? 'bg_menu new_btn-start_black_btn' : 'bg_menu',
                    ]"
                    ></div>

                    
                </transition>
            </div>
    `,
});

//bar component - კომპონენტების ბარი ნავიგაცია
Vue.component("appBar", {
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
    dots: {
      type: Array,
    },
    currentTab: {
      type: String,
    },
  },
  data() {
    return {
      // title is object
      darkMode: false,
    };
  },
  watch: {
    isActive() {
      var theme = localStorage.getItem("theme");
      if (theme == "darck") {
        this.darkMode = true;
      } else {
        this.darkMode = false;
      }
    },
  },
  template: `
        <transition
            enter-active-class="animated fadeInDown"
            leave-active-class="animated fadeOutUp"
            :duration="1000"
            mode="out-in">
                  <div v-if="isActive"
                  :class="[
                    isActive && darkMode? 'top-bar new_btn-start_black_btn' : 'top-bar',
                  ]">
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
    `,
});
// info seqciis გენერირება
Vue.component("appInfo", {
  props: {
    path: {
      type: String,
      required: true,
    },
    isInfo: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      currentPage: 1,
      darkMode: false,
    };
  },
  //dark_mode-თვის
  updated() {
    var theme = localStorage.getItem("theme");
    if (theme == "darck") {
      this.darkMode = true;
    } else {
      this.darkMode = false;
    }
  },
  created() {
    var theme = localStorage.getItem("theme");
    if (theme == "darck") {
      this.darkMode = true;
    } else {
      this.darkMode = false;
    }
  },
  watch: {
    isInfo() {
      var theme = localStorage.getItem("theme");
      if (theme == "darck") {
        this.darkMode = true;
      } else {
        this.darkMode = false;
      }
    },
  },
  template: `<div v-if="isInfo"
            :class="[
              isInfo && darkMode? 'row info-box new_btn-start_black_btn' : 'info-box',
            ]"
            >
                   <div class="col-12">
                        <transition
                            enter-active-class="animated fadeIn"
                            leave-active-class="animated fadeOut"
                            :duration="1000"
                            mode="out-in"
                            tag="div"
                            appear
                        >
                            <div class="row" v-if="currentPage === 1" :key="1">
                                <div class="col-9 m-auto">
                                     <p
                                      :class="[
                                      darkMode? 'pDarkMode dj-2_3vh newDesign_subject_question_item-title_black_P' : 'dj-2_3vh pDarkMode',
                                      ]">
                                     ვებგვერდზე განთავსებული დამხმარე ელექტრონული რესურსები შექმნილია I-VI კლასის სასკოლო პროგრამის შესაბამისად და ემსახურება სასწავლო პროცესში მოსწავლეთა ჩართულობის გაზრდას. ყოველი თემა მოიცავს რამდენიმე ნაბიჯსა და კომპლექსურ დავალებას.
                                     მოსწავლის მიზანია, ნაბიჯების გავლისას მოაგროვოს საკმარისი ცოდნა, რომელსაც გამოიყენებს საბოლოო, რამდენიმეკომპონენტიანი კომპლექსური დავალების შესასრულებლად.
                                     რესურსები მოიცავს სხვადასხვა თამაშსა და სახალისო აქტივობას. ვებგვერდზე ჩაშენებულია ჩეთბოტის ფანჯარა.
                                     მისი დახმარებით მოსწავლეებსა და მასწავლებლებს საშუალება აქვთ, გაესაუბრონ ხელოვნურ ინტელექტს, დასვან კითხვები რესურსების თემატიკაზე და მიიღონ პასუხები.</p>
                                     <p
                                     :class="[
                                      darkMode? 'pDarkMode dj-2_3vh newDesign_subject_question_item-title_black_P' : 'dj-2_3vh pDarkMode',
                                      ]">
                                     რესურსის სრულფასოვნად გამოყენებისთვის რეკომენდირებულია Google Chrome ან Microsoft Edge ბრაუზერებით სარგებლობა.
                                     </p>
                                </div>
                                <div class="col-10 m-auto">
                                    <h1
                                      :class="[
                                      darkMode? 'pDarkMode alk-san_2-6vh mt-5vh text-center newDesign_subject_question_item-title_black_P' : 'pDarkMode alk-san_2-6vh mt-5vh text-center',
                                      ]">
                                    ელექტრონული საგანმანათლებლო რესურსების ძირითადი კომპონენტები</h1>
                                </div>
                                <div class="col-11 m-auto">
                                     <div class="row mt-5vh">
                                         <div class="col-1">
                                             <div class="element-box">
                                                 <img :src="darkMode? path+'New-header-vue/header-img/step_dark.png': path+'New-header-vue/header-img/step.png'" alt="step" class="img-fluid">
                                             </div>
                                         </div>
                                         <div class="col-10">
                                             <p
                                              :class="[
                                              darkMode? 'pDarkMode dj-2_3vh newDesign_subject_question_item-title_black_P' : 'dj-2_3vh pDarkMode',
                                              ]"><span class="title-pink dj-2_3vh">
                                             ნაბიჯი</span> — შეადგენს ელექტრონული რესურსის ძირითად ნაწილს. ნაბიჯი მოიცავს მასალას, რომელიც კლასში მუშავდება,
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
                                                <img :src="darkMode? path+'New-header-vue/header-img/task_dark.png': path+'New-header-vue/header-img/task.png'" alt="task" class="img-fluid">
                                            </div>
                                         </div>
                                         <div class="col-10">
                                            <p
                                            :class="[
                                            darkMode? 'pDarkMode dj-2_3vh newDesign_subject_question_item-title_black_P' : 'dj-2_3vh pDarkMode',
                                            ]">
                                            <span class="title-pink dj-2_3vh">სავარჯიშო</span> — პატარა კომპიუტერული თამაში, რომელიც ერთი კონკრეტული ამოცანის ამოხსნაზე ან საკითხის შესწავლაზე არის ორიენტირებული.
                                            მაგალითად, შედგენილი ფერების შექმნა ძირითადი ფერებისგან. სავარჯიშო არის ელექტრონულად შესასრულებელი სამუშაო.</p>
                                         </div>
                                    </div>
                                </div>
                                <div class="col-11 m-auto">
                                    <div class="row mt-5vh">
                                         <div class="col-1">
                                            <div class="element-box">
                                                <img :src="darkMode? path+'New-header-vue/header-img/intermediate_dark.png': path+'New-header-vue/header-img/intermediate.png'" alt="task" class="img-fluid">
                                            </div>
                                         </div>
                                         <div class="col-10">
                                            <p
                                            :class="[
                                            darkMode? 'pDarkMode dj-2_3vh newDesign_subject_question_item-title_black_P' : 'dj-2_3vh pDarkMode',
                                            ]">
                                            <span class="title-pink dj-2_3vh">შუალედური დავალება</span> — მოყვება ნაბიჯს ან სავარჯიშოს. შუალედური დავალება ელექტრონულად შესასრულებელი სავარჯიშოსგან განსხვავებულია,
                                            გულისხმობს ღია ტიპის შეკითხვებს ან ისეთ აქტივობებს, რომლებიც არაელექტრონულ ფორმატში სრულდება.</p>
                                         </div>
                                    </div>
                                </div>
                                <div class="col-11 m-auto">
                                    <div class="row mt-5vh">
                                         <div class="col-1">
                                            <div class="element-box">
                                                <img :src="darkMode? path+'New-header-vue/header-img/hint_dark.png': path+'New-header-vue/header-img/hint.png'" alt="task" class="img-fluid">
                                            </div>
                                         </div>
                                         <div class="col-10">
                                            <p
                                            :class="[
                                            darkMode? 'pDarkMode dj-2_3vh newDesign_subject_question_item-title_black_P' : 'pDarkMode dj-2_3vh',
                                            ]">
                                            <span class="title-blue dj-2_3vh">მინიშნება</span> — ასრულებს ერთგვარი ინტერაქტიული ლექსიკონის ფუნქციას, რომელშიც ესა თუ ის საკითხი იქნება განმარტებული,
                                            მინიშნებული, მაგალითად, რომელია ძირითადი ფერები. სავარჯიშოსგან განსხვავებით აქ ბავშვი მხოლოდ ინფორმაციას მიიღებს.</p>
                                         </div>
                                    </div>
                                </div>
                                <div class="col-11 m-auto">
                                    <div class="row mt-5vh">
                                         <div class="col-1">
                                            <div class="element-box">
                                                <img :src="darkMode? path+'New-header-vue/header-img/compl-task_dark.png': path+'New-header-vue/header-img/compl-task.png'" alt="task" class="img-fluid">
                                            </div>
                                         </div>
                                         <div class="col-10">
                                            <p
                                            :class="[
                                            darkMode? 'pDarkMode dj-2_3vh newDesign_subject_question_item-title_black_P' : 'dj-2_3vh pDarkMode',
                                            ]">
                                            <span class="title-blue dj-2_3vh">კომპლექსური დავალება</span> — მოსდევს სხვა აქტივობებს და განთავსებულია ბოლოში. კომპლექსური დავალება არის რესურსის ძირითადი კომპონენტი,
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
                                            <p class="dj-2_3vh"><span class="title-blue dj-2_3vh">ვიდეო ინსტრუქცია</span><br/>
                                            <a
                                            :class="[
                                            darkMode? 'pDarkMode dj-2_3vh newDesign_subject_question_item-title_black_P' : 'dj-2_3vh pDarkMode',
                                            ]" href="https://youtu.be/7P4U16oh07Y" target="_blank">
                                            https://youtu.be/7P4U16oh07Y</a></p>
                                         </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row" id="authors" v-if="currentPage === 3">
                                <div class="col-12">
                                    <h1 class="author_title my-5">პროექტის შემქმნელები:</h1>
                                    <div class="row">
                                        <div class="col-12 mb-5">
                                            <div class="card author_section">
                                                <h2 class="card-header"><strong>იდეის ავტორი</strong> — სანდრო ასათიანი</h2>
                                            </div>
                                        </div>
                                        <div class="col-6 mb-5">
                                            <div class="card author_section">
                                                <h2 class="card-header"><strong>პროექტის კოორდინატორი </strong>— სალომე დაბრუნდაშვილი</h2>
                                                <div class="card-body">
                                                    <h3 class="card-title">რესურსის ავტორები:</h3>
                                                    <ul>
                                                        <li>კახა ჟღენტი (ბუნება; კომპიუტერული ტექნოლოგიები)</li>
                                                        <li>ბუბა ოჩიაური (ხელოვნება)</li>
                                                        <li>ეკა ცირგვავა (ხელოვნება)</li>
                                                        <li>დავით ზათიაშვილი (მუსიკა)</li>
                                                        <li>ნადია დაბრუნდაშვილი (კომპიუტერული ტექნოლოგიები)</li>
                                                        <li>მანანა ჯაყელი (კომპიუტერული ტექნოლოგიები)</li>
                                                        <li>მარი მელიქიშვილი (კომპიუტერული ტექნოლოგიები)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 mb-5">
                                            <div class="card author_section">
                                                <h2 class="card-header"><strong>დიზაინერთა ჯგუფის ხელმძღვანელი </strong>— ნინო თევდორაშვილი
                                                </h2>
                                                <div class="card-body">
                                                    <h3 class="card-title">დიზაინერები:</h3>
                                                    <ul>
                                                        <li>ლევან ლორთქიფანიძე</li>
                                                        <li>ანა ბაღდავაძე</li>
                                                        <li>ლუკა კახელი</li>
                                                        <li>ქრისტინა გვიჩიანი</li>
                                                        <li>გიორგი თავშავაძე</li>
                                                        <li>ნინი გელაშვილი</li>
                                                    </ul>
                                                    <h3>ილუსტრატორები:</h3>
                                                    <ul>
                                                        <li>მარიშა არაბული</li>
                                                        <li>მარიამ ამბოკაძე</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 mb-5">
                                            <div class="card author_section">
                                                <h2 class="card-header"><strong>პროგრამისტების ჯგუფის ხელმძღვანელი </strong>— ანანო ასპანიძე
                                                </h2>
                                                <div class="card-body">
                                                    <h3>პროგრამისტები:</h3>
                                                    <ul>
                                                        <li>ჯემალ თედიაშვილი</li>
                                                        <li>რომეო ხაზალია</li>
                                                        <li>ქეთი მოდებაძე</li>
                                                        <li>მეგი ახალკაცი</li>
                                                        <li>შოთა ზენაიშვილი</li>
                                                        <li>ირაკლი ლეკიშვილი</li>
                                                        <li>თინათინ აბესაძე</li>
                                                        <li>ნიკოლოზ ჭავჭანიძე</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 mb-5">
                                            <div class="card author_section">
                                                <h2 class="card-header"><strong>ნარატივ დიზაინის ჯგუფის ხელმძღვანელი </strong>— მარიამ
                                                    გოჩიაშვილი</h2>
                                                <div class="card-body">
                                                    <h3>ჩეთბოტების შემქმნელები:</h3>
                                                    <ul>
                                                        <li>თემურ ჩიჩუა</li>
                                                        <li>ზურა ჯიშკარიანი</li>
                                                        <li>დავით სამნიაშვილი</li>
                                                        <li>თამთა პაპუკაშვილი</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 mb-5">
                                            <div class="card author_section">
                                                <h2 class="card-header"><strong>პროექტის რედაქტორი </strong>— გიორგი ლომსაძე</h2>
                                                <div class="card-body">
                                                    <h3>საგნობრივი ექსპერტები:</h3>
                                                    <ul>
                                                        <li>ნინო ბუჩუკური (მუსიკა)</li>
                                                        <li>თამარ ხოსროშვილი (ხელოვნება)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition>
                   </div>
                   <div class="col-3 m-auto section_pagination">
                       <div class="d-flex justify-content-between align-items-center side-margin">
                           <div
                           :class="[
                            darkMode? 'pagination__prev__btn pagination_black' : 'pagination__prev__btn',
                           ]"
                           @click="currentPage--" v-if="currentPage !== 1">
                               <img alt="next" :src="path + '/img/icons/chevron-left-icon.svg'">
                           </div>
                           
                           <div @click="currentPage = 3" class="pagination__item d-flex justify-content-center align-items-center" v-if="currentPage === 3">
                              <div class="pagination__dot"></div>
                            </div>
                            <div @click="currentPage--" class="pagination__item d-flex justify-content-center align-items-center" v-if="currentPage > 1">
                               <div class="pagination__dot"></div>
                           </div>
                           <div class="flex align-items-center" id="pagination">
                               <div class="pagination__item"> 
                                   <div
                                    :class="[
                                      darkMode? 'current__pagination pagination_black' : 'current__pagination',
                                    ]">
                                   {{ currentPage }}</div>
                               </div>
                           </div>
                           <div @click="currentPage++" class="pagination__item d-flex justify-content-center align-items-center" v-if="currentPage < 3">
                               <div class="pagination__dot"></div>
                           </div>
                           <div @click="currentPage = 1" class="pagination__item d-flex justify-content-center align-items-center" v-if="currentPage === 1">
                               <div class="pagination__dot"></div>
                           </div>
                           
                           <div
                           :class="[
                            darkMode? 'pagination__next__btn pagination_black' : 'pagination__next__btn',
                           ]"
                           @click="currentPage++" v-if="currentPage !== 3">
                               <img alt="next" :src="path + 'img/icons/chevron-left-icon.svg'">
                           </div>
                       </div>
                   </div>
               </div>`,
});
//appStart საგნების ასარჩევი კომპონენტი
Vue.component("appStart", {
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
    trigger: {
      type: Function,
      required: true,
    },
    tabClass: String,
    images: Object,
  },
  data() {
    return {
      // title is object
      darkMode: false,
    };
  },
  created() {
    var theme = localStorage.getItem("theme");
    if (theme == "darck") {
      this.darkMode = true;
    } else {
      this.darkMode = false;
    }
  },
  watch: {
    isActive() {
      var theme = localStorage.getItem("theme");
      if (theme == "darck") {
        this.darkMode = true;
      } else {
        this.darkMode = false;
      }
    },
  },
  template: `
        <transition
            enter-active-class="animated slideInUp"
            leave-active-class="animated slideOutDown"
            :duration="1000"
            mode="out-in"
            appear>
                <div v-if="isActive" class="page-section"
                :class="[
                  isActive && darkMode? 'app-start new_btn-start_black_btn' : 'app-start',
                ]">
                    <div class="main-lesson-start-cont-row">
                        <div class="main-lesson-start-cont">
                          <img alt="music" :src="images.music" class="main-lesson-start-img" />
                          <div class="new_btn-start-cont ">
                            <a @click="trigger('select', 'მუსიკა')"
                            :class="[
                              isActive && darkMode? 'new_btn-start new_btn-start_black_btn' : 'new_btn-start',
                            ]"
                            >მუსიკა</a>
                          </div>
                        </div>
                        <div class="main-lesson-start-cont">
                          <img alt="art" :src="images.art" class="main-lesson-start-img" />
                          <div class="new_btn-start-cont">
                            <a @click="trigger('select', 'ხელოვნება')"
                            :class="[
                              isActive && darkMode? 'new_btn-start new_btn-start_black_btn' : 'new_btn-start',
                            ]"
                            >ხელოვნება</a>
                          </div>
                        </div>
                        <div class="main-lesson-start-cont">
                          <img alt="nature" :src="images.nature" class="main-lesson-start-img" />
                          <div class="new_btn-start-cont">
                            <a @click="trigger('select', 'ბუნება')"
                            :class="[
                              isActive && darkMode? 'new_btn-start new_btn-start_black_btn' : 'new_btn-start',
                            ]"
                            >ბუნება</a>
                          </div>
                        </div>
                        <div class="main-lesson-start-cont">
                          <img alt="computer" :src="images.IT" class="main-lesson-start-img" />
                          <div class="new_btn-start-cont">
                            <a @click="trigger('select', 'კომპიუტერული ტექნოლოგიები')"
                            :class="[
                              isActive && darkMode? 'new_btn-start new_btn-start_black_btn' : 'new_btn-start',
                            ]"
                            >კომპიუტერული ტექნოლოგიები</a>
                          </div>
                        </div>
                     </div>
                </div>
        </transition>
    `,
});

// appSelect component  გაკვეთილების ასარჩევი კომპონენტო
Vue.component("appSelect", {
  props: {
    tabClass: String,
    activeClass: String,
    images: Object,
    path: String,
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      darkMode: false,
      // title is object
      class: title,
      classID: 2,
      activeItem: 1,
      pagination: true,
      currentPage: 1,
      pageSize: 12,
      isPagination: false,
    };
  },
  computed: {
    titleCheck() {
      if (this.activeClass === "მუსიკა") {
        return this.class.music;
      } else if (this.activeClass === "ხელოვნება") {
        return this.class.art;
      } else if (this.activeClass === "ბუნება") {
        return this.class.nature;
      } else {
        if (
          this.classID === 5 ||
          this.classID === 6 ||
          this.classID === 4 ||
          this.classID === 3
        ) {
          this.isPagination = true;

          if (this.currentPage < 1) {
            this.currentPage = 1;
          } else if (this.currentPage > this.totalPages) {
            this.currentPage = this.totalPages;
          }

          let startIndex = (this.currentPage - 1) * this.pageSize;
          let endIndex = Math.min(startIndex + this.pageSize, this.totalItems);

          return this.class["IT_" + this.classID].slice(startIndex, endIndex);
        }
        // 5-6 კლასების გარდა დაბრუნდეს ჩვეულებრივად სრული სიგრძის მასივი
        else {
          return this.class["IT_" + this.classID];
        }
      }
    },
    artImage() {
      if (this.activeClass === "მუსიკა") {
        return this.images.music;
      } else if (this.activeClass === "ხელოვნება") {
        return this.images.art;
      } else if (this.activeClass === "ბუნება") {
        return this.images.nature;
      }
    },
    // 1-12 გაკვეთილი <---> 12-24 გაკვეთილის და გადასაცვლელი ლურჯი ღილაკის გვერდის რენტერინგი
    totalPages() {
      return Math.ceil(this.class["IT_" + this.classID].length / this.pageSize);
    },
    totalItems() {
      return this.class["IT_" + this.classID].length;
    },
  },
  methods: {
    classChoose(val) {
      this.classID = val;
      this.currentPage = 1;
      this.activeItem = val - 1;
      this.pagination = true;
    },
  },
  created() {
    var theme = localStorage.getItem("theme");
    if (theme == "darck") {
      this.darkMode = true;
    } else {
      this.darkMode = false;
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
            <div v-if="isActive" class="page-section"
                :class="[
                  isActive && darkMode? 'app-select new_btn-start_black_btn' : 'app-select',
                ]">
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
                                             <div v-if="number !== activeItem" key="pink"
                                             :class="[
                                              isActive && darkMode? 'circles_number-pink new_btn-start_black_btn' : 'circles_number-pink',
                                              ]">
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
                            <div v-if="isPagination" class="class-pagination d-flex justify-content-center align-items-center">
                                <div v-if="currentPage !== 1" @click="currentPage--" class="prev arrow-left-open"></div>
                                <div @click="currentPage = item" v-for="item in totalPages" :key="item" :class="[item === currentPage ? 'current' : 'dot' || darkMode? 'dot dot_black' : 'dot']">
                                    <p>{{ item }}</p>
                                </div>
                                <div v-if="currentPage !== totalPages" @click="currentPage++" class="next arrow-right-open"></div>
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
        `,
});

// appLinks ნავიგაცია კომპონენტების 'რუკით'
Vue.component("appLinks", {
  props: {
    tabClass: String,
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      activeClass: {
        title: "",
        class: "",
      },
      itClass: "",
      activeTitle: "",
    };
  },
  async mounted() {
    const data = await $.getJSON("data.json");
    let classId = parseInt(data.lesson_id);
    let Url = window.location.href.toLowerCase();
    if (Url.includes("art-class")) {
      this.activeClass.title = "ხელოვნება";
      this.activeClass.class = "art";
    } else if (Url.includes("nature-class")) {
      this.activeClass.title = "ბუნება";
      this.activeClass.class = "nature";
    } else if (Url.includes("music-class")) {
      this.activeClass.title = "მუსიკა";
      this.activeClass.class = "music";
    } else {
      this.activeClass.title = "კომპიუტერული მეცნიერებები";
      this.activeClass.class = "IT";
      if (Url.includes("class-2")) this.itClass = "2";
      if (Url.includes("class-3")) this.itClass = "3";
      if (Url.includes("class-4")) this.itClass = "4";
      if (Url.includes("class-5")) this.itClass = "5";
      if (Url.includes("class-6")) this.itClass = "6";
    }

    let classList;
    if (this.activeClass.class !== "IT") {
      classList = title[this.activeClass.class];
    } else {
      classList = title[this.activeClass.class + "_" + this.itClass];
    }

    const activeClassData = classList.filter(
      (classList) => classList.id === classId
    );

    this.activeTitle = activeClassData[0].name;
    // ჯეისონიდან განსხვავებული ტიპების ამოღება
    this.dataTypes = [...new Set(data.pages.map((item) => item.type))].filter(
      (x) => x !== null 
    );

    var theme = localStorage.getItem("theme");
    if (theme == "darck") {
      initDark();
    } else {
      init();
    }
    // init();
  },
  computed: {
    itClassText() {
      if (this.itClass !== "") return this.itClass + " კლასი > ";
    },
  },
  updated() {
    var theme = localStorage.getItem("theme");
    if (theme == "darck") {
      initDark();
    } else {
      init();
    }
    // init();
  },
  template: `
        <div>
        <transition
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
              :duration="500"
              mode="out-in"
              appear>
              <p v-if="isActive" key="title"  class="app-select_title mt-3vh">{{ activeClass.title  }} > {{itClassText}}<span>{{activeTitle}}</span></p>
          </transition>
          <transition
              enter-active-class="animated slideInUp"
              leave-active-class="animated slideOutDown"
              :duration="1000"
              mode="out-in"
              appear>
              <div v-if="isActive" :class="'app-links'" class="page-section">
                  <div id="mynetwork" ref="vis"></div>
              </div>
          </transition>
        </div>
        `,
});

// appSections ნავიგაცია კომპონენტების ღილაკებით
Vue.component("appSections", {
  props: {
    tabClass: String,
    isActive: {
      type: Boolean,
      required: true,
    },
    images: Object,
  },
  data() {
    return {
      darkMode: false,
      activeClass: {
        title: "",
        class: "",
      },
      itClass: "",
      activeTitle: "",
      fullData: null,
      isTypes: true,
      dataTypes: [],
      dataByType: [],
      typeInfo: {
        1: {
          id: "nabijiType",
          text: "ნაბიჯი",
          img: "../../img/icons/davalebebi/nabiji-white.svg",
        },
        2: {
          id: "savarjishoType",
          text: "სავარჯიშო",
          img: "../../img/icons/davalebebi/savarjisho-white.svg",
        },
        3: {
          id: "minishnebaType",
          text: "მინიშნება",
          img: "../../img/icons/davalebebi/minishneba-white.svg",
        },
        4: {
          id: "shualeduriType",
          text: "შუალედური დავალება",
          img: "../../img/icons/davalebebi/shualeduri-white.svg",
        },
        5: {
          id: "kompleqsuriType",
          text: "კომპლექსური დავალება",
          img: "../../img/icons/davalebebi/kompleqsuri-white.svg",
        },
      },
    };
  },
  async mounted() {
    const data = await $.getJSON("data.json");
    this.fullData = data;
    let classId = parseInt(data.lesson_id);
    let Url = window.location.href.toLowerCase();
    if (Url.includes("art-class")) {
      this.activeClass.title = "ხელოვნება";
      this.activeClass.class = "art";
    } else if (Url.includes("nature-class")) {
      this.activeClass.title = "ბუნება";
      this.activeClass.class = "nature";
    } else if (Url.includes("music-class")) {
      this.activeClass.title = "მუსიკა";
      this.activeClass.class = "music";
    } else {
      this.activeClass.title = "კომპიუტერული მეცნიერებები";
      this.activeClass.class = "IT";
      if (Url.includes("class-2")) this.itClass = "2";
      if (Url.includes("class-3")) this.itClass = "3";
      if (Url.includes("class-4")) this.itClass = "4";
      if (Url.includes("class-5")) this.itClass = "5";
      if (Url.includes("class-6")) this.itClass = "6";
    }

    let classList;
    if (this.activeClass.class !== "IT") {
      classList = title[this.activeClass.class];
    } else {
      classList = title[this.activeClass.class + "_" + this.itClass];
    }
    console.log(classId);
    const activeClassData = classList.filter(
      (classList) => classList.id === classId
    );

    this.activeTitle = activeClassData[0].name;

    // ჯეისონიდან განსხვავებული ტიპების ამოღება
    this.dataTypes = [...new Set(data.pages.map((item) => item.type))].filter(
      (x) => x !== null && !x.ignore
    );
  },
  created() {
    var theme = localStorage.getItem("theme");
    if (theme == "darck") {
      this.typeInfo[1].img = "../../img/icons/davalebebi/nabiji-whiteDark.svg";
      this.typeInfo[2].img =
        "../../img/icons/davalebebi/savarjisho-whiteDark.svg";
      this.typeInfo[3].img =
        "../../img/icons/davalebebi/minishneba-whiteDark.svg";
      this.typeInfo[4].img =
        "../../img/icons/davalebebi/shualeduri-whiteDark.svg";
      this.typeInfo[5].img =
        "../../img/icons/davalebebi/kompleqsuri-whiteDark.svg";

      this.darkMode = true;
    } else {
      this.darkMode = false;
    }
  },
  watch: {
    isTypes(newValue, oldValue) {
      if (this.isTypes) {
        // თუ უკან დაბრუნებას დააჭირა გაწმინდოს მსავასი ტიპების მასივი
        this.dataByType = [];
      }
    },
    isActive() {
      var theme = localStorage.getItem("theme");
      if (theme == "darck") {
        this.darkMode = true;
      } else {
        this.darkMode = false;
      }
    },
  },
  computed: {
    itClassText() {
      if (this.itClass !== "") return this.itClass + " კლასი > ";
    },
    typeIteration() {
      if (this.isTypes) {
        return this.dataTypes;
      } else {
        return this.dataByType;
      }
    },
  },
  methods: {
    getSimilarTypes(type) {
      // მსგავსი ტიპების ამოზება ჯეისონ ფაილიდან
      var theme = localStorage.getItem("theme");
      if (theme == "darck") {
        this.typeInfo[1].img =
          "../../img/icons/davalebebi/nabiji-whiteDark.svg";
        this.typeInfo[2].img =
          "../../img/icons/davalebebi/savarjisho-whiteDark.svg";
        this.typeInfo[3].img =
          "../../img/icons/davalebebi/minishneba-whiteDark.svg";
        this.typeInfo[4].img =
          "../../img/icons/davalebebi/shualeduri-whiteDark.svg";
        this.typeInfo[5].img =
          "../../img/icons/davalebebi/kompleqsuri-whiteDark.svg";
        this.darkMode = true;
      } else {
        this.darkMode = false;
      }
      let data = this.fullData.pages.filter((item) => item.type === type);

      if (type === 5 || type === 3) {
        data.some((a, i, aa) => {
          if (i !== 0) {
            if (aa[i - 1].number + 1 !== a.number) {
              this.dataByType.push(a);
            }
          } else {
            this.dataByType.push(a);
          }
        });
      } else {
        this.dataByType = data;
      }

      this.isTypes = false;
    },
    goToPage(page) {
      window.location = page + ".html";
    },
  },
  template: `
        <transition
            enter-active-class="animated slideInUp"
            leave-active-class="animated slideOutDown"
            :duration="1000"
            mode="out-in"
            appear>
            <div v-if="isActive" class="page-section"
                :class="[
                  isActive && darkMode? 'app-sections new_btn-start_black_btn' : 'app-sections',
                ]">
                <transition
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut"
                  :duration="500"
                  mode="out-in"
                  appear>
                  <p v-if="isTypes" key="title"  class="app-select_title">{{ activeClass.title  }} > {{itClassText}}<span>{{activeTitle}}</span></p>
                  <p v-else key="back"  class="app-select_title app-select_title-pointer" @click="isTypes = !isTypes">< უკან</p>
                </transition>
                <transition
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated slideOutDown"
                  :duration="500"
                  mode="out-in"
                  appear>
                    <div id="tableOfContentTwo" class="d-flex" v-if="isTypes" key="5">
                      <div class="appendChild--div" v-for="item in typeIteration" :key="item" @click="getSimilarTypes(item)">
                        <img :id='typeInfo[item].id' class="appendChild--img" :src="typeInfo[item].img"/>
                        <span>{{typeInfo[item].text}}</span>
                      </div>
                    </div>
                    <div id="tableOfContentTwo" class="tableOfContentTwo-scroll" v-else key="4">
                      <div class="appendChild--div" v-for="(item, index) in dataByType" :key="index" @click="goToPage(item.number)">
                      <img class="appendChild--img" :src="typeInfo[item.type].img"/>
                      <span>{{typeInfo[item.type].text}} {{index + 1 }}</span>
                      </div>
                    </div>
                </transition>
            </div>
        </transition>
        `,
});

//Vue declaration
var app = new Vue({
  el: "#app",
  data: {
    isActive: false,
    link: "start",
    path: "",
    images: {
      IT: "New-header-vue/header-img/arts/IT-artwork.svg",
      art: "New-header-vue/header-img/arts/art-artwork.svg",
      nature: "New-header-vue/header-img/arts/nature-artwork.svg",
      music: "New-header-vue/header-img/arts/music-artwork.svg",
    },
    dots: [
      {
        name: "start",
        id: 0,
        disable: false,
        classActive: true,
      },
      {
        name: "select",
        id: 1,
        disable: true,
        classActive: false,
      },
      {
        name: "links",
        id: 2,
        disable: true,
        classActive: false,
      },
      {
        name: "sections",
        id: 3,
        disable: true,
        classActive: false,
      },
    ],
    activeClass: "",
    isInfo: false,
  },
  //trigger menu button & menu panels
  methods: {
    toggle() {
      this.isActive = !this.isActive;
      this.dots.forEach((dot) => {
        if (dot.id === 0 && !this.isActive) {
          dot.disable = false;
          dot.classActive = true;

          this.link = "start";
          this.activeClass = "";
          this.isInfo = false;
        }
        if (dot.id === 1 && !this.isActive) {
          dot.disable = true;
          dot.classActive = false;
        }
        if (!index && dot.id == 2) {
          dot.disable = false;
          dot.classActive = false;

          this.link = "links";
          this.activeClass = "";
          this.isInfo = false;
        }
        if (!index && dot.id == 3) {
          dot.disable = false;
          dot.classActive = false;
        }
      });
    },
    info() {
      this.isInfo = !this.isInfo;
      this.link = "info";
      this.isActive = false;
    },

    /*
          -- გაკვეთილების სექციის ჩატვირთვა data(დაგაეცემა, თემები: ხელ. მუს. ბუნ. კომპ.)
          -- this.link ააქტიურებს დინამიური კომპონენტების ჩამტვირთველ კომპონენტს
          -- გახდეს აქტიური შესაბამისი dot
        */
    trigger(val, data) {
      this.activeClass = data;
      this.link = "select";
      this.dots.forEach((dot) => {
        if (dot.name === val) {
          dot.disable = false;
          dot.classActive = true;
        } else {
          dot.classActive = false;
        }
      });
    },
  },
  computed: {
    // აგენერირებს პომპონენტებს დინამიურად
    currentTabComponent() {
      this.dots.forEach((dot) => {
        dot.classActive = dot.name === this.link.toLowerCase();
      });
      return "app-" + this.link.toLowerCase();
    },
  },
});

//ვუს ცვლადების შეცვლა სლაიდერზე კლიკისას
function startPage(val) {
  app.$data.link = "select"; // ააქტიურებს შესაბამის კომპონენტს
  app.$data.isActive = true; // ააქტიურებს მენიუს
  app.$data.activeClass = val; // გადაეცემა საგნების სახელები (ბუნება, ხელოვნება, მუსიკა, კომპ.)
}

// გაკვეთილიების სათაურები
let title = {
  music: [
    {
      id: 1,
      name: "ქალაქისა და სოფლის ხმები",
      link: "Music-Class/voices-1/1.html",
    },
    {
      id: 2,
      name: "ქალაქის ხმები",
      link: "Music-Class/city-voices-2/1.html",
    },
    {
      id: 3,
      name: "გავიგნოთ გზა ხმებით",
      link: "Music-Class/findWayBySound-3/1.html",
    },
    {
      id: 4,
      name: "ვსეირნობთ მუსიკალურ ქალაქში",
      link: "Music-Class/Walk-in-the-city-4/1.html",
    },
    {
      id: 5,
      name: "ჩემი ცხოვრების ერთი დღე",
      link: "Music-Class/One-day-5/1.html",
    },
    {
      id: 6,
      name: "შევქმნათ ხმაურისგან მუსიკა",
      link: "Music-Class/Create-music-from-noise-6/1.html",
    },
    {
      id: 7,
      name: "შევქმნათ გადაცემის ქუდი",
      link: "Music-Class/Create-broadcast-hat-7/1.html",
    },
    {
      id: 8,
      name: "შევქმნათ გადაცემის აუდიო ანონსი",
      link: "Music-Class/Create-broadcast-audio-8/1.html",
    },
    {
      id: 9,
      name: "გამოვიყენოთ მუსიკა თამაშისთვის",
      link: "Music-Class/Game-music-9/1.html",
    },
    {
      id: 10,
      name: "შევარჩიოთ ფონური მუსიკა",
      link: "Music-Class/Choose-background-music-10/1.html",
    },
    {
      id: 11,
      name: "მუსიკა ანიმაციასა და საყმაწვილო კინოში",
      link: "Music-Class/Music-in-animation-and-cinema-11/1.html",
    },
    {
      id: 12,
      name: " შევქმნათ საუნდტრეკი ანიმაციური ფილმისთვის",
      link: "Music-Class/Create-animation-sountrack-12/1.html",
    },
  ],
  art: [
    {
      id: 1,
      name: "ფერებით მოთხრობილი ამბავი",
      link: "Art-Class/color_story/1.html",
    },
    {
      id: 2,
      name: "მშვიდი და ბობოქარი",
      link: "Art-Class/Calm_&_stormy/1.html",
    },
    {
      id: 3,
      name: "ტყე",
      link: "Art-Class/Forest/1.html",
    },
    {
      id: 4,
      name: "ჯადოსნური ქვეყანა",
      link: "Art-Class/Magic-world/1.html",
    },
    {
      id: 5,
      name: "თავგადასავალი",
      link: "Art-Class/Adventure/1.html",
    },
    {
      id: 6,
      name: "პეიზაჟი",
      link: "Art-Class/Landscape-6/1.html",
    },
    {
      id: 7,
      name: "ქალაქი",
      link: "Art-Class/City-07/1.html",
    },
    {
      id: 8,
      name: 'პლაკატი "გადავარჩინოთ ბუნება"',
      link: "Art-Class/rescue_nature_08/1.html",
    },
    {
      id: 9,
      name: "მე და ჩემი მეგობრები",
      link: "Art-Class/friends_09/1.html",
    },
    {
      id: 10,
      name: "ჩვეულებრივი და არაჩვეულებრივი ნივთები",
      link: "Art-Class/items-10/1.html",
    },
    {
      id: 11,
      name: "ყოველდღიური ამბები",
      link: "Art-Class/daily-news-11/1.html",
    },
    {
      id: 12,
      name: "ვირტუალური გამოფენა",
      link: "Art-Class/VR_exhibition/1.html",
    },
  ],
  nature: [
    {
      id: 1,
      name: "საშიში სათამაშოები",
      link: "Nature-Class/dangerous-toys/1.html",
    },
    {
      id: 2,
      name: "უხილავი ძალები",
      link: "Nature-Class/invisible_forces/1.html",
    },
    {
      id: 3,
      name: "რატომ იცვალა ტყემ ფერი?",
      link: "Nature-Class/Forest-colors/1.html",
    },
    {
      id: 4,
      name: "რატომ მოიწყინა ჩემმა ყვავილმა",
      link: "Nature-Class/The-living-world-4/1.html",
    },
    {
      id: 5,
      name: "სად დაიმალა მზე?",
      link: "Nature-Class/Where-sun-goes/1.html",
    },
    {
      id: 6,
      name: "შეიძლება ზაფხული ზამთარში იყოს?",
      link: "Nature-Class/Summer-in-winter/1.html",
    },
    {
      id: 7,
      name: "რატომ არის ბრუცა ბრმა?",
      link: "Nature-Class/Bruca-07/1.html",
    },
    {
      id: 8,
      name: "თეთრი - ვარდისფერი ფლამინგო",
      link: "Nature-Class/flamingo-08/1.html",
    },
    {
      id: 9,
      name: "დედამიწის გარშემო 80 დღეზე სწრაფად",
      link: "Nature-Class/around-world-09/1.html",
    },
    {
      id: 10,
      name: "რატომ არის ანას ქურთუკი ძალიან თბილი?",
      link: "Nature-Class/coat-10/1.html",
    },
    {
      id: 11,
      name: "როგორ ვაჯობოთ ბიჭებს „შერკინებაში?”",
      link: "Nature-Class/sport/1.html",
    },
    {
      id: 12,
      name: "გვინდა თოვლი დაბადების დღეზე!",
      link: "Nature-Class/snow-12/1.html",
    },
  ],
  IT_2: [
    {
      id: 1,
      name: "პირობითი ნიშნების ენა",
      link: "Computer-Science/Class-2/conditional-signs-1/1.html",
    },
    {
      id: 2,
      name: "პირობითი ნიშნები ჩვენ ირგვლივ",
      link: "Computer-Science/Class-2/marks-2/1.html",
    },
    {
      id: 3,
      name: "ნაწილი და მთელი",
      link: "Computer-Science/Class-2/part&whole-3/1.html",
    },
    {
      id: 4,
      name: ",,ციკლები” ჩვენს ცხოვრებაში",
      link: "Computer-Science/Class-2/cycle-4/1.html",
    },
    {
      id: 5,
      name: "ციკლების შექმნა ",
      link: "Computer-Science/Class-2/Creating-cycles-5/1.html",
    },
    {
      id: 6,
      name: "მომხმარებლის გრაფიკული ინტერფეისი",
      link: "Computer-Science/Class-2/user-interface-6/1.html",
    },
    {
      id: 7,
      name: "კომპიუტერისა და პროგრამების მართვა",
      link: "Computer-Science/Class-2/programs-management-7/1.html",
    },
    {
      id: 8,
      name: "კომპიუტერული პროგრამებით დავალების შესრულება",
      link: "Computer-Science/Class-2/programing-8/1.html",
    },
    {
      id: 9,
      name: "კომპიუტერული ტექნოლოგიების გამოყენების იდენტიფიცირება",
      link: "Computer-Science/Class-2/Identify-with-computer-9/1.html",
    },
    {
      id: 10,
      name: "რა არის ქსელი და როგორ ვერთიანდებით ჩვენ მასში",
      link: "Computer-Science/Class-2/network-10/1.html",
    },
    {
      id: 11,
      name: "ინფორმაციის შენახვა ფიზიკურ გარემოში",
      link: "Computer-Science/Class-2/Storing-information-11/1.html",
    },
    {
      id: 12,
      name: "საკუთარ ანგარიშში მუშაობა",
      link: "Computer-Science/Class-2/working-with-account-12/1.html",
    },
  ],
  IT_3: [
    {
      id: 1,
      name: "კომპიუტერის შექმნისა და განვითარების მოკლე ისტორია",
      link: "Computer-Science/Class-3/computer-development-1/1.html",
    },
    {
      id: 2,
      name: "კომპიუტერის დამატებითი და ძირითადი მოწყობილობები",
      link: "Computer-Science/Class-3/computer-equipment-2/1.html",
    },
    {
      id: 3,
      name: "როგორ მუშაობს კომპიუტერი",
      link: "Computer-Science/Class-3/How-computer-works-3/1.html",
    },
    {
      id: 4,
      name: "ალგორითმი და ალგორითმის შემუშავება",
      link: "Computer-Science/Class-3/algorithmes-4/1.html",
    },
    {
      id: 5,
      name: "რა არის პროგრამული ენა",
      link: "Computer-Science/Class-3/programming-language-5/1.html",
    },
    {
      id: 6,
      name: "ვიზუალური კომუნიკაციის ენა",
      link: "Computer-Science/Class-3/Visual-Communication-6/1.html",
    },
    {
      id: 7,
      name: "გავეცნოთ ვიზუალურ პროგრამირებას",
      link: "Computer-Science/Class-3/Visual-programing-7/1.html",
    },
    {
      id: 8,
      name: "როგორ მუშაობს ინტერნეტი",
      link: "Computer-Science/Class-3/internet-8/1.html",
    },
    {
      id: 9,
      name: "რა არის საძიებო სისტემა და  როგორ გამოვიყენოთ იგი",
      link: "Computer-Science/Class-3/search-engine-9/1.html",
    },
    {
      id: 10,
      name: "ღრუბლოვანი სერვისები",
      link: "Computer-Science/Class-3/Cloud-services-10/1.html",
    },
    {
      id: 11,
      name: "პრეზენტაციის შექმნა (Ms PowerPoint)",
      link: "Computer-Science/Class-3/Presentation-11/1.html",
    },
    {
      id: 12,
      name: "საკუთარი Office 365-ის ანგარიშის მართვა",
      link: "Computer-Science/Class-3/managing-office365-12/1.html",
    },
    {
      id: 13,
      name: "გაქვს სახლში რობოტი?",
      link: "Computer-Science/Class-3/Do-you-have-robot-13/1.html",
    },
    {
      id: 14,
      name: "ბინარული სამაჯურის საიდუმლო",
      link: "Computer-Science/Class-3/Mystery-of-binary-bracelet-14/1.html",
    },
    {
      id: 15,
      name: "ჩემი პირველი გმირების ისტორია",
      link: "Computer-Science/Class-3/First-heroes-15/1.html",
    },
    {
      id: 16,
      name: "როგორ იქცევა ჩემი მეგობარი რობოტი",
      link: "Computer-Science/Class-3/How-my-robot-acts-16/1.html",
    },
  ],
  IT_4: [
    {
      id: 1,
      name: "მარტივი ელექტრო მოწყობილობის გამართვა",
      link: "Computer-Science/Class-4/Maintain-electronic-device-1/1.html",
    },
    {
      id: 2,
      name: "შეცდომები პროგრამირებაში",
      link: "Computer-Science/Class-4/programing-mistakes-2/1.html",
    },
    {
      id: 3,
      name: "პროგრამის ქცევის პროგნოზირება",
      link: "Computer-Science/Class-4/Predicting-behavior-3/1.html",
    },
    {
      id: 4,
      name: "პროგრამის შექმნის პროცესის გააზრება",
      link: "Computer-Science/Class-4/Creating-program-4/1.html",
    },
    {
      id: 5,
      name: "მომხმარებლის გრაფიკული ინტერფეისი",
      link: "Computer-Science/Class-4/UI-5/1.html",
    },
    {
      id: 6,
      name: "ღრუბლოვანი სერვისების სათანადოდ გამოყენება",
      link: "Computer-Science/Class-4/Cloud-services-6/1.html",
    },
    {
      id: 7,
      name: "ტექსტური რედაქტორი და მისი ძირითადი ინსტრუმენტები",
      link: "Computer-Science/Class-4/Text-editor-&-tools-7/1.html",
    },
    {
      id: 8,
      name: "ტექსტის სწორება (Ms Word)",
      link: "Computer-Science/Class-4/correcting-text-8/1.html",
    },
    {
      id: 9,
      name: "შაბლონი და ცხრილი",
      link: "Computer-Science/Class-4/template-and-table-9/1.html",
    },
    {
      id: 10,
      name: "ტექსტური რედაქტორის გამოყენება ყოველდღიურ ცხოვრებაში",
      link: "Computer-Science/Class-4/text-editor-10/1.html",
    },
    {
      id: 11,
      name: "ელექტრონული ფოსტის გადაგზავნა, მიღება",
      link: "Computer-Science/Class-4/Sending-email-11/1.html",
    },
    {
      id: 12,
      name: "რა არის ინფორმაცია",
      link: "Computer-Science/Class-4/What-is-information-12/1.html",
    },
    {
      id: 13,
      name: "როგორ შევქმნათ ელექტრონული წიგნები და ბროშურები Ms Word-ში",
      link: "Computer-Science/Class-4/Books-and-brochures-13/1.html",
    },
    {
      id: 14,
      name: "ჯგუფური მუშაობა ღრუბლოვან სერვისებში",
      link: "Computer-Science/Class-4/Group-work-14/1.html",
    },
    {
      id: 15,
      name: "გასეირნება ინტერნეტში",
      link: "Computer-Science/Class-4/Walking-in-internet-15/1.html",
    },
    {
      id: 16,
      name: "როგორ გავაფორმოთ ტექსტურ რედაქტორ Ms Word-ში დაწერილი ტექსტი",
      link: "Computer-Science/Class-4/How-to-form-text-16/1.html",
    },
  ],
  IT_5: [
    {
      id: 1,
      name: "პირობითი ნიშნები კომპიუტერულ პროგრამებში",
      link: "Computer-Science/Class-5/conditional-marks-1/1.html",
    },
    {
      id: 2,
      name: "ჩემი პირველი რობოტი",
      link: "Computer-Science/Class-5/My-first-robot-2/1.html",
    },
    {
      id: 3,
      name: "რა არის კომპიუტერული პროგრამა",
      link: "Computer-Science/Class-5/What-is-program-3/1.html",
    },
    {
      id: 4,
      name: "ობიექტის გადაადგილება ვიზუალური კოდის საშუალებით",
      link: "Computer-Science/Class-5/objects-moving-4/1.html",
    },
    {
      id: 5,
      name: "ფუნქცია",
      link: "Computer-Science/Class-5/function-5/1.html",
    },
    {
      id: 6,
      name: "პარალელური პროგრამირება",
      link: "Computer-Science/Class-5/parallel-programming-6/1.html",
    },
    {
      id: 7,
      name: "უსასრულო ციკლები",
      link: "Computer-Science/Class-5/Infinite-cycles-7/1.html",
    },
    {
      id: 8,
      name: "სასრულო ციკლები",
      link: "Computer-Science/Class-5/Cycles-8/1.html",
    },
    {
      id: 9,
      name: "პირობითი ოპერატორები",
      link: "Computer-Science/Class-5/conditional-operators-9/1.html",
    },
    {
      id: 10,
      name: "ობიექტები",
      link: "Computer-Science/Class-5/objects-10/1.html",
    },
    {
      id: 11,
      name: "ინფორმაციის დამახსოვრება",
      link: "Computer-Science/Class-5/Remember-information-11/1.html",
    },
    {
      id: 12,
      name: "სხვადასხვა კომპიუტერული მოწყობილობის ინტერფეისი",
      link: "Computer-Science/Class-5/interface-of-devices-12/1.html",
    },
    {
      id: 13,
      name: "კონტენტი და მისი დახარისხების მეთოდები",
      link: "Computer-Science/Class-5/Sorting-methods-13/1.html",
    },
    {
      id: 14,
      name: "ინფორმაციის ცხრილში აღრიცხვა",
      link: "Computer-Science/Class-5/Information-in-the-table-14/1.html",
    },
    {
      id: 15,
      name: "ცხრილებთან მუშაობა",
      link: "Computer-Science/Class-5/Working-with-tables-15/1.html",
    },
    {
      id: 16,
      name: "ელექტრონულ ცხრილებში მონაცემების შეტანა",
      link: "Computer-Science/Class-5/Enter-table-data-16/1.html",
    },
    {
      id: 17,
      name: "მაგალითები და ფორმულები ელექტრონულ სივრცეში",
      link: "Computer-Science/Class-5/Examples-and-formulas-17/1.html",
    },
    {
      id: 18,
      name: "დიაგრამა ელოქტრონულ ცხრილში",
      link: "Computer-Science/Class-5/diagram-in-electronic-table-18/1.html",
    },
    {
      id: 19,
      name: "გამოვიყენოთ დიაგრამები მათემატიკური ამოცანების ამოსახსნელად",
      link: "Computer-Science/Class-5/Using-diagrams-19/1.html",
    },
    {
      id: 20,
      name: "სორტირება და ფილტრაცია ელექტრონულ ცხრილებში",
      link: "Computer-Science/Class-5/sort-and-filter-20/1.html",
    },
    {
      id: 21,
      name: "ხშირად გამოყენებული ფუნქციები MS Excel-ში",
      link: "Computer-Science/Class-5/function-in-Exel-21/1.html",
    },
    {
      id: 22,
      name: "კონფიდენციალობა ელ. ფოსტასა და ღრუბლოვან სერვისებში",
      link: "Computer-Science/Class-5/Privacy-in-email-22/1.html",
    },
    {
      id: 23,
      name: "ინფორმაციულ რესურსებზე მუშაობა",
      link: "Computer-Science/Class-5/Informational-resources-23/1.html",
    },
    {
      id: 24,
      name: "საკუთარი მონაცემების დაცვა",
      link: "Computer-Science/Class-5/Protect-your-data-24/1.html",
    },
    {
      id: 25,
      name: "ინფორმაციული საზოგადოების განვითარება",
      link: "Computer-Science/Class-5/develop-informational-society-25/1.html",
    },
    {
      id: 26,
      name: "კომპიუტერული ტექნოლოგიები ჩვენს ცხოვრებაში",
      link:
        "Computer-Science/Class-5/Computer-technologies-in-our-life-26/1.html",
    },
    {
      id: 27,
      name: "Ms Excel ელექტრონული ცხრილის გაფორმება",
      link: "Computer-Science/Class-5/Decorate-electronic-table-27/1.html",
    },
    {
      id: 28,
      name: "Ms Excel ფაილზე მუშაობა",
      link: "Computer-Science/Class-5/working-with-excel-file-28/1.html",
    },
  ],
  IT_6: [
    {
      id: 1,
      name: "ვიწყებთ თამაშის კეთებას",
      link: "Computer-Science/Class-6/create-game-1/1.html",
    },
    {
      id: 2,
      name: "პირობითი ოპერატორები (ჩადგმული პირობითი ოპერატორები)",
      link: "Computer-Science/Class-6/Conditional-operators-2/1.html",
    },
    {
      id: 3,
      name: "ჩადგმული ციკლები",
      link: "Computer-Science/Class-6/embedded-cycles-3/1.html",
    },
    {
      id: 4,
      name: "ცვლადები",
      link: "Computer-Science/Class-6/Variables-4/1.html",
    },
    {
      id: 5,
      name: "ოპერატორები",
      link: "Computer-Science/Class-6/Operators-5/1.html",
    },
    {
      id: 6,
      name: "არითმეტიკული ოპერატორები",
      link: "Computer-Science/Class-6/Arithmetic-operators-6/1.html",
    },
    {
      id: 7,
      name: "მოვლენები, მოვლენებზე რეაგირება",
      link: "Computer-Science/Class-6/Responding-to-events-7/1.html",
    },
    {
      id: 8,
      name: "ცვლადების გამოყენება ",
      link: "Computer-Science/Class-6/Using-variables-8/1.html",
    },
    {
      id: 9,
      name: "სია",
      link: "Computer-Science/Class-6/List-9/1.html",
    },
    {
      id: 10,
      name: "Android გრაფიკული ინტერფეისის გზამკვლევი",
      link:
        "Computer-Science/Class-6/Android-graphics-interface-guide-10/1.html",
    },
    {
      id: 11,
      name: "ios გრაფიკული ინტერფეისი",
      link: "Computer-Science/Class-6/ios-graphical-interface-11/1.html",
    },
    {
      id: 12,
      name: "Windows-ის გრაფიკული ინტერფეისი",
      link: "Computer-Science/Class-6/Windows-UI-12/1.html",
    },
    {
      id: 13,
      name: "შევქმნათ ჩვენი პრეზენტაცია",
      link: "Computer-Science/Class-6/Create-our-presentation-13/1.html",
    },
    {
      id: 14,
      name: "ფოტო რედაქტორი",
      link: "Computer-Science/Class-6/Photo-editor-14/1.html",
    },
    {
      id: 15,
      name: "ჩვენი პოდკასტი",
      link: "Computer-Science/Class-6/Our-podcast-15/1.html",
    },
    {
      id: 16,
      name: "ჩვენი ტკბილი მოგონებები",
      link: "Computer-Science/Class-6/Our-sweet-memories-16/1.html",
    },
    {
      id: 17,
      name: "უსაფრთხოება ციფრულ სამყაროში",
      link: "Computer-Science/Class-6/Secure-digital-world-17/1.html",
    },
    {
      id: 18,
      name: "მულტიმედია ფაილების შესაქმნელი ონლაინ პლატფორმები",
      link: "Computer-Science/Class-6/Multimedia-online-platforms-18/1.html",
    },
    {
      id: 19,
      name: "ჩემი პროექტის პრეზენტაცია",
      link: "Computer-Science/Class-6/Presentation-of-my-project-19/1.html",
    },
    {
      id: 20,
      name: "ინტერაქტიული კონტენტის შექმნა",
      link: "Computer-Science/Class-6/Creating-interactive-content-20/1.html",
    },
    {
      id: 21,
      name: "ინფორმაციული ეთიკის ნორმები",
      link: "Computer-Science/Class-6/Information-ethics-norms-21/1.html",
    },
    {
      id: 22,
      name: "სოციალური პასუხისმგებლობა, პირადი სივრცე",
      link: "Computer-Science/Class-6/Social-responsibility-22/1.html",
    },
    {
      id: 23,
      name: "საკუთარი და სხვისი უფლებები ციფრულ სამყაროში",
      link: "Computer-Science/Class-6/rights-in-digital-world-23/1.html",
    },
    {
      id: 24,
      name: "ბალანსი ვირტუალურსა და რეალურ ცხოვრებას შორის",
      link: "Computer-Science/Class-6/Real-&-virtual-world-balance-24/1.html",
    },
    {
      id: 25,
      name: "შევქმნათ თამაში დროის ობიექტების გამოყენებით",
      link: "Computer-Science/Class-6/Creating-games-with-objects-25/1.html",
    },
    {
      id: 26,
      name:
        "ვიზუალური პროგრამირების გარემოში, Scratch-ში, შევქმნათ თამაში დროის ობიექტისა და ცვლადების გამოყენებით",
      link: "Computer-Science/Class-6/Creating-game-in-scratch-26/1.html",
    },
    {
      id: 27,
      name: "Scratch-ში შევქმნათ ორტურიანი თამაში",
      link: "Computer-Science/Class-6/Creating-two-tours-game-27/1.html",
    },
    {
      id: 28,
      name: "Scratch-ში შევქმნათ თამაში ცვლადების გამოყენებით",
      link: "Computer-Science/Class-6/Creating-game-in-scratch-28/1.html",
    },
  ],
};
