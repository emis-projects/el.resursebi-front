Vue.component('appBot', {
  props: {
    botShow: Boolean,
  },
  template: `
      <div class="fabs" :class="{'is-visible': botShow}">
          <transition name="slide">
                <div class="chat animated" :class="[{slideInRight : botShow}, {slideOutRight: !botShow}]" v-show="botShow">
                  <div class="chat_header">
                    <div class="chat_head">Chat</div>
                  </div>
                  <div id="chat_fullscreen" class="chat_conversion chat_converse"></div>
                    <form id="formData">
                        <input autocomplete="off" id="chatSend" type="text" name="chat_message" placeholder="Send a message"
                          class="chat_field chat_message">
                        <button id="sendMessage" type="submit" class="send__mail"
                          style="outline: none; border: 0; background: transparent; display: inline-block; vertical-align: middle; fill: #bbb; cursor: pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                            <path d="M0 0h24v24H0z" fill="none" /></svg>
                        </button>
                    </form>
                </div>
          </transition>
          <div @click="botShow = !botShow"  id="prime" class="fab" :class="{'is-float is-visible' : botShow}">
                <i class="prime zmdi" :class="[{'zmdi-close is-active is-visible' : botShow}, {'zmdi-comment-outline': !botShow}]"></i>
          </div>
      </div>
    `,
});

var bot = new Vue({
  el: '#chatBot',
  data: {
    show: false,
    userText: ''
  }
});

