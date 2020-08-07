"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var loading = document.getElementsByClassName('loading')[0];
var leftBar = document.getElementsByClassName('left-bar')[0];
var leftChildren = [];
for (var i = 0; i < leftBar.children.length; i += 1) {
  leftChildren.push(leftBar.children[i]);
}

function setTrans(element, timeOut) {
  setTimeout(function () {
    console.log(element)
    element.style.opacity = '1'
    element.style.transform = 'translateX(0px)'
  }, timeOut)
}

function addAnimations() {
  try {
    var timeOut = 0;
    for (var i = 0; i < leftBar.children.length; i += 1) {
      setTrans(leftChildren[i], timeOut)
      timeOut += 200;
    }

  /*   _toConsumableArray(leftBar.).forEach(function (element) {
      setTimeout(function () {
        //element.className += ' swing-from-left';
        element.style.opacity = '1'
        element.style.transform = 'translateX(0px)'
      }, timeOut);
      timeOut += 200;

    });*/
  } catch (error) {
    // Handler
    var motto = document.getElementsByClassName('my-motto')[0]
    motto.innerHTML = error
  }

}

;

function afterWindowLoad() {
  addAnimations();
  loading.className = 'loading fade-out';
  setTimeout(function () {
    loading.style.display = 'none';
    var resultField = document.getElementsByClassName('overcapture text-white')[0]
    resultField.innerText = '';
    _toConsumableArray(leftBar.children).forEach(function (element) {
      resultField.innerText += element.className + ' --' + "\n";
    });
  }, 1000);
}

;

window.addEventListener('load', function () {
  afterWindowLoad();
});