const loading = document.getElementsByClassName('loading')[0];

window.onload = () => {
  console.log('yüklendik miiiiiiiiiiiiiiiii')
  loading.className = 'loading fade-out';
  setTimeout(() => {
    loading.style.display = 'none'
  }, 1000)
}