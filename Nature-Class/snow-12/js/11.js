  let items = document.querySelectorAll('.n-12-11-answer-btn');

  var itemsArray = [];

  for(var i = 0; i < items.length; i++ ){
    itemsArray.push(items[i])
  }


  itemsArray.forEach(w => {
    w.addEventListener('click', () => {
        $('.n-12-11-answer-btn').removeAttr('style')

        if(w.getAttribute('data-answer') == "true"){
            w.setAttribute('style', 'background: #a2dd6f');

        } else {
            w.setAttribute('style', 'background: #dc6c85')
        }
    })
  })