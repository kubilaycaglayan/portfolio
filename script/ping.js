"use strict";

var result;
var classNamesOfProjectsWillBeWokenUp = ['project1', 'project3'];

var projectElements = function projectElements(projectClassName) {
  var href = document.querySelector(".".concat(projectClassName, " .live-link")).href;
  var linkContainer = document.querySelector(".".concat(projectClassName, " .live-link"));
  var spinnerIcon = document.querySelector(".".concat(projectClassName, " .spinner"));
  var spinnerColor = getComputedStyle(document.querySelector(".".concat(projectClassName, " .project-spesific-skills .badge"))).backgroundColor;
  return {
    href: href,
    linkContainer: linkContainer,
    spinnerIcon: spinnerIcon,
    spinnerColor: spinnerColor,
    projectClassName: projectClassName
  };
};

var projectObjects = function projectObjects() {
  var projectsObjectArray = [];
  classNamesOfProjectsWillBeWokenUp.forEach(function (projectClassName) {
    projectsObjectArray.push(projectElements(projectClassName));
  });
  return projectsObjectArray;
};

var attachCountDownMessage = function attachCountDownMessage(element) {
  var count = 30;
  var countDown = setInterval(function () {
    element.title = "Firing up Heroku Dynos...(~".concat(count, "s)");

    if (count === 0) {
      element.title = "Firing up Heroku Dynos...(soon)";
      clearInterval(countDown);
    }

    count -= 1;
  }, 1000);
  return countDown;
};

var addSpinner = function addSpinner(project) {
  var spinner = document.createElement('i');
  spinner.className = 'spinner fas fa-sync-alt';
  spinner.style.color = project.spinnerColor;
  var countDown = attachCountDownMessage(spinner);
  project.linkContainer.append(spinner);
  return {
    countDown: countDown
  };
};

var removeSpinner = function removeSpinner(project) {
  var spinnerIcon = document.querySelector(".".concat(project.projectClassName, " .spinner"));
  clearInterval(project.countDown);
  spinnerIcon.remove();
};

var wakeUp = async function wakeUp(project) {
  project.countDown = addSpinner(project);
  fetch(project.href, {
    mode: 'no-cors'
  }).then(function (response) {
    removeSpinner(project);
  }).catch(function (err) {
    removeSpinner(project);
  });
};

var startWakeUpProcess = function startWakeUpProcess() {
  projectObjects().forEach(function (project) {
    wakeUp(project);
  });
};

window.addEventListener('load', startWakeUpProcess);
