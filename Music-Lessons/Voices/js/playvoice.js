var audioUrls = [
    '../game-voices/M-1366-14.wav',
    '../game-voices/M-1366-15.wav',
    '../game-voices/M-1366-16.wav',
    '../game-voices/M-1366-19.wav',
    '../game-voices/M-1366-20.wav',
    '../game-voices/M-1366-21.wav',

]


let audio = document.querySelector('.listen_btn').getAttribute('data-voice');

console.log(audio);

let voice = audioUrls.filter(w => w == audio)

var myaudio = new Audio(voice);

$('.listen_btn').click( () => myaudio.play() );