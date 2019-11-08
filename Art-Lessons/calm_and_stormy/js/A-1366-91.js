document.querySelector('.circle__4').addEventListener('mouseenter', () => {
    document.querySelector('.circle__2').setAttribute('style', 'transform: scale(1.2) translate(28%, 29%); transition: all 0.3s; transition-delay: 0.5s;')
})

document.querySelector('.circle__4').addEventListener('mouseout', () => {
    document.querySelector('.circle__2').removeAttribute('style')
})

document.querySelector('.circle__2').addEventListener('mouseenter', () => {
    document.querySelector('.circle__4').setAttribute('style', 'transform: scale(1.2) translate(70%, 52%); transition: all 0.3s; transition-delay: 0.5s;')
})

document.querySelector('.circle__2').addEventListener('mouseout', () => {
    document.querySelector('.circle__4').removeAttribute('style')
})




document.querySelector('.circle__1').addEventListener('mouseenter', () => {
    document.querySelector('.circle__6').setAttribute('style', 'transform: scale(1.2) translate(51%, 73%); transition: all 0.3s; transition-delay: 0.5s;')
})

document.querySelector('.circle__1').addEventListener('mouseout', () => {
    document.querySelector('.circle__6').removeAttribute('style')
})


document.querySelector('.circle__6').addEventListener('mouseenter', () => {
    document.querySelector('.circle__1').setAttribute('style', 'transform: scale(1.2) translate(46%, 12%); transition: all 0.3s; transition-delay: 0.5s;')
})

document.querySelector('.circle__6').addEventListener('mouseout', () => {
    document.querySelector('.circle__1').removeAttribute('style')
})




document.querySelector('.circle__3').addEventListener('mouseenter', () => {
    document.querySelector('.circle__5').setAttribute('style', 'transform: scale(1.2) translate(25%, 53%); transition: all 0.3s; transition-delay: 0.5s;')
})

document.querySelector('.circle__3').addEventListener('mouseout', () => {
    document.querySelector('.circle__5').removeAttribute('style')
})


document.querySelector('.circle__5').addEventListener('mouseenter', () => {
    document.querySelector('.circle__3').setAttribute('style', 'transform: scale(1.2) translate(73%, 30%); transition: all 0.3s; transition-delay: 0.5s;')
})

document.querySelector('.circle__5').addEventListener('mouseout', () => {
    document.querySelector('.circle__3').removeAttribute('style')
})