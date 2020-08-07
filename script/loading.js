const loading = document.getElementsByClassName('loading')[0];
const leftBar = document.getElementsByClassName('left-bar')[0];
const leftChildren = [];
for (let i = 0; i < leftBar.children.length; i += 1) {
  leftChildren.push(leftBar.children[i])
}

function addClassTimeOut(element, cName, timeOut) {
  setTimeout(
    function() {
      element.className += ' ' + cName
    }, timeOut
  )
}

function addAnimations() {
  let timeOut = 0;

  for (let i = 0; i < leftChildren.length; i += 1) {
    addClassTimeOut(leftChildren[i], 'swing-from-left', timeOut)
    timeOut += 200;
  }
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
