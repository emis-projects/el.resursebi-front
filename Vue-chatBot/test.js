Vue.component("appBot", {
  props: {
    botId: String
  },
  data() {
    return {
      botShow: false,
      message: "",
      messages: []
    };
  },
  methods: {
    sendMessage(event, val) {
      if (
        (this.message !== undefined && this.message !== "") ||
        val !== undefined
      ) {
        console.log(val);
        let message = this.message;
        let dataIn = {
          message: this.message,
          botid: this.botId
        };
        if (val) {
          dataIn.message = val;
          message = val;
        }
        const data = {
          url: "https://e4082a31.ngrok.io/WCAPI",
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8"
          },
          data: dataIn
        };
        this.messages.push({
          message: message,
          author: "client",
          imgUrl: "./img/icons/user.png",
          alt: "user"
        });

        this.message = "";

        axios(data).then(response => {
          let text = "";
          let titles;
          const data = JSON.parse(response.data);
          // eslint-disable-next-line no-console
          console.log(response.data);
          data.forEach(elem => {
            text += elem.text + " ";
            if (elem.replies) {
              titles = elem.replies;
            }
          });
          this.messages.push({
            message: text,
            author: "server",
            imgUrl: "./img/icons/bot1.png ",
            alt: "bot",
            addItem: titles
          });
        });
      }
    }
  },
  watch: {
    messages() {
      this.$nextTick(() => {
        this.$refs.chatbox.scrollTop = this.$refs.chatbox.scrollHeight;
      });
    }
  },
  template: `
     <div :class="{'is-visible': botShow}" class="fabs">
        <transition name="slide">
            <div
                :class="[{slideInRight : botShow}, {slideOutRight: !botShow}]"
                class="chat animated"
                v-show="botShow"
            >
                <div class="chat_header">
                    <div class="chat_head">Chat</div>
                </div>
                <div class="chat_conversion chat_converse" id="chat_fullscreen">
                    <ul class="list-group massage_box" ref="chatbox">
                        <li
                          :class="message.author"
                          :key="indx"
                          class="list-group-item chat-box-list"
                          v-for="(message, indx) in messages"
                        >
                            <div class="box d-flex align-item-center">
                              <div class="img-box">
                                <img
                                  :alt="message.alt"
                                  :src="message.imgUrl"
                                  class="img-fluid"
                                />
                              </div>
                              <div class="d-flex flex-column">
                                <span>{{ message.message }}</span>
                                <div class="keyword d-flex flex-wrap justify-content-center" v-if="message.addItem">
                                  <span :key="indx" v-for="(item, indx) in message.addItem">
                                    <button
                                      @click="sendMessage($event, item.title)"
                                      class="btn btn-primary"
                                    >
                                      {{ item.title }}
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="formData">
                    <input
                      autocomplete="off"
                      class="chat_field chat_message"
                      id="chatSend"
                      name="chat_message"
                      placeholder="Send a message"
                      type="text"
                      v-model="message"
                      @keyup.enter="sendMessage"
                    />
                    <button
                      class="send__mail"
                      @click="sendMessage"
                      id="sendMessage"
                      style="outline: none; border: 0; background: transparent; display: inline-block; vertical-align: middle; fill: #bbb; cursor: pointer"
                      type="submit"
                    >
                    <svg height="21" viewBox="0 0 24 24" width="21" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                         <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    </button>
                </div>
            </div>
         </transition>
         <div
             :class="{'is-float is-visible' : botShow}"
             @click="botShow = !botShow"
             class="fab"
             id="prime"
         >
             <i :class="[{'zmdi-close is-active is-visible' : botShow}, {'zmdi-comment-outline': !botShow}]" class="prime zmdi"></i>
          </div>
     </div>
    `
});

var bot = new Vue({
  el: "#chatBot"
});
