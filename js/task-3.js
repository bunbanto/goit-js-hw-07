const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', () => {
  const trimInput = textInput.value.trim();
  output.textContent = trimInput ? trimInput : 'Anonymous';
});
