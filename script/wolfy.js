const letterI = document.getElementById('i-letter');
const wolfy = document.getElementById('wolf-overlay');
let timeOut;

const countTo10SecondsAndRunCallBack = (callback) => {
  timeOut = setTimeout(() => {
    callback();
    addMouseMoveEvent();
  }, 1000);
};

letterI.addEventListener('mouseover', () => {
  countTo10SecondsAndRunCallBack(showWolfy);
});

const onMouseOut = () => {
  onClearTimeout();
};

const addMouseOutEvent = () => {
  letterI.addEventListener('mouseout', onMouseOut);
}
addMouseOutEvent();

const cancelMouseOutEvent = () => {
  letterI.removeEventListener('mouseout', onMouseOut);
};

document.addEventListener('click', () => {
  onClearTimeout();
  hideWolfy();
});

const hideWolfy = () => {
  wolfy.style.display = 'none';
};

const showWolfy = () => {
  wolfy.style.display = 'block';
};

const onMouseMove = () => {
  onClearTimeout();
  hideWolfy();
  removeMouseMoveEvent();
};

const addMouseMoveEvent = () => {
  document.addEventListener('mousemove', onMouseMove);
};

const removeMouseMoveEvent = () => {
  document.removeEventListener('mousemove', onMouseMove);
};

const onClearTimeout = () => {
  clearTimeout(timeOut);
  addMouseOutEvent();
};
