Vue.component('appBot', {
    data() {
        return {
            botShow: false,
            active_el: null
        }
    },
    methods: {
      activeBg(val){
          this.active_el = val;
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
                  <div class="chat_header">
                    <div class="head_line"></div>
                    <div class="chat_head"></div>
                  </div>
                  <div id="chat_fullscreen" class="chat_conversion chat_converse">
                        <div class="bots_logo_box d-flex justify-content-around align-items-center">
                            <div data-botId="2320" class="logo_box" @click="activeBg(1)" :class="{logo_box_active : active_el === 1}">
                                <div class="logo_box-nature"></div>
                            </div>
                            <div data-botId="2288" class="logo_box" @click="activeBg(2)" :class="{logo_box_active : active_el === 2}">
                                <div class="logo_box-It"></div>
                            </div>
                            <div data-botId="2292" class="logo_box" @click="activeBg(3)" :class="{logo_box_active : active_el === 3}">
                                <div class="logo_box-music"></div>
                            </div>
                            <div data-botId="2318" class="logo_box" @click="activeBg(4)" :class="{logo_box_active : active_el === 4}">
                                <div class="logo_box-art"></div>
                            </div>
                        </div>
                  </div>
                    <form id="formData" class="d-flex align-items-center">
                        <input autocomplete="off" id="chatSend" type="text" name="chat_message" placeholder="კითხე არ მოგერიდოს"
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