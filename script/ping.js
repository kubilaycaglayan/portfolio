let result;
const classNamesOfProjectsWillBeWokenUp = [
  'project1',
  'project3',
]
const projectElements = function (projectClassName) {
  const href = document.querySelector(`.${projectClassName} .live-link`).href
  const linkContainer = document.querySelector(`.${projectClassName} .live-link`)
  const spinnerIcon = document.querySelector(`.${projectClassName} .spinner`)
  const spinnerColor = getComputedStyle(document.querySelector(`.${projectClassName} .project-spesific-skills .badge`)).backgroundColor

  return {
    href,
    linkContainer,
    spinnerIcon,
    spinnerColor,
    projectClassName,
  }
}

const projectObjects = function projectObjects() {
  const projectsObjectArray = []
  classNamesOfProjectsWillBeWokenUp.forEach((projectClassName) => {
    projectsObjectArray.push(projectElements(projectClassName))
  })
  return projectsObjectArray
}

const addSpinner = function(project) {
  const spinner = document.createElement('i')
  spinner.className = 'spinner fas fa-sync-alt'
  spinner.style.color = project.spinnerColor
  spinner.title = 'Firing up Heroku dynos...'
  project.linkContainer.append(spinner)
}

const removeSpinner = function(project) {
  const spinnerIcon = document.querySelector(`.${project.projectClassName} .spinner`)
  spinnerIcon.remove()
}

const wakeUp = async function wakeUp(project) {
  addSpinner(project)
  fetch(project.href, {
    mode: 'no-cors'
  })
  .then(function(response){
    removeSpinner(project)
  })
  .catch(function(err){
    removeSpinner(project)
  })
}

const startWakeUpProcess = function startWakeUpProcess() {
  projectObjects().forEach((project) => {
    wakeUp(project)
  });
}

window.addEventListener('load', startWakeUpProcess)