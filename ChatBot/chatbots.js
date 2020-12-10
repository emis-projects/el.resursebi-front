function addParamWithoutRefresh(childBotId) {
    var newurl = `${window.location.origin}${window.location.pathname}?botId=${childBotId}`;
    window.history.pushState({path: newurl},'',newurl);
    $('html').attr("data-botid", childBotId);
}


document.querySelectorAll('.selectBot').forEach(w => {
    w.addEventListener('click', () => {
        let child = w.querySelector('.selectedBotPath');
        let childBotId = child.getAttribute('data-botid');

        addParamWithoutRefresh(childBotId)

        $('.selectBot .selectedBotPath').attr('fill', 'transparent')
        child.setAttribute('fill', child.getAttribute('data-color'))

        document.getElementById('chat_fullscreen').innerHTML = ""
    })
})


document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    let botIdParam = urlParams.get('botId');

    if(!botIdParam) {
        botIdParam = 2288
    }

    console.log(botIdParam)

    addParamWithoutRefresh(botIdParam)

    document.querySelectorAll('.selectedBotPath').forEach(w => {
        if(w.getAttribute('data-botid') == botIdParam) {
            w.setAttribute('fill', w.getAttribute('data-color'))
            $('html').attr("data-botid", botIdParam);
        }
    })
})

