const pronunciation = new Audio('sound/kubilay.mp3');

document.querySelectorAll('[data-pronunciation]').forEach((button) => {
  button.addEventListener('click', () => {
    pronunciation.currentTime = 0;
    pronunciation.play().catch(() => {});
  });
});
