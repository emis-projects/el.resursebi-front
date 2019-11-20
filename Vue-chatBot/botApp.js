Vue.component('appBot', {
  methods: {
    botDisplay() {
      toggleFab();
    }
  },
  template: `
      <div class="fabs">
          <div class="chat">
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
          <div @click="botDisplay" id="prime" class="fab"><i class="prime zmdi zmdi-comment-outline"></i></div>
      </div>
    `,
})

var bot = new Vue({
  el: '#chatBot',
  data: {
    show: true
  }

});

//Toggle chat and links
function toggleFab() {
  $('.prime').toggleClass('zmdi-comment-outline');
  $('.prime').toggleClass('zmdi-close');
  $('.prime').toggleClass('is-active');
  $('.prime').toggleClass('is-visible');
  $('#prime').toggleClass('is-float');
  $('.chat').toggleClass('is-visible');
  $('.fab').toggleClass('is-visible');
  showchat();
}



$('#chat_fullscreen_loader').click(function (e) {
  $('.fullscreen').toggleClass('zmdi-window-maximize');
  $('.fullscreen').toggleClass('zmdi-window-restore');
  $('.chat').toggleClass('chat_fullscreen');
  $('.fab').toggleClass('is-hide');
  $('.header_img').toggleClass('change_img');
  $('.img_container').toggleClass('change_img');
  $('.chat_header').toggleClass('chat_header2');
  $('.fab_field').toggleClass('fab_field2');
  $('.chat_converse').toggleClass('chat_converse2');

});


function showchat() {
  $('#chat_converse').css('display', 'none');
  $('#chat_body').css('display', 'none');
  $('#chat_form').css('display', 'none');
  $('.chat_login').css('display', 'none');
  $('.chat_fullscreen_loader').css('display', 'block');
  $('#chat_fullscreen').css('display', 'block');
}