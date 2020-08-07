const loading = document.getElementsByClassName('loading')[0];
const leftBar = document.getElementsByClassName('left-bar')[0];

function addAnimations() {
  try {
    let timeOut = 0;
    [...leftBar.children].forEach( function(element) {
      setTimeout(function() {
        element.className += ' swing-from-left'
      }, timeOut)
      timeOut += 200;
    })
  } catch (error) {
    // Handler
  }
};

function afterWindowLoad() {
  addAnimations()
  loading.className = 'loading fade-out';
  setTimeout(function() {
    loading.style.display = 'none'
  }, 1000)
};
loading.innerHTML = 'Trying to put something inside loading class'
window.addEventListener('load', function() {
  afterWindowLoad()
  loading.innerHTML = 'Onload Method iss working fine.'
})
