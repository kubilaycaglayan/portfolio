const playButton = document.getElementById('play')
const voiceOver = new Audio('../sound/kubilay.mp3')

playButton.addEventListener('click', () => {
  voiceOver.play();
})