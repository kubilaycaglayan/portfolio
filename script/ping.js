let result;
const classNamesOfProjectsWillBeWokenUp = [
  'project1',
  'project2',
  'project3',
  'project4',
  'project6',
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

const attachCountDownMessage = function(element) {
  let count = 30;
  const countDown = setInterval(() => {
    element.title = `Firing up Heroku Dynos...(~${count}s)`
    if (count === 0) {
      element.title = `Firing up Heroku Dynos...(soon)`
      clearInterval(countDown)
    }
    count -= 1
  }, 1000)
  return countDown
}

const addSpinner = function(project) {
  const spinner = document.createElement('i')
  spinner.className = 'spinner fas fa-sync-alt'
  spinner.style.color = project.spinnerColor
  const countDown = attachCountDownMessage(spinner)
  project.linkContainer.append(spinner)
  return {
    countDown
  }
}

const removeSpinner = function(project) {
  const spinnerIcon = document.querySelector(`.${project.projectClassName} .spinner`)
  clearInterval(project.countDown)
  spinnerIcon.remove()
}

const wakeUp = async function wakeUp(project) {
  project.countDown = addSpinner(project)
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