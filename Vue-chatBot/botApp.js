Vue.component('appBot', {
    data() {
        return {
            botShow: false,
            active_el: null,
            darkMode: false,
        }
    },
    methods: {
      activeBg(val){
          this.active_el = val;
      },
    },
    mounted(){
          var id = document.documentElement.dataset.botid
          if(id === '2318'){
                this.active_el = 4
          }else if(id === '2292'){
            this.active_el = 3
          }else if(id=== '2288'){
            this.active_el = 2
          }else if(id === '2320'){
            this.active_el = 1
          }
    },
    created(){
      var theme = localStorage.getItem("theme");
      if (theme == "darck") {
        this.darkMode = true;
      } else {
        this.darkMode = false;
      }
    },
    template: `
      <div class="chatBot-box" :class="{'is-visible': botShow}">
          <transition 
                enter-active-class="animated slideInRight"
                leave-active-class="animated slideOutRight"
                :duration="850"
                >
                <div class="chat chat_position position-absolute" v-show="botShow">
                  <div
                  :class="[
                        darkMode? 'chat_header new_btn-start_black_btn' : 'chat_header',
                      ]">
                    <div class="head_line"></div>
                    <div class="chat_head"></div>
                  </div>
                  <div id="chat_fullscreen"
                  :class="[
                        darkMode? 'chat_conversion chat_converse new_btn-start_black_btn' : 'chat_conversion chat_converse',
                      ]">
                        <div class="bots_logo_box d-flex justify-content-around align-items-center">
                            <div data-botId="2320" class="logo_box" @click="activeBg(1)" :class="{'logo_box_active ': active_el === 1}">
                                <div class="logo_box-nature"></div>
                            </div>
                            <div data-botId="2288" class="logo_box" @click="activeBg(2)" :class="{'logo_box_active ': active_el === 2}">
                                <div class="logo_box-It"></div>
                            </div>
                            <div data-botId="2292" class="logo_box" @click="activeBg(3)" :class="{'logo_box_active ': active_el === 3}">
                                <div class="logo_box-music"></div>
                            </div>
                            <div data-botId="2318" class="logo_box" @click="activeBg(4)" :class="{'logo_box_active ': active_el === 4}">
                                <div class="logo_box-art"></div>
                            </div>
                        </div>
                  </div>
                    <form id="formData" class="d-flex align-items-center">
                        <input autocomplete="off" id="chatSend" type="text" name="chat_message" placeholder="დაწერე შენი შეკითხვები აქ"
                          class="chat_field chat_message">
                        <button id="sendMessage" type="submit" class="send__mail" disabled="disabled"></button>
                    </form>
                </div>
          </transition>
          <div @click="botShow = !botShow"  id="prime">
                <transition 
                      enter-active-class="animated flipInY"
                     leave-active-class="animated flipOutY"
                     :duration="450" mode="out-in">
                    <div v-if="!botShow" class="chat_img" key="1"></div>
                     <div v-if="botShow" class="chat-close"  key="2"></div>
                </transition>
          </div>
      </div>
    `,
});

new Vue({
    el: '#chatBot'
});




Vue.component('leftNavItem', {
    data() {
        return {
            data: null
        }
    },
    template: `
     <svg class="left_components_paging" height="722"
                 viewBox="0 0 134 722" width="134" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <filter filterUnits="userSpaceOnUse" height="722" id="Rectangle_1414" width="134" x="0" y="0">
                        <feOffset dx="2" dy="2" input="SourceAlpha"/>
                        <feGaussianBlur result="blur" stdDeviation="4"/>
                        <feFlood flood-color="#badfed" flood-opacity="0.6"/>
                        <feComposite in2="blur" operator="in"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <filter filterUnits="userSpaceOnUse" height="78" id="Path_12243" width="78.354" x="28" y="543">
                        <feOffset dx="2" dy="2" input="SourceAlpha"/>
                        <feGaussianBlur result="blur-2" stdDeviation="4"/>
                        <feFlood flood-color="#7fd1d8" flood-opacity="0.4"/>
                        <feComposite in2="blur-2" operator="in"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <filter filterUnits="userSpaceOnUse" height="78" id="Path_12243-2" width="78.354" x="28" y="97">
                        <feOffset dx="2" dy="2" input="SourceAlpha"/>
                        <feGaussianBlur result="blur-3" stdDeviation="4"/>
                        <feFlood flood-color="#dc6c85" flood-opacity="0.4"/>
                        <feComposite in2="blur-3" operator="in"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <filter filterUnits="userSpaceOnUse" height="78" id="Path_12243-3" width="78.354" x="28"
                            y="424">
                        <feOffset dx="2" dy="2" input="SourceAlpha"/>
                        <feGaussianBlur result="blur-4" stdDeviation="4"/>
                        <feFlood flood-color="#dc6c85" flood-opacity="0.4"/>
                        <feComposite in2="blur-4" operator="in"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <filter filterUnits="userSpaceOnUse" height="78" id="Path_12243-4" width="78.354" x="28"
                            y="211">
                        <feOffset dx="2" dy="2" input="SourceAlpha"/>
                        <feGaussianBlur result="blur-5" stdDeviation="4"/>
                        <feFlood flood-color="#dc6c85" flood-opacity="0.4"/>
                        <feComposite in2="blur-5" operator="in"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <filter filterUnits="userSpaceOnUse" height="78" id="Path_12243-5" width="78.354" x="28"
                            y="317">
                        <feOffset dx="2" dy="2" input="SourceAlpha"/>
                        <feGaussianBlur result="blur-6" stdDeviation="4"/>
                        <feFlood flood-color="#7fd1d8" flood-opacity="0.4"/>
                        <feComposite in2="blur-6" operator="in"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                </defs>
                <g data-name="Group 51212" id="Group_51212" transform="translate(-5 -30)">
                    <g filter="url(#Rectangle_1414)" transform="matrix(1, 0, 0, 1, 5, 30)">
                        <rect data-name="Rectangle 1414" fill="#fff" height="698" id="Rectangle_1414-2" rx="55"
                              transform="translate(10 10)" width="110"/>
                    </g>
                    <path class="leftSidebar_type"
                          d="M-107,293.662h-25.155a28.388,28.388,0,0,0-21.1,9.686A34.87,34.87,0,0,0-162,326.736c0,18.266,13.362,33.074,29.844,33.074H-107c20.013,0,36.24,17.983,36.24,40.162V253.5C-70.762,275.679-86.988,293.662-107,293.662Z"
                          data-name="Path 143714" data-type="2"
                          fill="#dc6c85"
                          id="Path_143714"
                          style="opacity: 0" transform="translate(196 -48.5)"/>
                    <path class="leftSidebar_type"
                          d="M-107,293.662h-25.155a28.388,28.388,0,0,0-21.1,9.686A34.87,34.87,0,0,0-162,326.736c0,18.266,13.362,33.074,29.844,33.074H-107c20.013,0,36.24,17.983,36.24,40.162V253.5C-70.762,275.679-86.988,293.662-107,293.662Z"
                          data-name="Path 143737" data-type="1"
                          fill="#dc6c85"
                          id="Path_143737"
                          style="opacity: 0" transform="translate(196 -162.5)"/>
                    <path class="leftSidebar_type"
                          d="M-107,293.662h-25.155a28.388,28.388,0,0,0-21.1,9.686A34.87,34.87,0,0,0-162,326.736c0,18.266,13.362,33.074,29.844,33.074H-107c20.013,0,36.24,17.983,36.24,40.162V253.5C-70.762,275.679-86.988,293.662-107,293.662Z"
                          data-name="Path 143736" data-type="4"
                          fill="#dc6c85"
                          id="Path_143736"
                          style="opacity: 0" transform="translate(196 164.5)"/>
                    <path class="leftSidebar_type"
                          d="M-107,293.662h-25.155a28.388,28.388,0,0,0-21.1,9.686A34.87,34.87,0,0,0-162,326.736c0,18.266,13.362,33.074,29.844,33.074H-107c20.013,0,36.24,17.983,36.24,40.162V253.5C-70.762,275.679-86.988,293.662-107,293.662Z"
                          data-name="Path 24922" data-type="5"
                          fill="#7fd1d8"
                          id="Path_24922"
                          style="opacity: 0" transform="translate(195.761 283.264)"/>
                    <path class="leftSidebar_type"
                          d="M-107,293.662h-25.155a28.388,28.388,0,0,0-21.1,9.686A34.87,34.87,0,0,0-162,326.736c0,18.266,13.362,33.074,29.844,33.074H-107c20.013,0,36.24,17.983,36.24,40.162V253.5C-70.762,275.679-86.988,293.662-107,293.662Z"
                          data-name="Path 143735" data-type="3"
                          fill="#7fd1d8"
                          id="Path_143735"
                          style="opacity: 0" transform="translate(195.761 57.264)"/>
                    <g data-name="Group 8099" id="Group_8099" transform="translate(-1.874 20)">
                        <g data-name="Group 8096" id="Group_8096" transform="translate(44.874 563)">
                            <g filter="url(#Path_12243)" transform="matrix(1, 0, 0, 1, -38, -553)">
                                <path d="M85.413,13.94s4.951-27.321,28.053-27.321,30.619,24.753,23.1,39.055-29.154,18.885-41.8,11.368S85.413,13.94,85.413,13.94Z"
                                      data-name="Path 12243"
                                      fill="#fff"
                                      id="Path_12243-6" transform="translate(-47.02 566.38)"/>
                            </g>
                        </g>
                        <g data-name="Group 8097" id="Group_8097" transform="translate(63.48 574.473)">
                            <path d="M409.158,18.572l6.145,6.485.264.275" data-name="Path 8478" fill="none"
                                  id="Path_8478" transform="translate(-401.554 -16.923)"/>
                            <path d="M409.582,26.873V16.651a.548.548,0,0,0-.548-.548h-2.869a.548.548,0,0,0-.548.548V26.873Z"
                                  data-name="Path 8479"
                                  fill="#badfed"
                                  id="Path_8479" transform="translate(-400.199 -16.103)"/>
                            <g data-name="Group 6189" id="Group_6189" transform="translate(8.659 1.421)">
                                <path d="M417.231,18.711l-1.015.691c-.009.009-.022.025-.031.034l-.009.009-.029.039-5.048,10.3a1.044,1.044,0,0,0,.424,1.366l.226.125a.944.944,0,0,0,1.318-.408l4.922-10.05.117-.243,0-.007a.129.129,0,0,0,.011-.04l.008-.014c0-.013,0-.031,0-.044v-.23l-.027-1.1-.009-.67a.233.233,0,0,0-.061-.139.218.218,0,0,0-.058-.05c-.009-.009,0,0,0,0-.026-.01-.026,0-.049,0a.239.239,0,0,0-.122.038Zm-4.99,11.223a1.209,1.209,0,0,0,.469.171,1.059,1.059,0,0,0,.219.029l-.022.043-.232.472a.529.529,0,0,1-.314.267.517.517,0,0,1-.41-.043l-.227-.125a.568.568,0,0,1-.233-.752l.26-.518A1.6,1.6,0,0,0,412.241,29.934Z"
                                      data-name="Path 8480"
                                      fill="#6795b8"
                                      id="Path_8480" transform="translate(-410.993 -18.273)"/>
                                <path d="M420.781,18.316a.238.238,0,0,1,.122-.038c.023,0,.022-.011.049,0,.008,0-.005-.008,0,0a.1.1,0,0,1,.058.05.233.233,0,0,1,.061.139l.009.67.027,1.1v.23c0,.013,0,.031,0,.044l-.007.014a.128.128,0,0,1-.011.04l0,.007a4,4,0,0,1-.529-.054,2.782,2.782,0,0,1-1.57-.757l.14-.28.029-.039.009-.009c.009-.009.021-.025.031-.034l1.015-.691Z"
                                      data-name="Path 8481"
                                      fill="#badfed"
                                      id="Path_8481" transform="translate(-413.972 -18.273)"/>
                                <path d="M417.786,21.127s-.538.457-.883-.387c-.5.454-5.021,9.845-5.021,9.845l1.278.361Z"
                                      data-name="Path 8482"
                                      fill="#6795b8"
                                      id="Path_8482" transform="translate(-411.324 -19.192)"/>
                                <path d="M419.093,21.62c0,.014,0,.031-.007.045l0,.014c0,.014-.009.024-.013.038l0,.005-4.607,9.427-.111.222-.786-.363.087-.268a12.814,12.814,0,0,1,1.15-2.468l2.44-4.12a23,23,0,0,0,.937-2.431l.235-.365A.454.454,0,0,0,419.093,21.62Z"
                                      data-name="Path 8483"
                                      fill="#6795b8"
                                      id="Path_8483" transform="translate(-411.951 -19.422)"/>
                                <path d="M416.436,20.144c.114.4.407.373.407.373l-4.776,9.463-.377-.156.134-.268,4.586-9.374Z"
                                      data-name="Path 8484"
                                      fill="#6795b8"
                                      id="Path_8484" transform="translate(-411.253 -18.97)"/>
                                <path d="M421.508,18.316a.238.238,0,0,1,.122-.038c.023,0,.023-.011.049,0,.008,0-.005-.008,0,0a.1.1,0,0,1,.058.05.233.233,0,0,1,.061.139l.009.67a.81.81,0,0,1-.429.006.609.609,0,0,1-.445-.433Z"
                                      data-name="Path 8486"
                                      fill="#6795b8"
                                      id="Path_8486" transform="translate(-414.699 -18.273)"/>
                            </g>
                            <path d="M400.916,21.267a3.11,3.11,0,0,1-.066.624,1.642,1.642,0,0,1-1.219,1.23l-.115.029a1.664,1.664,0,0,1-2.094-1.492v-.031c0-.261.036-.522.036-.783,0-.891.036-1.565-.423-1.935a.371.371,0,0,1-.072-.484.315.315,0,0,1,.284-.152C397.277,18.273,400.916,18.718,400.916,21.267Z"
                                  data-name="Path 8487"
                                  fill="#badfed"
                                  id="Path_8487" transform="translate(-396.902 -16.801)"/>
                            <path d="M412.232,49.479h-8.47c-4.454,0-3.481-3.133-3.481-3.133V35.341h13.763s.007.44.013,1.147c.032,2.44.129,8.079.342,10.118A2.448,2.448,0,0,1,412.232,49.479Z"
                                  data-name="Path 8488"
                                  fill="#badfed"
                                  id="Path_8488" transform="translate(-397.912 -23.224)"/>
                            <path d="M401.519,30.753a37.815,37.815,0,0,1-1.088-4.94l.98-.263a20.555,20.555,0,0,1,2.07,4.734Z"
                                  data-name="Path 8489"
                                  fill="#6795b8"
                                  id="Path_8489" transform="translate(-398.167 -19.658)"/>
                            <path d="M414.1,36.488a29.845,29.845,0,0,0-6.986.019,39.1,39.1,0,0,1-6.774-.06V35.341h13.747S414.093,35.781,414.1,36.488Z"
                                  data-name="Path 8490"
                                  fill="#6795b8"
                                  id="Path_8490" transform="translate(-397.978 -23.25)"/>
                            <path d="M398.326,34.105h15.128a.9.9,0,0,0,.149-1.8l-.06-.007c-1.965-.2-15.26,0-15.26,0s-.024,0-.068,0A.9.9,0,0,0,398.326,34.105Z"
                                  data-name="Path 8491"
                                  fill="#badfed"
                                  id="Path_8491" transform="translate(-396.889 -22.072)"/>
                            <line data-name="Line 800" fill="none" id="Line_800" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.287 1.341)"
                                  x2="1.118"/>
                            <line data-name="Line 801" fill="none" id="Line_801" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.287 3.416)"
                                  x2="1.118"/>
                            <line data-name="Line 802" fill="none" id="Line_802" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.289 1.798)"
                                  x2="0.771"/>
                            <line data-name="Line 803" fill="none" id="Line_803" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.289 2.202)"
                                  x2="0.771"/>
                            <line data-name="Line 804" fill="none" id="Line_804" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.289 2.607)"
                                  x2="0.771"/>
                            <line data-name="Line 805" fill="none" id="Line_805" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.289 3.012)"
                                  x2="0.771"/>
                            <line data-name="Line 806" fill="none" id="Line_806" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.287 3.416)"
                                  x2="1.118"/>
                            <line data-name="Line 807" fill="none" id="Line_807" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.287 5.344)"
                                  x2="1.118"/>
                            <line data-name="Line 808" fill="none" id="Line_808" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.289 3.873)"
                                  x2="0.771"/>
                            <line data-name="Line 809" fill="none" id="Line_809" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.289 4.278)"
                                  x2="0.771"/>
                            <line data-name="Line 810" fill="none" id="Line_810" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.289 4.682)"
                                  x2="0.771"/>
                            <line data-name="Line 811" fill="none" id="Line_811" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.289 5.087)"
                                  x2="0.771"/>
                            <line data-name="Line 812" fill="none" id="Line_812" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.287 5.344)"
                                  x2="1.118"/>
                            <line data-name="Line 813" fill="none" id="Line_813" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.287 7.363)"
                                  x2="1.118"/>
                            <line data-name="Line 814" fill="none" id="Line_814" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.289 5.789)"
                                  x2="0.771"/>
                            <line data-name="Line 815" fill="none" id="Line_815" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.289 6.182)"
                                  x2="0.771"/>
                            <line data-name="Line 816" fill="none" id="Line_816" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.289 6.576)"
                                  x2="0.771"/>
                            <line data-name="Line 817" fill="none" id="Line_817" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.289 6.97)"
                                  x2="0.771"/>
                            <line data-name="Line 818" fill="none" id="Line_818" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.287 7.363)"
                                  x2="1.118"/>
                            <line data-name="Line 819" fill="none" id="Line_819" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.287 9.383)"
                                  x2="1.118"/>
                            <line data-name="Line 820" fill="none" id="Line_820" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.289 7.808)"
                                  x2="0.771"/>
                            <line data-name="Line 821" fill="none" id="Line_821" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.289 8.202)"
                                  x2="0.771"/>
                            <line data-name="Line 822" fill="none" id="Line_822" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.289 8.596)"
                                  x2="0.771"/>
                            <line data-name="Line 823" fill="none" id="Line_823" stroke="#fff"
                                  stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.25"
                                  transform="translate(6.289 8.989)"
                                  x2="0.771"/>
                        </g>
                    </g>
                    <g data-name="Group 8101" id="Group_8101" transform="translate(-1.874 -98)">
                        <g data-name="Group 8089" id="Group_8089" transform="translate(44.874 235)">
                            <g filter="url(#Path_12243-2)" transform="matrix(1, 0, 0, 1, -38, -107)">
                                <path d="M85.413,13.94s4.951-27.321,28.053-27.321,30.619,24.753,23.1,39.055-29.154,18.885-41.8,11.368S85.413,13.94,85.413,13.94Z"
                                      data-name="Path 12243"
                                      fill="#fff"
                                      id="Path_12243-7" transform="translate(-47.02 120.38)"/>
                            </g>
                        </g>
                        <g data-name="Group 8074" id="Group_8074" transform="translate(61.234 251.614)">
                            <g data-name="Group 8072" id="Group_8072" transform="translate(10.486)">
                                <path d="M-20.032,18.181a.453.453,0,0,1,.163.109,1.66,1.66,0,0,1,.36,1.734,1.184,1.184,0,0,1-.381.461.535.535,0,0,1-.767-.144,1.775,1.775,0,0,1-.266-1.549C-20.826,18.451-20.385,18.047-20.032,18.181Z"
                                      data-name="Path 8870"
                                      fill="#dc6c85"
                                      id="Path_8870" transform="translate(26.426 -18.155)"/>
                                <path d="M-15.739,21.837v0a.984.984,0,0,1-.113.237c-.214.364-.495.762-.975.556a.653.653,0,0,1-.385-.661,1.049,1.049,0,0,1,.465-.911A.678.678,0,0,1-15.739,21.837Z"
                                      data-name="Path 8871"
                                      fill="#dc6c85"
                                      id="Path_8871" transform="translate(26.585 -18.038)"/>
                                <path d="M-16.394,25.938a14.011,14.011,0,0,1-1.281,5.553,3.539,3.539,0,0,1-1.334,1.657,2.762,2.762,0,0,1-2.323.25,1.3,1.3,0,0,1-.833-1.646,6.333,6.333,0,0,1,.427-1.031c.281-.594.625-1.167.886-1.771a1.955,1.955,0,0,0-.99-2.594A4,4,0,0,0-22.979,26a1.629,1.629,0,0,1-1.1-.573h-.01a1.937,1.937,0,0,1-.417-.99,3.594,3.594,0,0,1,.761-2.823,2.78,2.78,0,0,1,1.709-.979,4.8,4.8,0,0,1,4.2,1.063,3.393,3.393,0,0,1,1.125,1.823A8.248,8.248,0,0,1-16.394,25.938Z"
                                      data-name="Path 8872"
                                      fill="#dc6c85"
                                      id="Path_8872" transform="translate(26.277 -18.056)"/>
                                <path d="M-23.789,20.831a1.8,1.8,0,0,1-.364,1.208.944.944,0,0,1-1.421.145,2.006,2.006,0,0,1-.24-2.657.964.964,0,0,1,1.482-.02A1.921,1.921,0,0,1-23.789,20.831Z"
                                      data-name="Path 8873"
                                      fill="#dc6c85"
                                      id="Path_8873" transform="translate(26.208 -18.112)"/>
                                <path d="M-21.7,19.351a1.456,1.456,0,0,1-.229.8.7.7,0,0,1-1.228.033,1.476,1.476,0,0,1,.131-1.629.683.683,0,0,1,1.169.159A1.448,1.448,0,0,1-21.7,19.351Z"
                                      data-name="Path 8874"
                                      fill="#edbec9"
                                      id="Path_8874" transform="translate(26.328 -18.149)"/>
                                <path d="M-17.9,19.408a.77.77,0,0,1,.747.886,1.208,1.208,0,0,1-.432.752.712.712,0,0,1-.831.065.718.718,0,0,1-.4-.715,1.122,1.122,0,0,1,.407-.822A.741.741,0,0,1-17.9,19.408Z"
                                      data-name="Path 8875"
                                      fill="#dc6c85"
                                      id="Path_8875" transform="translate(26.517 -18.102)"/>
                            </g>
                            <g data-name="Group 8073" id="Group_8073" transform="translate(0 6.112)">
                                <path d="M-27.887,29.724v.021a2.992,2.992,0,0,1-.115.844,1.54,1.54,0,0,1-1.344,1.219,3.023,3.023,0,0,0-1.427.615,1.971,1.971,0,0,0-.583,2.313c.292.656.667,1.282.99,1.927a5.724,5.724,0,0,1,.406,1.063,1.3,1.3,0,0,1-1.084,1.615,2.573,2.573,0,0,1-2.407-.646h-.01a2.132,2.132,0,0,1-.313-.365,8.728,8.728,0,0,1-1.281-2.751,15.7,15.7,0,0,1-.656-3.761,8.558,8.558,0,0,1,.3-2.521,3.631,3.631,0,0,1,1.865-2.292,4.364,4.364,0,0,1,3.667-.385,2.524,2.524,0,0,1,1.469,1.25A3.866,3.866,0,0,1-27.887,29.724Z"
                                      data-name="Path 8876"
                                      fill="#dc6c85"
                                      id="Path_8876" transform="translate(36.296 -23.922)"/>
                                <path d="M-26.92,25.834a1.978,1.978,0,0,1-.482,1.333.92.92,0,0,1-1.45.016,2.058,2.058,0,0,1,.193-2.67.921.921,0,0,1,1.434.222A2.013,2.013,0,0,1-26.92,25.834Z"
                                      data-name="Path 8877"
                                      fill="#dc6c85"
                                      id="Path_8877" transform="translate(36.566 -24.01)"/>
                                <path d="M-29.476,24.955a1.86,1.86,0,0,1-.235,1.037.749.749,0,0,1-.7.433.9.9,0,0,1-.776-.484,1.579,1.579,0,0,1,.28-1.728.822.822,0,0,1,1.185.144A1.034,1.034,0,0,1-29.476,24.955Z"
                                      data-name="Path 8878"
                                      fill="#dc6c85"
                                      id="Path_8878" transform="translate(36.479 -24.021)"/>
                                <path d="M-31.606,25.243a4.076,4.076,0,0,1-.167.679.6.6,0,0,1-1.092.129A1.653,1.653,0,0,1-33,24.5a.6.6,0,0,1,1.1-.029A4.59,4.59,0,0,1-31.606,25.243Z"
                                      data-name="Path 8879"
                                      fill="#dc6c85"
                                      id="Path_8879" transform="translate(36.404 -24.017)"/>
                                <path d="M-33.382,26.11a.79.79,0,0,1-.246.66.589.589,0,0,1-.807.036,1.157,1.157,0,0,1-.423-1.112.672.672,0,0,1,.538-.57.62.62,0,0,1,.657.28A1.279,1.279,0,0,1-33.382,26.11Z"
                                      data-name="Path 8880"
                                      fill="#edbec9"
                                      id="Path_8880" transform="translate(36.331 -23.975)"/>
                                <path d="M-35.651,26.513a.946.946,0,0,1,.94.852.619.619,0,0,1-.6.674.945.945,0,0,1-.955-.834A.618.618,0,0,1-35.651,26.513Z"
                                      data-name="Path 8881"
                                      fill="#dc6c85"
                                      id="Path_8881" transform="translate(36.272 -23.916)"/>
                            </g>
                            <path d="M-28.645,30.621a2.249,2.249,0,0,0,.667-1.011,2.992,2.992,0,0,1-.115.844,1.54,1.54,0,0,1-1.344,1.219,3.023,3.023,0,0,0-1.427.615,1.971,1.971,0,0,0-.583,2.313c.292.656.667,1.282.99,1.927a5.724,5.724,0,0,1,.406,1.063,1.3,1.3,0,0,1-1.084,1.615,2.573,2.573,0,0,1-2.407-.646,2.4,2.4,0,0,0,2.657-.167c2.032-1.98-5.23-5.282-.271-6.866C-29.875,31.11-29.145,31.079-28.645,30.621Z"
                                  data-name="Path 24913"
                                  fill="#edbec9"
                                  id="Path_24913" opacity="0.54" transform="translate(36.387 -17.675)"/>
                            <path d="M-20.872,28.813a1.955,1.955,0,0,0-.99-2.594A4,4,0,0,0-23,25.864a1.629,1.629,0,0,1-1.1-.573,1.228,1.228,0,0,0,1.6-.281c1.469-1.4,2.365-1.5,2.8-.886s.406,3.98-2.49,7.491a6.333,6.333,0,0,1,.427-1.031C-21.477,29.99-21.133,29.417-20.872,28.813Z"
                                  data-name="Path 24914"
                                  fill="#edbec9"
                                  id="Path_24914" opacity="0.54" transform="translate(36.782 -17.92)"/>
                        </g>
                    </g>
                    <g data-name="Group 8110" id="Group_8110" transform="translate(-6 20)">
                        <g data-name="Group 8089" id="Group_8089-2" transform="translate(49 444)">
                            <g filter="url(#Path_12243-3)" transform="matrix(1, 0, 0, 1, -38, -434)">
                                <path d="M85.413,13.94s4.951-27.321,28.053-27.321,30.619,24.753,23.1,39.055-29.154,18.885-41.8,11.368S85.413,13.94,85.413,13.94Z"
                                      data-name="Path 12243"
                                      fill="#fff"
                                      id="Path_12243-8" transform="translate(-47.02 447.38)"/>
                            </g>
                        </g>
                        <g data-name="Group 8106" id="Group_8106" transform="translate(69.683 462.087)">
                            <g data-name="Group 6737" id="Group_6737">
                                <path d="M90.352,32.213c0,.178-.025.327-.057.338a12.108,12.108,0,0,1-5.948,0c-.031-.007-.057-.149-.057-.327s.025-.327.057-.327a12.173,12.173,0,0,1,2.636-.363q-.08-2.672-.142-5.343-.117-4.567-.167-9.138a.632.632,0,0,1,.249-.523l.015-.008,1.052-.8-.107,9.661-.011.007c-.007,0-.017.008-.028.014l-.011.008q-.064,3.062-.16,6.111a12.244,12.244,0,0,1,2.622.36C90.327,31.889,90.352,32.039,90.352,32.213Z"
                                      data-name="Path 9425"
                                      fill="#edbec9"
                                      id="Path_9425" transform="translate(-84.291 -14.844)"/>
                                <path d="M99.121,16.722a.66.66,0,0,0-.911-.221,4.405,4.405,0,0,1-2.3.683,4.3,4.3,0,0,1-2.8-1.1l-.647-.459a4.06,4.06,0,0,0-.84-.452,3.876,3.876,0,0,0-1.863-.227,3.8,3.8,0,0,0-1.751.686l-.209.16h0l-1.052.8-.014.008a.63.63,0,0,0-.25.523q.054,4.567.167,9.138a3.729,3.729,0,0,1,.992-.783l.011-.008c.011-.007.022-.01.028-.014l.01-.007h0l.058-.038a10.65,10.65,0,0,1,1.2-.79,2.774,2.774,0,0,1,2.512.075c.341.191.769.554,1.163.839a5.3,5.3,0,0,0,3.006,1.238,5.168,5.168,0,0,0,1.669-.157,5.48,5.48,0,0,0,.808-.285l.69-.327a.6.6,0,0,0,.338-.53v-.007l.085-8.345V17.07A.674.674,0,0,0,99.121,16.722Z"
                                      data-name="Path 9426"
                                      fill="#dc6c85"
                                      id="Path_9426" transform="translate(-84.1 -14.914)"/>
                            </g>
                        </g>
                    </g>
                    <g data-name="Group 8108" id="Group_8108" transform="translate(-6 -51)">
                        <g filter="url(#Path_12243-4)" transform="matrix(1, 0, 0, 1, 11, 81)">
                            <path d="M85.413,13.94s4.951-27.321,28.053-27.321,30.619,24.753,23.1,39.055-29.154,18.885-41.8,11.368S85.413,13.94,85.413,13.94Z"
                                  data-name="Path 12243"
                                  fill="#fff"
                                  id="Path_12243-9" transform="translate(-47.02 234.38)"/>
                        </g>
                        <g data-name="Group 8082" id="Group_8082" transform="translate(64.243 317.024)">
                            <path d="M17.64,30.309c2.667-3.036,4.423-5.085,7.078-8.106a3.921,3.921,0,0,0-1.241.454c-2.592,1.64-4.539,1.873-5.333,4.1l-.957,2.666A.688.688,0,0,0,17.64,30.309Z"
                                  data-name="Path 9428"
                                  fill="#dc6c85"
                                  id="Path_9428" transform="translate(-14.731 -16.613)"/>
                            <path d="M20.6,31.142c-.059.141-.035.152-.07.586-.012.047-.012.106-.023.176a1.194,1.194,0,0,1-1.261,1.113H19.2a1.321,1.321,0,0,1-.211-.035l.106-.117c.106-.106.17-.2.276-.316Z"
                                  data-name="Path 9429"
                                  fill="#dc6c85"
                                  id="Path_9429" transform="translate(-14.413 -15.067)"/>
                            <path d="M20.6,31.142c-.059.141-.035.152-.07.586l-1.284,1.289H19.2a1.321,1.321,0,0,1-.211-.035l.106-.117Z"
                                  data-name="Path 9430"
                                  fill="#b85a70"
                                  id="Path_9430" transform="translate(-14.413 -15.067)"/>
                            <path d="M30.564,32.23s.638.216,1.988-.644,2.21-1.656,3.131-1.6c.762.05.514-3.355.407-4.523a.3.3,0,0,0-.388-.263,6.149,6.149,0,0,1-4.5-.218C28.892,23.812,30.564,32.23,30.564,32.23Z"
                                  data-name="Path 9431"
                                  fill="#dc6c85"
                                  id="Path_9431" transform="translate(-12.513 -16.151)"/>
                            <path d="M22.556,32.836a1.162,1.162,0,0,1-1.313-1.185V29.962l2.436-1.207V30.56S23.9,32.778,22.556,32.836Z"
                                  data-name="Path 9432"
                                  fill="#dc6c85"
                                  id="Path_9432" transform="translate(-14.022 -15.48)"/>
                            <path d="M26.4,31.3c-.056.633-.29,1.466-1.091,1.5a1.139,1.139,0,0,1-1.29-1.16l-.055-1.583-.045-1.56,2.491.3v1.771A3.753,3.753,0,0,1,26.4,31.3Z"
                                  data-name="Path 9433"
                                  fill="#dc6c85"
                                  id="Path_9433" transform="translate(-13.56 -15.525)"/>
                            <path d="M21.243,30.2l2.436-1.208v1.677a10.11,10.11,0,0,1-2.436.6Z" data-name="Path 9434"
                                  fill="#b85a70"
                                  id="Path_9434" transform="translate(-14.022 -15.439)"/>
                            <path d="M26.4,31.533c-.979-.622-1.7-1.49-2.436-1.243l-.045-1.56,2.491.3.012,1.772A4.518,4.518,0,0,1,26.4,31.533Z"
                                  data-name="Path 9435"
                                  fill="#b85a70"
                                  id="Path_9435" transform="translate(-13.56 -15.484)"/>
                            <g data-name="Group 6738" id="Group_6738">
                                <path d="M15.094,37.124a.432.432,0,0,0,.022.229c.014.039,0,.045.034.082.011.008-.016,0,0,0a.359.359,0,0,0,.124.061.412.412,0,0,0,.271,0l1.114-.449,1.839-.721.381-.157c.019-.012.049-.025.069-.036l.019-.022a.224.224,0,0,0,.057-.046l.009-.011.32-.362L32.547,20.578a1.692,1.692,0,0,0-.24-2.462l-.364-.287a1.87,1.87,0,0,0-2.552.249l-13.517,15.5-.045.075-.008.021c-.008.02-.026.052-.034.073l-.436,2.158ZM29.339,19.366l.674-.788a1.019,1.019,0,0,1,1.405-.137l.364.287a.929.929,0,0,1,.355.647.952.952,0,0,1-.223.7l-.619.712-.056.066a1.906,1.906,0,0,0-.2-.341,2.13,2.13,0,0,0-.609-.655A2.868,2.868,0,0,0,29.339,19.366Z"
                                      data-name="Path 9436"
                                      fill="#edbec9"
                                      id="Path_9436" transform="translate(-15.087 -17.437)"/>
                                <path d="M15.094,34.806a.432.432,0,0,0,.022.229c.014.039,0,.045.034.082.011.008-.016,0,0,0a.179.179,0,0,0,.124.061.412.412,0,0,0,.271,0l1.114-.449,1.839-.721.381-.157c.019-.012.049-.025.069-.036l.019-.022a.224.224,0,0,0,.057-.046l.009-.011a7.163,7.163,0,0,0-.457-.839,4.982,4.982,0,0,0-2.342-2.068l-.366.426-.045.075-.008.021c-.008.02-.026.052-.034.073l-.436,2.158Z"
                                      data-name="Path 9437"
                                      fill="#dc6c85"
                                      id="Path_9437" transform="translate(-15.087 -15.12)"/>
                                <path d="M17.738,35.019s.382-1.207-1.253-1.191c.4-1.14,12.78-15.139,12.78-15.139L30.75,20.55Z"
                                      data-name="Path 9438"
                                      fill="#edbec9"
                                      id="Path_9438" transform="translate(-14.846 -17.221)"/>
                                <path d="M18.461,35.723c.02-.016.048-.026.069-.042l.02-.016c.021-.015.034-.032.054-.047l.007-.008L30.989,21.445l.291-.339L30.134,20.06l-.381.331a22.894,22.894,0,0,0-3.281,3.615L21.359,30.9a41.261,41.261,0,0,1-3.366,3.238l-.44.643A.814.814,0,0,1,18.461,35.723Z"
                                      data-name="Path 9439"
                                      fill="#edbec9"
                                      id="Path_9439" transform="translate(-14.661 -16.984)"/>
                                <path d="M15.724,33.409c.747-.1.9.413.9.413L28.943,19.353l-.521-.514-.35.408-12.3,14.094Z"
                                      data-name="Path 9440"
                                      fill="#fff"
                                      id="Path_9440" transform="translate(-14.977 -17.195)"/>
                                <path d="M15.094,34.4a.432.432,0,0,0,.022.229c.014.039,0,.045.034.082.011.008-.016,0,0,0a.179.179,0,0,0,.124.061.412.412,0,0,0,.271,0l1.114-.449a1.462,1.462,0,0,0-.289-.714,1.1,1.1,0,0,0-1.025-.433Z"
                                      data-name="Path 9441"
                                      fill="#f5dce2"
                                      id="Path_9441" transform="translate(-15.087 -14.714)"/>
                                <path d="M15.724,33.409c.747-.1.9.413.9.413L28.943,19.353l-.521-.514-.35.408-12.3,14.094Z"
                                      data-name="Path 9442"
                                      fill="#edbec9"
                                      id="Path_9442" opacity="0.54" transform="translate(-14.977 -17.195)"/>
                                <path d="M26.252,19.49A4.286,4.286,0,0,1,29.485,21.9l.528-.616.362-.425.244-.285a1.7,1.7,0,0,0-.239-2.455l-.366-.289a1.868,1.868,0,0,0-2.555.25l-.29.339-.377.439Z"
                                      data-name="Path 9443"
                                      fill="#b85a70"
                                      id="Path_9443" transform="translate(-13.156 -17.437)"/>
                            </g>
                            <path d="M28.793,23.106l-3.047,3.509C24.116,28.49,19.457,30.173,19.4,30.2c-.536.21-.243,1.571.738,1.656a7.673,7.673,0,0,0,3.764-.97,1.614,1.614,0,0,1,2.178.041,6.568,6.568,0,0,0,3.593,1.381l2.808.246.633-7.244Z"
                                  data-name="Path 9444"
                                  fill="#dc6c85"
                                  id="Path_9444" transform="translate(-14.388 -16.457)"/>
                        </g>
                    </g>
                    <g data-name="Group 8109" id="Group_8109" transform="translate(-6 -15)">
                        <g data-name="Group 8089" id="Group_8089-3" transform="translate(49 372)">
                            <g filter="url(#Path_12243-5)" transform="matrix(1, 0, 0, 1, -38, -327)">
                                <path d="M85.413,13.94s4.951-27.321,28.053-27.321,30.619,24.753,23.1,39.055-29.154,18.885-41.8,11.368S85.413,13.94,85.413,13.94Z"
                                      data-name="Path 12243"
                                      fill="#fff"
                                      id="Path_12243-10" transform="translate(-47.02 340.38)"/>
                            </g>
                        </g>
                        <g data-name="Group 8107" id="Group_8107" transform="translate(69.535 389.576)">
                            <path d="M83.6,25.234l-.343-.436H78.869l-.338.5a.825.825,0,0,0,.59.764.1.1,0,0,1,.025.05c0,.013-.013.025-.025.038-.063.076-.176.139-.189.227-.025.139.126.2.189.3a1.13,1.13,0,0,0-.189.227c-.1.139-.063.252-.025.429a2.021,2.021,0,0,0,.29.681,2,2,0,0,0,1.2.845v.038c0,.013.013.025.013.038a.305.305,0,0,0,.277.24l.378.013.378-.013a.305.305,0,0,0,.277-.24c0-.013.013-.025.013-.038v-.038a2.025,2.025,0,0,0,1.488-1.525c.038-.176.076-.29-.025-.429A1.13,1.13,0,0,0,83,26.676c.063-.1.214-.164.189-.3-.013-.088-.126-.151-.189-.227-.013-.013-.025-.025-.025-.038a.1.1,0,0,1,.025-.05A.939.939,0,0,0,83.6,25.234Z"
                                  data-name="Path 9115"
                                  fill="#6795b8"
                                  id="Path_9115" transform="translate(-74.005 -9.273)"/>
                            <g data-name="Group 6689" id="Group_6689">
                                <g data-name="Group 6688" id="Group_6688">
                                    <path d="M83.8,20.125a.351.351,0,0,0-.135-.025.407.407,0,0,0-.077.008.637.637,0,0,0-.413.313.28.28,0,0,0,.039.39.545.545,0,0,0,.6.043.6.6,0,0,0,.276-.29.309.309,0,0,0,.026-.131C84.113,20.278,83.943,20.179,83.8,20.125Z"
                                          data-name="Path 9116"
                                          fill="none"
                                          id="Path_9116" transform="translate(-72.81 -10.497)"/>
                                    <path d="M82.967,15.126a.677.677,0,0,0-.333-.115.292.292,0,0,0-.058.005.249.249,0,0,0-.122.061.442.442,0,0,0-.095.483,2.633,2.633,0,0,0,.594.742,2.477,2.477,0,0,1,.8,1.206,2.28,2.28,0,0,1-.1.973c-.189.755-.155.937.193,1.024a.53.53,0,0,0,.439-.043.236.236,0,0,0,.04-.025,1.556,1.556,0,0,0,.362-1.01c.009-.111.01-.2.009-.266A3.717,3.717,0,0,0,82.967,15.126Z"
                                          data-name="Path 9117"
                                          fill="none"
                                          id="Path_9117" transform="translate(-73.016 -11.823)"/>
                                    <path d="M83.865,27.979c0-.095.005-.169.009-.2.155-1.28,1.175-1.906,2.159-2.633A5.927,5.927,0,0,0,87.751,23.5a7.571,7.571,0,0,0,.216-7.082,6.28,6.28,0,0,0-5.04-3.454A6.567,6.567,0,0,0,75.8,17.489c-1.034,3.148-.158,5.845,2.681,8.248a3.667,3.667,0,0,1,1.179,1.438,2.921,2.921,0,0,1,.205.584l.019.079a2.361,2.361,0,0,0,.159.42,6.221,6.221,0,0,0,2.678.4,2.814,2.814,0,0,0,1.118-.358A1.064,1.064,0,0,0,83.865,27.979Zm2.482-4.949-.01.009a1.2,1.2,0,0,1-.577.289,1.073,1.073,0,0,1-.862-.209.814.814,0,0,1-.184-1.1,1.09,1.09,0,0,1,1.3-.538h0a.972.972,0,0,1,.639.61.815.815,0,0,1,.032.178.97.97,0,0,1-.306.724A.434.434,0,0,0,86.347,23.03ZM83.9,15.21a.827.827,0,0,1,.56-.2,1,1,0,0,1,.349.072,1.476,1.476,0,0,1,.243.118l0,0a2.457,2.457,0,0,1,.415.289,4.165,4.165,0,0,1,1.588,3.206,2.4,2.4,0,0,1-.574,1.716.949.949,0,0,1-.43.2,1,1,0,0,1-.2.018,1.37,1.37,0,0,1-.333-.043c-.954-.241-.727-1.148-.591-1.69a2.017,2.017,0,0,0,.1-.722,2.031,2.031,0,0,0-.654-.934,3.058,3.058,0,0,1-.71-.91A1,1,0,0,1,83.9,15.21Z"
                                          data-name="Path 9118"
                                          fill="none"
                                          id="Path_9118" transform="translate(-74.826 -12.369)"/>
                                    <path d="M88.345,23.87A6.147,6.147,0,0,1,86.479,25.7a6.405,6.405,0,0,0-1.558,1.4,1.627,1.627,0,0,0-.377.846,1.266,1.266,0,0,1-.161.713.7.7,0,0,1-.576.277c-.567.025-3.139.025-3.681,0-.63-.038-.706-.29-.719-.832a1.646,1.646,0,0,0-.366-1.008,3.772,3.772,0,0,0-.794-.819c-3.038-2.572-3.971-5.471-2.849-8.849a7.029,7.029,0,0,1,6.568-4.942,8.462,8.462,0,0,1,1.135.038,6.9,6.9,0,0,1,5.471,3.757A8.1,8.1,0,0,1,88.345,23.87Z"
                                          data-name="Path 9119"
                                          fill="#7fd1d8"
                                          id="Path_9119" transform="translate(-74.94 -12.482)"/>
                                    <path d="M85.358,18.264a4.165,4.165,0,0,0-1.59-3.206,2.317,2.317,0,0,0-.415-.289l0,0a1.4,1.4,0,0,0-.243-.12,1.065,1.065,0,0,0-.349-.072.83.83,0,0,0-.56.2,1,1,0,0,0-.233,1.118,3.054,3.054,0,0,0,.708.91,2.028,2.028,0,0,1,.654.933,2.024,2.024,0,0,1-.1.724c-.136.542-.363,1.45.591,1.689a1.376,1.376,0,0,0,.334.044,1.1,1.1,0,0,0,.2-.018.973.973,0,0,0,.431-.2A2.417,2.417,0,0,0,85.358,18.264Z"
                                          data-name="Path 9120"
                                          fill="#badfed"
                                          id="Path_9120" transform="translate(-73.129 -11.937)"/>
                                    <path d="M84.754,20.336a.972.972,0,0,0-.639-.61h0a1.09,1.09,0,0,0-1.3.538A.812.812,0,0,0,83,21.359a1.07,1.07,0,0,0,.862.211,1.185,1.185,0,0,0,.577-.29l.01-.008c.013-.011.021-.024.034-.035a.968.968,0,0,0,.306-.724A.805.805,0,0,0,84.754,20.336Z"
                                          data-name="Path 9121"
                                          fill="#badfed"
                                          id="Path_9121" transform="translate(-72.923 -10.611)"/>
                                </g>
                            </g>
                            <path d="M83.343,25.448a2.737,2.737,0,0,1-2.124.671c-1.537-.021-2.244-.221-2.618-.706S83.343,25.448,83.343,25.448Z"
                                  data-name="Path 9122"
                                  fill="#badfed"
                                  id="Path_9122" transform="translate(-73.991 -9.166)"/>
                        </g>
                    </g>
                    <text fill="#c5cbcd" font-family="ALKSanet, ALK Sanet" font-size="12" id="ნაბიჯი"
                          transform="translate(50 220)">
                        <tspan x="0" y="0">ნაბიჯი</tspan>
                    </text>
                    <text fill="#c5cbcd" font-family="ALKSanet, ALK Sanet" font-size="12" id="სავარჯიშო"
                          transform="translate(37 336)">
                        <tspan x="0" y="0">სავარჯიშო</tspan>
                    </text>
                    <text fill="#c5cbcd" font-family="ALKSanet, ALK Sanet" font-size="12" id="მინიშნება"
                          transform="translate(40 442)">
                        <tspan x="0" y="0">მინიშნება</tspan>
                    </text>
                    <text data-name="შუალედური
                            დავალება" fill="#c5cbcd" font-family="ALKSanet, ALK Sanet" font-size="12"
                          id="შუალედური_დავალება"
                          transform="translate(70 549)">
                        <tspan x="-35.344" y="0">შუალედური</tspan>
                        <tspan x="-30.636" y="12">დავალება</tspan>
                    </text>
                    <text data-name="კომპლექსური
                            დავალება" fill="#c5cbcd" font-family="ALKSanet, ALK Sanet" font-size="12"
                          id="კომპლექსური_დავალება"
                          transform="translate(70 668)">
                        <tspan x="-42.015" y="0">კომპლექსური</tspan>
                        <tspan x="-30.636" y="12">დავალება</tspan>
                    </text>
                </g>
            </svg>
    `,
});

let leftNav = new Vue({
    el: '#leftNav',
    data: {

    }
})