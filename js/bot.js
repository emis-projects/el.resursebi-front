var loc = window.location
var formData = $("#formData");
var msgInput = $("#chatSend");
let getTag = document.getElementById("chat_fullscreen");
let botImg = null;


// check if value is ""
$(msgInput).keyup(function () {
    if ($(this).val().length !== 0) {
        $('#sendMessage').removeAttr('disabled');
    } else {
        $('#sendMessage').attr('disabled', 'disabled')
    }
})


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



// bot message UI
function sendMessageFromBot(res) {
    let div = document.createElement('div');
    $(div).addClass('chat_msg_item chat_msg_item_admin');

    $(div).append(`<div class="chat_avatar"><img src='${botImg}' alt="My image"></div>`);

    let text = document.createElement('span');
    let a = document.createElement('a');

    $(text).addClass('chat_msg_item-text');
    $(text).text('')


    res.forEach(function(w){
        console.log(w);

        var img = document.createElement('img');
        
        if (w.type == 0) {
            $(text).append(" " + w.text);
            $(div).append(text)


        } else if(w.type == 2){
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
            div1.classList.add('voice__maile');

            var div2 = document.createElement('div')
            div2.className = "voice__mail__child flex align-items-center";

            var img = document.createElement('img');
            img.setAttribute('data-voice', '');
            img.setAttribute('id', 'play-pause-btn');
            img.setAttribute('src', '/img/icons/play-solid.svg');
            img.classList.add('voice-mail-play')
            
            div1.appendChild(div2);
            div2.appendChild(img);

            $(div).append(div1)

            $(img).click((e) => {
                if(e.target.getAttribute('class') == "voice-mail-play"){
                    $(img).attr('src', '/img/icons/pause-solid.svg')
                    $(img).removeClass('voice-mail-play')
                    $(img).addClass('voice-mail-pause')
                    $(img).attr('data-voice', w.url)
                    dynamicEvent(w.url, img);
                    handleLoadComplete()

                } else if(e.target.getAttribute('class') == "voice-mail-pause"){
                    handleLoadstop()
                    $(img).removeClass('voice-mail-pause')
                    $(img).addClass('voice-mail-play')
                    $(img).attr('src', '/img/icons/play-solid.svg')
                    $(img).removeAttr('data-voice')
                }
            })


        
        } else if (w.type == 1) {
            $(a).addClass('image-popup-no-margins')
            $(a).attr('href', w.url);
            $(img).attr('src', w.url);
            $(img).attr('style', 'width: 100%');
            $(a).append(img);
            $(div).append(a);

        } else if (w.type == 6) {
            $(text).append(" " + w.text);
            $(div).append(text)
            var btndiv = document.createElement('div');

            btndiv.classList.add('chat_msg_item-buttons')

            w.replies.forEach(w => {
                var btn = document.createElement('button');

                btn.innerText = w.title;

                btndiv.appendChild(btn)
            })

            $(div).append(btndiv);
        }

        $(getTag).scrollTop($(getTag)[0].scrollHeight)
    })

    $(div).appendTo(getTag)
    $(getTag).scrollTop($(getTag)[0].scrollHeight)

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
}


$(document).on("click", ".chat_msg_item-buttons button", function (e) {
    var btnText = e.target.innerText;

    $.ajax({
        type: "POST",
        url: 'https://e4082a31.ngrok.io/WCAPI',
        data: JSON.stringify({
            "message": btnText,
            "botid": $('html').attr('data-botid')
        }),
        success: function (result) {
            let res = JSON.parse(result);

            sendMessageFromBot(res)
        },
        dataType: 'json',
        contentType: 'application/json'
    })

    sendMessageFromUser(btnText)

    $(getTag).scrollTop($(getTag)[0].scrollHeight)
});


$(document).on("click", ".image-popup-no-margins", function (e) {
    e.preventDefault();
    
    $(this).magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
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


function sendMessage(e) {
    e.preventDefault();

    let msgText = msgInput.val();

    sendMessageFromUser(msgText);

    $.ajax({
        type: "POST",
        url: 'https://e4082a31.ngrok.io/WCAPI',
        data: JSON.stringify({
            "message": msgText,
            "botid": $('html').attr('data-botid')
        }),
        success: function (result) {
            let res = JSON.parse(result);

            console.log(res);

            sendMessageFromBot(res)
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