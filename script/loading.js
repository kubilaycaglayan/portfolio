const loading = document.getElementsByClassName('loading')[0];
const leftBar = document.getElementsByClassName('left-bar')[0];

function addAnimations() {
  let timeOut = 0;
  [...leftBar.children].forEach( function(element) {
    setTimeout(function() {
      element.className += ' swing-from-left'
    }, timeOut)
    timeOut += 200;
  })
};

function afterWindowLoad() {
  addAnimations()
  loading.className = 'loading fade-out';
  setTimeout(function() {
    loading.style.display = 'none'
  }, 1000)
};

window.addEventListener('load', function() {
  setTimeout( () => {
    afterWindowLoad()
  }, 0)
})

window.onload = function(){
  afterWindowLoad()
};