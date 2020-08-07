"use strict";

try {
  var addClassTimeOut = function addClassTimeOut(element, cName, timeOut) {
    setTimeout(function () {
      element.className += ' ' + cName;
    }, timeOut);
  };

  var addAnimations = function addAnimations() {
    var timeOut = 0;

    for (var _i = 0; _i < leftChildren.length; _i += 1) {
      addClassTimeOut(leftChildren[_i], 'swing-from-left', timeOut);
      timeOut += 200;
    }
  };

  var afterWindowLoad = function afterWindowLoad() {
    addAnimations();
    loading.className = 'loading fade-out';
    setTimeout(function () {
      loading.style.display = 'none';
    }, 1000);
  };

  var loading = document.getElementsByClassName('loading')[0];
  var leftBar = document.getElementsByClassName('left-bar')[0];
  var leftChildren = [];

  for (var i = 0; i < leftBar.children.length; i += 1) {
    leftChildren.push(leftBar.children[i]);
  }
  ;
  ;
  window.addEventListener('load', function () {
    setTimeout(function () {
      afterWindowLoad();
    }, 0);
  });
} catch (error) {
  //handler
}