const setColor = (function setColor() {
  const leftBar = document.getElementsByClassName("left-bar")[0];
  let position = 1;
  let lastPosition = 1;
  const rightFlow = (rf = document.getElementsByTagName("section"));
  const lengthRightFlow = rightFlow.length;
  const colorForArticleSection = "#292929";

  const myUniversity = document.getElementsByClassName("my-university")[0];
  const mySchool = document.getElementsByClassName("my-school")[0];
  const socialMediaLinks = document.querySelectorAll(".social-media-links a");

  const sayHello = document.getElementsByClassName("say-hello")[0];

  const targets = [myUniversity, mySchool, ...socialMediaLinks];

  visibleProject = document.getElementsByClassName("project1")[0];

  visibleProjectBackgroundColor = window.getComputedStyle(visibleProject)
    .backgroundColor;

  const getVisibleColor = function getVisibleColor(index) {
    return window.getComputedStyle(rightFlow[index]).backgroundColor;
  };

  const getHeight = function getHeight() {
    return window.visualViewport.height;
  };

  const getVerticalPosition = function getVerticalPosition() {
    return window.pageYOffset;
  };

  const getPosition = function getPosition() {
    return Math.floor(getVerticalPosition() / getHeight());
  };

  const colorChanger = function colorChanger() {
    const position = getPosition();
    if (lengthRightFlow === position + 1) {
      targets.forEach((target) => {
        target.style.color = colorForArticleSection;
      });
    } else {
      const color = getVisibleColor(position);
      targets.forEach((target) => {
        target.style.color = color;
      });
    }
  };

  const backgroundChanger = function backgroundChanger() {
    const position = getPosition();
    if (lengthRightFlow === position + 1) {
      sayHello.style.backgroundColor = colorForArticleSection;
    } else {
      const color = getVisibleColor(position);
      sayHello.style.backgroundColor = color;
    }
  };

  const changeStyle = function changeStyle() {
    if (getPosition() !== lastPosition) {
      lastPosition = getPosition();
      colorChanger();
      backgroundChanger();
    }
  };

  document.addEventListener("scroll", changeStyle);
})();
