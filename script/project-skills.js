const skillToggles = [...document.querySelectorAll('.project-skills-toggle')];
const skillPanels = [...document.querySelectorAll('.project-skills-panel')];
const products = document.querySelector('#products');
let focusAdjustmentId = 0;

skillPanels.forEach((panel, index) => {
  panel.id = `project-skills-${index + 1}`;
});

const controlledPanels = skillPanels.map((panel) => panel.id).join(' ');

function preserveClickedCard(card, anchorTop, reduceMotion) {
  const adjustmentId = ++focusAdjustmentId;
  const startedAt = performance.now();
  products.classList.add('preserve-card-focus');
  document.documentElement.classList.add('preserve-card-scroll');

  function adjustScroll(time) {
    if (adjustmentId !== focusAdjustmentId) return;

    const offset = card.getBoundingClientRect().top - anchorTop;
    if (Math.abs(offset) > 0.5) window.scrollBy(0, offset);

    if (!reduceMotion && time - startedAt < 520) {
      requestAnimationFrame(adjustScroll);
    } else {
      products.classList.remove('preserve-card-focus');
      document.documentElement.classList.remove('preserve-card-scroll');
    }
  }

  requestAnimationFrame(adjustScroll);
}

skillToggles.forEach((button) => {
  button.setAttribute('aria-controls', controlledPanels);
  button.addEventListener('click', () => {
    const showSkills = button.getAttribute('aria-expanded') !== 'true';
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const clickedCard = button.closest('.project-card');
    const clickedCardTop = clickedCard.getBoundingClientRect().top;

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

    preserveClickedCard(clickedCard, clickedCardTop, reduceMotion);
  });
});

skillPanels.forEach((panel) => {
  panel.addEventListener('transitionend', (event) => {
    if (event.propertyName === 'height' && products.classList.contains('skills-expanded')) {
      panel.style.height = 'auto';
    }
  });
});
