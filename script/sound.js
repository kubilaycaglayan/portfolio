const play = document.getElementById('play')
const voiceOver = new Audio('../sound/kubilay.mp3')

play.addEventListener('click', () => {
  voiceOver.play();
})