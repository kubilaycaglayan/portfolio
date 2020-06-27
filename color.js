const setColor = (function setColor() {
  let leftBar = document.getElementsByClassName('left-bar')[0]
  let position = 1;
  let lastPosition = 1;
  let rightFlow = rf = document.getElementsByTagName('section');
  
  visibleProject = document.getElementsByClassName('project1')[0]
  
  visibleProjectBackgroundColor = window.getComputedStyle(visibleProject).backgroundColor
  
  const getVisibleColor = function getVisibleColor(index) {
    return window.getComputedStyle(rightFlow[index]).backgroundColor
  };
  
  const getHeight = function getHeight() {
    return window.visualViewport.height;
  }
  
  const getVerticalPosition = function getVerticalPosition() {
    return window.pageYOffset;
  };
  
  const getPosition = function getPosition() {
    return Math.floor(getVerticalPosition() / getHeight());
  };
  
  const setColor = function setColor() {
    if (getPosition() !== lastPosition) {
      lastPosition = getPosition();
      leftBar.style.backgroundColor = getVisibleColor(getPosition())
    }
  };
  
  document.addEventListener("scroll", setColor);
}());

