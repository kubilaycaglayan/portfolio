const copyButton = document.getElementById('email-copy');
const copyStatus = document.getElementById('copy-status');
let feedbackTimer;

function copyWithSelection(text) {
  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.appendChild(field);
  field.select();
  const copied = document.execCommand('copy');
  field.remove();
  if (!copied) throw new Error('Clipboard unavailable');
}

copyButton?.addEventListener('click', async () => {
  const email = copyButton.dataset.email;
  try {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(email);
      } catch {
        copyWithSelection(email);
      }
    } else {
      copyWithSelection(email);
    }
    copyStatus.textContent = '✓';
  } catch {
    copyStatus.textContent = '!';
  }
  clearTimeout(feedbackTimer);
  feedbackTimer = setTimeout(() => { copyStatus.textContent = ''; }, 2600);
});
