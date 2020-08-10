const setColor = (function setColor() {
  const leftBar = document.getElementsByClassName("left-bar")[0];
  let position = 1;
  let lastPosition = 1;
  const rightFlow = document.getElementsByTagName("section");
  const lengthRightFlow = rightFlow.length;
  const colorForArticleSection = "#6C757D";

  const myUniversity = document.getElementsByClassName("my-university")[0];
  const mySchool = document.getElementsByClassName("my-school")[0];
  const socialMediaLinks = document.querySelectorAll(".social-media-links a");
  const skills = document.getElementsByClassName('skill');
  const iLetter = document.getElementById('i-letter');

  const sayHello = document.getElementsByClassName("say-hello")[0];

  const targetsColor = [myUniversity, mySchool, iLetter, ...socialMediaLinks];
  const targetsBackgroundColor = [sayHello, ...skills]

  const firstProject = document.getElementsByClassName("project1")[0];
  const firstProjectBadge = document.querySelector('.project-spesific-skills .badge');
  const firstProjectBadgeBGColor = window.getComputedStyle(firstProjectBadge).backgroundColor;

  const getVisibleColor = function getVisibleColor(index) {
    return window.getComputedStyle(rightFlow[index]).backgroundColor;
  };

  const getHeight = function getHeight() {
    return parseInt(window.getComputedStyle(firstProject).height);
  };

  const getVerticalPosition = function getVerticalPosition() {
    return window.pageYOffset;
  };

  const getPosition = function getPosition() {
    return Math.floor(getVerticalPosition() / getHeight());
  };

  const changeColor = function changeColor(targets, color) {
    targets.forEach((target) => {
      target.style.color = color;
    });
  }

  const colorChanger = function colorChanger(targets) {
    const position = getPosition();
    if (lengthRightFlow === position + 1) {
      changeColor(targets, colorForArticleSection)
    } else if (position === 0) {
      changeColor(targets, firstProjectBadgeBGColor)
    } else {
      const color = getVisibleColor(position);
      changeColor(targets, color)
    }
  };

  const changeBackground = function changeBackground(targets, color) {
    targets.forEach((target) => {
      target.style.backgroundColor = color;
    });
  }

  const backgroundChanger = function backgroundChanger(targets) {
    const position = getPosition();
    if (lengthRightFlow === position + 1) {
      changeBackground(targets, colorForArticleSection)
    } else if (position === 0) {
      changeBackground(targets, firstProjectBadgeBGColor)
    } else {
      const color = getVisibleColor(position);
      changeBackground(targets, color)
    }
  };

  const changeStyle = function changeStyle() {
    if (getPosition() !== lastPosition) {
      lastPosition = getPosition();
      colorChanger(targetsColor);
      backgroundChanger(targetsBackgroundColor);
    }
  };

  document.addEventListener("scroll", changeStyle);
})();