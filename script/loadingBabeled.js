"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var loading = document.getElementsByClassName('loading')[0];
var leftBar = document.getElementsByClassName('left-bar')[0];

function addAnimations() {
  var timeOut = 0;

  _toConsumableArray(leftBar.children).forEach(function (element) {
    setTimeout(function () {
      element.className += ' swing-from-left';
    }, timeOut);
    timeOut += 200;
  });
}

;

function afterWindowLoad() {
  addAnimations();
  loading.className = 'loading fade-out';
  setTimeout(function () {
    loading.style.display = 'none';
  }, 1000);
}

;
loading.innerHTML = 'Trying to put something inside loading class';
window.addEventListener('load', function () {
  afterWindowLoad();
  loading.innerHTML = 'Onload Method iss working fine.';
});