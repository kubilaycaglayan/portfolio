const loading = document.getElementsByClassName('loading')[0];
const leftBar = document.getElementsByClassName('left-bar')[0];

function addAnimations() {
  let timeOut = 0;
  [...leftBar.children].forEach( (element) => {
    setTimeout(() => {
      element.className += ' swing-from-left'
    }, timeOut)
    timeOut += 200;
  })
};

window.onload = () => {
  addAnimations()
  loading.className = 'loading fade-out';
  setTimeout(() => {
    loading.style.display = 'none'
  }, 1000)
}