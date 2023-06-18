const mail = document.getElementById('email');
const animationTime = 1000;
let shouldBlockAction = false;

mail.addEventListener('click', function() {
  if (shouldBlockAction) {
    return;
  } else {
    shouldBlockAction = true;
    setTimeout(() => {
      shouldBlockAction = false;
    }, animationTime);
  }

  const ghostEmail = createHiddenTextAreaAndAttachToTheDOM(mail.innerText);
  ghostEmail.select();
  document.execCommand('copy');
  removeElementFromDOM(ghostEmail);

  changeInnerTextAndColorOfTheElementFor1SecondAndThenRevert(mail);
});

const changeInnerTextAndColorOfTheElementFor1SecondAndThenRevert = (element) => {
  const oldText = element.innerText;
  const oldColor = element.style.color;
  const interval = changeColorOfTheElementRandomly(element);
  const interval2 = addELetterToCopiedTextIntervally(element);

  setTimeout(() => {
    element.innerText = oldText;
    element.style.color = oldColor;
    clearInterval(interval);
    clearInterval(interval2);
  }, animationTime);
};

const changeColorOfTheElementRandomly = (element) => {
  return setInterval(() => {
    element.style.color = getRandomColor();
  }, 150);
};

const getRandomColor = () => {
  const red = getRandomNumberBetween(0, 255);
  const green = getRandomNumberBetween(0, 255);
  const blue = getRandomNumberBetween(0, 255);

  return `rgb(${red}, ${green}, ${blue})`;
};

const getRandomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const addELetterToCopiedTextIntervally = (element, text = "Copied!") => {
  element.innerText = text;

  return setInterval(() => {
    const newText = element.innerText.replace(/(c|C)opie/, 'Copiee');
    element.innerText = newText;
  }, 200);
};

const createHiddenTextAreaAndAttachToTheDOM = (text) => {
  const textArea = document.createElement('textarea');
  textArea.setAttribute('id', 'emailGhost');
  textArea.setAttribute('readonly', '');
  textArea.setAttribute('style', 'position: absolute; left: -9999px');
  textArea.value = text;
  document.body.appendChild(textArea);

  return textArea;
};

const removeElementFromDOM = (element) => {
  element.remove();
};
