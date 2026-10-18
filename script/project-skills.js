const skillToggles = [...document.querySelectorAll('.project-skills-toggle')];
const skillPanels = [...document.querySelectorAll('.project-skills-panel')];
const products = document.querySelector('#products');

skillPanels.forEach((panel, index) => {
  panel.id = `project-skills-${index + 1}`;
});

const controlledPanels = skillPanels.map((panel) => panel.id).join(' ');

skillToggles.forEach((button) => {
  button.setAttribute('aria-controls', controlledPanels);
  button.addEventListener('click', () => {
    const showSkills = button.getAttribute('aria-expanded') !== 'true';
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    skillPanels.forEach((panel) => {
      panel.style.height = `${panel.getBoundingClientRect().height}px`;
    });
    skillPanels[0].offsetHeight;

    products.classList.toggle('skills-expanded', showSkills);

    skillPanels.forEach((panel) => {
      panel.inert = !showSkills;
      panel.setAttribute('aria-hidden', String(!showSkills));
      panel.style.height = showSkills
        ? `${panel.scrollHeight}px`
        : '0px';

      if (showSkills && reduceMotion) {
        panel.style.height = 'auto';
      }
    });

    skillToggles.forEach((toggle) => {
      toggle.setAttribute('aria-expanded', String(showSkills));
      toggle.setAttribute('aria-label', `${showSkills ? 'Hide' : 'Show'} skills for all projects`);
      toggle.textContent = showSkills ? '×' : '…';
    });
  });
});

skillPanels.forEach((panel) => {
  panel.addEventListener('transitionend', (event) => {
    if (event.propertyName === 'height' && products.classList.contains('skills-expanded')) {
      panel.style.height = 'auto';
    }
  });
});
