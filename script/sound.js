const src = require('../sound/kubilay.mp3');

const play = document.getElementById('play')
const voiceOver = new Audio(src)

play.addEventListener('click', () => {
  voiceOver.play();
})