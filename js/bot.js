var loc = window.location
var formData = $("#formData");
var msgInput = $("#chatSend");
let getTag = document.getElementById("chat_fullscreen");
let botImgs = document.querySelectorAll('.logo_box');
let botImg = null;
var userId = getCookie("user_Id");


// check if value is ""
$(msgInput).keyup(function () {
    if ($(this).val().length !== 0) {
        $('#sendMessage').removeAttr('disabled');
    } else {
        $('#sendMessage').attr('disabled', 'disabled')
    }
})


var botImgsArray = [];
for(var i = 0; i < botImgs.length; i++ ){
    botImgsArray.push(botImgs[i])
}

botImgsArray.forEach(w => {
    w.addEventListener('click', (e) => {
        let attr = e.target.getAttribute('data-botid');

        document.querySelector('html').setAttribute('data-botid', attr)

        $('#chat_fullscreen .chat_msg_item').remove()

        getBotImage()
    })
})

let htmlAttr = $('html').attr("data-botid");


function getBotImage() {
    // bot image
    if($('html').attr('data-botid') == '2318'){
        botImg = '/img/icons/xelovnebabot.png'

    } else if($('html').attr('data-botid') == '2320'){
        botImg = '/img/icons/bunebabot.png'

    } else if($('html').attr('data-botid') == '2292'){
        botImg = '/img/icons/musikabot.png'

    } else if($('html').attr('data-botid') == '2288'){
        botImg = '/img/icons/komp-mecnierebot.png'
    }
}



// ეს კოდი ქუქიში წერს user_Id -ს მომხმარებელი როგორცკი შემოდის საიტზე ქუქიში იწერება მომხმარებლის IP და აიპზე მიწერილი რენდომი
// როცა მომხმარებელი ლოგინდება ქუქის ვასუფთავებ და ქუქიში იწერება მომხმარებლის ID
// ეს ყველაფერი მაქვს ცალკე ფაილში და ისე მაქვს ლეიაუთში შეტანილი მნიშვნელობა არ არვს ეს კოდი სად იქნება მთავარია სანამ ვებჩატში შევა მანამ იყოს ჩაწერილი
$(document).ready(function () {
    // bot image
    getBotImage()


    var LogInUserId = $('#LogInUserId').val(); // ეს იჭერს იუზერ აიდს

    //თუ ცარიელია ვწერ იპის და რენდომს
    if (LogInUserId == "") {

        var cookieValue = getCookie("user_Id");

        function getIPFunction() {
            // თუ ქუქი ცარიელია
            if (cookieValue == "") {

                //რენდომი
                var rendomnamber = Math.floor(Math.random() * 10000 + 1);
                // მომხმარებლის Ip
                $.getJSON("https://jsonip.com/?callback=?", function (data) {
                    userId = data.ip + rendomnamber;
                    document.cookie = "user_Id=" + userId; //წერს ქუქიაში
                });
            }

        }
        getIPFunction();

    }
    // ვებჩატი სადაც იუზერი არ არის დალოგინებული იმ ვიუში ლეიაუთი არ ჩანს ამიტო ვერ დაინახავს იმ თეგს საიდანაც აიდს ვიღებ
    // სწორედ ამიტომ ვამჯობინე ამ კოდის ცალკე ფაილში გატანა რადგან შემდეგ შემომეტანა ChatBot კონტროლერის Chat მეთოდის ვიუში
    else if (LogInUserId === undefined) {

        var cookie = getCookie("user_Id");

        function getIPFunction() {
            // თუ ქუქი ცარიელია
            if (cookie == "") {

                //რენდომი
                var rend = Math.floor(Math.random() * 10000 + 1);
                // მომხმარებლის Ip
                $.getJSON("https://jsonip.com/?callback=?", function (d) {
                    userId = d.ip + rend;
                    document.cookie = "user_Id=" + userId; //წერს ქუქიაში
                });
            }

        }
        getIPFunction();
    } else {

        var cookie = getCookie("user_Id");

        // აქ ვამოწმებ თუ ქუქიაში მნიშვნელბის რაოდენობა მეტი იქნება 10-ზე ანუ არ არის ID თუ უკვე აიდი წერია თავიდან აღარ მიანიჭებს
        if (cookie.length > 10) {
            // console.log(cookie.length);
            document.cookie = "user_Id=" + LogInUserId;
        }

    }
});



function messageTextes(w, div) {
    let text = document.createElement('span');
    $(text).addClass('chat_msg_item-text');
    $(text).append(w.text)

    $(div).append(text)
}


// bot message UI
function sendMessageFromBot(res) {


    var div = document.createElement('div');
    let a = document.createElement('a');

    $(div).addClass('chat_msg_item chat_msg_item_admin');
    $(div).append(`<div class="chat_avatar"><img src='${botImg}' alt="My image"></div>`);

    res.forEach(function(w){

        if (w.type == 0) {
            messageTextes(w, div)

        } else if(w.type == 1){
            // ფოტოების გახსნა
            // console.log(w);

            let img = document.createElement('img');
            let a = document.createElement('a');

            $(a).addClass('image-popup-no-margins')
            $(a).attr('style', 'display: block; padding: 10px; box-shadow: 2px 2px 8px #7FD1D866; border-radius: 20px 20px 20px 0px; margin-bottom: 5px;')
            $(a).attr('href', w.url);
            $(img).attr('src', w.url);
            $(img).attr('style', 'width: 100%; border-radius: 3px;');
            $(a).append(img);
            $(div).append(a);

        } else if(w.type == 2){
            // აუდიოები

            // sound js
            createjs.Sound.on("fileload", handleLoadComplete);
            createjs.Sound.alternateExtensions = ["wav"];

            function handleLoadComplete(event) {
                createjs.Sound.play("sound");
            }

            function handleLoadstop(event) {
                createjs.Sound.stop("sound");
            }


            var div1 = document.createElement('div');
            let parentSpan = document.createElement('span')
            div1.classList.add('voice__maile');

            parentSpan.classList.add('chat_msg_item-text')

            var div2 = document.createElement('div')
            div2.className = "voice__mail__child flex align-items-center";

            var img = document.createElement('img');
            img.setAttribute('data-voice', '');
            img.setAttribute('id', 'play-pause-btn');
            img.setAttribute('src', '/img/icons/play-solid.svg');
            img.classList.add('voice-mail-play')

            div1.appendChild(div2);
            div2.appendChild(img);
            parentSpan.appendChild(div1)

            $(div).append(parentSpan)

            $(img).click((e) => {
                if(e.target.getAttribute('class') == "voice-mail-play"){
                    $(img).attr('src', '/img/icons/pause-solid.svg')
                    $(img).removeClass('voice-mail-play')
                    $(img).addClass('voice-mail-pause')
                    $(img).attr('data-voice', w.url)
                    dynamicEvent(`https://cors-anywhere.herokuapp.com/${w.url}`, img);
                    handleLoadComplete()

                } else if(e.target.getAttribute('class') == "voice-mail-pause"){
                    handleLoadstop()
                    $(img).removeClass('voice-mail-pause')
                    $(img).addClass('voice-mail-play')
                    $(img).attr('src', '/img/icons/play-solid.svg')
                    $(img).removeAttr('data-voice')
                }
            })


        } else if(w.type == 3){
            // ლინკები
 
            let a = document.createElement('a');
            $(a).attr('href', w.url)
            $(a).attr('class', "chat_msg_item-text")
            $(a).text(w.text)
            $(a).attr('target', '_blank')
            $(div).append(a)

        } else if(w.type == 4){
            let a = document.createElement('a');
            $(a).attr('href', w.url)
            $(a).attr('class', "chat_msg_item-text")
            $(a).text('ვიდეო')
            $(a).attr('target', '_blank')
            $(div).append(a)


        } else if(w.type == 5){
            messageTextes(w, div)

            type5Functionaly(w, div)

        } else if (w.type == 6) {
            // ღილაკები

            messageTextes(w, div)

            var btndiv = document.createElement('div');

            btndiv.classList.add('chat_msg_item-buttons')

            w.replies.forEach(w => {
                var btn = document.createElement('button');

                btn.innerText = w.title;

                btn.setAttribute('data-text', w.title)

                btndiv.appendChild(btn)
            })

            $(div).append(btndiv);
        }

        $(getTag).append(div)
    })

    // $(div).appendTo(getTag)
    $(getTag).scrollTop($(getTag)[0].scrollHeight)

    //dark_mode
    var theme = localStorage.getItem("theme");
    var chat_msg_item_admin = document.getElementsByClassName('chat_msg_item_admin');
    if (theme == "darck") {
        for (let i = 0; i < chat_msg_item_admin.length; i++) {
            if (chat_msg_item_admin[i]) {
              for(let j=0; j<3; j++){
                if(chat_msg_item_admin[i].children[j] && chat_msg_item_admin[i].children[j].classList.contains('chat_msg_item-text')){
                  chat_msg_item_admin[i].children[j].classList.add("newDesign_subject_question_item-title_black_P");
                }
              }
            }
          }
    }

}

function dynamicEvent(url, img) {
    img.setAttribute('data-voice', url)
    createjs.Sound.registerSound({src:`${img.getAttribute('data-voice')}`, id:"sound"});
}


// user message ui
function sendMessageFromUser(text) {
    let div = document.createElement('div');
    let span = document.createElement('span');

    $(div).addClass('chat_msg_item chat_msg_item_user');
    $(span).addClass('chat_msg_item-text');
    $(span).append(text)
    $(div).append(span);
    getTag.append(div);

    $(getTag).scrollTop($(getTag)[0].scrollHeight)


    //dark_mode
    var theme = localStorage.getItem("theme");
    var chat_msg_item_user = document.getElementsByClassName('chat_msg_item_user');
    if (theme == "darck") {
        for (let i = 0; i < chat_msg_item_user.length; i++) {
            if (chat_msg_item_user[i]) {
              chat_msg_item_user[i].children[0].classList.add("newDesign_subject_question_item-title_black_P");
            }
          }
    }
}


$(document).on("click", ".chat_msg_item-buttons button", function (e) {
    $(getTag).scrollTop($(getTag)[0].scrollHeight)
    var btnText = e.target.getAttribute('data-text')

    sendMessageFromUser(btnText)

    messangerTyping()

    $.ajax({
        type: "POST",
        url: 'https://apianimachatbotics.xyz/WCAPI',
        data: JSON.stringify({
            "message": btnText,
            "userId": userId,
            "botid": $('html').attr('data-botid')
        }),
        success: function (result) {
            $('#typing__animation').remove()

            // console.log(JSON.parse(result));

            generateQuoteText(result)

            sendMessageFromBot(generateQuoteText(result))
        },
        dataType: 'json',
        contentType: 'application/json'
    })


    $(getTag).scrollTop($(getTag)[0].scrollHeight)
});



$(document).on("click", ".image-popup-no-margins", function (e) {
    e.preventDefault();

    $(this).magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: true,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });
});


function generateQuoteText(result){
    let res = JSON.parse(result)
            
    let newArray = [];
    let newObj = {}

    res.map((w, i) => {
        if(w.text){
            let x = w.text.replace(/¶/g, '"');

            newObj = {
                ...w,
                text: x
            }
        } else {
            newObj = {
                ...w
            }
        }

        newArray.push(newObj)
    })

    // console.log(newArray)

    return newArray
}


function sendMessage(e) {
    e.preventDefault();

    let msgText = msgInput.val();

    sendMessageFromUser(msgText);

    messangerTyping()

    $.ajax({
        type: "POST",
        url: 'https://apianimachatbotics.xyz/WCAPI',
        data: JSON.stringify({
            "userId": userId,
            "message": msgText,
            "botid": $('html').attr('data-botid')
        }),

        success: function (result) {

            console.log(JSON.parse(result))
            
            $('#typing__animation').remove()
            
            generateQuoteText(result)

            sendMessageFromBot(generateQuoteText(result))

        },
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8'
    })

    $(msgInput).val("");
    $(getTag).scrollTop($(getTag)[0].scrollHeight)
}


$("#sendMessage").click(function (e) {
    sendMessage(e)
})


function messangerTyping(){
    let loading = `
        <div class="bubble-chat" id="typing__animation">
            <div class="container-circle">
                <div class="circle cc1" id="circle1"></div>
                <div class="circle cc2" id="circle2"></div>
                <div class="circle cc3" id="circle3"></div>
            </div>
        </div>
    `;


    $('#chat_fullscreen').append(loading)
    // setTimeout(() => {
    // }, 300)
}


$(document).on("click", ".phoneNumber", function (e) {
    e.preventDefault();

     if(e.target.classList.contains('phoneNumber')){
        let div = e.target;

        let clonedElement = $(div).clone().text();
    
        let text = $(div).text();
    
        let textArea  = document.createElement('textarea');
        textArea.width  = "1px"; 
        textArea.height = "1px";
        textArea.background =  "transparents" ;
        textArea.value = text;
        document.body.append(textArea);
        textArea.select();
        document.execCommand('copy');   //No i18n
        document.body.removeChild(textArea);
    
        e.target.innerText = "ტექსტი დაკოპირებულია"
        $(e.target).removeClass('phoneNumber');
    
        setTimeout(()=> {
            $(e.target).text(clonedElement);
            $(e.target).addClass('phoneNumber');
        }, 1000)
    
     }
});


function type5Functionaly(data, maindiv){
    // type == 2 (string)
    // type == 1 phone
    // type == 0 link

    console.log(data)

    data.buttons.forEach(w => {
        if(w.type == 2){
            let div = document.createElement('div');
            let btn = document.createElement('button');
            div.classList.add('chat_msg_item-buttons');

            btn.innerText = w.title;

            if(w.payload == ""){
                btn.setAttribute('data-text', w.title)

            } else {
                btn.setAttribute('data-text', w.payload)
            }

            div.appendChild(btn);

            $(maindiv).append(div)

        
        } else if (w.type == 1){
            let div = document.createElement('div');
            let btn = document.createElement('button');
            btn.innerText = w.title;
            btn.classList.add('phoneNumber')
            btn.classList.add('phoneNumber--style')
            div.classList.add('phoneNumber__parent')
            // div.setAttribute('style', 'display: flex; justify-content: center');
            div.appendChild(btn);
            $(maindiv).append(div)

        } else if (w.type == 0){
            let div = document.createElement('div');
            let btn = document.createElement('a');
            div.classList.add('chat_msg_item-buttons');
            btn.innerText = w.title;
            btn.classList.add('phoneNumber--style')
            btn.setAttribute('style', 'display: inline-block')
            btn.setAttribute('href', w.payload);
            btn.setAttribute('target', '_blank');
            div.appendChild(btn);
            $(maindiv).append(div)
        }
    })
}






//ეს აბრუნებს ცუქიაში მნიშვნელობას
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    
    return "";
}


//წმენდს ქუქის
if(getCookie('user_Id') !== null) {
    document.cookie = 'user_Id' + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
}

